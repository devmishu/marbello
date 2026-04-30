"use client"
import ProfileCard from '@/components/ui/ProfileCard';
import { signOut, useSession } from '@/lib/auth-client';
import { redirect } from 'next/navigation';
import React from 'react';

const MyprofilePage = () => {
    const logdinuser = useSession();
    // console.log("MyprofilePage", logdinuser);
    const user = logdinuser?.data?.user;
    // const { image, name, email } = user;
    console.log(user);
    // console.log(image, name, email);

    const handleLogout = () => {
        signOut();
        redirect("/");
    }
    return (
        <div>
            <ProfileCard user={user} handleLogout={handleLogout} />
        </div>
    );
};

export default MyprofilePage;