import React from 'react';
// import './Contact.css';
// import ContactForm from './ContactForm';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope, faLocation, faPhone } from '@fortawesome/free-solid-svg-icons';
// import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons/faMapMarkerAlt';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ContactHero from './ContactHero';
import ContactText from './ContactText';
import ContactBody from './ContactBody';
AOS.init();

const Contact = () => {
  return (
    <>
    <ContactHero/>
    <ContactText/>
    <ContactBody/>
    <div className=''>
    
      <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15550.651519988216!2d77.6640818!3d12.993401!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1137e2350dff%3A0x5572544ba88cb88!2sChethan%20Theatre!5e0!3m2!1sen!2sin!4v1721997412375!5m2!1sen!2sin"
          width="1600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps Embed"
        
        ></iframe>
      </div>
      </>
  );
};

export default Contact;
