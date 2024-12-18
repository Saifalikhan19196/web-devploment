import React from "react";

const ConsultingPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://wallpapercave.com/wp/wp7098402.jpg')" }}>
        <div className="bg-black bg-opacity-50 h-full flex flex-col items-center justify-center p-8">
          <h1 className="text-5xl font-bold text-white shadow-md mb-2">Consulting Services</h1>
          <p className="text-lg text-white mb-6 text-center max-w-xl">
            Expert guidance to elevate your business. Our team is dedicated to providing personalized solutions for your unique challenges.
          </p>
          <a href="/contact">
            <button className="bg-orange-500 text-white py-3 px-8 rounded-md text-lg shadow-md hover:bg-orange-600 transition duration-300 transform hover:scale-105">
              Get Your Consultation
            </button>
          </a>
        </div>
      </div>


      {/* Consulting Overview */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Why Choose Our Consulting Services?</h2>
        <p className="text-lg text-gray-600 mb-8 text-center">
          We provide expert consulting services tailored to your business needs. Our team of experienced consultants is dedicated to helping you achieve your goals.
        </p>

        {/* Services Offered */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Business Strategy</h3>
            <p className="text-gray-600">
              Our consultants work with you to develop effective business strategies that drive growth and success.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Financial Consulting</h3>
            <p className="text-gray-600">
              We provide financial consulting services to help you optimize your resources and maximize profitability.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">IT Consulting</h3>
            <p className="text-gray-600">
              Our IT consulting services ensure you leverage technology effectively to enhance operations and security.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Elevate Your Business?</h2>
          <p className="text-lg text-gray-600 mb-8">Contact us today to schedule a consultation and discuss how we can assist you.</p>
          <a href="/contact">
            <button className="bg-orange-500 text-white py-3 px-8 rounded-md text-lg shadow-md hover:bg-orange-600 transition">
              Get Started
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ConsultingPage;
