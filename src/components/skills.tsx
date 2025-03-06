import React, {FC} from 'react'
import {IList} from './../types/types'
import {Badge} from './../common/badge'

interface SkillsProps {
skill: IList
}

export const Skills : React.FC<SkillsProps> = ({skill})=> {
  console.log('skill', skill)
  return (
    <section className='px-6 md:px-24 my-6'>
        <h3 className='text-2xl md:text-3xl text-center mt-6 mb-2'>{skill.description}</h3>
        <div className='w-12 rounded-full bg-yellow-500 h-[3px] mx-auto my-4'></div>
        <div className='flex gap-1 my-2 flex-wrap'>
        {skill.list.map(({id, title})=>
        <Badge key={id}  skill={title}/>
        )} 
        </div>
       
    </section>
  )
}

export default Skills