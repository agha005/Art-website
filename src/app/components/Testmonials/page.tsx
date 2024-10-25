// Testimonials.js
import React from "react";
import { FaStar } from "react-icons/fa";

// Array of testimonials with art-related reviews
const testimonials = [
  {
    id: 1,
    quote:
      "Artify Studio captured the essence of our brand perfectly. The custom illustrations brought our vision to life in a way we never imagined!",
    author: "Jessica, Art Director at a Design Agency",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "Their graphic design work for our exhibition was absolutely stunning. The attention to detail and creative execution were top-notch.",
    author: "Liam, Curator of Contemporary Art Museum",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "The team at Artify transformed our digital presence with their incredible animations. Our social media engagement has skyrocketed since!",
    author: "Olivia, Social Media Manager at an Art Gallery",
    rating: 5,
  },
];

const Testimonials = () => (
  <section className="py-20 bg-[#272727] bg-opacity-85">
    <div className="container mx-auto">
      <h2 className="text-[2rem] lg:text-[3rem] font-bold text-center mb-10 text-white neontext">
        What Our Clients Say
      </h2>
      <div className="grid grid-cols-1 mx-5 lg:mx-0 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-[#000000] p-6 text-white rounded-lg shadow-lg"
          >
            <p className="text-lg mb-4">{testimonial.quote}</p>
            <p className="font-bold mb-2">{testimonial.author}</p>
            <div className="flex items-center">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <FaStar key={i} className="text-yellow-400" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
