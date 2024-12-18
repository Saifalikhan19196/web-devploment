import React from "react";

const SEOOptimization = () => {
  return (
    <div>
      {/* Hero Section */}
      <header className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://img.freepik.com/premium-photo/seo-search-engine-optimization-business-concept_31965-4355.jpg')" }}>
        <div className="bg-black bg-opacity-60 h-full flex flex-col items-center justify-center p-8">
          <h1 className="text-5xl font-bold text-white mb-2" itemProp="name">SEO Optimization Services</h1>
          <p className="text-lg text-white mb-6 text-center max-w-xl" itemProp="description">
            Enhance your online presence and drive organic traffic with our expert SEO services tailored to your business.
          </p>
          <a href="/contact" itemProp="url">
            <button className="bg-orange-500 text-white py-3 px-8 rounded-md text-lg shadow-md hover:bg-orange-600 transition duration-300">
              Get Started Today
            </button>
          </a>
        </div>
      </header>

      {/* Key Features Section */}
      <section className="py-16 bg-gray-100" itemProp="service">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Why Choose Our SEO Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 shadow-lg rounded-lg text-center">
              <svg className="w-16 h-16 text-orange-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18v18H3V3z" />
              </svg>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4" itemProp="name">Comprehensive Audits</h3>
              <p className="text-gray-600" itemProp="description">In-depth website audits to identify areas for improvement and optimization.</p>
            </div>
            {/* Feature 2 */}
            <div className="bg-white p-8 shadow-lg rounded-lg text-center">
              <svg className="w-16 h-16 text-orange-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M3 14h18M3 18h18M3 6h18" />
              </svg>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4" itemProp="name">Keyword Research</h3>
              <p className="text-gray-600" itemProp="description">Target the right audience with extensive keyword research and analysis.</p>
            </div>
            {/* Feature 3 */}
            <div className="bg-white p-8 shadow-lg rounded-lg text-center">
              <svg className="w-16 h-16 text-orange-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h8M8 12h8m-8 5h8" />
              </svg>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4" itemProp="name">On-Page SEO</h3>
              <p className="text-gray-600" itemProp="description">Optimize your website's content, meta tags, and structure for better rankings.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-16 bg-white" itemProp="service">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our SEO Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4" itemProp="name">1. Discovery</h3>
              <p className="text-gray-600" itemProp="description">We analyze your current SEO status and set clear goals for improvement.</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4" itemProp="name">2. Strategy</h3>
              <p className="text-gray-600" itemProp="description">Develop a customized SEO strategy based on industry trends and competition.</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4" itemProp="name">3. Execution</h3>
              <p className="text-gray-600" itemProp="description">Implementing strategies and optimizing your website for better visibility.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-100" itemProp="review">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Client Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 shadow-lg rounded-lg">
              <p className="text-gray-600 mb-4">"The SEO services significantly improved our website's traffic and rankings!"</p>
              <p className="font-bold">- John Doe</p>
            </div>
            <div className="bg-white p-8 shadow-lg rounded-lg">
              <p className="text-gray-600 mb-4">"Their team is professional and knowledgeable. Highly recommended!"</p>
              <p className="font-bold">- Jane Smith</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <footer className="py-16 bg-orange-500">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Boost Your SEO?</h2>
          <p className="text-lg mb-6">Contact us today to discuss your SEO strategy and goals!</p>
          <a href="/contact" itemProp="url">
            <button className="bg-white text-orange-500 py-3 px-8 rounded-md text-lg shadow-md hover:bg-gray-100 transition duration-300">
              Get in Touch
            </button>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default SEOOptimization;
