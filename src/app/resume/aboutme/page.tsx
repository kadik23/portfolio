// import { Metadata } from "next";
"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react";

// export const metadata: Metadata = {
//     title: "aboutme"
// };

export default function AboutMepage(){
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (    
    <div className="flex flex-col items-center xl:items-start gap-16 xl:gap-8 mx-4 xl:pl-4 mt-10 xl:mt-16 xl:w-[60%]">
        <div className=" mt-8 inika-bold text-2xl text-center">
            About me
        </div>
        <div className="flex flex-wrap inika-regular justify-center xl:justify-start gap-4 w-full">
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1,delay:0.5}}>
                <div className="text-green">01. About me :</div>
                <div className="space-x-2 space-y-3">I am Kadik Salah Eddine, a full stack developer and mobile app developer from Algeria. While I hold a banchelor{"'"}s degree in the health and safety field, my true passion lies in web development. Proficient in the MERN stack, React Native, Next.js, and Type Script, I am committed to creating impactful digital experiences and innovative solutions. My constant thirst for knowledge drives me to continuously learn and grow in this dynamic industry.</div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1,delay:1}}
            >
                <div className="text-green">02. Interest and hobbies :</div>
                <div className="space-x-2 space-y-3">Beyond web development, I have a profound interest in design and aesthetics, seeking the perfect balance between functionality and visual appeal. Embracing an active lifestyle, I find joy in sports activities that not only keep me physically fit but also cultivate discipline and focus.</div>
            </motion.div>
        </div>
    </div>)
}