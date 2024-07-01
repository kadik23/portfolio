"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Typewriter from 'typewriter-effect';

export default function Home() {
  const animationVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  };

  const [experience, setExperience] = useState(0);
  const [projects, setProjects] = useState(0);
  const [languages, setLanguages] = useState(0);

  useEffect(() => {
    const animateValue = (setValue:any, targetValue:any) => {
      let start = 0;
      const duration = 2000; 
      const stepTime = Math.abs(Math.floor(duration / targetValue));

      const timer = setInterval(() => {
        start += 1;
        setValue(start);
        if (start === targetValue) {
          clearInterval(timer);
        }
      }, stepTime);
    };

    animateValue(setExperience, 2);
    animateValue(setProjects, 10);
    animateValue(setLanguages, 5);
  }, []);

  return (
    <div className="flex relative">
      <motion.div
        className="w-full flex flex-col items-start mt-4 lg:ml-8"
        initial="hidden"
        animate="visible"
        variants={animationVariants}
        transition={{ duration: 1 }}
      >
        <div className="pt-16 pb-8 px-4 lg:px-4">
          <div className="flex flex-col inika-regular opacity-30 text-sm">
            <div>{"</html>"}</div>
            <div className="px-4">{"<body>"}</div>
            <div className="px-6">{"<h1>"}</div>
          </div>
          <div className="inika-bold text-2xl lg:text-4xl sm:text-2xl px-6">
            <Typewriter
              options={{
                strings: ['Hello', 'I’m Salah,', 'CS Student', 'Web Developer', ],
                autoStart: true,
                loop: true,
                cursor: "|",
                deleteSpeed: 50,
              }}
            />
            <div className="flex items-end">
              CS Student <div className="inika-regular opacity-30 text-xs lg:text-sm ml-2">{'</h1>'}</div>
            </div>
          </div>
          <div className="px-6">
            <div className="opacity-30 text-sm">{"<p>"}</div>
            <div className="inika-regular opacity-70 lg:text-2xl text-xl">full stack developer</div>
            <div className="opacity-30 text-sm">{"</p>"}</div>
          </div>
        </div>
        <div className="inika-regular flex lg:flex-row flex-col items-center px-8 w-full lg:w-auto">
          <Link href="https://drive.google.com/file/d/1fWCrTrSIDMeeTgIvPX1-iI-px7g8Qvc8/view" className="text-green border-2 lg:mr-4 mb-4 border-green rounded-md lg:px-3 lg:py-1 lg:text-xl px-4 py-0.5 text-lg w-44 hover:bg-green hover:text-dark-gray transition-all duration-300 active:scale-105 flex items-center">
            <Icon icon="hugeicons:file-view" width="20" height="20" className="mr-2" /> View my CV
          </Link>
          <Link href="/contact" className="text-dark-gray text-center bg-green rounded-md mb-4 lg:px-3 lg:py-1.5 lg:text-xl px-4 py-1 text-lg w-44 flex items-center justify-center transition-all duration-300 active:scale-105 hover:opacity-75">
            <Icon icon="fluent-mdl2:contact" width="18" height="18" className="mr-2" />Hire me
          </Link>
        </div>
        <div className="flex items-center justify-start w-full  lg:px-0px-8 pb-4 lg:pb-0">
          <div className="py-8 lg:py-2 flex flex-wrap gap-8 lg:justify-between justify-center px-8 bg-black/25 rounded-xl mt-8 ml-6 w-[85%] lg:w-3/6">
            <div className="flex items-center w-32">
              <div className="text-4xl inika-bold">{experience < 10 ? `0${experience}` : experience}</div>
              <div className="text-xs inika-regular ml-2">Years of experience</div>
            </div>
            <div className="flex items-center w-32">
              <div className="text-4xl inika-bold">{projects < 10 ? `0${projects}` : projects}</div>
              <div className="text-xs inika-regular ml-2">Projects completed</div>
            </div>
            <div className="flex items-center w-32">
              <div className="text-4xl inika-bold">{languages < 10 ? `0${languages}` : languages}</div>
              <div className="text-xs inika-regular ml-2">Programming Languages</div>
            </div>
          </div>
        </div>
      </motion.div>
      <Image src='/profile.png' priority quality={100} height={500} width={300} alt="Description of image" className="absolute top-12 right-0 h-screen w-[43%] lg:block hidden z-10" />
    </div>
  );
}
