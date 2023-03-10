import React from "react";
import ReactDOM from "react-dom/client";
import { router } from "./components/router/router";
import { RouterProvider } from "react-router-dom";
import "./sass/main.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <React.StrictMode>
      <RouterProvider router={router} />
   </React.StrictMode>
);
