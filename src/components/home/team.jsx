import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

function Team() {
    const {t} = useTranslation();
  return (
    <div className='bg-secondary p-4 md:grid md:grid-cols-2 gap-16 relative'>
        <div className="absolute z-0 right-0 top-0">
            <img src="/images/overlay-2.png" className='w-[490px] opacity-35' alt="" />
        </div>
        <img src="/images/team.jpg" className='w-full rounded-2xl' alt="" />
        <div className="mt-16 lg:pr-20">
            <div className="flex w-full justify-between items-center flex-wrap gap-y-4 md:gap-y-0">
                <p className='text-white text-4xl font-medium'>{t("meet-our-team")}</p>
                <Link to={"/"} className='rounded-full border border-white px-7 py-3 text-center text-lg font-bold text-white'>
                    {t("see-more")}
                </Link>
            </div>
            <p className="mt-5 text-white w-full text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, et. Nobis laborum minima, enim quis sint quasi recusandae nihil quod, consequatur atque ea. Deserunt nemo itaque odio nostrum, adipisci unde.
            </p>
            <div className="mt-11 flex flex-wrap gap-5 z-50">
                <div className='w-fit h-72 rounded-2xl relative bg-secondary'>
                    <img src="/images/team-1.png" className='h-72 rounded-2xl opacity-70' alt="" />
                    <div className="absolute bottom-2 w-full">
                        <div className="relative text-center">
                            <div className="flex justify-center items-center gap-x-2">
                                <p className='text-white text-xl font-semibold'>{t("mustapha-ahmed")}</p>
                                <div className='text-white'>
                                    <svg xmlns="http://www.w3.org/2000/svg"  width="20" height="20" style={{fill: '#FFF'}} viewBox="0 0 50 50">
                                        <path d="M25,2C12.318,2,2,12.317,2,25s10.318,23,23,23s23-10.317,23-23S37.682,2,25,2z M18,35h-4V20h4V35z M16,17 c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2s2,0.895,2,2C18,16.105,17.105,17,16,17z M37,35h-4v-5v-2.5c0-1.925-1.575-3.5-3.5-3.5 S26,25.575,26,27.5V35h-4V20h4v1.816C27.168,20.694,28.752,20,30.5,20c3.59,0,6.5,2.91,6.5,6.5V35z"></path>
                                    </svg>
                                </div>
                                <div className='-mt-2.5'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" x="0px" y="0px" viewBox="0,0,300,150" style={{fill:"#FFFFFF"}}>
                                        <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode:"normal"}}><g transform="scale(5.12,5.12)"><path d="M25,2c-12.683,0 -23,10.317 -23,23c0,12.683 10.317,23 23,23c12.683,0 23,-10.317 23,-23c0,-12.683 -10.317,-23 -23,-23zM36.237,20.524c0.01,0.236 0.016,0.476 0.016,0.717c0,7.318 -5.573,15.759 -15.762,15.759c-3.128,0 -6.041,-0.917 -8.491,-2.489c0.433,0.052 0.872,0.077 1.321,0.077c2.596,0 4.985,-0.884 6.879,-2.37c-2.424,-0.044 -4.468,-1.649 -5.175,-3.847c0.339,0.065 0.686,0.1 1.044,0.1c0.505,0 0.995,-0.067 1.458,-0.195c-2.532,-0.511 -4.441,-2.747 -4.441,-5.432c0,-0.024 0,-0.047 0,-0.07c0.747,0.415 1.6,0.665 2.509,0.694c-1.488,-0.995 -2.464,-2.689 -2.464,-4.611c0,-1.015 0.272,-1.966 0.749,-2.786c2.733,3.351 6.815,5.556 11.418,5.788c-0.095,-0.406 -0.145,-0.828 -0.145,-1.262c0,-3.059 2.48,-5.539 5.54,-5.539c1.593,0 3.032,0.672 4.042,1.749c1.261,-0.248 2.448,-0.709 3.518,-1.343c-0.413,1.292 -1.292,2.378 -2.437,3.064c1.122,-0.136 2.188,-0.432 3.183,-0.873c-0.742,1.111 -1.681,2.088 -2.762,2.869z"></path></g></g>
                                    </svg>
                                </div>
                            </div>
                            <p className='text-white text-base'>{t("lawyer")}</p>
                        </div>
                    </div>
                </div>
                <div className='w-fit h-72 rounded-2xl relative bg-secondary'>
                    <img src="/images/team-1.png" className='h-72 rounded-2xl opacity-70' alt="" />
                    <div className="absolute bottom-2 w-full">
                        <div className="relative text-center">
                            <div className="flex justify-center text-center gap-x-2">
                                <p className='text-white text-xl font-semibold'>{t("mustapha-ahmed")}</p>
                            </div>
                            <p className='text-white text-base'>{t("lawyer")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Team