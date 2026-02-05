import React from 'react';

const Hero = () => (
  <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-transparent py-20 px-6">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
      <div className="md:w-1/2 space-y-6">
        <div className="inline-block bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-bold">
          Targeting Top Tech Companies?
        </div>
        <h1 className="text-5xl md:text-6xl font-black text-gray-900 leading-[1.1]">
          Master Coding and <span className="text-orange-500">Ace Interviews</span>
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          Structured programs for college students and working professionals to help you land your dream job.
        </p>
        <div className="flex flex-wrap gap-4 pt-4">
          <button className="bg-orange-500 text-white px-8 py-4 rounded-xl text-lg font-bold shadow-xl hover:bg-orange-600 transition">Explore Offerings</button>
          <button className="border-2 border-orange-500 text-orange-500 px-8 py-4 rounded-xl text-lg font-bold hover:bg-orange-50 transition">Free Trial</button>
        </div>
      </div>
      <div className="md:w-1/2 relative">
        <div className="absolute -z-10 w-72 h-72 bg-orange-200 blur-[100px] top-10 right-10 opacity-50"></div>
        <img 
          src="https://www.codingninjas.com/assets-landing/images/hero-image.webp" 
          alt="Coding Ninjas Hero" 
          className="rounded-3xl shadow-2xl transform hover:scale-[1.02] transition duration-500"
        />
      </div>
    </div>
  </section>
);

export default Hero;