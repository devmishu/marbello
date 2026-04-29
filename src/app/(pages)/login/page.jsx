"use client"
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';

const LoginPage = () => {
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password);

        const { data, error } = await authClient.signIn.email({
            email,
            password,
            callbackURL: "/",
        });

        console.log({ data, error });
    }

    const handleLoginGoogle = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });

        console.log(data);
        console.log('google clicked');
    }
    return (
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <form onSubmit={handleFormSubmit}>
                    <fieldset className="fieldset">

                        <label className="label" htmlFor='email'>Email</label>
                        <input type="email" name='email' id='email' className="input" placeholder="Enter your email" />

                        <label className="label" htmlFor='password'>Password</label>
                        <input type="password" name='password' id='password' className="input" placeholder="Enter  Password" />
                        <button type='submit' className="btn btn-neutral mt-4">Login</button>
                    </fieldset>
                </form>
            </div>
            <button onClick={handleLoginGoogle} className='btn'>Login with google</button>
            <Link href="/register" className='btn'>Register</Link>

        </div>
    );
};

export default LoginPage;