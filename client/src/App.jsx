import React from "react";
import "./App.scss";
import Dashboard from "./components/Dashboard/dashboard";
import Login from "./components/Login/login";
import Register from "./components/Register/register";

//Import React react Router dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Creating a Router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
