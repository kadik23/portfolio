"use client"
import React from 'react';
import { motion } from 'framer-motion';

function SoftSkill({ name }: { name: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05, filter: 'brightness(1.15)' }}
            className='flex items-center justify-center w-44 lg:w-40'
        >
            <div className='px-6 py-3 text-nowrap bg-green/20 border border-green rounded-xl shadow-md text-lg inika-bold capitalize text-green text-center transition-all duration-300 hover:bg-green/30'>
                {name}
            </div>
        </motion.div>
    );
}

export default SoftSkill;
