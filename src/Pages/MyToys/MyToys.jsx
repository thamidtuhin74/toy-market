import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/authProvider';
import { useLoaderData } from 'react-router-dom';
import ToyCard from '../../Components/ToyCard/ToyCard';
import MyToy from '../../Components/MyToy/MyToy';
// import { AuthContext } from '../../Providers/AuthProvider';


const MyToys = () => {
    const allToys = useLoaderData();
    const [toys, setToys] = useState(allToys);
    const {user} = useContext(AuthContext);
    console.log('user: ',user.email);
    
    const myToys = toys.filter(toy=>toy.seller.email == user.email);
    console.log('My toys : ',myToys)
    
    
    return (
        <div className='container mx-auto'>
            <p>This is My TOys {user.email} {myToys.length}</p>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>
                        <label>
                            <input type="checkbox" className="checkbox" />
                        </label>
                        </th>
                        <th>Img</th>
                        <th>Name & Category</th>
                        <th>Details</th>
                        <th>Price & Rating</th>
                        <th>Edit/Update</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}
                    {
                    myToys.map(myToy=><MyToy
                        key = {myToy._id}
                        myToy = {myToy}
                        toys = {toys}
                        setToys = {setToys}
                    ></MyToy>)
                }
                    
                    </tbody>
                    {/* foot */}
                    <tfoot>
                    <tr>
                    <th>
                        <label>
                            <input type="checkbox" className="checkbox" />
                        </label>
                        </th>
                        <th>Img</th>
                        <th>Name & Category</th>
                        <th>Details</th>
                        <th>Price & Rating</th>
                        <th>Edit/Update</th>
                    </tr>
                    </tfoot>
                    
                </table>
                </div>

            {/* <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
                {
                    myToys.map(toy=><ToyCard
                        key = {toy._id}
                        toy = {toy}
                    ></ToyCard>)
                }
            </div> */}
            
            
        </div>
    );
};

export default MyToys;