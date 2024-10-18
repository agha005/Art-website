"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { Card1, Card2,Card3,Card4 } from "@/Assets/images/index";

// Sample data for projects
const projectsData = [
  {
    id: 1,
    title: "2D Art",
    description:
      "Developed a custom e-commerce website for an online retailer, boosting sales by 30%.",
    image: Card1,
    link: "https://devdotcode.netlify.app/",
    aosEffect: "fade-right",
    textColor: "#fdd49b",
  },
  {
    id: 2,
    title: "Genshin Impact",
    description:
      "Revamped a client’s WordPress site, resulting in improved UX and a 25% increase in traffic.",
    image: Card2,
    link: "https://eproject1.netlify.app/",
    aosEffect: "fade-left",
    textColor: "#fcce8e",
  },
  {
    id: 2,
    title: "Sonic",
    description:
      "Revamped a client’s WordPress site, resulting in improved UX and a 25% increase in traffic.",
    image: Card3,
    link: "https://eproject1.netlify.app/",
    aosEffect: "fade-left",
    textColor: "#fcce8e",
  },
  {
    id: 2,
    title: "Sonic",
    description:
      "Revamped a client’s WordPress site, resulting in improved UX and a 25% increase in traffic.",
    image: Card4,
    link: "https://eproject1.netlify.app/",
    aosEffect: "fade-left",
    textColor: "#fcce8e",
  }
];

const CaseStudies = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section className="py-20 overflow-x-hidden bg-[#EFEAE3]">
      <div className="container mx-auto">
        <h2 className="text-[3rem] font-bold text-center mb-10">
          Recent Projects
        </h2>
        <div className="grid mx-5 lg:mx-0 grid-cols-1 md:grid-cols-4 lg:mt-5 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              data-aos={project.aosEffect}
              className="relative group"
            >
              <Image
                src={project.image}
                alt={`${project.title} Image`}
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition">
                <h3
                  className={`text-3xl font-bold`}
                  style={{ color: project.textColor }}
                >
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
