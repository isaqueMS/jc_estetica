
import React from 'react';
import { FaPlay } from 'react-icons/fa';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Dark Overlay */}
      <div className="absolute inset-0 bg-[#1a020c]">
        <img 
          src="https://picsum.photos/seed/spa-hero/1920/1080" 
          alt="Spa Experience" 
          className="w-full h-full object-cover opacity-40 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2c0414]/60 via-transparent to-[#2c0414]/90"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center text-white">
        <div className="mb-8 inline-flex items-center gap-4 px-6 py-2 border border-white/20 rounded-full glass-morphism animate-bounce">
          <span className="w-2 h-2 bg-[#d8a8b3] rounded-full"></span>
          <span className="text-xs uppercase tracking-[0.4em] font-light">Elegância em cada toque</span>
        </div>
        
        <h1 className="text-7xl md:text-[120px] font-serif leading-none mb-6 animate-pulse">
          JC <span className="italic font-light opacity-80">Estética</span>
        </h1>
        
        <p className="text-xl md:text-2xl font-light text-white/70 max-w-2xl mx-auto mb-12 tracking-wide leading-relaxed">
          Onde a ciência encontra o bem-estar absoluto para revelar sua melhor versão.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <a href="#tratamentos" className="bg-[#d8a8b3] text-[#2c0414] px-12 py-5 rounded-full text-sm uppercase tracking-widest font-bold hover:bg-white transition-all transform hover:-translate-y-1 shadow-2xl">
            Descubra Tratamentos
          </a>
          <button className="flex items-center gap-4 group">
            <div className="w-14 h-14 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-[#d8a8b3] group-hover:border-[#d8a8b3] transition-all duration-500">
              <FaPlay className="ml-1 text-[#d8a8b3] group-hover:text-[#2c0414] transition-colors" />
            </div>
            <span className="text-sm uppercase tracking-widest font-light group-hover:text-[#d8a8b3] transition-colors">Conheça nosso espaço</span>
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-50">
        <div className="w-px h-24 bg-gradient-to-b from-[#d8a8b3] to-transparent"></div>
        <span className="text-[10px] uppercase tracking-[0.5em] rotate-180" style={{ writingMode: 'vertical-rl' }}>Scroll Down</span>
      </div>
    </section>
  );
};
