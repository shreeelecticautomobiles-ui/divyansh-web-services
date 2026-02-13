
import React from 'react';
import { Link } from 'react-router-dom';
import { BUSINESS_INFO, ROUTES } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center justify-center px-6 pt-32 pb-20">
        <div className="container mx-auto max-w-7xl text-center relative z-10 animate-fade-up">
          <div className="inline-block mb-12">
            <span className="px-6 py-2.5 bg-blue-600/5 border border-blue-600/10 text-blue-500 rounded-full text-[10px] font-black uppercase tracking-[0.4em] shadow-2xl">
              Elevating Indian Business Standards
            </span>
          </div>
          
          <h1 className="text-7xl md:text-[120px] font-black tracking-tighter leading-[0.82] mb-14">
            CRAFTING YOUR <br/>
            <span className="text-gradient">DIGITAL EMPIRE.</span>
          </h1>
          
          <p className="text-zinc-500 text-xl md:text-2xl max-w-4xl mx-auto mb-16 font-medium leading-relaxed tracking-tight">
            We don't just build websites. We engineer high-performance conversion machines for doctors, 
            educators, and visionary entrepreneurs. Performance. Aesthetics. Results.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-10">
            <a 
              href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
              className="px-14 py-7 bg-blue-600 text-white rounded-2xl font-black text-xl transition-all duration-500 hover:scale-105 glow-blue shadow-3xl shadow-blue-600/40"
            >
              Start Your Project
            </a>
            <Link 
              to={ROUTES.demos}
              className="px-14 py-7 bg-zinc-950 border border-zinc-900 text-white rounded-2xl font-black text-xl transition-all duration-300 hover:bg-zinc-900 hover:border-zinc-800 group flex items-center gap-3"
            >
              Explore Portfolio <span className="group-hover:translate-x-2 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust & Features Section */}
      <section className="py-48 px-6 bg-[#0e0e0e]/50 border-y border-white/5 relative">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-32">
            <h2 className="text-[11px] font-black text-blue-500 uppercase tracking-[0.5em] mb-6">The Competitive Edge</h2>
            <h3 className="text-5xl md:text-7xl font-black tracking-tighter text-white">Why leaders choose us.</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <TrustCard 
              icon="⚡"
              title="Radical Speed"
              desc="48-hour delivery isn't a boast, it's our benchmark. We move at the speed of your business growth."
            />
            <TrustCard 
              icon="🛡️"
              title="Enterprise Grade"
              desc="Cloud-native hosting, SSL encryption, and high-security architecture included in every tier."
            />
            <TrustCard 
              icon="💰"
              title="Conversion DNA"
              desc="Every layout is optimized to drive phone calls and WhatsApp inquiries. We turn visitors into clients."
            />
          </div>
        </div>
      </section>

      {/* The Process Section */}
      <section className="py-48 px-6 overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="flex-1">
              <h2 className="text-[11px] font-black text-blue-500 uppercase tracking-[0.5em] mb-8">The Workflow</h2>
              <h3 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-none mb-10">From Idea to <br/>Impact in 4 Steps.</h3>
              <p className="text-zinc-500 text-xl font-medium leading-relaxed max-w-lg mb-12">
                Our proprietary deployment pipeline ensures a seamless transition from your brick-and-mortar reality to your digital empire.
              </p>
              <Link to={ROUTES.pricing} className="text-blue-500 font-black text-sm uppercase tracking-widest hover:text-white transition-colors">See Pricing Details →</Link>
            </div>
            
            <div className="flex-1 grid grid-cols-1 gap-10">
              <ProcessStep num="01" title="Strategic Discovery" desc="We analyze your local competition and define your digital value proposition." />
              <ProcessStep num="02" title="Architectural Design" desc="High-fidelity wireframing focused on ultra-mobile responsiveness." />
              <ProcessStep num="03" title="Precision Engineering" desc="Code optimization for sub-1s load times and SEO dominance." />
              <ProcessStep num="04" title="Live Deployment" desc="Global launch with integrated analytics and lead tracking systems." />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Placeholder */}
      <section className="py-48 px-6 bg-[#0d0d0d]/80 border-t border-white/5">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-24">
            <h2 className="text-[10px] font-black text-zinc-700 uppercase tracking-[0.5em] mb-6">Client Echoes</h2>
            <h3 className="text-4xl font-black tracking-tighter">Trusted by 120+ Local Leaders.</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
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
      <section className="py-56 px-6 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-blue-600/10 blur-[200px] pointer-events-none"></div>
        <div className="container mx-auto max-w-5xl text-center relative z-10 animate-fade-up">
          <h2 className="text-6xl md:text-9xl font-black tracking-tighter mb-14 leading-none text-white">
            DOMINATE YOUR <br/> <span className="text-blue-500">LOCAL MARKET.</span>
          </h2>
          <p className="text-zinc-500 text-2xl mb-16 max-w-3xl mx-auto font-medium">
            Stop losing customers to outdated websites. Upgrade your brand to the Divyansh Agency standard today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-10">
            <a 
              href={`tel:${BUSINESS_INFO.phone}`}
              className="px-16 py-8 bg-white text-black rounded-3xl font-black text-2xl hover:bg-blue-600 hover:text-white transition-all duration-500 hover:scale-105 shadow-4xl"
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
  <div className="group p-14 bg-zinc-900/30 border border-white/5 rounded-[48px] hover:border-blue-500/50 transition-all duration-700 hover:shadow-2xl hover:-translate-y-4">
    <div className="text-5xl mb-10 group-hover:scale-110 transition-transform inline-block">{icon}</div>
    <h3 className="text-3xl font-black text-white mb-6 tracking-tight">{title}</h3>
    <p className="text-zinc-500 text-lg leading-relaxed font-medium">{desc}</p>
  </div>
);

const ProcessStep = ({ num, title, desc }: { num: string, title: string, desc: string }) => (
  <div className="flex gap-10 items-start group">
    <div className="text-xl font-black text-zinc-800 tracking-widest pt-1 group-hover:text-blue-500 transition-colors">{num}</div>
    <div>
      <h4 className="text-2xl font-black text-white mb-3 tracking-tight group-hover:text-blue-400 transition-colors">{title}</h4>
      <p className="text-zinc-500 text-lg font-medium leading-relaxed">{desc}</p>
    </div>
  </div>
);

const TestimonialCard = ({ name, role, quote }: { name: string, role: string, quote: string }) => (
  <div className="p-12 glass rounded-[40px] border border-white/5 hover:border-blue-500/30 transition-all">
    <div className="text-blue-500 text-4xl mb-8">“</div>
    <p className="text-zinc-400 text-lg italic mb-10 font-medium leading-relaxed">
      {quote}
    </p>
    <div>
      <h5 className="text-white font-black text-lg tracking-tight">{name}</h5>
      <p className="text-zinc-600 font-bold text-xs uppercase tracking-widest mt-1">{role}</p>
    </div>
  </div>
);

export default Home;