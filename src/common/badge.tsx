import React, {FC} from 'react'
import {ISkill} from './../types/types'

export interface SkillProps   {
    skill: string
}

export const Badge: FC<SkillProps> = ({skill})=> {
  return (
     <div className='px-4 py-4 bg-yellow-500 text-white flex rounded-sm font-medium'>
                {skill} 
    </div>
  )
}

export default Badge