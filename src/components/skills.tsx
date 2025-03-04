import React, {FC} from 'react'
import {IList} from './../types/types'
import {Badge} from './../common/badge'

export const Skills : FC<IList> = ({skill})=> {
  return (
    <section className='px-6 md:px-24 my-6'>
        <h3 className='text-4xl md:text-5xl text-center my-6'>{skill.description}</h3>
        <div className='flex gap-1 my-2 flex-wrap'>
        {skill.list.map(({i, title})=>
        <Badge key={i}  skill={title}/> 
        )} 
        </div>
       
    </section>
  )
}

export default Skills