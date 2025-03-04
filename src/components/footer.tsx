import React, {FC} from 'react'
import Google from "./../assets/icons/google";
import In from "./../assets/icons/in";
import GitIcon from "./../assets/icons/gitIcon";


export const Footer = ()=> {
  return (
     <section className='border-t border-yellow-600 mx-6 py-4 flex justify-between md:mx-24'>
        <p>©2025 G.Gayane</p>
        <div className='flex gap-2'>
            <Google />
            <GitIcon />
            <In />
        </div>
     </section>
  )
}

export default Footer