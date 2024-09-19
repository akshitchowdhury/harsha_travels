import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

export default function ServicesDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768) // Adjust this breakpoint as needed
    }

    checkIfMobile()
    window.addEventListener('resize', checkIfMobile)

    return () => window.removeEventListener('resize', checkIfMobile)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    if (isMobile) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMobile])

  // const toggleDropdown = () => {
   
  //   }
  // }

  return (
    <div 
      ref={dropdownRef}
      className="relative group text-left z-50"  
      onMouseEnter={() => !isMobile && setIsOpen(true)} 
      onMouseLeave={() => !isMobile && setIsOpen(false)}
    >
      <p
        className="text-white md:uppercase mx-2 font-medium relative hover:text-indigo-800 group"
        // onClick={toggleDropdown}
      >
        Services
        <span className="absolute left-0 bottom-[-2px] w-full h-[2px] md:bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
      </p>

      {/* Dropdown Menu */}
      {isOpen && (
        <ul className={`
                    md:absolute md:left-0 md:mt-2 md:w-60 md:shadow-lg
          w-full overflow-hidden transition-all duration-300 ease-in-out
          ${isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0 md:opacity-100'}
        `}>
          <li>
            <Link to="/excavation" className="block px-4 py-2 text-gray-700 hover:bg-gray-200 hover:text-white transition-colors duration-200">
              Corporate Travels
            </Link>
          </li>
          <li>
            <Link to="/demolition" className="block px-4 py-2 text-gray-700 hover:bg-gray-200 hover:text-white transition-colors duration-200">
              Corporate Tours
            </Link>
          </li>
          <li>
            <Link to="/siteprep" className="block px-4 py-2 text-gray-700 hover:bg-gray-200 hover:text-white transition-colors duration-200">
              Airport Pickup/Drop
            </Link>
          </li>
        </ul>
      )}
    </div>
  )
}