import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './custom.css';

function Vision() {
    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

  return (
    <div>
        <div className="bg-white px-8 md:px-20 py-16 flex flex-wrap justify-between items-center">
            <div className='py-6'>
                <div className="flex flex-col gap-y-8">
                    <div>
                        <p className='text-black text-4xl font-semibold'>Our Vision for the Future:</p>
                        <p className='mt-5 text-gray text-lg max-w-xl'>
                        We are a team with a variety of skills, each member contributes their expertise, and works professionally among members and clients.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-6 max-w-xl">
                        <div className='flex flex-wrap gap-2 md:flex-nowrap md:gap-4 h-fit'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className='w-8 h-8 md:w-[42px] md:h-[49px]' viewBox="0 0 42 49" fill="none">
                                    <path d="M36 3.02515H6C2.68594 3.02515 0 5.71108 0 9.02515V39.0251C0 42.3392 2.68594 45.0251 6 45.0251H36C39.3141 45.0251 42 42.3392 42 39.0251V9.02515C42 5.71108 39.3094 3.02515 36 3.02515ZM31.8562 19.8814L19.8563 31.8814C19.3406 32.397 18.675 32.6501 18 32.6501C17.325 32.6501 16.6556 32.3952 16.1428 31.8825L10.1428 25.8825C9.12 24.8569 9.12 23.1928 10.1428 22.1672C11.1684 21.1416 12.8325 21.1416 13.8581 22.1672L18 26.3126L28.1438 16.1689C29.1694 15.1433 30.8334 15.1433 31.8591 16.1689C32.8781 17.1908 32.8781 18.8595 31.8562 19.8814Z" fill="#BF9845"/>
                                </svg>
                            </div>
                            <div>
                                <p className='text-black text-xl font-medium'>Leadership</p>
                                <p className="text-black">To be a top-tier law firm in Saudi Arabia</p>
                            </div>
                        </div>
                        <div className='flex flex-wrap gap-2 md:flex-nowrap md:gap-4 h-fit'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className='w-8 h-8 md:w-[42px] md:h-[49px]' viewBox="0 0 42 49" fill="none">
                                    <path d="M36 3.02515H6C2.68594 3.02515 0 5.71108 0 9.02515V39.0251C0 42.3392 2.68594 45.0251 6 45.0251H36C39.3141 45.0251 42 42.3392 42 39.0251V9.02515C42 5.71108 39.3094 3.02515 36 3.02515ZM31.8562 19.8814L19.8563 31.8814C19.3406 32.397 18.675 32.6501 18 32.6501C17.325 32.6501 16.6556 32.3952 16.1428 31.8825L10.1428 25.8825C9.12 24.8569 9.12 23.1928 10.1428 22.1672C11.1684 21.1416 12.8325 21.1416 13.8581 22.1672L18 26.3126L28.1438 16.1689C29.1694 15.1433 30.8334 15.1433 31.8591 16.1689C32.8781 17.1908 32.8781 18.8595 31.8562 19.8814Z" fill="#BF9845"/>
                                </svg>
                            </div>
                            <div>
                                <p className='text-black text-xl font-medium'>Destination for Excellence</p>
                                <p className="text-black">Known for accurate, effective legal services</p>
                            </div>
                        </div>
                        <div className='flex flex-wrap gap-2 md:flex-nowrap md:gap-4 h-fit'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className='w-8 h-8 md:w-[42px] md:h-[49px]' viewBox="0 0 42 49" fill="none">
                                    <path d="M36 3.02515H6C2.68594 3.02515 0 5.71108 0 9.02515V39.0251C0 42.3392 2.68594 45.0251 6 45.0251H36C39.3141 45.0251 42 42.3392 42 39.0251V9.02515C42 5.71108 39.3094 3.02515 36 3.02515ZM31.8562 19.8814L19.8563 31.8814C19.3406 32.397 18.675 32.6501 18 32.6501C17.325 32.6501 16.6556 32.3952 16.1428 31.8825L10.1428 25.8825C9.12 24.8569 9.12 23.1928 10.1428 22.1672C11.1684 21.1416 12.8325 21.1416 13.8581 22.1672L18 26.3126L28.1438 16.1689C29.1694 15.1433 30.8334 15.1433 31.8591 16.1689C32.8781 17.1908 32.8781 18.8595 31.8562 19.8814Z" fill="#BF9845"/>
                                </svg>
                            </div>
                            <div>
                                <p className='text-black text-xl font-medium'>Experience & Knowledge</p>
                                <p className="text-black">A team with deep experience and expertise</p>
                            </div>
                        </div>
                        <div className='flex flex-wrap gap-2 md:flex-nowrap md:gap-4 h-fit'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className='w-8 h-8 md:w-[42px] md:h-[49px]' viewBox="0 0 42 49" fill="none">
                                    <path d="M36 3.02515H6C2.68594 3.02515 0 5.71108 0 9.02515V39.0251C0 42.3392 2.68594 45.0251 6 45.0251H36C39.3141 45.0251 42 42.3392 42 39.0251V9.02515C42 5.71108 39.3094 3.02515 36 3.02515ZM31.8562 19.8814L19.8563 31.8814C19.3406 32.397 18.675 32.6501 18 32.6501C17.325 32.6501 16.6556 32.3952 16.1428 31.8825L10.1428 25.8825C9.12 24.8569 9.12 23.1928 10.1428 22.1672C11.1684 21.1416 12.8325 21.1416 13.8581 22.1672L18 26.3126L28.1438 16.1689C29.1694 15.1433 30.8334 15.1433 31.8591 16.1689C32.8781 17.1908 32.8781 18.8595 31.8562 19.8814Z" fill="#BF9845"/>
                                </svg>
                            </div>
                            <div>
                                <p className='text-black text-xl font-medium'>Innovation</p>
                                <p className="text-black">Leading the way with innovative legal solutions</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <img src="/images/vision-team.png" alt="" className='w-full lg:h-96 rounded-2xl' />
            </div>
        </div>
        <div className="bg-blue-light px-8 md:px-20 py-10 relative">
            <div className="absolute bottom-0">
                <img src="/images/overlay-4.png" className='opacity-60' alt="" />
            </div>
            <div className="flex flex-wrap lg:flex-nowrap gap-4 lg:gap-20">
                <div className='max-w-72 md:max-w-xs'>
                    <p className="uppercase text-black text-lg lg:text-xl mb-2">Testimonials</p>
                    <p className="text-black text-2xl lg:text-[40px] font-medium leading-snug">What Our Clients Are Saying?</p>
                </div>
                <div className="max-w-72 lg:max-w-2xl mx-auto pt-10 pb-8 relative">
                    <Slider {...settings}>
                        <div className="item">
                            <div className="flex flex-col gap-y-4">
                                <p className='text-lg text-black'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, iusto natus quasi iste autem ea provident quos rem quis quaerat, blanditiis non suscipit tempora unde dolorem velit fuga deserunt. Amet.
                                </p>
                                <div className="mb-4">
                                    <p className='text-xl font-bold text-black'>Mahmoud</p>
                                    <p className='text-xl text-black'>CEO, Lorem Ipsum</p>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="flex flex-col gap-y-4">
                                <p className='text-lg text-black'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, iusto natus quasi iste autem ea provident quos rem quis quaerat, blanditiis non suscipit tempora unde dolorem velit fuga deserunt. Amet.
                                </p>
                                <div className="mb-4">
                                    <p className='text-xl font-bold text-black'>Mahmoud</p>
                                    <p className='text-xl text-black'>CEO, Lorem Ipsum</p>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="flex flex-col gap-y-4">
                                <p className='text-lg text-black'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, iusto natus quasi iste autem ea provident quos rem quis quaerat, blanditiis non suscipit tempora unde dolorem velit fuga deserunt. Amet.
                                </p>
                                <div className="mb-4">
                                    <p className='text-xl font-bold text-black'>Mahmoud</p>
                                    <p className='text-xl text-black'>CEO, Lorem Ipsum</p>
                                </div>
                            </div>
                        </div>
                    </Slider>
                    <div className="absolute right-0 top-0 opacity-60">
                        <svg xmlns="http://www.w3.org/2000/svg" width="188" height="154" viewBox="0 0 188 154" fill="none">
                            <path d="M151.69 16.0901C164.341 17.8289 173.987 23.6881 180.629 33.6677C186.881 43.9425 188.996 56.4384 186.973 71.1555C184.339 90.3219 176.251 107.344 162.709 122.221C149.121 137.441 133.385 148.007 115.502 153.918L113.271 147.335C121.204 142.845 128.494 136.699 135.141 128.894C141.788 121.09 147.178 111.02 151.312 98.6854L140.894 94.6382C129.303 90.2553 120.777 83.8526 115.315 75.43C109.464 67.3027 107.244 58.1052 108.656 47.8375C110.161 36.8853 115.145 28.5035 123.608 22.6923C131.73 16.834 141.09 14.6333 151.69 16.0901ZM43.47 1.21638C56.1213 2.95518 65.7676 8.81437 72.4088 18.7939C78.6612 29.0687 80.7759 41.5647 78.7532 56.2817C76.119 75.4481 68.0311 92.4701 54.4896 107.348C40.9011 122.567 25.1652 133.133 7.28181 139.044L5.05118 132.461C12.9843 127.972 20.2742 121.825 26.9211 114.02C33.5679 106.216 38.9583 96.1462 43.0922 83.8117L32.6744 79.7644C21.0832 75.3815 12.5568 68.9788 7.0951 60.5563C1.24442 52.429 -0.975323 43.2315 0.435875 32.9638C1.94115 22.0115 6.92539 13.6298 15.3886 7.81852C23.5098 1.96027 32.8703 -0.240445 43.47 1.21638Z" fill="#3A3A38" fill-opacity="0.1"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-white pt-5 pb-12 px-8 md:px-20">
            <div className="flex flex-wrap justify-between items-center gap-y-4">
                <img src="/images/brand-1.png" className='max-w-52' alt="" />
                <img src="/images/brand-2.png" className='max-w-52' alt="" />
                <img src="/images/brand-3.png" className='max-w-52' alt="" />
                <img src="/images/brand-4.png" className='max-w-52' alt="" />
            </div>
        </div>
    </div>
  )
}

export default Vision