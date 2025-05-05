import { Link, usePage } from "@inertiajs/react";
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

export default function Navbar({ sosmed }) {
    const { auth } = usePage().props;

    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="flex flex-col drawer-content">
                {/* Navbar */}
                <div className="w-full border-b shadow-md navbar">
                    <div className="flex-none lg:hidden">
                        <label
                            htmlFor="my-drawer-3"
                            aria-label="open sidebar"
                            className="btn btn-square btn-ghost"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block w-6 h-6 stroke-current"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </label>
                    </div>
                    <div className="flex-1 px-2 mx-2">
                        <Link href="/" className="text-xl btn btn-ghost">
                            Portal Berita
                        </Link>
                    </div>
                    <div className="flex gap-4 px-4">
                        <a href={sosmed.link_ig} target="_blank">
                            <FaInstagram size={20} />
                        </a>
                        <a href={sosmed.link_fb} target="_blank">
                            <FaFacebook size={20} />
                        </a>
                        <a href={sosmed.link_yt} target="_blank">
                            <FaYoutube size={20} />
                        </a>
                        <a href={sosmed.link_tiktok} target="_blank">
                            <FaTiktok size={20} />
                        </a>
                    </div>

                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal">
                            {/* Navbar menu content here */}

                            <li>
                                <a href="/admin" className="btn btn-ghost">
                                    {auth.user ? "Dashboard" : "Login"}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="drawer-side">
                <label
                    htmlFor="my-drawer-3"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                ></label>
                <ul className="min-h-full p-4 menu bg-base-200 w-80">
                    {/* Sidebar content here */}
                    <li>
                        <a
                            href="/admin"
                            className="text-gray-100 btn btn-ghost"
                        >
                            {auth.user ? "Dashboard" : "Login"}
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
