
import React, { useState } from 'react';
import { BUSINESS_INFO } from '../constants';

const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const response = await fetch("https://formspree.io/f/xyzabc123", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      } else {
        setError("Something went wrong. Please try again or WhatsApp me directly.");
      }
    } catch (err) {
      setError("Failed to send. Please try again or WhatsApp me directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-[20px] md:pt-[20px] pb-16 md:pb-40 px-4 md:px-6 bg-[#0b0b0b] max-w-full overflow-x-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32 items-start w-full">
          <div className="animate-fade-up text-center lg:text-left px-2">
            <h1 className="text-[clamp(2.2rem,8vw,5rem)] md:text-[80px] lg:text-[100px] font-black tracking-tighter mb-6 md:mb-12 leading-[1.0] md:leading-[0.9] text-white uppercase font-sans">
              GET YOUR <br/> <span className="text-blue-500">WEBSITE STARTED.</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-500 mb-12 md:mb-24 font-medium leading-relaxed max-w-md mx-auto lg:mx-0">
              Fill the form below or WhatsApp me directly. I'll reply within a few hours.
            </p>

            <div className="space-y-12 md:space-y-20 mb-12 lg:mb-0">
              <div className="group text-center lg:text-left">
                <h3 className="text-[9px] md:text-[10px] font-black text-zinc-700 uppercase tracking-[0.4em] md:tracking-[0.5em] mb-4 md:mb-6">Call Me</h3>
                <a href="tel:+919305972687" className="text-2xl md:text-4xl lg:text-5xl font-black text-white hover:text-blue-500 transition-colors tracking-tighter block">
                  +91 93059 72687
                </a>
              </div>
              
              <div className="group text-center lg:text-left">
                <h3 className="text-[9px] md:text-[10px] font-black text-zinc-700 uppercase tracking-[0.4em] md:tracking-[0.5em] mb-4 md:mb-6">WhatsApp</h3>
                <a href="https://wa.me/919305972687" className="text-2xl md:text-4xl lg:text-5xl font-black text-white hover:text-blue-500 transition-colors tracking-tighter block">
                  WhatsApp Chat
                </a>
              </div>

              <div className="group text-center lg:text-left">
                <h3 className="text-[9px] md:text-[10px] font-black text-zinc-700 uppercase tracking-[0.4em] md:tracking-[0.5em] mb-4 md:mb-6">Location</h3>
                <p className="text-xl md:text-3xl font-black text-zinc-200 tracking-tighter leading-relaxed">{BUSINESS_INFO.location}</p>
              </div>
            </div>
          </div>

          <div className="p-6 md:p-20 bg-zinc-900/30 backdrop-blur-3xl border border-white/5 rounded-3xl md:rounded-[60px] shadow-3xl w-full mx-auto">
            <h2 className="text-2xl md:text-4xl font-black text-white mb-10 md:mb-16 tracking-tight text-center lg:text-left">Tell Me About Your Business</h2>
            
            {isSubmitted ? (
              <div className="p-6 md:p-10 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl md:rounded-[32px] text-center text-emerald-400 font-bold text-lg md:text-xl leading-relaxed animate-fade-up">
                Thank you! I'll WhatsApp you within a few hours.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 md:space-y-10">
                <div className="space-y-2 md:space-y-3">
                  <label className="text-[10px] md:text-[11px] font-black text-zinc-600 uppercase tracking-widest ml-1 block">Your Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    placeholder="Your Full Name"
                    className="w-full bg-black/40 px-5 md:px-8 py-4 md:py-6 border border-white/5 rounded-xl md:rounded-[20px] text-white focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-zinc-850 font-semibold text-sm md:text-base"
                  />
                </div>
                <div className="space-y-2 md:space-y-3">
                  <label className="text-[10px] md:text-[11px] font-black text-zinc-600 uppercase tracking-widest ml-1 block">Your WhatsApp Number</label>
                  <input 
                    type="tel" 
                    name="whatsapp_number"
                    required
                    placeholder="Contact Number"
                    className="w-full bg-black/40 px-5 md:px-8 py-4 md:py-6 border border-white/5 rounded-xl md:rounded-[20px] text-white focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-zinc-850 font-semibold text-sm md:text-base"
                  />
                </div>
                <div className="space-y-2 md:space-y-3">
                  <label className="text-[10px] md:text-[11px] font-black text-zinc-600 uppercase tracking-widest ml-1 block">Your business and what you need</label>
                  <textarea 
                    rows={4}
                    name="message"
                    required
                    placeholder="Example: I run a coaching institute in Delhi and need a website with 5 pages, WhatsApp button, and course details."
                    className="w-full bg-black/40 px-5 md:px-8 py-4 md:py-6 border border-white/5 rounded-xl md:rounded-[20px] text-white focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-zinc-850 font-semibold text-sm md:text-base"
                  ></textarea>
                </div>
                
                {error && (
                  <p className="text-red-400 text-sm font-semibold">{error}</p>
                )}

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 md:py-7 bg-white text-black font-black rounded-xl md:rounded-[24px] text-base md:text-lg hover:bg-blue-600 hover:text-white transition-all duration-500 shadow-2xl active:scale-95 disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? "Sending..." : "Send on WhatsApp"}
                </button>
              </form>
            )}

            {/* Direct WhatsApp Action Button underneath the form */}
            <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-white/5">
              <a 
                href="https://wa.me/919305972687?text=Hi%20Divyansh%2C%2520I%2520want%2520a%2520website%2520for%2520my%2520business"
                target="_blank"
                rel="noreferrer"
                className="block w-full text-center py-4 md:py-6 bg-emerald-600/10 hover:bg-emerald-600/20 text-emerald-400 border border-emerald-500/20 rounded-xl md:rounded-[24px] font-black text-sm md:text-base transition-all duration-300 active:scale-95"
              >
                Or WhatsApp Me Directly →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;