import React from 'react';
import { Link, useRouteError } from 'react-router-dom';


const Error = () => {
    const { error, status } = useRouteError();
    console.log(error.message);
    return (
        <div className='flex flex-col my-auto  pt-5 items-center justify-center'>
            <img className='' src="https://img.freepik.com/premium-vector/robot-working_506406-34.jpg?w=360" alt="" />
            <h1 className='text-red-600'>Error: {status || 404}</h1>
            <h4 className='text-blue-600'>{error.message}</h4>
            <Link to='/' className='btn btn-accent'>Back To Home Page</Link>
        </div>
    );
};

export default Error;