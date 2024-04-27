import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form"
import Swal from "sweetalert2";
import { FaFly } from "react-icons/fa";
import "../AddSpot/AddSpot.css"


const AddSpot = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();


    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div className="">
            <Helmet>
                <title>Serendipia | Register</title>
            </Helmet>
            <h2 className="text-center lg:text-4xl text-2xl mt-16 font-semibold text-[#442537]">Add A Tourist Spot!</h2>
            <p className="text-center mt-5 lg:text-xl">Know about a tourist spot you think others would love? Share with us by giving us the details below!</p>
            <form onSubmit={handleSubmit(onSubmit)} className="mx-auto grid grid-cols-1 p-2 md:p-8 md:gap-4 card-body text-2xl">

                {/* Image */}
                <div className="">
                    <div className="label">
                        <span className="label-text text-lg md:text-xl">Image:</span>
                    </div>
                    <label className="input input-bordered flex items-center text-base md:text-xl h-16 gap-2">
                        <FaFly />
                        <input type="url" className="grow p-1" placeholder="URL for the image of the spot" />
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
                            <input type="text" className="grow p-1" placeholder="Spot Name" />
                        </label>
                    </div>
                    {/* item 2 */}
                    <div className="md:w-1/2">
                        <div className="label">
                            <span className="label-text text-lg md:text-xl">Country:</span>
                        </div>
                        <label className="input input-bordered flex items-center text-base md:text-xl h-16 gap-2">
                            <FaFly />
                            <input type="text" className="grow p-1" placeholder="Country" />
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
                            <FaFly />
                            <input type="text" className="grow p-1" placeholder="Location" />
                        </label>
                    </div>
                    {/* item 2 */}
                    <div className="md:w-1/2">
                        <div className="label">
                            <span className="label-text text-lg md:text-xl">Average Cost:</span>
                        </div>
                        <label className="input input-bordered flex items-center text-base md:text-xl h-16 gap-2">
                            <FaFly />
                            <input type="text" className="grow p-1" placeholder="Average travel cost" />
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
                            <FaFly />
                            <input type="text" className="grow p-1" placeholder="Best season to travel there" />
                        </label>
                    </div>
                    {/* item 2 */}
                    <div className="md:w-1/2">
                        <div className="label">
                            <span className="label-text text-lg md:text-xl">Travel Time:</span>
                        </div>
                        <label className="input input-bordered flex items-center text-base md:text-xl h-16 gap-2">
                            <FaFly />
                            <input type="text" className="grow p-1" placeholder="Total travel duration" />
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
                            <FaFly />
                            <input type="text" className="grow p-1" placeholder="Total visitors/year" />
                        </label>
                    </div>
                    {/* item 2 */}
                    <div className="md:w-1/2">
                        <div className="label">
                            <span className="label-text text-lg md:text-xl">Short Description:</span>
                        </div>
                        <label className="input input-bordered flex items-center text-base md:text-xl h-16 gap-2">
                            <FaFly />
                            <input type="text" className="grow p-1" placeholder="Write a short description about the spot" />
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
                            <FaFly />
                            <input type="text" className="grow p-1" placeholder="Your Name" />
                        </label>
                    </div>
                    {/* item 2 */}
                    <div className="md:w-1/2">
                        <div className="label">
                            <span className="label-text text-lg md:text-xl">User Email:</span>
                        </div>
                        <label className="input input-bordered flex items-center text-base md:text-xl h-16 gap-2">
                            <FaFly />
                            <input type="text" className="grow p-1" placeholder="Your Email" />
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