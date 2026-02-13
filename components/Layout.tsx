
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BUSINESS_INFO, ROUTES } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: ROUTES.home },
    { name: 'Services', path: ROUTES.services },
    { name: 'Demos', path: ROUTES.demos },
    { name: 'Pricing', path: ROUTES.pricing },
    { name: 'About', path: ROUTES.about },
    { name: 'Contact', path: ROUTES.contact },
  ];

  const closeMenu = () => setIsMenuOpen(false);
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="flex flex-col min-h-screen bg-[#0b0b0b] text-white selection:bg-blue-500/30 selection:text-blue-200">
      {/* Background Mesh Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/10 blur-[120px] rounded-full"></div>
      </div>

      {/* Header */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-500 border-b ${
          scrolled 
            ? 'bg-black/60 backdrop-blur-xl border-zinc-800/50 py-3' 
            : 'bg-transparent border-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center group" onClick={closeMenu}>
            <span className="text-2xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400 group-hover:from-blue-400 group-hover:to-white transition-all duration-500">
              DIVYANSH<span className="text-blue-500">.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[13px] font-semibold uppercase tracking-[0.15em] transition-all duration-300 ${
                  isActive(link.path) ? 'text-blue-500' : 'text-zinc-500 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
              className="px-5 py-2.5 bg-white text-black text-[13px] font-bold rounded-full hover:bg-blue-500 hover:text-white transition-all duration-500"
            >
              HIRE US
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-zinc-400 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-5 flex flex-col justify-between overflow-hidden">
              <span className={`w-full h-0.5 bg-current transition-transform duration-300 ${isMenuOpen ? 'translate-y-2 rotate-45' : ''}`}></span>
              <span className={`w-full h-0.5 bg-current transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-full h-0.5 bg-current transition-transform duration-300 ${isMenuOpen ? '-translate-y-2.5 -rotate-45' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 top-[60px] bg-black/95 backdrop-blur-2xl z-40 p-8 flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className={`text-3xl font-bold tracking-tight ${
                  isActive(link.path) ? 'text-blue-500' : 'text-zinc-500'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <hr className="border-zinc-800" />
            <div className="flex flex-col gap-4">
              <a 
                href={`tel:${BUSINESS_INFO.phone}`} 
                className="w-full text-center py-4 bg-zinc-900 border border-zinc-800 text-white rounded-2xl font-bold"
              >
                Call Engineer
              </a>
              <a 
                href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
                className="w-full text-center py-4 bg-blue-600 text-white rounded-2xl font-bold shadow-lg shadow-blue-600/20"
              >
                WhatsApp Inquiry
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow relative z-10">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-black/40 backdrop-blur-md pt-24 pb-32 md:pb-16 px-6 border-t border-zinc-900/50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-black mb-6 tracking-tighter">DIVYANSH<span className="text-blue-500">.</span></h3>
              <p className="text-zinc-400 text-lg leading-relaxed max-w-md">
                We craft high-performance digital storefronts for the next generation of local leaders. Fast. Clean. Scalable.
              </p>
            </div>
            <div>
              <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-500 mb-8">Navigation</h4>
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-zinc-400 hover:text-white transition-colors">{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-500 mb-8">Connect</h4>
              <ul className="space-y-4">
                <li className="text-zinc-400 hover:text-blue-500 transition-colors cursor-pointer">{BUSINESS_INFO.phone}</li>
                <li className="text-zinc-400 hover:text-blue-500 transition-colors cursor-pointer">{BUSINESS_INFO.email}</li>
                <li className="text-zinc-400">{BUSINESS_INFO.location}</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-900/50 gap-4">
            <p className="text-xs text-zinc-600 font-medium">
              © {new Date().getFullYear()} DIVYANSH AGENCY. DESIGNED FOR EXCELLENCE.
            </p>
            <div className="flex gap-6">
               <span className="text-[10px] text-zinc-800 font-black">LEGACY</span>
               <span className="text-[10px] text-zinc-800 font-black">QUALITY</span>
               <span className="text-[10px] text-zinc-800 font-black">SPEED</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Mobile */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] bg-white/10 backdrop-blur-2xl border border-white/20 rounded-full p-2 flex gap-2 z-50 shadow-2xl">
        <a 
          href={`tel:${BUSINESS_INFO.phone}`} 
          className="flex-1 py-3 bg-black text-white rounded-full font-bold text-xs text-center border border-zinc-800"
        >
          CALL
        </a>
        <a 
          href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
          className="flex-1 py-3 bg-blue-600 text-white rounded-full font-bold text-xs text-center shadow-lg shadow-blue-600/20"
        >
          WHATSAPP
        </a>
      </div>
    </div>
  );
};

export default Layout;