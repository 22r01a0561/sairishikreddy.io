export async function generateStaticParams() {
    return [{ not_found: ["404"] }]; // Defines valid static path for export
}

export default function NotFoundPage() {
    return (
        <div className="flex h-screen items-center justify-center">
            <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
        </div>
    );
}
