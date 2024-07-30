
import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";

function Contact() {
    return (
    <>
    <header/>
        <div className="w-100 h-[600px]  rounded-[20px] grid grid-cols-2 gap-4" >
            <div className="mt-[150px] ml-[35px]"> 
                <div className="self-stretch text-black text-[40px] font-medium font-['Roboto'] grid" >Free Consultation</div>
                <div className="self-stretch text-[#7c7b7b] text-sm font-light font-['Inter'] leading-[25px] tracking-tight">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</div>
                <ContactForm/>
            </div>
            <div className="m-6">
                <img src="/images/contact.png"/>
            </div>
            </div>
        <ContactInfo/>
        <div className="w-100"><iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=24.70506467305332,%2046.76818553568757+(%D8%B4%D8%B1%D9%83%D8%A9%20%D9%85%D9%8A%D8%AB%D8%A7%D9%82%20%D8%A7%D9%84%D8%AA%D8%B4%D8%B1%D9%8A%D8%B9)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">mithaq altachrii</a></iframe></div>
    </>
    );
}
export default Contact;