import React, { useState, useEffect } from "react";

interface CertificationCardProps {
    id: number;
    name: string;
    image: string;
    link: string;
}

const CertificationCard: React.FC<CertificationCardProps> = ({ id, name, image, link }) => {
    const [textColor, setTextColor] = useState("#ffffff"); // Default white text

    useEffect(() => {
        const img = new Image();
        img.crossOrigin = "Anonymous"; // Prevent CORS issues
        img.src = image;

        img.onload = () => {
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");
            if (!ctx) return;

            // Resize canvas to match image dimensions
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

            // Calculate brightness
            const brightness = (r * 299 + g * 587 + b * 114) / 1000;

            // Generate complementary color
            const complementaryColor = `rgb(${255 - r}, ${255 - g}, ${255 - b})`;

            setTextColor(brightness > 128 ? complementaryColor : "#ffffff"); // Dark background → Light text, Light background → Complementary color
        };

        img.onerror = () => {
            console.error("Error loading image:", image);
        };
    }, [image]);

    return (
        <div className="relative flex flex-col items-center justify-center rounded-lg shadow-lg overflow-hidden p-6 bg-[#1a1a1a]">
            <img src={image} alt={name} className="w-full h-48 object-cover rounded-lg" />
            <h3 className="mt-4 text-lg font-semibold" style={{ color: textColor }}>
                {name}
            </h3>
            <a href={link} target="_blank" rel="noopener noreferrer" className="mt-2 text-sm underline">
                View Certificate
            </a>
        </div>
    );
};

export default CertificationCard;
