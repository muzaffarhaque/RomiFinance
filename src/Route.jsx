import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {Dashboard, ErrorPage, Home, Layout} from "./pages";
export default function Route() {
  const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement:<ErrorPage/>,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "/dashboard",
            element: <Dashboard />,
          },
        ],
      },
  ]);
  return <RouterProvider router={router} />;
}
