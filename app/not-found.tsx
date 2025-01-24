import React from "react";
import Link from "next/link";
import Image from "next/image";

const NotFound = () => {
    return (
        <div className="relative z-10 flex h-[100vh] w-full justify-center items-center">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute left-1/4 top-10">
                    <div className="h-8 w-8 rounded-l-full bg-gray-200"></div>
                </div>
                <div className="absolute right-20 top-20">
                    <div className="h-2 w-2 rounded-full bg-white"></div>
                </div>
                <div className="absolute left-32 top-32">
                    <div className="h-2 w-2 rounded-full bg-white"></div>
                </div>
                <div className="absolute right-48 top-48">
                    <div className="h-2 w-2 rounded-full bg-white"></div>
                </div>
            </div>
            
            <div className="relative z-10 flex flex-col items-center gap-8 text-white">
                <h1 className="text-[120px] font-bold tracking-wider text-[#ff5d52]">404</h1>
                <p className="text-xl text-gray-400">PAGE NOT FOUND</p>
                <Link 
                    href="#home"
                    className="mt-4 rounded-full border-2 border-[#ff5d52] px-8 py-2 text-[#ff5d52] 
                    transition-colors hover:bg-[#ff5d52] hover:text-white"
                >
                    go back
                </Link>
            </div>

            <div className="absolute bottom-0 w-full">
                <div className="relative h-48">
                    <div className="absolute bottom-0 w-full">
                        <svg viewBox="0 0 1440 320" className="fill-[#2a3245]">
                            <path d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
