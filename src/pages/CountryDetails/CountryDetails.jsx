import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CountryDetailCard from "../CountryDetailCard/CountryDetailCard";

const CountryDetails = () => {
    const {country} = useParams();
    const [spots, setSpots] = useState([]);
    useEffect(()=>{
        fetch(`https://serendipia-server.vercel.app/all-spots/${country}`)
        .then(res=>res.json())
        .then(data=>setSpots(data))
    },[country])
    console.log(spots);
    return (
       <div>
        <div className='text-center my-8 md:my-12 lg:my-16'>
                <h2 className='text-3xl'>Tourist Spots in <span className="text-blue-500 font-semibold">{country}</span></h2>
                <p>Take a look at all the available tourist spots added by us and our esteemed users in {country}!!</p>
            </div>
         <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {spots.map(spot=><CountryDetailCard key={spot._id} spot={spot}></CountryDetailCard>)}
        </div>
       </div>
    );
};

export default CountryDetails;