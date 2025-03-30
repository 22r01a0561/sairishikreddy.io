// import type { Viewport } from 'next'

export const metadata = {
    title: 'Portfolio - Y. Sai Rishik Reddy',
    description: 'This is my portfolio website. I\'m a fresh graduate looking to connect. Would you like to discuss any opportunities or projects we could work on together?',
    
};


export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="bg-gray-100">{children}</body> {/* Added a background color for better visibility */}
        </html>
    );
}
