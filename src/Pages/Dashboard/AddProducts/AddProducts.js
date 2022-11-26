import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';

const AddProducts = () => {
    const {user}=useContext(AuthContext)
    const handelService = (e)=>{
        e.preventDefault()
        const form = e.target;
        const buyerName=form.buyerName.value;
        const email=form.email.value;
        const name = form.name.value;
        const condition = form.condition.value;
        const original_price = form.original_price.value;
        const resale_price = form.resale_price.value;
        const location = form.location.value;
        const _id = form._id.value;
        const used = form.used.value;
        const category = form.category.value;
        const description = form.description.value;
        const img = form.img.value;

        const addaProduct={
            category,
            products:[
                {
                _id,
                name,
                description,
                img,
                condition,
                location,
                original_price,
                resale_price,
                used
                }
            ]
        }
        console.log(addaProduct)
        fetch('http://localhost:5000/category',{
            method:'POST',
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(addaProduct)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
    }
    return (
        <div>
            <h1 className='text-4xl font-semibold text-yellow-500 my-4 text-center'>Add A Products</h1>
            <div className='divider'></div>
            <form onSubmit={handelService} className="form-control lg:w-[700px] rounded-md p-4 border-orange-700 border">
               <div className='grid lg:grid-cols-2 lg:gap-4'>
                        <div>
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='buyerName' disabled defaultValue={user?.displayName} readOnly className="input input-bordered w-full max-w-xs" required/>
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' disabled defaultValue={user?.email} readOnly className="input input-bordered w-full max-w-xs" required/>
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <input type="text" name='name' className="input input-bordered w-full max-w-xs" required/>
                        </div>
                        <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Conditions</span>
                        </label>
                        <select name='condition'
                        className="select input-bordered w-full max-w-xs">
                            <option>Excellent</option>
                            <option>Good</option>
                            <option>Fair</option>
                        </select>
                        </div>
                        <div>
                        <label className="label">
                            <span className="label-text">original price</span>
                            </label>
                            <input type="text" name='original_price' className="input input-bordered w-full max-w-xs" required/>
                        </div>
                        <div>
                        <label className="label">
                            <span className="label-text">resale price</span>
                            </label>
                            <input type="text" name='resale_price' className="input input-bordered w-full max-w-xs" required/>
                        </div>
                        <div>
                        <label className="label">
                            <span className="label-text">Location</span>
                            </label>
                            <input type="text" name='location' className="input input-bordered w-full max-w-xs" required/>
                        </div>
                        <div>
                        <label className="label">
                            <span className="label-text">product Number</span>
                            </label>
                            <input type="text" name='_id' className="input input-bordered w-full max-w-xs" required/>
                        </div>
                        <div>
                        <label className="label">
                            <span className="label-text"> Year of purchase</span>
                            </label>
                            <input type="text" name='used' className="input input-bordered w-full max-w-xs" required/>
                        </div>
                        <div>
                        <label className="label">
                            <span className="label-text">Category</span>
                            </label>
                            <input type="text" name='category' className="input input-bordered w-full max-w-xs" required/>
                        </div>
                        <div>
                        <label className="label">
                            <span className="label-text">Service Image URL</span>
                            </label>
                            <input type="text" name='img' className="input input-bordered w-full max-w-xs"/>
                        </div>
               </div>
                <div className='w-full'>
                    <label className="label">
                        <span className="label-text">Product Details</span>
                    </label>
                    <textarea className="textarea textarea-warning w-full h-25" name='description'></textarea>
                </div>
                <div className="form-control ">
                    <input className="btn btn-warning hover:bg-orange-500 mt-4" type="submit" value="Add Your Product" />
                </div>
            </form> 
        </div>
    );
};

export default AddProducts;