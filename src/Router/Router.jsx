// router.js
import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Errorpage from "../Pages/Errorpage/Errorpage";
import Home from "../Components/Home/Home";
import Login from "../Firebase and Login/Login/Login";
import Register from "../Firebase and Login/Register/Register";
import AllReviews from "../Pages/All reviews/AllReviews";
import AddReview from "../Profile Section/Add Review/AddReview";
import MyReviewPage from "../Profile Section/My Review/MyReview";
import PrivateRoute from "../Hooks/PrivateRoute/PrivateRoute";
import Update from "../Profile Section/My Review/Update";
import ViewDetails from "../Pages/ViewDetails/ViewDetails";
import CardData from "../Pages/MyFavouritesPage/CardData";
import DashboardLayout from "../Dashboard/DashboardLayout/DashboardLayout";
import DashboardHome from "../Dashboard/DashboardHome/DashboardHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Errorpage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "allreviews",
        element: <AllReviews />,
      },
      {
        path: "add-review",
        element: (
          <PrivateRoute>
            <AddReview />
          </PrivateRoute>
        ),
      },
      {
        path: "myReview",
        element: (
          <PrivateRoute>
            <MyReviewPage />
          </PrivateRoute>
        ),
      },
      {
        path: "update/:id",
        element: <Update />,
      },
      {
        path: "viewDetails/:id",
        element: (
          <PrivateRoute>
            <ViewDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "myFavouritePage",
        element: (
          <PrivateRoute>
            <CardData />
          </PrivateRoute>
        ),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },

  // DASHBOARD (Protected Layout)
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <DashboardHome />,
      },
      {
        path: "home",
        element: <DashboardHome />,
      },
    ],
  },
]);

export default router;
