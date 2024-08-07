import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

function Contact() {
    const {t} = useTranslation();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [message, setMessage] = useState();
    const [area, setArea] = useState();
    const [showNotif, setShowNotif] = useState(false);

    const handleSubmit =async (e) => {
        e.preventDefault();
        console.log("sending")
        // Use FormData to handle file uploads
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('message', message);
        formData.append('subject', area);
        try{
            axios.post('http://54.247.72.79/api/contact', formData);
            empty();
            setShowNotif(true);
            setTimeout(() => {
                setShowNotif(false)
            }, 3000);
        }catch (error){
            console.log(error)
        }

        const empty = () => {
            setName("");
            setEmail("");
            setArea("");
            setMessage("");
            setPhone("");
        }
    };
  return (
    <div className='bg-secondary px-4 lg:px-36 py-16 relative'>
        <div className="absolute bottom-0 right-0">
            <img src="/images/overlay-3.png" className='opacity-70' alt="" />
        </div>
        <div className="relative grid md:grid-cols-2 gap-16">
            <div>
                {showNotif && (
                    <div className='w-full px-6 py-2 bg-primary-lighter shadow-lg rounded-lg mb-4'>
                        <p className='text-lg font-medium text-secondary'>{t("message-success")}</p>
                    </div>
                )}
                <p className="text-white text-4xl font-medium leading-relaxed">{t("free-consulation")}</p>
                <p className="text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div className='mt-8'>
                  <form onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-5 text-white">
                        <input 
                            id="name"
                            name='name'
                            type="text" placeholder={t('name')}
                            className='bg-secondary border border-gray rounded-full w-full px-5 py-2 placeholder:text-white placeholder:font-light' 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input 
                            id="email"
                            name="email"
                            type="email" placeholder={t('email')}
                            className='bg-secondary border border-gray rounded-full w-full px-5 py-2 placeholder:text-white placeholder:font-light' 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input 
                            id="phone"
                            name="phone"
                            type="text" placeholder={t('phone')}
                            className='bg-secondary border border-gray rounded-full w-full px-5 py-2 placeholder:text-white placeholder:font-light' 
                            value={phone}
                            onChange={(e)=>setPhone(e.target.value)}
                        />
                        <select 
                            className='bg-secondary border border-gray text-white rounded-full w-full px-5 py-2 ' 
                            id="area"
                            name="area"
                            onChange={(e)=>setArea(e.target.value)}
                        >
                            <option>{t('pick-case-area')}</option>
                            <option>{t('area')} 1</option>
                            <option>{t('area')} 1</option>
                            <option>{t('area')} 1</option>
                            <option>{t('area')} 1</option>
                        </select>
                    </div>
                    <textarea 
                        placeholder={t('case-description')} rows={4}
                        className='mt-5 bg-secondary text-white border border-gray rounded-3xl w-full px-5 py-2 placeholder:text-white placeholder:font-light' 
                        value={message}
                        onChange={(e)=>setMessage(e.target.value)} 
                    ></textarea>
                    <input type="submit" value={t("send")} className='mt-5 bg-secondary text-white border border-white rounded-full px-8 py-2 cursor-pointer hover:bg-white hover:text-secondary' />
                  </form>
                </div>
            </div>
            <div className='m-auto'>
                <div className="flex items-center gap-x-5">
                    <img src="/images/icon-address-white.png" className='w-12' alt="" />
                    <div className='flex flex-col h-full justify-between text-white'>
                        <p dir='ltr'>(+966) 0000 0000 0</p>
                        <p>contact@gmail.com</p>
                    </div>
                </div>
                <div className="flex items-center gap-x-5 mt-16">
                    <img src="/images/icon-map-white.png" className='w-12' alt="" />
                    <div className='flex flex-col h-full justify-between text-white'>
                        <p>{t('st-name')}</p>
                        <p>{t('eriadh-ksa')}</p>
                    </div>
                </div>
                <div className="flex items-center gap-x-5 mt-16">
                    <img src="/images/icon-time-white.png" className='w-12' alt="" />
                    <div className='flex flex-col h-full justify-between text-white'>
                        <p>{t("mon-fri")} 08:00 - 17:00 KSA</p>
                        <p>({t("closed-holiday")})</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact