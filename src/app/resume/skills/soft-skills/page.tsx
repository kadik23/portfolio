import Language from '@/Components/Language'
import SoftSkill from '@/Components/SoftSkill'
import { languages, softSkills } from '@/app/consts'
import React from 'react'

function page() {
  return (
    <div className='lg:w-5/6 '>
      <div className='flex flex-wrap lg:justify-start gap-8 justify-center my-4'>
        {softSkills.map((softSkill) =>(
          <SoftSkill percentage={softSkill.percentage} name={softSkill.name}/>
        ))}
      </div>
      <div className='flex flex-col items-center lg:items-start my-8'>
        <div className='text-xl inika-bold'>Languages</div>
        <div className='my-8 lg:my-2 w-full lg:w-5/6 flex flex-col gap-4 '>
          {languages.map((language) =>(
            <Language name={language.name} percentage={language.percentage} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default page