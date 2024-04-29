import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import ListItem from "./ListItem";


const MyList = () => {

    const {user} = useContext(AuthContext);
    const [mySpots, setMySpots] = useState([]);
    // const url = `http://localhost:5000/my-spots/${user?.email}`;
    const userEmail = user.email;
    console.log(userEmail);
    

    useEffect(()=>{
        // fetch(`http://localhost:5000/my-spots/:${user?.email}`)
        fetch(`http://localhost:5000/my-spots/${userEmail}`)
            .then(res=>res.json())
            .then(data=>{
                // console.log(data);
                setMySpots(data);
                console.log(mySpots);
    })
    }, [user])

    return (
        <div>
            <h2 className="text-center lg:text-4xl text-2xl mt-16 font-semibold text-[#442537]">All Your Tourist Spots!</h2>
            <p className="text-center mb-6 md:mb-9 lg:mb-12  mt-5 lg:text-xl">Take a look at all of the tourist spots you have added for us below!</p>

            
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>Photo</th>
                        <th>Name</th>
                        <th>Location</th>
                        
                        <th>Cost</th>
                        <th>Duration</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>

                    {/* rows  */}
                    {
                        mySpots.map(spot=> <ListItem 
                            key={spot._id}
                            spot={spot}></ListItem>)
                    }

                    </tbody>                    
                </table>
            </div>
        </div>
    );
};

export default MyList;