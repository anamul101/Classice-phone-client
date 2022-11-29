import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Contexts/AuthProvider';

const MyOrders = () => {
    const {user}=useContext(AuthContext)
    const url = (`https://classic-phone-server.vercel.app/bookings?email=${user?.email}`)
    const {data:bookings=[],refetch,isLoading}=useQuery({
        queryKey:['bookings',user?.email],
        queryFn:async()=>{
            const res= await fetch(url,{
                headers: {
                  authorization: `bearer ${localStorage.getItem("accessToken")}`,
                },
              })
            const data = await res.json();
            return data;
        }
    })
    const handlePayment=(id)=>{
      fetch(`http://localhost:5000/bookings/${id}`,{
        method:'PUT',
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        if(data.modifiedCount > 0){
            toast.success('Payment Successfully');
            refetch(); 
        }
    })
    }
    const handelDelete = (id)=>{
        fetch(`https://classic-phone-server.vercel.app/bookings/${id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount > 0){
                toast.success('Product has been Deleted');
               refetch(); 
            }
        })
    }
    if(isLoading){
      return <p>Please wait data is proccecing</p>
    }
    return (
        <div>
            <h1 className='text-4xl font-semibold text-yellow-500 my-4 text-center'>My Orders</h1>
            <div className='divider'></div>
            <div className='grid lg:grid-cols-3 gap-5'>
                {
                  bookings.length >0 &&
                    bookings?.map(booking=>
                    <div className="lg:w-80 w-96 bg-base-100 shadow-xl rounded-xl">
                    <figure><img className='rounded-md' src={booking.img} alt={booking.productName} /></figure>
                    <div className="p-5">
                      <h2 className="text-2xl font-bold mb-3">
                        {booking.productName}
                      </h2>
                      <p className='font-bold'>Location: {booking.location}</p>
                      <p className='font-bold'>Buyer Name: {booking.buyerName}</p>
                      <p className='font-bold'>Email: {booking.email}</p>
                      <p className='font-bold'>Buyer Number: {booking.phone}</p>
                      <p className='font-bold'>Resale Price: ${booking.price}</p>
                      <div className="card-actions justify-end mt-3">
                      {
                     (booking?.paid === 'paid')
                     ?
                     <button disabled className='btn bg-green-600 hover:bg-green-700 hover:border-green-600 border-green-600 btn-sm text-black'>Paid</button>
                     :
                     <button onClick={() => handlePayment(booking?._id)} className='btn btn-secondary btn-sm'>Pay</button>
                      }
                        <div onClick={()=>handelDelete(booking._id)} className="btn bg-red-600 hover:bg-red-700 border-red-600 hover:border-red-700 btn-sm ml-2">Delete</div>
                      </div>
                    </div>
                  </div>
                    )
                }
            </div>
    </div>
    );
};

export default MyOrders;