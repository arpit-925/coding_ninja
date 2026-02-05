import React from 'react';
import { motion } from 'framer-motion';

const mentors = [
  { name: "Ankush Singla", role: "Co-founder, IIT Delhi", img: "https://via.placeholder.com/150" },
  { name: "Nidhi Agarwal", role: "Co-founder, IIT Delhi", img: "https://via.placeholder.com/150" },
  { name: "Manisha Khattar", role: "SDE @ Google", img: "https://via.placeholder.com/150" },
  { name: "Parikh Jain", role: "Ninja Mentor", img: "https://via.placeholder.com/150" },
];

const Faculty = () => (
  <section className="bg-gray-950 py-24 text-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-4xl font-black mb-4 text-center">Learn from <span className="text-orange-500">Mentors</span></h2>
      <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">Our instructors come from top tech companies like Google, Amazon, and Microsoft.</p>
      
      <motion.div 
        className="flex gap-8"
        drag="x"
        dragConstraints={{ right: 0, left: -400 }}
      >
        {mentors.map((m, i) => (
          <motion.div key={i} className="min-w-[280px] bg-white/5 border border-white/10 p-8 rounded-3xl text-center hover:bg-white/10 transition">
            <img src={m.img} alt={m.name} className="w-24 h-24 rounded-full mx-auto mb-6 border-2 border-orange-500 p-1" />
            <h4 className="text-xl font-bold mb-1">{m.name}</h4>
            <p className="text-orange-400 text-sm">{m.role}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Faculty;