import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Contexts/AuthProvider';

const BookModal = ({booking,setBooking}) => {
    const {user}=useContext(AuthContext);
    const {name,resale_price,img} = booking;
    const handelBooking=(e)=>{
        e.preventDefault();
        const form = e.target;
        
        const buyerName= form.name.value;
        const email=form.email.value;
        const location=form.location.value;
        const phone=form.phone.value;
        const price=form.price.value;
        const img=form.img.value;
        const bookingProduct ={
            buyerName,
            email,
            phone,
            location,
            productName:name,
            price,
            img

        }
        console.log(bookingProduct);
        fetch('https://classic-phone-server.vercel.app/bookings',{
            method:'POST',
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(bookingProduct)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.acknowledged){
                toast.success('Booking Product succesful')
                setBooking(null)
                // refetch();
            }
           
        })
     
    }
    return (
        <div>
        <input type="checkbox" id="booking-modal" className="modal-toggle" />
        <div className="modal">
            <div className="modal-box relative">
                <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h3 className="text-lg font-bold">{name}</h3>
                <form onSubmit={handelBooking} className='mt-10 grid grid-cols-1 gap-6'>
                    <input name='name' type="text" placeholder="Your name" defaultValue={user?.displayName} disabled className="input input-bordered input-sm w-full" />
                    <input name='email' type="email" placeholder="Email" defaultValue={user?.email} disabled className="input input-bordered input-sm w-full" />
                    <input name='price' type="text" placeholder="Resale Price"  defaultValue={resale_price} disabled className="input input-bordered input-sm w-full" />
                    <input name='img' type="text" placeholder="Resale Price"  defaultValue={img} disabled className="input input-bordered input-sm w-full" />
                    <input name='location' type="text" placeholder="Enter Your Location" className="input input-bordered input-sm w-full" />
                    <input name='phone' type="text" placeholder="Phone" className="input input-bordered input-sm w-full" />

                    <input type="submit" value='Submit' className="btn bg-yellow-600 input-sm w-full" />
                </form>
            </div>
        </div>
    </div>
    );
};

export default BookModal;