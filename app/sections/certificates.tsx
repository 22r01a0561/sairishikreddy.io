import CertificationCard from "../components/certifications/CertificationCard";
import { certifications } from "../components/certifications/certificationDetails";
import HackerBackground from "../components/background/hackerbg";
import React from "react";

const Certifications: React.FC = () => {
    return (
        <section
            className="relative z-10 flex w-full flex-col items-center justify-center bg-center py-16
                        md:py-20 lg:py-20"
            id="certifications"
        >
            <div className="absolute inset-0 opacity-20">
                <HackerBackground />
            </div>

            <h2 className="mb-10 text-[36px] text-[#e4ded7] md:mb-16 md:text-[42px] lg:mb-16 lg:text-[72px]">
                Certifications
            </h2>

            {/* Two Columns with One Certificate Per Column */}
            <div className="grid w-[90%] grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-6 lg:max-w-[1200px]">
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
