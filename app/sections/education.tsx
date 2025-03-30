import React from "react";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";
import HackerBackground from "../components/background/hackerbg";

const Education = () => {
    return (
        <section
            className="relative z-10 w-full items-center justify-center overflow-hidden bg-cover 
            bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
            id="education"
        >
            <div className="absolute inset-0 opacity-100">
                <HackerBackground />
                <div className="absolute inset-0 bg-black opacity-40 z-[1]"></div>
            </div>

            <div className="relative z-20 mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
                <AnimatedTitle
                    text={"EDUCATION DETAILS"}
                    className={
                        "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-white sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
                    }
                    wordSpace={"mr-[14px]"}
                    charSpace={"mr-[0.001em]"}
                />

                {/* BTech Details */}
                <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold 
                leading-relaxed tracking-wide text-white md:mb-16 md:gap-6 md:text-[40px] 
                md:leading-relaxed lg:mb-16 lg:w-[50%]">
                    <AnimatedBody delay={0.2} text="CMR INSTITUTE OF TECHNOLOGY" />
                    <p className="text-[16px]">📍 Hyderabad, India</p>
                    <p className="text-[16px]">🎓 Computer Science and Engineering B.Tech (2022 - 2026)</p>
                    <p className="text-[16px]">📈 CGPA: 7.03</p>
                </div>

                {/* Intermediate Details */}
                <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold 
                leading-relaxed tracking-wide text-white md:mb-16 md:gap-6 md:text-[40px] 
                md:leading-relaxed lg:mb-16 lg:w-[50%]">
                    <AnimatedBody delay={0.3} text="SRI CHAITANYA JUNIORKALASALA" />
                    <p className="text-[16px]">📍 Uppal, Hyderabad, India</p>
                    <p className="text-[16px]">🎓 MPC Intermediate (2020 - 2022)</p>
                    <p className="text-[16px]">📈 Percentage: 68.5%</p>
                </div>

                {/* Schooling Details */}
                <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold 
                leading-relaxed tracking-wide text-white md:mb-16 md:gap-6 md:text-[40px] 
                md:leading-relaxed lg:mb-16 lg:w-[50%]">
                    <AnimatedBody delay={0.4} text="SRI CHAITANYA TECHNICAL CURRICULUM SCHOOL" />
                    <p className="text-[16px]">📍 Nallakunta, Hyderabad, India</p>
                    <p className="text-[16px]">🎓 Schooling - SSC (2019 - 2020)</p>
                    <p className="text-[16px]">📈 GPA: 9.8</p>
                </div>
            </div>
        </section>
    );
};

export default Education;