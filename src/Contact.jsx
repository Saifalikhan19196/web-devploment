import React from "react";

const Contact = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Contact Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Contact Form */}
          <div className="bg-white p-8 shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Your Email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                  rows="4"
                  placeholder="Your Message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-orange-600 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-white p-8 shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h2>
            <p className="text-gray-600 mb-6">
              If you have any questions, feel free to reach out to us through any of the methods below.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <svg
                  className="h-6 w-6 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16.8 9.8L21 4l-6.5 2.5c-1.6.6-3.1 1.3-4.7 2.1L7.5 10.7c-.9.4-1.8.7-2.7 1L3 12.5l3 7.5 4.5-1.2c.9-.2 1.8-.6 2.7-1.1l3-1.5 2.5-4.6z"
                  ></path>
                </svg>
                <span className="ml-4 text-lg text-gray-800">+1 (123) 456-7890</span>
              </div>
              <div className="flex items-center">
                <svg
                  className="h-6 w-6 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 16v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M8 10l4 4m0 0l4-4m-4 4V3"
                  ></path>
                </svg>
                <span className="ml-4 text-lg text-gray-800">contact@company.com</span>
              </div>
              <div className="flex items-center">
                <svg
                  className="h-6 w-6 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v8m4-4H8"
                  ></path>
                </svg>
                <span className="ml-4 text-lg text-gray-800">123 Main St, City, Country</span>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-medium text-gray-800 mb-2">Location</h3>
              <div className="w-full h-48 bg-gray-200 rounded-md"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
