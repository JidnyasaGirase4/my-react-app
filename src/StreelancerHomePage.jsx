// src/App.jsx (Main Application Component)
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Using Routes and Route for modern React Router

// All imports explicitly use the .jsx extension for consistency.
// PLEASE ENSURE ALL YOUR COMPONENT FILES IN src/components/ ARE NAMED WITH A .jsx EXTENSION.
import Header from './components/Header.jsx';
import HeroSection from './components/HeroSection.jsx';
import ServicesSection from './components/ServicesSection.jsx';

import FitCategories from './components/FitCategories.jsx';
import Footer from './components/Footer.jsx';

// This component will serve as the main homepage layout
const StreelancerHomePage = () => {
  return (
    // Main container div with basic styling for the whole page
    <div className="min-h-screen bg-gray-50 font-inter text-gray-800 antialiased selection:bg-purple-200 selection:text-purple-900">
      {/* Header is outside Routes if it's always present */}
      <Header />

      {/* Main content area that might change based on routes */}
      {/* For a single homepage, we can place all sections directly */}
      {/* If you add more pages, you'd use <Routes> here */}
      <Hero />
      <ServicesSection />
      <FitCategories /> {/* New section for categories */}
      {/* Keeping these sections separate as they are distinct content blocks based on the original request */}
      

      {/* Footer is outside Routes if it's always present */}
      <Footer />
    </div>
  );
};

// The main App component will wrap the homepage with Router
const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define a route for the homepage. You can add more routes later */}
        <Route path="/" element={<StreelancerHomePage />} />
        {/* Add other routes here, e.g., <Route path="/about" element={<AboutPage />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
