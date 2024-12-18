// src/HeroSection.js

import React from 'react';

const HeroSection = () => {
    return (
        <div className="relative bg-gray-900 text-white flex items-center justify-center h-screen">
            <div className="absolute inset-0">
                {/* Background Image */}
                <img 
                    src="https://wallpaperaccess.com/full/2945044.jpg" 
                    alt="Hero Background" 
                    className="object-cover w-full h-full opacity-30" 
                />
            </div>
            <div className="relative z-10 text-center p-8">
                <h1 className="text-5xl md:text-6xl font-bold mb-4">Welcome to Saif's World</h1>
                <p className="text-lg md:text-xl mb-8">Explore the beauty of nature and the adventures that await you.</p>
                <a 
                    href="#explore" 
                    className="bg-red-600 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-red-500 transition"
                >
                    Explore Now
                </a>
            </div>
        </div>
    );
};

export default HeroSection;
