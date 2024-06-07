"use client"
import React, { useState, useEffect } from 'react';

function SoftSkill({
    name, percentage
}: {
    name: string, percentage: number
}) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        setProgress(Math.min(100, Math.max(0, percentage)));
    }, [percentage]);

    return (
        <div className='flex flex-col gap-2 items-center w-44 lg:w-40'>
            <div className='text-xl inika-bold capitalize lg:text-sm'>{name}</div>
            <div className='flex flex-col items-center inika-regular text-md w-full'>
                <div className='text-green inika-bold'>{percentage}%</div>
                <div className='w-2/3 h-2 lg:h-1.5 bg-light-gray rounded-full overflow-hidden'>
                    <div
                        className='h-full bg-green rounded-full transition-width duration-1000'
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
            </div>
        </div>
    );
}

export default SoftSkill;
