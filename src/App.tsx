import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Amenities from './components/Amenities';
import FloorPlans from './components/FloorPlans';
import Gallery from './components/Gallery';
import Specs from './components/Specs';
import Location from './components/Location';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("Download Brochure & Get Pricing");

  const openQuoteModal = () => {
    setModalTitle("Get a Personalized Quote");
    setIsModalOpen(true);
  };

  const openPlanModal = (planName: string) => {
    setModalTitle(`View ${planName} Floor Plan`);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-secondary/20 selection:bg-primary/20 selection:text-primary">
      <Navbar />

      <main>
        <Hero onGetQuote={openQuoteModal} />
        <About />
        <Features />
        <Pricing onGetQuote={openQuoteModal} />
        <Amenities />
        <FloorPlans onViewPlan={openPlanModal} />
        <Gallery />
        <Specs />
        <Location />
      </main>

      <Footer />

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={modalTitle}
      />

    </div>
  );
}

export default App;
