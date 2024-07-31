import React from 'react'

function Contact() {
  return (
    <div className='bg-primary-lighter px-4 lg:px-36 py-16 relative'>
        <div className="absolute bottom-0 right-0">
            <img src="/images/overlay-3.png" className='opacity-70' alt="" />
        </div>
        <div className="grid md:grid-cols-2 gap-16">
            <div>
                <p className="text-secondary text-4xl font-medium leading-relaxed">Free Consulation</p>
                <p className="text-gray">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div className='mt-8'>
                  <form>
                    <div className="grid md:grid-cols-2 gap-5">
                        <input 
                            type="text" placeholder='Name'
                            className='bg-primary-lighter border border-primary-dark rounded-full w-full px-5 py-2 placeholder:text-secondary placeholder:font-light' 
                        />
                        <input 
                            type="email" placeholder='Email'
                            className='bg-primary-lighter border border-primary-dark rounded-full w-full px-5 py-2 placeholder:text-secondary placeholder:font-light' 
                        />
                        <input 
                            type="text" placeholder='Phone'
                            className='bg-primary-lighter border border-primary-dark rounded-full w-full px-5 py-2 placeholder:text-secondary placeholder:font-light' 
                        />
                        <select className='bg-primary-lighter border border-primary-dark rounded-full w-full px-5 py-2 ' >
                            <option>Pick Case Area</option>
                            <option>Area 1</option>
                            <option>Area 1</option>
                            <option>Area 1</option>
                            <option>Area 1</option>
                        </select>
                    </div>
                    <textarea 
                        placeholder='Case Description' rows={4}
                        className='mt-5 bg-primary-lighter border border-primary-dark rounded-3xl w-full px-5 py-2 placeholder:text-secondary placeholder:font-light' 
                    ></textarea>
                    <input type="submit" value="Send" className='mt-5 bg-primary-lighter border border-primary-dark rounded-full px-8 py-2 cursor-pointer hover:bg-primary-dark hover:text-white' />
                  </form>
                </div>
            </div>
            <div className='m-auto'>
                <div className="flex items-center gap-x-5">
                    <img src="/images/icon-address.png" className='w-12' alt="" />
                    <div className='flex flex-col h-full justify-between text-secondary'>
                        <p>(+966) 0000 0000 0</p>
                        <p>contact@gmail.com</p>
                    </div>
                </div>
                <div className="flex items-center gap-x-5 mt-16">
                    <img src="/images/icon-map.png" className='w-12' alt="" />
                    <div className='flex flex-col h-full justify-between text-secondary'>
                        <p>10004 Street name,</p>
                        <p>Eriyadh, Saudi Arabia</p>
                    </div>
                </div>
                <div className="flex items-center gap-x-5 mt-16">
                    <img src="/images/icon-time.png" className='w-12' alt="" />
                    <div className='flex flex-col h-full justify-between text-secondary'>
                        <p>Mon-Fri 08:00 - 17:00 KSA</p>
                        <p>(Closed for Public Holiday)</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact