import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";


const CountryCard = ({countryInfo}) => {
    const {country, image, description, _id} = countryInfo;
    return (
        <Link to={`/countries/${country}`}>
            <div className="card rounded-sm relative border border-base-300 shadow-sm mb-3">
                <figure><img src={image} className="h-[280px] w-full"  /></figure>
                <div className="badge absolute right-6 top-6 p-4 bg-base-300 flex gap-2 textarea-lg"><IoLocationSharp className="text-red-600"/> <span>{country}</span></div>

                <div className="flex flex-col gap-4 card-body">
                    {/* <div className="flex justify-between ">
                        <p className="w-2/3 md:text-base lg:text-xl flex items-center gap-2 font-semibold">{location}, {country}</p>
                        <p className="justify-end md:text-base lg:text-lg flex items-center gap-0 text-blue-500"><TbCurrencyDollar className="text-2xl font-bold" /><span className="font-semibold">{cost}</span></p>
                    </div> */}
                    <hr className="mb-2 mt-3"/>
                    <p className="md:text-base lg:text-lg flex items-center gap-2 lg:mb-4">{description}</p>

                    {/* <div className="flex">
                        <p className="md:text-base lg:text-lg flex items-center gap-2"><span className="font-semibold">Duration:</span> {duration} days</p>
                        <p className="justify-end md:text-base lg:text-lg flex items-center gap-2"><span className="font-semibold">Visit during:</span> {season}</p>
                    </div> */}
                    
                    {/* <p className="md:text-base lg:text-lg flex items-center gap-2 "><span className="font-semibold">Visitors per Year:</span> {visitors}</p> */}
                    
                </div>
            </div>
        </Link>
    );
};

export default CountryCard;