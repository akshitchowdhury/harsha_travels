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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.0143385766023!2d77.54228917411925!3d12.90679941629763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3fc5c019aa67%3A0x37dc2c18972dd299!2sKR%20Hospital%20Uttarahalli!5e0!3m2!1sen!2sin!4v1726808940144!5m2!1sen!2sin"
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
