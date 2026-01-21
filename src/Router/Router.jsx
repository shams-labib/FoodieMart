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

import MyOrders from "../Pages/My Order/MyOrders";
import UsersManagement from "../Pages/UsersManagement/UsersManagement";
import PaymentHistory from "../Dashboard/PaymentHistory/PaymentHistory";
import MyProfile from "../Dashboard/Profile/MyProfile";
import AdminDashboard from "../Dashboard/AdminDashboard/AdminDashboard";
import DashboardHome from "../Dashboard/DashboardHome/DashboardHome";
import ContactUs from "../Pages/Contact Us/ContactUs";

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
        path: "/contact",
        Component: ContactUs,
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
      // Modified
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
        element: <ViewDetails />,
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
        Component: DashboardHome,
      },

      {
        path: "add-review",
        Component: AddReview,
      },
      {
        path: "profile",
        Component: MyProfile,
      },
      {
        path: "my-order",
        Component: MyOrders,
      },
      {
        path: "users-management",
        Component: UsersManagement,
      },
      {
        path: "payment-history",
        Component: PaymentHistory,
      },
      {
        path: "admin",
        Component: AdminDashboard,
      },
    ],
  },
]);

export default router;
