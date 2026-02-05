import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CourseSection from './components/CourseSection';
import Faculty from './components/Faculty';
import ConversionTools from './components/ConversionTools';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <CourseSection />
      <Faculty />
      <ConversionTools />
      
      {/* Simple Footer */}
      <footer className="bg-gray-100 py-12 text-center text-gray-500 text-sm">
        <img src="https://www.codingninjas.com/assets-landing/images/CN-logo.svg" alt="Logo" className="h-6 mx-auto mb-4 grayscale opacity-50" />
        <p>© 2026 Sunrise Mentors Pvt. Ltd.</p>
      </footer>
    </div>
  );
}

export default App;