"use client"
import InformationsCard from "@/Components/InformationsCard";
import { motion } from "framer-motion";
// import { Metadata } from "next";

// export const metadata: Metadata = {
//     title: "experience",
// };
const experiecntData = [
    {
        duration: '2024 - Present',
        title:'TechVerse Club',
        content: 'Designing web app'
    },
    {
        duration: '2024 - Present',
        title:'Mern Stack Developer',
        content: 'Implementing projects with medium complexity.'
    },
    {
        duration: 'Summer 2023',
        title:'Web App Developer',
        content: 'Developing CRUD system apps using PHP stack.'
    },
    {
        duration: 'Summer 2024',
        title:'Mobile Apps Developer',
        content: 'Implementing cross platform apps using react native.'
    },
]

export default function experiencepage(){
    return (
    <div className="flex flex-col items-center xl:items-start gap-16 xl:gap-8 mx-4 xl:pl-4 mt-10 xl:mt-16 xl:w-[60%]">
        <div className="flex flex-col gap-4 items-center xl:items-start mt-8">
            <div className="inika-bold text-2xl text-center">My experience</div>
            <div className="text-center xl:text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget dolor vel est <br /> iaculis finibus</div>
        </div>
        <div className="flex flex-wrap justify-center xl:justify-start gap-4 w-full">
            {experiecntData.map(experience =>{
                return (<InformationsCard  duration = {experience.duration} title={experience.title} content={experience.content}/>)
            })}
        </div>
    </div>
        )
}