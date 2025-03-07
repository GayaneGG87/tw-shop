import React, {FC, useEffect, useState } from 'react';
import SunMoonTheme from '../common/sunMoonTheme'
import MobileNav from '../common/mobileNav';
import HamburgerMenu from './../common/hamburgerMenu';
import { INavMenu } from 'src/types/types';

interface NavProps {
    nav: INavMenu
}

export const Header : React.FC<NavProps> = ({nav}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    
    useEffect(()=>{
    },[isOpen])

    const hundleOpenMenu =()=> {
        setIsOpen(!isOpen)
    }    
       
   return(
    <section>
    <header className='bg-yellow-500 sticky z-10 md:px-24 dark:text-white  dark:bg-slate-950'>
            <section className='px-6 py-2 flex justify-between items-center'>
                    <div className='flex text-xl w-1/4 md:text-2xl font-medium'>G.G.Gayane</div>
                    <nav className='flex items-center max-w-3/4'>
                            <ul className='hidden w-full text-slate-600 font-medium justify-between items-center text-lg gap-2
                                md:flex md:gap-6 dark:text-slate-200'>
                                    {nav.map((item, i)=>
                                        <li key={i}><a href={`#${item.link}`}>{item.name}</a></li>
                                    )}
                                <li> <SunMoonTheme /> </li>
                            </ul>
                           <HamburgerMenu  handleOpenMobileNav={hundleOpenMenu} setIsOpen={setIsOpen} isOpen={isOpen}/>
                    </nav>
            </section>  
            {isOpen && <MobileNav nav={nav} setIsOpen={setIsOpen}/>}
       </header>
    </section>    
   )
}