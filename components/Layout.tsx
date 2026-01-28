
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BUSINESS_INFO, ROUTES } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: ROUTES.home },
    { name: 'Services', path: ROUTES.services },
    { name: 'Demo Websites', path: ROUTES.demos },
    { name: 'Pricing', path: ROUTES.pricing },
    { name: 'About', path: ROUTES.about },
    { name: 'Contact', path: ROUTES.contact },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link to="/" className="flex items-center" onClick={closeMenu}>
            <span className="text-xl font-bold text-blue-700">{BUSINESS_INFO.name}</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.path) ? 'text-blue-700' : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-100 py-4 px-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className={`block py-2 text-lg font-medium ${
                  isActive(link.path) ? 'text-blue-700' : 'text-gray-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-2">
              <a 
                href={`tel:${BUSINESS_INFO.phone}`} 
                className="w-full text-center py-3 bg-blue-600 text-white rounded-lg font-bold"
              >
                📞 Call Now
              </a>
              <a 
                href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(BUSINESS_INFO.whatsappMessage)}`}
                className="w-full text-center py-3 bg-green-500 text-white rounded-lg font-bold"
              >
                💬 WhatsApp Now
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-black text-white pt-12 pb-24 md:pb-8 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">{BUSINESS_INFO.name}</h3>
              <p className="text-gray-400 mb-4">
                Simple, fast, and mobile-friendly websites for local businesses in Delhi and nearby areas. We bring your shop online in 48 hours.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="hover:text-blue-400 transition-colors">{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Contact Details</h4>
              <p className="text-gray-400 mb-2 flex items-center gap-2">📍 {BUSINESS_INFO.location}</p>
              <p className="text-gray-400 mb-2 flex items-center gap-2">📞 {BUSINESS_INFO.phone}</p>
              <p className="text-gray-400 flex items-center gap-2">✉️ {BUSINESS_INFO.email}</p>
            </div>
          </div>
          <div className="text-center pt-8 border-t border-gray-800">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Persistent Floating Contact Buttons for Mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3 grid grid-cols-2 gap-3 z-50 shadow-[0_-4px_10px_rgba(0,0,0,0.1)]">
        <a 
          href={`tel:${BUSINESS_INFO.phone}`} 
          className="flex items-center justify-center gap-2 py-3 bg-blue-600 text-white rounded-lg font-bold text-sm shadow-lg"
        >
          <span>📞</span> Call Now
        </a>
        <a 
          href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(BUSINESS_INFO.whatsappMessage)}`}
          className="flex items-center justify-center gap-2 py-3 bg-green-500 text-white rounded-lg font-bold text-sm shadow-lg"
        >
          <span>💬</span> WhatsApp
        </a>
      </div>
    </div>
  );
};

export default Layout;
