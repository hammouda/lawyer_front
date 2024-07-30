function ContactForm() {
    return(
        <>
<div className=" w-[517.50px] h-[33.75px] relative">
            <div className="w-[247.50px] h-[33.75px] px-5 py-2.5 left-[270px] top-0 absolute rounded-[20px] border border-[#999999] justify-start items-center gap-2.5 inline-flex">
                <input 
                    className="text-[#2e2e2e] text-base font-light font-['Roboto'] leading-[25px]" 
                    placeholder="Email"
                    type="email"    
                />
            </div>
            <div className="w-[247.50px] h-[33.75px] px-5 py-2.5 left-0 top-0 absolute rounded-[20px] border border-[#999999] justify-start items-center gap-2.5 inline-flex">
                <input 
                    className="text-[#2e2e2e] text-base font-light font-['Roboto'] leading-[25px]"
                    type="text"
                    placeholder="Name"
                />
            </div>
        </div>
            
        <div className="w-[517.50px] h-[33.75px] relative">
            <div className="w-[247.50px] h-[33.75px] px-5 py-2.5 left-[270px] top-0 absolute rounded-[20px] border border-[#999999] justify-between items-center inline-flex">
                <input 
                    className="text-[#2e2e2e] text-base font-light font-['Roboto'] leading-[25px]"
                    type="text"
                    placeholder="Pick case area"
                /> 
            </div>
            <div className="w-[247.50px] h-[33.75px] px-5 py-2.5 left-0 top-0 absolute rounded-[20px] border border-[#999999] justify-start items-center gap-2.5 inline-flex">
                <input 
                    className="text-[#2e2e2e] text-base font-light font-['Roboto'] leading-[25px]"
                    type="text"
                    placeholder="Phone"
                />
            </div>
        </div>
        <div className="w-[517.50px] h-[96.75px] px-5 py-2.5 rounded-[20px] border border-[#999999] justify-start items-start gap-2.5 inline-flex">
            <textarea 
                className="text-[#2e2e2e] text-base font-light font-['Roboto'] leading-[25px]"
                cols={50}
                placeholder="case description"
            >
                Case Description            </textarea>
        </div>
        <div className="w-[129.75px] h-[37.50px] px-[30px] py-[15px] rounded-[100px] border border-[#21383d] justify-center items-center gap-2.5 ">
            <div className="text-black text-base font-medium font-['Roboto']">Send</div>
        </div>
        </>
    );
}
export default ContactForm;