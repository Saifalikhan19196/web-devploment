import React from "react";

const WebDevelopment = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        {/* Page Title */}
        <div className="bg-gray-800 py-8">
        <h1 className="text-5xl font-bold text-white text-center mb-8">
          Web Development Services
        </h1>

        {/* Introduction */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-white text-lg leading-relaxed">
            At Saif's Web Development Services, we specialize in creating high-quality, responsive, and functional websites tailored to your business needs. Our team ensures that your site not only looks great, but also performs efficiently across all devices.
          </p>
        </div>
        </div>
        {/* Service Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 mt-10">
          {/* Responsive Design */}
          <div className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Responsive Design</h3>
            <p className="text-gray-600">
              We ensure that your website is fully responsive, meaning it will work seamlessly across all devices, from desktop computers to smartphones.
            </p>
          </div>

          {/* Front-end Development */}
          <div className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Front-end Development</h3>
            <p className="text-gray-600">
              Our team builds interactive and visually appealing user interfaces using modern frameworks like React, Angular, and Vue.js, combined with Tailwind CSS for rapid styling.
            </p>
          </div>

          {/* Back-end Development */}
          <div className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Back-end Development</h3>
            <p className="text-gray-600">
              We provide robust and secure back-end solutions using technologies like Node.js, Express, and MongoDB to power your web applications.
            </p>
          </div>

          {/* E-commerce Solutions */}
          <div className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">E-commerce Solutions</h3>
            <p className="text-gray-600">
              Our e-commerce platforms provide secure, fast, and user-friendly solutions to help you sell products online, with integrated payment gateways and inventory management systems.
            </p>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-gray-800 text-white py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold text-center mb-8">Why Choose Our Web Development Services?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Benefit 1 */}
              <div className="text-center transition-transform transform hover:scale-105">
                <svg
                  className="w-16 h-16 mx-auto mb-4 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4" />
                </svg>
                <h3 className="text-xl font-semibold">Expert Team</h3>
                <p className="mt-2 text-gray-300">Our experienced developers are experts in the latest technologies, ensuring your project is in capable hands.</p>
              </div>

              {/* Benefit 2 */}
              <div className="text-center transition-transform transform hover:scale-105">
                <svg
                  className="w-16 h-16 mx-auto mb-4 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a4 4 0 00-4-4H9a4 4 0 00-4 4v10a4 4 0 004 4h4a4 4 0 004-4v-2" />
                </svg>
                <h3 className="text-xl font-semibold">Modern Technologies</h3>
                <p className="mt-2 text-gray-300">We stay updated with the latest development frameworks and tools, giving you a competitive edge.</p>
              </div>

              {/* Benefit 3 */}
              <div className="text-center transition-transform transform hover:scale-105">
                <svg
                  className="w-16 h-16 mx-auto mb-4 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8h18M3 16h18" />
                </svg>
                <h3 className="text-xl font-semibold">Custom Solutions</h3>
                <p className="mt-2 text-gray-300">Every business is unique. We create custom solutions tailored to meet your specific needs and goals.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Build Your Website?</h2>
          <p className="text-gray-600 mb-8">Contact us today to start your web development project!</p>
          <a
            href="/contact"
            className="bg-orange-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-orange-600 transition duration-300"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default WebDevelopment;
