import { ArrowLongRightIcon } from '@heroicons/react/16/solid'
import { CalendarDaysIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { Link } from 'react-router-dom'

function Services() {
  return (
    <div className='bg-white py-40 px-4 md:px-16'>
      <div className="flex justify-between flex-wrap">
        <p className="text-xl lg:text-4xl text-blue-dark font-semibold mb-4 md:mb-0">
          Our Expertise : <br/>Solutions Tailored to Your Legal Needs
        </p>
        <button className='rounded-2xl bg-white text-secondary py-3 px-6 text-center border border-primary-dark h-fit flex gap-x-4'>
            <CalendarDaysIcon className='w-5 h-5' />
            <p className='text-sm'>Schedule Free Consultation</p>
        </button>
      </div>
      <div className="flex flex-wrap gap-x-4 gap-y-9 mt-24 justify-center md:justify-start">
        <div className="rounded-2xl bg-gradient-to-b from-gold to-primary-light p-2 w-72 flex flex-col justify-center">
            <img src="/images/service-1.png" className='h-52 rounded-2xl' alt="" />
            <div className="mt-2 text-center">
                <p className="text-xs font-medium text-white uppercase">Bankruptcy</p>
            </div>
        </div>
        <div className="rounded-2xl bg-gradient-to-b from-gold to-primary-light p-2 w-72 flex flex-col justify-center">
            <img src="/images/service-1.png" className='h-52 rounded-2xl' alt="" />
            <div className="mt-2 text-center">
                <p className="text-xs font-medium text-white uppercase">Financial Claims</p>
            </div>
        </div>
        <div className="rounded-2xl bg-gradient-to-b from-gold to-primary-light p-2 w-72 flex flex-col justify-center">
            <img src="/images/service-1.png" className='h-52 rounded-2xl' alt="" />
            <div className="mt-2 text-center">
                <p className="text-xs font-medium text-white uppercase">Commercial Arbitration</p>
            </div>
        </div>
        <div className="rounded-2xl bg-gradient-to-b from-gold to-primary-light p-2 w-72 flex flex-col justify-center">
            <img src="/images/service-1.png" className='h-52 rounded-2xl' alt="" />
            <div className="mt-2 text-center">
                <p className="text-xs font-medium text-white uppercase">Drafting and Reviewing Contracts</p>
            </div>
        </div>
        <div className="rounded-2xl bg-gradient-to-b from-gold to-primary-light p-2 w-72 flex flex-col justify-center">
            <img src="/images/service-1.png" className='h-52 rounded-2xl' alt="" />
            <div className="mt-2 text-center">
                <p className="text-xs font-medium text-white uppercase">Debt Collection</p>
            </div>
        </div>
        <div className="rounded-2xl bg-gradient-to-b from-gold to-primary-light p-2 w-72 flex flex-col justify-center">
            <img src="/images/service-1.png" className='h-52 rounded-2xl' alt="" />
            <div className="mt-2 text-center">
                <p className="text-xs font-medium text-white uppercase">Civil Cases</p>
            </div>
        </div>
        <div className="rounded-2xl bg-gradient-to-b from-gold to-primary-light p-2 w-72 flex flex-col justify-center">
            <img src="/images/service-1.png" className='h-52 rounded-2xl' alt="" />
            <div className="mt-2 text-center">
                <p className="text-xs font-medium text-white uppercase">Legal Risk Analysis</p>
            </div>
        </div>
        <div className="rounded-2xl bg-gradient-to-b from-gold to-primary-light p-2 w-72 flex flex-col justify-center">
            <img src="/images/service-1.png" className='h-52 rounded-2xl' alt="" />
            <div className="mt-2 text-center">
                <p className="text-xs font-medium text-white uppercase">Writing Memorandums and Regulations</p>
            </div>
        </div>
        <div className="rounded-2xl bg-gradient-to-b from-gold to-primary-light p-2 w-72 flex flex-col justify-center">
            <img src="/images/service-1.png" className='h-52 rounded-2xl' alt="" />
            <div className="mt-2 text-center">
                <p className="text-xs font-medium text-white uppercase">Documentation</p>
            </div>
        </div>
        <div className="rounded-2xl bg-gradient-to-b from-gold to-primary-light p-2 w-72 flex flex-col justify-center">
            <img src="/images/service-1.png" className='h-52 rounded-2xl' alt="" />
            <div className="mt-2 text-center">
                <p className="text-xs font-medium text-white uppercase">Legal Consultations</p>
            </div>
        </div>
        <div className="rounded-2xl bg-gradient-to-b from-gold to-primary-light p-2 w-72 flex flex-col justify-center">
            <img src="/images/service-1.png" className='h-52 rounded-2xl' alt="" />
            <div className="mt-2 text-center">
                <p className="text-xs font-medium text-white uppercase">Corporate Governance</p>
            </div>
        </div>
        
        <Link to={"/services"} className='flex flex-col justify-end lg:ml-16'>
            <p className='text-blue-dark font-semibold text-2xl'>Check more services</p>
            <ArrowLongRightIcon className='w-24 h-24 text-blue-dark' />
        </Link>
      </div>
    </div>
  )
}

export default Services