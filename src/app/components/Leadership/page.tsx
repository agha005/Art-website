import React from 'react';
import { FaUserTie, FaUserCog, FaUserAlt } from 'react-icons/fa';

// Sample data for leadership team
const leaders = [
  {
    name: 'John Doe',
    position: 'CEO',
    bio: 'John leads the company with a vision for innovation and excellence.',
    icon: <FaUserTie className="text-indigo-600 text-5xl" />
  },
  {
    name: 'Jane Smith',
    position: 'CTO',
    bio: 'Jane drives our technology strategy and development.',
    icon: <FaUserCog className="text-green-600 text-5xl" />
  },
  {
    name: 'Alice Johnson',
    position: 'COO',
    bio: 'Alice ensures operational efficiency and smooth execution.',
    icon: <FaUserAlt className="text-purple-600 text-5xl" />
  }
];

const Leadership = () => (
  <section className="py-20 bg-gray-100">
    <div className="container mx-auto text-center">
      <h2 className="text-4xl font-bold mb-12 text-gray-800">Our Leadership Team</h2>
      <div className="grid grid-cols-1 mx-5 lg:mx-0 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {leaders.map((leader, index) => (
          <div
            key={index}
            className="relative bg-white p-6 rounded-lg shadow-lg transition-transform duration-500 transform hover:scale-110 hover:rotate-3"
          >
            <div className="absolute top-[-1rem] left-1/2 transform -translate-x-1/2 z-20 bg-white p-4 rounded-full shadow-md">
              {leader.icon}
            </div>
            <div className="pt-12">
              <h3 className="text-2xl font-semibold mb-2 text-gray-800">{leader.name}</h3>
              <h4 className="text-lg font-medium text-gray-600">{leader.position}</h4>
              <p className="text-gray-700 mt-2">{leader.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Leadership;
