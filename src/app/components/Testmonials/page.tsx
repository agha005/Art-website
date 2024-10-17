// Testimonials.js
import React from "react";
import { FaStar } from "react-icons/fa";

// Array of testimonials
const testimonials = [
  {
    id: 1,
    quote:
      "Tech Tonic Solutions transformed our website and improved our online presence. The team was professional, efficient, and exceeded our expectations!",
    author: "Sarah, E-commerce Business Owner",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "Their digital marketing strategies have significantly increased our traffic and conversion rates. Highly recommended!",
    author: "Mike, CEO of a Startup",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "The team at Tech Tonic Solutions delivered exceptional results for our WordPress site. Great communication and technical expertise.",
    author: "Emily, Freelance Photographer",
    rating: 5,
  },
];

const Testimonials = () => (
  <section className="py-20 bg-[#EFEAE3]">
    <div className="container mx-auto">
      <h2 className="text-[2rem] lg:text-[3rem] font-bold text-center mb-10">
        What Our Clients Say
      </h2>
      <div className="grid grid-cols-1 mx-5 lg:mx-0 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-orange-200 p-6 rounded-lg shadow-lg"
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
