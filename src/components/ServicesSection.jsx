// src/components/ServicesSection.jsx
import React from 'react';

const ServicesSection = () => {
  // Data for service cards, now including only the four requested services
  const services = [
    {

      title: 'Academy',
      description: 'Your Journey to Skill Enhancement & Continuous Learning',
      imageUrl: 'https://www.livemint.com/lm-img/img/2024/07/01/600x338/domenico-loia-hGV2TfOh0ns-unsplash_1719824619472_1719824632753.jpg'
    },
    {
  
      title: 'Marketplace',
      description: 'Connect, Collaborate, & Create Opportunities with Ease',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjqSAXpz57qVg3R63qv1TYLM0WVHHGs28oYA&s'
    },
    {
      title: 'Smart Registration',
      description: 'Seamless Onboarding & Instant Access to Resources',
      imageUrl: 'https://siassistance.com/sia/img/smart-delay/smart-delay-16.png'
    },
    {
     
      title: 'Employers',
      description: 'Find Your Fit, Your Way: Connect with Top Talent',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbPnlVTwbkGu78LCrzoVqngCVb-McRmLH9nA&s'
    },
  ];

  return (
    <section className="p-6 md:p-12 m-4 md:m-8 bg-white shadow-lg rounded-xl transform transition-all duration-300 hover:shadow-xl">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-10 text-[#2B1C50] bg-gradient-to-r from-purple-50 to-pink-50 p-3 rounded-lg shadow-inner">
        Our Services, Your Growth
      </h2>

      {/* Grid for 2 columns on medium and larger screens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            // Adjusted className to make cards more square by setting a fixed height
            className="relative flex flex-col items-center justify-center p-8 rounded-2xl shadow-md border border-gray-200 overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:border-purple-300 hover:-translate-y-1 group h-[300px]" // Changed min-h to fixed h
          >
            {/* Background Image Layer */}
            <div
              className="absolute inset-0 bg-cover bg-center rounded-2xl transition-transform duration-300 group-hover:scale-105"
              style={{ backgroundImage: `url(${service.imageUrl})` }}
              // Fallback for image loading errors
              onError={(e) => { e.target.onerror = null; e.target.style.backgroundImage = `url(https://placehold.co/600x400/cccccc/333333?text=Image+Error)`; }}
            ></div>

            {/* Dark Overlay for Text Readability */}
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-2xl group-hover:bg-opacity-60 transition-opacity duration-300"></div>

            {/* Content Layer (on top of image and overlay) */}
            <div className="relative z-10 flex flex-col items-center text-center text-white">
              <span className="text-6xl md:text-7xl font-extrabold mb-4 drop-shadow-sm text-purple-200">{service.number}</span>
              <h3 className="text-xl md:text-2xl font-bold mb-2 leading-tight drop-shadow-md">{service.title}</h3>
              <p className="text-md opacity-90 drop-shadow-sm">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
