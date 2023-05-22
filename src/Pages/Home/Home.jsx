import React, { useState } from 'react';

import { Link, useLoaderData } from "react-router-dom";
import ImageCard from '../../Components/ImageCard/ImageCard';
import Hero from '../../Components/Hero/Hero';
import ToyCard from '../../Components/ToyCard/ToyCard';
import CategoryTab from '../../Components/CategoryTab/CategoryTab';

const Home = () => {
    const allToys = useLoaderData();
    const [toys, setToys] = useState(allToys);
    let countImage = 0;

    return (
        <div className='container mx-auto'>

            <Hero></Hero>
            
            <h2 className='font-bold py-5 text-5xl text-center text-blue-700 '>Product Gelery</h2>
            <ImageCard ></ImageCard>
            
            <CategoryTab></CategoryTab>
        </div>
    );
};

export default Home;