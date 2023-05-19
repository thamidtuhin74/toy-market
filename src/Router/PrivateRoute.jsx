import React, { useContext } from 'react';
// import { useLocation } from 'react-router-dom';
// import { AuthContext } from '../Provider/authProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const PrivateRoute = ({children}) => {
    const  location = useLocation();
    console.log(location);

    const {user , loading} = useContext(AuthContext);
    if(loading){
        return <progress className="progress w-56"></progress>
    }

    return (
        <div>
            {
                user ? children : <Navigate to="/login" state={{from: location}} replace={true}></Navigate>
            }
            
        </div>
    
    );
};

export default PrivateRoute;