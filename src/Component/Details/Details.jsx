import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const toy = useLoaderData();
    const {_id,name, img, price,rating,seller,category,quantity,details} = toy;


    return (
        <div className='container mx-auto'>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="right">
                        <img className='w-full' src={img} />
                        <p>Ratting : {rating}</p>
                    </div>
                    <div>
                    <h1 className="text-5xl font-bold">{name}</h1>
                    <h3 className="text-xl font-bold my-4">{price} | In Stock : {quantity}</h3>
                    <p className="py-6">{seller.sellerName} | {seller.email}</p>
                    <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            <div className="toy-details md:w-6/12 mx-auto bg-purple-500 rounded-xl p-5">
                <h3 className='text-5xl font-bold text-center'>Description</h3>
                <h3 className="text-lg font-bold my-2">Category : {category}</h3>
                <p className="font-normal text-lg">{details}</p>
                
            </div>
            {/* <button onClick={()=>delectHandler(_id)}>X</button> */}
        </div>
    );
};

export default Details;