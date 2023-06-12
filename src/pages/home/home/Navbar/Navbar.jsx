import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../provider/AuthProvider';
import UseClass from '../../../../hooks/UseClass';
import UseAdmin from '../../../../hooks/UseAdmin';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const [isAdmin] = UseAdmin();
    const [enrolls] = UseClass();

    const handleLogout = () => {
        logout()
            .then()
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <Link to='/'>Home</Link>
                        <Link to='/instructors'>Instructors</Link>
                        <Link to='/classes'>Classes</Link>
                        <Link to='/dashboard'>Dashboard</Link>
                        <Link className='ps-3' to='/enrolled'>Enrolled Classes : {enrolls?.length || 0}</Link>
                    </ul>
                </div>
                <img className='w-1/5' src="https://img.freepik.com/premium-vector/font-design-word-summer-camp_1639-42583.jpg" alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className=" menu menu-horizontal px-1">
                    
                    <Link className='ps-3' to='/'>Home</Link>
                    <Link className='ps-3' to='/instructors'>Instructors</Link>
                    <Link className='ps-3' to='/classes'>Classes</Link>
                    {isAdmin ? <Link className='ps-3' to='/dashboard/manageUsers'>Dashboard</Link> : <Link className='ps-3' to='/dashboard/myCart'>Enrolled Classes : {enrolls?.length || 0}</Link>}
                </ul>
            </div>
            <div className="navbar-end indicator text-xl">
            {user && <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
                        <div className="avatar me-4">
                            <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={user?.photoURL} />
                            </div>
                        </div>
                    </div>}
                {user ? <Link onClick={handleLogout} className="btn">LogOut</Link> :
                    <Link to='login' className="btn">Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;