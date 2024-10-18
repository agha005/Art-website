// Services.js
import React from "react";
import Image from "next/image";
import {
  Cat1,
  Cat2,
  Cat3,
  Cat4,
  Cat5,
  Cat6,
  Cat7,
  Cat8,
  // AnimeCharacters,
} from "@/Assets/images/index"; // Ensure you have the correct image paths

const cards = [
  {
    title: "2D Art",
    description:
      "Explore our stunning 2D art pieces, perfect for illustrations, character design, and game assets. We bring creativity and imagination to life with unique, hand-drawn designs.",
    image: Cat1.src,
  },
  {
    title: "3D Art",
    description:
      "Our 3D art services include high-quality modeling, texturing, and rendering for games, animations, and product visualization. We provide detailed and realistic 3D assets that stand out.",
    image: Cat2.src,
  },
  {
    title: "BRB Screens",
    description:
      "Customize your stream with creative and engaging BRB (Be Right Back) screens that enhance your viewer experience while maintaining your unique brand identity.",
    image: Cat3.src,
  },
  {
    title: "Stream Alerts",
    description:
      "Get personalized stream alerts that notify your audience in style. From follower alerts to donations, we design eye-catching alerts to match your brand.",
    image: Cat4.src,
  },
  {
    title: "Sonic Art",
    description:
      "Dive into the world of Sonic with unique fan art, custom characters, and artwork that captures the essence of this iconic franchise. Perfect for collectors and enthusiasts.",
    image: Cat5.src,
  },
  {
    title: "Custom Characters",
    description:
      "We create custom characters for your games, animations, or personal projects. From concept to creation, our team delivers characters full of personality and creativity.",
    image: Cat6.src,
  },
  {
    title: "Logo Design",
    description:
      "Get a custom-designed logo that perfectly represents your brand. Whether you're a streamer, business, or creative, we craft logos that leave a lasting impression.",
    image: Cat7.src,
  },
  {
    title: "Anime Characters",
    description:
      "Bring your favorite anime characters to life or create original ones with our anime art services. We specialize in creating detailed and vibrant anime-style characters.",
    image: Cat8.src,
  },
];

const Services = () => (
  <section className="py-20 bg-[#EFEAE3]">
    <div className="mx-5">
      <h1 className="text-[2.5rem] font-sans font-bold text-center mb-20">
        Categories
      </h1>
      <div className="grid mx-auto md:w-full md:grid-cols-2 lg:max-w-none lg:grid-cols-4 gap-5">
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
