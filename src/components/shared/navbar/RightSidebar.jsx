"use client"
import { signOut, useSession } from '@/lib/auth-client';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';

const RightSidebar = () => {
    const logdinuser = useSession();
    const isPending = logdinuser.isPending;
    console.log(isPending);

    const user = logdinuser?.data?.user;
    console.log(user);

    const handleLogout = () => {
        signOut();
        redirect("/");
    }

    return (
        <>
            {
                isPending ? <div className="navbar-end  gap-3">
                    <span className="loading loading-spinner loading-xs"></span>
                </div> :
                    <div className="navbar-end  gap-3">
                        {
                            user ? <div className='flex justify-center items-center gap-2'>
                                <Link href="/myprofile">
                                    <div className="w-12 h-12 rounded-full border-4 border-white overflow-hidden bg-gray-200">
                                        <img
                                            src={user?.image && user.image !== "" ? user.image : "/images/user.png"}
                                            alt="User Avatar"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </Link>
                                <button onClick={() => handleLogout()} className="btn btn-primary">Logout</button>
                            </div > : <>
                                <Link href="/register" className="btn btn-primary">Register</Link>
                                <Link href="/login" className="btn btn-primary">Login</Link>
                            </>
                        }

                    </div>
            }
        </>
    );
};

export default RightSidebar;