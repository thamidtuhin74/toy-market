import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/authProvider';
import { useLoaderData } from 'react-router-dom';
import ToyCard from '../../Components/ToyCard/ToyCard';
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

            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
                {
                    myToys.map(toy=><ToyCard
                        key = {toy._id}
                        toy = {toy}
                    ></ToyCard>)
                }
            </div>
            
            
        </div>
    );
};

export default MyToys;