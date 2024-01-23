import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";

import OwnerDashboard from "../components/Dashboard/OwnerDashboard/OwnerDashboard";
import RenterDashboard from "../components/Dashboard/RenterDashboard/RenterDashboard";
import Dashboard from "../layout/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "/dashboard/ownerDashboard",
            element: <OwnerDashboard />,
          },
          {
            path: "/dashboard/renterDashboard",
            element: <RenterDashboard />,
          },
        ],
      },
    ],
  },
]);
