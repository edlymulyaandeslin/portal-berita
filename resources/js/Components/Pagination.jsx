import { Link } from "@inertiajs/react";

export default function Pagination({ links }) {
    return (
        <div className="flex justify-between">
            <p className="font-bold text-gray-600">
                Showing from {links.from} to {links.to} of total {links.total}
            </p>
            <div className="flex gap-2">
                {links.links.map((link, index) => {
                    return (
                        <Link
                            key={index}
                            href={link.url}
                            className={`btn btn-outline btn-sm ${
                                link.active ? "btn-primary btn-active" : ""
                            } ${!link.url ? "pointer-events-none" : ""}`}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                        ></Link>
                    );
                })}
            </div>
        </div>
    );
}
