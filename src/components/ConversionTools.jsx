import React from 'react';

const ConversionTools = () => (
  <>
    {/* Floating Doubt Resolution (Desktop Only) */}
    <div className="hidden lg:flex fixed right-8 bottom-24 flex-col items-center bg-white p-4 rounded-2xl shadow-2xl border border-gray-100 z-40 animate-bounce">
      <div className="bg-orange-100 p-2 rounded-full mb-2">
        🚀
      </div>
      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Doubts Solved in</p>
      <p className="text-2xl font-black text-gray-900 leading-none">15 <span className="text-xs">mins</span></p>
    </div>

    {/* Mobile Sticky Footer CTA */}
    <div className="lg:hidden fixed bottom-0 left-0 w-full p-4 bg-white border-t border-gray-100 flex gap-4 z-50">
      <button className="flex-1 bg-orange-500 text-white font-black py-4 rounded-xl shadow-lg active:scale-95 transition">
        Book a Free Trial
      </button>
    </div>
  </>
);

export default ConversionTools;