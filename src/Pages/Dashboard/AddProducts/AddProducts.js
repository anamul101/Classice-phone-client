import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';

const AddProducts = () => {
    const {user}=useContext(AuthContext);
    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm();
    
    const navigate=useNavigate()
    const imageHostKey = process.env.REACT_APP_imgbb_key;
    const handelService = (data)=>{
        const image = data.image[0];
        console.log(image)
        const formData = new FormData();
        console.log(formData)
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        }).then(res=>res.json())
        .then(imgData =>{
        
            if(imgData.success){
                const addaProduct={
                        name: data.name,
                        condition: data.condition,
                        original_price: data.original_price,
                        resale_price: data.resale_price,
                        location: data.location,
                        used: data.used,
                        category: data.category,
                        image: imgData.data.url,
                        description: data.description,
                        phoneNumber: data.phoneNumber,
                      
                }
                // Add product mongodb
                    fetch('http://localhost:5000/addproducts',{
                        method:'POST',
                        headers:{
                            "content-type":"application/json"
                        },
                        body:JSON.stringify(addaProduct)
                    })
                    .then(res=>res.json())
                    .then(data=>{
                        if(data.acknowledged){
                            toast.success('Booking Product succesful');
                            navigate('/dashboard/myproducts')
                        }
                    })
            }
        })
        
    }
    return (
        <div>
            <h1 className='text-4xl font-semibold text-yellow-500 my-4 text-center'>Add A Products</h1>
            <div className='divider'></div>
        <form onSubmit={handleSubmit(handelService)} className="text-center lg:w-[700px] rounded-md p-4 border-orange-700 border">
        <div className='grid lg:grid-cols-2 gap-5'>
        <div>
          <label className="label">Product Name</label>
          <input type="text" {...register("name", {required: "Product name is required!",})}className="input input-bordered w-full"/>
          {errors?.name && (
            <p className="text-red-600">{errors?.name.message}</p>
          )}
        </div>
        <div>
          <label className="label">Phone Number</label>
          <input type="text" {...register("phoneNumber")}className="input input-bordered w-full"/>
        </div>
        <div>
          <label className="label">Original price</label>
          <input type="text" {...register("original_price")}className="input input-bordered w-full"/>
        </div>
        <div>
          <label className="label">Resale price</label>
          <input type="text" {...register("resale_price")}className="input input-bordered w-full"/>
        </div>
        <div>
          <label className="label">Location</label>
          <input type="text" {...register("location")} className="input input-bordered w-full"/>
        </div>

        <div>
          <label className="label">Year Of purchase</label>
          <input type="text" {...register("used")} className="input input-bordered w-full"/>
        </div>
     <div className='flex justify-between'>
     <div>
          <label className="label">Phone Condition </label>
          <select 
                {...register('condition')}
                className="select input-bordered w-full max-w-xs">
                <option disabled selected>Exsellent</option>
                <option>Good</option>
                <option>Fair</option>
            </select>
        </div>
        <div>
          <label className="label">Selected Category</label>
          <select 
                {...register('category')}
                className="select input-bordered w-full max-w-xs">
                <option disabled selected>oppo</option>
                <option>iphone</option>
                <option>realme</option>
            </select>
        </div>
     </div>
        <div>
          <label className="label">Photo</label>
          <input
            type="file"
            {...register("image")}
            className="input input-bordered w-full"
          />
        </div>
        </div>
        <div>
          <label className="label">Description</label>

          <textarea
            type="text"
            {...register("description")}className="textarea textarea-bordered w-full"></textarea>
        </div>
        <input
          type="submit"
          value="Add Product"
          className="btn btn-warning hover:bg-orange-500 lg:w-full mt-4 text-white"
        />
      </form>
    </div>
    );
};

export default AddProducts;