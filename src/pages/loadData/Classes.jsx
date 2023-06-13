import React, { useEffect, useState } from 'react';
import Class from '../Class/Class';

const Classes = () => {
    const [musics, setMusics] = useState([]);
    useEffect(() => {
        fetch(` https://summer-school-server-five.vercel.app/classes`)
            .then(res => res.json())
            .then(data => setMusics(data))
    }, [])


   


    return (
        <div className='grid md:grid-cols-3'>
            {
                musics.map(music => <Class
                key={music._id}
                music={music}
                ></Class> )
                }
        </div>
    );
};

export default Classes;