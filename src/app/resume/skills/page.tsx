"use client"
import React, { useEffect, useState } from 'react';
import SkillsBranch from '@/Components/SkillsBranch';
import { hardSkills } from '@/app/consts';

function Skillspage() {
  const generateSkillsComponents = (skillsObj: HardSkills) => {
    const components = [];
    let index = 1;

    for (const [field, skills] of Object.entries(skillsObj)) {
      const order = index % 2 === 0 ? 2 : 1;
      components.push(
        <SkillsBranch index={index} key={field} skills={skills} field={field} order={order} />
      );
      index++;
    }
    return components;
  };

  const skillsComponents = generateSkillsComponents(hardSkills);

  const [isMatching, setIsMatching] = useState(false);

  const handleResize = () => {
    const isSmall = window.matchMedia('(min-width: 576px) and (max-width: 767.98px)').matches;
    const isExtraLarge = window.matchMedia('(min-width: 1200px)').matches;
    setIsMatching(isSmall || isExtraLarge);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize); 
    return () => window.removeEventListener('resize', handleResize); 
  }, []);

  return (
    <>
      {isMatching 
      ? (
        <div className='flex h-64 w-auto overflow-y-scroll '>
          <div>
            {skillsComponents.filter((_: any, index: number) => index % 2 === 0)}
          </div>
          <hr className='border-2 border-green h-[46rem]' />
          <div className='pr-4'>
            {skillsComponents.filter((_, index) => index % 2 !== 0)}
          </div>
        </div>
      )
      : (
        <div className='flex h-64 w-auto overflow-y-scroll'>
        <hr className='border-2 border-green h-[68rem] lg:h-[46rem]' />
        <div>
          {skillsComponents}
        </div>
      </div>
      )
    }
    </>
  );
}

export default skillspage;
