import React, {FC, useState } from 'react';
import SunMoonTheme from '../common/sunMoonTheme'

export const Header : React.FC = () => {
    const [darkMode, setDarkMode] = useState<boolean>(false) 
  
   return(
       <header className='px-6 py-3 border-b border-b-yellow-500  flex justify-between 
         items-center md:px-24 dark:text-white  dark:bg-slate-950'>
           <div className='flex text-xl w-1/4 md:text-2xl font-medium'>G.G.Gayane</div>
           <nav className='flex max-w-3/4'>
                <ul className='hidden w-full text-slate-600 font-medium justify-between text-lg gap-2
                 md:flex md:gap-6 dark:text-slate-200'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Skills</li>
                    <li className='dark:text-black'>
                        <SunMoonTheme />
                    </li>
                </ul>
                <div className='flex md:hidden text-4xl text-black h-[44px] cursor-pointer dark:text-white'>&#9776;</div>
           </nav>
       </header>
   )
}