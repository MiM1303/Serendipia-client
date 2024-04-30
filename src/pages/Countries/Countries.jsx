import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";


const Countries = () => {

    const [countries, setCountries] = useState();

    useEffect(()=>{
        fetch('http://localhost:5000/countries')
        .then(res=>res.json())
        .then(data => {
        setCountries(data);
    })
    },[])
    console.log(countries);
    
    return (
        <div>
            <div className='text-center my-8 md:my-12 lg:my-16'>
                <h2 className='text-3xl'>Destination Countries</h2>
                <p>See the countries we offer our services in! Check out some stunning places in these countries!!</p>
            </div>
            {/* countries grid */}
            {/* {
                countries.map(country=> console.log(country.country))
            } */}
        </div>
    );
};

export default Countries;