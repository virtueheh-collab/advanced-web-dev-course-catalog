import Link from "next/link";

export default function NotFound() {
return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
    <h1 className="text-4xl font-bold mb-4">
        Course Not Found
    </h1>

    <p className="text-gray-600 mb-6">
        The course you are looking for does not exist.
    </p>

    <Link
        href="/courses"
        className="rounded-lg bg-black px-5 py-2 text-white hover:bg-gray-800"
    >
        Back to Courses
    </Link>
    </main>
);
}