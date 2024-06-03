"use client"
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";


export default function ServiceCard({ service, detail, icon, delay }:{service:string, detail:string, icon:string, delay:number}) {
    return (
        <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: delay}}
        className='bg-light-gray p-4 rounded-lg flex flex-col items-center gap-2 h-auto w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-[32%]'>
            <Icon icon={icon} width="36" height="36" className='text-green' />
            <div className='text-xl inika-bold xl:text-2xl text-center'>{service}</div>
            <div className='opacity-80 inika-regular text-center'>{detail}</div>
        </motion.div>
    )
}