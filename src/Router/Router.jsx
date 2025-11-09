import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Errorpage from "../Pages/Errorpage/Errorpage";
import Home from "../Components/Home/Home";
import MyProducts from "../Pages/MyProducts/MyProducts";
import Login from "../Firebase and Login/Login/Login";
import Register from "../Firebase and Login/Register/Register";
import AllReviews from "../Pages/All reviews/AllReviews";
import MyReviews from "../Pages/My Reviews/myReviews";

const router = createBrowserRouter([
  {
    element: <RootLayout></RootLayout>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/myProducts",
        element: <MyProducts></MyProducts>,
      },
      {
        path: "/allreveiws",
        element: <AllReviews></AllReviews>,
      },
      {
        path: "/myReview",
        element: <MyReviews></MyReviews>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
