"use client";
import React from 'react';
import { Icon } from '@iconify/react';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

function getXlMarginTopClass(index: number) {
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
        <div className={`flex flex-col gap-8 ${order === 1 ? 'items-end' : 'items-start'} w-full mr-4 lg:mr-0 mt-16 ${xlMarginTopClass}`}>
            <div className={`flex items-center w-auto`}>
                <div
                    className={`rounded-full text-center px-5 py-2 border-2 border-green order-2 ${order === 1 ? 'lg:order-1' : 'lg:order-2'}`}
                    style={{ width: '11rem', borderRadius: '50% / 100%', boxShadow: '0 0 12px 2px #11F7D0' }}
                >
                    {field}
                </div>
                <hr className={`border-2 border-green w-24 lg:w-40 order-1 ${order === 1 ? 'lg:order-2' : 'lg:order-1'}`} />
            </div>
            <div className="w-full min-w-0 overflow-x-auto scrollbar-hide pb-2">
                <div className={`flex ${order === 2 ? 'flex-row-reverse' : 'flex-row'} gap-2 min-w-max`}>
                    {skills.map((skill, index) => (
                        <React.Fragment key={index}>
                            <Icon
                                data-tooltip-id={`tooltip-${index}`}
                                data-tooltip-content={skill.name}
                                icon={skill.icon}
                                className='hover:text-green h-8 w-8 text-white cursor-pointer hover:scale-105 transition-all duration-200'
                            />
                            <Tooltip id={`tooltip-${index}`} />
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SkillsBranch;
