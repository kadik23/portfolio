"use client"

import { useState } from 'react';
import Link from "next/link";
import Links from "./Links";
import { Icon } from '@iconify/react';
import { motion, AnimatePresence } from "framer-motion";
import { links } from '@/app/consts';
import { usePathname } from 'next/navigation';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const pathname = usePathname();

    return (
        <motion.div
            className="w-full flex justify-between items-center p-4 fixed top-0 left-0"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Link href={'/home'} className="font-semibold text-xl flex items-center inika-bold hover:scale-105 transition-all duration-500">
                <div className="text-green mr-2">{'<S/>'}</div>
                <div>Salah Eddine</div>
            </Link>
            <Links />
            <div className="items-center inika-bold py-2 hidden sm:flex ">
                <Link href={'https://dz.linkedin.com/in/salah-eddine-kadik-6b3889284?original_referer=https%3A%2F%2Flinktr.ee%2F'} className="flex items-center hover:text-green">
                    <Icon className="mr-2" icon="et:linkedin" width="18" height="18" />
                    <div>LinkedIn</div>
                </Link>
                <Link href={'https://github.com/kadik23'} className="flex items-center mx-4 hover:text-green">
                    <Icon icon="hugeicons:github-01" width="18" height="18" className="mr-2" />
                    <div>Github</div>
                </Link>
                <Link href='mailto:kadiksalah03@gmail.com' className="w-8 h-8 active:scale-105 transition-all duration-200 rounded-full bg-light-gray flex items-center justify-center cursor-pointer hover:opacity-75" >
                    <Icon icon="mdi:email-outline" width="18" height="18" className="text-green" />
                </Link>
            </div>
            <div className="lg:hidden w-8 h-8 hover:bg-light-gray rounded-full cursor-pointer" onClick={toggleMenu}>
                <Icon icon={menuOpen ? "jam:close" : "jam:menu"} width="32" height="32" className="hover:text-green" />
            </div>
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        key="menu"
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-gray-800 bg-opacity-90 flex flex-col items-center justify-center text-white z-50"
                    >
                        <div className="lg:hidden absolute top-3 right-4 w-8 h-8 hover:bg-light-gray rounded-full cursor-pointer" onClick={toggleMenu}>
                            <Icon icon={menuOpen ? "jam:close" : "jam:menu"} width="32" height="32" className="hover:text-green" />
                        </div>
                        <Link href={'/home'} className="font-semibold text-3xl flex items-center inika-bold mb-6" onClick={toggleMenu}>
                            <div className="text-green mr-2">{'<S/>'}</div>
                        </Link>
                        <div className='inika-bold text-lg flex flex-col items-center'>
                            {links.map(link => {
                                const isActive = pathname.startsWith(`/${link}`)
                                return (
                                    <Link key={link} href={`/${link}`} className={`capitalize hover:text-green transition-colors duration-100 py-1 px-2 m-1 ${isActive ? 'text-green' : 'text-white'}`}>
                                        {isActive ? '<' : ''} {link} {isActive ? '>' : ''}
                                    </Link>
                                )
                            })}
                        </div>
                        <div className="flex flex-col items-center mt-6">
                            <Link href={'https://dz.linkedin.com/in/salah-eddine-kadik-6b3889284?original_referer=https%3A%2F%2Flinktr.ee%2F'} className="flex items-center hover:text-green mb-4" onClick={toggleMenu}>
                                <Icon className="mr-2" icon="et:linkedin" width="24" height="24" />
                                <div>LinkedIn</div>
                            </Link>
                            <Link href={'https://github.com/kadik23'} className="flex items-center hover:text-green mb-4" onClick={toggleMenu}>
                                <Icon icon="hugeicons:github-01" width="24" height="24" className="mr-2" />
                                <div>Github</div>
                            </Link>
                            <Link href='mailto:kadiksalah03@gmail.com' className="w-12 h-12 active:scale-105 transition-all duration-200 rounded-full bg-light-gray flex items-center justify-center cursor-pointer hover:opacity-75" >
                                <Icon icon="mdi:email-outline" width="24" height="24" className="text-green" />
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div >
    )
}

export default Header;
