import React from "react";

const AppDevelopment = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://th.bing.com/th/id/OIP.VYkaaFAyVQoc5F7CXSEQIQHaDS?rs=1&pid=ImgDetMain')" }}>
        <div className="bg-black bg-opacity-60 h-full flex flex-col items-center justify-center p-8">
          <h1 className="text-5xl font-bold text-white mb-2">App Development Services</h1>
          <p className="text-lg text-white mb-6 text-center max-w-xl">
            Transform your ideas into user-friendly mobile applications. Our dedicated team delivers innovative solutions tailored to your needs.
          </p>
          <a href="/contact">
            <button className="bg-orange-500 text-white py-3 px-8 rounded-md text-lg shadow-md hover:bg-orange-600 transition duration-300">
              Start Your Project
            </button>
          </a>
        </div>
      </div>

      {/* Key Features Section */}
      <div className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Why Choose Our App Development Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 shadow-lg rounded-lg text-center">
              <svg className="w-16 h-16 text-orange-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18v18H3V3z" />
              </svg>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Custom Solutions</h3>
              <p className="text-gray-600">We build custom applications tailored to your business needs, ensuring a perfect fit.</p>
            </div>
            {/* Feature 2 */}
            <div className="bg-white p-8 shadow-lg rounded-lg text-center">
              <svg className="w-16 h-16 text-orange-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M3 14h18M3 18h18M3 6h18" />
              </svg>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">User-Centric Design</h3>
              <p className="text-gray-600">Our designs focus on the user experience, making apps easy to navigate and engaging.</p>
            </div>
            {/* Feature 3 */}
            <div className="bg-white p-8 shadow-lg rounded-lg text-center">
              <svg className="w-16 h-16 text-orange-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9h8M8 15h8M6 9h.01M6 15h.01M3 9h.01M3 15h.01" />
              </svg>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Agile Development</h3>
              <p className="text-gray-600">We utilize agile methodologies to adapt to changes quickly and efficiently.</p>
            </div>
          </div>
        </div>
      </div>

      {/* App Development Process */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Development Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">1. Discovery</h3>
              <p className="text-gray-600">We gather requirements and understand your business objectives.</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">2. Design</h3>
              <p className="text-gray-600">Our designers create wireframes and prototypes for your app.</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">3. Development</h3>
              <p className="text-gray-600">We develop your app using the latest technologies and best practices.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 shadow-lg rounded-lg">
              <p className="text-gray-600 mb-4">"The team delivered an outstanding app that exceeded our expectations!"</p>
              <p className="font-bold">- Ravi sir</p>
            </div>
            <div className="bg-white p-8 shadow-lg rounded-lg">
              <p className="text-gray-600 mb-4">"Their attention to detail and commitment to quality made all the difference."</p>
              <p className="font-bold">- Javed sir</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="py-16 bg-orange-500">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Build Your App?</h2>
          <p className="text-lg mb-6">Contact us today to discuss your app development needs!</p>
          <a href="/contact">
            <button className="bg-white text-orange-500 py-3 px-8 rounded-md text-lg shadow-md hover:bg-gray-100 transition duration-300">
              Get in Touch
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AppDevelopment;
