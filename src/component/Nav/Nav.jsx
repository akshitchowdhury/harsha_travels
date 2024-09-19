import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/Logo.png"
import ServicesDropdown from './ServicesDropdown/ServicesDropdown';
import AboutDropdown from './AboutDropdpwn/AboutDropDown';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    window.scrollTo({ behavior: 'smooth', top: 0 });
  };

  return (
    <nav className="bg-black p-4 lg:px-20">
      <div className="container mx-auto md:h-20 lg:h-20 flex justify-between items-center">
        <div className="font-bold flex flex-row items-center">
          <img src={logo} className='w-20 h-24 md:w-20 md:h-20 py-2' alt="Logo" />
        </div>
        <div className="hidden  md:flex space-x-8 lg:space-x-24">
          <NavLink  to="/">HOME</NavLink>
          <NavLink to="/about">ABOUT</NavLink>
          {/* <AboutDropdown /> */}
          <NavLink to="/gallery">GALLERY</NavLink>
          <NavLink to="/client">CLIENTELE</NavLink>
          <ServicesDropdown />
          <NavLink to="/contact">CONTACT US</NavLink>
        </div>
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-black focus:outline-none"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}></path>
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden mt-4">
          <MobileNavLink to="/" onClick={handleClick}>Home</MobileNavLink>
          <AboutDropdown />
          <MobileNavLink to="/project" onClick={handleClick}>Project</MobileNavLink>
          <MobileNavLink to="/client" onClick={handleClick}>Clientele</MobileNavLink>
          <ServicesDropdown/>
          <MobileNavLink to="/contact" onClick={handleClick}>Contact Us</MobileNavLink>
        </div>
      )}
    </nav>
  );
}

function NavLink({ to, children }) {
  return (
    <Link 
      to={to} 
      className="text-white font-medium relative hover:text-indigo-800 group"
    >
      {children}
      <span className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
    </Link>
  );
}

function MobileNavLink({ to, onClick, children }) {
  return (
    <Link 
      onClick={onClick} 
      to={to} 
      className="block text-black hover:text-gray-300 p-2"
    >
      {children}
    </Link>
  );
}