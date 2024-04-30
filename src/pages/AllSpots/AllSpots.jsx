// import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import SpotCard from "../SpotCard/SpotCard";
import { Link } from "react-router-dom";
import { useState } from "react";


const AllSpots = () => {
    const allSpots = useLoaderData();
    const [spots, setSpots] = useState(allSpots)

    // const handleSort = ()=>{

    // }
    return (
        <div>
            <h2 className="text-center lg:text-4xl text-2xl mt-16 font-semibold text-[#442537]">All Tourist Spots!</h2>
            <p className="text-center mb-6 md:mb-9 lg:mb-12  mt-5 lg:text-2xl">Take a look at all of the tourist spots we know about below!</p>

            <div className="mb-8 md:mb-12 lg:mb-16 justify-center text-md  lg:text-xl flex flex-col md:flex-row gap-4 items-center">
                <p>Sort By: </p>
                <select type="text" className="input-info border-0 outline-0 bg-[#f2f7d5] p-3 rounded-md" placeholder="Sort By">
                                    {/* <option value=""></option> */}
                                    <option value="descending">Average Cost (Descending)</option>
                </select>
                <Link to="/all-spots/sorted"><button className="bg-[#f2f7d5] py-3 px-5 ml-2  rounded-xl">Sort</button></Link>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    allSpots.map(spot=> <SpotCard key={spot._id} spot={spot}></SpotCard>)
                }
            </div>
        </div>
    );
};

export default AllSpots;