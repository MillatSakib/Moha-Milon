import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Router, RouterProvider, createBrowserRouter } from "react-router-dom";
import Nav from "./Nav.jsx";
import Login from "./Login.jsx";
import Register from "./Register.jsx";
import Home from "./Home.jsx";
import PrivateRoutes from "./routes/PrivateRoutes.jsx";
import Order from "./Order.jsx";
import AuthProvider from "./AuthProvider.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Nav></Nav>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/order",
        element: (
          <PrivateRoutes>
            <Order></Order>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
