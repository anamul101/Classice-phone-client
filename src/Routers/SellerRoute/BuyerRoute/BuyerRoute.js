import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider";
import useBuyer from "../../../Hooks/useBuyer";


const BuyerRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const [isAdmin, isAdminLoading] = useBuyer(user?.email);
  const location = useLocation();
  if (loading || isAdminLoading) {
    return <progress className="progress w-56 mx-auto mt-20"></progress>;
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default BuyerRoute;
