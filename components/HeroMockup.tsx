import React from 'react';

const HeroMockup: React.FC = () => {
  return (
    <div className="relative w-full flex items-center justify-center p-4">
      {/* Subtle blue background glow behind the image */}
      <div className="absolute w-[85%] h-[85%] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none -z-10 animate-pulse duration-[8000ms]"></div>

      {/* Visually prominent image wrapper - expanded max-width for 15% larger size */}
      <div className="relative w-full max-w-full lg:max-w-3xl select-none group flex items-center justify-center">
        {/* Subtle shadow with a soft blue overlay ring */}
        <div className="absolute inset-0 bg-blue-500/5 rounded-[16px] blur-sm transition-all duration-700 group-hover:bg-blue-500/10 pointer-events-none"></div>

        {/* Mockup Image container with 16px border-radius, subtle blue glow, and max-height constraint */}
        <img 
          src="/mockup.webp"
          alt="Client Work Mockups - Skill Mentor Academy and English Journey Institute"
          fetchPriority="high"
          loading="eager"
          width="606"
          height="413"
          decoding="async"
          className="w-full h-auto lg:h-[480px] lg:max-h-[480px] lg:w-auto object-contain rounded-2xl"
        />
      </div>
    </div>
  );
};

export default HeroMockup;
