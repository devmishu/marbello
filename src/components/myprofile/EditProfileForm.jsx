"use client";

import { useState } from "react";
import { authClient, signOut } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { redirect } from "next/navigation";

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
        <>
            <div className="mt-8 flex flex-col space-y-3">
                <button
                    onClick={() =>
                        document.getElementById("userDataUpdate").showModal()
                    }
                    className="w-full bg-[#4f46e5] text-white py-2.5  font-semibold hover:bg-[#4338ca] rounded-full"
                >
                    Edit Profile
                </button>

                <button
                    onClick={handleLogout}
                    className="w-full text-primary   border border-primary py-2.5 rounded-full font-semibold hover:cursor-pointer"
                >
                    Logout
                </button>
            </div>


            <dialog id="userDataUpdate" className="modal bg-white">
                <div className="modal-box relative">

                    {/* close button */}
                    <button
                        type="button"
                        onClick={() =>
                            document.getElementById("userDataUpdate")?.close()
                        }
                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                    >
                        ✕
                    </button>

                    <form onSubmit={handleUpdate} className="space-y-4 mt-7">

                        <input
                            type="text"
                            name="name"
                            placeholder="Your name"
                            className="w-full border p-2 rounded"
                        />

                        <input
                            type="url"
                            name="image"
                            placeholder="Image URL"
                            className="w-full border p-2 rounded"
                        />

                        <button
                            type="submit"
                            className="w-full bg-black text-white py-2 rounded"
                        >
                            {loading ? "Updating..." : "Update Profile"}
                        </button>
                    </form>
                </div>
            </dialog>
        </>
    );
};

export default EditProfileForm;