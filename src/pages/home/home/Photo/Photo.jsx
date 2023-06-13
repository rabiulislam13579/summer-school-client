import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Photos = () => {
    const [photos, setPhotos] = useState([])
    useEffect(() => {
        fetch(' https://summer-school-server-pink.vercel.app/classes')
            .then(res => res.json())
            .then(data => {
                setPhotos(data)
            })
    }, [])
    return (
        <div className='grid md:grid-cols-4 mt-5'>
            {
                photos.slice(0,4).map(photo =>  <div key={photo._id} className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={photo.image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                                <h2 className="card-title">{photo.courseName}</h2>
                                <p>{photo.instructorName}</p>
                                <p>Price : $ {photo.price}</p>
                                <p>Available Seats {photo.seats}</p>
                                <div className="card-actions">
                                    <Link to='/classes'  ><button   className="btn btn-primary">Click to see all courses</button></Link>
                                </div>
                            </div>
            </div>)
            }
        </div>
    );
};

export default Photos;