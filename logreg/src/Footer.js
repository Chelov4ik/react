import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-8">
      <div className="container mx-auto text-center">
        <p className="mb-2">&copy; 2024 IDKShop. All rights reserved.</p>
        <div className="space-x-4">
          <a href="/" className="hover:text-gray-300">Privacy Policy</a>
          <a href="/" className="hover:text-gray-300">Terms of Service</a>
          <a href="/" className="hover:text-gray-300">Contact Us</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
