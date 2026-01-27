
import React from 'react';
import { BUSINESS_INFO } from '../constants';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your inquiry. We will contact you soon!");
  };

  return (
    <div className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Contact Us</h1>
            <p className="text-lg text-gray-600 mb-10">
              Looking for a simple website for your business? We are here to help. Get in touch via any of the following:
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xl">
                  📞
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Call Directly</h3>
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="text-blue-600 text-lg hover:underline font-semibold">{BUSINESS_INFO.phone}</a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xl">
                  💬
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">WhatsApp</h3>
                  <a 
                    href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(BUSINESS_INFO.whatsappMessage)}`} 
                    className="text-green-600 text-lg hover:underline font-semibold"
                  >
                    Message on WhatsApp
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-100 text-gray-600 rounded-full flex items-center justify-center text-xl">
                  📍
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Location</h3>
                  <p className="text-gray-600">{BUSINESS_INFO.location} & nearby areas</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-blue-600 text-white rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-2">Service Area:</h3>
              <p>We serve all areas in Delhi, Noida, Gurgaon, and Ghaziabad. We can also visit your shop or office for discussion.</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Rahul Sharma"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input 
                  type="tel" 
                  required
                  placeholder="e.g. 93059 72687"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Business Type</label>
                <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none">
                  <option>Coaching Center</option>
                  <option>Clinic / Hospital</option>
                  <option>Showroom</option>
                  <option>Local Shop</option>
                  <option>Other Service</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Message (Optional)</label>
                <textarea 
                  rows={4}
                  placeholder="How can we help you?"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition"
              >
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
