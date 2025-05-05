import MainLayout from "@/Layouts/MainLayout";
import { Head, Link } from "@inertiajs/react";

export default function Show({ post }) {
    return (
        <MainLayout>
            <Head title="Detail post" />

            <div className="container mx-auto px-4 py-10">
                <div className="flex flex-col lg:flex-row items-start gap-10">
                    {/* Gambar */}
                    <div className="flex-shrink-0 w-full lg:w-1/3">
                        <img
                            src={`/storage/${post.image_thumbnail}`}
                            alt={post.title}
                            className="w-full h-auto rounded-xl shadow-md object-cover"
                        />
                    </div>

                    {/* Konten */}
                    <div className="w-full space-y-6">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                            {post.title}
                        </h1>

                        <div className="space-y-3 text-gray-700 text-sm md:text-base leading-relaxed">
                            {post.description.split("\n").map((line, index) => (
                                <p key={index}>{line}</p>
                            ))}
                        </div>

                        <p className="text-sm text-gray-600">
                            <span className="font-medium text-gray-800">
                                Source:{" "}
                            </span>
                            <a
                                href={post.link_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 underline hover:text-blue-800 transition"
                            >
                                {post.link_url}
                            </a>
                        </p>

                        <div>
                            <Link
                                href="/"
                                className="inline-block px-6 py-2 text-white bg-yellow-700 rounded hover:bg-yellow-800 transition"
                            >
                                Back to news
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
