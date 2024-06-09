"use client";

import { motion } from "framer-motion";
import { projects } from "../consts";
import Project from "@/Components/Project";
import { Icon } from "@iconify/react";
import { useRef, useState, useEffect } from "react";

export default function ProjectsPage() {
    const slider = useRef<HTMLDivElement>(null);
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
    const [projectsPerPage, setProjectsPerPage] = useState(1);

    useEffect(() => {
        const handleResize = () => {
            if (slider.current) {
                const sliderWidth = slider.current.clientWidth;
                const projectWidth = slider.current.scrollWidth / projects.length;
                const perPage = Math.floor(sliderWidth / projectWidth);
                setProjectsPerPage(perPage);
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // Initial check

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const moveNext = () => {
        if (slider.current) {
            const maxIndex = projects.length - projectsPerPage;
            const nextIndex = Math.min(currentProjectIndex + 1, maxIndex);

            slider.current.scrollTo({
                behavior: "smooth",
                left: slider.current.clientWidth * nextIndex
            });

            setCurrentProjectIndex(nextIndex);
        }
    };

    const movePrevious = () => {
        if (slider.current) {
            const prevIndex = Math.max(currentProjectIndex - 1, 0);

            slider.current.scrollTo({
                behavior: "smooth",
                left: slider.current.clientWidth * prevIndex
            });

            setCurrentProjectIndex(prevIndex);
        }
    };

    return (
        <>
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-24 ml-4 mx-4"
            >
                <div className="inika-bold text-lg xl:text-xl flex gap-2 relative">
                    My <div className="text-green">projects</div>
                </div>
            </motion.div>
            <div
                className="w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center bg-white/20 hover:opacity-60 duration-200 active:scale-105 transition-all rounded-full absolute top-[40%] lg:top-1/2 left-4 cursor-pointer"
                onClick={movePrevious}
            >
                <Icon icon="mingcute:left-fill" width="24" height="24" className="" />
            </div>
            <div
                ref={slider}
                className="flex overflow-hidden transition-transform duration-500 ease-linear w-screen mx-4 mt-4"
            >
                {projects.map((project, index) => (
                    <Project project={project} key={index} />
                ))}
            </div>
            <div
                className="w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center bg-white/20 hover:opacity-60 duration-200 active:scale-105 transition-all rounded-full absolute top-[40%] lg:top-1/2 right-4 cursor-pointer"
                onClick={moveNext}
            >
                <Icon icon="mingcute:right-fill" width="24" height="24" className="" />
            </div>
            <div className=" items-center gap-2 justify-center w-full mt-4 hidden lg:flex">
                {projects.map((_, index) => (
                    <div
                        key={index}
                        className={`w-2 h-2 rounded-full ${currentProjectIndex === index ? "bg-green" : "bg-light-gray"
                            }`}
                    ></div>
                ))}
            </div>
        </>
    );
}
