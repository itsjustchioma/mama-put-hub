import { Outlet, Navigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

const ProtectedRoutes = () => {
  const [auth, setAuth] = useState({ token: false });

  useEffect(() => {
    // Any necessary effect code
  }, []);

  // You can set the token to true when the user logs in
  const handleLogin = () => {
    setAuth({ token: true });
  };

  return auth.token ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
