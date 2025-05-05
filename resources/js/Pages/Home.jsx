import Hero from "@/Components/Hero";
import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";

export default function Welcome({ posts }) {
    return (
        <>
            <MainLayout>
                <Head title="Home" />
                <Hero posts={posts} />
            </MainLayout>
        </>
    );
}
