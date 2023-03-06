import React, { useContext } from 'react';
import AuthContext from "../context/authContext";
import { Route, Navigate, useNavigate, Outlet } from "react-router-dom";

const PrivateRoute = ({children}) => {
   const { isAuthenticated } = useContext(AuthContext);

   if (isAuthenticated ) {
      return children
    }

    return <Navigate to="/" />
};

export default PrivateRoute;