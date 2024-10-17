"use client";
import Image from "next/image";
import { useState } from "react";
import "aos/dist/aos.css";
import { Leader, Lead, Lacker } from "@/Assets/images/index"; // Ensure these paths point to your actual images

// Sample data for tabs
const tabsData = [
  {
    id: 1,
    title: "Design",
    description:
      "We collaborate closely with you to translate your ideas into a tangible design that aligns with your vision and objectives. Our expert design team takes a user-centered approach, ensuring that every aspect of the design reflects both creativity and functionality",
    image: Leader, // Replace with actual image import or URL
  },
  {
    id: 2,
    title: "Project",
    description:
      "Our experienced project management team takes charge of keeping your project organized, on schedule, and within budget. We understand the importance of timely delivery, which is why we focus on clear communication, regular updates, and proactive problem-solving.",
    image: Lead, // Replace with actual image import or URL
  },
  {
    id: 3,
    title: "Execution",
    description:
      "We support you throughout the entire project lifecycle, from planning and initiation to successful completion. Our team is hands-on during the execution phase, ensuring that every task is carried out to the highest standard. We manage all aspects of production and design implementation",
    image: Lacker, // Replace with actual image import or URL
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
                ? "text-orange-500 border-l-4 border-orange-500 pl-4"
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
