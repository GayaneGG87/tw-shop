import React, {useEffect, useState} from 'react'
// import Moon from "../assets/icons/dark";
// import  Sun  from "../assets/icons/light";
import { Sun, Moon } from 'lucide-react'


const SunMoonTheme: React.FC = () => {
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
console.log('teme', theme)
    },[theme])

    const handleClick = ()=>{
        setTheme(theme ==='light' ? 'dark':'light')
    }
    
  return (
    <button onClick={handleClick}
    className=' flex self-center items-center justify-center transition-all
     bg-slate-100 rounded-sm border-slate-200' aria-label="Toggle Theme">
        { theme ==='dark' ? <Moon /> : <Sun /> }
    </button>
  )
}

export default SunMoonTheme