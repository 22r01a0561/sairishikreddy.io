import React from "react";
import Link from "next/link";
import Image from "next/image";

const NotFound = () => {
    return (
        <div className="flex h-[100vh] flex-col items-center justify-center gap-5 bg-black text-white">
            <div className="text-center">
                <p className="text-[40px]">404</p>
                <p className="text-[14px]">This page could not be found.</p>
            </div>
        </div>
    );
};

export default NotFound;
