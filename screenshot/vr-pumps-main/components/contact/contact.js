// components/contact/contact.js
import Header from "@/components/header.js";
import Footer from "@/components/footer.js";
import ContactFold1 from './fold1'

export default function Contact() {
  return (
    <>
    <Header activeTab={'Contact'}/>
    <div className="contact-page">
      <ContactFold1 />
    </div>
    <Footer/>
    </>
  )
}