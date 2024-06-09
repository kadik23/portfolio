import { projects } from "@/app/consts";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";

interface ProjectProps {
    project: Projects;
}

function Project({ project }: ProjectProps) {
    return (
        <div className="min-w-full h-auto flex items-center lg:scale-90">
            <div className="mt-4 flex flex-col lg:flex-row justify-between w-full">
                <div className={`lg:order-2 w-full flex flex-col items-center justify-center lg:w-1/2 mr-2 lg:mr-0`}>
                    <Image src={`/images/${project.image}`} priority quality={100} height={500} width={300} alt="Description of image" className=" w-[90%] " />
                    <div className=" items-center gap-2 justify-center w-full mt-4 lg:hidden flex">
                        {projects.map((_, index) => (
                            <div
                                key={index}
                                className={`w-2 h-2 rounded-full ${project.id === index+1 ? "bg-green" : "bg-light-gray"
                                    }`}
                            ></div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col items-start">
                    <div className="text-dark-gray text-border text-6xl text-start">0{project.id}</div>
                    <div className="text-2xl w-52 text-wrap inika-bold mt-2">{project.title}</div>
                    <div className="space-2 inika-regular capitalize mt-4 w-96 first-letter:ml-4">{project.description}</div>
                    <div className="flex flex-wrap gap-4 justify-start mt-4 w-96">{project.frameworks.map((framework, index) => (
                        <div className="text-dark-gray text-sm inika-bold px-2 py-0.5 rounded-xl bg-green hover:opacity-90 " key={index}>{framework}</div>
                        ))}
                    </div>
                    <div className="flex gap-2 items-center  mt-4">
                        <Link href={project.code_source}>
                            <Icon icon="mdi:github" width="24" height="24" className="hover:scale-105 hover:text-green transition-all duration-200 cursor-pointer" />
                        </Link>
                        {project.deployments && (
                            <Link href={project.deployments}>
                                <Icon icon="mage:preview-fill" width="24" height="24" className="hover:scale-105 hover:text-green transition-all duration-200 cursor-pointer" />
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project