import React, { useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';

const Instructors = () => {
    useTitle('Instructors')
    const [teachers, setTeachers] = useState([]);
    useEffect(() => {
        fetch(` https://summer-school-server-pink.vercel.app/instructors`)
            .then(res => res.json())
            .then(data => setTeachers(data))
    }, [])
    return (
        <div className='grid md:grid-cols-3'>
            {
                teachers.map(instructor =>
                    <div key={instructor._id}>
                        <div className="  card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={instructor.image} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{instructor.name}</h2>
                                <p>
                                    Rating: {instructor.rating}</p>
                                <div className="card-actions">
                                    <button className="btn btn-primary">View Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Instructors;