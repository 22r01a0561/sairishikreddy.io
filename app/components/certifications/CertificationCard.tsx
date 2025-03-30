import Link from "next/link";
import Image from "next/legacy/image";
import { motion } from "framer-motion";
import Container from "../container/Container";
import React from "react";

export type CertificationProps = {
    id: number;
    name: string;
    image: string;
    link: string;
};

const CertificationCard: React.FC<CertificationProps> = ({
    id,
    name,
    image,
    link
}) => {
    return (
        <motion.div
            className="group relative w-[500px] h-[300px] border-2 border-transparent 
                hover:border-[#e4ded7] hover:scale-105 transition-all duration-300 
                rounded-xl overflow-hidden mx-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
        >
            <motion.div
                className="relative z-10 w-full h-full"
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
                    <Link
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View certificate for ${name}`}
                    >
                        <Image
                            src={image}
                            alt={name}
                            width={500}
                            height={300}
                            className="rounded-lg cursor-pointer"
                            priority={true}
                        />
                    </Link>

                    {/* Certificate Name - Black Text for Better Visibility */}
                    <div className="absolute bottom-2 left-2 text-black text-sm bg-white 
                                    bg-opacity-90 px-2 py-1 rounded-md font-bold mb-2">
                        {name}
                    </div>
                </Container>
            </motion.div>
        </motion.div>
    );
};

export default CertificationCard;
