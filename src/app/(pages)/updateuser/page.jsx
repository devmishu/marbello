"use client";

import { useState } from "react";
import { authClient, signOut } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { redirect } from "next/navigation";
import { Link2, User2 } from "lucide-react";

const EditProfileForm = ({ user }) => {
    const [loading, setLoading] = useState(false);

    const handleUpdate = async (e) => {
        e.preventDefault();
        setLoading(true);

        const name = e.target.name.value;
        const image = e.target.image.value;

        const { error } = await authClient.updateUser({
            name,
            image,
        });

        setLoading(false);

        if (error) {
            toast.error(error.message);
            return;
        }

        toast.success("Profile updated successfully");

        document.getElementById("userDataUpdate")?.close();
    };

    const handleLogout = () => {
        signOut();
        redirect("/");
    }


    return (
        <div className='min-h-[70vh] flex flex-col justify-center items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
                <div className="card-body">
                    <h2 className='text-center font-bold text-2xl'>Welcome To MERBELLO</h2>


                    <form onSubmit={handleUpdate} className="space-y-4 mt-7">
                        <label className="label " htmlFor='email'>Name</label>
                        <div className="input w-full outline-none rounded-full">
                            <User2 />
                            <input
                                type="text"
                                name="name"
                                placeholder="Your name"
                            />
                        </div>

                        <label className="label " htmlFor='email'>Image URL</label>
                        <div className="input w-full outline-none rounded-full ">
                            <Link2 />
                            <input type="url" name='image' id='email' placeholder="Image URL" />
                        </div>



                        <button
                            type="submit"
                            className='w-full mt-5 btn btn-outline btn-primary hover:bg-transparent hover:text-primary hover:shadow-none rounded-full'
                        >
                            {loading ? "Updating..." : "Update Profile"}
                        </button>
                    </form>
                    <button
                        onClick={() => redirect('/myprofile')}
                        type='submit' className='mt-5 btn btn-outline btn-primary hover:bg-transparent hover:text-primary hover:shadow-none rounded-full'>View Profile</button>


                </div>
            </div>
        </div>
    );
};

export default EditProfileForm;

