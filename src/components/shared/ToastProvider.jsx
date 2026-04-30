"use client"
import React from 'react';
import { ToastContainer } from 'react-toastify';

const ToastProvider = () => {
    return <ToastContainer
        closeOnClick
        draggable
        pauseOnHover
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
        closeButton={false}
        theme="light"

        toastStyle={{
            backgroundColor: "white",
            borderRadius: "50px",
            border: "1px solid #e2e8f0",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.03)",
            minHeight: "40px",
            width: "fit-content",
            margin: "10px auto",
            padding: "0px 15px",
        }}
        bodyStyle={{
            padding: "5px 0",
            margin: "0",
            color: "#1e40af",
            fontSize: "14px",
            fontWeight: "500"
        }}
    />
};

export default ToastProvider;