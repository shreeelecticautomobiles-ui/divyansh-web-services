
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
    { name: 'Portfolio', path: ROUTES.demos },
    { name: 'Pricing', path: ROUTES.pricing },
    { name: 'About', path: ROUTES.about },
    { name: 'Contact', path: ROUTES.contact },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="flex flex-col min-h-screen bg-[#0b0b0b]">
      {/* Mesh Background Gradient */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/30 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/20 blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'py-4 bg-black/60 backdrop-blur-xl border-b border-white/5 shadow-2xl' 
            : 'py-8 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="group" onClick={() => setIsMenuOpen(false)}>
            <span className="text-2xl font-black tracking-tighter transition-all duration-500 group-hover:text-blue-500">
              DIVYANSH<span className="text-blue-500">.</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[13px] font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:text-blue-400 ${
                  isActive(link.path) ? 'text-blue-500' : 'text-zinc-400'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
              className="px-6 py-2.5 bg-blue-600 text-white text-[12px] font-black uppercase tracking-widest rounded-lg hover:bg-blue-500 transition-all duration-300 shadow-lg shadow-blue-600/20"
            >
              Start Project
            </a>
          </nav>

          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 top-[88px] bg-black/95 backdrop-blur-2xl z-40 p-10 flex flex-col gap-8 animate-fade-up">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`text-4xl font-black tracking-tighter ${
                  isActive(link.path) ? 'text-blue-500' : 'text-zinc-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href={`tel:${BUSINESS_INFO.phone}`}
              className="mt-4 w-full py-5 bg-blue-600 text-white text-center font-black rounded-2xl"
            >
              Call Agency
            </a>
          </div>
        )}
      </header>

      <main className="flex-grow pt-20 relative z-10">
        {children}
      </main>

      <footer className="bg-black/50 border-t border-white/5 py-24 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
            <div className="md:col-span-2">
              <h3 className="text-3xl font-black mb-8 tracking-tighter">DIVYANSH<span className="text-blue-500">.</span></h3>
              <p className="text-zinc-500 text-xl leading-relaxed max-w-md">
                We bridge the gap between local commerce and global digital standards. Elevating brands since 2021.
              </p>
            </div>
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600 mb-8">Navigation</h4>
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-zinc-400 hover:text-white transition-colors">{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600 mb-8">Base</h4>
              <p className="text-zinc-400 mb-4">{BUSINESS_INFO.location}</p>
              <p className="text-zinc-400">{BUSINESS_INFO.email}</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 gap-6">
            <p className="text-[11px] text-zinc-700 font-bold tracking-widest uppercase">
              © {new Date().getFullYear()} DIVYANSH DIGITAL ARCHITECTURE.
            </p>
            <div className="flex gap-10">
               <span className="text-[10px] text-zinc-800 font-black tracking-widest">EST. 2021</span>
               <span className="text-[10px] text-zinc-800 font-black tracking-widest">ISO COMPLIANT</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;