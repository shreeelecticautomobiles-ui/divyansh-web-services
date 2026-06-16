
import React from 'react';
import { BUSINESS_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <div className="py-16 md:py-24 px-4 md:px-6 bg-[#0b0b0b] max-w-full overflow-x-hidden">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-[clamp(2.5rem,8vw,4rem)] md:text-6xl font-black text-white mb-10 tracking-tight text-center sm:text-left">Who I Am.</h1>
        
        <div className="prose prose-invert prose-lg text-zinc-400 space-y-8 max-w-none font-medium">
          <p className="text-lg md:text-xl leading-relaxed text-center sm:text-left px-2">
            My name is Divyansh Pandey. I am a Delhi University student who builds professional websites for local businesses in Delhi. I started this because I saw how many small businesses — coaching institutes, clinics, shops — were losing customers simply because they had no website or a bad one. I build fast, affordable, mobile-friendly websites that help you get more calls and WhatsApp inquiries. No technical knowledge needed from your side. You focus on your business — I handle the website.
          </p>
          
          <div className="bg-zinc-900 p-6 md:p-10 rounded-2xl md:rounded-3xl border border-zinc-800 my-8 md:my-16 shadow-2xl w-full">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8 tracking-tight text-center sm:text-left">What I Promise You:</h3>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start">
                <span className="bg-blue-600/10 text-blue-500 p-2 rounded-lg flex-shrink-0 mt-1">
                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </span>
                <span className="text-base md:text-lg leading-relaxed"><strong className="text-white">Fast Delivery:</strong> Most websites are ready within 3 to 7 days.</span>
              </li>
              <li className="flex gap-4 items-start">
                <span className="bg-blue-600/10 text-blue-500 p-2 rounded-lg flex-shrink-0 mt-1">
                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A10.003 10.003 0 0011.69 11m4.39 4.39a10.014 10.014 0 01-4.39-4.39M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </span>
                <span className="text-base md:text-lg leading-relaxed"><strong className="text-white">Local Synergy:</strong> Being in Delhi means I can discuss your vision easily. I am not an agency; I am local and always available.</span>
              </li>
              <li className="flex gap-4 items-start">
                <span className="bg-blue-600/10 text-blue-500 p-2 rounded-lg flex-shrink-0 mt-1">
                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                </span>
                <span className="text-base md:text-lg leading-relaxed"><strong className="text-white">Zero Tension:</strong> You don't need to know anything technical. Just share your business details — I handle everything else.</span>
              </li>
            </ul>
          </div>

          <p className="text-base md:text-lg text-center sm:text-left px-2 leading-relaxed">
            I don't disappear after delivery. If something needs fixing, I am available on WhatsApp.
          </p>
          
          <div className="pt-12 md:pt-16 border-t border-zinc-900 px-2">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6 tracking-tight text-center sm:text-left">Let's Talk About Your Website.</h3>
            <p className="mb-8 md:mb-10 text-zinc-400 text-center sm:text-left text-sm md:text-base leading-relaxed">WhatsApp me or call directly — I'll reply within a few hours.</p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full max-w-md md:max-w-none mx-auto sm:mx-0">
               <a 
                href="tel:+919305972687" 
                className="w-full sm:w-auto px-6 md:px-10 py-4 bg-zinc-900 text-white rounded-xl font-black shadow-lg hover:bg-zinc-800 transition border border-zinc-800 flex items-center justify-center gap-3 text-center"
              >
                📞 Voice Call
              </a>
              <a 
                href="https://wa.me/919305972687" 
                className="w-full sm:w-auto px-6 md:px-10 py-4 bg-blue-600 text-white rounded-xl font-black shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:bg-blue-500 transition flex items-center justify-center gap-3 text-center"
              >
                💬 WhatsApp Chat
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;