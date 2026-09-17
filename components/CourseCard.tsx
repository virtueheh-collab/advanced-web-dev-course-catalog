import Link from "next/link";

type CourseCardProps = {
id: string;
title: string;
description: string;
credits: number;
likes: number;
};

export default function CourseCard({
id,
title,
description,
credits,
likes,
}: CourseCardProps) {
return (
    <Link
    href={`/courses/${id}`}
    className="block rounded-xl border p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
    <h2 className="text-xl font-semibold mb-2">
        {title}
    </h2>

    <p className="text-gray-600 mb-4">
        {description}
    </p>

    <div className="flex items-center justify-between text-sm text-gray-500">
        <span>
        Credits: {credits}
        </span>

        <span>
        ❤️ {likes}
        </span>
    </div>
    </Link>
);
}