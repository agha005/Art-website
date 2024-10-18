'use client'
import React, { useEffect, useState } from 'react';
import { Card1 } from '@/Assets/images';
import Image from 'next/image'; // Ensure to import Image from Next.js

// Sample data for the offer
const content = {
  title: 'Exclusive Offer!',
  description: 'Buy One Get One Free Offer!',
  image: Card1, // Replace with your image path
};

const OfferWithTimer = () => {
  // Timer state in seconds (for example, 3 days = 3 * 24 * 60 * 60 seconds)
  const [timeLeft, setTimeLeft] = useState(3 * 24 * 60 * 60); // 3 days countdown

  // Countdown effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeLeft / (24 * 60 * 60));
  const hours = Math.floor((timeLeft % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((timeLeft % (60 * 60)) / 60);
  const seconds = timeLeft % 60;

  return (
    <section className="flex lg:flex-row flex-col py-20 bg-gray-100">
      {/* Image Section */}
      <div className="lg:w-1/2 flex items-center justify-center">
        <div className="relative w-full mx-10 h-96">
          <Image
            src={content.image}
            alt={content.title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Offer and Timer Section */}
      <div className="lg:w-1/2 flex flex-col items-start justify-center p-8">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">{content.title}</h2>
        <p className="mb-6 text-lg text-gray-700">{content.description}</p>
        <div className="text-2xl font-semibold mb-2">
          Time Left: {days}d {hours}h {minutes}m {seconds}s
        </div>
      </div>
    </section>
  );
};

export default OfferWithTimer;
