import React from 'react';
import { FaShippingFast, FaDraftingCompass, FaDollarSign, FaRegThumbsUp } from 'react-icons/fa';

const steps = [
  {
    icon: <FaShippingFast className="text-[#3bc6bf] text-6xl" />,
    title: 'Fast Delivery',
    description: 'We pride ourselves on delivering projects on time, without compromising on quality. Speed and efficiency are our top priorities.'
  },
  {
    icon: <FaDraftingCompass className="text-[#3bc6bf] text-6xl" />,
    title: 'Quality Design',
    description: 'Our design team ensures that every detail is thoughtfully crafted, creating stunning visuals and user experiences that stand out.'
  },
  {
    icon: <FaDollarSign className="text-[#3bc6bf] text-6xl" />,
    title: 'Affordable Upfront Costs',
    description: 'We offer competitive pricing with transparent upfront costs, ensuring that high-quality service is accessible without breaking the bank.'
  },
  {
    icon: <FaRegThumbsUp className="text-[#3bc6bf] text-6xl" />,
    title: 'Trusted by Clients',
    description: 'With a proven track record of client satisfaction, we build long-term relationships based on trust, reliability, and excellent results.'
  }
];

const OurProcess = () => (
  <section className="py-20">
    <div className="container text-center">
      <h2 className="text-4xl font-bold mb-12 text-gray-800">Why Choose Us</h2>
      <div className="flex flex-wrap justify-between lg:mx-0 mx-10 gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="relative mt-10 lg:mt-0 flex-1 min-w-[250px] max-w-[300px] p-6 rounded-lg bg-white shadow-lg transform-gpu transition-transform duration-700 hover:rotate-x-6 hover:rotate-y-6"
          >
            <div className="relative flex flex-col items-center text-center h-full p-6">
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
