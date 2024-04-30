import { useLoaderData } from 'react-router-dom';
import Banner from './Banner';
import SpotCard from '../SpotCard/SpotCard';
import CountryCard from '../Countries/CountryCard';
import { useEffect, useState } from 'react';
import Test from '../Test/Test';

const Home = () => {
    const allSpots = useLoaderData();
    // console.log(allSpots);
    const selectedSpots = allSpots.slice(0,6);
    // console.log(selectedSpots);
    

    const [countries, setCountries] = useState();

    useEffect(()=>{
        fetch('http://localhost:5000/countries')
        .then(res=>res.json())
        .then(data=>setCountries(data))
    }, [])
    console.log('countries outside useEffect',countries);


    return (
        <div>
            <Banner></Banner>
            
            {/* Tourist Spots Section */}
            <div className='text-center my-8 md:my-12 lg:my-16'>
                <h2 className='text-3xl'>Popular Tourist Spots</h2>
                <p>Check out some of our most popular tourist spots to pick for your vacations and getaways!</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-10'>
                {
                    selectedSpots.map(spot=><SpotCard key={spot._id} spot={spot}></SpotCard>)
                }
            </div>
           
            {/* Countries Section */}
            <div className='text-center my-8 md:my-12 lg:my-16'>
                <h2 className='text-3xl'>Destination Countries</h2>
                <p>See the countries we offer our services in! Check out some stunning places in these countries!!</p>
            </div>
            <div className='grid grid-cols-3 gap-10'>
                {
                    countries.map(country=><CountryCard key={country._id} countryInfo={country}></CountryCard>)
                }
            </div>

        </div>
    );
};

export default Home;