import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import useToken from '../../Hooks/useToken';
import SocialLogin from '../Shareds/SocialLogin/SocialLogin';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const {signIn,forgetPassword}=useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const [passChang, setPassChang] = useState('');
    const [createLoginEmail, setCreateLoginEmail]=useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const [token]=useToken(createLoginEmail)
    if(token){
        navigate(from, {replace: true});
        toast.success(' Your Login Successfull')
    }

    const handleLogin = data => {
        console.log(data);
        setLoginError('');
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setCreateLoginEmail(data.email)
            })
            .catch(error => {
                console.log(error.message)
                setLoginError(error.message);
            });
    }
    const handelaReset = ()=>{
        forgetPassword(passChang)
          .then(()=>{
            toast.success('Reset password for chack your email')
          })
          .catch(error=>toast.error(error))
      }

    return (
        <div className='h-[700px] flex justify-center items-center'>
        <div className='w-96 p-7 border'>
            <h2 className='text-4xl font-bold text-yellow-700 text-center'>Login</h2>
            <form onSubmit={handleSubmit(handleLogin)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Email</span></label>
                    <input type="text"
                        {...register("email", {
                            required: "Email Address is required"
                        })}
                        onBlur={(e)=>setPassChang(e.target.value)}
                        className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Password</span></label>
                    <input type="password"
                        {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                        })}
                        className="input input-bordered w-full max-w-xs" />
                    <label className="label"><span onClick={handelaReset} className="label-text">Forget Password?</span></label>
                    {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                </div>
                <input className='btn btn-primary w-full' value="Login" type="submit" />
                <div>
                    {loginError && <p className='text-red-600'>{loginError}</p>}
                </div>
            </form>
            <p className='my-4'>New to Classice Phone <Link className='text-secondary' to="/signup">Create new Account</Link></p>
            <div className="divider">OR</div>
            <SocialLogin></SocialLogin>
        </div>
    </div>
    );
};

export default Login;