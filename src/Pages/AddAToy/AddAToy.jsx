import React, { useState } from 'react';
import Select from 'react-select';
  
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
    }

    return (
        <div>
            This is add a toy
            <form onSubmit={handleaAddAToy}>
            
                <input className="border-purple-700 py-1" type="text" placeholder="name"  name="name" required/><br />
                <input className="border-purple-700 py-1" type="text" placeholder="price"  name="price" required/><br />
                <input className="border-purple-700 py-1" type="text" placeholder="rating"  name="rating" required/><br />
                <input className="border-purple-700 py-1" type="text" placeholder="category"  name="category" required/><br />
                <input className="border-purple-700 py-1" type="text" placeholder="quantity"  name="quantity" required/><br />
                <input className="border-purple-700 py-1" type="text" placeholder="details"  name="details" required/><br />
                <input className="border-purple-700 py-1" type="text" placeholder="img"  name="img" required/><br />
                <input className="border-purple-700 py-1" type="text" placeholder="seller-name" name="sellerName" required/><br />
                <input className="border-purple-700 py-1" type="text" placeholder="seller-email" name="sellerEmail" required/><br />
                <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                />
                <input type="submit" name="Add Toy" id="" />
                
            </form>
        </div>
    );
};

export default AddAToy;