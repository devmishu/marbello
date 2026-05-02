"use client"
import { authClient } from '@/lib/auth-client';
import { Lock, Mail } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-toastify';



const LoginPage = () => {
    const handleLogin = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        const { data, error } = await authClient.signIn.email({
            email,
            password,
            callbackURL: "/",
        });

        if (error) {
            toast.error(error.message)
        }
        else {
            toast.success("Successfully logged in!")
        }
    }

    const handleLoginGoogle = async () => {

        const data = await authClient.signIn.social({
            provider: "google",
            callbackURL: "/"
        });
    }
    return (
        <div className='animate__animated animate__backInDown min-h-[70vh] flex flex-col justify-center items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
                <div className="card-body">
                    <h2 className='text-center font-bold text-2xl'>Welcome To MERBELLO</h2>
                    <form onSubmit={handleLogin}>
                        <fieldset className="fieldset">

                            <label className="label " htmlFor='email'>Email</label>
                            <div className="input w-full outline-none rounded-full">
                                <Mail />
                                <input required type="email" name='email' id='email' placeholder="Enter your email" />
                            </div>

                            <label className="label " htmlFor='password '>Password</label>
                            <div className="input w-full outline-none rounded-full">
                                <Lock />
                                <input required type="password" name='password' id='password' className='outline-none' placeholder="Enter  Password" />
                            </div>
                            <button type='submit' className='mt-5 btn btn-outline btn-primary hover:bg-transparent hover:text-primary hover:shadow-none rounded-full'>Login</button>
                        </fieldset>
                    </form>

                    <span className='text-center my-3 '>Or</span>

                    <button onClick={handleLoginGoogle} className='btn btn-outline btn-primary hover:bg-transparent hover:text-primary hover:shadow-none rounded-full '> <FcGoogle /> Login with google</button>

                    <div className='flex justify-center pb-5'>
                        <span className='text-gray-500'>Dont have an acount?</span><Link href="/register" className='text-primary'>Register</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;