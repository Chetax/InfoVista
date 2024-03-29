import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useFirebase } from './Context/FirebaseContext';

const PrivateRoute = ({ element: Element }) => {
  const firebase = useFirebase();
  if( firebase.uservalue === true )
  return Element
  else 
    <Navigate to="/signin" />

};

export default PrivateRoute;