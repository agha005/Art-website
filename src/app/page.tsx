// src/app/page.tsx
"use client";
import Hero from "./components/Hero/page";
import CardSection from "./components/CardSection/page"; // Ensure correct spelling
import MovingText from "./components/MovingText/page";
import OurCompany from "./components/OurCompany/page";
import About from "./components/AboutUs/page"; // Correct spelling
import OurClient from "./components/ClientWork/page";
import CaseStudies from './components/ProjectsSection/page';
import Process from './components/ProcessSection/page';
import Testimonials from './components/Testmonials/page';
import Services from './components/ServicesSection/page';
import Leadership from './components/Leadership/page';
import ContactUs from './components/ContactUs/page';

function App() {
  return (
    <main id="main" className="relative">
      {/* {loading && <Loader />} */}
      <Hero />
      <CardSection />
      <MovingText />
      <OurCompany />
      <About />
      <OurClient />
      <CaseStudies />
      <Process />
      <Testimonials />
      <Services />
      <Leadership />
      <ContactUs />
    </main>
  );
}

export default App;
