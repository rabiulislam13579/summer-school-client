import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import UseAdmin from '../hooks/UseAdmin';

const Dashboard = () => {



  const [isAdmin] = UseAdmin();
  // const isAdmin=true;



  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet></Outlet>
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

        {
          isAdmin ? <>
            <ul className="menu p-4 w-80 py-16 h-full bg-base-200 text-base-content">
              {/* Sidebar content here */}
              <img className='w-1/5 mx-auto' src="https://img.freepik.com/premium-vector/font-design-word-summer-camp_1639-42583.jpg" alt="" />
              <h2 className='text-green-600 font-semibold mx-auto'>SUMMER CAMP SCHOOL</h2>
              <div className="divider  "></div>
              <li><Link to='/'>Admin Home</Link></li>
              <li><Link to='/dashboard/addClass'>Add New Class</Link></li>
              <li><Link to='/dashboard/allCourse'>All Courses</Link></li>
              <li><Link to='/manageEnrollment'>Manage Enrollment</Link></li>
              <li><Link to='/dashboard/manageUsers'>Manage Users</Link></li>

            </ul>l
          </> :
            <>
              <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                {/* Sidebar content here */}
                <img className='w-1/5 mx-auto' src="https://img.freepik.com/premium-vector/font-design-word-summer-camp_1639-42583.jpg" alt="" />
                <h2 className='text-green-600 font-semibold mx-auto'>SUMMER CAMP SCHOOL</h2>

                <div className="divider"></div>
                <li><Link to='/'>User Home</Link></li>
                <li><Link to='/dashboard/myCart'>My Cart</Link></li>
                <li><Link to='/paymentHistory'>Payment History</Link></li>

              </ul>
            </>
        }



      </div>
    </div>
  );
};

export default Dashboard;