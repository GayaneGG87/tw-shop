import React, {FC, useState} from 'react'
import {IAbout, ICourses, IEducation, IExperience, ILanguage, IList} from './../types/types'

 interface IItemAboutProps {
    itemAbout: IList
}

export const Accordion :React.FC<IItemAboutProps>  = ({itemAbout})=> {
    const [isOpenList, setIsOpenList] = useState<boolean>(false)

    return (
    <section className='flex flex-col bg-slate-200 mx-6 my-2 rounded-sm md:mx-24 dark:bg-slate-600'>
        <div className='w-full px-2 py-4  flex justify-between'
        onClick={()=>setIsOpenList(!isOpenList)}>
            <h3 className='text-left dark:text-white'>{itemAbout.description}</h3>
            <button className={`text-yellow-500 duration-200 dark:text-white ${isOpenList ? 'rotate-180 ':'' }` }
            > 🡫  </button>
        </div>
           {isOpenList && 
           <ul className='p-4 flex flex-col gap-4' >
           {itemAbout.list.map((item, i)=>
                <li key={i} className=" bg-slate-300 p-2 rounded-sm drop-shadow-md  dark:bg-slate-800 dark:text-white ">
                   {Object.entries(item).
                   filter(([key]) => key !== "id").
                   map(([key, value]) => (
                           <span key={key} className='capitalize font-medium'>{value} .</span>
                       
                   ))}
               </li>
           )}
           
       </ul>}
                
    </section>
  )
}
