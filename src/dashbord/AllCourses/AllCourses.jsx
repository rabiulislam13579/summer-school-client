import React, { useContext, useEffect, useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AllCourses = () => {
    
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch(' https://summer-school-server-pink.vercel.app/classes')
            .then(res => res.json())
            .then(data => {
                setCourses(data);
            })
    }, [])

    const handleDelete= (course)=>{
        const proceed = confirm('Are you sure want to delete ?');
        if(proceed){
            fetch(` https://summer-school-server-pink.vercel.app/classes/${course._id}`,{
                method: 'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount>0){
                    
                    alert('Deleted Successfully');
                    const remaining = courses.filter(course => course._id !==id)
                    setCourses(remaining)
                    
                }
            })
        }   
    }

  

    return (
        <div>
            <div>
                <p className='text-3xl text-green-600 font-semibold'>Number of Courses: {courses.length}</p>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Course Name</th>
                            <th>Instructor</th>
                            <th>Price</th>
                            <th>Edit</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            courses.map((course, index) => <tr
                                key={course._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={course.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{course.courseName}</div>
                                            <div className="text-sm opacity-50">Available Seats :{course.seats}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {course.instructorName}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                </td>
                                <td>$ {course.price}</td>
                                <td><Link to={`/dashboard/update/${course._id}`}   className="btn btn-xs">Update</Link></td>
                                <td>
                                    <button onClick={() => handleDelete(course)} className="btn btn-ghost bg-red-400 text-white btn-xs"> <FaTrashAlt /> </button>
                                </td>
                            </tr>)
                        }


                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AllCourses;