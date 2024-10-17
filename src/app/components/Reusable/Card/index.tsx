import React from 'react';
import { IconType } from 'react-icons'; // Import IconType for type checking

interface CardProps {
  title: string;
  description: string;
  icon: IconType; // Icon component
}

const Card: React.FC<CardProps> = ({ title, description, icon: Icon }) => {
  return (
    <div className="card p-6 bg-white shadow-md rounded-lg flex flex-col items-center">
      <Icon size={40} className="text-[#6cd6d1] mb-4" />
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Card;
