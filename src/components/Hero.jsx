import React from 'react';

const Hero = () => (
  <section className="relative bg-white pt-16 pb-20 md:pt-24 md:pb-32 overflow-hidden">
    {/* Background Glow */}
    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-orange-100/50 rounded-full blur-[120px] -z-10" />

    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div className="space-y-8">
        <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full border border-gray-200">
          <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">Now hiring for 2026 batches</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight">
          Be the <span className="text-orange-500">Ninja</span> of your coding career
        </h1>
        
        <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
          Unlock your potential with India's highest-rated coding bootcamps. 
          Learn from IIT & Stanford alumni.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-orange-500 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-xl shadow-orange-200 hover:bg-orange-600 transition-all transform hover:-translate-y-1">
            Explore Courses
          </button>
          <button className="bg-white text-gray-900 border-2 border-gray-200 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all">
            Try for Free
          </button>
        </div>
      </div>

      <div className="relative">
        <img 
          src="https://files.codingninjas.in/group-11822-17676.png" 
          alt="Learning Ninja" 
          className="w-full h-auto z-10 relative drop-shadow-2xl"
        />
        {/* Floating Stat Card */}
        <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-2xl border border-gray-100 hidden md:block z-20">
          <p className="text-3xl font-black text-orange-500">100+</p>
          <p className="text-sm font-bold text-gray-500 uppercase">Hiring Partners</p>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;