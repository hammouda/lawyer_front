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
    const [showNotif, setShowNotif] = useState(false);

    const handleSubmit =async (e) => {
        e.preventDefault();
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

    };

    const empty = () => {
        setName("");
        setEmail("");
        setArea("");
        setMessage("");
        setPhone("");
    }
    return(
        <div className="p-6">
                {showNotif && (
                    <div className='w-full px-6 py-2 bg-primary-lighter shadow-lg rounded-lg mb-4'>
                        <p className='text-lg font-medium text-secondary'>{t("message-success")}</p>
                    </div>
                )}
                <p className="text-secondary text-4xl font-medium leading-relaxed">{t("Free Consulation")}</p>
                <p className="text-gray">{t("free-consultation-desc")}</p>
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
                            <option value={"Bankruptcy"}>{t("bankruptcy")}</option>
                            <option value={"Commercial Arbitration"}>{t("financial-claims")}</option>
                            <option value={"Drafting and Reviewing"}>{t("drafting-and-reviewing")}</option>
                            <option value={"Debt Collection"}>{t("debt-collection")}</option>
                            <option value={"Civil Cases"}>{t("civil-cases")}</option>
                            <option value={"Legal Risk Analysis"}>{t("legal-risk-analysis")}</option>
                            <option value={"Writing Memorandums and Regulations"}>{t("memorandums-and-regulations")}</option>
                            <option value={"Documentation"}>{t("documentation")}</option>
                            <option value={"Legal Consultations"}>{t("legal-consultations")}</option>
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