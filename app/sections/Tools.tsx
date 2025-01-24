import React from "react";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";
import {
    SiGit,
    SiGithub,
    SiFigma,
    SiHtml5,
    SiCsswizardry,
    SiJavascript, 
    SiNextdotjs,
    SiReact, 
    SiTypescript,
    SiMongodb,
    SiNodedotjs,
    SiTailwindcss,
    SiExpress,
} from "react-icons/si";
import AnimatedTools from "../animations/AnimatedTools.tsx";
import HackerBackground from "../components/background/hackerbg";
const Tools = () => {
    return (
        <section
            className="relative z-10 w-full items-center justify-center overflow-hidden bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
            id="tools"
        >
            <div className="absolute inset-0 opacity-100">
                <HackerBackground />
            </div>
            <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
                <AnimatedTitle
                    text={"TOOLS I'M USING."}
                    className={
                        "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
                    }
                    wordSpace={"mr-[14px]"}
                    charSpace={"mr-[0.001em]"}
                />

                <div className="mx-auto w-[100%] lg:max-w-[1200px] justify-center">

                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[50%]">
                        <AnimatedBody delay={0.2} text="Frontend" />
                        <div>
                            <AnimatedTools className="grid grid-cols-5 gap-4" delay={0.2} stepSize={0.1} iconSize={50}>
                                <SiHtml5 size={50} className="hover:text-[#E34F26] transition-colors" />
                                <SiCsswizardry size={50} className="hover:text-[#800080] transition-colors" />
                                <SiTypescript size={50} className="hover:text-[#3178C6] transition-colors" />
                                <SiJavascript size={50} className="hover:text-[#F7DF1E] transition-colors" />
                                <SiReact size={50} className="hover:text-[#61DAFB] transition-colors" />
                                <SiNextdotjs size={50} className="hover:text-[#ffffff] transition-colors" />
                                <SiTailwindcss size={50} className="hover:text-[#06B6D4] transition-colors" />
                            </AnimatedTools>
                        </div>
                    </div>
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[50%]">
                        <AnimatedBody delay={0.3} text="Backend" />
                        <div>
                            <AnimatedTools className="grid grid-cols-5 gap-4" delay={0.3} stepSize={0.1} iconSize={50}>
                                <SiMongodb size={50} className="hover:text-[#4DB33D] transition-colors" />
                                <SiNodedotjs size={50} className="hover:text-[#68A063] transition-colors" />
                                <SiExpress size={50} className="hover:text-[#ffffff ] transition-colors" />
                            </AnimatedTools>
                        </div>
                    </div>
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[50%]">
                        <AnimatedBody delay={0.4} text="Other" />
                        <div>
                            <AnimatedTools className="grid grid-cols-5 gap-4" delay={0.4} stepSize={0.1} iconSize={50}>
                                <SiGithub size={50} className="hover:text-[#ffffff] transition-colors" />
                                <SiGit size={50} className="hover:text-[#F05032] transition-colors" />
                                <SiFigma size={50} className="hover:text-[#A259FF] transition-colors" />
                            </AnimatedTools>
                        </div>
                    </div>
                </div>




            </div>
        </section>
    );
};

export default Tools;
