'use client'
import React from "react";
import Image from "next/image";
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'; // Import AOS CSS

interface TextProps {
  heading: string;
  text: string;
  text1: string;
  imageUrl: string;
  imageAlt: string;
  imageWidth: number; // Ensure this is a number
  imageHeight: number; // Ensure this is a number
}

const ContentSection: React.FC<TextProps> = ({
  heading,
  text1,
  text,
  imageUrl,
  imageAlt,
  imageWidth,
  imageHeight,
}) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="flex overflow-hidden flex-col lg:flex-row items-center md:px-8">
      <div data-aos='fade-left' className={`w-${imageWidth}`}>
        <Image
          className="rounded-lg mt-5 mx-10"
          src={imageUrl}
          alt={imageAlt}
          width={imageWidth} // Ensure this is a number
          height={imageHeight} // Ensure this is a number
        />
      </div>
      <div className="flex text-xl lg:w-2/3 flex-col">
        <h1 className="text-3xl font-bold font-sans" data-aos='fade-right'>{heading}</h1>
        <p className="text-gray-700 mt-10 font-sans" data-aos='fade-right'>{text}</p>
        <p className="text-gray-700 font-sans mt-3" data-aos='fade-right'>{text1}</p>
      </div>
      
    </div>
  );
};

export default ContentSection;
