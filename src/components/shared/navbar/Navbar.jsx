
import Link from 'next/link';
import React from 'react';
import RightSidebar from './RightSidebar';
import NavLink from './NavLink';
import Image from 'next/image';

const Navbar = async () => {

    return (
        <div className='bg-base-100  shadow-sm sticky top-0 z-50 '>
            <div className="navbar container mx-auto px-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="hover:cursor-pointer  lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className=" menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 font-medium shadow">
                            <li className='hover:text-primary duration-75'>
                                <NavLink href="/">Home</NavLink>
                            </li>
                            <li className='hover:text-primary duration-75'>
                                <NavLink href="/alltiles">All Tiles</NavLink>
                            </li>
                            <li className='hover:text-primary duration-75'>
                                <NavLink href="/myprofile">My Profile</NavLink>
                            </li>
                        </ul>
                    </div>
                    <Link href="/" className=' sm:text-2xl text-primary font-bold'>
                        <Image width={200} height={80} src="/images/logo.png" alt="merbello logo" className='w-50 h-20 -ml-4' />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className='flex gap-4 font-semibold '>
                        <li className='hover:text-primary duration-75'>
                            <NavLink href="/">Home</NavLink>
                        </li>
                        <li className='hover:text-primary duration-75'>
                            <NavLink href="/alltiles">All Tiles</NavLink>
                        </li>
                        <li className='hover:text-primary duration-75'>
                            <NavLink href="/myprofile">My Profile</NavLink>
                        </li>
                    </ul>
                </div>

                <RightSidebar />
            </div>

        </div>

    );
};

export default Navbar;