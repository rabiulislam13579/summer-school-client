import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading}=useContext(AuthContext);
    const location = useLocation();

    
    if(loading){
        return <span className="loading loading-dots loading-md"></span>

    }

    if(user){
        return children
    }
    else{
        return <Navigate state={{from: location}} to='/login' replace></Navigate>
    }

    return (
        <div>
            
        </div>
    );
};

export default PrivateRoute;