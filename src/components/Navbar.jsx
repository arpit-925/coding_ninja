import React from 'react';
// Import the data we created in the constants file
import { IMAGES, NAV_LINKS } from '../constants/data';

const Navbar = () => (
  <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 py-4 px-6 md:px-12 flex justify-between items-center">
    <div className="flex items-center gap-10">
      {/* Dynamic Logo from our constants */}
      <img 
        src="https://institute.careerguide.com/wp-content/uploads/2024/02/Coding-Ninjas-1024x512.jpg"
        alt="Coding Ninjas" 
        className="h-8 cursor-pointer" 
      />
      
      {/* Dynamic Navigation Links using .map() */}
      <div className="hidden lg:flex gap-8 font-semibold text-gray-600">
        {NAV_LINKS.map((link) => (
          <a 
            key={link} 
            href={`#${link.toLowerCase()}`} 
            className="hover:text-orange-500 transition-colors duration-200"
          >
            {link}
          </a>
        ))}
      </div>
    </div>

    <div className="flex gap-4 items-center">
      <button className="hidden md:block font-bold text-gray-700 hover:text-orange-500 transition-colors">
        Login
      </button>
      <button className="bg-orange-500 text-white px-6 py-2.5 rounded-lg font-bold hover:bg-orange-600 transition-all shadow-lg shadow-orange-200 active:scale-95">
        Enroll Now
      </button>
    </div>
  </nav>
);

export default Navbar;