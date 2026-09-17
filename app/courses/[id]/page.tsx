import { notFound } from "next/navigation";
import { getCourse, getCourses } from "@/lib/courses";
import LikeButton from "@/components/LikeButton";

type CoursePageProps = {
params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
const courses = await getCourses();

return courses.map((course) => ({
    id: course.id,
}));
}

export default async function CoursePage({
params,
}: CoursePageProps) {
const { id } = await params;

const course = await getCourse(id);

if (!course) {
    notFound();
}

return (
    <main className="max-w-3xl mx-auto p-8">
    <div className="rounded-xl border p-8 shadow-sm">
        <h1 className="text-3xl font-bold mb-4">
        {course.title}
        </h1>

        <p className="text-gray-700 leading-7 mb-6">
        {course.description}
        </p>

        <div className="flex items-center justify-between">
        <span className="text-gray-600">
            Credits: {course.credits}
        </span>

        <LikeButton initialLikes={course.likes} />
        </div>
    </div>
    </main>
);
}