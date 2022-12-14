import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import useToken from '../../Hooks/useToken';
import SocialLogin from '../Shareds/SocialLogin/SocialLogin';
import toast from 'react-hot-toast';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const [signUpError, setSignUPError] = useState('');
    const [createUserEmail, setCreateUserEmail]=useState('');
    const [token]=useToken(createUserEmail);
    const navigate = useNavigate();
    if(token){
        navigate('/')
    }

    const handleSignUp = (data) => {
        console.log(data)
        setSignUPError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => { 
                        saveUser(data.name,data.email,data.role);
                    })
                    .catch(err => console.log(err));
            })
            .catch(error => {
                console.log(error)
                setSignUPError(error.message)
            });
    }
    const saveUser = (name,email,role)=>{
        const user={name,email,role}
        fetch('https://classic-phone-server.vercel.app/users',{
            method:'POST',
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            toast.success('User Created Successfully.');
            setCreateUserEmail(email);
        })
    }
    
    return (
        <div className='h-[700px] flex justify-center items-center'>
        <div className='w-96 p-7 border'>
            <h2 className=' text-center text-4xl font-bold text-yellow-700'>Sign Up</h2>
            <form onSubmit={handleSubmit(handleSignUp)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Name</span></label>
                    <input type="text" {...register("name", {
                        required: "Name is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Type of Account</span></label>
                        <select 
                        {...register('role')}
                        className="select input-bordered w-full max-w-xs">
                            <option disabled selected>Buyer</option>
                            <option>Seller</option>
                        </select>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Email</span></label>
                    <input type="email" {...register("email", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Password</span></label>
                    <input type="password" {...register("password", {
                        required: "Password is required",
                        minLength: { value: 8, message: "Password must be 8 characters long" },
                        pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                </div>
                <input className='btn btn-primary w-full mt-4' value="Sign Up" type="submit" />
                {signUpError && <p className='text-red-600'>{signUpError}</p>}
            </form>
            <p className='my-4'>Already have an account <Link className='text-secondary' to="/login">Please Login</Link></p>
            <div className="divider">OR</div>
            {/* <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button> */}
            <SocialLogin></SocialLogin>

        </div>  
    </div>

    );
};

export default SignUp;