import CertificationCard from "../components/certifications/CertificationCard";
import { certifications } from "../components/certifications/certificationDetails";
import HackerBackground from "../components/background/hackerbg";
import React from "react";

const Certifications: React.FC = () => {
    return (
        <section
            className="relative z-10 flex w-full flex-col items-center justify-center bg-center 
            px-4 sm:px-6 md:px-8 lg:px-10 py-16 md:py-20 lg:py-24"
            id="certifications"
        >
            {/* Background */}
            <div className="absolute inset-0 opacity-25">
                <HackerBackground />
            </div>

            {/* Title */}
            <h2 className="relative z-20 mb-8 sm:mb-10 md:mb-14 lg:mb-16 text-[30px] sm:text-[36px] 
                md:text-[42px] lg:text-[60px] font-bold tracking-tight text-[#e4ded7] text-center">
                Certifications
            </h2>

            {/* Certification Cards Grid */}
            <div className="relative z-20 grid w-full max-w-[1200px] grid-cols-1 sm:grid-cols-2 
                gap-y-8 gap-x-6 px-4">
                {certifications.map((cert) => (
                    <CertificationCard
                        key={cert.id}
                        id={cert.id}
                        name={cert.name}
                        image={cert.image}
                        link={cert.link}
                    />
                ))}
            </div>
        </section>
    );
};

export default Certifications;
