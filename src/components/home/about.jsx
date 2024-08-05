import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div className='bg-blue-light py-16 relative'>
      <div className="hidden md:block absolute right-0 top-0 z-10">
        <img src="/images/overlay.png" className='w-80' alt="" />
      </div>
      <div className=" relative z-50 flex px-4 md:px-16 justify-between flex-wrap">
        <p className="text-xl lg:text-4xl text-blue-dark font-semibold mb-4 md:mb-0">
          Learn More About <br/>Our Firm's Journey and Values
        </p>
        <Link to={"/about"} className='rounded-2xl bg-white text-secondary py-3 px-6 text-center border border-primary-dark h-fit'>
            <p className='text-sm'>Learn More</p>
        </Link>
      </div>
      <div className="grid mt-14 md:grid-cols-2 px-4 md:px-16 md:gap-x-10 lg:gap-x-28">
        <div className="w-full mb-4 md:mb-0">
          <video className='w-full rounded-2xl' controls>
            <source src='/videos/firm-promo.mp4' type='video/mp4' />
          </video>
        </div>
        <div className="w-full flex flex-col justify-between">
          <div className='w-full'>
            <p className='text-justify text-blue-dark text-base md:text-lg'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat natus cum iste facilis quas ducimus quam officiis, aut velit! Fuga voluptas nesciunt provident numquam minus fugiat pariatur excepturi laboriosam mollitia.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat natus cum iste facilis quas ducimus quam officiis, aut velit! Fuga voluptas nesciunt provident numquam minus fugiat pariatur excepturi laboriosam mollitia.
            </p>
          </div>
          <div className="w-full flex justify-center gap-x-6 items-center mt-7 xl:mt-0">
            <img src="/images/winner.png" className='w-16 lg:w-32' alt="" />
            <img src="/images/award-winner.png" className='w-16 lg:w-32' alt="" />
            <img src="/images/winner.png" className='w-16 lg:w-32' alt="" />
          </div>
        </div>
      </div>
      <div className="px-4 mt-20">
        <div className="flex flex-wrap gap-5 justify-center">
          <img src="/images/lawyers-1.png" className='h-64 xl:h-80' alt="" />
          <img src="/images/lawyers-2.png" className='h-64 xl:h-80' alt="" />
          <img src="/images/lawyers-3.png" className='h-64 xl:h-80' alt="" />
          <img src="/images/lawyers-4.png" className='h-64 xl:h-80' alt="" />
        </div>
      </div>
    </div>
  )
}

export default About