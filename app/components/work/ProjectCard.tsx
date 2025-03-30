import { ProjectProps } from "./projectDetails";
import Link from "next/link";
import Image from "next/legacy/image";
import AnimatedTitle from "../../animations/AnimatedTitle";
import AnimatedBody from "../../animations/AnimatedBody";
import { motion } from "framer-motion";
import Container from "../container/Container";
import React, { useState, useEffect } from "react";
import { SiGithub } from "react-icons/si";
import { BsLink45Deg } from "react-icons/bs";

const ProjectCard = ({
    id,
    name,
    description,
    technologies,
    techNames,
    techLinks,
    github,
    demo,
    image,
    available,
}: ProjectProps) => {
    const [textColor, setTextColor] = useState("#ffffff"); // Default white text

    useEffect(() => {
        const img = new window.Image();
        img.crossOrigin = "Anonymous"; // Prevent CORS issues
        img.src = image || "/images/default.png";

        img.onload = () => {
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");
            if (!ctx) return;

            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0, img.width, img.height);

            const imageData = ctx.getImageData(0, 0, img.width, img.height);
            const pixels = imageData.data;

            let r = 0, g = 0, b = 0, count = 0;
            for (let i = 0; i < pixels.length; i += 4 * 100) { // Sample every 100th pixel
                r += pixels[i];
                g += pixels[i + 1];
                b += pixels[i + 2];
                count++;
            }

            r = Math.floor(r / count);
            g = Math.floor(g / count);
            b = Math.floor(b / count);

            const brightness = (r * 299 + g * 587 + b * 114) / 1000; // Standard brightness formula

            setTextColor(brightness > 128 ? "#000000" : "#ffffff"); // Light bg → Dark text, Dark bg → Light text
        };
    }, [image]);

    return (
        <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
        >
            <motion.div
                className={`relative bg-cover bg-no-repeat bg-center z-10 h-full w-full 
                items-stretch justify-center py-0 sm:h-[850px] sm:w-[100%] md:h-[750px] 
                md:w-[100%] lg:h-[650px] lg:w-[100%]`}
            >
                <Container
                    width="100%"
                    height="100%"
                    borderRadius={25}
                    color="rgba(255, 255, 255, 0.1)"
                    blur={false}
                    grain={true}
                    top="0px"
                    left="0px"
                    angle={0}
                >
                    <div className="relative w-full h-full rounded-lg overflow-hidden">
                        <Image
                            src={image || "/images/default.png"}
                            alt={name}
                            layout="fill"
                            objectFit="cover"
                            className="transition-transform duration-300 hover:scale-105"
                            priority={true}
                        />
                    </div>

                    {/* GitHub & Demo Links */}
                    <div
                        className={`absolute top-0 ${id % 2 === 0 ? "left-0 ml-8 lg:ml-14" : "right-0 mr-8 lg:mr-14"} 
                            mt-6 flex items-center justify-center gap-4 lg:mt-10`}
                    >
                        {available && (
                            <>
                                <Link
                                    href={github}
                                    target="_blank"
                                    aria-label="Open GitHub Repository"
                                    className="rounded-full w-[43px] p-3 md:p-5 
                                        text-[20px] md:w-[65px] md:text-[24px] lg:w-[65px] lg:text-[28px]"
                                    style={{ backgroundColor: textColor === "#ffffff" ? "#000000" : "#ffffff", color: textColor }}
                                >
                                    <SiGithub />
                                </Link>
                                <Link
                                    href={demo}
                                    target="_blank"
                                    aria-label="Open Live Demo"
                                    className="rounded-full w-[43px] p-3 md:p-5 
                                        text-[20px] md:w-[65px] md:text-[24px] lg:w-[65px] lg:text-[28px]"
                                    style={{ backgroundColor: textColor === "#ffffff" ? "#000000" : "#ffffff", color: textColor }}
                                >
                                    <BsLink45Deg />
                                </Link>
                            </>
                        )}
                    </div>

                    {/* Project Details */}
                    <div
                        className={`absolute ${!(id % 2 === 0)
                            ? "right-0 top-32 mr-0 ml-10 md:right-0 md:ml-0 lg:right-0 lg:top-60 lg:mr-4"
                            : "left-10 top-32 ml-0 md:mr-12 lg:top-52 lg:ml-4"
                            } mb-10 md:mb-16 lg:mb-14`}
                    >
                        <AnimatedTitle
                            text={name}
                            className={`max-w-[90%] text-[40px] leading-none md:text-[44px] lg:max-w-[450px] lg:text-[48px] ${textColor === "#ffffff" ? "text-white" : "text-black"}`}
                            wordSpace="mr-[0.25em]"
                            charSpace="-mr-[0.01em]"
                        />
                        <AnimatedBody
                            text={description}
                            className={`mt-4 w-[90%] max-w-[457px] text-[16px] font-bold ${textColor === "#ffffff" ? "text-white" : "text-black"}`}
                        />
                        <div className="mt-9 mb-9 grid grid-cols-5 gap-5 col-start-1 col-end-2">
                            {technologies.map((IconComponent, id) => (
                                <div key={id} className="relative">
                                    <Link
                                        href={techLinks[id]}
                                        target="_blank"
                                        aria-label={`Learn more about ${techNames[id]}`}
                                        className="w-[20px] text-[20px] md:w-[25px] md:text-[24px] 
                                            lg:w-[30px] lg:text-[28px]"
                                        title={techLinks[id]}
                                        data-blobity-tooltip={techNames[id]}
                                        data-blobity-magnetic="false"
                                        style={{ color: textColor }}
                                    >
                                        <IconComponent />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </motion.div>
        </motion.div>
    );
};

export default ProjectCard;
