import { useLoaderData } from 'react-router-dom';
import Banner from './Banner';
import SpotCard from '../SpotCard/SpotCard';
import CountryCard from '../Countries/CountryCard';
import { useEffect, useState } from 'react';

import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import "leaflet/dist/leaflet.css";
import { FaLocationDot } from "react-icons/fa6";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useMap } from 'https://cdn.esm.sh/react-leaflet/hooks'

const Home = () => {
    const allSpots = useLoaderData();
    // console.log(allSpots);
    const selectedSpots = allSpots.slice(0,6);
    // console.log(selectedSpots);
    

    const [countries, setCountries] = useState([]);

    useEffect(()=>{
        fetch('https://serendipia-server.vercel.app/countries')
        .then(res=>res.json())
        .then(data=>setCountries(data))
    }, [])
    console.log('countries outside useEffect',countries);

    // useEffect(()=>{
    //     fetch('https://serendipia-server.vercel.app/countries')
    //     .then(res=>res.json())
    //     .then(data=>console.log('print', data))
    // },[countries])


    const position = [23.7983, 90.3876]
    return (
        <div>
            <Banner></Banner>
            
            {/* Tourist Spots Section */}
            <div className='text-center my-8 md:my-12 lg:my-16'>
                <h2 className='text-3xl'>Popular Tourist Spots</h2>
                <p className='my-2 text-xl '>Check out some of our most popular tourist spots to pick for your vacations and getaways!</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-10'>
                {
                    selectedSpots.map(spot=><SpotCard key={spot._id} spot={spot}></SpotCard>)
                }
            </div>
           
            {/* Countries Section */}
            <div className='text-center my-8 md:my-12 lg:my-16'>
                <h2 className='text-3xl'>Destination Countries</h2>
                <p className='my-2 text-xl '>See the countries we offer our services in! Check out some stunning places in these countries!!</p>
            </div>
            <div className='grid grid-cols-3 gap-10'>
                {
                    countries.map(country=><CountryCard key={country._id} countryInfo={country}></CountryCard>)
                }
            </div>

            
             {/* Map Leaflet */}

             <div className='text-center my-8 md:my-12 lg:my-16'>
                <h2 className='text-3xl'>Find Us</h2>
                <p className='my-2 text-xl '>Got any inquiries regarding your travels or information about tourist spot? Do not hesitate to reach out to us!!</p>
            </div>

             <div className="lg:flex gap-20 lg:mt-16">
                <div>
                    <div className="flex flex-col lg:flex-row ">
                        <MapContainer className="  h-[300px] md:h-[500px] lg:w-[800px] lg:h-[600px]" center={position} zoom={10} scrollWheelZoom={false}>
                            <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={position}>
                            <Popup>
                                Serenity Eden
                            </Popup>
                            </Marker>
                        </MapContainer>
                        </div>
                    </div>

                    {/* grid information */}
                    <div className='grid grid-cols-2 gap-4'>
                        <div className=' border text-center p-10 flex flex-col justify-center gap-3 items-center hover:bg-red-200 shadow-md'>
                            <FiPhoneCall className='text-red-400 text-3xl mx-auto'/>
                            <h2>Call Us</h2>
                            <p>01523456789</p>
                        </div>

                        <div className=' border text-center p-10 flex flex-col justify-center gap-3 items-center hover:bg-red-200 shadow-md'>
                            <MdOutlineMailOutline className='text-red-400 text-3xl mx-auto'/>
                            <h2>Email Us</h2>
                            <p>jfmirza1303@gmail.com</p>
                        </div>
                        <div className='col-span-2 border text-center p-10 flex flex-col justify-center gap-3 items-center hover:bg-red-200 shadow-md'>
                            <IoLocationOutline className='text-red-400 text-3xl mx-auto'/>
                            <h2>Our Address</h2>
                            <p>Mirpur-14, Dhaka, Bangladesh</p>
                        </div>
                        {/* <div>
                            <MdOutlineMailOutline />
                            <h2>Our Address</h2>
                            <p>Mirpur-14, Dhaka, Bangladesh</p>
                        </div> */}
                    </div>
                <div>
                </div>
            </div>

            {/* FAQ */}
            <div className='text-center my-8 md:my-12 lg:my-16'>
                <h2 className='text-3xl'>Frequently Asked Questions</h2>
                <p className='my-2 text-xl '>Got any inquiries regarding your travels or information about tourist spot? Check out some commonly asked questions!</p>
            </div>
            <div>
                <div className="join join-vertical w-full">
                    <div className="collapse collapse-arrow join-item border border-base-300 py-6">
                        <input type="radio" name="my-accordion-4" defaultChecked /> 
                        <div className="collapse-title text-xl font-medium">
                            How do I see all of the tourist spots?
                        </div>
                        <div className="collapse-content"> 
                        <p>Head over to the All Tourist Spots section from the Navigation bar!</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300 py-6">
                        <input type="radio" name="my-accordion-4" /> 
                        <div className="collapse-title text-xl font-medium">
                            Can I add any tourist spot that I know of?
                        </div>
                        <div className="collapse-content"> 
                        <p>Of course! Log in to our website and go to the Add Spot section to add a spot you love!</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300 py-6">
                        <input type="radio" name="my-accordion-4" /> 
                        <div className="collapse-title text-xl font-medium">
                            I have some questions regarding a spot information.
                        </div>
                        <div className="collapse-content"> 
                        <p>Drop by our office or contact us through mail, phone or our socials and we will be happy to help you out!</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;