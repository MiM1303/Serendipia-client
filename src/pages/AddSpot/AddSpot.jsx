import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form"
import Swal from "sweetalert2";
import "../AddSpot/AddSpot.css"
import { FaFly } from "react-icons/fa";
import { GrMapLocation } from "react-icons/gr";
import { FaLocationDot, FaUsers } from "react-icons/fa6";
import { MdOutlineTimer } from "react-icons/md";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { FaPencil } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa";
import { MdOutlineAddAPhoto } from "react-icons/md";




const AddSpot = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();


    const onSubmit = (spot) => {
        console.log(spot);
        spot.cost = parseInt(spot.cost);

        //send spot data to server
        fetch('https://serendipia-server.vercel.app/add-spot', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(spot)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId)
            {
                Swal.fire({
                    title: 'Success!',
                    text: `Spot added successfully! Thank you for suggesting a new spot!!`,
                    icon: 'success',
                    confirmButtonText: 'Close'
                  })
            }
        })
    }

    return (
        <div className="">
            <Helmet>
                <title>Serendipia | Add Spot</title>
            </Helmet>
            <h2 className="text-center lg:text-4xl text-2xl mt-16 font-semibold text-[#442537]">Add A Tourist Spot!</h2>
            <p className="text-center mt-5 lg:text-xl">Know about a tourist spot you think others would love? Share with us by giving us the details below!</p>
            <form onSubmit={handleSubmit(onSubmit)} className="text-[#738e36] mx-auto grid grid-cols-1 p-2 md:p-8 md:gap-4 card-body text-2xl">

                {/* Image */}
                <div className="">
                    <div className="label">
                        <span className="label-text text-lg md:text-xl">Image:</span>
                    </div>
                    <label className="input input-bordered flex items-center text-base md:text-xl h-16 gap-2">
                        <MdOutlineAddAPhoto />
                        <input type="url" className="grow p-1" placeholder="URL for the image of the spot" {...register("photo", { required: true })}/>
                    </label>
                </div>
                {/* row-1 */}
                <div className="form-control flex flex-col md:flex-row gap-4 md:gap-14">
                      {/* item 1 */}
                    <div className="md:w-1/2">
                        <div className="label">
                            <span className="label-text text-lg md:text-xl">Tourist Spot Name:</span>
                        </div>
                        <label className="input input-bordered flex items-center text-base md:text-xl h-16 gap-2">
                            <FaFly />
                            <input type="text" className="grow p-1" placeholder="Spot Name" {...register("name", { required: true })}/>
                        </label>
                    </div>
                    {/* item 2 */}
                    <div className="md:w-1/2">
                        <div className="label">
                            <span className="label-text text-lg md:text-xl">Country:</span>
                        </div>
                        <label className="input input-bordered flex items-center text-base md:text-xl h-16 gap-2">
                            <GrMapLocation />
                            {/* <input type="" className="grow p-1" placeholder="Country" {...register("country", { required: true })}/> */}
                            <select {...register("country", { required: true })} type="text" className="grow input-info border-0 outline-0 " placeholder="Country">
                                    <option value="Bangladesh">Bangladesh</option>
                                    <option value="Indonesia">Indonesia</option>
                                    <option value="Thailand">Thailand</option>
                                    <option value="Malaysia">Malaysia</option>
                                    <option value="Vietnam">Vietnam</option>
                                    <option value="Cambodia">Cambodia</option>
                            </select>
                                {errors.country && <span>This field is required</span>}
                        </label>
                    </div>
                </div>

                {/* row-2 */}
                <div className="form-control flex flex-col md:flex-row gap-4 md:gap-14">
                      {/* item 1 */}
                    <div className="md:w-1/2">
                        <div className="label">
                            <span className="label-text text-lg md:text-xl">Location:</span>
                        </div>
                        <label className="input input-bordered flex items-center text-base md:text-xl h-16 gap-2">
                            <FaLocationDot />
                            <input type="text" className="grow p-1" placeholder="Location" {...register("location", { required: true })}/>
                        </label>
                    </div>
                    {/* item 2 */}
                    <div className="md:w-1/2">
                        <div className="label">
                            <span className="label-text text-lg md:text-xl">Average Cost:</span>
                        </div>
                        <label className="input input-bordered flex items-center text-base md:text-xl h-16 gap-2">
                            <FaDollarSign />
                            <input type="number" className="grow p-1" placeholder="Average travel cost" {...register("cost", { required: true })}/>
                        </label>
                    </div>
                </div>
                
                {/* row-3 */}
                <div className="form-control flex flex-col md:flex-row gap-4 md:gap-14">
                      {/* item 1 */}
                    <div className="md:w-1/2">
                        <div className="label">
                            <span className="label-text text-lg md:text-xl">Travel Season:</span>
                        </div>
                        <label className="input input-bordered flex items-center text-base md:text-xl h-16 gap-2">
                            <TiWeatherPartlySunny />
                            <input type="text" className="grow p-1" placeholder="Best season to travel there" {...register("season", { required: true })}/>
                        </label>
                    </div>
                    {/* item 2 */}
                    <div className="md:w-1/2">
                        <div className="label">
                            <span className="label-text text-lg md:text-xl">Travel Time:</span>
                        </div>
                        <label className="input input-bordered flex items-center text-base md:text-xl h-16 gap-2">
                            <MdOutlineTimer />
                            <input type="text" className="grow p-1" placeholder="Total travel duration" {...register("duration", { required: true })}/>
                        </label>
                    </div>
                </div>

                {/* row-4 */}
                <div className="form-control flex flex-col md:flex-row gap-4 md:gap-14">
                      {/* item 1 */}
                    <div className="md:w-1/2">
                        <div className="label">
                            <span className="label-text text-lg md:text-xl">Total Visitors Per Year:</span>
                        </div>
                        <label className="input input-bordered flex items-center text-base md:text-xl h-16 gap-2">
                            <FaUsers />
                            <input type="number" className="grow p-1" placeholder="Total visitors/year" {...register("visitors", { required: true })}/>
                        </label>
                    </div>
                    {/* item 2 */}
                    <div className="md:w-1/2">
                        <div className="label">
                            <span className="label-text text-lg md:text-xl">Short Description:</span>
                        </div>
                        <label className="input input-bordered flex items-center text-base md:text-xl h-16 gap-2">
                            <FaPencil />
                            <input type="text" className="grow p-1" placeholder="Write a short description about the spot" {...register("description", { required: true })}/>
                        </label>
                    </div>
                </div>

                {/* row-5 */}
                <div className="form-control flex flex-col md:flex-row gap-4 md:gap-14">
                      {/* item 1 */}
                    <div className="md:w-1/2">
                        <div className="label">
                            <span className="label-text text-lg md:text-xl">User Name:</span>
                        </div>
                        <label className="input input-bordered flex items-center text-base md:text-xl h-16 gap-2">
                            <FaUser />
                            <input type="text" className="grow p-1" placeholder="Your Name" {...register("username", { required: true })}/>
                        </label>
                    </div>
                    {/* item 2 */}
                    <div className="md:w-1/2">
                        <div className="label">
                            <span className="label-text text-lg md:text-xl">User Email:</span>
                        </div>
                        <label className="input input-bordered flex items-center text-base md:text-xl h-16 gap-2">
                            <MdOutlineMailOutline />
                            <input type="text" className="grow p-1" placeholder="Your Email" {...register("email", { required: true })}/>
                        </label>
                    </div>
                </div>
                
                
                
                <div className="form-control mt-6">
                <button className="btn bg-[#6A994E] hover:bg-[#8aae37] text-white text-base lg:text-xl font-medium pb-10 pt-4 flex items-center justify-center">Add</button>
                </div>
            </form>
           
        </div>
    );
};

export default AddSpot;