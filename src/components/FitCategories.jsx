// src/components/FitCategories.jsx
import React from 'react';

const FitCategories = () => {
  // Mock data for categories based on "Find Your Fit, Your Way" concept
  // Reduced to 4 categories to fit a 2x2 layout
  const categories = [
    { name: 'Full-time Roles', description: 'Explore stable and long-term career opportunities.' },
    { name: 'Freelance Projects', description: 'Discover flexible assignments and project-based work.' },
    { name: 'Internships', description: 'Gain valuable experience with our internship programs.' },
    { name: 'Remote Positions', description: 'Find roles that allow you to work from anywhere.' },
  ];

  return (
    <section className="p-6 md:p-12 m-4 md:m-8 bg-white shadow-lg rounded-xl transform transition-all duration-300 hover:shadow-xl">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-10 text-purple-700 bg-gradient-to-r from-purple-50 to-pink-50 p-3 rounded-lg shadow-inner">
        Find Your Fit, Your Way
      </h2>

      {/* Adjusted grid to always show 2 columns on sm and lg screens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {categories.map((category, index) => (
          <div key={index} className="flex flex-col items-center text-center p-8 bg-gray-50 rounded-2xl shadow-md border border-gray-200 transform transition-all duration-300 hover:shadow-xl hover:border-purple-300 hover:-translate-y-1">
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 leading-tight">{category.name}</h3>
            <p className="text-md text-gray-600">{category.description}</p>
            <button className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors duration-200 shadow-md">Explore</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FitCategories;
