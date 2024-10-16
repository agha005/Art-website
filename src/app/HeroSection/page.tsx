import React from 'react';
import Image from "next/image";
import { Background } from '@/Assets/images/image'; // Ensure the path and export are correct

const HeroSection = () => {
  return (
    <div className="flex w-full h-screen"> {/* Full width and height of the screen */}
      {/* Text Section */}
      <div className="flex items-center justify-center w-1/2"> 
        <h1 className="text-black text-4xl font-bold">Hello World</h1>
      </div>
      
      {/* Image Section */}
      <div className="relative w-1/2 top-5 border rounded-[5rem] right-5"> 
        <Image 
          src={Background} 
          alt="Background image" 
          layout="fill" // Makes the image fill the parent container
          objectFit="cover" // Ensures the image covers the entire container
        />
      </div>
    </div>
  );
}

export default HeroSection;
