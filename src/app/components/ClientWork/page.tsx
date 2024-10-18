"use client";
import Image from "next/image";
import { useState } from "react";
import "aos/dist/aos.css";
import { Pro1, Pro2, Pro3 } from "@/Assets/images/index"; // Ensure these paths point to your actual images

// Sample data for tabs
const tabsData = [
  {
    id: 1,
    title: "2D Art",
    description:
      "Step into the world of vibrant 2D art that speaks directly to anime fans and gamers alike. From iconic character designs to dynamic action scenes, we craft artwork that captures the essence of your favorite anime and gaming styles. Whether it's for your next anime-inspired project or a fan-favorite gaming character, our illustrations are designed to immerse you in colorful, captivating worlds.",
    image: Pro1, // Replace with actual image import or URL
  },
  {
    id: 2,
    title: "3D Art",
    description:
      "For gaming enthusiasts and fans of 3D animation, our 3D art brings characters and worlds to life with incredible detail. Whether you're a Sonic fan dreaming of high-speed adventures or a gamer seeking to level up your visual experience, we create stunning 3D models, environments, and animations that push the boundaries of imagination. Get ready to experience your favorite characters in a whole new dimension!",
    image: Pro2, // Replace with actual image import or URL
  },
  {
    id: 3,
    title: "Vtuber",
    description:
      "Become the next virtual sensation with custom VTuber avatars that resonate with anime and gaming culture. Whether you're channeling the energetic style of Sonic or the expressive charm of your favorite anime characters, our VTuber designs are made to captivate audiences and bring out your virtual personality. Perfect for streaming, gaming, and live interactions—your audience won’t be able to look away!",
    image: Pro3, // Replace with actual image import or URL
  },
];

const TabsWithImages = () => {
  const [activeTab, setActiveTab] = useState(tabsData[0]); // Default to 'Design' tab

  return (
    <div className="flex flex-col lg:flex-row lg:h-screen p-3">
      {/* Left side with Tabs (will stack above the image on mobile) */}
      <div className="w-full lg:w-1/2 bg-black text-white p-7 rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none">
        {tabsData.map((tab) => (
          <div
            key={tab.id}
            className={`cursor-pointer text-2xl lg:text-4xl font-bold my-3 transition-colors duration-300 ${
              activeTab.id === tab.id
                ? "text-[#3bc6bf] border-l-4 border-[#3bc6bf] pl-4"
                : "text-gray-400"
            }`}
          >
            <button
              onClick={() => setActiveTab(tab)} // OnClick handler to switch the active tab
              className="w-full text-left"
            >
              {tab.title}
            </button>
          </div>
        ))}
        {/* Displaying description based on active tab */}
        <p className="mt-6 lg:mt-10 text-lg lg:text-xl">
          {activeTab.description}
        </p>
      </div>

      {/* Right side with Image (image will be below the tabs on mobile) */}
      <div className="w-full lg:w-1/2 relative">
        <div className="relative w-full h-60 lg:h-full">
          <Image
            src={activeTab.image}
            alt={activeTab.title}
            layout="fill"
            objectFit="cover"
            className="rounded-b-lg lg:rounded-r-lg lg:rounded-bl-none"
          />
        </div>
      </div>
    </div>
  );
};

export default TabsWithImages;
