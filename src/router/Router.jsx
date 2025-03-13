import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layOut/MainLayout";
import React from 'react';
import Register from "../pages/Register";
import Home from "../pages/Home";
import DashboardLayout from "../layOut/DashboardLayout";
import AllUser from "../pages/Dashboard/Admin/AllUser";
import UserHome from "../pages/Dashboard/User/UserHome";
import Profile from "../components/Profile";

export const router = createBrowserRouter([
      {
            path: "/",
            element: <MainLayout />,
            children: [
                  {
                        path: "/",
                        element: <Home />
                  },
                  {
                        path: "/register",
                        element: <Register />
                  },
            ]

      },
      {
            path: "dashboard",
            element: <DashboardLayout />,
            children: [
                  {
                        path: "alluser",
                        element: <AllUser />
                  },
                  {
                        path: "userhome",
                        element: <UserHome />
                  },
                  {
                        path: "profile",
                        element: <Profile />
                  },
            ]
      }
])