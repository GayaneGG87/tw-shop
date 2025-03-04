import { React, useState } from 'react';
import Dark from "./../assets/icons/dark";
import  Light  from "./../assets/icons/light";

export const Header : FC<PersonProps> = () => {
    const [darkMode, setDarkMode] = useState<boolean>(false) 
  
   return(
       <header className='px-6 py-3 border-b border-b-yellow-500 dark:text-white flex justify-between 
         items-center md:px-24 dark:bg-black'>
           <div className='flex text-xl w-1/4 md:text-2xl font-medium'>G.G.Gayane</div>
           <nav className='flex max-w-3/4'>
                <ul className='hidden w-full text-slate-600 font-medium justify-between text-lg gap-2 md:flex md:gap-6'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Skills</li>
                    <li>
                        <div className='w-[30px] h-[30px] flex self-center items-center justify-center cursor-pointer bg-slate-100 rounded-sm border-slate-200'>
                            { darkMode ? 
                            <Dark onClick={()=>setDarkMode(!darkMode)}/> :
                            <Light onClick={()=>setDarkMode(!darkMode)} /> }
                        </div>
                    </li>
                </ul>
                <div className='flex md:hidden text-4xl text-black h-[44px] cursor-pointer'>&#9776;</div>
           </nav>
       </header>
   )
}