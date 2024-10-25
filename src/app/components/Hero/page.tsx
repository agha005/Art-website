"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Sophia, Saske } from "@/Assets/images/index"; // Import your character image
import Image from "next/image";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <div className="relative" id="home">
      {/* Background Image */}
      {/* <Image
        className="absolute top-0 left-0 w-full h-full filter blur-lg object-cover"
        src={Anime}
        alt="background image"
      /> */}

      {/* Main Content */}
      <div className="flex lg:flex-row flex-col justify-center items-center h-screen relative z-10">
        <div className="w-2/3 mb-10 lg:mt-[4rem] mt-5 mx-10 md:mt-[3rem]">
          <h1
            data-aos="fade-right"
            data-aos-delay="200"
            className="lg:text-[3rem] text-[3rem] text-[#6cd6d1] neon font-bold leading-none"
          >
            Crafting Your Dream Characters & Art
          </h1>
          <p
            data-aos="fade-right"
            data-aos-delay="400"
            className="hidden md:block text-[20px] mt-10 lg:mt-10 md:text-[20px] text-orange-100"
          >
            Bring your vision to life with unique artwork and professional logo
            designs. We offer creative services tailored to your brand, from
            character designs to logos, helping you stand out with visuals that
            captivate and inspire. Let us elevate your brand with personalized
            designs that reflect your style and story.
          </p>
        </div>

        <div className="Image flex flex-row">
          <Image
            src={Saske}
            alt="not available"
            data-aos="fade-left" data-aos-delay="300"
            height={200}
            width={250}
          />
          <Image
            src={Sophia}
            alt="not available"
            data-aos="fade-left"
            data-aos-delay="800"
            className="top-10 mr-10"
            height={200}
            width={200}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
