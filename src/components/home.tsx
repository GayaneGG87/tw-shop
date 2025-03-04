 import React, {FC}  from 'react';
 import {IPerson } from './../types/types';
 import image2 from "./../assets/images/01.jpg"

 export interface PersonProps {
    person: IPerson
 }
 
 export const Home : FC<PersonProps> = ({person}) => {
    // console.log('ds', process.env.REACT_APP_API_URL )
    return(
        <main className='w-full px-6 py-24 flex justify-between flex-col gap-6 md:flex-row md:px-24 dark:bg-slate-800'>
            <section className='w-full md:w-2/5 rounded-full flex justify-center'>
            <img  className='size-60 rounded-full md:justify-start'
            alt='Profile image'
            src={image2} />

            </section>
            <section className='flex w-full md:w-3/5 flex-col justify-center items-center md:items-start'>
                <h2 className='text-4xl font-medium md:text-5xl dark:text-white'>Hello I'm <br /> Gayane</h2>
                <p className='text-2xl text-slate-800 my-6 text-center md:text-left dark:text-white'>I'm a
                     <span className='text-yellow-500 dark:text-yellow-300'>Frontend Developer</span> based in React js.
                 Working on creating dynamic webPages, that makes life easier and more user-friendly!</p>
                 <div className='flex gap-6'>
                     <button className='px-6 py-2 text-white font-medium bg-amber-500 hover:bg-yellow-400 rounded-sm'> Projects</button>
                 <button className='px-6 py-2 text-white font-medium bg-amber-500 hover:bg-yellow-400 rounded-sm'>Resume</button>
                 </div>
            </section>
        </main>
    )
 }