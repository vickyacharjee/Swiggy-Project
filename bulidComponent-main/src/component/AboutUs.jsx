import React from 'react';
import About, { AdditionalContent } from './About';

const AboutUs = () => {
  const services = [
    { name: 'Food', icon: '🍲' }, // Replace with actual images or icons
    { name: 'Instamart', icon: '🛒' },
    { name: 'Dineout', icon: '🍷' },
    { name: 'Genie', icon: '📦' },
    { name: 'Minis', icon: '🎁' },
  ];

  return (
    <div> 
    <section className="bg-gradient-to-b from-gray-100 to-white py-16 text-center relative">
      <h2 className="text-4xl font-bold mb-6">About Us</h2>
      <p className="max-w-md mx-auto text-gray-600 mb-12">
        Swiggy is a new-age consumer-first organization offering an easy-to-use convenience platform, accessible through a unified app.
      </p>
      <div className="flex justify-center items-center gap-10">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="bg-white p-4 rounded-full shadow-lg mb-4">
              <span className="text-3xl">{service.icon}</span>
            </div>
            <span className="text-lg font-medium">{service.name}</span>
          </div>
        ))}
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-orange-500 text-6xl font-bold"></div> {/* Swiggy logo or similar */}
    </section>
    <AdditionalContent/>
    <About/>
    </div>
  );
};

export default AboutUs;
