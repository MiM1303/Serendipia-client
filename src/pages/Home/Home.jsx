import { useLoaderData } from 'react-router-dom';
import Banner from './Banner';
import SpotCard from '../SpotCard/SpotCard';

const Home = () => {
    const allSpots = useLoaderData();
    console.log(allSpots);
    const selectedSpots = allSpots.slice(0,6);
    console.log(selectedSpots);
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
                    selectedSpots.map(spot=> <SpotCard 
                        key={spot._id}
                        spot={spot}></SpotCard>)
                }
            </div>
           
        </div>
    );
};

export default Home;