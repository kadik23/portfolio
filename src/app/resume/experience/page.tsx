"use client"
import { experiecntData } from "@/app/consts";
import InformationsCard from "@/Components/InformationsCard";
// import { Metadata } from "next";

// export const metadata: Metadata = {
//     title: "experience",
// };

export default function experiencepage(){
    return (
    <div className="flex flex-col items-center xl:items-start gap-16 xl:gap-8 mx-4 xl:pl-4 mt-10 xl:mt-16 xl:w-[60%]">
        <div className="flex flex-col gap-4 items-center xl:items-start mt-8">
            <div className="inika-bold text-2xl text-center">My experience</div>
            <div className="text-center xl:text-start">I have experience in web and mobile development, as well as project management, specializing <br />in modern frameworks, scalable solutions, and efficient team coordination.</div>
        </div>
        <div className="flex flex-wrap justify-center xl:justify-start gap-4 w-full overflow-y-auto h-full max-h-[60vh]">
            {experiecntData.map((experience, index) =>{
                return (<InformationsCard key={index}  duration = {experience.duration} title={experience.title} content={experience.content}/>)
            })}
        </div>
    </div>
        )
}