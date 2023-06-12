import React from 'react';

const MoreInfo = () => {
    return (
        <div className='grid gap-3 sm:grid-cols-1 md:grid-cols-2  sm:w-full my-16 items-center'>
            <div>
                <img className='rounded' src="https://keltymentalhealth.ca/sites/default/files/styles/blog_featured/public/images/articles/Daycamp.jpg?h=9ea59734&itok=KYVM_RHr" alt="" />
            </div>
            <div className=''>
                <h2 className='text-3xl text-green-600 font-bold'>Our Main Goal</h2>
                <p>Our main goal is to provide an unforgettable summer camp experience where children can learn, grow, and have a blast. We prioritize creating a nurturing and inclusive environment that fosters personal development, lifelong friendships, and cherished memories. Through diverse activities, engaging workshops, and passionate instructors, we ignite curiosity, spark creativity, and inspire a love for learning. Safety is paramount, with strict protocols and attentive staff ensuring a secure environment. We believe in the transformative power of summer camp, where children can explore new interests, discover talents, and step out of their comfort zones. From outdoor adventures to creative pursuits, we offer a wide range of activities catering to diverse interests. Our camp community emphasizes friendship, with team-building exercises and collaborative challenges fostering social skills and empathy. Join us for an exceptional journey of education, friendship, and unforgettable moments. Let's create memories that last a lifetime, providing your child with a remarkable and enriching summer experience.</p>
            </div>

        </div>
    );
};

export default MoreInfo;