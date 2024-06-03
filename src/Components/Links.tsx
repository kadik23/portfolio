"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { links } from '@/app/consts'

function Links() {
    const pathname = usePathname()

    return (
        <div className='inika-regular hidden lg:block text-lg'>
            {links.map(link => {
                const isActive = pathname.startsWith(`/${link.path}`)
                return (
                    <Link key={link.name} href={`/${link.path}`} className={`capitalize hover:text-green transition-colors duration-100 py-1 px-2 m-1 ${isActive ? 'text-green' : 'text-white'}`}>
                        {isActive ? '<' : ''} {link.name} {isActive ? '>' : ''}
                    </Link>
                )
            })}
        </div>
    )
}

export default Links
