import React from 'react';

const GraphicDesign = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        {/* Page Title */}
        <h1 className="text-5xl font-bold text-gray-800 text-center mb-8">
          Graphic Design Services
        </h1>

        {/* Introduction */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-gray-600 text-xl">
            At Saif's Graphic Design, we bring your ideas to life with stunning visuals, unique designs, and creative branding. From logos to marketing materials, we ensure every piece of design aligns with your business goals.
          </p>
        </div>

        {/* Design Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Logo Design */}
          <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
            <img
              src="https://th.bing.com/th/id/OIP.YBpXSFpgZNTEKo-yQ8_DNQHaEK?rs=1&pid=ImgDetMain"
              alt="Logo Design"
              className="w-24 h-24 mx-auto mb-4"
            />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Logo Design
            </h3>
            <p className="text-gray-600">
              We create memorable and impactful logos that reflect the essence of your brand.
            </p>
          </div>

          {/* Branding */}
          <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
            <img
              src="https://th.bing.com/th/id/R.d07a63c7e0f643ca935a5f10fbd20195?rik=BHx8BaRYWgn1wA&riu=http%3a%2f%2fwebneel.com%2fdaily%2fsites%2fdefault%2ffiles%2fimages%2fdaily%2f07-2013%2f10-bons-branding-identity-design.jpg&ehk=EflqYmRsLG9r4ko2qaDsCu9XUHi5n76a2fgHWTTU%2bn4%3d&risl=&pid=ImgRaw&r=0"
              alt="Branding"
              className="w-24 h-24 mx-auto mb-4"
            />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Branding & Identity
            </h3>
            <p className="text-gray-600">
              We craft comprehensive brand identities that leave a lasting impression.
            </p>
          </div>

          {/* Marketing Materials */}
          <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
            <img
              src="https://www.spiralytics.com/wp-content/uploads/2020/05/Branded-Promotional-Material1.png"
              alt="Marketing Materials"
              className="w-24 h-24 mx-auto mb-4"
            />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Marketing Materials
            </h3>
            <p className="text-gray-600">
              From brochures to social media posts, we design everything you need to promote your business.
            </p>
          </div>

          {/* UI/UX Design */}
          <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2e948896757753.5eb58c727d672.png"
              alt="UI/UX Design"
              className="w-24 h-24 mx-auto mb-4"
            />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              UI/UX Design
            </h3>
            <p className="text-gray-600">
              We design user-friendly interfaces that are visually appealing and highly functional.
            </p>
          </div>

          {/* Print Design */}
          <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
            <img
              src="https://th.bing.com/th/id/R.3d87e98447fde0a8b33c3a043d54e7e1?rik=SrrAXWaVp7Ituw&riu=http%3a%2f%2fcolourcopycentre.ie%2fwp-content%2fuploads%2f2020%2f11%2fprinting.jpg&ehk=O8KdnMpzymSfE%2b2GZFWT1NUXJgWncMB5WReYXzaC3GU%3d&risl=&pid=ImgRaw&r=0"
              alt="Print Design"
              className="w-24 h-24 mx-auto mb-4"
            />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Print Design
            </h3>
            <p className="text-gray-600">
              Stunning designs for print, including business cards, flyers, and posters.
            </p>
          </div>

          {/* Packaging Design */}
          <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
            <img
              src="https://2.bp.blogspot.com/-6m_vXrWVVDk/VIrBApnKKiI/AAAAAAAB0BI/rGWCprt_KNA/s1600/sunrise-07.jpg"
              alt="Packaging Design"
              className="w-24 h-24 mx-auto mb-4"
            />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Packaging Design
            </h3>
            <p className="text-gray-600">
              We create eye-catching packaging that attracts attention and enhances your product’s appeal.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Ready to Transform Your Brand with Stunning Designs?
          </h2>
          <p className="text-gray-600 mb-8">
            Let us help you create impactful visuals that resonate with your audience. Contact us today for a custom design solution!
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

export default GraphicDesign;
