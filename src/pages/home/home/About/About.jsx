import React from 'react';

const About = () => {
    return (
        <div className='grid gap-3 sm:grid-cols-1 md:grid-cols-2  sm:w-full my-16 items-center'>
            <div className=''>
                <h2 className='text-3xl text-green-600 font-bold'>About Us</h2>
                <p>Welcome to our summer school camp website, where endless adventures and unforgettable memories await! Our immersive and educational program is designed to provide a fun and enriching experience for students of all ages. 

At our camp, we believe in the power of exploration and learning through hands-on activities. From outdoor adventures like hiking, swimming, and team sports to creative workshops such as arts and crafts, music, and theater, there's something for everyone. Our experienced and passionate instructors are dedicated to creating a safe and nurturing environment, ensuring that every camper feels supported and encouraged to discover their unique talents and interests.

Friendship is a key aspect of our camp community, and we foster a sense of camaraderie among campers through team-building exercises, group projects, and collaborative challenges. Lifelong friendships are formed as campers engage in interactive group activities and share memorable experiences together.

Safety is our top priority, and we maintain a low camper-to-staff ratio to ensure individual attention and supervision. 

Join us this summer for an extraordinary journey of discovery, friendship, and personal growth. Unlock your full potential and create memories that will last a lifetime. Don't miss out on this amazing opportunity to be part of our summer school camp family!</p>
            </div>
            <div>
                <img className='rounded' src="https://just4funkidscamp.com/wp-content/uploads/2020/09/summer-camp-in-dublin.jpg" alt="" />
            </div>
        </div>
    );
};

export default About;