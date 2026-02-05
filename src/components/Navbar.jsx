import React from 'react';

const Navbar = () => (
  <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 py-4 px-6 md:px-12 flex justify-between items-center">
    <div className="flex items-center gap-10">
      <img 
      src="https://files.codingninjas.in/new-logo-03-11400.svg" alt="Coding Ninjas" className="h-8" />
      <div className="hidden lg:flex gap-8 font-semibold text-gray-600">
        <a href="#" className="hover:text-orange-500 transition">Courses</a>
        <a href="#" className="hover:text-orange-500 transition">Scholarships</a>
        <a href="#" className="hover:text-orange-500 transition">Practice</a>
      </div>
    </div>
    <div className="flex gap-4">
      <button className="hidden md:block font-bold text-gray-700 hover:text-orange-500">Login</button>
      <button className="bg-orange-500 text-white px-6 py-2.5 rounded-lg font-bold hover:bg-orange-600 transition shadow-lg shadow-orange-200">
        Enroll Now
      </button>
    </div>
  </nav>
);

export default Navbar;