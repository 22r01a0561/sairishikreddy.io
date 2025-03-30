import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedBody from "../animations/AnimatedBody";
import React from "react";

const Footer = () => {
    return (
        <motion.section
            className="h-auto w-full items-center justify-center bg-[#0E1015]/80 py-6 font-bold uppercase md:py-10 lg:py-6"
            initial="initial"
            animate="animate"
        >
            <motion.div className="mx-auto flex w-[90%] flex-col items-center justify-center text-center text-[12px] text-[#e4ded7] sm:flex-row sm:justify-between sm:text-[12px] md:text-[14px] lg:max-w-[1440px] lg:text-[14px]">
                <AnimatedBody
                    text={"© YADAVALLI SAI RISHIK REDDY 2025"}
                    className={"m-0 p-0"}
                />
                <div className="flex flex-col items-center sm:flex-row sm:gap-1 md:gap-2">
                    <AnimatedBody text={"Design & Deployed by"} className={"m-0 p-0"} />
                    <Link
                        href="https://github.com/22r01a0561"
                        target="_blank"
                        aria-label="Eldora UI Github"
                    >
                        <span className="underline underline-offset-2 hover:no-underline">
                            <AnimatedBody text={"YADAVALLI SAI RISHIK REDDY"} className={"m-0 p-0"} />
                        </span>
                    </Link>
                </div>
            </motion.div>
        </motion.section>
    );
};

export default Footer;