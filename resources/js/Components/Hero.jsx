import { Link } from "@inertiajs/react";
import Card from "./Card";
import Pagination from "./Pagination";

export default function Hero({ posts }) {
    const mainPost = posts.data[0];
    const otherPosts = posts.data.slice(1);

    return (
        <>
            {/* Highlight Section */}
            <div className="mb-6 rounded-xl overflow-hidden bg-white shadow-md border flex flex-col md:flex-row max-w-6xl mx-auto">
                <div className="md:w-1/2 w-full h-80 overflow-hidden">
                    <img
                        src={`/storage/${mainPost.image_thumbnail}`}
                        alt={mainPost.title}
                        className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                    />
                </div>
                <div className="md:w-1/2 p-6 flex flex-col justify-between space-y-4">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                            {mainPost.title}
                        </h2>
                        <p className="text-gray-600 text-sm md:text-base line-clamp-2 md:line-clamp-4">
                            {mainPost.description}
                        </p>
                    </div>
                    <div className="text-right">
                        <Link
                            href={route("post.show", mainPost.slug)}
                            className="inline-block mt-2 px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                        >
                            Baca Selengkapnya
                        </Link>
                    </div>
                </div>
            </div>

            {/* Section Title */}
            <h1 className="mb-2 text-xl font-bold">Latest News :</h1>

            {/* Other Posts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto gap-4">
                {otherPosts.map((post, index) => (
                    <Card post={post} key={index} />
                ))}
            </div>

            {/* Pagination */}
            {posts.data.length !== 0 && (
                <div className="my-4">
                    <Pagination links={posts} />
                </div>
            )}
        </>
    );
}
