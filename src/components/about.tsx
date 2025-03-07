import React, {FC}  from 'react';
import { Accordion }  from "./../common/accordion";
import {Skills} from './skills'
import { useSelector } from 'react-redux';
import { RootState } from 'src/redux/store';


export const About: FC = () => {
    const   about = useSelector((state:RootState)=>state.data.about)
    const {education, experience, lang, course, skill} = about
    
   return(
       <section className=' bg-slate-100 py-4 dark:bg-slate-950' id='about'>
            <h2 className='mb-2 text-2xl text-center md:text-3xl dark:text-white'>About Me</h2>
            <div className='w-12 rounded-full bg-yellow-500 h-[3px] mx-auto m-4'></div>
            <Accordion  itemAbout={education}/>
            <Accordion  itemAbout={experience}/>
            <Accordion  itemAbout={lang}/>
            <Accordion  itemAbout={course}/>
            <Skills skill={skill} /> 
       </section>
   )
}
