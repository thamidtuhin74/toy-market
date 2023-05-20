import React from 'react';

import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ToyCard from '../../Component/toyCard/toyCard';



const AllToys = () => {

    const allToys = useLoaderData();
    const [toys, setToys] = useState(allToys);
    // const remaining = [];

    // console.log();
    const searchHandler = (event) =>{
        event.preventDefault();
        const itemName = toString(event.target.itemName.value);
        
        // const remaining = toys.filter((toy)=>{
        //     return toString(toy).name.toLowerCase().includes(itemName.toLowerCase());
        // });

        const remaining = toys.filter((toy)=>toy.name.includes('S').map(filteredName =>{ 
            <li>
            {filteredName}
            </li>
           }));
        console.log('remaining',remaining)
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