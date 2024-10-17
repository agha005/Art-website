'use client';
import React, { useEffect } from "react";
import { FaPaintBrush, FaPalette, FaUserAstronaut, FaTools, FaImages, FaCreativeCommonsSampling } from "react-icons/fa"; // Import relevant art icons
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS CSS
import Card from "../Reusable/Card"; // Adjust path as necessary

const PageThree = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const cards = [
    {
      title: "Anime Character Design",
      description: "Bring your characters to life with unique anime-inspired designs. We specialize in creating captivating characters that resonate your vision.",
      icon: FaUserAstronaut, // Icon for character design
    },
    {
      title: "Custom Logo Design",
      description: "Stand out in the market with a bespoke logo. Our logo designs reflect your brand's identity and values, ensuring a lasting impression.",
      icon: FaPalette, // Icon for logo design
    },
    {
      title: "Illustrations and Artwork",
      description: "From concept art to detailed illustrations, we provide artistic services tailored to your project's needs. Let us turn your ideas into masterpieces.",
      icon: FaImages, // Icon for illustrations
    },
    {
      title: "Artistic Branding",
      description: "Transform your brand's identity with creative artwork. We create cohesive branding elements that capture the essence of your business.",
      icon: FaCreativeCommonsSampling, // Icon for branding
    },
    {
      title: "Graphic Design Services",
      description: "We offer comprehensive graphic design solutions, from promotional materials to digital assets. Enhance your marketing with stunning visuals.",
      icon: FaTools, // Icon for graphic design
    },
    {
      title: "Art Workshops",
      description: "Learn the art of character design and illustration through our workshops. Enhance your skills and unleash your creativity with expert guidance.",
      icon: FaPaintBrush, // Icon for workshops
    },
  ];

  return (
    <div id="page3" className="bg-[#EFEAE3] py-16 text-center">
      <div className="grid gap-8 mx-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, index) => (
          <div
            key={index}
            data-aos="fade-up" // Add AOS animation
          >
            <Card
              title={card.title}
              description={card.description}
              icon={card.icon}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PageThree;
