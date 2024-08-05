import { CalendarDaysIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'

function Header() {
    const { t, i18n } = useTranslation();
  return (
    <div className='bg-secondary px-4 md:px-16 pt-8 md:pt-0'>
        
        <div className='md:grid md:grid-cols-3 md:items-center'>
            <div className='md:col-span-2 md:mx-32'>
                <p className='text-xl lg:text-6xl font-bold text-blue-light tracking-tighter'>
                    {t("experienced-lawyers")}
                </p>
                <p className='text-xl lg:text-6xl font-bold text-blue-light tracking-tighter'>
                    <span className='text-primary'>{t("proven")}</span> {t("results")}
                </p>
                <div className="mt-7 flex gap-x-8 gap-y-4 items-center flex-wrap">
                    <button className='rounded-2xl bg-primary text-white py-3 px-4 flex gap-x-4 items-center'>
                        <CalendarDaysIcon className='w-5 h-5' />
                        <p className='text-sm'>{t("schedule-free-consultation")}</p>
                    </button>
                    <Link to={"/about"} className='rounded-2xl bg-white text-secondary py-3 px-6 text-center'>
                        <p className='text-sm'>{t("our-expertise")}</p>
                    </Link>
                </div>
                <div className='flex justify-center gap-x-5 mt-16 md:w-96'>
                    <div className='w-7 h-7 rounded-full bg-gradient-to-b from-primary to-primary-dark'></div>
                    <div className='w-7 h-7 rounded-full bg-blue-light'></div>
                    <div className='w-7 h-7 rounded-full bg-blue-light'></div>
                </div>
            </div>
            <div className="col-span-1">
                {i18n.language=='en'
                ? (<img src="/images/woman-bg.png" className='w-44 md:w-72' alt="" />)
                : (<img src="/images/woman-bg-2.png" className='w-44 md:w-72' alt="" />)
                }
                
            </div>
        </div>
    </div>
  )
}

export default Header