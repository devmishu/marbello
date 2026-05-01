"use client"
import { authClient } from '@/lib/auth-client';
import { Link2, Lock, Mail, User2 } from 'lucide-react';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-toastify';

const RegisterPage = () => {
    const handleRegister = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const image = e.target.image.value;
        const password = e.target.password.value;

        console.log(name, image, email, password);


        const { data, error } = await authClient.signUp.email({
            name,
            email,
            image,
            password
        });

        if (error) {
            toast.error(error.message)
        }
        else {
            toast.success("Successfully Registered!");
            redirect("/login");
        }
    }

    const handleRegisterGoogle = async () => {

        const data = await authClient.signIn.social({
            provider: "google",
            callbackURL: "/"
        });
    }

    return (
        <div className='min-h-[70vh] flex flex-col justify-center items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h2 className='text-center font-bold text-2xl'>Create Your MERBELLO Acount</h2>

                    <button onClick={handleRegisterGoogle} className='btn btn-outline btn-primary hover:bg-transparent hover:text-primary hover:shadow-none my-5 rounded-full '> <FcGoogle /> Register with google</button>

                    <form onSubmit={handleRegister}>
                        <fieldset className="fieldset">
                            <label className="label" htmlFor='name'>Name</label>
                            <div className="input w-full outline-none rounded-full">
                                <User2 />
                                <input type="text" name='name' id='name' placeholder="Enter your name" />
                            </div>

                            <label className="label" htmlFor='image'>Image Url</label>
                            <div className="input w-full outline-none rounded-full">
                                <Link2 />
                                <input type="url" name='image' id='image' className="input w-full" placeholder="Enter your image url" />
                            </div>

                            <label className="label" htmlFor='email'>Email</label>
                            <div className="input w-full outline-none rounded-full">
                                <Mail />
                                <input type="email" name='email' id='email' placeholder="Enter your email" />
                            </div>

                            <label className="label" htmlFor='password'>Password</label>
                            <div className="input w-full outline-none rounded-full">
                                <Lock />
                                <input type="password" name='password' id='password' className='outline-none' placeholder="Enter  Password" />
                            </div>
                            <button type='submit' className='mt-5 btn btn-outline btn-primary hover:bg-transparent hover:text-primary hover:shadow-none rounded-full'>Regester</button>
                        </fieldset>
                    </form>

                    <div className='flex justify-center pb-5'>
                        <span className='text-gray-500'>Alardy have an acount?</span><Link href="/login" className='text-primary'>Login</Link>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default RegisterPage;