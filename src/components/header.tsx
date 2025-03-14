import React, {FC, useEffect, useState } from 'react';
import SunMoonTheme from '../common/sunMoonTheme'
import MobileNav from '../common/mobileNav';
import HamburgerMenu from './../common/hamburgerMenu';
import { useSelector } from 'react-redux';
import { RootState } from 'src/redux/store';
import { useDispatch } from 'react-redux';
import {setOpenNav} from '../redux/dataSlice'

export const Header : FC = () => {

    const navList = useSelector((state: RootState)=>state.data.navMenu)
    const isOpenMobileNav = useSelector((state: RootState)=>state.data.isOpenMobileNav)
    const dispatch = useDispatch();

    const hundleOpenMenu =(): void=> {
       dispatch(setOpenNav(!isOpenMobileNav))
    }    
       
   return(
    <section>
    <header className='bg-yellow-500 sticky z-10 md:px-24 dark:text-white  dark:bg-slate-950'>
            <section className='px-6 py-2 flex justify-between items-center'>
                    <div className='flex text-xl w-1/4 md:text-2xl font-medium'>G.G.Gayane</div>
                    <nav className='flex items-center max-w-3/4'>
                            <ul className='hidden w-full text-slate-600 font-medium justify-between items-center text-lg gap-2
                                md:flex md:gap-6 dark:text-slate-200'>
                                    {navList.map((item, i)=>
                                        <li key={i}><a href={`#${item.link}`}>{item.name}</a></li>
                                    )}
                                <li> <SunMoonTheme /> </li>
                            </ul>
                           <HamburgerMenu  handleOpenMobileNav={hundleOpenMenu} isOpen={isOpenMobileNav}/>
                    </nav>
            </section>  
            {isOpenMobileNav && <MobileNav navList={navList}/>}
       </header>
    </section>    
   )
}