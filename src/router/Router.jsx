import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layOut/MainLayout";
import Login from "../pages/Login";
import React from 'react';
import Register from "../pages/Register";
import Home from "../pages/Home";

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
])