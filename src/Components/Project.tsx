import { projects } from "@/app/consts";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";
import { Tooltip } from "react-tooltip";
import { motion } from "framer-motion";

interface ProjectProps {
    project: Projects;
}

function Project({ project }: ProjectProps) {
    return (
        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            className="min-w-full px-16 h-full flex items-center lg:scale-90"
        >
            <div className="flex flex-col lg:flex-row justify-between w-full h-full">
                <div className={`lg:order-2 w-full flex flex-col items-center justify-center lg:w-1/2 mr-2 lg:mr-0`}>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Image 
                            src={`/images/${project.image}`} 
                            priority 
                            quality={100} 
                            height={500} 
                            width={300} 
                            alt="Description of image" 
                            className="md:w-[90%] w-full rounded-lg shadow-2xl" 
                        />
                    </motion.div>
                    <div className="items-center gap-2 justify-center w-full mt-4 lg:hidden flex">
                        {projects.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    // This will be handled by the parent component
                                    const event = new CustomEvent('goToProject', { detail: index });
                                    window.dispatchEvent(event);
                                }}
                                className={`md:w-3 md:h-3 w-2 h-2 rounded-full transition-all duration-300 hover:scale-125 cursor-pointer ${
                                    project.id === index+1 ? "bg-green scale-125" : "bg-light-gray hover:bg-green/50"
                                }`}
                                aria-label={`Go to project ${index + 1}`}
                            ></button>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col items-start justify-between h-full ">
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-dark-gray text-border text-6xl text-start"
                    >
                        0{project.id}
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-2xl md:text-wrap lg:text-nowrap w-52 inika-bold mt-2 hover:text-green transition-colors duration-300"
                    >
                        {project.title}
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="space-2 inika-regular capitalize mt-4 lg:w-[32rem] first-letter:ml-4"
                    >
                        {project.description}
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="flex flex-wrap gap-4 justify-start mt-4 w-80 lg:w-96"
                    >
                        {project.frameworks.map((framework, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                                whileHover={{ scale: 1.05 }}
                                className="text-dark-gray text-xs inika-bold px-3 py-0.5 rounded-xl bg-green/20 hover:bg-green/30 border border-green/30 transition-all duration-300"
                            >
                                {framework}
                            </motion.div>
                        ))}
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        className="flex gap-4 items-center flex-col md:flex-row mt-6"
                    >
                        <Link 
                            href={project.code_source} 
                            target="_blank"
                            rel="noopener noreferrer"
                            data-tooltip-id={`tooltip-${project.id}-repo`} 
                            data-tooltip-content='View Repository'
                            className="flex items-center gap-2 px-4 py-2 bg-green/30 hover:bg-green/40 rounded-lg transition-all duration-300 hover:scale-105 border border-green/50 shadow-lg"
                        >
                            <Icon icon="mdi:github" width="20" height="20" className="text-green" />
                            <span className="text-green text-sm font-medium">Repository</span>
                        </Link>
                        <Tooltip id={`tooltip-${project.id}-repo`} />
                        
                        {project.deployments && (
                            <Link 
                                href={project.deployments}
                                target="_blank"
                                rel="noopener noreferrer"
                                data-tooltip-id={`tooltip-${project.id}-live`}
                                data-tooltip-content='Visit Live Site'
                                className="flex items-center gap-2 px-4 py-2 bg-green/30 hover:bg-green/40 rounded-lg transition-all duration-300 hover:scale-105 border border-green/50 shadow-lg"
                            >
                                <Icon icon="mage:preview-fill" width="20" height="20" className="text-green" />
                                <span className="text-green text-sm font-medium">Live Site</span>
                            </Link>
                        )}
                        {project.deployments && <Tooltip id={`tooltip-${project.id}-live`} />}
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}

export default Project