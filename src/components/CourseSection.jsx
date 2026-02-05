import React, { useState } from 'react';
// Import the fixed data from your constants folder
import { COURSES } from '../constants/data';

const CourseSection = () => {
  const [activeTab, setActiveTab] = useState('All');
  
  // Extract unique categories from the COURSES data dynamically
  const categories = ['All', ...new Set(COURSES.map(c => c.cat))];

  // Filter logic
  const filtered = activeTab === 'All' 
    ? COURSES 
    : COURSES.filter(c => c.cat === activeTab);

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-black mb-8 text-gray-900">
        Our Top <span className="text-orange-500">Programs</span>
      </h2>
      
      {/* Scrollable Filters */}
      <div className="flex gap-4 mb-10 overflow-x-auto no-scrollbar pb-2">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`px-6 py-2 rounded-full font-bold transition-all whitespace-nowrap border shadow-sm ${
              activeTab === cat 
                ? 'bg-orange-500 text-white border-orange-500' 
                : 'bg-white text-gray-600 border-gray-200 hover:border-orange-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map(course => (
          <div key={course.id} className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="relative overflow-hidden aspect-video">
              <img 
                src={course.img} 
                alt={course.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500" 
              />
              <span className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-md text-xs font-black text-orange-600 shadow-sm">
                {course.tag}
              </span>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-800 h-14 line-clamp-2">
                {course.title}
              </h3>
              
              <div className="flex justify-between items-center text-sm font-medium text-gray-500 border-t pt-4">
                <div className="flex items-center gap-1">
                  <span className="text-yellow-400 font-bold text-lg">★</span>
                  <span>4.9 (2k+ reviews)</span>
                </div>
                <span className="text-orange-500 font-bold cursor-pointer hover:underline">
                  View Syllabus →
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CourseSection;