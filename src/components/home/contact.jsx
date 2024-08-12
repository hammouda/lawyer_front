import React, { useState } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

function Contact() {
    const {t} = useTranslation();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [area, setArea] = useState("");
    const [errors, setErrors] = useState({});
    const [showNotif, setShowNotif] = useState(false);
    const validate =()=>{
        let isValid =true;
        let errors = {}
        let isNumeric =(numbers)=>{
            for (let i = 0; i < numbers.length; i++) {
                if(isNaN(numbers.charAt(i))){
                    return false
                }                
            }
            return true
        }
        if(!name.trim()){
            errors["name"]= "name error"
            isValid= false
        }
        if(!message.trim()){
            errors["message"]= "message error"
            isValid= false
        }
        if(!email.trim()){
            errors["email"]= "email error"
            isValid= false
        }
        if(!isNumeric(phone.trim()) || phone.length!==9){
            errors["phone"]= "phone error"
        }
        setErrors(errors)
        return isValid
    }
    const handleSubmit =async (e) => {
        e.preventDefault();
        // Use FormData to handle file uploads
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('message', message);
        formData.append('subject', area);
        if(validate(formData)){
        try{
            axios.post('https://admin.mithaqaltashrie.com.sa/api/contact', formData);
            empty();
            setShowNotif(true);
            setErrors({});
            setTimeout(() => {
                setShowNotif(false)
            }, 3000);
        }catch (error){
            console.log(error)
        }}
    };
    const empty = () => {
        setName("");
        setEmail("");
        setArea("");
        setMessage("");
        setPhone("");
    }
  return (
    <div className='bg-primary-lighter px-4 lg:px-36 py-16 relative'>
        <div className="absolute bottom-0 right-0">
            <img src="/images/overlay-3.png" className='opacity-70' alt="Mithaq Al Tashrie" />
        </div>
        <div className="grid md:grid-cols-2 gap-16 relative z-50">
            <div>
                {showNotif && (
                    <div className='w-full px-6 py-2 bg-green-light shadow-lg rounded-lg mb-4'>
                        <p className='text-lg font-medium text-green'>{t("message-success")}</p>
                    </div>
                )}
                <p className="text-secondary text-4xl font-medium leading-relaxed">{t("free-consulation")}</p>
                <p className="text-gray">{t("free-consultation-desc")}</p>
                <div className='mt-8'>
                  <form onSubmit={handleSubmit}> 
                    <div className="grid md:grid-cols-2 gap-5">
                        <div>
                            <input 
                                id="name"
                                name='name'
                                type="text" placeholder={t('name')}
                                className='bg-primary-lighter h-fit border border-primary-dark rounded-full w-full px-5 py-2 placeholder:text-secondary placeholder:font-light' 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            {errors.name && <span className="text-red text-xs italic">{t(errors.name)}</span>}
                        </div>
                        <div>
                            <input 
                                id="email"
                                name="email"
                                type="email" placeholder={t('email')}
                                className='bg-primary-lighter h-fit border border-primary-dark rounded-full w-full px-5 py-2 placeholder:text-secondary placeholder:font-light' 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {errors.email && <span className="text-red text-xs italic">{t(errors.email)}</span>}
                        </div>
                        <div>
                            <input 
                                id="phone"
                                name="phone"
                                type="text" placeholder={t('phone')}
                                className='bg-primary-lighter h-fit border border-primary-dark rounded-full w-full px-5 py-2 placeholder:text-secondary placeholder:font-light' 
                                value={phone}
                                onChange={(e)=>setPhone(e.target.value)}
                            />
                            {errors.phone && <span className="text-red text-xs italic">{t(errors.phone)}</span>}
                        </div>
                        <select 
                            className='bg-primary-lighter h-fit border border-primary-dark rounded-full w-full px-5 py-2.5 ' 
                            id="area"
                            name="area"
                            onChange={(e)=>setArea(e.target.value)}
                        >
                            <option>{t('pick-case-area')}</option>
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
                    <div>
                        <textarea 
                            id="message"
                            name="message"
                            placeholder={t('case-description')} rows={4}
                            className='mt-5 bg-primary-lighter border border-primary-dark rounded-3xl w-full px-5 py-2 placeholder:text-secondary placeholder:font-light' 
                            value={message}
                            onChange={(e)=>setMessage(e.target.value)} 
                        ></textarea>
                        {errors.message && <span className="text-red text-xs italic">{t(errors.message)}</span>}
                    </div>
                    <input type="submit" value={t("send")} className='mt-5 bg-primary-lighter border border-primary-dark rounded-full px-8 py-2 cursor-pointer hover:bg-primary-dark hover:text-white' />
                  </form>
                </div>
            </div>
            <div className='m-auto'>
                <div className="flex items-center gap-x-5">
                    <img src="/images/icon-address.png" className='w-12' alt="Mithaq Al Tashrie" />
                    <div className='flex flex-col h-full justify-between text-secondary'>
                        <p dir='ltr'>(+966) 0000 0000 0</p>
                        <p>contact@gmail.com</p>
                    </div>
                </div>
                <div className="flex items-center gap-x-5 mt-16">
                    <img src="/images/icon-map.png" className='w-12' alt="Mithaq Al Tashrie" />
                    <div className='flex flex-col h-full justify-between text-secondary'>
                        <p>{t('st-name')}</p>
                        <p>{t('eriadh-ksa')}</p>
                    </div>
                </div>
                <div className="flex items-center gap-x-5 mt-16">
                    <img src="/images/icon-time.png" className='w-12' alt="Mithaq Al Tashrie" />
                    <div className='flex flex-col h-full justify-between text-secondary'>
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