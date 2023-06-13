import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const SignUp = () => {
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const { createUser } = useContext(AuthContext);




    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)


            .then(result => {
               const userObj = {name,photo,email}
                fetch(' https://summer-school-server-five.vercel.app/users',{
                    method: 'POST',
                    headers:{
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userObj)
                })
                .then(res=>res.json())
                .then(data=>{
                    if(data.insertedId){
                        console.log(data);
                        alert('User is added')
                    }
                })

                const createdUser = result.user;
                console.log(createdUser);
            })
            .catch(error => {
                setError(error.message);
            })
        if (password.length < 6) {
            setError('Put six char')
            setSuccess('')
        }

        else {
            setSuccess('Logged in successfully')
            setError('')
        }
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col md:flex-row">
                <div className="text-center lg:text-left w-1/2">

                    <img className='w-96 h-full mr-96 rounded' src="https://pomepos.com/wp-content/uploads/2015/01/LoginRed.jpg" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl text-purple-900 font-bold">Resister now!</h1>
                        <form onSubmit={handleSignUp}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" name='password' className="input input-bordered" />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">photoUrl</span>
                                </label>
                                <input type="url" placeholder="photoUrl" name='photo' className="input input-bordered" />

                            </div>



                            <div className="form-control mt-6">
                                <input className='btn' type="submit" value='Sign Up' />
                            </div>
                            {error? <p className='text-red-500'>{error}</p>:
                            <p className='text-green-500'>{success}</p>}
                        </form>
                        <p>Already have an account ? <Link className='text-primary' to='/resister'>Login</Link> </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;