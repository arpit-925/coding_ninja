import React from 'react';

const reviews = [
  {
    name: "Arpit Mishra",
    college: "AKGEC",
    text: "The structured curriculum and mentor support helped me master the MERN stack with ease.",
    company: "Placed at Top Tech",
    stars: 5
  },
  {
    name: "Saurabh Singh",
    college: "IIT Delhi",
    text: "The DSA course is exceptional. The problems are curated perfectly for interview preparation.",
    company: "SDE @ Amazon",
    stars: 5
  }
];

const Testimonials = () => (
  <section className="py-20 bg-orange-50/30">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-3xl font-black text-center mb-12">1,00,000+ Students <span className="text-orange-500">Success Stories</span></h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((rev, i) => (
          <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-orange-100 hover:shadow-md transition">
            <div className="flex gap-1 mb-4">
              {[...Array(rev.stars)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-xl">★</span>
              ))}
            </div>
            <p className="text-gray-700 italic mb-6">"{rev.text}"</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-orange-200 rounded-full flex items-center justify-center font-bold text-orange-600">
                {rev.name[0]}
              </div>
              <div>
                <h4 className="font-bold text-gray-900">{rev.name}</h4>
                <p className="text-sm text-gray-500">{rev.college} | {rev.company}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;