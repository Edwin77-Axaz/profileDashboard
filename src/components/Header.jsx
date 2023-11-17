import React from 'react'
import { RiSearch2Line } from 'react-icons/ri';

const Header = () => {
  return (
    <header className='flex flex-col md:flex-row items-center justify-between'>
      <h1 className='text-2xl font-bold'>
        Good Morning,<span className='text-primary-100'>Osvaldo</span> 
      </h1>
      <form action="">
        <div className='relative'>
            <RiSearch2Line className='absolute top-1/2 -translate-y-1/2 left-2 ' />
            <input type="text" className='bg-gray-200 outline-none py-2 pl-8 pr-4 rounded-xl' placeholder='Search'/>
        </div>
      </form>
    </header>
  )
}

export default Header
