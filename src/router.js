import React from "react";
import { createBrowserRouter, RouterProvider, Navigate, Route} from "react-router-dom";
import Home from './pages';
import Privat from './pages/privat';
import Login from "./pages/login";
//import Protected from "./protectedRoute";
import SignIn from "./pages/signIn";
import { AuthContextProvider } from "./context/AuthContext";


function PrivateRoute({ path, element }) {
  if (AuthContextProvider[0])  {
    return(
    <Route path={path} element={element} />
    )
  } else {
    <Navigate to="/login" replace />
  }
}


const router = createBrowserRouter([
    {
      path: "/",
      element:  <Home />,
    },
    {
      path: "/privat",
      element:  <PrivateRoute> 
                  <Privat /> 
                </PrivateRoute>,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signin",
      element: <SignIn />,
    },
  ]);

function Switch() {
    return (
      <RouterProvider router={router} />
    );
  }

export default Switch;

//<PrivateRoute> <Privat /> </PrivateRoute>