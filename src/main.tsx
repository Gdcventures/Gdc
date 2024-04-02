import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import OrderPage from "./views/OrderPage";
import "../index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorComp from "./components/ErrorComp";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorComp />,
    },
    {
        path: "/order-page",
        element: <OrderPage />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
