import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Errorpage from "../Pages/Errorpage/Errorpage";
import Home from "../Components/Home/Home";
import Login from "../Firebase and Login/Login/Login";
import Register from "../Firebase and Login/Register/Register";
import AllReviews from "../Pages/All reviews/AllReviews";
import MyReviews from "../Pages/My Reviews/myReviews";
import AddReview from "../Profile Section/Add Review/AddReview";
import MyReviewPage from "../Profile Section/My Review/MyReview";
import PrivateRoute from "../Hooks/PrivateRoute/PrivateRoute";
import Update from "../Profile Section/My Review/Update";
import ViewDetails from "../Pages/ViewDetails/ViewDetails";

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
        path: "/allreveiws",
        element: <AllReviews></AllReviews>,
      },
      {
        path: "/add-review",
        element: (
          <PrivateRoute>
            <AddReview></AddReview>
          </PrivateRoute>
        ),
      },
      {
        path: "/myReview",
        element: (
          <PrivateRoute>
            <MyReviewPage></MyReviewPage>
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        element: <Update></Update>,
      },
      {
        path: "/viewDetails/:id",
        element: (
          <PrivateRoute>
            <ViewDetails></ViewDetails>
          </PrivateRoute>
        ),
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
