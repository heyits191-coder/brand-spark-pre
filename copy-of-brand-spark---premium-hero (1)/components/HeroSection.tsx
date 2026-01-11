
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
    <section className="w-full flex flex-col items-center justify-center relative z-10 px-6">
      {/* Cinematic Frame Container - Defined by 16:9 logic */}
      <div className="w-full max-w-[1080px]">
        <div 
          className={`relative w-full transition-all duration-[2400ms] cubic-bezier(0.19, 1, 0.22, 1) ${
            isVisible ? 'opacity-100 translate-y-0 scale-100 blur-0' : 'opacity-0 translate-y-20 scale-[0.95] blur-md'
          }`}
          style={{ aspectRatio: '16 / 9' }}
        >
          {/* Decorative Outer Aura */}
          <div className="absolute -inset-12 bg-[radial-gradient(circle_at_center,rgba(147,112,219,0.1)_0%,transparent_70%)] blur-[80px] -z-10 animate-pulse opacity-40"></div>

          {/* Master Frame Construction */}
          <div className="relative w-full h-full p-[1px] bg-gradient-to-b from-white/90 via-white/40 to-white/5 rounded-[24px] md:rounded-[40px] shadow-[0_80px_160px_-40px_rgba(147,112,219,0.18)] border border-white/60 overflow-hidden group">
            
            {/* Internal Mask */}
            <div className="relative w-full h-full rounded-[23px] md:rounded-[39px] overflow-hidden bg-[#F5F5F7]">
              {/* High-Performance Cinematic Video */}
              <video 
                ref={videoRef}
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover transition-transform duration-[20s] ease-linear group-hover:scale-110"
              >
                <source 
                  src="Ultrarealistic_cinematic_hero_1080p_20260110.mp4" 
                  type="video/mp4" 
                />
              </video>
              
              {/* Intelligent Overlays */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/5 via-transparent to-white/10 opacity-30 mix-blend-overlay"></div>
              
              {/* Frame UI Accents */}
              <div className="absolute top-8 left-10 flex flex-col items-start opacity-0 group-hover:opacity-40 transition-all duration-1000 translate-y-2 group-hover:translate-y-0">
                <span className="text-[9px] font-bold tracking-[0.5em] text-white uppercase mb-2">Perspective.v25</span>
                <div className="w-6 h-[1px] bg-white/60"></div>
              </div>

              <div className="absolute bottom-8 right-10 flex items-center space-x-4 opacity-20 group-hover:opacity-60 transition-all duration-1000">
                <div className="w-2 h-2 rounded-full bg-white animate-pulse shadow-[0_0_15px_rgba(255,255,255,0.8)]"></div>
                <span className="text-[9px] uppercase tracking-[0.6em] text-white font-bold">Spark Protocol Active</span>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Meta Narrative */}
        <div className={`mt-16 transition-all duration-[2000ms] delay-[1000ms] cubic-bezier(0.19, 1, 0.22, 1) ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-6">
            <MetadataItem label="Clarity" index={1} />
            <MetadataItem label="Intelligence" index={2} />
            <MetadataItem label="Scale" index={3} />
          </div>
        </div>
      </div>

      <ScrollIndicator />

      <style>{`
        @keyframes subtle-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
};

const MetadataItem: React.FC<{ label: string; index: number }> = ({ label, index }) => (
  <div className="group cursor-default flex items-center space-x-4">
    <span className="text-[10px] font-bold text-[#1D1D1F]/10 tracking-[0.3em] uppercase transition-colors duration-700 group-hover:text-[#9370DB]/30">0{index}</span>
    <span className="text-[11px] font-bold tracking-[0.6em] uppercase text-[#1D1D1F]/30 group-hover:text-[#1D1D1F] transition-all duration-700 relative">
      {label}
      <span className="absolute -bottom-2 left-0 w-0 h-[1.5px] bg-[#9370DB] transition-all duration-700 group-hover:w-full opacity-40"></span>
    </span>
  </div>
);

export default HeroSection;
