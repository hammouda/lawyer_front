
import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";
import Footer from "../components/footer";
import Menu from "../components/menu";

function Contact() {
    return (
    <>
    <Menu/>
        <div className="" >
            <div className="grid md:grid-cols-2 gap-4">
                <div className="my-auto"> 
                    <ContactForm/>
                </div>
                <div className="m-6">
                    <img src="/images/contact.png"/>
                </div>
                </div>
            </div>
            <ContactInfo/>
        <div className="w-100"><iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=24.70506467305332,%2046.76818553568757+(%D8%B4%D8%B1%D9%83%D8%A9%20%D9%85%D9%8A%D8%AB%D8%A7%D9%82%20%D8%A7%D9%84%D8%AA%D8%B4%D8%B1%D9%8A%D8%B9)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">mithaq altachrii</a></iframe></div>
        <Footer/>
    </>
    );
}
export default Contact;