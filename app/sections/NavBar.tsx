"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { FaHome, FaUser, FaGraduationCap, FaBriefcase, FaCertificate, FaTools, FaEnvelope } from "react-icons/fa";

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const href = e.currentTarget.getAttribute("href");
        if (!href) return;
        const targetId = href.substring(1);
        const element = document.getElementById(targetId);

        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setIsMenuOpen(false);
    };

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const navLinks = [
        { label: "Home", href: "#home", icon: <FaHome /> },
        { label: "About", href: "#about", icon: <FaUser /> },
        { label: "Education", href: "#education", icon: <FaGraduationCap /> },
        { label: "Work", href: "#work", icon: <FaBriefcase /> },
        { label: "Certificates", href: "#certificates", icon: <FaCertificate /> },
        { label: "Tools", href: "#tools", icon: <FaTools /> },
        { label: "Contact", href: "#contact", icon: <FaEnvelope /> },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50  shadow-md text-white py-3 px-5 flex justify-between items-center md:px-10">
            <h1 className="text-xl font-bold">YADAVALLI SAI RISHIK REDDY</h1>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
                {navLinks.map(({ label, href, icon }) => (
                    <Link key={href} href={href} className="flex items-center space-x-2 hover:text-gray-300" onClick={handleScroll}>
                        {icon} <span>{label}</span>
                    </Link>
                ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-2xl" onClick={toggleMenu} aria-label="Toggle Menu">
                {isMenuOpen ? <IoClose /> : <IoMenu />}
            </button>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="absolute top-16 left-0 w-full bg-[#0E1015] shadow-md md:hidden flex flex-col items-center space-y-4 py-5">
                    {navLinks.map(({ label, href, icon }) => (
                        <Link key={href} href={href} className="flex items-center space-x-2 hover:text-gray-300" onClick={handleScroll}>
                            {icon} <span>{label}</span>
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default NavBar;