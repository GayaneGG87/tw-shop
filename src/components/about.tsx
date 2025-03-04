import { React } from 'react';
import IPerson  from './../types/types';
import { Accordion }  from "./../common/accordion";
import {Skills} from './Skills'

export interface AboutProps {
    about: IAbout
}


export const About: FC<AboutProps> = ({about}) => {
//    console.log('about', about)
   return(
       <section className='px-6 md:px-24 dark:bg-slate-800'>
            <h2 className='my-6 text-3xl text-center md:text-4xl dark:text-white'>About Me</h2>
            <div className='w-12 rounded-full bg-yellow-500 h-[3px] mx-auto my-6'></div>
            <Accordion  itemAbout={about.education}/>
            <Accordion  itemAbout={about.experience}/>
            <Accordion  itemAbout={about.lang}/>
            <Accordion  itemAbout={about.course}/>
       </section>
   )
}
