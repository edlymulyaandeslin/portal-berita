import Navbar from "@/Components/Navbar";
import { usePage } from "@inertiajs/react";

export default function MainLayout({ children }) {
    const { sosmed } = usePage().props.data;
    return (
        <div className="min-h-screen text-gray-900 bg-white">
            <Navbar sosmed={sosmed} />
            <div className="w-full p-8 mx-auto max-w-7xl">{children}</div>
        </div>
    );
}
