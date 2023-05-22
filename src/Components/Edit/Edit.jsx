import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Select from 'react-select';
import swal from 'sweetalert';




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

        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                // fetch( `https://top-market-server.vercel.app/all-toys/${toy._id}`,{
                fetch( `https://top-market-server-thamidtuhin74.vercel.app/all-toys/${toy._id}`,{
                method: 'PUT',
                headers: {
                    'content-type':'application/json'
                },
                body: JSON.stringify(updateToy)
                })
                    .then(res=> res.json())
                    .then(data => console.log(data))
              swal(`You Updated the Toy ${toy.name}!`, {
                icon: "success",
              });
            } else {
              swal("Your imaginary file is safe!");
            }
          });
        // fetch( `https://top-market-server.vercel.app/all-toys/${toy._id}`,{
        //     method: 'PUT',
        //     headers: {
        //         'content-type':'application/json'
        //     },
        //     body: JSON.stringify(updateToy)
        //     })
        //         .then(res=> res.json())
        //         .then(data => console.log(data))
    }

    return (
        <div className='container mx-auto'>
            <form onSubmit={handleaEditAToy}>

            <div className='flex'>
                    <div className='md:w-1/2'>
                        <label className="label">
                            <span className="label-text">Toy Price</span>
                        </label>
                        <input className="border-purple-700 py-1 input input-bordered w-full " type="text" placeholder="price"  name="price" defaultValue={toy?.price} required/>
                    </div>

                    <div className='md:w-1/2'>
                        <label className="label">
                            <span className="label-text">Toy quantity</span>
                        </label>
                        <input className="border-purple-700 py-1 input input-bordered   w-full" type="text" placeholder="quantity"  name="quantity" defaultValue={toy?.quantity} required/>  
                    </div>
                </div>
                <label className="label">
                    <span className="label-text">Toy details</span>
                </label>
                <input className="border-purple-700 py-1 input input-bordered   w-full" type="text" placeholder="details"  name="details" defaultValue={toy?.details}/><br />
                
                <input className='btn bg-red-400' type="submit" name="Update" id="" value="Update"/>
                
            </form>
        </div>
    );
};

export default Edit;