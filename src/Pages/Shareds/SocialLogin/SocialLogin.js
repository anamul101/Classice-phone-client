import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
import useToken from '../../../Hooks/useToken';



const SocialLogin = () => {
    const {authSignInGoogle,LogOut} = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const [createUserEmail, setCreateUserEmail]=useState('');
    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const [token]=useToken(createUserEmail);
    if(token){
        navigate(from, {replace: true});
    }
    const handelGoogle = ()=>{
        authSignInGoogle(googleProvider)
            .then((result)=>{
                const user = result.user;
                console.log(user);
                
                const currentUser={
                    email: user.email
                }
                setCreateUserEmail(currentUser)
            })
            .catch(error=>{
                toast.error(error.message);
            })
        }
    return (
        <div className='flex justify-center'>
            
            <div>
                <button onClick={handelGoogle} className="btn w-full btn-ghost gap-2">
                <FcGoogle className=' text-3xl cursor-pointer'></FcGoogle>
                    CONTINUE WITH GOOGLE
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;