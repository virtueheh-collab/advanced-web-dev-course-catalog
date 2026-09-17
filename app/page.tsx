import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">
        Course Catalog
      </h1>

      <p className="text-lg text-gray-600 mb-6">
        Welcome to our course catalog.
      </p>

      <Link
        href="/courses"
        className="rounded-lg bg-black px-6 py-3 text-white hover:bg-gray-800"
      >
        View Courses
      </Link>
    </main>
  );
}