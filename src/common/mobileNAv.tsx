import React, {FC} from 'react';
import SunMoonTheme from './sunMoonTheme'
import { INavMenu } from 'src/types/types';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './../redux/store';
import { setOpenNav } from './../redux/dataSlice';


export const MobileNav: FC= ()=> {
    const isOpenMobileNav = useSelector((state: RootState)=>state.data.isOpenMobileNav)
    const navList = useSelector((state: RootState)=>state.data.navMenu)
    const dispatch = useDispatch();
    
    const handleOpenMenu = (e): void=>{
        e.preventDefault;
        dispatch(setOpenNav(!isOpenMobileNav))
        
    }
    
  return (
    <section
    className="w-full absolute top-[59px] font-medium bg-yellow-500 section-min-height md:hidden dark:bg-slate-950">
    <nav
        className="flex flex-col gap-4 mt-12 pl-6 text-xl item-left justify-start"
            area-label="mobile">
                {
                    navList.map((item, i)=>
                        <a  
                        onClick={(e)=> handleOpenMenu(e) }
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