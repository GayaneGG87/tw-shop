import React, {FC, useState} from 'react';
import SunMoonTheme from './sunMoonTheme'
import { INavMenu } from 'src/types/types';

interface IsetIsOpen{
    setIsOpen: boolean
}

interface MobileNavProps {
    nav: INavMenu,
    setIsOpen: IsetIsOpen
}

export const MobileNav: React.FC<MobileNavProps>= ({nav, setIsOpen})=> {
    
  return (
    <section
    className="w-full absolute top-[59px] font-medium bg-yellow-500 section-min-height md:hidden dark:bg-slate-950">
    <nav
        className="flex flex-col gap-4 mt-12 pl-6 text-xl item-left justify-start"
            area-label="mobile">
                {
                    nav.map((item, i)=>
                        <a  
                        onClick={(e)=>{e.preventDefault; setIsOpen(false) }}
                        key={i} 
                        href={`#${item.link}`} 
                        className="w-full hover:opacity-90"
                    >{item.name}</a>)
                }
        <a href="#" className="w-full hover:opacity-90"
        ><SunMoonTheme /></a>
    </nav>
</section>
  )
}

export default MobileNav