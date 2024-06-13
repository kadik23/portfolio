"use client";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

function InformationsCard({ duration, title, content }: { duration: string, title: string, content: string }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col items-start py-4 px-2 h-auto w-72 rounded-lg bg-light-gray"
        >
            <div className="text-green inika-bold text-sm">{duration}</div>
            <div className="inika-bold text-lg">{title}</div>
            <div className="inika-regular text-xs opacity-75 flex items-start">
                <div className="text-green mr-2 text-md inika-bold">.</div>
                {content}
            </div>
        </motion.div>
    );
}

export default InformationsCard;
