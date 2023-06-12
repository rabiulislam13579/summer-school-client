import React from 'react';

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://eastwesteducationgroup.com/wp-content/uploads/2016/01/Summer-Camp.jpg" className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12 w-1/2'>
                        <h2 className='text-5xl font-bold'> <span className='text-red-600'>K</span><span className='text-yellow-600'>I</span><span className='text-green-600'>D</span><span className='text-blue-600'>S</span> <br /> SUMMER <span className='text-yellow-600'> SCHOOL</span> <br /> <span className='text-blue-600'>CAMP</span></h2>
                        <p>
"Discover endless summer adventures at our enriching school camp! Engage in exciting activities, forge new friendships, and unleash your potential. Unforgettable memories await at our immersive and educational summer program. Join us now!"</p>
                        <div>
                            <button className="btn btn-primary mr-5">Discover More</button>
                            <button className="btn btn-outline btn-accent">Latest News</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle bg-slate-600 mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle bg-slate-600">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://i0.wp.com/www.voiceofsandiego.org/wp-content/uploads/2020/08/Magnolia-Elementary-800x533.jpg?resize=800%2C533&ssl=1" className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12 w-1/2'>
                    <h2 className='text-5xl font-bold'> <span className='text-red-600'>K</span><span className='text-yellow-600'>I</span><span className='text-green-600'>D</span><span className='text-blue-600'>S</span> <br /> SUMMER <span className='text-yellow-600'> SCHOOL</span><br /> <span className='text-blue-600'>CAMP</span></h2>
                        <p>
"Discover endless summer adventures at our enriching school camp! Engage in exciting activities, forge new friendships, and unleash your potential. Unforgettable memories await at our immersive and educational summer program. Join us now!"</p>
                        <div>
                            <button className="btn btn-primary mr-5">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle bg-slate-600 mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle bg-slate-600">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://www.mississauga.ca/wp-content/uploads/sites/5/2023/03/DSC4882-378x278.jpg" className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12 w-1/2'>
                    <h2 className='text-5xl font-bold'> <span className='text-red-600'>K</span><span className='text-yellow-600'>I</span><span className='text-green-600'>D</span><span className='text-blue-600'>S</span> <br /> SUMMER <span className='text-yellow-600'> SCHOOL</span><br /> <span className='text-blue-600'>CAMP</span></h2>                        <p>
"Discover endless summer adventures at our enriching school camp! Engage in exciting activities, forge new friendships, and unleash your potential. Unforgettable memories await at our immersive and educational summer program. Join us now!"</p>
                        <div>
                            <button className="btn btn-primary mr-5">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-5 bg-slate-600">❮</a>
                    <a href="#slide4" className="btn btn-circle bg-slate-600">❯</a>
                </div>
            </div>

        </div>
    );
};

export default Banner;