
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
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', path: ROUTES.services },
    { name: 'Portfolio', path: ROUTES.demos },
    { name: 'Pricing', path: ROUTES.pricing },
    { name: 'About', path: ROUTES.about },
    { name: 'Contact', path: ROUTES.contact },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="flex flex-col min-h-screen bg-[#0b0b0b]">
      {/* Dynamic Background Glows */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/5 blur-[120px] rounded-full"></div>
      </div>

      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled 
            ? 'py-4 bg-black/60 backdrop-blur-2xl border-b border-white/10' 
            : 'py-8 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 max-w-7xl flex justify-between items-center">
          <Link to="/" className="group flex items-center" onClick={() => setIsMenuOpen(false)}>
            <span className="text-2xl md:text-3xl font-[900] tracking-tighter transition-all duration-500 group-hover:text-blue-400 uppercase leading-none">
              <span className="text-white">DIVYANSH</span>
              <br className="md:hidden" />
              <span className="text-blue-500 md:ml-2">WEB SERVICES</span>
              <span className="text-white">.</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[12px] font-bold uppercase tracking-[0.25em] transition-all duration-300 hover:text-blue-400 ${
                  isActive(link.path) ? 'text-blue-500' : 'text-zinc-500'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
              className="px-8 py-3 bg-white text-black text-[11px] font-black uppercase tracking-widest rounded-full hover:bg-blue-600 hover:text-white transition-all duration-500 shadow-xl"
            >
              Consult Now
            </a>
          </nav>

          <button className="lg:hidden text-white p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className="w-6 h-5 flex flex-col justify-between overflow-hidden">
              <span className={`w-full h-0.5 bg-current transition-transform duration-300 ${isMenuOpen ? 'translate-y-2 rotate-45' : ''}`}></span>
              <span className={`w-full h-0.5 bg-current transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-full h-0.5 bg-current transition-transform duration-300 ${isMenuOpen ? '-translate-y-2.5 -rotate-45' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-[0px] bg-black/98 backdrop-blur-3xl z-40 p-10 flex flex-col justify-center gap-10 animate-fade-up">
            <button className="absolute top-8 right-8 text-white" onClick={() => setIsMenuOpen(false)}>
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`text-5xl font-black tracking-tighter ${
                  isActive(link.path) ? 'text-blue-500' : 'text-zinc-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href={`tel:${BUSINESS_INFO.phone}`}
              className="mt-10 py-6 bg-blue-600 text-white text-center font-black rounded-3xl text-2xl"
            >
              Call Agency
            </a>
          </div>
        )}
      </header>

      <main className="flex-grow relative z-10">
        {children}
      </main>

      <footer className="bg-black border-t border-white/5 pt-32 pb-16 px-6 relative z-10">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-20">
            <div className="md:col-span-2">
              <h3 className="text-3xl md:text-4xl font-[900] mb-8 tracking-tighter uppercase leading-tight">
                <span className="text-white">DIVYANSH</span><br/>
                <span className="text-blue-500">WEB SERVICES.</span>
              </h3>
              <p className="text-zinc-500 text-xl leading-relaxed max-w-md font-medium">
                Designing and engineering digital experiences that define the future of local commerce. One pixel at a time.
              </p>
              <div className="mt-10 flex gap-6">
                {['LinkedIn', 'Twitter', 'Instagram'].map(social => (
                  <span key={social} className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-600 hover:text-blue-500 transition-colors cursor-pointer">
                    {social}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-700 mb-8">Resources</h4>
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-zinc-500 hover:text-white transition-all font-medium">{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-700 mb-8">Contact</h4>
              <div className="space-y-6">
                <p className="text-zinc-500 font-medium">{BUSINESS_INFO.location}</p>
                <a href={`tel:${BUSINESS_INFO.phone}`} className="block text-zinc-200 font-bold hover:text-blue-500 transition-colors">{BUSINESS_INFO.phone}</a>
                <a href={`mailto:${BUSINESS_INFO.email}`} className="block text-zinc-200 font-bold hover:text-blue-500 transition-colors">{BUSINESS_INFO.email}</a>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-8">
            <p className="text-[10px] text-zinc-800 font-black tracking-[0.3em] uppercase text-center md:text-left">
              © {new Date().getFullYear()} DIVYANSH WEB SERVICES. ALL RIGHTS RESERVED.
            </p>
            <div className="flex gap-12">
               <span className="text-[10px] text-zinc-800 font-black tracking-widest cursor-default">PRIVACY</span>
               <span className="text-[10px] text-zinc-800 font-black tracking-widest cursor-default">TERMS</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
