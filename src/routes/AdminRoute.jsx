import { Navigate, useLocation } from "react-router";
import UseAdmin from "../hooks/UseAdmin";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const [isAdmin, isAdminLoading] = UseAdmin();
    const location = useLocation();

    if(loading || isAdminLoading){
        return <progress className="progress w-56"></progress>
    }

    if (user && isAdmin) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default AdminRoute;