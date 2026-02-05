import React from 'react';
import { motion } from 'framer-motion';
// This is where the import goes!
import { MENTORS } from '../constants/data';

const Faculty = () => (
  <section className="bg-gray-950 py-24 text-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-4xl font-black mb-16 text-center">
        Learn from <span className="text-orange-500">Mentors</span>
      </h2>
      
      <motion.div 
        className="flex gap-8 cursor-grab"
        drag="x"
        dragConstraints={{ right: 0, left: -600 }}
      >
        {MENTORS.map((m, i) => (
          <div key={i} className="min-w-[280px] bg-white/5 p-8 rounded-3xl text-center border border-white/10">
            <img src={m.img} alt={m.name} className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-orange-500" />
            <h4 className="text-xl font-bold">{m.name}</h4>
            <p className="text-orange-400 text-sm">{m.role}</p>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Faculty;