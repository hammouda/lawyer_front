import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, CalendarDaysIcon, XMarkIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom'

function Menu() {
  const location = useLocation();
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('lang', lng);
  };

  return (
    <Disclosure as="nav" className="bg-secondary  md:px-16 relative">
        <div className="flex justify-between items-center px-4 py-4 md:py-6 z-50">
            <div className="inset-y-0 flex items-center lg:hidden z-50">
              {/* Mobile menu button*/}
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
              </DisclosureButton>
            </div>
            <div className="z-50">
            <Link to={"/"}><img src="/logo.png" className='w-10 lg:w-20' alt="" /></Link>
            </div>
            <div className="hidden md:flex gap-x-10 text-sm font-semibold items-center uppercase z-50">
                <Link to={"/"} className={`hover:text-primary ${location.pathname==='/'?'text-primary':'text-white'}`}>{t('home')}</Link>
                <Link to={"/about"} className={`hover:text-primary ${location.pathname==='/about'?'text-primary':'text-white'}`}>{t('about-us')}</Link>
                <Link to={"/services"} className={`hover:text-primary ${location.pathname.startsWith('/services')?'text-primary':'text-white'}`}>{t('our-services')}</Link>
                <Link to={"/articles"} className={`hover:text-primary ${location.pathname.startsWith('/articles')?'text-primary':'text-white'}`}>{t('blog')}</Link>
                <Link to={"/contact"} className={`hover:text-primary ${location.pathname==='/contact'?'text-primary':'text-white'}`}>{t('contact-us')}</Link>
                {i18n.language==='en'
                ? (<button onClick={()=>changeLanguage('ar')} className='text-white'>AR</button>)
                : (<button onClick={()=>changeLanguage('en')} className='text-white'>EN</button>)}
                
            </div>
            <Link to="/contact" className='rounded-full bg-primary text-white py-3 px-4 hidden lg:flex gap-x-4 items-center z-50 hover:bg-gold-dark'>
                <CalendarDaysIcon className='w-5 h-5' />
                <p className='text-sm'>{t("schedule-free-consultation")}</p>
            </Link>
            <Link to="/contact" className='rounded-full bg-primary text-white p-2 lg:hidden items-center z-50 hover:bg-gold-dark'>
                <CalendarDaysIcon className='w-5 h-5' />
            </Link>
        </div>
        <DisclosurePanel className="lg:hidden relative z-50">
          <div className="space-y-1 px-2 pb-3 pt-2 border-b border-b-blue-light z-50">
              <DisclosureButton as="a" href={'/'}
                className={`bg-secondary hover:text-primary block rounded-md px-3 py-2 text-base font-medium ${location.pathname==='/'?'text-primary':'text-white'}`}
              >
                {t('home')}
              </DisclosureButton>
              <DisclosureButton as="a" href={'/about'}
                className={`bg-secondary hover:text-primary block rounded-md px-3 py-2 text-base font-medium ${location.pathname==='/about'?'text-primary':'text-white'}`}
              >
                {t('about-us')}
              </DisclosureButton>
              <DisclosureButton as="a" href={'/services'}
                className={`bg-secondary hover:text-primary block rounded-md px-3 py-2 text-base font-medium ${location.pathname.startsWith('/services')?'text-primary':'text-white'}`}
              >
                {t('our-services')}
              </DisclosureButton>
              <DisclosureButton as="a" href={'/articles'}
                className={`bg-secondary hover:text-primary block rounded-md px-3 py-2 text-base font-medium ${location.pathname.startsWith('/articles')?'text-primary':'text-white'}`}
              >
                {t('blog')}
              </DisclosureButton>
              <DisclosureButton as="a" href={'/contact'}
                className={`bg-secondary hover:text-primary block rounded-md px-3 py-2 text-base font-medium ${location.pathname==='/contact'?'text-primary':'text-white'}`}
              >
                {t('contact-us')}
              </DisclosureButton>
              {i18n.language==='en'
                ? (
                  <DisclosureButton as="button"  onClick={()=>changeLanguage('ar')}
                  className={`bg-secondary hover:text-primary block rounded-md px-3 py-2 text-base font-medium text-white`}
                >
                  AR
                </DisclosureButton>
                )
                : (
                  <DisclosureButton as="button"  onClick={()=>changeLanguage('en')}
                    className={`bg-secondary hover:text-primary block rounded-md px-3 py-2 text-base font-medium text-white`}
                  >
                    EN
                  </DisclosureButton>
                )}
              
          </div>
        </DisclosurePanel>
    </Disclosure>
  )
}

export default Menu