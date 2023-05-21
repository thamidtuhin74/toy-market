import React from 'react';
import { Link } from 'react-router-dom';

const ImageCard = () => {
    // const {_id,name, img} = toy;

    return (
        <div className='container mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-4'>
            <Link to="/all-toys">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title"></h2>
                        
                    </div>
                    <figure><img src="https://images.unsplash.com/photo-1531907700752-62799b2a3e84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3VwZXIlMjBoZXJvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" /></figure>
                </div>
            </Link>
             <Link to="/all-toys"> 
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title"></h2>
                        
                    </div>
                    <figure><img src="https://images.unsplash.com/photo-1513384312027-9fa69a360337?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3VwZXIlMjBoZXJvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" /></figure>
                </div>
             </Link>
             <Link to="/all-toys">
                
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title"></h2>
                        
                    </div>
                    <figure><img src="https://images.unsplash.com/photo-1521714161819-15534968fc5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3BpZGVyJTIwbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" /></figure>
                </div>

             </Link>
        </div>
        
    );
};

export default ImageCard;