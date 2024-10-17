// CaseStudies.js
'use client'
import React from "react";
import Image from "next/image";
import AOS from 'aos'
import 'aos/dist/aos.css'
import {useEffect} from 'react'
import { Project1, Project2 } from "@/Assets/images/index";

const CaseStudies = () => {

  useEffect(() => {
    AOS.init({duration: 800})
  })
  return (
    <section className="py-20 overflow-x-hidden bg-[#EFEAE3]">
      <div className="container mx-auto">
        <h2 className="text-[3rem] font-bold text-center mb-10">
          Recent Projects
        </h2>
        <div className="grid mx-5 lg:mx-0 grid-cols-1 md:grid-cols-2 lg:mt-5 gap-8">
          <div data-aos='fade-right' className="relative group">
            <Image
              src={Project1}
              alt="Project Image"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition">
              <h3 className="text-3xl text-[#fdd49b] font-bold">
                Portfolio Website
              </h3>
              <p className="mt-2 mx-10">
                Developed a custom e-commerce website for an online retailer,
                boosting sales by 30%.
              </p>
              <a
                href="https://devdotcode.netlify.app/"
                className="mt-4 bg-white text-blue-500 px-4 py-2 rounded"
              >
                View Details
              </a>
            </div>
          </div>

          <div data-aos='fade-left' className="relative group">
            <Image
              src={Project2}
              alt="Project Image"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition">
              <h3 className="text-3xl text-[#fcce8e] font-bold">
                Health And Care Platform
              </h3>
              <p className="mt-2 mx-10">
                Revamped a client’s WordPress site, resulting in improved UX and
                a 25% increase in traffic.
              </p>
              <a
                href="https://eproject1.netlify.app/"
                className="mt-4 bg-white text-blue-500 px-4 py-2 rounded"
              >
                View Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
