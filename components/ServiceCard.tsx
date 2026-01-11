
import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

interface Service {
  name: string;
  description: string;
  icon: React.ReactNode;
}

interface ServiceCardProps {
  service: Service;
  index: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  return (
    <div className="group bg-white p-10 rounded-sm border border-gray-100 hover:border-[#d8a8b3]/30 transition-all duration-500 shadow-sm hover:shadow-2xl relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#fcf8f9] rounded-full group-hover:scale-[3] transition-transform duration-700 opacity-50"></div>
      
      <div className="relative z-10">
        <div className="w-14 h-14 flex items-center justify-center bg-[#fcf8f9] text-[#2c0414] text-xl rounded-sm mb-8 group-hover:bg-[#2c0414] group-hover:text-[#d8a8b3] transition-all duration-500">
          {service.icon}
        </div>
        
        <h3 className="text-3xl font-serif text-[#2c0414] mb-4 group-hover:translate-x-2 transition-transform">{service.name}</h3>
        
        <p className="text-gray-500 leading-relaxed font-light mb-8 line-clamp-2">
          {service.description}
        </p>
        
        <button className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#2c0414] group-hover:text-[#d8a8b3] transition-colors">
          Saiba Detalhes <FaChevronRight className="text-[10px]" />
        </button>
      </div>
      
      <div className="absolute top-6 right-6 text-6xl font-serif text-[#fcf8f9] pointer-events-none group-hover:text-[#d8a8b3]/10 transition-colors">
        0{index + 1}
      </div>
    </div>
  );
};
