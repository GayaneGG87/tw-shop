import React, {FC, useState } from 'react';
import SunMoonTheme from '../common/sunMoonTheme'
import MobileNav from './../common/mobileNAv';
import HamburgerMenu from './../common/hamburgerMenu';

export const Header : React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

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
                                <li>Home</li>
                                <li>About</li>
                                <li>Skills</li>
                                <li> <SunMoonTheme /> </li>
                            </ul>
                           <HamburgerMenu  handleOpenMobileNav={hundleOpenMenu}/>
                    </nav>
            </section>  
            {isOpen && <MobileNav />}
       </header>
    </section>    
   )
}