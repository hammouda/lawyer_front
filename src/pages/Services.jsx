import React from 'react'
import Menu from '../components/menu'
import Footer from '../components/footer'
import { CalendarDaysIcon } from '@heroicons/react/24/outline'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

function Services() {
    const {t} = useTranslation();
  return (
    <div>
        <Menu/>
        <div className="bg-secondary w-full relative h-48">
            <img src="/images/overlay-5.png" className='absolute right-0 bottom-0 z-0 w-[490px]' alt="Mithaq Al Tashrie" />
        </div>
        <div className='bg-white py-20 px-4 md:px-16'>
            <div className="flex justify-between flex-wrap">
                <p className="text-xl lg:text-4xl text-blue-dark font-semibold mb-4 md:mb-0">
                {t('our-expertise-2')} <br/>{t('solutions-tailored')}
                </p>
                <button className='rounded-2xl bg-white text-secondary py-3 px-6 text-center border border-primary-dark h-fit flex gap-x-4'>
                    <CalendarDaysIcon className='w-5 h-5' />
                    <p className='text-sm'>{t("schedule-free-consultation")}</p>
                </button>
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-9 mt-24 justify-center md:justify-start">
                <Link to={"/services/1"}>
                <div className="rounded-2xl bg-gradient-to-b from-gold to-primary-light p-2 w-72 flex flex-col justify-center">
                    <img src="/images/services/service-0.jpg" className='h-52 rounded-2xl' alt="Mithaq Al Tashrie" />
                    <div className="mt-2 text-center">
                        <p className="text-xs font-medium text-white uppercase">{t("bankruptcy")}</p>
                    </div>
                </div>
                </Link>
                <Link to={"/services/1"}>
                <div className="rounded-2xl bg-gradient-to-b from-gold to-primary-light p-2 w-72 flex flex-col justify-center">
                    <img src="/images/services/service-1.jpg" className='h-52 rounded-2xl' alt="Mithaq Al Tashrie" />
                    <div className="mt-2 text-center">
                        <p className="text-xs font-medium text-white uppercase">{t("financial-claims")}</p>
                    </div>
                </div>
                </Link>
                <Link to={"/services/1"}>
                <div className="rounded-2xl bg-gradient-to-b from-gold to-primary-light p-2 w-72 flex flex-col justify-center">
                    <img src="/images/services/service-2.jpg" className='h-52 rounded-2xl' alt="Mithaq Al Tashrie" />
                    <div className="mt-2 text-center">
                        <p className="text-xs font-medium text-white uppercase">{t("commercial-arbitration")}</p>
                    </div>
                </div>
                </Link>
                <Link to={"/services/1"}>
                <div className="rounded-2xl bg-gradient-to-b from-gold to-primary-light p-2 w-72 flex flex-col justify-center">
                    <img src="/images/services/service-3.jpg" className='h-52 rounded-2xl' alt="Mithaq Al Tashrie" />
                    <div className="mt-2 text-center">
                        <p className="text-xs font-medium text-white uppercase">{t("drafting-and-reviewing")}</p>
                    </div>
                </div>
                </Link>
                <Link to={"/services/1"}>
                <div className="rounded-2xl bg-gradient-to-b from-gold to-primary-light p-2 w-72 flex flex-col justify-center">
                    <img src="/images/services/service-15.jpg" className='h-52 rounded-2xl' alt="Mithaq Al Tashrie" />
                    <div className="mt-2 text-center">
                        <p className="text-xs font-medium text-white uppercase">{t("debt-collection")}</p>
                    </div>
                </div>
                </Link>
                <Link to={"/services/1"}>
                <div className="rounded-2xl bg-gradient-to-b from-gold to-primary-light p-2 w-72 flex flex-col justify-center">
                    <img src="/images/services/service-4.jpg" className='h-52 rounded-2xl' alt="Mithaq Al Tashrie" />
                    <div className="mt-2 text-center">
                        <p className="text-xs font-medium text-white uppercase">{t("civil-cases")}</p>
                    </div>
                </div>
                </Link>
                <Link to={"/services/1"}>
                <div className="rounded-2xl bg-gradient-to-b from-gold to-primary-light p-2 w-72 flex flex-col justify-center">
                    <img src="/images/services/service-5.jpg" className='h-52 rounded-2xl' alt="Mithaq Al Tashrie" />
                    <div className="mt-2 text-center">
                        <p className="text-xs font-medium text-white uppercase">{t("legal-risk-analysis")}</p>
                    </div>
                </div>
                </Link>
                <Link to={"/services/1"}>
                <div className="rounded-2xl bg-gradient-to-b from-gold to-primary-light p-2 w-72 flex flex-col justify-center">
                    <img src="/images/services/service-6.jpg" className='h-52 rounded-2xl' alt="Mithaq Al Tashrie" />
                    <div className="mt-2 text-center">
                        <p className="text-xs font-medium text-white uppercase">{t("memorandums-and-regulations")}</p>
                    </div>
                </div>
                </Link>
                <Link to={"/services/1"}>
                <div className="rounded-2xl bg-gradient-to-b from-gold to-primary-light p-2 w-72 flex flex-col justify-center">
                    <img src="/images/services/service-7.jpg" className='h-52 rounded-2xl' alt="Mithaq Al Tashrie" />
                    <div className="mt-2 text-center">
                        <p className="text-xs font-medium text-white uppercase">{t("documentation")}</p>
                    </div>
                </div>
                </Link>
                <Link to={"/services/1"}>
                <div className="rounded-2xl bg-gradient-to-b from-gold to-primary-light p-2 w-72 flex flex-col justify-center">
                    <img src="/images/services/service-8.jpg" className='h-52 rounded-2xl' alt="Mithaq Al Tashrie" />
                    <div className="mt-2 text-center">
                        <p className="text-xs font-medium text-white uppercase">{t("legal-consultations")}</p>
                    </div>
                </div>
                </Link>
                <Link to={"/services/1"}>
                <div className="rounded-2xl bg-gradient-to-b from-gold to-primary-light p-2 w-72 flex flex-col justify-center">
                    <img src="/images/services/service-9.jpg" className='h-52 rounded-2xl' alt="Mithaq Al Tashrie" />
                    <div className="mt-2 text-center">
                        <p className="text-xs font-medium text-white uppercase">{t("corporate-governance")}</p>
                    </div>
                </div>
                </Link>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Services