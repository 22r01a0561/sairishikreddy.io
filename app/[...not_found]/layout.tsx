export const metadata = {
    title: 'Portfolio - 22r01a0561',
    description: 'This is my portfolio website. I\'m a fresh graduate looking to connect. Would you like to discuss any opportunities or projects we could work on together?',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
