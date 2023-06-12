import React from 'react';
import UseClass from '../../hooks/UseClass';
import { FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MyCart = () => {
    const [ enrolls , refetch] = UseClass();
    
    const total = enrolls.reduce((sum, item) => Number(item.price) + Number(sum), 0)

    const handleDelete= (row)=>{
        const proceed = confirm('Are you sure want to delete ?');
        if(proceed){
            fetch(`https://summer-school-server-six.vercel.app/enrolled/${row._id}`,{
                method: 'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount>0){
                    refetch()
                    alert('Deleted Successfully');
                    
                }
            })
        }   
    }

    return (
        <div>
            <div className=' flex justify-around items-center my-4'>
                <p className='text-green-600  text-xl'>Enrolled Courses: {enrolls.length}</p>
                <p className='text-green-600  text-xl'>Total payment: {total}</p>
                <Link to='/dashboard/payment'><button className="btn btn-warning btn-sm">Pay</button></Link>

            </div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Class Name</th>
        <th>Instructor</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        enrolls.map((row, index) => <tr
        key={row._id}
        >
            <td>
              {index + 1}
            </td>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={row.image} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{row.courseName}</div>
                  <div className="text-sm opacity-50">Available Seats :{row.seats}</div>
                </div>
              </div>
            </td>
            <td>
              Zemlak, Daniel and Leannon
              <br/>
              <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
            </td>
            <td>$ {row.price}</td>
            <td>
              <button onClick={()=>handleDelete(row)}  className="btn btn-ghost bg-red-400 text-white btn-xs"> <FaTrashAlt /> </button>
            </td>
          </tr>)
      } 
      
     
    </tbody>
    
  </table>
</div>
        </div>
    );
};

export default MyCart;