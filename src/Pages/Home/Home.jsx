import React from 'react';

import { Link } from "react-router-dom";

const Home = () => {

    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="/mountains-best-for-desktop-background-wallpaper-preview.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <Link to="#slide4" className="btn btn-circle">❮</Link> 
                    <Link to="#slide2" className="btn btn-circle">❯</Link>
                    </div>
                </div> 
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="/sun-4285357_1920.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <Link to="#slide1" className="btn btn-circle">❮</Link> 
                    <Link to="#slide2" className="btn btn-circle">❯</Link>
                    </div>
                </div> 
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="/public/neon-4k-hd-best-for-desktop-wallpaper-preview.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <Link to="#slide2" className="btn btn-circle">❮</Link> 
                    <Link to="#slide4" className="btn btn-circle">❯</Link>
                    </div>
                </div> 
            </div>
        </div>
    );
};

export default Home;