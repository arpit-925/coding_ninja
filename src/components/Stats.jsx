import React from 'react';

const Stats = () => {
  const stats = [
    { label: "Students Enrolled", value: "1L+" },
    { label: "Hiring Partners", value: "100+" },
    { label: "Average CTC", value: "12 LPA" },
    { label: "Highest Package", value: "50 LPA" }
  ];

  return (
    <div className="bg-white border-y border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <div key={i} className="text-center">
            <p className="text-3xl font-black text-gray-900">{stat.value}</p>
            <p className="text-sm font-bold text-gray-400 uppercase tracking-tighter">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;