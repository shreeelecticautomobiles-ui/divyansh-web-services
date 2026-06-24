
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BUSINESS_INFO, ROUTES } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
}

let scrollPosition = 0;

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openMenu = () => {
    scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    document.body.style.overflow = 'hidden';
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    document.body.style.position = '';
    document.body.style.overflow = '';
    document.body.style.top = '';
    document.body.style.width = '';
    window.scrollTo(0, scrollPosition);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    return () => {
      document.body.style.position = '';
      document.body.style.overflow = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
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
        className={`fixed top-0 left-0 right-0 transition-all duration-700 flex items-center ${
          scrolled 
            ? 'bg-black/60 backdrop-blur-2xl border-b border-white/10' 
            : 'bg-transparent'
        }`}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 1000,
          height: '64px',
        }}
      >
        <div className="container mx-auto px-6 max-w-7xl flex justify-between items-center">
          <Link 
            to="/" 
            className="group flex items-center" 
            onClick={(e) => {
              if (isMenuOpen) {
                e.preventDefault();
                closeMenu();
                navigate('/');
                window.scrollTo(0, 0);
              }
            }}
          >
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
                  isActive(link.path) ? 'text-blue-500' : 'text-zinc-400'
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

          <button 
            className="lg:hidden text-white p-2" 
            style={{ position: 'fixed', zIndex: 10000, top: '10px', right: '24px' }}
            onClick={isMenuOpen ? closeMenu : openMenu}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
          >
            <div className="w-6 h-5 flex flex-col justify-between overflow-hidden">
              <span className={`w-full h-0.5 bg-current transition-transform duration-300 ${isMenuOpen ? 'translate-y-2 rotate-45' : ''}`}></span>
              <span className={`w-full h-0.5 bg-current transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-full h-0.5 bg-current transition-transform duration-300 ${isMenuOpen ? '-translate-y-2.5 -rotate-45' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div 
            className="lg:hidden p-10 flex flex-col justify-center gap-8"
            style={{
              position: 'fixed',
              top: '0',
              left: '0',
              width: '100vw',
              height: '100vh',
              zIndex: 9999,
              backgroundColor: '#0a0a0a',
              overflowY: 'auto'
            }}
          >
            <button 
              className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center text-white bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all cursor-pointer"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <svg className="w-6 h-6 stroke-current" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="flex flex-col gap-6">
              <Link
                to="/"
                onClick={(e) => {
                  e.preventDefault();
                  closeMenu();
                  navigate('/');
                  window.scrollTo(0, 0);
                }}
                className="text-white font-semibold text-3xl md:text-5xl tracking-tighter hover:text-blue-400 transition-all"
              >
                Home
              </Link>
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={(e) => {
                    e.preventDefault();
                    closeMenu();
                    navigate(link.path);
                    window.scrollTo(0, 0);
                  }}
                  className="text-white font-semibold text-3xl md:text-5xl tracking-tighter hover:text-blue-400 transition-all"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <a 
              href="https://wa.me/919305972687"
              className="mt-8 py-5 bg-blue-600 text-white text-center font-black rounded-2xl text-xl hover:bg-blue-500 transition-all duration-300 shadow-[0_0_30px_rgba(37,99,235,0.3)]"
            >
              WhatsApp Me
            </a>
          </div>
        )}
      </header>
      <div style={{ height: '64px' }}></div>

      <main className="flex-grow relative z-10">
        {children}
      </main>

      <footer className="bg-black border-t border-white/5 pt-16 md:pt-32 pb-16 px-4 md:px-6 relative z-10 max-w-full overflow-x-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-20 mb-12 md:mb-20 text-center md:text-left">
            <div className="md:col-span-2 flex flex-col items-center md:items-start">
              <h3 className="text-3xl md:text-4xl font-[900] mb-6 md:mb-8 tracking-tighter uppercase leading-tight">
                <span className="text-white">DIVYANSH</span><br/>
                <span className="text-blue-500">WEB SERVICES.</span>
              </h3>
              <p className="text-zinc-400 text-base md:text-xl leading-relaxed max-w-md font-medium">
                Affordable websites for local businesses in Delhi.
              </p>
              <div className="mt-6 md:mt-10 flex gap-6 justify-center md:justify-start">
                {['LinkedIn', 'Twitter', 'Instagram'].map(social => {
                  let ariaLabel = "";
                  if (social === "Twitter") ariaLabel = "Follow us on Twitter";
                  else if (social === "Instagram") ariaLabel = "Follow us on Instagram";
                  else if (social === "LinkedIn") ariaLabel = "Connect on LinkedIn";
                  return (
                    <a
                      key={social}
                      href={`#${social.toLowerCase()}`}
                      aria-label={ariaLabel}
                    >
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 hover:text-blue-500 transition-colors cursor-pointer">
                        {social}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.3rem] md:tracking-[0.4em] text-zinc-400 mb-4 md:mb-8">Resources</h4>
              <ul className="space-y-3 md:space-y-4">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-zinc-400 hover:text-white transition-all font-medium text-sm md:text-base">{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3rem] md:tracking-[0.4em] text-zinc-400 mb-4 md:mb-8">Contact</h4>
              <div className="space-y-4 md:space-y-6">
                <p className="text-zinc-400 font-medium text-sm md:text-base">{BUSINESS_INFO.location}</p>
                <a href={`tel:${BUSINESS_INFO.phone}`} className="block text-zinc-200 font-bold hover:text-blue-500 transition-colors text-sm md:text-base">{BUSINESS_INFO.phone}</a>
                <a href={`mailto:${BUSINESS_INFO.email}`} className="block text-zinc-200 font-bold hover:text-blue-500 transition-colors text-sm md:text-base">{BUSINESS_INFO.email}</a>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 md:pt-12 border-t border-white/5 gap-6 md:gap-8">
            <p className="text-[9px] md:text-[10px] text-zinc-400 font-black tracking-[0.3em] uppercase text-center md:text-left">
              © {new Date().getFullYear()} DIVYANSH WEB SERVICES. ALL RIGHTS RESERVED.
            </p>
            <div className="flex gap-8 md:gap-12 justify-center">
               <span className="text-[9px] md:text-[10px] text-zinc-400 font-black tracking-widest cursor-default">PRIVACY</span>
               <span className="text-[9px] md:text-[10px] text-zinc-400 font-black tracking-widest cursor-default">TERMS</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
