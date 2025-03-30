import { inter } from "../fonts/inter";
import { motion } from "framer-motion";
import React from "react";
import AnimatedTitle from "../animations/AnimatedTitle";
import HackerBackground from "../components/background/hackerbg";
import { SiCodechef, SiCodeforces, SiGeeksforgeeks, SiHackerrank, SiLeetcode } from 'react-icons/si';

const Hero = () => {
    return (
        <motion.section
            className="relative z-10 flex h-[100vh] w-full justify-center"
            id="home"
            initial="initial"
            animate="animate"
        >
            {/* Background with lower z-index */}
            <div className="absolute inset-0 z-0 opacity-500">
                <HackerBackground />
            </div>

            {/* Content with higher z-index */}
            <div className="relative z-20 mt-10 flex flex-col items-center justify-center sm:mt-0">
                <div
                    className={`relative flex flex-col items-center justify-center ${inter.className}`}
                >
                    <AnimatedTitle
                        text={"HI I'M YADAVALLI SAI RISHIK REDDY."}
                        className={
                            "mb-1 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
                        }
                        wordSpace={"mr-[10px]"}
                        charSpace={"mr-[0.001em]"}
                    />
                    <AnimatedTitle
                        text={"Frontend Developer & UI UX Designer"}
                        className={
                            "text-left text-[20px] font-medium leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[25px] md:text-[30px] lg:text-[40px]"
                        }
                        wordSpace={"mr-[8px]"}
                        charSpace={"mr-[0.001em]"}
                    />

                    {/* Resume Button */}
                    <a
                        href="https://drive.google.com/file/d/1wQNNeUDL6Wd_1OGXP-9LqUO1bgt_kJbm/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 px-4 py-2 border-2 border-white text-white rounded hover:bg-white hover:text-black transition duration-300"
                    >
                        My Resume
                    </a>

                    {/* Coding Platform Buttons with Original Colors */}
                    <div className="mt-5 flex space-x-4">
                        <a
                            href="https://www.codechef.com/users/r22r01a0561"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center px-4 py-2 border-2 border-[#5A2A27] bg-[#5A2A27] text-white rounded hover:bg-opacity-80"
                        >
                            <SiCodechef className="mr-2" /> CodeChef
                        </a>

                        <a
                            href="https://codeforces.com/profile/22r01a0561"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center px-4 py-2 border-2 border-[#1F8ACB] bg-[#1F8ACB] text-white rounded hover:bg-opacity-80"
                        >
                            <SiCodeforces className="mr-2" /> Codeforces
                        </a>

                        <a
                            href="https://www.geeksforgeeks.org/user/22r01a0561/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center px-4 py-2 border-2 border-[#2F8D46] bg-[#2F8D46] text-white rounded hover:bg-opacity-80"
                        >
                            <SiGeeksforgeeks className="mr-2" /> GFG
                        </a>

                        <a
                            href="https://www.hackerrank.com/profile/22r01a0561"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center px-4 py-2 border-2 border-[#00EA64] bg-[#00EA64] text-black rounded hover:bg-opacity-80"
                        >
                            <SiHackerrank className="mr-2" /> HackerRank
                        </a>

                        <a
                            href="https://leetcode.com/u/22r01a0561/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center px-4 py-2 border-2 border-[#FFA116] bg-[#FFA116] text-black rounded hover:bg-opacity-80"
                        >
                            <SiLeetcode className="mr-2" /> LeetCode
                        </a>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Hero;
