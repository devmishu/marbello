"use client"
import { useSession } from '@/lib/auth-client';
import React from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import EditProfileForm from '../myprofile/EditProfileForm';

const ProfileCard = () => {

    const logdinuser = useSession();

    const user = logdinuser?.data?.user;



    

    return (
        <div className="min-h-[80vh] bg-gray-50 flex items-center justify-center p-6 ">
            {/* Profile Card Container */}
            <div className="max-w-sm w-full bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

                {/* Top Decorative Banner (Theme Matching Purple) */}
                <div className="h-24 bg-primary"></div>

                {/* User Content Section */}
                <div className="px-6 pb-8">

                    {/* User Avatar */}
                    <div className="flex justify-center mt-5 mb-2">
                        <div className="w-24 h-24 rounded-full border-4 border-white overflow-hidden bg-gray-200">
                            <img
                                src={user?.image && user.image !== "" ? user.image : "/images/user.png"}
                                alt="User Avatar"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>


                    {/* User Info */}
                    <div className=" text-center">
                        <h2 className="text-2xl font-bold text-black ">
                            {user?.name}
                        </h2>

                        <div className="mt-2">
                            <div className="flex flex-col space-y-3">
                                {/* Email Info */}
                                <div className="flex items-center justify-center space-x-2 text-gray-600">
                                    <HiOutlineMail />
                                    <span className="text-sm">{user?.email}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <EditProfileForm user={user} />
                </div>

            </div>
        </div>
    );
};

export default ProfileCard;