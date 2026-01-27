
import React from 'react';
import { BUSINESS_INFO } from '../constants';

const Pricing: React.FC = () => {
  return (
    <div className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Simple & Transparent Pricing</h1>
          <p className="text-lg text-gray-600">No hidden charges. No technical jargon. Just results.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Starter Plan */}
          <div className="border border-gray-200 rounded-2xl p-10 flex flex-col">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Starter</h2>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-extrabold text-gray-900">₹2,000</span>
              <span className="text-gray-500">One-time</span>
            </div>
            <ul className="space-y-4 mb-10 flex-grow text-gray-700">
              <li className="flex items-center gap-3">
                <span className="text-green-500 font-bold">✓</span> One-page professional website
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-500 font-bold">✓</span> WhatsApp & Call button
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-500 font-bold">✓</span> Google Maps integrated
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-500 font-bold">✓</span> Mobile-friendly design
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-500 font-bold">✓</span> 48-hour delivery
              </li>
            </ul>
            <a 
              href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=I want to start with the ₹2000 plan`}
              className="block w-full text-center py-4 border-2 border-blue-600 text-blue-600 rounded-xl font-bold hover:bg-blue-50"
            >
              Choose Starter
            </a>
          </div>

          {/* Professional Plan */}
          <div className="border-2 border-blue-600 rounded-2xl p-10 flex flex-col bg-blue-50/50 shadow-xl relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-sm font-bold px-4 py-1 rounded-full uppercase">
              Recommended
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Professional</h2>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-extrabold text-gray-900">₹4,000</span>
              <span className="text-gray-500">One-time</span>
            </div>
            <ul className="space-y-4 mb-10 flex-grow text-gray-700">
              <li className="flex items-center gap-3 font-semibold">
                <span className="text-green-500 font-bold">✓</span> Website + Custom Domain
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-500 font-bold">✓</span> Multi-page design
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-500 font-bold">✓</span> Professional .in / .com name
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-500 font-bold">✓</span> Better business trust
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-500 font-bold">✓</span> Ideal for serious businesses
              </li>
            </ul>
            <a 
              href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=I want to start with the Professional ₹4000 plan`}
              className="block w-full text-center py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 shadow-lg shadow-blue-200"
            >
              Choose Professional
            </a>
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
          <h3 className="text-xl font-bold mb-4">Payment Terms:</h3>
          <p className="text-gray-700 flex items-center gap-3">
            <span className="text-2xl">💰</span> 
            <strong>50% advance</strong> to start the work, and the remaining 50% after your website goes live and you are satisfied.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
