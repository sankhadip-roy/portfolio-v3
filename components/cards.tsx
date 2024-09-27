'use client'
import { HoverEffect } from "@/components/ui/card-hover-effect";

export function Cards() {
    return (
        <div className="max-w-5xl mx-auto px-8">
            <HoverEffect items={projects} />
        </div>
    );
}
export const projects = [
    {
        title: "chat-app",
        description:
            "chat room where users can chat with each other in real time, used socket.io, react, node.js, mongodb",
        link: "https://github.com/sankhadip-roy/chat-app",
    },
    {
        title: "notes",
        description:
            "notes app for storing personal notes, used next.js, shadcn/ui, typescript, mongodb",
        link: "https://notes-ivory-iota.vercel.app",
    },
    {
        title: "commerce",
        description:
            "an eBay-like e-commerce auction site, used django, sqlite, docker",
        link: "https://sankha-commerce-serveit.codecult.tech",
    },
    {
        title: "leaf-disease-detection",
        description:
            "machine learning project to detect leaf disease using image processing, used next.js, flask, ml, docker",
        link: "https://leaf-orpin.vercel.app",
    },
    {
        title: "cv-application",
        description:
            "a simple cv application that allows users to input their personal information and display it in a cv format, used react, tailwind",
        link: "https://github.com/sankhadip-roy/cv-application",
    },
    {
        title: "wiki",
        description:
            "a wikipedia-like online encyclopedia, used django, docker",
        link: "https://wiki-sankha.onrender.com",
    },
];
