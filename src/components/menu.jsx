import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, CalendarDaysIcon, XMarkIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Menu() {
  const location = useLocation();
  return (
    <Disclosure as="nav" className="bg-secondary  md:px-16">
        <div className="flex justify-between items-center px-4 py-4 md:py-6">
            <div className="inset-y-0 flex items-center md:hidden">
              {/* Mobile menu button*/}
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
              </DisclosureButton>
            </div>
            <Link to={"/"}><img src="/logo.png" className='w-12 md:w-24' alt="" /></Link>
            <div className="hidden md:flex gap-x-10 text-sm font-semibold items-center uppercase z-50">
                <Link to={"/"} className={`hover:text-primary ${location.pathname==='/'?'text-primary':'text-white'}`}>Home</Link>
                <Link to={"/about"} className={`hover:text-primary ${location.pathname==='/about'?'text-primary':'text-white'}`}>About us</Link>
                <Link to={"/services"} className={`hover:text-primary ${location.pathname.startsWith('/services')?'text-primary':'text-white'}`}>Our services</Link>
                <Link to={"/articles"} className={`hover:text-primary ${location.pathname.startsWith('/articles')?'text-primary':'text-white'}`}>blog</Link>
                <Link to={"/contact"} className={`hover:text-primary ${location.pathname==='/contact'?'text-primary':'text-white'}`}>contact us</Link>
                <Link to={"/"} className='text-white'>en</Link>
            </div>
            <button className='rounded-full bg-primary text-white py-3 px-4 hidden lg:flex gap-x-4 items-center z-50'>
                <CalendarDaysIcon className='w-5 h-5' />
                <Link to="/contact" className='text-sm'>Schdule Free Consultation</Link>
            </button>
            <button className='rounded-full bg-primary text-white p-2 lg:hidden items-center z-50'>
                <CalendarDaysIcon className='w-5 h-5' />
            </button>
        </div>
        <DisclosurePanel className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2 border-b border-b-blue-light">
              <DisclosureButton as="a" href={'/'}
                className={`bg-secondary hover:text-primary block rounded-md px-3 py-2 text-base font-medium ${location.pathname==='/'?'text-primary':'text-white'}`}
              >
                Home
              </DisclosureButton>
              <DisclosureButton as="a" href={'/about'}
                className={`bg-secondary hover:text-primary block rounded-md px-3 py-2 text-base font-medium ${location.pathname==='/about'?'text-primary':'text-white'}`}
              >
                About us
              </DisclosureButton>
              <DisclosureButton as="a" href={'/services'}
                className={`bg-secondary hover:text-primary block rounded-md px-3 py-2 text-base font-medium ${location.pathname.startsWith('/services')?'text-primary':'text-white'}`}
              >
                Services
              </DisclosureButton>
              <DisclosureButton as="a" href={'/articles'}
                className={`bg-secondary hover:text-primary block rounded-md px-3 py-2 text-base font-medium ${location.pathname.startsWith('/articles')?'text-primary':'text-white'}`}
              >
                Blog
              </DisclosureButton>
              <DisclosureButton as="a" href={'/contact'}
                className={`bg-secondary hover:text-primary block rounded-md px-3 py-2 text-base font-medium ${location.pathname==='/contact'?'text-primary':'text-white'}`}
              >
                Contact us
              </DisclosureButton>
              <DisclosureButton as="a" href={'/'}
                className={`bg-secondary hover:text-primary block rounded-md px-3 py-2 text-base font-medium text-white`}
              >
                en
              </DisclosureButton>
          </div>
        </DisclosurePanel>
    </Disclosure>
  )
}

export default Menu