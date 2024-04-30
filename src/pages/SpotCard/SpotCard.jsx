import { Link } from "react-router-dom";
import { FaUsers } from "react-icons/fa6";
import { MdOutlineTimer } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa";
import { FaFly } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { BsArrowRight } from "react-icons/bs";
import { TbCurrencyDollar } from "react-icons/tb";

const SpotCard = ({spot}) => {
    const {_id, photo, name, country, cost, location, season, duration, visitors, description} = spot

    return (
        <div>
            {/* <div className="card relative bg-gradient-to-b from-[#e0f2eb] to-[#f5f4e0] shadow-xl mb-3"> */}
            <div className="card rounded-sm relative border border-base-300 shadow-sm mb-3">
                <figure><img src={photo} className="h-[280px] w-full"  /></figure>
                <div className="badge absolute right-6 top-6 p-4 bg-base-300 flex gap-2 textarea-lg"><IoLocationSharp className="text-red-600"/> <span>{name}</span></div>

                <div className="flex flex-col gap-4 card-body">
                    <div className="flex justify-between ">
                        <p className="w-2/3 md:text-base lg:text-xl flex items-center gap-2 font-semibold">{location}, {country}</p>
                        <p className="justify-end md:text-base lg:text-lg flex items-center gap-0 text-blue-500"><TbCurrencyDollar className="text-2xl font-bold" /><span className="font-semibold">{cost}</span></p>
                    </div>
                    <p className="md:text-base lg:text-lg flex items-center gap-2 lg:mb-4">{description}</p>

                    <div className="flex">
                        <p className="md:text-base lg:text-lg flex items-center gap-2"><span className="font-semibold">Duration:</span> {duration} days</p>
                        <p className="justify-end md:text-base lg:text-lg flex items-center gap-2"><span className="font-semibold">Visit during:</span> {season}</p>
                    </div>
                    
                    <p className="md:text-base lg:text-lg flex items-center gap-2 "><span className="font-semibold">Visitors per Year:</span> {visitors}</p>
                    <hr className="mb-2 mt-3"/>
                    <div className="card-actions justify-end">
                        <Link to={`/all-spots/${_id}`}>
                            <button className="bg-transparent text-[#A98467] border-none text-lg flex items-center gap-2"><span>View Spot Details</span> <BsArrowRight className="text-3xl font-thin"/></button>
                        </Link>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default SpotCard;