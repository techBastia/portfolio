import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CaseStudies from "./components/CaseStudies";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100 text-gray-900 selection:bg-purple-300/30 selection:text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <CaseStudies />
        <Services />
        <Pricing />
        <Contact />
      </main>
      <WhatsAppButton phoneE164="+917894999440" />
    </div>
  );
}

export default App;