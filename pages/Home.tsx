
import React from 'react';
import { Link } from 'react-router-dom';
import { BUSINESS_INFO, ROUTES } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="pb-20 md:pb-0">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-6 overflow-hidden">
        {/* Animated Glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/10 blur-[150px] animate-pulse delay-1000"></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-[11px] font-black uppercase tracking-[0.2em] mb-10 shadow-[0_0_20px_rgba(59,130,246,0.1)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Now accepting project briefs for Q2 2024
          </div>
          <h1 className="text-6xl md:text-9xl font-black text-white mb-8 tracking-tight leading-[0.9]">
            The Digital<br/>
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-zinc-400 to-zinc-600">Standard.</span>
          </h1>
          <p className="text-lg md:text-2xl text-zinc-500 mb-14 max-w-2xl mx-auto font-medium leading-relaxed tracking-tight">
            We architect high-conversion websites for clinics, coaching centers, and modern retailers. Premium aesthetics meet ruthless performance.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a 
              href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
              className="group relative px-10 py-5 bg-blue-600 text-white rounded-2xl font-black text-lg transition-all duration-500 hover:scale-105 active:scale-95 shadow-2xl shadow-blue-600/30"
            >
              <span className="relative z-10">Start Project</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 rounded-2xl"></div>
            </a>
            <Link 
              to={ROUTES.demos} 
              className="px-10 py-5 bg-zinc-900/50 backdrop-blur-md text-white rounded-2xl font-black text-lg border border-zinc-800 hover:bg-zinc-800 transition-all duration-300"
            >
              View Work
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-32 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
            <div className="max-w-xl">
              <h2 className="text-xs font-black text-blue-500 uppercase tracking-[0.3em] mb-4">The Methodology</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Built for businesses that demand the absolute best.</h3>
            </div>
            <p className="text-zinc-500 text-lg max-w-sm font-medium">Performance isn't an accident. It's the result of precise engineering and obsessive design.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              number="01"
              title="Hyper-Velocity" 
              desc="Optimized loading times sub-1s. Because patience is not a strategy in local business." 
            />
            <FeatureCard 
              number="02"
              title="Responsive Art" 
              desc="Seamlessly fluid experiences across devices. We design for the glass in your hand." 
            />
            <FeatureCard 
              number="03"
              title="Conversion Logic" 
              desc="Integrated WhatsApp and Call actions engineered to capture intent immediately." 
            />
          </div>
        </div>
      </section>

      {/* Sector Marquee / Grid */}
      <section className="py-24 border-y border-zinc-900/50 bg-zinc-950/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4 md:gap-12">
            {['Medical Clinics', 'EV Showrooms', 'Coaching Institutes', 'Luxury Salons', 'Real Estate'].map((item) => (
              <div key={item} className="text-zinc-700 text-xl md:text-2xl font-black uppercase tracking-tighter hover:text-blue-500 transition-colors cursor-default">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-40 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/5 blur-[120px] rounded-full -translate-y-1/2"></div>
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tighter leading-none">Ready to scale?</h2>
          <p className="text-xl md:text-2xl text-zinc-500 mb-16 max-w-2xl mx-auto font-medium">Let's build something that makes your competitors irrelevant.</p>
          <a 
            href={`tel:${BUSINESS_INFO.phone}`}
            className="inline-block px-12 py-6 bg-white text-black rounded-3xl font-black text-xl hover:bg-blue-500 hover:text-white transition-all duration-500 hover:scale-105 active:scale-95 shadow-2xl"
          >
            Schedule a Call
          </a>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ number, title, desc }: { number: string, title: string, desc: string }) => (
  <div className="group relative p-10 bg-zinc-900/30 backdrop-blur-xl border border-zinc-800 rounded-[32px] hover:border-blue-500/50 hover:bg-zinc-900/50 transition-all duration-500">
    <div className="text-[10px] font-black text-zinc-700 tracking-[0.4em] mb-12 group-hover:text-blue-500 transition-colors">NO.{number}</div>
    <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{title}</h3>
    <p className="text-zinc-500 leading-relaxed font-medium mb-12">{desc}</p>
    <div className="h-1 w-0 bg-blue-500 group-hover:w-full transition-all duration-700 rounded-full"></div>
  </div>
);

export default Home;