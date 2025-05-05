import { Link } from "@inertiajs/react";

export default function Card({ post }) {
    return (
        <div className="flex flex-col bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden transition hover:shadow-md">
            {/* Image Section */}
            <div className="w-full h-52 overflow-hidden">
                <img
                    src={`/storage/${post.image_thumbnail}`}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
            </div>

            {/* Content Section */}
            <div className="flex flex-col justify-between p-4 flex-1">
                <div>
                    <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                        {post.title}
                    </h2>
                    <p className="text-sm text-gray-600 line-clamp-2">
                        {post.description}
                    </p>
                </div>

                <div className="mt-4 text-right">
                    <Link
                        href={route("post.show", post.slug)}
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded transition"
                    >
                        Selengkapnya
                    </Link>
                </div>
            </div>
        </div>
    );
}
