import { useContext, useState } from "react";
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import "../../App.css"

const Register = () => {
    const {createUser, updateUserInfo, setUser} = useContext(AuthContext)   
    const [showPassword, setShowPassword] = useState(false);


    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const onSubmit = (data) => {
        console.log(data);
        const {email, name, password, photoURL} = data;
        console.log(email,name, password, photoURL);
        if(password.length<6)
        {
            Swal.fire({
                title: 'Error!',
                text: 'Password must be at least 6 characters',
                icon: 'error',
                confirmButtonText: 'Cool'
              })
            return;
        }
        else if(!passwordRegex.test(password))
        {
            Swal.fire({
                title: 'Error!',
                text: 'Password must contain atleast one uppercase and lowercase letter',
                icon: 'error',
                confirmButtonText: 'Cool'
              })
            return;
        }

        createUser(email, password)
        .then(result =>{
            console.log(result.user);
            updateUserInfo(name, photoURL)
            .then(()=>{
                setUser({
                    displayName: name,
                    photoURL: photoURL,
                    email: email
                })
            })
            console.log(data);
            Swal.fire({
                title: 'Success!',
                text: 'Successfully Registered!',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        })
        .catch(error =>{
            console.error(error)
            const msg = error.message;
            Swal.fire({
                title: 'Error!',
                text: msg,
                icon: 'error',
                confirmButtonText: 'Cool'
              })
        })
      }
      

    

    return (
        <div className="">
            <Helmet>
                <title>Serendipia | Register</title>
            </Helmet>
            <h2 className="text-center lg:text-4xl text-2xl mt-16 font-semibold text-[#442537]">Register Now!</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="mx-auto lg:w-3/5 card-body text-2xl">
                <div className="form-control">
                <label className="label">
                    <span className="label-text text-base lg:text-lg">Name</span>
                </label>
                <input type="text" placeholder="name" className="text-md input input-bordered"  {...register("name", { required: true })}/>
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text text-base lg:text-lg">Photo URL</span>
                </label>
                <input type="text" placeholder="photo url" className="input input-bordered"  {...register("photoURL", { required: true })}/>
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text text-base lg:text-lg">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered"  {...register("email", { required: true })}/>
                </div>
                <div className="form-control relative">
                    <label className="label">
                        <span className="label-text text-base lg:text-lg">Password</span>
                    </label>
                    <input type={showPassword? "text" : "password"} placeholder="password" className="input input-bordered"  {...register("password", { required: true })}/>
                        <span className="absolute right-4 top-14 lg:right-[2.5rem]" onClick={()=>setShowPassword(!showPassword)}>
                                {showPassword ? <FaEyeSlash className="text-[#4F772D] font-semibold text-2xl"></FaEyeSlash> : <FaEye className="text-[#4F772D]  font-semibold text-2xl"></FaEye>}
                        </span>
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                <button className="btn bg-[#6A994E] hover:bg-[#8aae37] text-white text-base lg:text-xl font-medium pb-10 pt-4 flex items-center justify-center">Register</button>
                </div>
            </form>
            <p className="text-center mx-6 text-base lg:text-xl">Already have an account? <span> </span>
                <Link className="text-[#6A994E] font-bold text-[21px] hover:underline " to="/login">Login Here!</Link>
            </p>
        </div>
    );
};

export default Register;