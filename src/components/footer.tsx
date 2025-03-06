import React, {FC} from 'react'
import Google from "./../assets/icons/google";
import In from "./../assets/icons/in";
import GitIcon from "./../assets/icons/gitIcon";


export const Footer = ()=> {
  return (
     <section className='border-t border-yellow-600 px-6 py-4 flex justify-between md:px-24 dark:bg-slate-800 dark:text-white'>
        <p>©2025 G.Gayane</p>
        <div className='flex gap-2 '>
            <Google className='dark:fill-white'/>
            <GitIcon className='dark:fill-white' />
            <In className='dark:fill-white'/>
        </div>
     </section>
  )
}

export default Footer