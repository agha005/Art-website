import React from 'react';

const Footer = () => {
  return (
    <footer id="footer" className="bg-black text-white py-16">
      <div className="footer-nav flex justify-between px-16">
        <ul className="space-y-4">
          <li><a href="#" className="text-2xl font-bold">Home</a></li>
          <li><a href="https://www.instagram.com/dev.dot.code?igsh=OWxpNHE0cnkyb3Fp" className="text-2xl font-bold">Contact</a></li>
        </ul>
        <div>
          <p className="text-xl">Get industry insights and creative inspiration straight to your inbox.</p>
        </div>
      </div>
      <div className="footer-bottom mt-12 text-center">
        <h1 className="text-9xl font-bold">Dev Dot Code</h1>
        <div className="links flex justify-between mt-8">
          <span>&copy; 2024 devdotcode | All rights reserved.</span>
          <a href="https://www.instagram.com/dev.dot.code?igsh=OWxpNHE0cnkyb3Fp" className="text-white">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
