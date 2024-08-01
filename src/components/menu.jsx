import { CalendarDaysIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { Link } from 'react-router-dom'

function Menu() {
  return (
    <div className='bg-secondary px-4 md:px-16'>
        <div className="flex justify-between items-center py-6">
            <img src="/logo.png" className='w-24' alt="" />
            <div className="hidden md:flex gap-x-10 text-white text-sm font-semibold items-center uppercase">
                <Link to={"/"}>Home</Link>
                <Link to={"/"}>About us</Link>
                <Link to={"/"}>Our services</Link>
                <Link to={"/articles"}>blog</Link>
                <Link to={"/contact"}>contact us</Link>
                <Link to={"/"}>en</Link>
            </div>
            <button className='rounded-full bg-primary text-white py-3 px-4 hidden md:flex gap-x-4 items-center'>
                <CalendarDaysIcon className='w-5 h-5' />
                <p className='text-sm'>Schdule Free Consultation</p>
            </button>
        </div>
    </div>
  )
}

export default Menu