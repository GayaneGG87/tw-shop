import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Header } from './components/header'
import {Home} from './components//home'
import {About} from './components/about'
import {Skills} from './components/skills'
import {Footer} from './components/footer'

function App() {
  const [count, setCount] = useState(0)
const person = {
  id: 1,
  fullName: 'Gayane Gevorgyan',
  phone:'(093)-99-75-91',
  birthDay: '05.06.1987',
  email:'Gevorgyan.gayane.g@gmail.com',
  merriage: true,
  children: true,
  img:'01.jpg'
};

const about = {
  education: {
    description: 'Education',
    list:  [
      {
        id: 1,
        school: 'National  Pholytechnic University of Armenia',
        degree:"Department of Computer Systems and Informatics (Master Degree)",
        city:'Yerevan, Teryan 105 str.',
        date:'Oct 2011 - Dec 2013'
      },
      {
        id: 2,
        school: 'National  Pholytechnic University of Armenia',
        degree:"Department of Computer Systems and Informatics (Bachelor's)",
        city:'Yerevan, Teryan 105 str.',
        date:'Oct 2007 - May 2011'
      },
      {
        id: 3,
        school: 'Yerevan State College of Informatics',
        city:'Yerevan',
        date:'Sep 2004 - Jun 2007'
      }   
    ]
  } ,
 
  experience:{
    description: 'Experiance',
    list: [
      { id: 1,
        jobTitle: 'Frontend Developer',
        company:'AppearMe Armenia',
        date:'Oct-2020 - Present',
        city:'Yerevan, Baghramyan 5 str.'
      },
      { id: 2,
        jobTitle: 'Full Stack Developer',
        company:'BeeOnCode LLC Armenia',
        date:'Dec 2018 - Jul 2020',
        city:'Yerevan, H.Hakobyan 3 str.'
      },
      { id: 3,
        jobTitle: 'Technical Customer Care Specialist',
        company:'Rostelecom (GNC-ALFA)',
        date:'Feb 2014 - Aug 2018',
        city:'Abovyan, Khaghaghutyan str.'
      },
      { id: 4,
        jobTitle: 'Librarian of Electronic Section',
        company:'Scientific Library of SEUA',
        date:'May 2008 - Feb 2014',
        city:'Yerevan, Teryan 105 str.'
      },
      
    ]
  },
  skill:{
    description: 'Skills',
    list: [
      { id: 1,
        title: 'HTML'
      },
      { id: 2,
        title: 'CSS3'
      },
      { id: 3,
        title: 'SASS'
      },
      { id: 4,
        title: 'LESS'
      },
      { id: 5,
        title: 'Bootstrap'
      },
      { id: 6,
        title: 'Tailwind'
      },
      { id: 7,
        title: 'Javascript'
      },
      { id: 8,
        title: 'React (Context, Reducer, Redux)'
      },
      { id: 9,
        title: 'Typescript'
      },
      { id: 10,
        title: 'JQuery'
      },
      { id: 11,
        title: 'Git'
      },
      { id: 12,
        title: 'GitHub'
      },
      { id: 13,
        title: 'Debugging'
      }
      ]
  } ,
  lang:{
    description: 'Languages',
    list: [
      {
        id:1,
        name:'Armenian',
        level:' native'
      },
      {
        id:2,
        name:'Russian',
        level:'intermediate'
      },
      {
        id:3,
        name:'English',
        level:'intermediate'
      }
    ]
  },
  course: {
    description: 'Courses',
    list: [
      {
        id: 1,
        name: 'Web Programming (Html, Css, Js, Php, MVC OOP, Laravel, Git, Angular)',
        date:'2018'
      },
      {
        id: 2,
        name: 'Effective Menegment Skills and Motivation (PhD, MBA)',
        date:'2017'
      },
      {
        id:3,
        name: 'Development of Call Centre warking of LAB International Academy of Business',
        date:'2015'
      },
      {
        id:4,
        name: 'Effective Customer Service at LAB International Academy of Business',
        date:"2015"
      }
     
    ]
  } 
   ,
}
console.log('test for rendering')
  return (
    <>
       <Header />
       <Home  person={person}/>
       <div className='font-bold text-center mx-auto my-6  dark:text-white'>🡫</div>
       <About about={about} />
       <div className='font-bold text-center mb-6 mt-24 dark:text-white'>🡫</div>
       <Skills skill={about.skill} />
       <Footer />
    </>
  )
}

export default App
