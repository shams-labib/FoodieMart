import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../Firebase and Login/Firebase content/Auth/AuthContext";

const instance = axios.create({
  baseURL: "https://assignment-10-gamma-three.vercel.app",
});

const useAxiosSecure = () => {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const interceptor = instance.interceptors.request.use(async (config) => {
      if (user) {
        const token = await user.getIdToken();
        config.headers.authorization = ` Bearer ${token}`;
      }
      return config;
    });
    return () => {
      instance.interceptors.request.eject(interceptor);
    };
  }, [user]);

  return instance;
};

export default useAxiosSecure;
