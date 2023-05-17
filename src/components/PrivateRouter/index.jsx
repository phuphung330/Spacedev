import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { PATH } from "../../config/path";
import { useAuth } from "../AuthContext";

function PrivateRouter({ redirect = "/" }) {
    const { user } = useAuth();
    if (!user) return <Navigate to={redirect} />;
    return <Outlet />;
}

export default PrivateRouter;
