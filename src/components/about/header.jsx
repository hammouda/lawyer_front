import React from 'react'

function Header() {
  return (
    <div className='relative'>
        
        <div className='relative bg-secondary pt-20 pb-10 px-8 lg:px-20'>
            <p className='ml-4 capitalize text-3xl font-semibold lg:text-[64px] lg:font-extrabold text-blue-semilight tracking-tighter leading-normal'>
                25 years of service dedication to <br/>provide <span className='text-primary'>high quality service</span> for you
            </p>
        </div>
        <div className="relative bg-blue-light px-24 pt-14 pb-10">
            <div className="flex flex-wrap items-center gap-16">
                <div className='flex flex-col gap-y-5'>
                    <p className='text-secondary text-4xl font-bold'>
                        This is our Result
                    </p>
                    <p className='text-gray text-lg'>
                        How capable we are at work <br/>shines through in every endeavor.
                    </p>
                </div>
                <div className="flex flex-col justify-center md:items-center">
                    <p className='text-secondary text-4xl font-bold'>
                        +450
                    </p>
                    <p className='text-gray text-lg'>
                        Happy clients
                    </p>
                </div>
                <div className="flex flex-col justify-center md:items-center">
                    <p className='text-secondary text-4xl font-bold'>
                        +920
                    </p>
                    <p className='text-gray text-lg'>
                        Won cases
                    </p>
                </div>
                <div className="flex flex-col justify-center md:items-center">
                    <p className='text-secondary text-4xl font-bold'>
                        +25
                    </p>
                    <p className='text-gray text-lg'>
                        Years of experience
                    </p>
                </div>
                <div className="flex flex-col justify-center md:items-center">
                    <p className='text-secondary text-4xl font-bold'>
                        +19
                    </p>
                    <p className='text-gray text-lg'>
                        Legal experts
                    </p>
                </div>
            </div>
        </div>
        <div className="absolute top-6 right-0 opacity-60">
            <img src="/images/overlay-2.png" className='w-64 lg:w-[420px]' alt="" />
        </div>
    </div>
  )
}

export default Header