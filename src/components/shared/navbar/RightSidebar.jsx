"use client"
import { signOut, useSession } from '@/lib/auth-client';
import { LogIn, LogOut, UserRoundKey } from 'lucide-react';
import Link from 'next/link';
import { redirect } from 'next/navigation';

const RightSidebar = () => {
    const logdinuser = useSession();
    const isPending = logdinuser.isPending;

    const user = logdinuser?.data?.user;

    const handleLogout = () => {
        signOut();
        redirect("/");
    }

    return (
        <>
            {
                isPending ? <div className="navbar-end  gap-3 mr-15">
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
                                <button onClick={() => handleLogout()} className="btn btn-primary rounded-full"><LogOut size="19" className='hidden sm:block' /><span className='sm:text-[18px] '> Logout</span> </button>
                            </div > :
                                <div className='flex gap-2 border p-1 border-gray-200 rounded-full '>
                                    <Link href="/register" className="btn btn-primary rounded-full">
                                        <UserRoundKey size="19" className='hidden sm:block' /><span className='sm:text-[18px] '> Register</span>
                                    </Link>
                                    <Link href="/login" className="btn btn-primary rounded-full"><LogIn size="19" className='hidden sm:block' /><span className='sm:text-[18px] '> Login</span></Link>
                                </div>
                        }

                    </div>
            }
        </>
    );
};

export default RightSidebar;