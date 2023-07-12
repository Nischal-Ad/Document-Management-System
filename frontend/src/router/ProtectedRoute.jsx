import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ isAuth = false, nav, footer }) => {
  if (!isAuth) {
    return <Navigate to={"/"} replace={true} />;
  }

  return (
    <>
      {nav}
      <Outlet />
      {footer}
    </>
  );
};

export default ProtectedRoute;
