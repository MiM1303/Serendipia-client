import { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import { AuthContext } from "../providers/AuthProvider";

const ListItem = ({spot, mySpots, setMySpots}) => {
    const {_id, name, country, location, cost, duration, photo} = spot;
    const {user} = useContext(AuthContext);
    const userEmail = user.email;

    const handleDelete = _id =>{
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          })
          .then((result)=>{
            if(result.isConfirmed){
                fetch(`http://localhost:5000/my-spots/${userEmail}/${_id}`, {
                    method: "DELETE",
                })
                .then(res=>res.json())
                .then(data=>{
                    console.log(data);
                    if(data.deleteCount>0)
                    {
                        Swal.fire({
                            title: "Deleted!",
                            text: "The spot has been deleted!",
                            icon: "success"
                          });
                        // const remaining = mySpots.filter(cof => cof._id !== _id);
                        // const remaining = mySpots.filter(sp => sp._id !== _id);
                        setMySpots(mySpots.filter(sp => sp._id !== _id)); 
                    }
                })
            }
          })
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
                    <button className="btn btn-ghost btn-xs">Update</button>
                </Link>
            </th>
            <th>
            <button onClick={()=>handleDelete(_id)} className="btn btn-ghost btn-xs">Delete</button>
            </th>
        </tr>
    );
};

export default ListItem;