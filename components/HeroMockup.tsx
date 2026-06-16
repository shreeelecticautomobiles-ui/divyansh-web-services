import React from 'react';

const HeroMockup: React.FC = () => {
  return (
    <div className="relative w-full flex items-center justify-center p-4">
      {/* Subtle blue background glow behind the image */}
      <div className="absolute w-[85%] h-[85%] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none -z-10 animate-pulse duration-[8000ms]"></div>

      {/* Visually prominent image wrapper */}
      <div className="relative w-full max-w-2xl select-none group">
        {/* Subtle shadow with a soft blue overlay ring */}
        <div className="absolute inset-0 bg-blue-500/5 rounded-[16px] blur-sm transition-all duration-700 group-hover:bg-blue-500/10 pointer-events-none"></div>

        {/* Mockup Image container with 16px border-radius & subtle blue glow */}
        <img
          src="https://i.ibb.co/yFvgG1r3/Untitled-design-1.png"
          alt="Client Work Mockups - Skill Mentor Academy & English Journey Institute"
          referrerPolicy="no-referrer"
          className="w-full h-auto object-contain rounded-[16px] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(59,130,246,0.15)] transition-all duration-700 group-hover:scale-[1.015] group-hover:shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_40px_rgba(59,130,246,0.25)] relative z-10"
        />
      </div>
    </div>
  );
};

export default HeroMockup;
