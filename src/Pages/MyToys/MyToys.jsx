import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/authProvider';
// import { AuthContext } from '../../Providers/AuthProvider';


const MyToys = () => {
    const {user} = useContext(AuthContext);
    console.log('user: ',user.email);
    return (
        <div>
            <p>This is My TOys {user.email}</p>
        </div>
    );
};

export default MyToys;