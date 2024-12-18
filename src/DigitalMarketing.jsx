import React from 'react';

const DigitalMarketing = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        {/* Page Title */}
        <div className='bg-gray-800 py-8'>
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          Digital Marketing Services
        </h1>

        {/* Introduction */}
        <div className="text-center max-w-2xl mx-auto mb-12 ">
          <p className="text-white text-lg">
            At Saif's Digital Marketing, we help businesses grow online by
            leveraging powerful strategies such as SEO, Social Media Marketing,
            and Content Creation. Our goal is to drive meaningful results for
            your business in the digital space.
          </p>
        </div>
        </div>
        {/* Service Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 mt-10">
          {/* SEO Optimization */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              SEO Optimization
            </h3>
            <p className="text-gray-600">
              Improve your website’s visibility in search engines and drive more
              traffic with our expert SEO strategies.
            </p>
          </div>

          {/* Social Media Marketing */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Social Media Marketing
            </h3>
            <p className="text-gray-600">
              Connect with your audience on platforms like Facebook, Instagram,
              and LinkedIn to build brand awareness and engagement.
            </p>
          </div>

          {/* Content Creation */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Content Creation
            </h3>
            <p className="text-gray-600">
              We create high-quality content that resonates with your audience,
              from blog posts to infographics and video content.
            </p>
          </div>

          {/* Paid Advertising */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Paid Advertising (PPC)
            </h3>
            <p className="text-gray-600">
              Run targeted ad campaigns on Google, Facebook, and other platforms
              to drive traffic, leads, and conversions quickly.
            </p>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-gray-800 text-white py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold text-center mb-8">
              Why Choose Our Digital Marketing Services?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Benefit 1 */}
              <div className="text-center">
                <svg
                  className="w-12 h-12 mx-auto mb-4 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4"
                  />
                </svg>
                <h3 className="text-xl font-semibold">Experienced Team</h3>
                <p className="mt-2 text-gray-300">
                  Our digital marketing experts have years of experience in the
                  industry and use cutting-edge techniques.
                </p>
              </div>

              {/* Benefit 2 */}
              <div className="text-center">
                <svg
                  className="w-12 h-12 mx-auto mb-4 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 9V7a4 4 0 00-4-4H9a4 4 0 00-4 4v10a4 4 0 004 4h4a4 4 0 004-4v-2"
                  />
                </svg>
                <h3 className="text-xl font-semibold">Proven Results</h3>
                <p className="mt-2 text-gray-300">
                  We have a track record of delivering results that help
                  businesses grow and reach their goals.
                </p>
              </div>

              {/* Benefit 3 */}
              <div className="text-center">
                <svg
                  className="w-12 h-12 mx-auto mb-4 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8h18M3 16h18"
                  />
                </svg>
                <h3 className="text-xl font-semibold">Customized Strategies</h3>
                <p className="mt-2 text-gray-300">
                  We create personalized marketing strategies tailored to your
                  specific business needs and goals.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Ready to Elevate Your Digital Marketing?
          </h2>
          <p className="text-gray-600 mb-8">
            Get in touch with us today and take your online presence to the next
            level!
          </p>
          <a
            href="/contact"
            className="bg-orange-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-orange-600 transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default DigitalMarketing;
