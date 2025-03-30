import {
    SiAndroidstudio,
    SiDart,
    SiFirebase,
    SiFlutter,
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
        name: "TraceHub",
        description:
            "Developed a Doctor-Patient Appointment System with secure authentication, enabling patients to book, manage, and track appointments.Utilized HTML, CSS, and JavaScript, for efficient scheduling, notifications, and data management.Enhanced functionality with appointment reminders and admin controls for improved efficiency and security.",
        technologies: [SiFlutter, SiDart, SiFirebase, SiAndroidstudio],
        techNames: ["Flutter", "Dart", "Firebase", "Androidstudio"],
        techLinks: ["https://flutter.dev/", "https://dart.dev/", "https://firebase.google.com/", "https://developer.android.com/"],
        github: "https://github.com/Shiva7ganesh/TraceHub",
        demo: "https://play.google.com/store/apps/details?id=com.ultranix.tracehub&pcampaignid=web_share",
        image: "./projects/tracehub.png",
        available: true,
    },
];
