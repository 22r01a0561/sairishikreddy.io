import Link from "next/link";
import { inter } from "../fonts/inter";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";
import AnimatedWords from "../animations/AnimatedWords";
import { motion } from "framer-motion";
import React from "react";
import HackerBackground from "../components/background/hackerbg";

const Contact = () => {
    return (
        <motion.section
            className="relative z-10 flex h-[85vh] w-full items-center justify-center overflow-hidden 
                py-16 md:h-[80vh] md:py-20 lg:h-[90vh] lg:pt-0 lg:pb-28"
            id="contact"
            initial="initial"
            animate="animate"
        >
            {/* Background */}
            <div className="absolute inset-0 opacity-50">
                <HackerBackground />
            </div>

            {/* Content Wrapper */}
            <div className="relative z-20 mx-auto flex w-[90%] flex-col items-center justify-center pt-10 md:pt-0">
                {/* Title */}
                <div
                    className={`flex flex-col items-start justify-center ${inter.className} 
                    w-full sm:items-center lg:max-w-[1440px]`}
                >
                    <AnimatedWords
                        title="contact"
                        style="flex max-w-[250px] flex-col items-start text-left text-[80px] font-extrabold uppercase 
                        leading-[0.9em] text-[#e4ded7] sm:max-w-full sm:flex-row sm:items-center sm:justify-center 
                        sm:text-center sm:text-[120px] md:text-[130px] lg:text-center lg:text-[140px] xl:text-[180px]"
                    />
                </div>

                {/* Contact Details */}
                <div
                    className="mt-16 flex w-full flex-col items-end justify-center gap-12 
                    sm:mt-24 md:mt-28 md:flex-row md:items-start md:justify-between lg:mt-16 lg:max-w-[1440px]"
                >
                    {/* Email Section */}
                    <div
                        className="flex w-full max-w-[400px] flex-col items-end text-right text-[14px] font-semibold 
                        uppercase text-[#e4ded7] sm:w-[350px] sm:text-[14px] md:w-[310px] md:items-start md:text-left 
                        md:text-[16px] lg:w-[420px] lg:text-[16px]"
                    >
                        <AnimatedBody
                            text="Hi! I'm a fresh graduate looking to connect. Would you like to discuss any opportunities 
                            or projects we could work on together?"
                            className="-mb-1 inline-block overflow-hidden pt-1 sm:-mb-2 md:-mb-3 lg:-mb-4"
                        />

                        {/* Updated Gmail Redirection Link */}
                        <Link
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=sairishikreddyyadavalli@gmail.com&su=Let's%20work%20together!&body=Hello,%20I%20think%20we%20need%20you%20to%20work%20on/collaborate%20this%20particular%20product...%20Reach%20out%20as%20soon%20as%20you%20can."
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Send me an email"
                            className="mt-2 w-auto text-[16px] underline underline-offset-2 transition-all duration-300 
                            hover:no-underline hover:text-[#fff] sm:mt-3 md:mt-4 lg:mt-5"
                        >
                            <AnimatedBody text="Send me an email" />
                        </Link>
                    </div>

                    {/* Social Links */}
                    <div
                        className="flex gap-8 text-[16px] font-bold text-[#e4ded7] sm:gap-12 sm:text-[20px] 
                        md:gap-10 md:text-[18px] lg:gap-16 lg:text-[24px]"
                    >
                        <Link
                            href="https://github.com/22r01a0561"
                            target="_blank"
                            aria-label="View My GitHub Profile"
                        >
                            <AnimatedTitle
                                text="GITHUB"
                                className="text-[16px] font-bold text-[#e4ded7] transition-all duration-300 
                                hover:text-[#fff] sm:text-[20px] md:text-[18px] lg:text-[24px]"
                                wordSpace="mr-[0.25em]"
                                charSpace="mr-[0.01em]"
                            />
                        </Link>

                        <Link
                            href="https://www.linkedin.com/in/rishik08"
                            target="_blank"
                            aria-label="View My LinkedIn Profile"
                        >
                            <AnimatedTitle
                                text="LINKEDIN"
                                className="text-[16px] font-bold text-[#e4ded7] transition-all duration-300 
                                hover:text-[#fff] sm:text-[20px] md:text-[18px] lg:text-[24px]"
                                wordSpace="mr-[0.25em]"
                                charSpace="mr-[0.01em]"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;
