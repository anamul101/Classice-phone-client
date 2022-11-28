import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';

const AllSellers = () => {
    const url = ("https://classic-phone-server.vercel.app/users?role=Seller")
    const {data:allSellers=[]}=useQuery({
        queryKey:['allSellers'],
        queryFn:async()=>{
            const res= await fetch(url)
            const data = await res.json();
            return data;
        }
    })
    const {data:allAdmin=[],refetch}=useQuery({
        queryKey:['allAdmin'],
        queryFn:async()=>{
            const res= await fetch("https://classic-phone-server.vercel.app/users?role=admin")
            const data = await res.json();
            return data;
        }
    })
    const handelSellerDelete=(id)=>{
        fetch(`https://classic-phone-server.vercel.app/users/${id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount > 0){
                toast.success(`User has been Deleted`);
                refetch();
            }
        })
    }
    const handelUpdate=(id)=>{
        console.log(id)
        fetch(`https://classic-phone-server.vercel.app/users/admin/${id}`,{
            method:'PUT',
            // headers:{
            //     authorization:`bearer ${localStorage.getItem('accessToken')}`
            // }
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount > 0){
                toast.success('Make Admin Succesful');
                refetch();
            }
        })
    }
    const handelvarify=(id)=>{
        console.log(id)
        fetch(`https://classic-phone-server.vercel.app/users/${id}`,{
            method:'PUT',
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount > 0){
                toast.success('Seller verification successful');
                refetch();
            }
        })
    }
    return (
        <div>
            <h1 className='text-4xl font-semibold text-yellow-500 my-4 text-center'>All Sellers</h1>
            <div className='divider'></div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th>Seller Name</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            allSellers?.map((seller)=>
                            <tr>
                                <td>{seller.name}</td>
                                <td>{seller.email}</td>
                                <td>{seller.role}</td>
                                <td>
                                {
                     (seller?.verify === 'verify')
                     ?
                        <button className='btn btn-ghost btn-sm'>✔️</button>
                     :
                     <button onClick={()=>handelvarify(seller._id)} className='btn btn-primary btn-sm'>Verify</button>
                }
                                    
                                    <button onClick={()=>handelUpdate(seller._id)} className='btn btn-sm ml-3'>Admin</button>
                                    <button onClick={()=>handelSellerDelete(seller._id)} className="btn bg-red-600 hover:bg-red-700 border-red-600 hover:border-red-700 btn-sm ml-2">Delete</button>
                                </td>
                            </tr>
                            )
                        }
                        {
                            allAdmin?.map((seller)=>
                            <tr>
                                <td>{seller.name}</td>
                                <td>{seller.email}</td>
                                <td>{seller.role}</td>
                                <td>
                                    <button onClick={()=>handelUpdate(seller._id)} className='btn btn-sm'>Admin</button>
                                    <button onClick={()=>handelSellerDelete(seller._id)} className="btn bg-red-600 hover:bg-red-700 border-red-600 hover:border-red-700 btn-sm ml-2">Delete</button>
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

export default AllSellers;