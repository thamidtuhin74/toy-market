import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';


const MyToy = ({myToy , toys ,setToys}) => {

    const {_id,name, img, price,rating,seller,category,quantity,details} = myToy;

    // const [remainingToys , setRemainingToys]  = useState(toys);


    const delectHandler = (id) =>{

        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                console.log('delectHandler: '+ id );
                fetch(`https://top-market-server.vercel.app/all-toys/${id}`,{
                    method: 'DELETE'
                    // headers: 
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if(data.deletedCount){
                            const remaining = toys.filter(toy => toy._id !== id);
                            setToys(remaining);
                        }
                    })
              swal("Your deleted a Toy!", {
                icon: "success",
              });
            } else {
              swal("Your imaginary file is safe!");
            }
          });

        
    }


    return (
        
            <tr>
                <th>
                    <label>
                        <input type="checkbox" className="checkbox" />
                    </label>
                </th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={img} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        
                    </div>
                </td>
                <td>
                    <div className="font-bold">{name}</div>
                        <div className="text-sm opacity-50">{category}</div>
                    
                </td>
                <td>
                    <p>{details}</p>
                    <br/>
                    
                </td>
                <td>
                    <span className="badge badge-ghost badge-sm">{price}</span>
                    <span className="badge badge-ghost badge-sm">{rating}</span>

                </td>
                <th>
                    <Link to={`/edit/${_id}`}>
                        <button className="btn btn-ghost btn-xs">Edit</button>
                    </Link>
                    <button className="btn btn-ghost btn-xs" onClick={()=>delectHandler(_id)}>Delete</button>

                </th>
            </tr>
        
    );
};

export default MyToy;