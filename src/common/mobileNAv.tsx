import React, {FC} from 'react';
import SunMoonTheme from './sunMoonTheme'

export const MobileNav: React.FC= ()=> {
  return (
    <section
    className="w-full absolute top-[59px] font-medium bg-yellow-500 section-min-height md:hidden dark:bg-slate-950">
    <nav
    className="flex flex-col gap-4 mt-12 pl-6 text-xl item-left justify-start"
    area-label="mobile"
    >
    <a href="#hero" className="w-full hover:opacity-90"
        >Home</a>
    <a href="#rockets" className="w-full hover:opacity-90"
        >About</a>
    <a
        href="#testimonial"
        className="w-full hover:opacity-90"
        >Skills</a>
    <a href="#contact" className="w-full  hover:opacity-90"
        >Contact</a>
    <a href="#footer" className="w-full hover:opacity-90"
        ><SunMoonTheme /></a>
    </nav>
</section>
  )
}

export default MobileNav