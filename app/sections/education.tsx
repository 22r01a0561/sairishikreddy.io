import React from "react";
import "../animations/animate.css";
// import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";
import HackerBackground from "../components/background/hackerbg";
import EducationCard from "../components/ui/EducationCard";
import { motion } from "framer-motion";

const educationDetails = [
    {
        delay: 0.2,
        institute: "CMR INSTITUTE OF TECHNOLOGY",
        location: "Hyderabad, India",
        degree: "Computer Science and Engineering B.Tech (2022 - 2026)",
        score: "CGPA: 7.03/10",
    },
    {
        delay: 0.3,
        institute: "SRI CHAITANYA JUNIORKALASALA",
        location: "Uppal, Hyderabad, India",
        degree: "MPC Intermediate (2020 - 2022)",
        score: "Percentage: 68.5%/100%",
    },
    {
        delay: 0.4,
        institute: "SRI CHAITANYA TECHNICAL CURRICULUM SCHOOL",
        location: "Nallakunta, Hyderabad, India",
        degree: "Schooling - SSC (2019 - 2020)",
        score: "GPA: 9.8/10",
    },
];

const Education = () => {
    return (
        <section
            className="relative z-10 w-full flex flex-col items-center justify-center overflow-hidden bg-cover 
            bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
            id="education"
        >
            <div className="absolute inset-0 opacity-100">
                <HackerBackground />
                <div className="absolute inset-0 bg-black opacity-60 z-[1] backdrop-blur-md"></div>
            </div>

            <div className="relative z-20 mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
                <AnimatedTitle
                    text={"EDUCATION DETAILS"}
                    className="mb-12 text-center text-[40px] font-extrabold leading-[0.9em] tracking-tight text-white neon-glow sm:text-[45px] md:text-[60px] lg:text-[80px]"
                    wordSpace="mr-[14px]"
                    charSpace="mr-[0.001em]"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full justify-center">
                    {educationDetails.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: edu.delay }}
                            className="w-full hover:scale-105 transition-transform duration-300"
                        >
                            <EducationCard
                                institution={edu.institute}
                                location={edu.location}
                                degree={edu.degree}
                                duration={edu.degree.split('(')[1].replace(')', '')}
                                score={edu.score}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;