import React, { useState } from 'react';

const courses = [
  { id: 1, title: "Full Stack Web Development", cat: "Web Dev", img: "https://via.placeholder.com/300x180", tag: "Job Bootcamp" },
  { id: 2, title: "Data Structures & Algorithms", cat: "DSA", img: "https://via.placeholder.com/300x180", tag: "Most Popular" },
  { id: 3, title: "Machine Learning Masterclass", cat: "Data Science", img: "https://via.placeholder.com/300x180", tag: "Advanced" },
  { id: 4, title: "React & Next.js Specialization", cat: "Web Dev", img: "https://via.placeholder.com/300x180", tag: "Bestseller" },
];

const CourseSection = () => {
  const [activeTab, setActiveTab] = useState('All');
  const categories = ['All', 'DSA', 'Web Dev', 'Data Science'];

  const filtered = activeTab === 'All' ? courses : courses.filter(c => c.cat === activeTab);

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-black mb-8">Our Top Programs</h2>
      
      {/* Scrollable Filters */}
      <div className="flex gap-4 mb-10 overflow-x-auto no-scrollbar pb-2">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`px-6 py-2 rounded-full font-bold transition-all whitespace-nowrap ${
              activeTab === cat ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map(course => (
          <div key={course.id} className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="relative overflow-hidden">
              <img src={course.img} alt={course.title} className="w-full group-hover:scale-110 transition duration-500" />
              <span className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-md text-xs font-black text-orange-600">{course.tag}</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">{course.title}</h3>
              <div className="flex justify-between items-center text-sm font-medium text-gray-500 border-t pt-4">
                <span>⭐ 4.9 (2k+ reviews)</span>
                <span className="text-orange-500">View Syllabus →</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CourseSection;