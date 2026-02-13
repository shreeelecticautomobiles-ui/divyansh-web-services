
import React from 'react';
import { Link } from 'react-router-dom';
import { BUSINESS_INFO, ROUTES } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="container mx-auto max-w-6xl text-center relative z-10 animate-fade-up">
          <div className="inline-block mb-10">
            <span className="px-5 py-2 bg-blue-600/10 border border-blue-600/20 text-blue-500 rounded-full text-[10px] font-black uppercase tracking-[0.3em]">
              The #1 Choice for Local Growth
            </span>
          </div>
          
          <h1 className="text-6xl md:text-[100px] font-black tracking-tighter leading-[0.85] mb-12">
            WE ARCHITECT <br/>
            <span className="text-gradient">DIGITAL LEGACY.</span>
          </h1>
          
          <p className="text-zinc-500 text-xl md:text-2xl max-w-3xl mx-auto mb-16 font-medium leading-relaxed tracking-tight">
            Premium web engineering for elite clinics, showrooms, and coaching centers. 
            We turn local businesses into high-conversion digital powerhouses.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
            <a 
              href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
              className="px-12 py-6 bg-blue-600 text-white rounded-[14px] font-black text-lg transition-all duration-300 hover:scale-105 glow-blue shadow-2xl shadow-blue-600/30"
            >
              Build My Vision
            </a>
            <Link 
              to={ROUTES.demos}
              className="px-12 py-6 bg-zinc-900 border border-zinc-800 text-white rounded-[14px] font-black text-lg transition-all duration-300 hover:bg-zinc-800 hover:border-zinc-700"
            >
              Explore Works
            </Link>
          </div>
        </div>
      </section>

      {/* Services Breakdown */}
      <section className="py-40 px-6 bg-[#141414]/50 border-y border-white/5">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-24">
            <div className="max-w-xl">
              <h2 className="text-[11px] font-black text-blue-500 uppercase tracking-[0.4em] mb-6">Our Capabilities</h2>
              <h3 className="text-4xl md:text-6xl font-black tracking-tighter">Precision Built. <br/>Emotionally Driven.</h3>
            </div>
            <p className="text-zinc-500 text-lg max-w-sm font-medium">We avoid templates. We avoid noise. We build for the 1% who value high-end performance.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              index="01"
              title="Next-Gen Mobile"
              desc="Optimized for touch, speed, and retina clarity. Your site will feel like a high-end native app."
            />
            <FeatureCard 
              index="02"
              title="Direct Pipeline"
              desc="WhatsApp & Call automations integrated at the core. Turn curiosity into cashflow instantly."
            />
            <FeatureCard 
              index="03"
              title="Identity Design"
              desc="More than a website. We build a premium brand identity that commands higher pricing."
            />
          </div>
        </div>
      </section>

      {/* Trust Grid */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <h4 className="text-[10px] font-black text-zinc-700 uppercase tracking-[0.4em] mb-16">Industries We Dominate</h4>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-10 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
             {['HEALTHCARE', 'SHOWROOMS', 'EDUCATION', 'SALONS', 'RETAIL'].map(item => (
               <div key={item} className="text-2xl font-black tracking-tighter hover:text-blue-500 transition-colors cursor-default">{item}</div>
             ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-40 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-blue-600/10 blur-[150px] pointer-events-none"></div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-10 leading-none">
            READY TO SCALE <br/> YOUR LOCAL EMPIRE?
          </h2>
          <p className="text-zinc-500 text-xl mb-16 max-w-2xl mx-auto font-medium">
            Join 120+ local business leaders who upgraded their digital presence to Divyansh Agency Standards.
          </p>
          <a 
            href={`tel:${BUSINESS_INFO.phone}`}
            className="inline-block px-14 py-7 bg-white text-black rounded-2xl font-black text-xl hover:bg-blue-600 hover:text-white transition-all duration-500 hover:scale-105 active:scale-95 shadow-2xl"
          >
            Start Immediate Consultation
          </a>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ index, title, desc }: { index: string, title: string, desc: string }) => (
  <div className="group p-12 bg-zinc-900/40 border border-white/5 rounded-[40px] hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-3">
    <div className="text-[10px] font-black text-zinc-700 tracking-[0.5em] mb-12 group-hover:text-blue-500 transition-colors">NO.{index}</div>
    <h3 className="text-2xl font-black text-white mb-6 tracking-tight">{title}</h3>
    <p className="text-zinc-500 leading-relaxed font-medium">{desc}</p>
  </div>
);

export default Home;