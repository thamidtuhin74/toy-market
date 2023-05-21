import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import profileImg from '../../../src/assets/react.svg';
import { AuthContext } from "../../Provider/authProvider";

const Header = () => {
    // COntext API load
    const [show, setShow] = useState(false)

    const {user, logout} = useContext(AuthContext);
    // console.log('header : ' + user.email);


    const logoutHandler = () =>{
        logout()
            .then(()=>{

            })
            .catch(error =>{
                console.log()
            })

        }
    return (
        <div className='container mx-auto'>
            
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to={'/'}>Home</Link></li>
                            <li><Link to={'/all-toys'}>All Toys</Link></li>
                            <li><Link to={'/my-toys'}>My Toys</Link></li>
                            <li><Link to={'/add-a-toy'}>Add a Toys</Link></li>
                            <li><Link to={'blog'}>Blogs</Link></li>

                        </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case text-xl">daisyUI</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/all-toys'}>All Toys</Link></li>
                        <li><Link to={'/my-toys'}>My Toys</Link></li>
                        <li><Link to={'/add-a-toy'}>Add a Toys</Link></li>
                        <li><Link to={'blog'}>Blogs</Link></li>

                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user?<div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                            <img src={user?.photoURL} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to={''}>My Toys</Link></li>
                            <li><Link to={''} onClick={logoutHandler}>Logout</Link></li>
                        </ul>
                        </div>:<Link to={'/login'} className="btn">login</Link>
                        
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default Header;