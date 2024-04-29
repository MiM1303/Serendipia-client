import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';

const ViewDetails = () => {
    const spotDetails = useLoaderData();
    console.log(spotDetails);
    const{_id, name, location, country, visitors, description, season, duration, cost, username, email, photo} = spotDetails;
    return (
        <div>
            <div>
            <Helmet>
                <title>Serenity Eden | Spot Details</title>
            </Helmet>
            <div className="mx-2 lg:mx-10">
                <div className="flex justify-center items-center flex-col gap-10 lg:flex-row">
                    <img src={photo} className="md:w-3/4 lg:w-2/3 rounded-lg shadow-2xl" />
                    <div className=''>
                    <h1 className="text-3xl lg:text-5xl font-bold text-center md:text-left">{name}</h1>
                    <p className="py-6 text-lg lg:text-xl text-center md:text-left">{description}</p>
                    <div className='flex flex-col gap-5 mb-10'>
                        <p className='text-lg lg:text-xl'><span className='font-bold '>Location:</span> {location}</p>
                        <p className='text-lg lg:text-xl'><span className='font-bold'>Country:</span> {country}</p>
                        <p className='font-bold text-lg lg:text-xl'>Facilities:</p>

                        <p className='text-lg lg:text-xl'><span className='font-bold '>Trip Duration:</span> {duration}</p>
                        <p className='text-lg lg:text-xl'><span className='font-bold '>Total Cost:</span> {cost}</p>
                        <p className='text-lg lg:text-xl'><span className='font-bold '>Which season to visit:</span> {season}</p>
                        <p className='text-lg lg:text-xl'><span className='font-bold '>Total Visitors/Year:</span> {visitors}</p>
                        <p className='text-lg lg:text-xl'><span className='font-bold '>Spot Added By:</span> {username}</p>
                        <p className='text-lg lg:text-xl'><span className='font-bold '>Contact With Adder:</span> {email}</p>
                    </div>
                    {/* <Link to={`/estate-details/${id}/book`}><button className='hover:bg-[#99c24d] btn w-full  bg-[#196680] text-white md:text-lg lg:text-xl font-medium pb-10 pt-3 flex items-center justify-center'>Book</button></Link> */}
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default ViewDetails;