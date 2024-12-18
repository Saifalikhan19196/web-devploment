import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Company Info */}
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-bold text-white">Saif's Portfolio</h2>
            <p className="mt-4 text-gray-400">
              Building high-quality web applications and providing services to
              help your business grow.
            </p>
          </div>

          {/* Links */}
          <div className="flex justify-between space-x-8">
            <div>
              <h3 className="font-semibold text-white">Company</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="/" className="hover:text-orange-500 transition">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:text-orange-500 transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="/services" className="hover:text-orange-500 transition">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-orange-500 transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white">Legal</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="/privacy" className="hover:text-orange-500 transition">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms" className="hover:text-orange-500 transition">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-8 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M24 4.557a9.993 9.993 0 01-2.828.775A4.94 4.94 0 0023.337 3.1a9.866 9.866 0 01-3.127 1.194 4.918 4.918 0 00-8.38 4.482A13.961 13.961 0 011.671 3.149a4.921 4.921 0 001.523 6.572A4.888 4.888 0 01.96 9.025v.063a4.914 4.914 0 003.95 4.806 4.904 4.904 0 01-2.212.084 4.923 4.923 0 004.599 3.417A9.864 9.864 0 010 19.539a13.945 13.945 0 007.548 2.211c9.058 0 14.012-7.509 14.012-14.012 0-.213-.005-.425-.014-.637A9.993 9.993 0 0024 4.557z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.408.593 24 1.325 24H12.82v-9.294H9.692V11.29h3.128V8.417c0-3.1 1.894-4.788 4.66-4.788 1.325 0 2.463.098 2.794.143v3.24H17.69c-1.509 0-1.8.718-1.8 1.769v2.32h3.6l-.468 3.417h-3.132V24h6.143C23.407 24 24 23.408 24 22.676V1.325C24 .593 23.407 0 22.675 0z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2.163c-5.522 0-10 4.478-10 10 0 5.522 4.478 10 10 10s10-4.478 10-10c0-5.522-4.478-10-10-10zm0 18.311a8.313 8.313 0 110-16.625 8.313 8.313 0 010 16.625zm4.688-12.812c-.607 0-1.096.489-1.096 1.096s.489 1.096 1.096 1.096 1.096-.489 1.096-1.096-.489-1.096-1.096-1.096zm-4.688 1.375c-2.485 0-4.5 2.014-4.5 4.5s2.014 4.5 4.5 4.5 4.5-2.014 4.5-4.5-2.014-4.5-4.5-4.5zm0 7.063a2.563 2.563 0 110-5.125 2.563 2.563 0 010 5.125z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 mt-8">
          &copy; {new Date().getFullYear()} Saif's Portfolio. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
