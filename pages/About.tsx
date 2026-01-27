
import React from 'react';
import { BUSINESS_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <div className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About Divyansh Web Services</h1>
        
        <div className="prose prose-lg text-gray-700 space-y-6">
          <p>
            Divyansh Web Services helps local businesses get online with simple and effective websites. Based in Delhi, we understand that small business owners don't have time for complicated technical talks or expensive monthly fees.
          </p>
          <p>
            The focus is not on fancy, over-the-top design, but on helping customers find your business easily and contact you directly. We believe every coaching center, clinic, and showroom deserves a professional presence on the internet.
          </p>
          
          <div className="bg-blue-50 p-8 rounded-xl border-l-4 border-blue-600 my-10">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Our Commitment:</h3>
            <ul className="space-y-4 text-blue-800">
              <li className="flex gap-3">
                <span className="font-bold text-blue-600">✓</span> 
                <span><strong>Local Service:</strong> We are right here in your city to support you.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-blue-600">✓</span> 
                <span><strong>Personal Attention:</strong> One-on-one discussion about your specific needs.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-blue-600">✓</span> 
                <span><strong>No Technical Confusion:</strong> We use simple language and handle all the setup for you.</span>
              </li>
            </ul>
          </div>

          <p>
            We don't just build a website and leave. We ensure you know how to use it to get more calls and visits from your local customers. 
          </p>
          
          <div className="pt-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to get started?</h3>
            <p className="mb-6">Call or WhatsApp me directly to discuss your business website.</p>
            <div className="flex gap-4">
               <a 
                href={`tel:${BUSINESS_INFO.phone}`} 
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-bold shadow-md hover:bg-blue-700 transition"
              >
                📞 Call Now
              </a>
              <a 
                href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(BUSINESS_INFO.whatsappMessage)}`}
                className="px-6 py-3 bg-green-500 text-white rounded-lg font-bold shadow-md hover:bg-green-600 transition"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
