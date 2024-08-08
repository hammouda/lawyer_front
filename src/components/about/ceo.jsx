import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

function Ceo() {
    const {t, i18n} = useTranslation();
  return (
    <div className='bg-secondary px-8 lg:px-20 pt-8'>
        <div className="grid md:grid-cols-3 gap-16">
            <div className="relative pt-7">
                <div className="absolute bottom-0">
                    {i18n.language=="en"
                    ? (<img src="/images/woman-bg-2.png" className='mx-auto h-96' alt="" />)
                    : (<img src="/images/woman-bg.png" className='mx-auto h-96' alt="" />)
                    }
                </div>
            </div>
            <div className='col-span-2 flex flex-col gap-11 pb-8'>
                <p className="text-4xl font-semibold text-white">
                    {t("Meet Our CEO")}
                </p>
                <div>
                    <p className="text-lg font-light text-white text-justify mb-4">
                        {t("ceo-description")} 
                    </p>
                    <p className="text-lg font-light text-white text-justify">
                        {t("ceo-description-2")}
                    </p>
                </div>
                <Link to={"/services"} className='flex w-fit items-center justify-center px-6 py-4 rounded-2xl border border-gold text-white hover:bg-gold hover:text-secondary'>
                    {t("Check Our Services")}
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Ceo