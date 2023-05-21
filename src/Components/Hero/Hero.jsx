import React from 'react';
import './Hero.css'

const Hero = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3VwZXIlMjBoZXJvJTIwdG95c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Toy Market</h1>
                    <p className="mb-5">Make Your Children Happy | Make world Beautiful </p>
                    <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;