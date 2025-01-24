import {
    SiFramer,
    SiNextdotjs,
    SiReact,
    SiTailwindcss,
    SiTypescript,
    SiWebgl,
} from "react-icons/si";
import { IconType } from "react-icons";

export type ProjectProps = {
    id: number;
    name: string;
    description: string;
    technologies: IconType[];
    techNames: string[];
    techLinks: string[];
    github: string;
    demo: string;
    image: string;
    available: boolean;
};

export const projects = [
    {
        id: 0,
        name: "BallotChain",
        description:
            "A blockchain-based voting system that allows users to vote on candidates and view the results in real-time.",
        technologies: [SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiFramer],
        techNames: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Framer Motion"],
        techLinks: ["https://www.typescriptlang.org/", "https://reactjs.org/", "https://nextjs.org/", "https://tailwindcss.com/", "https://www.framer.com/motion/"],
        github: "https://github.com/22r01a0561/ballotchain",
        demo: "https://ballotchain.netlify.app/",
        image: "/projects/ballotchain.png",
        available: true,
    },
    {
        id: 1,
        name: "E-Commerce",
        description:
            "Developed an e-commerce website by using React, Typescript, Tailwind CSS, and Framer Motion.",
        technologies: [SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiFramer],
        techNames: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Framer Motion"],
        techLinks: ["https://www.typescriptlang.org/", "https://reactjs.org/", "https://nextjs.org/", "https://tailwindcss.com/", "https://www.framer.com/motion/"],
        github: "https://github.com/22r01a0561/ecommerce",
        demo: "https://ecommercedemo.netlify.app/",
        image: "/projects/ecommerce.png",
        available: true,
    },
];
