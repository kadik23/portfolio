"use client"
import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';

function getXlMarginTopClass(index:number) {
    const marginClasses = [
        'lg:mt-0',
        'lg:mt-8',
        'lg:mt-16',
        'lg:mt-24',
        'lg:mt-32',
        'lg:mt-40',
        'lg:mt-44',
        'lg:mt-48',
        'lg:mt-52',
        'lg:mt-56',
        'lg:mt-60',
    ]; 
    return marginClasses[index] || marginClasses[marginClasses.length - 1];
}

function SkillsBranch({ index, skills, field, order }: { index: number, skills: Skill[], field: string, order: number }) {
    const xlMarginTopClass = getXlMarginTopClass(index);
    return (
        <div className={`flex flex-col gap-8 items-start w-full mr-4 lg:mr-0 mt-16  ${xlMarginTopClass}`}>
            <div className={`flex items-center w-auto `}>
                <div 
                        className={`rounded-full text-center px-5 py-2 border-2 border-green order-2 lg:order-${order}`} 
                        style={{ width: '11rem', borderRadius: '50% / 100%', boxShadow: '0 0 12px 2px #11F7D0' }}
                    >
                        {field}
                </div> 
                <hr className={`border-2 border-green w-24 lg:w-40 order-1 lg:order-${order === 1 ? '2' : '1'}`} />
            </div>
            <div className={`flex ${order === 2 ? 'flex-row-reverse justify-start' : ' justify-end'}  gap-2 px-4 w-full`}>
                {skills.map((skill, index) => (
                    <Icon key={index} icon={skill.icon} width={32} height={32} className='hover:text-green text-white cursor-pointer hover:scale-105 transition-all duration-200' />
                ))}
            </div>
        </div>
    );
}

export default SkillsBranch;
