
import React from 'react';
import { Link } from 'react-router-dom';
import { BUSINESS_INFO, ROUTES } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="pb-20 md:pb-0">
      {/* Hero Section */}
      <section className="bg-white py-16 md:py-24 px-4 text-center border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Simple Websites for <span className="text-blue-600">Local Businesses</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Helping clinics, coaching centers and local shops get online with clean, mobile-friendly websites that bring real inquiries.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href={`tel:${BUSINESS_INFO.phone}`} 
              className="px-8 py-4 bg-blue-600 text-white rounded-lg font-bold text-lg shadow-md hover:bg-blue-700 transition"
            >
              📞 Call Now
            </a>
            <a 
              href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(BUSINESS_INFO.whatsappMessage)}`}
              className="px-8 py-4 bg-green-500 text-white rounded-lg font-bold text-lg shadow-md hover:bg-green-600 transition"
            >
              💬 WhatsApp Now
            </a>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon="📱" 
              title="Works on Mobile" 
              desc="Your customers use phones. We make sure your website looks perfect on every screen." 
            />
            <FeatureCard 
              icon="📍" 
              title="Google Maps Included" 
              desc="Help customers find your exact shop or clinic location easily with integrated maps." 
            />
            <FeatureCard 
              icon="⚡" 
              title="48 Hour Delivery" 
              desc="We don't make you wait. Get your professional business website ready in just 2 days." 
            />
            <FeatureCard 
              icon="📞" 
              title="Direct Contact Buttons" 
              desc="One-tap Call and WhatsApp buttons so customers can reach you instantly." 
            />
            <FeatureCard 
              icon="📄" 
              title="Simple & Clear" 
              desc="No confusing designs. Just clear information about your business that builds trust." 
            />
            <FeatureCard 
              icon="🏠" 
              title="Local Support" 
              desc="Based in Delhi. We understand your business needs and provide personal attention." 
            />
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Who This Is For</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['Coaching Centers', 'Clinics & Diagnostic Centers', 'EV Scooter / E-Rickshaw Showrooms', 'Local Shops', 'Service Providers'].map((item) => (
              <span key={item} className="px-6 py-3 bg-blue-50 text-blue-700 rounded-full font-semibold border border-blue-100">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Divyansh Web Services</h2>
          <ul className="space-y-6">
            <WhyUsItem title="Local service provider" desc="We are available for face-to-face meetings and understand the Delhi market." />
            <WhyUsItem title="Fast 48-hour delivery" desc="Get online quickly without unnecessary delays." />
            <WhyUsItem title="Simple & clean design" desc="Your customers will find exactly what they need without confusion." />
            <WhyUsItem title="No technical headache" desc="We handle everything. You just focus on your business." />
            <WhyUsItem title="Personal support" desc="Direct access to the designer for any changes or help." />
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-blue-700 text-white text-center">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold mb-6">Want a simple website like this for your business?</h2>
          <p className="text-xl mb-10 opacity-90">Get a professional online presence that brings real customers.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to={ROUTES.demos} className="px-8 py-4 bg-white text-blue-700 rounded-lg font-bold text-lg hover:bg-gray-100 transition">
              View Demo Websites
            </Link>
            <a 
              href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(BUSINESS_INFO.whatsappMessage)}`}
              className="px-8 py-4 bg-green-500 text-white rounded-lg font-bold text-lg hover:bg-green-600 transition"
            >
              Contact on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, desc }: { icon: string, title: string, desc: string }) => (
  <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{desc}</p>
  </div>
);

const WhyUsItem = ({ title, desc }: { title: string, desc: string }) => (
  <li className="flex gap-4 items-start">
    <div className="bg-blue-100 text-blue-700 p-2 rounded-full mt-1">
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
      </svg>
    </div>
    <div>
      <h4 className="text-lg font-bold text-gray-900">{title}</h4>
      <p className="text-gray-600">{desc}</p>
    </div>
  </li>
);

export default Home;
