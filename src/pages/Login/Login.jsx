import { useContext, useState } from "react";
import { useForm } from "react-hook-form"
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import "../../App.css"

const Login = () => {

    const {signIn, googleSignIn, githubSignIn} = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const location = useLocation();
    console.log('Location in the login page',location);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const onSubmit = (data) =>{ 
        console.log(data);
        const {email, password} = data;
        console.log (email, password);

        signIn(email, password)
        .then(result=>{
            Swal.fire({
                title: 'Success!',
                text: 'Logged in successfully!!',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
            console.log(result.user);

            // navigate after login
            navigate(location?.state ? location.state : '/');
        })
        .catch(error=>{
            console.error(error);
            Swal.fire({
                            title: 'Error!',
                            text: 'Email and Password did not match! Please try again!!',
                            icon: 'error',
                            confirmButtonText: 'Cool'
                          })
        })
    }

    const googleLogin = ()=>{
        googleSignIn()
        .then(result=>{
            console.log(result.user)
            Swal.fire({
                title: 'Success!',
                text: 'Logged in successfully!!',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
            

            // navigate after login
            navigate(location?.state ? location.state : '/');
            
        })
        
    }

    const githubLogin = ()=>{
        githubSignIn()
        .then(result=>{
            console.log(result.user);
            Swal.fire({
                title: 'Success!',
                text: 'Logged in successfully!!',
                icon: 'success',
                confirmButtonText: 'Cool'
              })

            // navigate after login
            navigate(location?.state ? location.state : '/');
            
        })
        .catch()
    }

    return (
        <div>
            <Helmet>
                <title>Serendipia | Login</title>
            </Helmet>
            <h2 className="text-center mt-16 lg:text-3xl text-2xl font-semibold text-[#442537]">Please Login!</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                <label className="label">
                    <span className="text-base lg:text-lg label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" {...register("email", { required: true })} />
                </div>
                <div className="form-control relative">
                <label className="label">
                        <span className="label-text text-base lg:text-lg">Password</span>
                    </label>
                    <input type={showPassword? "text" : "password"} placeholder="password" className="input input-bordered"  {...register("password", { required: true })}/>
                        <span className="absolute top-[52px] right-5  lg:top-14 lg:right-8" onClick={()=>setShowPassword(!showPassword)}>
                                {showPassword ? <FaEyeSlash className="text-[#4F772D] font-semibold text-2xl"></FaEyeSlash> : <FaEye className="text-[#4F772D]  font-semibold text-2xl"></FaEye>}
                        </span>
                <label className="label">
                    <a href="#" className="label-text-alt link link-hover text-sm mt-2">Forgot password?</a>
                </label>
                </div>
                <div className="form-control mt-6">
                <button className="btn bg-[#196680] text-white text-base hover:bg-[#50a9af] lg:text-xl font-medium pb-10 pt-5 flex items-center justify-center">Login</button>
                </div>
            </form>
            <p className="text-center mx-6 text-base lg:text-xl">Do not have an account?
                <Link className="text-blue-700 font-semibold " to="/register"> Register Here!</Link>
            </p>
            <div className="text-center mt-12  border-b-2 w-fit mx-auto py-4 px-10 rounded-2xl shadow-sm">
                <h2 className="mb-4 text-base md:text-lg lg:text-xl">Login with:</h2>
                <div className="flex gap-6 justify-center">
                    <button><AiFillGoogleCircle 
                        onClick={googleLogin} className="text-red-600 text-4xl lg:text-5xl"/></button>
                    <button><FaGithub 
                        onClick={githubLogin} className="text-[#2e4057] text-4xl lg:text-5xl"/></button>
                </div>
            </div>
        </div>
    );
};

export default Login;