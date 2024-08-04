import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="container mx-auto py-8 px-6">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">About Us</h1>
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl mx-auto">
        <img 
          src="/idk.jpg" 
          alt="Team" 
          className="w-full h-64 object-cover rounded mb-6" 
        />
        <p className="text-gray-700 mb-6 text-lg">
          Welcome to <span className="font-bold">IDKShop</span>! We are a passionate team dedicated to providing the best products and services to our customers.
        </p>
        <p className="text-gray-700 mb-6 text-lg">
          Our mission is to deliver high-quality products at affordable prices. We believe in customer satisfaction and strive to meet and exceed expectations.
        </p>
        <p className="text-gray-700 mb-6 text-lg">
          Founded in 2024, <span className="font-bold">IDKShop</span> has grown rapidly and continues to expand. We are committed to innovation and continuous improvement to better serve our community.
        </p>
        <p className="text-gray-700 mb-6 text-lg">
          Our team is composed of experienced professionals from diverse backgrounds, all working together to bring you the best shopping experience. We are constantly updating our product catalog to ensure we meet the ever-changing needs of our customers.
        </p>
        <p className="text-gray-700 mb-6 text-lg">
          We believe in giving back to the community and regularly participate in various social initiatives. Our goal is not just to be a successful business but also to make a positive impact on society.
        </p>
        <p className="text-gray-700 mb-6 text-lg">
          Thank you for choosing <span className="font-bold">IDKShop</span>. We are excited to have you as part of our family and look forward to serving you!
        </p>
        <Link to="/" className="block text-center mt-8">
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300">
            Go to Catalog
          </button>
        </Link>
      </div>
    </div>
  );
}

export default AboutUs;
