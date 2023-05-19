import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.init';

export const AuthContext = createContext(null);
 
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    // const user = {displayName: 'tuhin'};
    const [user, setUser] = useState(null);
    
    // to handle loading 
    const [loading, setLoading] = useState(true)

    //GLobal Register
    const createUser = (email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //GLobal SignIn
    const signIn = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // GLobal Logout

    const logout = () =>{
        return signOut(auth)
    }

    // observe Auth state change 
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth , currentUser =>{
            console.log('auth state change', currentUser);
            setUser(currentUser);
            console.log(user);
            setLoading(false)
        });

        return () =>{
            unsubscribe();
        }
    },[])

    const authInfo = {
        createUser,
        signIn,
        logout,
        user,
        loading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;