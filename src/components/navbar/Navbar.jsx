import { faBell, faEnvelope, faLock, faPhoneAlt, faTags } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo3-removebg-preview.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top bar with contact info */}
      <div className="bg-gradient-to-r from-[#4f8729] to-[#3b6d21] text-white py-2 w-full z-10 shadow-lg overflow-hidden flex justify-center items-center">
        <div className="whitespace-nowrap flex items-center space-x-8 px-2 animate-scroll gap-5">
          <span className="flex items-center space-x-2 text-sm font-semibold px-4 py-1 rounded-full bg-white/10 hover:bg-white/20 cursor-pointer transition-all ease-in-out duration-300">
            <FontAwesomeIcon icon={faPhoneAlt} className="text-yellow-300" />
            <span>1800-XXXX-XXXX</span>
          </span>
          <span className="flex items-center space-x-2 text-sm font-semibold px-4 py-1 rounded-full bg-white/10 hover:bg-white/20 cursor-pointer transition-all ease-in-out duration-300">
            <FontAwesomeIcon icon={faEnvelope} className="text-yellow-300" />
            <span>info@Univoc.com</span>
          </span>
          <span className="flex items-center space-x-2 text-sm font-semibold px-4 py-1 rounded-full bg-white/10 hover:bg-white/20 cursor-pointer transition-all ease-in-out duration-300">
            <FontAwesomeIcon icon={faTags} className="text-yellow-300" />
            <span>Exclusive Discounts Available Now!</span>
          </span>
          <span className="flex items-center space-x-2 text-sm font-semibold px-4 py-1 rounded-full bg-white/10 hover:bg-white/20 cursor-pointer transition-all ease-in-out duration-300">
            <FontAwesomeIcon icon={faBell} className="text-yellow-300" />
            <span>Sign Up for Latest Updates</span>
          </span>
        </div>
      </div>

      {/* Navbar section */}
      <div className="p-3 flex justify-between bg-blue-100 items-center max-w-full transition-all ease-in-out">

        <img src={logo} alt="Univoc Logo" className="h-[10%] w-[10%] mx-1 transition-transform duration-300 transform hover:scale-105" />

        <div className= "flex space-x-8 items-center" >
          
          <NavLink to='/' className="text-base font-semibold text-gray-800 hover:text-sky-600  transition-all duration-300 ease-in-out transform hover:scale-110"> Home </NavLink>

          <NavLink to='/about-page' className="text-base font-semibold text-gray-800 hover:text-sky-600 transition-all duration-300 ease-in-out transform hover:scale-110"> About Us </NavLink>
                
          <NavLink to='/' className="text-base font-semibold text-gray-800 hover:text-sky-600  transition-all duration-300 ease-in-out transform hover:scale-110"> Our Services </NavLink>
                
          <NavLink to='/ ' className="text-base font-semibold text-gray-800 hover:text-sky-600  transition-all duration-300 ease-in-out transform hover:scale-110"> For Students </NavLink>
                
          <NavLink to='/' className="text-base font-semibold text-gray-800 hover:text-sky-600 transition-all duration-300 ease-in-out transform hover:scale-110"> For HR </NavLink>

          <NavLink to='/contact' className="text-base font-semibold text-gray-800 hover:text-sky-600 transition-all duration-300 ease-in-out transform hover:scale-110"> Contact Us </NavLink>
        
        </div>

        <div className=" flex space-x-8 items-center mr-4">
          
          <NavLink to='/login' className="text-base font-semibold text-gray-800 flex items-center space-x-2 hover:text-sky-600 transition-all">
            <FontAwesomeIcon icon={faLock} className="text-gray-800" />
            <span>Login</span>
          </NavLink>
                
          <NavLink 

            to='/Register' 
            className="inline-block text-center text-white bg-sky-600 py-2 px-6 rounded-lg shadow-md transform transition-all duration-300 ease-in-out hover:bg-sky-700 hover:scale-105 hover:shadow-xl focus:outline-none">

            Sign Up For Free

          </NavLink>


        </div>
          
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button className="text-white focus:outline-none transition-transform transform hover:scale-110" onClick={() => setIsOpen(!isOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      
    </>
  );
};

export default Navbar;
