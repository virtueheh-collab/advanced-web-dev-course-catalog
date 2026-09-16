import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>VtCourse Catalog</h1>

      <p>
        Welcome to our course catalog! Explore available courses and find
        something interesting to learn :D
      </p>

      <Link href="/courses">View Courses</Link>
    </main>
  );
}