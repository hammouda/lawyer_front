import { ChevronRightIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

function Footer() {
    const {t, i18n} = useTranslation();
  return (
    <div className='bg-secondary py-14 relative'>
        <div className="hidden lg:block absolute opacity-20 bottom-0 w-full px-4 z-0">
            <div className='flex justify-center w-2/3 mx-auto'>
                <img src="/images/logo-1.png" className='w-44 mx-auto' alt="" />
                <img src="/images/logo-1.png" className='w-44 mx-auto' alt="" />
            </div>
        </div>
        <div className="absolute bottom-2.5 w-full z-0">
            <div className='flex justify-center items-center gap-x-2.5 text-white'>
                <p>{t("copyright-2024")}</p>
                <p className='text-xl'>©</p>
                <p>{t("rights-reserved")}</p>
            </div>
        </div>
        <div className="relative grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-20 xl:gap-40  px-4 lg:px-28 z-50">
            <div className='flex flex-col justify-center gap-y-4'>
                <p className='text-white font-light'>{t('join-newsletter')} </p>
                <div className="flex flex-row justify-between">
                    <input 
                        type="email" placeholder={t("email")}
                        className='w-48 md:w-36 xl:w-48 bg-secondary text-white border border-blue-light rounded-full px-5 py-2 placeholder:text-blue-light placeholder:font-light' 
                    />
                    <input type="submit" value={t('join')} className='bg-white border border-white text-secondary rounded-full w-16 text-center py-2 cursor-pointer hover:bg-secondary hover:text-white' />
                </div>
                <div className="flex justify-center gap-x-2.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                        <rect y="0.5" width="24" height="24" rx="12" fill="#BF9845"/>
                        <path d="M9.3085 8.61161C9.30835 8.90627 9.18659 9.18881 8.97002 9.39707C8.75345 9.60533 8.4598 9.72225 8.15367 9.7221C7.84755 9.72195 7.55402 9.60475 7.33766 9.39629C7.12131 9.18782 6.99985 8.90516 7 8.61049C7.00015 8.31583 7.12191 8.03328 7.33848 7.82503C7.55505 7.61677 7.8487 7.49985 8.15483 7.5C8.46095 7.50015 8.75448 7.61735 8.97084 7.82581C9.18719 8.03428 9.30865 8.31694 9.3085 8.61161ZM9.34313 10.5448H7.03463V17.5H9.34313V10.5448ZM12.9906 10.5448H10.6936V17.5H12.9675V13.8502C12.9675 11.817 15.7204 11.6281 15.7204 13.8502V17.5H18V13.0947C18 9.6671 13.9255 9.79487 12.9675 11.4781L12.9906 10.5448Z" fill="white"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                        <rect y="0.5" width="24" height="24" rx="12" fill="#BF9845"/>
                        <path d="M18 8.67647C17.5583 8.88235 17.0822 9.01765 16.5889 9.08235C17.0937 8.77059 17.4837 8.27647 17.6673 7.68235C17.1912 7.97647 16.6635 8.18235 16.1071 8.3C15.6539 7.79412 15.0172 7.5 14.2945 7.5C12.9465 7.5 11.8451 8.62941 11.8451 10.0235C11.8451 10.2235 11.8681 10.4176 11.9082 10.6C9.86616 10.4941 8.0478 9.48824 6.83748 7.96471C6.62524 8.33529 6.50478 8.77059 6.50478 9.22941C6.50478 10.1059 6.93499 10.8824 7.60038 11.3235C7.19312 11.3235 6.81453 11.2059 6.48184 11.0294V11.0471C6.48184 12.2706 7.33078 13.2941 8.45507 13.5235C8.09411 13.6248 7.71516 13.6389 7.34799 13.5647C7.50379 14.0662 7.80891 14.5049 8.22047 14.8194C8.63202 15.1338 9.12932 15.3081 9.64245 15.3176C8.77264 16.0238 7.69445 16.4055 6.58509 16.4C6.39006 16.4 6.19503 16.3882 6 16.3647C7.08987 17.0824 8.38623 17.5 9.77438 17.5C14.2945 17.5 16.7782 13.6529 16.7782 10.3176C16.7782 10.2059 16.7782 10.1 16.7725 9.98824C17.2543 9.63529 17.6673 9.18824 18 8.67647Z" fill="white"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                        <rect y="0.5" width="24" height="24" rx="12" fill="#BF9845"/>
                        <path d="M10.19 6.5H14.81C16.57 6.5 18 7.93 18 9.69V14.31C18 15.156 17.6639 15.9674 17.0657 16.5657C16.4674 17.1639 15.656 17.5 14.81 17.5H10.19C8.43 17.5 7 16.07 7 14.31V9.69C7 8.84396 7.33609 8.03257 7.93433 7.43433C8.53257 6.83609 9.34396 6.5 10.19 6.5ZM10.08 7.6C9.55487 7.6 9.05125 7.80861 8.67993 8.17993C8.30861 8.55125 8.1 9.05487 8.1 9.58V14.42C8.1 15.5145 8.9855 16.4 10.08 16.4H14.92C15.4451 16.4 15.9488 16.1914 16.3201 15.8201C16.6914 15.4488 16.9 14.9451 16.9 14.42V9.58C16.9 8.4855 16.0145 7.6 14.92 7.6H10.08ZM15.3875 8.425C15.5698 8.425 15.7447 8.49743 15.8736 8.62636C16.0026 8.7553 16.075 8.93016 16.075 9.1125C16.075 9.29484 16.0026 9.4697 15.8736 9.59864C15.7447 9.72757 15.5698 9.8 15.3875 9.8C15.2052 9.8 15.0303 9.72757 14.9014 9.59864C14.7724 9.4697 14.7 9.29484 14.7 9.1125C14.7 8.93016 14.7724 8.7553 14.9014 8.62636C15.0303 8.49743 15.2052 8.425 15.3875 8.425ZM12.5 9.25C13.2293 9.25 13.9288 9.53973 14.4445 10.0555C14.9603 10.5712 15.25 11.2707 15.25 12C15.25 12.7293 14.9603 13.4288 14.4445 13.9445C13.9288 14.4603 13.2293 14.75 12.5 14.75C11.7707 14.75 11.0712 14.4603 10.5555 13.9445C10.0397 13.4288 9.75 12.7293 9.75 12C9.75 11.2707 10.0397 10.5712 10.5555 10.0555C11.0712 9.53973 11.7707 9.25 12.5 9.25ZM12.5 10.35C12.0624 10.35 11.6427 10.5238 11.3333 10.8333C11.0238 11.1427 10.85 11.5624 10.85 12C10.85 12.4376 11.0238 12.8573 11.3333 13.1667C11.6427 13.4762 12.0624 13.65 12.5 13.65C12.9376 13.65 13.3573 13.4762 13.6667 13.1667C13.9762 12.8573 14.15 12.4376 14.15 12C14.15 11.5624 13.9762 11.1427 13.6667 10.8333C13.3573 10.5238 12.9376 10.35 12.5 10.35Z" fill="white"/>
                    </svg>
                </div>
            </div>
            <div className='text-white flex flex-col gap-y-4 mx-auto'>
                <p className='text-xl font-semibold mb-4 uppercase'>{t("Quick Links")}</p>
                <Link to={"/"}>{t("home")}</Link>
                <Link to={"/services"}>{t("our-services")}</Link>
                <Link to={"/contact"}>{t("contact-us")}</Link>
                <Link to={"/about"}>{t("about-us")}</Link>
            </div>
            <div className='text-white flex flex-col gap-y-4 mx-auto'>
                <p className='text-xl font-semibold mb-4 uppercase'>{t("Recent News")}</p>
                <Link to={"/articles/1"} className='flex gap-x-4 items-center'>
                    <ChevronRightIcon className='text-primary w-4 h-4' />
                    <p>{t("Article Title")} 1</p>
                </Link>
                <Link to={"/articles/2"} className='flex gap-x-4 items-center'>
                    <ChevronRightIcon className='text-primary w-4 h-4' />
                    <p>{t("Article Title")} 2</p>
                </Link>
                <Link to={"/articles/3"} className='flex gap-x-4 items-center'>
                    <ChevronRightIcon className='text-primary w-4 h-4' />
                    <p>{t("Article Title")} 3</p>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Footer