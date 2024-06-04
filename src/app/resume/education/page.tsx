// "use client"
import InformationsCard from "@/Components/InformationsCard";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "education"
};

const experiecntData = [
    {
        duration: '2022 - 2024',
        title:'University of yahia fares',
        content: 'Graduated Bachelor’s degree'
    },
    {
        duration: 'Autumn 2022',
        title:'Front End Development ',
        content: 'Online Bootcamp Platform'
    },
]


export default function educationpage() {

    return ( 
    <div className="flex flex-col items-center xl:items-start gap-16 xl:gap-8 mx-4 xl:pl-4 mt-10 xl:mt-16 xl:w-[60%]">
        <div className="flex flex-col gap-4 items-center xl:items-start mt-8">
            <div className="inika-bold text-2xl text-center">My education</div>
            <div className="text-center xl:text-start">I am computer science student in university, Graduated Bachelor's degree and i’m passionate about programming 3 years. I’m currently a Web Developer</div>
        </div>
        <div className="flex flex-wrap justify-center xl:justify-start gap-4 w-full">
            {experiecntData.map(experience =>{
                return (<InformationsCard  duration = {experience.duration} title={experience.title} content={experience.content}/>)
            })}
        </div>
    </div>
    )
}