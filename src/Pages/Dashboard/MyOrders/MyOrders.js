import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Contexts/AuthProvider';

const MyOrders = () => {
    const {user}=useContext(AuthContext)
    const url = (`http://localhost:5000/bookings?email=${user?.email}`)
    const {data:bookings=[],refetch}=useQuery({
        queryKey:['bookings',user?.email],
        queryFn:async()=>{
            const res= await fetch(url)
            const data = await res.json();
            return data;
        }
    })
    const handelDelete = (id)=>{
        fetch(`http://localhost:5000/bookings/${id}`,{
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
    return (
        <div>
            <h1 className='text-4xl font-semibold text-yellow-500 my-4 text-center'>My Orders</h1>
            <div className='divider'></div>
            <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Products</th>
                    <th>Location</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    bookings?.map((booking,i)=>
                    <tr>
                        <th>{i+1}</th>
                        <td>{booking.buyerName}</td>
                        <td>{booking.email}</td>
                        <td>{booking.phone}</td>
                        <td>{booking.productName}</td> 
                        <td>{booking.location}</td> 
                        <td>{booking.price}</td> 
                        <td>
                            <button onClick={()=>handelDelete(booking._id)} className='btn btn-sm mr-2'>Delete</button>    
                            <button className='btn btn-sm'>Confirm</button>    
                        </td> 
                    </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default MyOrders;