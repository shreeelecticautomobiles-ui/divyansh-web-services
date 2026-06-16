
import React from 'react';
import { Link } from 'react-router-dom';
import { BUSINESS_INFO, ROUTES } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 md:px-6 pt-[80px] md:pt-[90px] pb-12 overflow-x-hidden max-w-full">
        <div className="container mx-auto max-w-7xl text-center relative z-10 animate-fade-up w-full">
          <div className="inline-block mb-8 md:mb-12">
            <span className="px-4 py-2 bg-blue-600/5 border border-blue-600/10 text-blue-500 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] shadow-2xl">
              Websites for Local Businesses in Delhi
            </span>
          </div>
          
          <h1 className="text-[clamp(1.8rem,7.5vw,4.5rem)] md:text-[100px] font-black tracking-tighter leading-[0.9] md:leading-[0.82] mb-10 md:mb-14 text-white">
            GET MORE CUSTOMERS <br/>
            <span className="text-gradient">WITH A PROFESSIONAL WEBSITE.</span>
          </h1>
          
          <p className="text-zinc-500 text-lg md:text-2xl max-w-4xl mx-auto mb-12 md:mb-16 font-medium leading-relaxed tracking-tight px-2">
            I build professional websites for coaching institutes, clinics, and local businesses in Delhi. Fast delivery. Affordable price. Real results.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 md:gap-10 w-full max-w-md md:max-w-none mx-auto px-4 sm:px-0">
            <a 
              href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
              className="w-full sm:w-auto px-8 md:px-14 py-4 md:py-7 bg-blue-600 text-white rounded-xl md:rounded-2xl font-black text-lg md:text-xl transition-all duration-500 hover:scale-105 glow-blue shadow-3xl shadow-blue-600/40 text-center"
            >
              Start Your Project
            </a>
            <Link 
              to={ROUTES.demos}
              className="w-full sm:w-auto px-8 md:px-14 py-4 md:py-7 bg-white text-black rounded-xl md:rounded-2xl font-black text-lg md:text-xl transition-all duration-500 hover:scale-105 hover:bg-blue-600 hover:text-white group flex items-center justify-center gap-3 shadow-3xl shadow-white/10 text-center"
            >
              See All Demos <span className="group-hover:translate-x-2 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust & Features Section */}
      <section className="py-20 md:py-48 px-4 md:px-6 bg-[#0e0e0e]/50 border-y border-white/5 relative max-w-full overflow-x-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 md:mb-32 px-2">
            <h2 className="text-[10px] md:text-[11px] font-black text-blue-500 uppercase tracking-[0.4em] md:tracking-[0.5em] mb-4 md:mb-6">The Competitive Edge</h2>
            <h3 className="text-[clamp(1.8rem,6vw,4rem)] md:text-7xl font-black tracking-tighter text-white leading-tight">Why Delhi businesses choose us.</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <TrustCard 
              icon="⚡"
              title="Fast Delivery"
              desc="Most websites delivered within 3 to 7 days. No long waiting."
            />
            <TrustCard 
              icon="📱"
              title="Mobile Friendly"
              desc="Your website will look perfect on every phone, tablet, and computer."
            />
            <TrustCard 
              icon="💬"
              title="More WhatsApp Inquiries"
              desc="Every page has a WhatsApp button so customers can contact you directly."
            />
          </div>
        </div>
      </section>

      {/* The Process Section */}
      <section className="py-20 md:py-48 px-4 md:px-6 overflow-hidden max-w-full">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-[10px] md:text-[11px] font-black text-blue-500 uppercase tracking-[0.4em] md:tracking-[0.5em] mb-6 md:mb-8">The Workflow</h2>
              <h3 className="text-[clamp(1.8rem,6vw,4rem)] md:text-7xl font-black tracking-tighter text-white leading-tight lg:leading-none mb-8 md:mb-10">From Idea to <br className="hidden lg:block"/>Impact in 4 Steps.</h3>
              <p className="text-zinc-500 text-lg md:text-xl font-medium leading-relaxed max-w-lg mb-10 md:mb-12 mx-auto lg:mx-0">
                I map out, design, and launch your customized business website, ensuring everything is handled while you focus on operations.
              </p>
              <Link to={ROUTES.pricing} className="inline-block text-blue-500 font-black text-xs md:text-sm uppercase tracking-widest hover:text-white transition-colors">See Pricing Details →</Link>
            </div>
            
            <div className="flex-1 grid grid-cols-1 gap-8 md:gap-10 w-full px-2 sm:px-0">
              <ProcessStep num="01" title="We Talk" desc="You tell me about your business, your services, and what you need." />
              <ProcessStep num="02" title="I Design" desc="I build your complete website with your content, photos, and branding." />
              <ProcessStep num="03" title="You Review" desc="I share a preview. You give feedback. I make changes." />
              <ProcessStep num="04" title="Goes Live" desc="Your website is published and ready to get you customers." />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Placeholder */}
      <section className="py-20 md:py-48 px-4 md:px-6 bg-[#0d0d0d]/80 border-t border-white/5 max-w-full overflow-x-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 md:mb-24 px-2">
            <h2 className="text-[10px] font-black text-zinc-700 uppercase tracking-[0.4em] md:tracking-[0.5em] mb-4 md:mb-6">Client Echoes</h2>
            <h3 className="text-3xl md:text-4xl font-black tracking-tighter text-white">Trusted by Local Leaders.</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 w-full">
            <TestimonialCard 
              name="Dr. Sameer Gupta"
              role="Director, Raj Health Clinic"
              quote="The WhatsApp integration literally doubled our appointment rate in the first month."
            />
            <TestimonialCard 
              name="Rahul Sharma"
              role="Founder, Divyansh Coaching"
              quote="Professionalism at its peak. The site looks better than our biggest national competitors."
            />
            <TestimonialCard 
              name="Vikram Singh"
              role="Owner, Powerzone Gym"
              quote="Fast, clean, and mobile-friendly. Exactly what I needed for my gym's digital footprint."
            />
          </div>
        </div>
      </section>

      {/* Hero-like Final CTA */}
      <section className="py-20 md:py-56 px-4 md:px-6 relative max-w-full overflow-x-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-blue-600/10 blur-[200px] pointer-events-none"></div>
        <div className="container mx-auto max-w-5xl text-center relative z-10 animate-fade-up w-full">
          <h2 className="text-[clamp(1.8rem,7vw,4.5rem)] md:text-8xl font-black tracking-tighter mb-8 md:mb-14 leading-tight text-white px-2">
            Your Business Deserves <br/> <span className="text-blue-500">a Website That Works.</span>
          </h2>
          <p className="text-zinc-500 text-lg md:text-2xl mb-10 md:mb-16 max-w-3xl mx-auto font-medium px-4">
            Most local businesses in Delhi lose customers because they have no website or a bad one. I fix that — fast and affordable.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 md:gap-10 w-full max-w-md md:max-w-none mx-auto px-4 sm:px-0">
            <a 
              href={`tel:${BUSINESS_INFO.phone}`}
              className="w-full sm:w-auto px-6 md:px-16 py-4 md:py-8 bg-white text-black rounded-xl md:rounded-3xl font-black text-lg md:text-2xl hover:bg-blue-600 hover:text-white transition-all duration-500 hover:scale-105 shadow-4xl text-center"
            >
              Claim Your Free Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

const TrustCard = ({ icon, title, desc }: { icon: string, title: string, desc: string }) => (
  <div className="group p-6 md:p-14 bg-zinc-900/30 border border-white/5 rounded-3xl md:rounded-[48px] hover:border-blue-500/50 transition-all duration-700 hover:shadow-2xl hover:-translate-y-4">
    <div className="text-4xl md:text-5xl mb-6 md:mb-10 group-hover:scale-110 transition-transform inline-block">{icon}</div>
    <h3 className="text-2xl md:text-3xl font-black text-white mb-4 md:mb-6 tracking-tight">{title}</h3>
    <p className="text-zinc-500 text-base md:text-lg leading-relaxed font-medium">{desc}</p>
  </div>
);

const ProcessStep = ({ num, title, desc }: { num: string, title: string, desc: string }) => (
  <div className="flex gap-6 md:gap-10 items-start group">
    <div className="text-lg md:text-xl font-black text-zinc-800 tracking-widest pt-1 group-hover:text-blue-500 transition-colors">{num}</div>
    <div>
      <h4 className="text-xl md:text-2xl font-black text-white mb-2 md:mb-3 tracking-tight group-hover:text-blue-400 transition-colors">{title}</h4>
      <p className="text-zinc-500 text-base md:text-lg font-medium leading-relaxed">{desc}</p>
    </div>
  </div>
);

const TestimonialCard = ({ name, role, quote }: { name: string, role: string, quote: string }) => (
  <div className="p-6 md:p-12 glass rounded-3xl md:rounded-[40px] border border-white/5 hover:border-blue-500/30 transition-all">
    <div className="text-blue-500 text-3xl md:text-4xl mb-6">“</div>
    <p className="text-zinc-400 text-base md:text-lg italic mb-6 md:mb-10 font-medium leading-relaxed">
      {quote}
    </p>
    <div>
      <h5 className="text-white font-black text-base md:text-lg tracking-tight">{name}</h5>
      <p className="text-zinc-600 font-bold text-[10px] md:text-xs uppercase tracking-widest mt-1">{role}</p>
    </div>
  </div>
);

export default Home;
