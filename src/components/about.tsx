import React, {FC}  from 'react';
import { Accordion }  from "./../common/accordion";
import {Skills} from './skills'
import { IAbout, IList } from './../types/types';
import { Projects } from './projects';

export interface AboutProps {
    about: IAbout
}


export const About: FC<AboutProps> = ({about}) => {
   return(
       <section className=' bg-slate-100 py-4 dark:bg-slate-950' id='about'>
            <h2 className='mb-2 text-2xl text-center md:text-3xl dark:text-white'>About Me</h2>
            <div className='w-12 rounded-full bg-yellow-500 h-[3px] mx-auto m-4'></div>
            <Accordion  itemAbout={about.education}/>
            <Accordion  itemAbout={about.experience}/>
            <Accordion  itemAbout={about.lang}/>
            <Accordion  itemAbout={about.course}/>
            <Skills skill={about.skill} /> 
       </section>
   )
}
