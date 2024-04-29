import { Link } from "react-router-dom";
import { FaUsers } from "react-icons/fa6";
import { MdOutlineTimer } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa";
import { FaFly } from "react-icons/fa";

const SpotCard = ({spot}) => {
    const {_id, photo, name, cost, season, duration, visitors, description} = spot

    return (
        <div>
            <div className="card bg-gradient-to-b from-[#caf0e0] to-[#e2edfa] shadow-xl mb-3">
                <figure><img src={photo} className="md:w-11/12 lg:w-11/12 rounded-xl mt-5   lg:h-[335px]"  /></figure>
                <div className="flex flex-col gap-4 card-body">
                    <h2 className="card-title md:text-xl lg:text-2xl">{}</h2>
                    <p className="md:text-base lg:text-lg flex items-center gap-2"><FaFly className="text-blue-800 text-2xl" />{name}</p>
                    <p className="md:text-base lg:text-lg flex items-center gap-2"><FaDollarSign className="text-red-700 text-2xl" />{cost}</p>
                    <p className="md:text-base lg:text-lg flex items-center gap-2"><FaUsers className="text-green-700 text-2xl" />{visitors}</p>
                    <p className="md:text-base lg:text-lg flex items-center gap-2"><MdOutlineTimer className="text-blue-800 text-2xl" />{duration}</p>
                    <p className="md:text-base lg:text-lg flex items-center gap-2"><MdOutlineTimer className="text-blue-800 text-2xl" />{season}</p>
                    <p className="md:text-base lg:text-lg flex items-center gap-2"><MdOutlineTimer className="text-blue-800 text-2xl" />{description}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/all-spots/${_id}`}>
                            <button className="btn bg-[#50a9af] text-white text-lg hover:bg-[#2e4057]">View Spot Details</button>
                        </Link>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default SpotCard;