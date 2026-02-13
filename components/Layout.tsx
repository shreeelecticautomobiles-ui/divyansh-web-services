
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
    <div className="flex flex-col min-h-screen bg-[#0b0b0b] text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-zinc-800 shadow-sm">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link to="/" className="flex items-center" onClick={closeMenu}>
            <span className="text-xl font-bold text-blue-500 tracking-tight">{BUSINESS_INFO.name}</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.path) ? 'text-blue-500' : 'text-zinc-400 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-zinc-400 hover:text-white"
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
          <div className="md:hidden bg-zinc-950 border-b border-zinc-800 py-6 px-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className={`block py-2 text-lg font-medium ${
                  isActive(link.path) ? 'text-blue-500' : 'text-zinc-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-4">
              <a 
                href={`tel:${BUSINESS_INFO.phone}`} 
                className="w-full text-center py-3 bg-blue-600 text-white rounded-lg font-bold shadow-[0_0_15px_rgba(37,99,235,0.3)]"
              >
                📞 Call Now
              </a>
              <a 
                href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(BUSINESS_INFO.whatsappMessage)}`}
                className="w-full text-center py-3 bg-green-600 text-white rounded-lg font-bold shadow-[0_0_15px_rgba(22,163,74,0.3)]"
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
      <footer className="bg-black text-white pt-16 pb-24 md:pb-12 px-4 border-t border-zinc-900">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-xl font-bold text-white mb-6 tracking-tight">{BUSINESS_INFO.name}</h3>
              <p className="text-zinc-400 mb-6 leading-relaxed">
                Simple, fast, and mobile-friendly websites for local businesses. We translate your physical presence into a powerful digital one within 48 hours.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-6 uppercase tracking-widest text-xs">Quick Links</h4>
              <ul className="space-y-3 text-zinc-400">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="hover:text-blue-500 transition-colors flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-500/50 rounded-full"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-6 uppercase tracking-widest text-xs">Contact Details</h4>
              <div className="space-y-4">
                <p className="text-zinc-400 flex items-center gap-3">
                  <span className="text-blue-500">📍</span> {BUSINESS_INFO.location}
                </p>
                <p className="text-zinc-400 flex items-center gap-3">
                  <span className="text-blue-500">📞</span> {BUSINESS_INFO.phone}
                </p>
                <p className="text-zinc-400 flex items-center gap-3">
                  <span className="text-blue-500">✉️</span> {BUSINESS_INFO.email}
                </p>
              </div>
            </div>
          </div>
          <div className="text-center pt-8 border-t border-zinc-900">
            <p className="text-sm text-zinc-500">
              © {new Date().getFullYear()} {BUSINESS_INFO.name}. Premium Business Solutions.
            </p>
          </div>
        </div>
      </footer>

      {/* Persistent Floating Contact Buttons for Mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-zinc-950/95 backdrop-blur-lg border-t border-zinc-800 p-4 grid grid-cols-2 gap-4 z-50 shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
        <a 
          href={`tel:${BUSINESS_INFO.phone}`} 
          className="flex items-center justify-center gap-2 py-3 bg-zinc-800 text-white rounded-lg font-bold text-sm border border-zinc-700 active:scale-95 transition-transform"
        >
          <span>📞</span> Call
        </a>
        <a 
          href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(BUSINESS_INFO.whatsappMessage)}`}
          className="flex items-center justify-center gap-2 py-3 bg-blue-600 text-white rounded-lg font-bold text-sm shadow-[0_0_20px_rgba(37,99,235,0.4)] active:scale-95 transition-transform"
        >
          <span>💬</span> WhatsApp
        </a>
      </div>
    </div>
  );
};

export default Layout;