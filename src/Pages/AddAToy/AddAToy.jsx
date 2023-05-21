import React, { useState } from 'react';
import Select from 'react-select';
import swal from 'sweetalert';

  
const AddAToy = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    const options = [
        { value: 'Marvel', label: 'Marvel' },
        { value: 'DC', label: 'DC' },
        { value: 'Dark Horse', label: 'Dark Horse' }

      ];

    const handleaAddAToy = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const price = event.target.price.value;
        const rating = event.target.rating.value;
        // const category = event.target.category.value;
        const quantity = event.target.quantity.value;
        const details = event.target.details.value;
        const img = event.target.img.value;
        const sellerName= event.target.sellerName.value;
        const email = event.target.sellerEmail.value;

        const category = selectedOption.value;
        // console.log('newCategory' , newCategory)


        const seller = {sellerName,email}
        const newToy = {name,price,rating,category,quantity,details,img,seller}
        console.log(newToy);
        fetch('http://localhost:5000/add-a-toy',{
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(newToy)
            })
                .then(res=> res.json())
                .then(data => console.log(data))

                if(data.acknowledged){
                    swal({
                        title: "Good job!",
                        text: "You Successfully add a new Toy!",
                        icon: "success",
                        button: "Great!",
                      });
                }
    }

    return (
        <div className='container mx-auto'>
            This is add a toy
            <form onSubmit={handleaAddAToy}>
                <label className="label">
                    <span className="label-text">Toy Name</span>
                </label>
                <input className="border-purple-700 py-1 input input-bordered w-full  " type="text" placeholder="name"  name="name" required/>  

                <div className='flex'>
                    <div className='md:w-1/2'>
                        <label className="label">
                            <span className="label-text">Toy Price</span>
                        </label>
                        <input className="border-purple-700 py-1 input input-bordered w-full " type="text" placeholder="price"  name="price" required/>
                    </div>

                    <div className='md:w-1/2'>
                        <label className="label">
                            <span className="label-text">Toy quantity</span>
                        </label>
                        <input className="border-purple-700 py-1 input input-bordered   w-full" type="text" placeholder="quantity"  name="quantity" required/>  
                    </div>
                </div>

                <label className="label">
                    <span className="label-text">Toy Rating</span>
                </label>
                <input className="border-purple-700 py-1 input input-bordered w-full md:  w-full  " type="text" placeholder="rating"  name="rating" required/>

                <label className="label">
                    <span className="label-text">Select Category</span>
                </label>
                <Select className="border-purple-700 py-1 input input-bordered w-full md:  w-full "
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                />

                <label className="label">
                    <span className="label-text">Toy details</span>
                </label>
                <input className="border-purple-700 py-1 input input-bordered w-full  " type="text" placeholder="details"  name="details" required/>  

                <label className="label">
                    <span className="label-text">Img url</span>
                </label>
                <input className="border-purple-700 py-1 input input-bordered w-full  " type="text" placeholder="img"  name="img" required/>  

                <label className="label">
                    <span className="label-text">seller Name</span>
                </label>
                <input className="border-purple-700 py-1 input input-bordered w-full md:  w-full  " type="text" placeholder="seller-name" name="sellerName" required/>  
                
                <label className="label">
                    <span className="label-text">seller Email </span>
                </label>
                <input className="border-purple-700 py-1 input input-bordered w-full md:  w-full  " type="text" placeholder="seller-email" name="sellerEmail" required/>  

                
                <input className='btn btn-success' type="submit" name="Update" id="" value="Add Toy"/>
                
            </form>
        </div>
    );
};

export default AddAToy;