function ContactInfo() {
    return(
    <div className="flex justify-center items-center flex-wrap lg:flex-nowrap gap-8 py-5 my-14">
        <div className="flex gap-x-5 items-center">
            <img src="/images/icon-phone.png" className="w-6 md:w-12" alt="" />
            <p className="text-sm md:text-base">Phone: (+966) 0000 0000 0</p>
        </div>
        <div className="flex gap-x-5 items-center">
            <img src="/images/icon-phone.png" className="w-6 md:w-12" alt="" />
            <p className="text-sm md:text-base">Whatsapp: (+966) 0000 0000 0</p>
        </div>
        <div className="flex gap-x-5 items-center">
            <img src="/images/icon-address.png" className="w-6 md:w-12" alt="" />
            <p className="text-sm md:text-base">contact@gmail.com</p>
        </div>
        <div className="flex gap-x-5 items-center">
            <img src="/images/icon-time.png" className="w-6 md:w-12" alt="" />
            <p className="text-sm md:text-base">SUN-THU 08:00 - 17:00  KSA <br/>(Closed for Public Holiday)</p>
        </div>
    </div>
    );
}
export default ContactInfo;