import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="bg-cover bg-center h-screen"
        style={{ backgroundImage: "url('https://wallpaperaccess.com/full/1657878.jpg')" }}
      >
        <div className="bg-black bg-opacity-50 h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl font-bold mb-4">Welcome to Our Website</h1>
            <p className="text-xl mb-6">
              We provide amazing services that help you grow your business. Join us and let's make something great together.
            </p>
            <a href="#services">
              <button className="bg-orange-500 text-white py-3 px-8 rounded-md text-lg shadow-md hover:bg-orange-600 transition">
                Learn More
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Service 1 */}
            <Link to='/web-development'>
              <div className="bg-white p-8 shadow-lg rounded-lg text-center cursor-pointer hover:shadow-xl transition-shadow">
                <svg className="w-16 h-16 text-orange-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17.25l-2.25-2.25 6-6 6 6-2.25 2.25H9.75z" />
                </svg>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Web Development</h3>
                <p className="text-gray-600">
                  We build responsive, functional, and visually appealing websites tailored to your business needs.
                </p>
              </div>
            </Link>

            {/* Service 2 */}
            <Link to="/digital-marketing">
              <div className="bg-white p-8 shadow-lg rounded-lg text-center cursor-pointer hover:shadow-xl transition-shadow">
                <svg className="w-16 h-16 text-orange-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 3.3a1 1 0 00.76 0L21 8M7.67 4.21l3.9 1.73a1 1 0 00.76 0L18.33 4.21M3 16.05l7.89 3.3a1 1 0 00.76 0L21 16.05" />
                </svg>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Marketing Strategy</h3>
                <p className="text-gray-600">
                  Drive growth with customized marketing strategies designed for your unique business model.
                </p>
              </div>
            </Link>

            {/* Service 3 */}
            <Link to="/graphic-design">
              <div className="bg-white p-8 shadow-lg rounded-lg text-center cursor-pointer hover:shadow-xl transition-shadow">
                <svg className="w-16 h-16 text-orange-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.25V7M12 17v2.75M5.2 5.21l1.78 1.78M17.21 17.2l1.78 1.78M4.25 12H7M17 12h2.75M5.21 17.2l1.78 1.78M17.2 5.21l1.78 1.78" />
                </svg>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Graphic Design</h3>
                <p className="text-gray-600">
                  Our design team creates stunning visuals that captivate your audience and elevate your brand.
                </p>
              </div>
            </Link>

          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="py-16 bg-orange-500">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-6">Let us help you turn your ideas into reality. Contact us today!</p>
          <a href="/contact">
            <button className="bg-white text-orange-500 py-3 px-8 rounded-md text-lg shadow-md hover:bg-gray-100 transition">
              Contact Us
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
