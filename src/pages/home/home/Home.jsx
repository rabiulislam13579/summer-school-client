import React from 'react';
import Banner from './Banner/Banner';
import Instructors from '../../loadData/Instructors';
import About from './About/About';
import MoreInfo from './About/MoreInfo';
import useTitle from '../../../hooks/useTitle';
import Footer from './footer/Fotter';
import Photos from './Photo/Photo';

const Home = () => {
    useTitle('Home')
    return (
        <>
            
            <Banner></Banner>
            <About></About>
            <h2 className='text-green-600 font-semibold text-2xl text-center'>We have the best instructors !!!</h2>
            <Instructors></Instructors>
            <MoreInfo></MoreInfo>
            <h2 className='text-green-600 font-semibold text-2xl text-center mt-16'>Our popular Courses</h2>
            <Photos></Photos>
            <Footer></Footer>

        </>
    );
};

export default Home;