import React from 'react';

const Footer = () => {
  return (
    <footer id="footer" className="bg-black text-white py-16">
      {/* Navigation and Newsletter Section */}
      <div className="footer-nav flex flex-col lg:flex-row justify-between items-center px-8 lg:px-16">
        
        {/* Navigation Links with Artistic Hover Effect */}
        <ul className="space-y-4 mb-8 lg:mb-0 lg:space-y-0 lg:space-x-8 flex flex-col lg:flex-row">
          <li><a href="#" className="text-xl font-semibold hover:text-[#56ece5]-400 transition duration-300 transform hover:scale-110">Home</a></li>
          <li><a href="https://www.instagram.com/dev.dot.code?igsh=OWxpNHE0cnkyb3Fp" className="text-xl font-semibold hover:text-pink-400 transition duration-300 transform hover:scale-110">Contact</a></li>
        </ul>

        {/* Newsletter Section with Artistic Text Styling */}
        <div className="text-center lg:text-left max-w-lg">
          <p className="text-lg lg:text-xl italic text-gray-300">
            Get the latest in creative insights and inspiration delivered to your inbox.
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom mt-12 text-center">
        
        {/* Artistic Heading with Brushstroke Style */}
        <h1 className="text-6xl lg:text-8xl font-bold text-[#56ece5] relative inline-block">
          Artlify
          <span className="absolute -z-10 left-0 bottom-1 w-full h-2 bg-gradient-to-r from-purple-500 to-pink-400 transform rotate-2"></span>
        </h1>

        {/* Links and Copyright */}
        <div className="links flex flex-col lg:flex-row justify-between items-center mt-8 space-y-4 lg:space-y-0 lg:space-x-8">
          <span className="text-gray-400">&copy; 2024 Artlify | All rights reserved.</span>
          <a href="https://www.instagram.com/dev.dot.code?igsh=OWxpNHE0cnkyb3Fp" className="text-white text-lg hover:text-[#56ece5] transition duration-300">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
