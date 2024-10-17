// AboutUs.js
'use client'
import React from "react";
import Image from "next/image";
import { About } from "@/Assets/images/index";
import {useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {
  FaBrain,
  FaTools,
  FaChartBar,
  FaChartLine,
  FaClipboard,
  FaUsers,
} from "react-icons/fa";

const skills = [
  {
    icon: <FaBrain />,
    color: "text-green-500",
    title: "Software Development",
    description: "Expertise in developing web and mobile applications.",
  },
  {
    icon: <FaTools />,
    color: "text-yellow-500",
    title: "Project Management",
    description: "Leading teams and managing projects effectively.",
  },
  {
    icon: <FaChartBar />,
    color: "text-blue-500",
    title: "Data Analysis",
    description: "Using data to make informed decisions.",
  },
  {
    icon: <FaChartLine />,
    color: "text-pink-500",
    title: "Digital Marketing",
    description: "Optimizing online presence for businesses.",
  },
  {
    icon: <FaClipboard />,
    color: "text-purple-500",
    title: "Business Strategy",
    description: "Understanding the business and developing strategies.",
  },
  {
    icon: <FaUsers />,
    color: "text-indigo-500",
    title: "Team Management",
    description: "Leading and managing a team effectively.",
  },
];

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 800 })
  })
  return (
  <section className="overflow-x-hidden">
    <div className="bg-[#EFEAE3] pb-4">
      {" "}
      <h2 className="text-4xl font-bold text-center mb-10">
        Skills & Expertise
      </h2>
    </div>
    <div className="container lg:mx-10 mt-10">
      <div className="grid lg:mx-0 mx-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            data-aos='fade-up'
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <i className={`${skill.color} text-5xl mb-4`}>{skill.icon}</i>
            <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </div>

    {/* About */}
    <div className="flex py-20 bg-[#EFEAE3] flex-col mt-10 lg:flex-row items-center">
      <div data-aos='fade-right' className="lg:w-1/2 mx-5 lg:mx-0">
        <Image src={About} alt="About Us" className="rounded-lg shadow-lg" />
      </div>
      <div className="mx-5 lg:mx-0 mt-5 lg:mt-0 lg:w-1/2 lg:pl-12">
        <h2 data-aos='fade-left' className="text-3xl font-bold mb-4">About Us</h2>
        <p data-aos='fade-left' className="text-lg mb-4">
          We are a team of dedicated professionals with a passion for delivering
          exceptional results. Our diverse expertise spans various domains,
          allowing us to offer comprehensive solutions tailored to your needs.
        </p>
        <p data-aos='fade-left' className="text-lg">
          From software development to digital marketing, our team brings a
          wealth of knowledge and experience to help you achieve your goals.
          Discover our skills and learn more about what we can offer.
        </p>
      </div>
    </div>
  </section>
  )
};

export default AboutUs;
