import React from 'react';
import { FaLightbulb, FaCogs, FaRocket, FaHandshake } from 'react-icons/fa';

const steps = [
  {
    icon: <FaLightbulb className="text-yellow-500 text-6xl" />,
    title: 'Idea & Discovery',
    description: 'We start by understanding your vision and goals, ensuring we capture every detail of your idea.'
  },
  {
    icon: <FaCogs className="text-blue-500 text-6xl" />,
    title: 'Planning & Design',
    description: 'Our team crafts a detailed plan and design, turning your vision into a structured blueprint.'
  },
  {
    icon: <FaRocket className="text-orange-500 text-6xl" />,
    title: 'Development & Execution',
    description: 'We bring the plan to life with robust development and meticulous execution, adhering to the highest standards.'
  },
  {
    icon: <FaHandshake className="text-green-500 text-6xl" />,
    title: 'Launch & Support',
    description: 'After launch, we provide ongoing support to ensure everything runs smoothly and make adjustments as needed.'
  }
];

const OurProcess = () => (
  <section className="py-20 bg-gray-100">
    <div className="container text-center">
      <h2 className="text-4xl font-bold mb-12 text-gray-800">Our Process</h2>
      <div className="flex flex-wrap justify-between lg:mx-0 mx-10 gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            
            className="relative mt-10 lg:mt-0 flex-1 min-w-[250px] max-w-[300px] p-6 rounded-lg bg-white shadow-lg transform-gpu transition-transform duration-700 hover:rotate-x-6 hover:rotate-y-6"
          >
            <div  className="relative flex flex-col items-center text-center h-full p-6">
              {/* Icon positioning */}
              <div className="absolute top-[-4rem] left-1/2 transform -translate-x-1/2 z-20 bg-white p-4 rounded-full shadow-md">
                {step.icon}
              </div>
              {/* Card content */}
              <div data-aos='fade-up' data-aos-duration="800" className="pt-12">
                <h3 className="text-2xl font-semibold mb-2 text-gray-800">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default OurProcess;
