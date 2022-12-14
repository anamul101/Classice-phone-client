import React from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const SingleCard = ({addproduct,refetch}) => {
    const {category,_id,name,description,image,condition,location,original_price,resale_price,used,phoneNumber}=addproduct;
        const navigate=useNavigate()
    const handleAvailable=(id)=>{
        fetch(`https://classic-phone-server.vercel.app/addproducts/${id}`,{
            method:'PUT',
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount > 0){
                toast.success('Advertised Successfully');
                navigate('/')
            }
        })
    }
    const handelDelete=(id)=>{
        fetch(`https://classic-phone-server.vercel.app/addproducts/${id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount > 0){
                toast.success(`Product has been Deleted`);
                refetch();
            }
        })
    }
    return (
        <div className=" w-[500px] bg-base-100 border rounded-md">
        <figure><img className='w-full' src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title flex justify-between">
                <p className='text-2xl font-bold'>{name}</p>
                <div className="badge badge-secondary p-2">{category}</div>
                </h2>
                <p className='font-bold'>Location:{location}</p>
                <p>{description}</p>
                <p className='mb-0'>Condition:{condition}</p>
                <p className='mb-0'>Orginial Price: ${original_price}</p>
                <p className='mb-0'>Resale Price{resale_price}</p>
                <p className='mb-0'>Year of Used: {used}</p>
                <p className='mb-0'>Mobile Number: {phoneNumber}</p>
                <div className="card-actions justify-end">
                
                {
                     (addproduct?.role === 'available')
                     ?
                     <button className='btn bg-green-600 hover:bg-green-700 hover:border-green-600 border-green-600 btn-sm'>Advertise Ruing</button>
                     :
                     <button onClick={() => handleAvailable(addproduct?._id)} className='btn btn-secondary btn-sm'>Available</button>
                }
                <div onClick={()=>handelDelete(addproduct?._id)} className="btn bg-red-600 hover:bg-red-700 border-red-600 hover:border-red-700 btn-sm ml-2">Delete</div>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;