import Link from 'next/link';
import React from 'react';
import Navmenu from './Navmenu';
import RightSidebar from './RightSidebar';

const Navbar = () => {


    return (
        <div className='bg-base-100  shadow-sm sticky top-0 z-50 '>
            <div className="navbar container mx-auto px-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <Navmenu />
                        </ul>
                    </div>
                    <Link href="/" className=' sm:text-2xl text-primary font-bold'>MERBELLO</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <Navmenu />
                    </ul>
                </div>

                <RightSidebar />
            </div>

        </div>

    );
};

export default Navbar;