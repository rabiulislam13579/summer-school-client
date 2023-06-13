import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { useForm } from "react-hook-form";

const ManageClass = () => {
    const course = useLoaderData()
    const {_id, courseName, image, instructorName, price,rating, seats} = course
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data =>{ 
    
        console.log(data);
        
            fetch(` https://summer-school-server-pink.vercel.app/classes/${_id}`,{
                method: 'PUT',
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.modifiedCount>0){
                    alert('Updated successfully')
                  }
            })
    }

    return (
        <div>
            <h2 className='text-green-600 font-semibold text-3xl'>Manage Courses !!!</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex gap-5'>
                    <div >
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Course Name</span>
                            </label>
                            <input type="text" placeholder="Course name" defaultValue={courseName} {...register("courseName", { required: true})} className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Instructor Name</span>
                            </label>
                            <input type="text" placeholder="Type here" defaultValue={instructorName} {...register("instructorName", { required: true})} className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="number" placeholder="Type here" defaultValue={price} {...register("price", { required: true})} className="input input-bordered w-full max-w-xs" />
                        </div>
                    </div>
                    <div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Available Seats</span>
                            </label>
                            <input type="number" placeholder="Type here" defaultValue={seats} {...register("seats", { required: true})} className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="text" placeholder="Type here" defaultValue={rating} {...register("rating", { required: true})} className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input type="url" placeholder="Type here" defaultValue={image} {...register("image", { required: true})} className="input input-bordered w-full max-w-xs" />
                        </div>
                    </div>
                </div>
                <input className='text-white  bg-green-600 rounded-md my-5 p-3' type="submit" value='Add Course' />
            </form>
        </div>
    );
};

export default ManageClass;