// import React from 'react';
import React, { useContext, useRef, useState } from 'react';
import {FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signInWithEmailAndPassword, signOut, sendPasswordResetEmail} from 'firebase/auth'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import app from "../../firebase/firebase.init";
import { AuthContext } from '../../Providers/AuthProvider';

const Login = () => {// useNavigate
    const navigate = useNavigate();

    //Load COntextapi

    const {signIn , loading} = useContext(AuthContext);

    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    console.log(from);


    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const emailRef = useRef();
    const [seePassword , setSeePassword] = useState(false);

    const [user , setUser] = useState(null);

    const auth  =  getAuth(app);
    const provider = new GoogleAuthProvider;
    const gitProvider =  new GithubAuthProvider();

    // const seePass = false;

    // LOGIN Handler

    const googleLoginHandler = () =>{
        signInWithPopup(auth , provider)
        .then(result =>{
             console.log('clicked----1');

            const logInUser = result.user;
            console.log(logInUser);
            setUser(logInUser)
            if(setUser){
                alert('succesfull logedIN');
            }
        })
        .catch(result =>{
            console.log(result.message)
        })
        console.log('clicked');
    }
    const githubLoginHandler =() =>{
        signInWithPopup(auth , gitProvider)
        .then(result => {
            const logInUser = result.user;
            console.log(logInUser);
            setUser(logInUser)
            if(setUser){
                alert('succesfull logedIN');
            }
        })
        .catch(result =>{
            console.log(result.message)
        })
    }

    const onSubmitLoginHandler= (event) =>{
        event.preventDefault();
        setSuccess('');
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email , password);

        signIn(email, password)
            .then(result => {
                const user  = result.user;
                setSuccess('User Login successfully');
                navigate(from, {replace: true});
                setUser(user)
                
            })
            .catch(error => {
                // console.error(error.code);
                setError(error.code);
            })
        }
    const signOutHndler =() =>{
        signOut(auth)
        .then(result =>{
            console.log('You Logout Successfully');
            setUser(null);
            console.log(user);
        })
        .catch(error =>{
            console.log(error.message);
            // console.log(user);
        })
    }



    //handleResetPassword 

    const handleResetPassword = event =>{
        // const email = event.target.email.value;
        const email = emailRef.current.value;//get the current email value using useRef hook
        if(!email){
            alert('Please Put Your Email!');
            return
        }
        console.log(email);
        
        sendPasswordResetEmail(auth, email)
        .then(result=>{
            alert('Check Your Email!');
        })
        .catch(error =>{
            alert(error.message)
        })
        
    }
    const onBlurhandeler = event =>{
        setSeePassword(true);
    }
    
    
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="container mx-auto hero-content flex-col lg:flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={onSubmitLoginHandler} className="card-body">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" name='email' ref={emailRef}className="input input-bordered" />
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" />
                            <label className="label">
                                <p>Not Registerd? <Link to={'/register'} className="label-text-alt link link-hover">PLease Register</Link></p>
                                <p className="label-text-alt link link-hover"  onClick={handleResetPassword}>Forgot password?</p>
                            </label>
                            <p className='text-warning'>{error}</p>
                            <p className='text-success'>{success}</p>
                            <input type="submit" value="Login"/>
                        </form>
                    </div>

                    {
                        user ? 
                        <button onClick={()=>signOutHndler()}>Sign Out</button>:
                        <div>
                            <button className='btn bg-blue-500 btn-ghost normal-case text-xl ml-2' onClick={()=>googleLoginHandler()}>Google Login</button>
                            <button className='btn bg-blue-500 btn-ghost normal-case text-xl ml-2' onClick={()=>githubLoginHandler()}>GitHub Login</button>
                        </div>

                    }
                </div>
            </div>

        </div>
    );
};

export default Login;