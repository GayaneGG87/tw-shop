import React, {useEffect, useState} from 'react'
import { Sun, Moon } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './../redux/store'
import { setOpenNav } from './../redux/dataSlice'

const SunMoonTheme: React.FC = () => {
  const isOpenMobileNav = useSelector((state:RootState)=>state.data.isOpenMobileNav)
  const dispatch= useDispatch()
    const [theme, setTheme] = useState<string>(()=>{
      return localStorage.getItem('theme') || 'light';
    }) 

    useEffect(()=>{
      if(theme==='dark'){
        document.documentElement.classList.add('dark')
      } else{
        document.documentElement.classList.remove('dark')
      }
      localStorage.setItem('theme', theme)
      document.getElementById('root').setAttribute('data-theme',`${theme}`)
    },[theme])

    const handleClick = async () => {
        setTheme(theme ==='light' ? 'dark':'light')
        await isOpenMobileNav && dispatch(setOpenNav(!isOpenMobileNav))
    }
    
  return (
    <div data-theme={theme}> 
        <button onClick={handleClick}
          className={`flex self-center items-center justify-center transition-colors
             bg-yellow-500 rounded-sm border  p-2  dark:text-white dark:bg-black`} aria-label="Toggle Theme">
                  { theme ==='dark' ? <Sun /> : <Moon /> }
          </button>
    </div>
    
  )
}

export default SunMoonTheme