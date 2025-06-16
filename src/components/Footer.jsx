        // src/components/Footer.jsx
        import React from 'react';

        const Footer = () => {
          return (
            <footer className="bg-gray-900 text-white p-6 md:p-12 mt-8 rounded-t-xl mx-4 md:mx-8 shadow-inner">
              <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                {/* Column 1: Brand Info */}
                <div className="flex flex-col items-center md:items-start">
                  <h3 className="text-3xl font-bold text-purple-400 mb-4">Streelancer</h3>
                  <p className="text-gray-400 text-sm">Restart. Rise Thrive. Your ultimate platform for career growth and talent acquisition.</p>
                </div>

                {/* Column 2: Quick Links */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li><a href="/" className="hover:text-purple-300 transition-colors duration-200">Home</a></li>
                    <li><a href="/services" className="hover:text-purple-300 transition-colors duration-200">Services</a></li>
                    <li><a href="/about" className="hover:text-purple-300 transition-colors duration-200">About Us</a></li>
                    <li><a href="/contact" className="hover:text-purple-300 transition-colors duration-200">Contact</a></li>
                  </ul>
                </div>

                {/* Column 3: Contact Info */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                  <p className="text-gray-400">123 Main Street, Anytown, India</p>
                  <p className="text-gray-400">Email: info@streelancer.com</p>
                  <p className="text-gray-400">Phone: +91 98765 43210</p>
                  {/* Social Media Icons would go here */}
                </div>
              </div>

              <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} Streelancer. All rights reserved.
              </div>
            </footer>
          );
        };

        export default Footer;
        