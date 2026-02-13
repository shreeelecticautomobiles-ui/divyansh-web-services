
import React from 'react';
import { Link } from 'react-router-dom';
import { BUSINESS_INFO, ROUTES } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="pb-20 md:pb-0 bg-[#0b0b0b]">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 md:py-32 px-4 text-center">
        {/* Subtle Gradient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(37,99,235,0.08)_0%,_transparent_70%)] pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 tracking-tighter leading-tight">
            Simple Websites for <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Local Businesses</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-2xl mx-auto font-medium">
            Helping clinics, coaching centers and local shops dominate their local market with clean, high-performance websites.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a 
              href={`tel:${BUSINESS_INFO.phone}`} 
              className="px-10 py-5 bg-zinc-900 text-white rounded-lg font-bold text-lg shadow-xl hover:bg-zinc-800 transition border border-zinc-700 flex items-center justify-center gap-2"
            >
              📞 Direct Call
            </a>
            <a 
              href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(BUSINESS_INFO.whatsappMessage)}`}
              className="px-10 py-5 bg-blue-600 text-white rounded-lg font-bold text-lg shadow-[0_0_25px_rgba(37,99,235,0.4)] hover:bg-blue-500 transition hover:scale-105 transform flex items-center justify-center gap-2"
            >
              💬 WhatsApp Now
            </a>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 px-4 bg-zinc-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What We Do</h2>
            <p className="text-zinc-400 max-w-xl mx-auto">We focus on the metrics that matter: speed, mobile-experience, and conversion.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon="📱" 
              title="Mobile First" 
              desc="Optimized for the devices 90% of your customers use. Perfect on every iPhone and Android." 
            />
            <FeatureCard 
              icon="📍" 
              title="Maps Optimized" 
              desc="Directly integrated Google Maps so clients navigate to your clinic or shop in one tap." 
            />
            <FeatureCard 
              icon="⚡" 
              title="Turbo Delivery" 
              desc="We build fast and deliver faster. Your new digital identity goes live in exactly 48 hours." 
            />
            <FeatureCard 
              icon="📞" 
              title="One-Tap Contact" 
              desc="Smart call and messaging floating actions that convert passive visitors into active leads." 
            />
            <FeatureCard 
              icon="💎" 
              title="Premium Clean" 
              desc="Minimalist designs that emphasize your services without technical clutter or distraction." 
            />
            <FeatureCard 
              icon="🛡️" 
              title="Personal Trust" 
              desc="No bots. No call centers. Talk directly to the engineer building your business future." 
            />
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-24 px-4 bg-[#0b0b0b] border-y border-zinc-900">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-16 text-white uppercase tracking-widest text-sm opacity-60">Industry Specialists</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {['Coaching Centers', 'Clinics & Diagnostics', 'EV Showrooms', 'Local Retail', 'Salons & Spas', 'Personal Brands'].map((item) => (
              <span key={item} className="px-8 py-4 bg-zinc-900 text-zinc-300 rounded-xl font-bold border border-zinc-800 hover:border-blue-500/50 hover:text-blue-400 transition-all cursor-default">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-4 bg-zinc-900/30">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">The Divyansh Advantage</h2>
          <ul className="space-y-10">
            <WhyUsItem title="Hyper-Local Focus" desc="We understand the Delhi/NCR market dynamics better than anyone else." />
            <WhyUsItem title="Zero Latency Execution" desc="Your business doesn't wait. Neither do we. Get live in a weekend." />
            <WhyUsItem title="Conversion Obsessed" desc="We don't just build sites; we build inquiry-generating machines." />
            <WhyUsItem title="Maintenance Free" desc="Our robust architecture means you never worry about crashes or hacks." />
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 bg-blue-600 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,_rgba(255,255,255,0.05)_25%,_transparent_25%,_transparent_50%,_rgba(255,255,255,0.05)_50%,_rgba(255,255,255,0.05)_75%,_transparent_75%,_transparent)] bg-[length:100px_100px] opacity-20"></div>
        <div className="container mx-auto max-w-3xl relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Elevate Your Local Presence To Premium Levels.</h2>
          <p className="text-xl mb-12 opacity-90 font-medium italic">Stop losing customers to your competitors just because they have a better website.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to={ROUTES.demos} className="px-10 py-5 bg-white text-blue-700 rounded-lg font-extrabold text-lg hover:bg-zinc-100 transition hover:scale-105 transform shadow-2xl">
              👀 Browse Recent Projects
            </Link>
            <a 
              href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(BUSINESS_INFO.whatsappMessage)}`}
              className="px-10 py-5 bg-zinc-900 text-white rounded-lg font-extrabold text-lg hover:bg-black transition hover:scale-105 transform shadow-2xl"
            >
              🚀 Launch My Site
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, desc }: { icon: string, title: string, desc: string }) => (
  <div className="bg-zinc-900 p-10 rounded-2xl border border-zinc-800 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(37,99,235,0.15)] transition-all group">
    <div className="text-5xl mb-6 group-hover:scale-110 transition-transform inline-block">{icon}</div>
    <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{title}</h3>
    <p className="text-zinc-400 leading-relaxed font-medium">{desc}</p>
  </div>
);

const WhyUsItem = ({ title, desc }: { title: string, desc: string }) => (
  <li className="flex gap-6 items-start group">
    <div className="bg-blue-600/10 text-blue-500 p-3 rounded-xl border border-blue-500/20 group-hover:bg-blue-600 group-hover:text-white transition-all">
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
      </svg>
    </div>
    <div>
      <h4 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{title}</h4>
      <p className="text-zinc-400 leading-relaxed">{desc}</p>
    </div>
  </li>
);

export default Home;