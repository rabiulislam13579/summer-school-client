import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import UseAxiosSecure from '../../hooks/UseAxiosSecure';

const AllUsers = () => {

    const [axiosSecure] = UseAxiosSecure()

    const {data: users=[], refetch}= useQuery(['users'], async()=>{
        const res = await axiosSecure.get('/users')
        return res.data;
    })

    const handleDelete=(id)=>{
        const proceed = confirm('Are you sure want to delete ?');
        if(proceed){
            fetch(`https://summer-school-server-six.vercel.app/users/${id}`,{
                method: 'DELETE',
                
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.deletedCount>0){
                    refetch()
                    alert('Deleted Successfully');
                    
                }
            })
        }


    }
    const handleMakeAdmin= (id)=>{
        fetch(`https://summer-school-server-six.vercel.app/users/admin/${id}`,{
            method: 'PATCH',
            
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount>0){
                alert('User Added As Admin')
            }
        })
    }

    return (
        <div>
            Total users: {users.length}
            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        users.map((user, index)=>  <tr key={user._id}>
            <th>{index+1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td><button className="btn btn-ghost" onClick={()=>handleMakeAdmin(user._id)}>{user.role === 'admin' ? 'admin': 'user'}</button></td>
            <td><button onClick={()=>handleDelete(user._id)}  className="btn btn-ghost bg-red-400 text-white btn-xs"> <FaTrashAlt /> </button></td>
          </tr>)
      }
     
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUsers;