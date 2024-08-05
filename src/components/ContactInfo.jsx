function ContactInfo() {
    return(
    //     <div className="h-[108px] justify-start items-center gap-8 inline-flex">
    //     <div className="py-5 rounded justify-start items-center gap-5 flex">
    //         <img className="w-12 h-12" src="https://via.placeholder.com/48x48" />
    //         <div className="w-[210px] py-2.5 flex-col justify-center items-center gap-2.5 inline-flex">
    //             <div className="text-black text-base font-normal font-['DM Sans'] leading-normal">Phone: (+966) 0000 0000 0</div>
    //         </div>
    //     </div>
    //     <div className="py-5 rounded justify-start items-center gap-5 flex">
    //         <img className="w-12 h-12" src="https://via.placeholder.com/48x48" />
    //         <div className="w-[210px] py-2.5 flex-col justify-center items-center gap-2.5 inline-flex">
    //             <div className="text-black text-base font-normal font-['DM Sans'] leading-normal">Whats app: (+966) 0000 0000 0</div>
    //         </div>
    //     </div>
    //     <div className="py-5 rounded justify-start items-center gap-5 flex">
    //         <img className="w-12 h-12" src="https://via.placeholder.com/48x48" />
    //         <div className="w-[210px] py-2.5 flex-col justify-center items-center gap-2.5 inline-flex">
    //             <div className="self-stretch text-black text-base font-normal font-['DM Sans'] leading-normal">Contact@gmail.com</div>
    //         </div>
    //     </div>
    //     <div className="py-5 rounded justify-start items-center gap-5 flex">
    //         <img className="w-12 h-12" src="https://via.placeholder.com/48x48" />
    //         <div className="w-[210px] py-2.5 flex-col justify-center items-center gap-2.5 inline-flex">
    //             <div className="text-black text-base font-normal font-['DM Sans'] leading-normal">SUN-THU 08:00 - 17:00  KSA<br/>(Closed for Public Holiday)</div>
    //         </div>
    //     </div>
    //  </div>
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