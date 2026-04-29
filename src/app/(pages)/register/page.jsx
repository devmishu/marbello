"use client"
import { authClient } from '@/lib/auth-client';
import React from 'react';

const RegisterPage = () => {
    const handleFormSubmit = async (e) => {
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

        console.log({ data, error });
    }

    


    return (
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <form onSubmit={handleFormSubmit}>
                    <fieldset className="fieldset">
                        <label className="label" htmlFor='name'>Name</label>
                        <input type="text" name='name' id='name' className="input" placeholder="Enter your name" />

                        <label className="label" htmlFor='image'>Image Url</label>
                        <input type="url" name='image' id='image' className="input" placeholder="Enter your image url" />

                        <label className="label" htmlFor='email'>Email</label>
                        <input type="email" name='email' id='email' className="input" placeholder="Enter your email" />

                        <label className="label" htmlFor='password'>Password</label>
                        <input type="password" name='password' id='password' className="input" placeholder="Enter  Password" />
                        <button  type='submit' className="btn btn-neutral mt-4">Regester</button>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;