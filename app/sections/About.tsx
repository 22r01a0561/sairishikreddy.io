import React from "react";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";
import HackerBackground from "../components/background/hackerbg";

const About = () => {
    return (
        <section
            className="relative z-10 flex flex-col items-center justify-center w-full 
            bg-cover bg-center px-4 sm:px-6 md:px-8 lg:px-10 pt-16 pb-24 md:pt-20 md:pb-36 
            lg:pt-24 lg:pb-48 text-center"
            id="about"
        >
            {/* Background */}
            <div className="absolute inset-0 opacity-50">
                <HackerBackground />
            </div>

            {/* Content */}
            <div className="relative z-20 w-full max-w-[1200px] flex flex-col items-center">
                {/* Title */}
                <AnimatedTitle
                    text="YADAVALLI SAI RISHIK REDDY."
                    className="text-[30px] sm:text-[40px] md:text-[50px] lg:text-[65px] font-bold 
                    leading-tight tracking-tight text-[#e4ded7] mb-6 sm:mb-8 md:mb-12 lg:mb-14"
                    wordSpace="mr-[10px]"
                    charSpace="mr-[0.001em]"
                />

                {/* Description */}
                <div className="w-full flex flex-col items-center text-center lg:text-left">
                    <div className="max-w-[90%] lg:max-w-[80%] text-[#e4ded7] text-[16px] sm:text-[18px] 
                    md:text-[20px] lg:text-[22px] leading-relaxed tracking-wide flex flex-col gap-6 
                    text-justify">
                        <AnimatedBody text="Hey there! I'm a B.Tech student at CMR Institute of Technology 
                        who loves building things for the web. I'm really into frontend development, 
                        and I've got solid experience with JavaScript, Next.js, React.js, HTML, and CSS. 
                        I enjoy tackling challenges, learning new tech, and growing my skills." />

                        <AnimatedBody
                            delay={0.1}
                            text="I love creating clean, user-friendly interfaces and developing smart, 
                            innovative applications. Staying updated with the latest tech trends and 
                            experimenting with new tools is something I always look forward to. 
                            I'm a quick learner and always eager to take on new challenges."
                        />

                        <AnimatedBody
                            delay={0.2}
                            text="Currently, I'm working on some exciting projects, and I can't wait to 
                            share them. I'm always open to new opportunities and love collaborating on 
                            ideas that make an impact."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
