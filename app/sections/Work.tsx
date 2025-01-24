import ProjectGrid from "../components/work/ProjectGrid";
import React from "react";
import HackerBackground from "../components/background/hackerbg";
const Work = () => {
    return (
        <section
            className="relative z-10 flex w-full flex-col items-center justify-center bg-center py-16 md:py-20 lg:py-20"
            id="work"
        >
            <div className="absolute inset-0 opacity-20">
                <HackerBackground />
            </div>
            <h2 className="mb-10 hidden text-[36px] text-[#e4ded7] md:mb-16 md:text-[42px] lg:mb-16 lg:text-[72px]">
                Featured Work
            </h2>

            <ProjectGrid />
        </section>
    );
};

export default Work;
