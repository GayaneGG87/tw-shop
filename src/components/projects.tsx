import React from 'react'
import { IProjects } from 'src/types/types'

interface ProjectsProps {
    projects: IProjects[]
}

export const Projects: React.FC<ProjectsProps> = ({projects}) => {

    return (
    <section className='px-6 py-4 md:px-24 dark:bg-slate-800 dark:text-white'>
        <h3 className='text-2xl md:text-3xl text-center mt-6 mb-2'>Projects</h3>
        <div className='w-12 rounded-full bg-yellow-500 h-[3px] mx-auto my-4'></div>
        <div className='flex flex-col gap-8 '>
            {projects.map((item, i)=>
            <div className='flex flex-col  md:flex-row items-center justify-center gap-4 md:justify-center '>
                <div className='flex  md:w-1/2'>
                    <a href={item.link} className='bg-slate-200 rounded-sm p-2'>
                        <img src={`/src/assets/images/${item.img}`} alt={item.title} className='w-80 h-60 rounded-sm' />
                    </a>
                </div>
                <div className=' w-2/3 md:w-1/2'>
                    <h4 className='text-center font-medium text-lg'>{item.title}</h4>
                    <p>{item.description}</p>
                </div>
            </div>
            )}
            
        </div>
    </section>
  )
}
