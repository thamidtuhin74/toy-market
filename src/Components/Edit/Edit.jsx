import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Select from 'react-select';



const Edit = () => {
    const toy = useLoaderData();
    console.log(toy);

    

    const handleaEditAToy = event =>{
        event.preventDefault();

        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const details = event.target.details.value;
        // console.log('newCategory' , newCategory)

        const updateToy = {price,quantity,details};
        
        console.log(updateToy);
        fetch( `http://localhost:5000/all-toys/${toy._id}`,{
            method: 'PUT',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(updateToy)
            })
                .then(res=> res.json())
                .then(data => console.log(data))
    }

    return (
        <div className='container mx-auto'>
            <form onSubmit={handleaEditAToy}>
            
                
                <input className="border-purple-700 py-1" type="text" placeholder="price"  name="price" defaultValue={toy?.price}/><br />
                <input className="border-purple-700 py-1" type="text" placeholder="quantity"  name="quantity" defaultValue={toy?.quantity}/><br />
                <input className="border-purple-700 py-1" type="text" placeholder="details"  name="details" defaultValue={toy?.details}/><br />
                
                <input type="submit" name="Update" id="" />
                
            </form>
        </div>
    );
};

export default Edit;