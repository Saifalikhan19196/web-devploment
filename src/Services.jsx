import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <Link to="/web-development">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
              <div className="flex justify-center mb-6">
                <svg
                  className="w-16 h-16 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.75 17.25l-2.25-2.25 6-6 6 6-2.25 2.25H9.75z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
                Web Development
              </h3>
              <p className="text-gray-600 text-center">
                We build responsive, functional, and visually appealing websites
                tailored to your business needs.
              </p>
            </div>
          </Link>
          {/* Service 2 */}
          <Link to="/digital-marketing">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
              <div className="flex justify-center mb-6">
                <svg
                  className="w-16 h-16 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 3.3a1 1 0 00.76 0L21 8M7.67 4.21l3.9 1.73a1 1 0 00.76 0L18.33 4.21M3 16.05l7.89 3.3a1 1 0 00.76 0L21 16.05"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
                Digital Marketing
              </h3>
              <p className="text-gray-600 text-center">
                Drive growth with customized marketing strategies designed for
                your business.
              </p>
            </div>
          </Link>
          {/* Service 3 */}
          <Link to="/graphic-design">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
              <div className="flex justify-center mb-6">
                <svg
                  className="w-16 h-16 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4.25V7M12 17v2.75M5.2 5.21l1.78 1.78M17.21 17.2l1.78 1.78M4.25 12H7M17 12h2.75M5.21 17.2l1.78 1.78M17.2 5.21l1.78 1.78"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
                Graphic Design
              </h3>
              <p className="text-gray-600 text-center">
                Our design team creates stunning visuals that captivate your
                audience and elevate your brand.
              </p>
            </div>
          </Link>

          {/* Service 4 */}
          <Link to="/consulting">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
              <div className="flex justify-center mb-6">
                <svg
                  className="w-16 h-16 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M12 18h0"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
                Consulting
              </h3>
              <p className="text-gray-600 text-center">
                We provide professional consulting services to help your business
                thrive.
              </p>
            </div>
          </Link>
          {/* Service 5 */}
          <Link to='/appdevelopment'>
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
            <div className="flex justify-center mb-6">
              <svg
                className="w-16 h-16 text-orange-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 10l4.94 4.94a.75.75 0 010 1.06L16.06 19a.75.75 0 01-1.06 0L10 14.94a.75.75 0 010-1.06L14.94 9a.75.75 0 011.06 0z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
              App Development
            </h3>
            <p className="text-gray-600 text-center">
              Build innovative mobile applications that give you an edge in the
              market.
            </p>
          </div>
          </Link>
          {/* Service 6 */}
          <Link to='/seooptimization'>
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
            <div className="flex justify-center mb-6">
              <svg
                className="w-16 h-16 text-orange-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4v1m0 14v1m-8-8h1m14 0h1M5.64 5.64l.7.7m12.02 12.02l.7.7M4 12h0"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
              SEO Optimization
            </h3>
            <p className="text-gray-600 text-center">
              Boost your website's visibility and drive traffic with our
              expert-level SEO services.
            </p>
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
