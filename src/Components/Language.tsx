"use client"
import React from 'react';

function Language({
    name, level
}: {
    name: string, level: string
}) {

  return (
        <div className='flex flex-col items-center gap-2'>
            <div className='text-xl sm:inika-bold capitalize lg:text-sm lg:inika-regular'>{name}: </div>
            <div className='text-2xl text-nowrap sm:inika-bold font-bold capitalize lg:text-sm lg:inika-regular'>{level}</div>
        </div>  )
}

export default Language