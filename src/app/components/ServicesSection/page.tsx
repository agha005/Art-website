// Services.js
import React from "react";
import Image from "next/image";
import {
  Consult,
  Digital,
  Ecom,
  Graphic,
  Web,
  Staff,
} from "@/Assets/images/index";

const cards = [
  {
    title: "Web Development",
    description:
      "We create dynamic and responsive websites using React, Next.js, and WordPress to ensure top-notch user experiences. Our solutions are tailored to meet your business needs and deliver exceptional performance.",
    image: Web,
  },
  {
    title: "E-Commerce Solutions",
    description:
      "We build powerful e-commerce platforms that drive sales, utilizing technologies like WooCommerce, Shopify, and custom solutions to enhance your online presence and boost revenue.",
    image: Ecom,
  },
  {
    title: "Digital Marketing",
    description:
      "Our digital marketing strategies, including SEO, social media, and PPC, help businesses reach their target audience effectively, driving engagement and conversions through tailored campaigns.",
    image: Digital,
  },
  {
    title: "Graphic Design",
    description:
      "We deliver creative design solutions for branding, logos, and marketing materials that captivate and engage your audience. Our designs are crafted to reflect your brand’s identity and values.",
    image: Graphic,
  },
  {
    title: "IT Consultation",
    description:
      "Benefit from our IT consultation services, where we provide expert advice and strategic planning to help you navigate complex technology landscapes and achieve your business objectives.",
    image: Consult,
  },
  {
    title: "Staff Augmentation",
    description:
      "Enhance your team with our staff augmentation services, providing you with skilled professionals to meet your project demands and drive your business forward.",
    image: Staff,
  },
];

const Services = () => (
  <section className="py-20 bg-[#EFEAE3]">
    <div className="mx-5">
      <h1 className="text-[2.5rem] font-sans font-bold text-center mb-20">
        Explore Our Services
      </h1>
      <div className="grid mx-auto md:w-full md:grid-cols-2 lg:max-w-none lg:grid-cols-3 gap-5">
        {cards.map((card, index) => (
          <div key={index}>
            <div
              className="relative flex flex-col items-center overflow-hidden font-sans bg-black rounded-xl shadow-xl group"
              data-aos="fade-up"
            >
              <div className="relative bg-opacity-50 w-full h-48 lg:h-[18rem] overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 transform group-hover:scale-110 opacity-50"
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
                <h2 className="text-2xl lg:text-3xl font-bold">{card.title}</h2>
                <p className="text-md lg:text-lg mt-4 hidden md:block">
                  {card.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
