import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const Class = ({music}) => {
    useTitle('Courses')

    const {user} = useContext(AuthContext)

    const { _id, image,courseName, price, seats, instructorName  } = music;
    const handleEnroll =(music)=>{
        const objectData = {enrollId: _id, courseName,instructorName,price,seats, image, email:user.email}
        if(user && user.email){
            fetch('https://summer-school-server-pink.vercel.app/enrolled',{
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(objectData)
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.insertedId){
                    alert('Class is added')
                }
            })
        }
        else{
            navigate('/login')
        }
    }

    return (
        <div className={`card w-96  shadow-xl ${seats == 0 ? 'bg-red-200' : 'bg-base-100'}`}>
                            <figure className="px-10 pt-10">
                                <img src={image} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{courseName}</h2>
                                <p>{instructorName}</p>
                                <p>Price : $ {price}</p>
                                <p>Available Seats {seats}</p>
                                <div className="card-actions">
                                    <button  onClick={()=>handleEnroll(music)} disabled={seats == 0} className="btn btn-primary">Enroll Now</button>
                                </div>
                            </div>
                        </div>
    );
};

export default Class;