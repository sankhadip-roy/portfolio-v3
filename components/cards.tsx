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
            "chat room where users can chat with each other in real time",
        link: "https://github.com/sankhadip-roy/chat-app",
    },
    {
        title: "notes",
        description:
            "notes app for storing personal notes",
        link: "https://notes-ivory-iota.vercel.app",
    },
    {
        title: "commerce",
        description:
            "an eBay-like e-commerce auction site that allows users to post auction listings, place bids on listings, comment on those listings, and add listings to a watchlist",
        link: "https://sankha-commerce-serveit.codecult.tech",
    },
    {
        title: "leaf-disease-detection",
        description:
            "machine learning project to detect leaf disease using image processing",
        link: "https://leaf-orpin.vercel.app",
    },
    {
        title: "cv-application",
        description:
            " This project is a simple CV application that allows users to input their personal information and display it in a CV format. The project is built using react.",
        link: "https://github.com/sankhadip-roy/cv-application",
    },
    {
        title: "wiki",
        description:
            "a wikipedia-like online encyclopedia",
        link: "https://wiki-sankha.onrender.com",
    },
];
