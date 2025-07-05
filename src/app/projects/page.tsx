"use client";

import { motion } from "framer-motion";
import { myProjects, contributions } from "../consts";
import Project from "@/Components/Project";
import ContributionCard from "@/Components/ContributionCard";
import { Icon } from "@iconify/react";
import { useRef, useState, useEffect } from "react";

export default function ProjectsPage() {
    const slider = useRef<HTMLDivElement>(null);
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
    const [projectsPerPage, setProjectsPerPage] = useState(1);
    const [activeTab, setActiveTab] = useState<'projects' | 'contributions'>('projects');

    useEffect(() => {
        const handleResize = () => {
            if (slider.current) {
                const sliderWidth = slider.current.clientWidth;
                const projectWidth = slider.current.scrollWidth / myProjects.length;
                const perPage = Math.floor(sliderWidth / projectWidth);
                setProjectsPerPage(perPage);
            }
        };

        const handleGoToProject = (event: CustomEvent) => {
            goToProject(event.detail);
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener("goToProject", handleGoToProject as EventListener);
        handleResize(); // Initial check

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("goToProject", handleGoToProject as EventListener);
        };
    }, []);

    const moveNext = () => {
        if (slider.current) {
            const maxIndex = myProjects.length - projectsPerPage;
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

    const goToProject = (index: number) => {
        if (slider.current) {
            slider.current.scrollTo({
                behavior: "smooth",
                left: slider.current.clientWidth * index
            });
            setCurrentProjectIndex(index);
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <div className="min-h-screen pt-16">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mt-8 ml-4 mx-4 flex items-center flex-col md:flex-row"
            >
                <div className="inika-bold text-lg lg:ml-12 mr-72 xl:text-xl flex gap-2 items-center relative mb-4">
                    My <div className="text-green">Projects</div>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex justify-center mb-4"
                >
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-1">
                        <button
                            onClick={() => setActiveTab('projects')}
                            className={`px-6 py-2 text-xs rounded-xl font-medium transition-all duration-300 ${
                                activeTab === 'projects'
                                    ? 'bg-green text-white shadow-lg'
                                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                            }`}
                        >
                            My Projects
                        </button>
                        <button
                            onClick={() => setActiveTab('contributions')}
                            className={`px-6 py-2 text-ss rounded-xl font-medium transition-all duration-300 ${
                                activeTab === 'contributions'
                                    ? 'bg-green text-white shadow-lg'
                                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                            }`}
                        >
                            Contributions
                        </button>
                    </div>
                </motion.div>
            </motion.div>

            {activeTab === 'projects' && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative "
                >
                    <div
                        className="w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center bg-white/20 hover:opacity-60 duration-200 active:scale-105 transition-all rounded-full absolute top-[40%] lg:top-1/2 left-4 cursor-pointer z-10"
                        onClick={movePrevious}
                    >
                        <Icon icon="mingcute:left-fill" width="24" height="24" className="text-green" />
                    </div>
                    
                    <div
                        ref={slider}
                        className="flex items-center overflow-hidden transition-transform duration-500 ease-linear w-screen mx-4"
                    >
                        {myProjects.map((project, index) => (
                            <Project project={project} key={index} />
                        ))}
                    </div>
                    
                    <div
                        className="w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center bg-white/20 hover:opacity-60 duration-200 active:scale-105 transition-all rounded-full absolute top-[40%] lg:top-1/2 right-4 cursor-pointer z-10"
                        onClick={moveNext}
                    >
                        <Icon icon="mingcute:right-fill" width="24" height="24" className="text-green" />
                    </div>
                    
                    <div className="items-center gap-2 justify-center w-full hidden lg:flex">
                        {myProjects.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToProject(index)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 hover:scale-125 cursor-pointer ${
                                    currentProjectIndex === index ? "bg-green scale-125" : "bg-light-gray hover:bg-green/50"
                                }`}
                                aria-label={`Go to project ${index + 1}`}
                            ></button>
                        ))}
                    </div>
                </motion.div>
            )}

            {activeTab === 'contributions' && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mx-4 lg:mx-12 mt-4 mb-8"
                >
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[70vh] overflow-y-auto"
                    >
                        {contributions.map((contribution, index) => (
                            <ContributionCard 
                                key={contribution.id} 
                                contribution={contribution} 
                                index={index}
                            />
                        ))}
                    </motion.div>
                </motion.div>
            )}
        </div>
    );
}
