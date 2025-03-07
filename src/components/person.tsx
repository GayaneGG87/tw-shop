import React,{FC} from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'src/redux/store'


const Person: React.FC = () => {
  const person = useSelector((state:RootState)=>state.data.person)
    const {fullName, email, phone, merriage, birthDay, children,img} = person
    
  return (
    <section className='px-6 py-4 bg-slate-100  md:px-24 text-black dark:bg-slate-950 dark:text-white' id='contacts'>
       <h3 className='text-2xl md:text-3xl text-center mt-6 mb-2'>Contacts</h3>
       <div className='w-12 rounded-full bg-yellow-500 h-[3px] mx-auto my-4'></div>
            <div className='flex justify-center items-center flex-col text-xl gap-4 text-center md:flex-row md:justify-between'>
                <img className='w-60 h-60 rounded-full ' src={`/src/assets/images/${img}`} alt="G.Gayane" /> 
                <div>
                    <p className=''>{fullName}</p>
                    <p className=''>{email}</p>
                    <p className=''>{phone}</p>
                    <p className=''>{birthDay}</p>
                    <p className=''>Merriage {merriage ? '✔' : '✗' }</p>
                    <p className=''>Children {children ? '✔' : '✗' }</p>
                </div>
            </div>
    </section>
  )
}

export default Person