import { getCourses } from "@/lib/courses";
import CourseCard from "@/components/CourseCard";

export default async function CoursesPage() {
const courses = await getCourses();

return (
    <main>
    <h1>Courses</h1>

    <div>
        {courses.map((course) => (
        <CourseCard
            key={course.id}
            id={course.id}
            title={course.title}
            description={course.description}
            credits={course.credits}
            likes={course.likes}
        />
        ))}
    </div>
    </main>
);
}