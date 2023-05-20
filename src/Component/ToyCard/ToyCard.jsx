import React from 'react';
import { Link } from 'react-router-dom';

const ToyCard = ({toy}) => {
    const {_id,name, img, price,rating,seller,category,quantity,details} = toy;

    const ViewDetailsHandler = (id) =>{
        fetch(`http://localhost:5000/all-toys/${id}`)
        .then(res => res.json())
        .then(data => console.log(data))
    }

    return (
        <div className=''>
            <div className="card lg:w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10 h-80">
                    <img src={img} />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title 'className=''font-bold'">{name}!</h2>
                    <p><span className='font-bold'>Category</span> : {category}</p>
                    <p><span className='font-bold'>Price</span> : {price} | <span className='font-bold'>Available</span> : {quantity}</p>
                <div className="card-actions">
                    <Link to={`/all-toys/${_id}`}><button className="btn btn-primary" onClick={()=>ViewDetailsHandler(_id)}>View Details</button></Link>

                </div>
                </div>
            </div>
        </div>
    );
};

export default ToyCard;