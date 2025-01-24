import "./globals.css";
import React, { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const syne = Inter({
    subsets: ["latin"],
    display: "block",
    weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://www.example.com/"),
    title: "Portfolio - 22r01a0561",
    description:
    "This is my portfolio website. I'm a fresh graduate looking to connect. Would you like to discuss any opportunities or projects we could work on together?",
    generator: "Next.js",
    applicationName: "Portfolio",
    keywords: [
        "Portfolio",
        "React",
        "developer",
        "frontend",
        "nextjs",
        "react",
        "frontend developer",
        "frontend engineer",
        "creative",
        "creative developer",
        "creative engineer",
        "tech",
        "software",
        "software developer",
        "portfolio",
        "frontend developer portfolio",
        "creative developer portfolio",
        "creative engineer portfolio",
        "software developer portfolio",
        "frontend engineer portfolio",
    ],
    colorScheme: "dark",
    openGraph: {
        title: "Portfolio - 22r01a0561",
        description:
      "This is my portfolio website. I'm a fresh graduate looking to connect. Would you like to discuss any opportunities or projects we could work on together?",
        url: "https://www.22r01a0561.site/",
        siteName: "www.22r01a0561.site",
        images: [
            {
                url: "./public/metadata.jpg",
                width: 1200,
                height: 630,
                alt: "Portfolio - 22r01a0561",
            },
        ],
        locale: "en-US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Portfolio - 22r01a0561",
        description:
      "This is my portfolio website. I'm a fresh graduate looking to connect. Would you like to discuss any opportunities or projects we could work on together?",
        creator: "@karthikmudunuri",
        creatorId: "0000000000",
        images: ["./public/metadata.jpg"],
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: false,
            noimageindex: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    category: "technology",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <body
                className={`${syne.className} scroll-smooth scrollbar-none scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
            >
                {children}
            </body>
        </html>
    );
}
