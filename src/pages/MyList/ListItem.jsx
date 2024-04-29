import { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import { AuthContext } from "../providers/AuthProvider";

const ListItem = ({spot}) => {
    const {_id, name, country, location, cost, duration, photo} = spot;
    const {user} = useContext(AuthContext);
    const userEmail = user.email;

    const handleDelete = _id =>{
        console.log(_id)
        
    }
    return (
        <tr>
            {/* image */}
            <td>
            <div className="flex items-center gap-3">
                <div className="avatar">
                <div className="mask mask-squircle w-28 h-28">
                    <img src={photo} className="" alt="Avatar Tailwind CSS Component" />
                </div>
                </div>
                {/* <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                </div> */}
            </div>
            </td>
            {/* Spot Name */}
            <td>{name}</td>
            {/* location */}
            <td>
                <div className="font-bold">{location}</div>
                <div className="text-sm opacity-50">{country}</div>
            </td>
            {/*  */}
            
            <td>{cost} Taka</td>
            <td>{duration} Days</td>
            <th>
                <Link to={`/updateSpot/${_id}`}>
                <   button className="btn btn-ghost btn-xs">Update</button>
                </Link>
            </th>
            <th>
            <button onClick={()=>handleDelete(_id)} className="btn btn-ghost btn-xs">Delete</button>
            </th>
        </tr>
    );
};

export default ListItem;