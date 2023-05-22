import React, { createContext } from 'react';

import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ToyCard from '../../Components/ToyCard/ToyCard';


const AllToys = () => {

    const allToys = useLoaderData();
    const [toys, setToys] = useState(allToys);
    // const remaining = [];

    console.log('toys: ',toys);
    const searchHandler = (event) =>{
        event.preventDefault();
        const itemName = toString(event.target.itemName.value);
    }


    return (
        <div className="container mx-auto">
            <h3 className='text-5xl font-extrabold text-purple-700'>All Toys</h3>
            <form  className='px-3' onSubmit={searchHandler}>
                <input  className=' bg-slate-300' type="text" name="itemName" id="" />
                <input className=' bg-blue-700' type="submit" value="Search" />
            </form>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
                {
                    toys.map(toy=><ToyCard
                        key = {toy._id}
                        toy = {toy}
                    ></ToyCard>)
                }
            </div>
        </div>
    );
};

export default AllToys;