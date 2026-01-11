
import React, { useState } from 'react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Pedido de agendamento enviado com sucesso! Entraremos em contato em breve.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white/5 p-12 glass-morphism rounded-sm border border-white/10">
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="relative group">
          <input 
            type="text" 
            name="name"
            required
            className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-[#d8a8b3] transition-colors peer text-white font-light"
            placeholder=" "
            onChange={handleChange}
          />
          <label className="absolute top-4 left-0 text-white/40 pointer-events-none transition-all peer-focus:-top-2 peer-focus:text-[10px] peer-focus:text-[#d8a8b3] peer-focus:uppercase peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-[10px]">Nome Completo</label>
        </div>
        <div className="relative group">
          <input 
            type="email" 
            name="email"
            required
            className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-[#d8a8b3] transition-colors peer text-white font-light"
            placeholder=" "
            onChange={handleChange}
          />
          <label className="absolute top-4 left-0 text-white/40 pointer-events-none transition-all peer-focus:-top-2 peer-focus:text-[10px] peer-focus:text-[#d8a8b3] peer-focus:uppercase peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-[10px]">Seu E-mail</label>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="relative group">
          <input 
            type="tel" 
            name="phone"
            className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-[#d8a8b3] transition-colors peer text-white font-light"
            placeholder=" "
            onChange={handleChange}
          />
          <label className="absolute top-4 left-0 text-white/40 pointer-events-none transition-all peer-focus:-top-2 peer-focus:text-[10px] peer-focus:text-[#d8a8b3] peer-focus:uppercase peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-[10px]">WhatsApp</label>
        </div>
        <div className="relative group">
          <select 
            name="service"
            className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-[#d8a8b3] transition-colors text-white font-light appearance-none"
            onChange={handleChange}
          >
            <option value="" className="bg-[#2c0414]">Selecione o Tratamento</option>
            <option value="massagem" className="bg-[#2c0414]">Massoterapia Premium</option>
            <option value="limpeza" className="bg-[#2c0414]">Estética Facial Avançada</option>
            <option value="posop" className="bg-[#2c0414]">Pós-Operatório</option>
            <option value="fisioterapia" className="bg-[#2c0414]">Fisioterapia & Reabilitação</option>
          </select>
        </div>
      </div>

      <div className="relative group mb-12">
        <textarea 
          name="message"
          rows={3}
          className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-[#d8a8b3] transition-colors peer text-white font-light resize-none"
          placeholder=" "
          onChange={handleChange}
        ></textarea>
        <label className="absolute top-4 left-0 text-white/40 pointer-events-none transition-all peer-focus:-top-2 peer-focus:text-[10px] peer-focus:text-[#d8a8b3] peer-focus:uppercase peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-[10px]">Sua mensagem ou preferência de horário</label>
      </div>

      <button type="submit" className="w-full bg-[#d8a8b3] text-[#2c0414] py-5 rounded-sm uppercase tracking-widest font-bold hover:bg-white transition-all transform active:scale-95 shadow-xl">
        Solicitar Pré-Agendamento
      </button>
    </form>
  );
};
