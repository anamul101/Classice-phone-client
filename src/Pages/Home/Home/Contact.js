import React from 'react';
import { Link } from 'react-router-dom';
import login from '../../../assets/banner/login.svg';
import toast from 'react-hot-toast';


const Contact = () => {
    
    const handelSubmit = (event)=>{
        event.preventDefault();
        const form = event.target;
        const firstname= form.firstname.value;
        const lastname= form.lastname.value;
        const subject= form.subject.value;
        const number= form.number.value;
        const email = form.email.value;
        const message = form.message.value;
        console.log(firstname,lastname,subject,number,email,message);

    }
    return (
        <div className="hero my-20 w-full">
            <div className="hero-content grid gap-10 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:mr-20 lg:text-left">
                        <img src={login} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100 pb-20 ">
                    <h1 className="text-5xl font-bold text-center pt-5">Contact Me</h1>
                    <form onSubmit={handelSubmit} className="card-body">
                        <div className='flex justify-between'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">First Name</span>
                            </label>
                            <input type="text" placeholder="First Name" name="firstname" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Last Name</span>
                            </label>
                            <input type="text" placeholder="Last Name" name="lastname" className="input input-bordered" />
                        </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Subject</span>
                            </label>
                            <input type="text" placeholder="Type Subject" name="subject" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input type="text" placeholder="Type Your Number" name="number" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Message</span>
                            </label>
                            <textarea className="textarea textarea-bordered" name="message" placeholder="Type Text..."></textarea>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="SUBMIT" />
                        </div>
                    </form>
                </div>
                
            </div>
        </div>
    );
};

export default Contact;