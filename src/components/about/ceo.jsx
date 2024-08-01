import React from 'react'
import { Link } from 'react-router-dom'

function Ceo() {
  return (
    <div className='bg-secondary px-8 lg:px-20 pt-8'>
        <div className="grid md:grid-cols-3 gap-16">
            <div className="relative pt-7">
                <div className="absolute bottom-0">
                    <img src="/images/woman-bg-2.png" className='mx-auto h-96' alt="" />
                </div>
            </div>
            <div className='col-span-2 flex flex-col gap-11 pb-8'>
                <p className="text-4xl font-semibold text-white">
                    Meet Our CEO
                </p>
                <p className="text-lg font-light text-white text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic veniam ab nisi, ullam, accusantium optio ad perferendis illum dolores veritatis sint sunt dolor porro autem vero unde quisquam ea. Autem.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati esse harum rem sit aut. Voluptas totam ipsam quos reiciendis minima aperiam, adipisci dolore rem dignissimos. Molestiae quos molestias iste rem?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic veniam ab nisi, ullam, accusantium optio ad perferendis illum dolores veritatis sint sunt dolor porro autem vero unde quisquam ea. Autem.
                </p>
                <Link to={"/"} className='flex w-fit items-center justify-center px-6 py-4 rounded-2xl border border-gold text-white hover:bg-gold hover:text-secondary'>
                    Check Our Services
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Ceo