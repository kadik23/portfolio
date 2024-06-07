"use client"
import React, { useState, useEffect } from 'react';

function Language({
    name, percentage
}: {
    name: string, percentage: number
}) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        setProgress(Math.min(100, Math.max(0, percentage)));
    }, [percentage]);
  return (
        <div className='flex flex-col gap-2 items-start lg:flex-row lg:items-center'>
            <div className='text-xl sm:inika-bold capitalize lg:w-24 lg:text-sm lg:inika-regular'>{name}</div>
            <div className='flex flex-col items-center inika-regular text-md w-full'>
                <div className='w-full h-2 lg:h-1.5 bg-light-gray rounded-full  overflow-hidden'>
                    <div
                        className='h-full bg-green rounded-full transition-width duration-1000'
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
            </div>
        </div>  )
}

export default Language