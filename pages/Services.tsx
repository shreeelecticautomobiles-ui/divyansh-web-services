
import React from 'react';
import { BUSINESS_INFO } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-lg text-gray-600">Everything you need to get your business online today.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="border border-gray-200 rounded-2xl p-8 flex flex-col h-full hover:border-blue-300 transition-colors shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">One-Page Website</h2>
            <ul className="space-y-3 text-gray-600 mb-8 flex-grow">
              <li className="flex items-center gap-2">✅ Mobile-friendly design</li>
              <li className="flex items-center gap-2">✅ WhatsApp & Call buttons</li>
              <li className="flex items-center gap-2">✅ Google Maps location</li>
              <li className="flex items-center gap-2">✅ Business info & timing</li>
              <li className="flex items-center gap-2">✅ Delivery in 48 hours</li>
            </ul>
            <div className="pt-6 border-t border-gray-100">
              <a 
                href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=I want to know about One-Page Website`}
                className="block w-full text-center py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700"
              >
                Inquire Now
              </a>
            </div>
          </div>

          {/* Service 2 */}
          <div className="border border-gray-200 rounded-2xl p-8 flex flex-col h-full hover:border-blue-300 transition-colors shadow-sm bg-blue-50/30">
            <div className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full w-fit mb-4">MOST POPULAR</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Multi-Page Website</h2>
            <ul className="space-y-3 text-gray-600 mb-8 flex-grow">
              <li className="flex items-center gap-2">✅ Home, Services, Contact, About</li>
              <li className="flex items-center gap-2">✅ Detailed service descriptions</li>
              <li className="flex items-center gap-2">✅ Professional look & feel</li>
              <li className="flex items-center gap-2">✅ Better for growing businesses</li>
              <li className="flex items-center gap-2">✅ WhatsApp integrated</li>
            </ul>
            <div className="pt-6 border-t border-gray-100">
              <a 
                href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=I want to know about Multi-Page Website`}
                className="block w-full text-center py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700"
              >
                Inquire Now
              </a>
            </div>
          </div>

          {/* Service 3 */}
          <div className="border border-gray-200 rounded-2xl p-8 flex flex-col h-full hover:border-blue-300 transition-colors shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Domain & Setup</h2>
            <ul className="space-y-3 text-gray-600 mb-8 flex-grow">
              <li className="flex items-center gap-2">✅ Business name domain (.in / .com)</li>
              <li className="flex items-center gap-2">✅ Professional email setup</li>
              <li className="flex items-center gap-2">✅ Website linked properly</li>
              <li className="flex items-center gap-2">✅ SSL security certificate</li>
              <li className="flex items-center gap-2">✅ Full ownership control</li>
            </ul>
            <div className="pt-6 border-t border-gray-100">
              <a 
                href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=I want to know about Domain and Setup`}
                className="block w-full text-center py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700"
              >
                Inquire Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
