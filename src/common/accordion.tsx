import React, {FC} from 'react'
import {IAbout, ICourses, IEducation, IExperience, ILanguage} from './../types/types'

export interface IItemAbout {
    itemAbout: IEducation |IExperience |ILanguage | ICourses
}

export const Accordion :FC<IItemAbout>  = ({itemAbout}) => {

    return (
    <section className='w-full flex flex-col border border-amber-500 rounded-sm'>
            <div className='w-full px-2 py-4 bg-yellow-500 text-white dark:bg-yellow-500'>{itemAbout.description}</div>
                <ul className='border border-amber-400 p-2 flex flex-col gap-2' >
                    {itemAbout.list.map((item, i)=>
                         <li key={i} className="flex flex-col border border-yellow-600 m-2 p-2 rounded-sm ">
                            {Object.entries(item).
                            filter(([key]) => key !== "id").
                            map(([key, value]) => (
                                <p key={key} className=''>
                                    <span className='capitalize px-4 font-bold'>{key} :</span>
                                     {value}</p>
                            ))}
                        </li>
                    )}
                    
                </ul>
    </section>
  )
}
