import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import SpotCard from "../SpotCard/SpotCard";


const AllSpots = () => {
    const allSpots = useLoaderData();
    const [spots, setSpots] = useState()
    return (
        <div>
            <h2 className="text-center lg:text-4xl text-2xl mt-16 font-semibold text-[#442537]">All Tourist Spots!</h2>
            <p className="text-center mb-6 md:mb-9 lg:mb-12  mt-5 lg:text-xl">Take a look at all of the tourist spots we know about below!</p>

            <div>
                <p>Sort By: </p>
                <button className="">Cost</button>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    allSpots.map(spot=> <SpotCard 
                        key={spot._id} spot={spot}>

                        </SpotCard> )
                }
            </div>
        </div>
    );
};

export default AllSpots;