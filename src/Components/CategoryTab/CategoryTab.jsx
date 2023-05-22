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
  const [DcToys, setDcToys] = useState([])
  const [DarkHorseToys, setDarkHorseToys] = useState([])
  

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


  const handleDcToys = () => {
    const carCatagory = alltoys.filter((item) => item.category == "DC");
    setDcToys(carCatagory)
  }
  const handleDarkHorseToys = () => {
    const TruckCatagory = alltoys.filter((item) => item.category == "Dark Horse");
    setDarkHorseToys(TruckCatagory)

  }


  return (
    <div className='container mx-auto'>

      <div><h2 className='font-bold text-2xl font-mono  text-center mt-2 mb-2'>Toys by Category </h2></div>

      <Tabs defaultIndex={1}>
        <TabList className="flex items-center md:gap-20 justify-center cursor-pointer border-2 mb-3">
          <Tab className="p-4 text-xl border-r-2 border-l-2 " onClick={handleMarvelToys} >Marverl</Tab>
          <Tab className="p-4 text-xl border-r-2" onClick={handleDcToys}>DC</Tab>
          <Tab className="p-4 text-xl border-r-2" onClick={handleDarkHorseToys}>Dark Horse</Tab>

        </TabList>

        <TabPanel>
         
          <div className='lg:grid grid-cols-3 gap-5 mb-5'>
            {
              MarvelToys.map((kit) =>
                <div className="card bg-base-100 shadow-xl mb-5">
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
          <div className='lg:grid grid-cols-3 gap-5 mb-5'>
            {
              DcToys.map((kit) =>
                <div className="card bg-base-100 shadow-xl mb-5">
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
          
          <div className='lg:grid grid-cols-3 gap-5 mb-5'>
            {
              DarkHorseToys.map((kit) =>
                <div className="card bg-base-100 shadow-xl mb-5">
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