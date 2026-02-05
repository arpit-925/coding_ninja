import Footer from './components/Footer';

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