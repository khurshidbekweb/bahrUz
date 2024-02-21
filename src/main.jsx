import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ToastContainer } from "react-toastify";
import {RouterProvider} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import  {router}  from "./utils/router.jsx";
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <App />
        <ToastContainer autoClose={2000} />
      </QueryClientProvider>
    </React.StrictMode>
  </RouterProvider>
);
