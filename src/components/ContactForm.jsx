import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
function ContactForm() {
    const { t, i18n } = useTranslation();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [message, setMessage] = useState();
    const [area, setArea] = useState();
    const handleSubmit =async (e) => {
        e.preventDefault();
        // Use FormData to handle file uploads
        const formData = new FormData();
        // formData.append('name', name);
        formData.append('email', email);
        formData.append('message', message);
        formData.append('subject', area);
        try{
            axios.post('http://127.0.0.1:8000/api/contact', formData);
            console.log('contact sent')
        }catch (error){
            console.log(error)
        }

    };
    return(
        <div className="p-6">
                <p className="text-secondary text-4xl font-medium leading-relaxed">{t("Free Consulation")}</p>
                <p className="text-gray">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div className='mt-8'>
                  <form onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-5">
                        <input 
                            id="name"
                            name="name"
                            type="text" placeholder={t("Name")}
                            className='bg-white border border-primary-dark rounded-full w-full px-5 py-2 placeholder:text-secondary placeholder:font-light' 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input 
                            id="email"
                            name="email"
                            type="email" placeholder={t("Email")}
                            className='bg-white border border-primary-dark rounded-full w-full px-5 py-2 placeholder:text-secondary placeholder:font-light' 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input 
                            id="phone"
                            name="phone"
                            type="text" placeholder={t("Phone")}
                            className='bg-white border border-primary-dark rounded-full w-full px-5 py-2 placeholder:text-secondary placeholder:font-light' 
                            value={phone}
                            onChange={(e)=>setPhone(e.target.value)}
                        />
                        <select 
                            id="area"
                            name="area"
                            className='bg-white border border-primary-dark rounded-full w-full px-5 py-2 ' 
                            onChange={(e)=>setArea(e.target.value)}
                        >
                            <option>{t("Pick Case Area")}</option>
                            <option>Area 1</option>
                            <option>Area 2</option>
                            <option>Area 3</option>
                            <option>Area 4</option>
                        </select>
                    </div>
                    <textarea 
                        id="message"
                        name="message"
                        placeholder={t("Case Description")} rows={4}
                        className='mt-5 bg-white border border-primary-dark rounded-3xl w-full px-5 py-2 placeholder:text-secondary placeholder:font-light'
                        value={message}
                        onChange={(e)=>setMessage(e.target.value)} 
                    ></textarea>
                    <input type="submit" value={t("Send")} className='mt-5 bg-white border border-primary-dark rounded-full px-8 py-2 cursor-pointer hover:bg-secondary hover:border-secondary hover:text-white' />
                  </form>
                </div>
            </div>
    );
}
export default ContactForm;