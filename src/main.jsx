import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./Pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DetailMoviePage from "./Pages/DetailMoviePage";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <Home />,
  },
  {
    path: "/movie/:id",
    element: <DetailMoviePage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
