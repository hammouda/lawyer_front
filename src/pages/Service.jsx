import React from 'react'
import Menu from '../components/menu'
import Footer from '../components/footer'
import { CheckIcon } from '@heroicons/react/24/outline'
import Contact from '../components/about/contact'
import { useTranslation } from 'react-i18next'

function Service() {
    const {t} = useTranslation();
  return (
    <div>
        <Menu/>
        <div className="w-full bg-white py-16 mx-auto px-8 md:px-0 md:max-w-screen-md lg:max-w-screen-lg 2xl:max-w-screen-xl">
            <p className="text-5xl font-semibold text-secondary capitalize">{t("Real estate cases")}</p>
            <p className="text-3xl text-secondary mt-3">
                {t("Expert Legal Solutions for Your Property Disputes")}
            </p>
            <p className="my-8 text-lg text-secondary text-justify">
                {t("service-paragraph-1")}
            </p>
            <img src="/images/service-img.png" className='w-full rounded-2xl' alt="Mithaq Al Tashrie" />
            <p className="my-8 text-lg text-secondary text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            </p>
            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <p className='text-2xl text-black font-medium mb-7'>
                       {t("What will you get")}
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
                        {t("How does it work")}
                    </p>
                    <div className="flex flex-col gap-y-4">
                        <div className="flex gap-x-3">
                            <CheckIcon className='text-primary-light w-6 h-6' />
                            <p className="text-black">{t("Comprehensive Legal Counse")}</p>
                        </div>
                        <div className="flex gap-x-3">
                            <CheckIcon className='text-primary-light w-6 h-6' />
                            <p className="text-black">{t("Dispute Resolution")}</p>
                        </div>
                        <div className="flex gap-x-3">
                            <CheckIcon className='text-primary-light w-6 h-6' />
                            <p className="text-black">{t("Document Drafting and Review")}</p>
                        </div>
                        <div className="flex gap-x-3">
                            <CheckIcon className='text-primary-light w-6 h-6' />
                            <p className="text-black">{t("Litigation and Representation")}</p>
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