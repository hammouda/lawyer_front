import React from 'react'
import Menu from '../components/menu'
import Footer from '../components/footer'
import { CalendarDaysIcon } from '@heroicons/react/24/outline'

function Services() {
  return (
    <div>
        <Menu/>
        <div className="bg-secondary w-full relative h-48">
            <img src="/images/overlay-5.png" className='absolute right-0 bottom-0 z-10 w-[490px]' alt="" />
        </div>
        <div className='bg-white py-20 px-4 md:px-16'>
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
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Services