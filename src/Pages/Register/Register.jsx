import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile } from "firebase/auth";
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
// import AuthContext from '../Provider/authProvider';
import app from '../../firebase/firebase.init';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from "../../Provider/authProvider";



const Register = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/login';
    const {user, createUser} = useContext(AuthContext);
    
    const auth = getAuth(app);

    const [newuser , setNewUser] = useState({});
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const onSubmitRegisterHandler = (event) =>{
        event.preventDefault();

        setError('');
        setSuccess('')
        const email = event.target.email.value;
        const password = event.target.password.value;
        const name = event.target.name.value;
        const url = event.target.ProfilePicUrl.value;

        console.log(email , password , name , url);

        if(!/(?=.{6,})/.test(password)){
            setError('Make sure password length should be 6 or more');
            return;

        }


        // createUser(email, password, name, url)
        createUserWithEmailAndPassword(auth, email, password, name, url)
        .then(result =>{
            const logInUser = result.user;
            console.log(logInUser);
            setSuccess('User has been added Successfully');
            event.target.reset();//clear input field after successfull submission
            setNewUser(logInUser);
            navigate(from, {replace: true});
            // user = null;
            // EMail Varification

            emailVarification(logInUser);
            updateUserHandler(logInUser , name ,url)

        })
        .catch(error=>{
            console.error(error.code);
            console.error(error.message);
            setError(error.message);
            
        })

        const updateUserHandler = (logInUser, name ,url) =>{
            updateProfile(logInUser , {
                displayName : name,
                photoURL : url
            })
                .then(()=>{
                    console.log(logInUser.displayName);
                })
                .catch(error=>{
                    setError(error.message);
                })
        }
        const emailVarification = logInUser =>{
            sendEmailVerification(logInUser)
                .then(result=>{
                    // console.log(result.logInUser);
                    alert('please Varify your email');
                })
        }


    }
    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="container mx-auto hero-content flex-col lg:flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={onSubmitRegisterHandler} className="card-body">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" name='name' className="input input-bordered" required />
                            
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" name='email' className="input input-bordered" required/>

                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required/>

                            <label className="label">
                                <span className="label-text">Profile Picture URL</span>
                            </label>
                            <input type="text" placeholder="url" name='ProfilePicUrl' className="input input-bordered" required/>

                            <label className="label">
                                <p>Already Registerd ? <Link to={'/login'} className="label-text-alt link link-hover">Login</Link></p>
                            </label>
                            <p className='text-warning'>{error}</p>
                            <p className='text-success'>{success}</p>
                            <input type="submit" value="Register"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;