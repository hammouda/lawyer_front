import React from 'react'
import Menu from '../components/menu'
import Footer from '../components/footer'
import { CheckIcon } from '@heroicons/react/24/outline'
import Contact from '../components/about/contact'

function Service() {
  return (
    <div>
        <Menu/>
        <div className="w-full bg-white py-16 mx-auto px-8 md:px-0 md:max-w-screen-md lg:max-w-screen-lg 2xl:max-w-screen-xl">
            <p className="text-5xl font-semibold text-secondary capitalize">Real state cases</p>
            <p className="text-3xl text-secondary mt-3">
                Expert Legal Solutions for Your Property Disputes
            </p>
            <p className="my-8 text-lg text-secondary text-justify">
                Real estate transactions and ownership in Tunisia are governed by a complex web of laws and regulations.  Whether you're a seasoned investor, a first-time homebuyer, or a business owner with commercial property interests, understanding your legal rights and obligations is crucial to protect your valuable assets. Our team of experienced real estate lawyers is well-versed in Tunisian property law and dedicated to providing you with the comprehensive legal support you need to navigate any real estate challenge.
            </p>
            <img src="/images/service-img.png" className='w-full rounded-2xl' alt="" />
            <p className="my-8 text-lg text-secondary text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            </p>
            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <p className='text-2xl text-black font-medium mb-7'>
                        What will you get?
                    </p>
                    <div className="flex flex-col gap-y-4">
                        <div className="flex gap-x-3">
                            <CheckIcon className='text-primary-light w-6 h-6' />
                            <p className="text-black">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                        </div>
                        <div className="flex gap-x-3">
                            <CheckIcon className='text-primary-light w-6 h-6' />
                            <p className="text-black">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                        </div>
                        <div className="flex gap-x-3">
                            <CheckIcon className='text-primary-light w-6 h-6' />
                            <p className="text-black">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                        </div>
                        <div className="flex gap-x-3">
                            <CheckIcon className='text-primary-light w-6 h-6' />
                            <p className="text-black">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                        </div>
                    </div>
                </div>
                <div className='mx-auto'>
                    <p className='text-2xl text-black font-medium mb-7'>
                        How does it work?
                    </p>
                    <div className="flex flex-col gap-y-4">
                        <div className="flex gap-x-3">
                            <CheckIcon className='text-primary-light w-6 h-6' />
                            <p className="text-black">Comprehensive Legal Counsel</p>
                        </div>
                        <div className="flex gap-x-3">
                            <CheckIcon className='text-primary-light w-6 h-6' />
                            <p className="text-black">Dispute Resolution</p>
                        </div>
                        <div className="flex gap-x-3">
                            <CheckIcon className='text-primary-light w-6 h-6' />
                            <p className="text-black">Document Drafting and Review</p>
                        </div>
                        <div className="flex gap-x-3">
                            <CheckIcon className='text-primary-light w-6 h-6' />
                            <p className="text-black">Litigation and Representation</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Service