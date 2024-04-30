import { Link } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";
import { BsArrowRight } from "react-icons/bs";
import { TbCurrencyDollar } from "react-icons/tb";

const SpotCard = ({spot}) => {
    const {_id, photo, name, country, cost, location, season, duration, visitors, description} = spot

    return (
        <div>
            {/* <div className="card relative bg-gradient-to-b from-[#e0f2eb] to-[#f5f4e0] shadow-xl mb-3"> */}
            <div className="card rounded-sm relative border border-[#99f485] shadow-sm mb-3">
                <figure><img src={photo} className="h-[280px] w-full"  /></figure>
                <div className="badge absolute right-6 top-6 p-4 bg-base-300 flex gap-2 textarea-lg"><IoLocationSharp className="text-[#ee6055]"/> <span>{name}</span></div>

                <div className="flex flex-col gap-4 card-body">
                    <div className="flex justify-between ">
                        <p className="w-2/3 md:text-base lg:text-xl flex items-center gap-2 font-semibold">{location}, {country}</p>
                        <p className="justify-end md:text-base lg:text-lg flex items-center gap-0 text-[#168AAD]"><TbCurrencyDollar className="text-2xl font-bold" /><span className="font-semibold">{cost}</span></p>
                    </div>
                    <p className="md:text-base lg:text-lg flex items-center gap-2 lg:mb-4">{description}</p>

                    <div className="flex flex-col gap-2 md:flex-row lg:flex-row">
                        <p className="md:text-base lg:text-lg flex items-center gap-2"><span className="font-semibold">Duration:</span> {duration} days</p>
                        <p className="justify-start md:justify-end md:text-base lg:text-lg flex items-center gap-2"><span className="font-semibold">Visit during:</span> {season}</p>
                    </div>
                    
                    <p className="md:text-base lg:text-lg flex items-center gap-2 "><span className="font-semibold">Visitors per Year:</span> {visitors}</p>
                    <hr className="mb-2 mt-3"/>
                    <div className="card-actions justify-end">
                        <Link to={`/all-spots/${_id}`}>
                            <button className="bg-transparent text-[#2d6a4f] border-none text-lg font-medium flex items-center gap-2"><span>View Spot Details</span> <BsArrowRight className="text-3xl font-thin hover:text-4xl"/></button>
                        </Link>
                    </div>
                    {/* bg-[#99D98C] hover:bg-[#B5E48C] text-[#2d6a4f] text-base font-bold */}
                </div>
            </div>
        </div>
    );
};

export default SpotCard;