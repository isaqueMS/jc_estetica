
import React, { useState } from 'react';

interface NavbarProps {
  isScrolled: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Tratamentos', href: '#tratamentos' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Galeria', href: '#galeria' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
      isScrolled ? 'bg-white/90 backdrop-blur-lg py-4 shadow-xl border-b border-[#2c0414]/5' : 'bg-transparent py-8'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className={`font-serif text-3xl tracking-tighter transition-colors duration-500 ${isScrolled ? 'text-[#2c0414]' : 'text-white'}`}>
          JC <span className="font-light italic">ESTÉTICA</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-sm uppercase tracking-[0.2em] font-light transition-colors relative group ${
                isScrolled ? 'text-gray-800' : 'text-white/90'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-2 left-0 w-0 h-px bg-[#d8a8b3] transition-all duration-300 group-hover:w-full`}></span>
            </a>
          ))}
          <a href="#contato" className={`px-8 py-3 rounded-full text-xs uppercase tracking-widest font-semibold transition-all ${
            isScrolled 
              ? 'bg-[#2c0414] text-white hover:bg-[#4a0a22]' 
              : 'bg-white text-[#2c0414] hover:bg-[#d8a8b3] hover:text-[#2c0414]'
          }`}>
            Agendar
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden flex flex-col gap-1.5 z-[110] transition-colors ${isScrolled ? 'text-[#2c0414]' : 'text-white'}`}
        >
          <div className={`w-8 h-0.5 bg-current transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-8 h-0.5 bg-current transition-all ${isOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-8 h-0.5 bg-current transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
        </button>

        {/* Mobile Overlay */}
        <div className={`fixed inset-0 bg-[#2c0414] flex flex-col items-center justify-center gap-8 transition-all duration-500 z-[105] ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="text-white text-3xl font-serif hover:text-[#d8a8b3] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contato" 
            onClick={() => setIsOpen(false)}
            className="mt-8 px-12 py-4 bg-[#d8a8b3] text-[#2c0414] rounded-full uppercase tracking-widest font-bold"
          >
            Agendar Agora
          </a>
        </div>
      </div>
    </nav>
  );
};
