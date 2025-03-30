"use client";
import Link from "next/link";
import Container from "../components/container/Container";
import React, { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5"; // Menu Icons
import { FaHome, FaUser, FaGraduationCap, FaBriefcase, FaCertificate, FaTools, FaEnvelope, FaCode } from "react-icons/fa"; // Section Icons

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        const href = e.currentTarget.href;
        const targetId = href.replace(window.location.origin + '/', '').split('#')[1];
        const elem = document.getElementById(targetId);

        if (elem) {
            elem.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest'
            });
        }

        setIsMenuOpen(false); // Close menu on link click (for mobile view)
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navLinks = [
        { label: "HOME", href: "#home", icon: <FaHome /> },
        { label: "ABOUT", href: "#about", icon: <FaUser /> },
        { label: "EDUCATION", href: "#education", icon: <FaGraduationCap /> },
        // { label: "CODINGPROFILES", href: "#codingprofiles", icon: <FaCode /> },
        { label: "WORK", href: "#work", icon: <FaBriefcase /> },
        { label: "CERTIFICATES", href: "#certifications", icon: <FaCertificate /> },
        { label: "TOOLS", href: "#tools", icon: <FaTools /> },
        { label: "CONTACT", href: "#contact", icon: <FaEnvelope /> },
    ];

    return (
        <>
            {/* Desktop NavBar */}
            <nav className="nowrap fixed top-5 left-0 right-0 z-50 my-4 mx-auto flex items-center 
            justify-center gap-4 px-4 py-2 text-[#e4ded7] sm:w-[450px] md:w-[600px] lg:w-[700px]">
                <Container
                    width="auto"
                    height="65px"
                    color="rgba(255, 255, 255, 0.1)"
                    borderRadius={12}
                    top="0px"
                    left="10px"
                    angle={0}
                >
                    <div className="hidden md:flex items-center justify-center gap-5">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                data-blobity-magnetic="false"
                                onClick={handleScroll}
                                aria-label={`Scroll to ${link.label} Section`}
                            >
                                <h4 className="py-2 px-4 text-[14px] sm:text-[16px] md:text-[18px] 
                                hover:bg-transparent  rounded-lg 
                                transition-all duration-300 cursor-pointer flex items-center gap-2">
                                    {link.icon} {link.label}
                                </h4>
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Icon */}
                    <div className="md:hidden flex justify-end items-center">
                        <button
                            onClick={toggleMenu}
                            className="text-white text-2xl"
                            aria-label="Toggle Menu"
                        >
                            {isMenuOpen ? <IoClose /> : <IoMenu />}
                        </button>
                    </div>
                </Container>
            </nav>

            {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
                <div className="fixed top-[80px] right-5 z-50 bg-[#ffffff20] p-4 rounded-lg shadow-lg 
                 w-[200px]">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={handleScroll}
                            className="block py-2 px-3 text-[16px]  rounded-md 
                            transition-all duration-300 flex items-center gap-2"
                        >
                            {link.icon} {link.label}
                        </Link>
                    ))}
                </div>
            )}
        </>
    );
};

export default NavBar;
