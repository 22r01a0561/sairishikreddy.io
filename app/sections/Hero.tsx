import { inter } from "../fonts/inter";
import { motion } from "framer-motion";
import React from "react";
import AnimatedTitle from "../animations/AnimatedTitle";
import HackerBackground from "../components/background/hackerbg";

const Hero = () => {
    return (
        <motion.section
            className="relative z-10 flex h-[100vh] w-full justify-center"
            id="home"
            initial="initial"
            animate="animate"
        >
            <div className="inset-0 opacity-500">
                <HackerBackground />
            </div>
            <div className="mt-10 flex flex-col items-center justify-center sm:mt-0">
                <div
                    className={`relative flex flex-col items-center justify-center ${inter.className} pointer-events-none`}
                >
                    <AnimatedTitle
                        text={"Hi I'm Y. Sai Rishik Reddy."}
                        className={
                            "mb-1 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
                        }
                        wordSpace={"mr-[10px]"}
                        charSpace={"mr-[0.001em]"}
                    />
                    <AnimatedTitle
                        text={"Frontend Developer & UI/UX Designer"}
                        className={
                            "text-left text-[20px] font-medium leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[25px] md:text-[30px] lg:text-[40px]"
                        }
                        wordSpace={"mr-[8px]"}
                        charSpace={"mr-[0.001em]"}
                    />
                </div>
            </div>
        </motion.section>
    );
};

export default Hero;
