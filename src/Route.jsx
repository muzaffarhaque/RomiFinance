import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {Dashboard, ErrorPage, Home, Layout} from "./pages";
export default function Route() {
  const router = createBrowserRouter([
    {
        path: "/RomiFinance/",
        element: <Layout />,
        errorElement:<ErrorPage/>,
        children: [
          {
            path: "/RomiFinance/",
            element: <Home />,
          },
          {
            path: "/RomiFinance/dashboard",
            element: <Dashboard />,
          },
        ],
      },
  ]);
  return <RouterProvider router={router} />;
}
