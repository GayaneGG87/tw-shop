import { useState } from 'react'
import { Header } from './components/header'
import {Home} from './components//home'
import {About} from './components/about'
import {Footer} from './components/footer'
import { IAbout, INavMenu, IPerson, IProjects } from './types/types'
import { Projects } from './components/projects'
import  Person  from './components/person'

function App() {

  return (
    <>
        <Header />
        <Home/>
        <div className='my-arrow-up-800'>🡫</div>
        <About />
        <div className='my-arrow-up-950'>🡫</div>
        <Projects />
        <div className='my-arrow-up-800'>🡫</div>
        <Person />
        <div className='my-arrow-up-950'>🡫</div>
        <Footer /> 
    </>
  )
}

export default App
