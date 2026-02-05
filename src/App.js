import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CourseSection from './components/CourseSection';
import Faculty from './components/Faculty';
import Testimonials from './components/Testimonials';
import ConversionTools from './components/ConversionTools';



function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <CourseSection />
      <Faculty />
      <Testimonials />
      <Footer /> {/* This completes the layout! */}
      <ConversionTools />
    </div>
  );
}
export default App;
