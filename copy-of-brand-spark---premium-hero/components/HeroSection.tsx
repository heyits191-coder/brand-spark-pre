
import React, { useEffect, useState, useRef } from 'react';
import ScrollIndicator from './ScrollIndicator';

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="w-full max-w-[1440px] px-6 md:px-12 flex flex-col items-center justify-center min-h-screen relative overflow-hidden">
      {/* Refined Ambient Lighting */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-[radial-gradient(circle_at_center,rgba(147,112,219,0.1)_0%,transparent_60%)] -z-10 transition-all duration-[4000ms] ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}></div>
      <div className="absolute top-[20%] left-[10%] w-[30%] h-[30%] bg-white/40 blur-[120px] rounded-full animate-ambient -z-10"></div>

      <div 
        className={`w-full max-w-[1240px] aspect-video relative transition-all duration-[2000ms] cubic-bezier(0.19, 1, 0.22, 1) ${
          isVisible ? 'opacity-100 translate-y-0 scale-100 blur-0' : 'opacity-0 translate-y-24 scale-[0.97] blur-sm'
        }`}
      >
        {/* Signature Frame Construction */}
        <div className="relative w-full h-full p-[1px] bg-gradient-to-b from-white/95 via-white/40 to-white/10 rounded-[14px] md:rounded-[28px] shadow-[0_100px_180px_-40px_rgba(147,112,219,0.22)] border border-white/70 overflow-hidden group">
          
          <div className="relative w-full h-full rounded-[13px] md:rounded-[27px] overflow-hidden bg-[#EDEDED]">
            {/* Seamless Cinematic Video */}
            <video 
              ref={videoRef}
              autoPlay 
              loop 
              muted 
              playsInline 
              preload="auto"
              className="w-full h-full object-cover opacity-100 scale-[1.01] transition-transform duration-[15000ms] ease-linear group-hover:scale-110"
            >
              <source 
                src="/videos/Ultrarealistic_cinematic_hero_1080p_20260110.mp4" 
                type="video/mp4" 
              />
            </video>
            
            {/* Micro-Interaction Overlay Mask */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/10 opacity-40 mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(147,112,219,0.05)_0%,transparent_60%)] pointer-events-none"></div>

            {/* Editorial Metadata Chrome */}
            <div className="absolute top-8 left-10 flex items-start flex-col opacity-0 group-hover:opacity-60 translate-y-4 group-hover:translate-y-0 transition-all duration-1000 delay-100">
               <span className="text-[10px] font-bold tracking-[0.4em] text-white uppercase mb-1">Observation</span>
               <div className="w-8 h-[1px] bg-white/40"></div>
            </div>

            <div className="absolute bottom-8 right-10 flex items-center space-x-3 opacity-30 group-hover:opacity-100 transition-all duration-1000 translate-y-4 group-hover:translate-y-0">
               <div className="w-2 h-2 rounded-full border border-white/50 animate-pulse"></div>
               <span className="text-[9px] uppercase tracking-[0.5em] text-white font-bold">Protocol Active</span>
            </div>
          </div>
        </div>

        {/* Ambient Halo Glow */}
        <div className="absolute -inset-20 bg-[radial-gradient(circle_at_center,rgba(147,112,219,0.2)_0%,transparent_70%)] blur-[100px] -z-20 transition-opacity duration-1000 opacity-20 group-hover:opacity-40"></div>
      </div>

      {/* Hero Content Metadata */}
      <div className={`mt-24 transition-all duration-[2000ms] delay-[1000ms] cubic-bezier(0.19, 1, 0.22, 1) ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <div className="flex flex-col items-center space-y-8">
          <div className="flex items-center space-x-12">
            <MetadataItem label="Clarity" />
            <MetadataItem label="Intelligence" />
            <MetadataItem label="Scale" />
          </div>
        </div>
      </div>

      <ScrollIndicator />

      <style>{`
        @keyframes progress-halo {
          0% { opacity: 0.1; transform: scale(0.9); }
          50% { opacity: 0.3; transform: scale(1.1); }
          100% { opacity: 0.1; transform: scale(0.9); }
        }
      `}</style>
    </section>
  );
};

const MetadataItem: React.FC<{ label: string }> = ({ label }) => (
  <div className="flex items-center space-x-4">
    <span className="text-[11px] font-bold tracking-[0.7em] uppercase text-[#1D1D1F]/30 hover:text-[#1D1D1F] transition-colors duration-700 cursor-default">
      {label}
    </span>
  </div>
);

export default HeroSection;
