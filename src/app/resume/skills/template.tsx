'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

// import { Metadata } from "next";

// export const metadata: Metadata = {
//     title: "skills"
// };

export default function Template({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const pathname = usePathname()
    const skills = [
        { href: '/resume/skills', name: 'Hard Skills' },
        { href: '/resume/skills/soft-skills', name: 'Soft Skills' },
      ];
    return (
        <div className="flex flex-col  items-center lg:items-start gap-16 lg:gap-8 mx-4 lg:pl-4 lg:mt-16 lg:w-[60%]">
            <div className="flex flex-col gap-8 mt-8">
                <div className=" mt-8 inika-bold text-2xl text-center lg:text-start">
                    My skills
                </div>
                <div className="inika-regular flex items-center justify-center lg:justify-start gap-4">
                    <Link href={'/resume/skills'} className={`${pathname == '/resume/skills' ? 'bg-green text-dark-gray' : 'bg-light-gray'} py-1 px-2 rounded-lg hover:opacity-75 active:scale-105 `}>Hard Skills</Link>
                    <Link href={'/resume/skills/soft-skills'} className={`${pathname == '/resume/skills/soft-skills' ? 'bg-green text-dark-gray' : 'bg-light-gray'} py-1 px-2 rounded-lg hover:opacity-75 active:scale-105 `}>Soft Skills</Link>
                </div>
                {children}
            </div>
        </div>)
}