import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       
     <div className='text-green bg-orange-600 w-full h-full flex 
     justify-center font-6xl p-24 rounded-full  text-8xl '>welcome to react vite and tailwind</div>
     <p className='m-8 p-8 text-white bg-orange-400 rounded-xl'> my new text</p>
     <button className='p-20 rounded-sm bg-blue-200 p-6 text-green'> submitted</button>
     <p className='bg-orange-800'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, sequi.</p>
     <div className='text-red p-20 rounded-full bg-red-800'>fd</div>
     <div className='text-red p-20 rounded'>fd</div>
     <div className='text-red p-20 rounded'>fd</div>
     <span className='bg '>fsdfkj</span>
    </>
  )
}

export default App
