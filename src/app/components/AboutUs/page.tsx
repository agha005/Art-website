// AboutUs.js
"use client";
import React, { useEffect } from "react";
import { FaHotjar } from "react-icons/fa";
import Image from "next/image";
import {
  About,
  Animecharacter,
  Gaming,
  Sonic,
  Threed,
  Twod,
} from "@/Assets/images/index";
import AOS from "aos";
import "aos/dist/aos.css";

// Skills array where you can directly assign images like 'About'
const skills = [
  {
    color: "text-green-500",
    title: "Anime Character",
    description: "Expertise in Designing Art and anime Character.",
    image: Animecharacter, // Assign image directly
    originalPrice: "$2000",
    discountedPrice: "$250",
  },
  {
    color: "text-yellow-500",
    title: "Sonic Character",
    description: "Leading teams and managing projects effectively.",
    image: Sonic, // Assign image directly
    originalPrice: "$1500",
    discountedPrice: "$300",
  },
  {
    color: "text-blue-500",
    title: "2D Art",
    description: "Using data to make informed decisions.",
    image: Twod, // Assign image directly
    originalPrice: "$900",
    discountedPrice: "$450",
  },
  {
    color: "text-pink-500",
    title: "3D Art",
    description: "Optimizing online presence for businesses.",
    image: Threed, // Assign image directly
    originalPrice: "$1200",
    discountedPrice: "$320",
  },
  {
    color: "text-purple-500",
    title: "Gaming Character",
    description: "Understanding the business and developing strategies.",
    image: Gaming, // Assign image directly
    originalPrice: "$2300",
    discountedPrice: "$230",
  },
];

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section className="overflow-x-hidden">
      {/* Top Categories Section */}
      <div className="bg-[#EFEAE3] pb-4">
        <h2 className="text-[2.5rem] font-bold mx-10 mb-5 flex items-center">
          <FaHotjar className="text-red-500 mr-2" /> {/* Icon styling */}
          Hot Selling
        </h2>
      </div>

      <div className="container lg:mx-10 mt-10">
        <div className="grid lg:mx-0 mx-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="bg-white p-2 rounded-lg shadow-md hover:shadow-lg transition"
            >
              {/* Render the image if available */}
              {skill.image && (
                <Image
                  src={skill.image}
                  alt={skill.title}
                  className="w-full h-40 object-cover mb-4 rounded-t-lg"
                />
              )}

              {/* Skill title and description */}
              <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
              <p>{skill.description}</p>

              {/* Pricing section */}
              <div className="mt-4">
                <span className="text-lg font-bold text-green-600">
                  {skill.discountedPrice}{" "}
                </span>
                <span className="line-through ml-2 text-gray-500">
                  {skill.originalPrice}{" "}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* About Section */}
      <div className="flex py-20 bg-[#EFEAE3] flex-col mt-10 lg:flex-row items-center">
        <div data-aos="fade-right" className="mx-20">
          <Image
            src={About}
            height={300}
            width={400}
            alt="About Us"
            className="rounded-lg"
          />
        </div>
        <div className="mx-5 lg:mx-0 mt-5 lg:mt-0 lg:w-1/2 lg:pl-12">
          <h2
            data-aos="fade-left"
            className="text-4xl text-[#3bc6bf] neon font-bold mb-8"
          >
            About Us
          </h2>
          <p data-aos="fade-left" className="text-lg mb-4">
            We are a passionate team of artists and creators dedicated to
            bringing your visions to life. With a rich blend of artistic skills
            and innovative thinking, we offer a diverse range of creative
            solutions tailored to your unique needs.
          </p>
          <p data-aos="fade-left" className="text-lg">
            From stunning graphic designs to captivating illustrations, our team
            combines technical expertise with artistic flair. We strive to help
            you express your ideas and connect with your audience through
            visually compelling art. Discover our portfolio and learn more about
            how we can elevate your creative projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
