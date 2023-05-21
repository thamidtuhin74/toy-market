import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import Rating from 'react-rating';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/authProvider';
const Catagory = () => {

  const { user } = useContext(AuthContext);
  const [alltoys, setAlltoys] = useState([])
  const [MarvelToys, setMarvelToys] = useState([])
  const [CilvilToys, setCarToys] = useState([])
  const [TruckToys, setTruckToys] = useState([])

  useEffect(() => {
    fetch(`https://top-market-server.vercel.app/all-toys`)
      .then((res) => res.json())
      .then((result) => {
        setAlltoys(result);

      });
  }, []);
  // console.log(alltoys)

  const handleMarvelToys = () => {
    const bikeCatagory = alltoys.filter((item) => item.category == "Marvel");
    setMarvelToys(bikeCatagory)
  }


  const handleCilvilToys = () => {
    const carCatagory = alltoys.filter((item) => item.category == "DC");
    setCarToys(carCatagory)
  }
  const handleTruckToys = () => {
    const TruckCatagory = alltoys.filter((item) => item.category == "Dark Horse");
    setTruckToys(TruckCatagory)

  }


  return (
    <div>

      <div><h2 className='font-bold text-2xl font-mono  text-center mt-2 mb-2'>Watch the toys added by the users. </h2></div>

      <Tabs>
        <TabList className="flex items-center gap-20 justify-center cursor-pointer border-2 mb-3">
          <Tab className="p-4 text-xl border-r-2 border-l-2 " onClick={handleMarvelToys} >Marverl</Tab>
          <Tab className="p-4 text-xl border-r-2" onClick={handleCilvilToys}>DC</Tab>
          <Tab className="p-4 text-xl border-r-2" onClick={handleTruckToys}>Truck </Tab>

        </TabList>

        <TabPanel>
         
          <div className='lg:grid grid-cols-3 gap-5 ml-10 mb-5'>
            {
              MarvelToys.map((kit) =>
                <div className="card w-96 bg-base-100 shadow-xl mb-5 ml-5">
                  <figure><img src={kit.img} /></figure>
                  <div className="card-body">
                    <h2 className="card-title">Toy Name : {kit.name}</h2>
                    <p>Price : {kit.price}</p>
                    <div className='flex items-center'>
                      <p className='text-lg'>Rating:</p>
                      <Rating style={{ maxWidth: 250 }} value={kit.rating} readOnly />
                      <span className='font-bold'>
                        {kit.rating}
                      </span>
                    </div>
                    <div className="card-actions justify-start">
                      <Link to={`/all-toys/${kit._id}`}><button className="btn btn-outline ">Details</button>
                      </Link>
                    </div>
                  </div>
                </div>
              )

            }
          </div>

        </TabPanel>
        <TabPanel>
          <div className='lg:grid grid-cols-3 ml-10'>
            {
              CilvilToys.map((kit) =>
                <div className="card w-96 bg-base-100 shadow-xl mb-5">
                  <figure><img src={kit.img} /></figure>
                  <div className="card-body">
                    <h2 className="card-title">Toy Name : {kit.name}</h2>
                    <p>Price : {kit.price}</p>

                    <div className='flex items-center'>
                      <p className='text-lg'>Rating:</p>
                      <Rating style={{ maxWidth: 250 }} value={kit.rating} readOnly />
                      <span className='font-bold'>
                        {kit.rating}
                      </span>
                    </div>
                    <div className="card-actions justify-start">
                      <Link to={`/all-toys/${kit._id}`}><button className="btn btn-outline ">Details</button>
                      </Link>
                    </div>
                  </div>
                </div>
              )

            }
          </div>
        </TabPanel>
        <TabPanel>
          
          <div className='lg:grid grid-cols-3 ml-10'>
            {
              TruckToys.map((kit) =>
                <div className="card w-96 bg-base-100 shadow-xl mb-5">
                  <figure><img src={kit.img} /></figure>
                  <div className="card-body">
                    <h2 className="card-title">Toy Name : {kit.name}</h2>
                    <p>Price : {kit.price}</p>
                    <div className='flex items-center'>
                      <p className='text-lg'>Rating:</p>
                      <Rating style={{ maxWidth: 250 }} value={kit.rating} readOnly />
                      <span className='font-bold'>
                        {kit.rating}
                      </span>
                    </div>
                    <div className="card-actions justify-start">
                      <Link to={`/all-toys/${kit._id}`}><button className="btn btn-outline ">Details</button>
                      </Link>
                    </div>
                  </div>
                </div>
              )

            }
          </div>
        </TabPanel>

      </Tabs>
    </div>
  );
};

export default Catagory;