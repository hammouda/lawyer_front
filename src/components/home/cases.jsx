import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom';

function Cases() {
  const {t} = useTranslation();
  return (
    <div className='bg-white px-4 py-16 lg:p-16'>
      <div className="flex justify-between">
        <div>
          <p className="text-3xl text-secondary font-semibold leading-relaxed">{t("case-studies")}</p>
          <p className="text-gray">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <Link to={"/articles"} className='rounded-2xl bg-white text-secondary py-3 px-6 text-center border border-primary-dark h-fit'>
            <p className='text-sm'>{t('check-our-blog')}</p>
        </Link>
      </div>
      <div className="mt-8 grid md:grid-cols-3 gap-3">
        <div className="w-full relative rounded-2xl h-fit">
        <Link to={"/articles/1"}>
          <img src="/images/case-1.jpg" className='w-full rounded-2xl' alt="Mithaq Al Tashrie" />
          <div className='w-full h-full absolute bottom-0 left-0 rounded-2xl z-20 bg-gradient-to-t from-black opacity-80'></div>
          <div className='w-full absolute bottom-5 px-6 z-30'>
            <p className="text-white text-2xl font-bold">{t("Business Dispute Resolution")}</p>
            <p className="text-white text-xl font-normal">{t("Sarah Lee")}</p>
          </div>
        </Link>
        </div>
        <div className="w-full relative rounded-2xl h-fit">
        <Link to={"/articles/1"}>
          <img src="/images/case-2.jpg" className='w-full rounded-2xl' alt="Mithaq Al Tashrie" />
          <div className='w-full h-full absolute bottom-0 left-0 rounded-2xl z-20 bg-gradient-to-t from-black opacity-80'></div>
          <div className='w-full absolute bottom-5 px-6 z-30'>
            <p className="text-white text-2xl font-bold">{t("Business Dispute Resolution")}</p>
            <p className="text-white text-xl font-normal">{t("Sarah Lee")}</p>
          </div>
        </Link>
        </div>
        <div className="w-full relative rounded-2xl h-fit">
          <Link to={"/articles/1"}>
          <img src="/images/case-3.jpg" className='w-full rounded-2xl' alt="Mithaq Al Tashrie" />
          <div className='w-full h-full absolute bottom-0 left-0 rounded-2xl z-20 bg-gradient-to-t from-black opacity-80'></div>
          <div className='w-full absolute bottom-5 px-6 z-30'>
            <p className="text-white text-2xl font-bold">{t("Business Dispute Resolution")}</p>
            <p className="text-white text-xl font-normal">{t("Sarah Lee")}</p>
          </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Cases