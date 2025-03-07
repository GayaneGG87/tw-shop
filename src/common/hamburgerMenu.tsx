import React, {FC, useEffect, useState} from 'react'
import {X, Menu} from 'lucide-react'

interface MobileNavProps{
    handleOpenMobileNav: ()=>void,
    setIsOpen: boolean,
    isOpen: boolean
}

export const HamburgerMenu: FC<MobileNavProps> = ({handleOpenMobileNav, setIsOpen, isOpen})=> {
    
    const handleIsOpen = () =>{
        setIsOpen(!isOpen)
        handleOpenMobileNav();
    }
  return (
    <div onClick={handleIsOpen}
    className='flex text-4xl text-black cursor-pointer md:hidden dark:text-white'>
        {isOpen ? <X size={44} /> : <Menu size={44} />}
    </div>
  )
}

export default HamburgerMenu