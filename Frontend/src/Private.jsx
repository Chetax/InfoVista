import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element: Element }) => {
  const userValue = localStorage.getItem("Cookie");

  if (userValue === "true") {
    return Element;
  } else {
    return <Navigate to="/signin" />;
  }
};

export default PrivateRoute;
