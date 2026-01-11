
import React, { useState, useEffect } from 'react';
import { 
  FaInstagram, FaWhatsapp, FaMapMarkerAlt, 
  FaChevronRight, FaArrowRight, FaFingerprint, FaPlus, FaMinus, FaCheckCircle, FaSpinner 
} from 'react-icons/fa';
import { SERVICES, BENEFITS, GALLERY_ITEMS, FAQ_ITEMS } from './constants';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mqakpjne", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormStatus('success');
        form.reset();
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  return (
    <div className="min-h-screen selection:bg-[#c5a059] selection:text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-700 px-6 py-4 ${scrolled ? 'bg-[#f9f7f2]/90 backdrop-blur-md border-b border-[#c5a059]/10 py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl tracking-[0.3em] font-serif">
            JC <span className="text-[#c5a059]">ESTÉTICA</span>
          </div>
          <div className="hidden md:flex gap-12 text-[10px] uppercase tracking-[0.4em] font-light">
            {['Início', 'Conceito', 'Tratamentos', 'Galeria', 'FAQ', 'Contato'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-[#c5a059] transition-colors">{item}</a>
            ))}
          </div>
          <a href="#contato" className="btn-gold px-8 py-2 text-[10px] uppercase tracking-widest font-medium">
            Reserva
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="h-screen relative flex items-center justify-center overflow-hidden bg-[#1a0f12]">
        <img 
          src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=1920" 
          alt="Hero" 
          className="absolute inset-0 w-full h-full object-cover opacity-40 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f12] via-transparent to-transparent"></div>
        <div className="relative z-10 text-center px-6">
          <span className="text-[#c5a059] uppercase tracking-[0.6em] text-[10px] mb-6 block reveal">The Art of Wellbeing</span>
          <h1 className="text-white text-5xl md:text-8xl font-serif mb-8 reveal">
            Rebele sua <br />
            <span className="italic font-light opacity-80">Essência</span>
          </h1>
          <div className="w-px h-24 bg-[#c5a059] mx-auto reveal" style={{ transitionDelay: '0.4s' }}></div>
        </div>
      </section>

      {/* Concept Section */}
      <section id="conceito" className="py-32 bg-[#f9f7f2]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">
          <div className="reveal">
            <span className="text-[#c5a059] uppercase tracking-[0.4em] text-[10px] mb-4 block">Nosso Legado</span>
            <h2 className="text-4xl md:text-6xl font-serif mb-8 text-[#1a0f12]">9 anos esculpindo <br/><span className="italic">perfeição</span>.</h2>
            <p className="text-gray-500 font-light leading-loose text-lg mb-10">
              Na JC Estética, não acreditamos em tratamentos genéricos. Cada sessão é uma coreografia de técnicas avançadas e toques intuitivos, desenhada para restaurar o equilíbrio que a vida moderna consome.
            </p>
            <div className="grid grid-cols-2 gap-12">
              <div>
                <span className="text-3xl font-serif text-[#c5a059]">3k+</span>
                <p className="text-[10px] uppercase tracking-widest mt-2">Vidas Transformadas</p>
              </div>
              <div>
                <span className="text-3xl font-serif text-[#c5a059]">15+</span>
                <p className="text-[10px] uppercase tracking-widest mt-2">Protocolos Exclusivos</p>
              </div>
            </div>
          </div>
          <div className="relative reveal" style={{ transitionDelay: '0.2s' }}>
            <img 
              src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&q=80&w=800" 
              alt="Conceito" 
              className="image-mask w-full h-[600px] object-cover shadow-2xl"
            />
            <div className="absolute -bottom-12 -left-12 bg-[#1a0f12] p-12 hidden md:block border border-[#c5a059]/20">
              <FaFingerprint className="text-[#c5a059] text-4xl mb-4" />
              <p className="text-white text-[10px] uppercase tracking-[0.3em]">DNA JC Advanced</p>
            </div>
          </div>
        </div>
      </section>

      {/* Treatments Grid */}
      <section id="tratamentos" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 reveal">
            <div>
              <span className="text-[#c5a059] uppercase tracking-[0.4em] text-[10px] mb-4 block">Menu de Luxo</span>
              <h2 className="text-4xl md:text-6xl font-serif text-[#1a0f12]">Experiências <span className="italic">Customizadas</span></h2>
            </div>
            <a href="#" className="text-[10px] uppercase tracking-widest border-b border-[#c5a059] pb-2 mt-8 md:mt-0 hover:text-[#c5a059] transition-all">Ver todos os rituais</a>
          </div>

          <div className="grid md:grid-cols-3 gap-1px bg-gray-100 border border-gray-100">
            {SERVICES.slice(0, 6).map((service, idx) => (
              <div key={idx} className="bg-white p-12 hover:bg-[#f9f7f2] transition-colors duration-700 group reveal">
                <div className="text-[#c5a059] mb-8 text-2xl group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                <h3 className="text-xl font-serif mb-4 text-[#1a0f12]">{service.name}</h3>
                <p className="text-gray-400 font-light text-sm leading-relaxed mb-8">{service.description}</p>
                <div className="flex items-center gap-2 text-[9px] uppercase tracking-[0.3em] font-bold opacity-0 group-hover:opacity-100 transition-all">
                  Explorar Ritual <FaChevronRight size={8} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="galeria" className="py-32 bg-[#1a0f12] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-20 flex justify-between items-center">
          <h2 className="text-4xl md:text-6xl font-serif reveal">Atmosfera & <span className="italic text-[#c5a059]">Resultados</span></h2>
        </div>
        <div className="flex gap-6 overflow-x-auto pb-12 scrollbar-hide px-6">
          {GALLERY_ITEMS.map((item, idx) => (
            <div key={idx} className="min-w-[300px] md:min-w-[450px] h-[550px] relative group reveal" style={{ transitionDelay: `${idx * 0.1}s` }}>
              <img src={item.image} alt={item.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105" />
              <div className="absolute bottom-10 left-10">
                <p className="text-[10px] uppercase tracking-[0.4em] mb-2 text-[#c5a059]">{item.description}</p>
                <h4 className="text-2xl font-serif">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-20 reveal">
            <span className="text-[#c5a059] uppercase tracking-[0.4em] text-[10px] mb-4 block">Dúvidas Frequentes</span>
            <h2 className="text-4xl md:text-5xl font-serif text-[#1a0f12]">Esclareça suas <span className="italic">Curiosidades</span></h2>
          </div>

          <div className="space-y-4 reveal">
            {FAQ_ITEMS.map((item, idx) => (
              <div key={idx} className="border-b border-gray-100">
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full py-8 flex justify-between items-center text-left group"
                >
                  <span className={`text-lg md:text-xl font-serif transition-colors duration-500 ${openFaq === idx ? 'text-[#c5a059]' : 'text-[#1a0f12]'}`}>
                    {item.question}
                  </span>
                  <div className={`transition-transform duration-500 ${openFaq === idx ? 'rotate-180 text-[#c5a059]' : 'text-gray-300'}`}>
                    {openFaq === idx ? <FaMinus size={14} /> : <FaPlus size={14} />}
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-700 ease-in-out ${openFaq === idx ? 'max-h-96 opacity-100 pb-8' : 'max-h-0 opacity-0'}`}>
                  <p className="text-gray-500 font-light leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-32 bg-[#f9f7f2] relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#1a0f12] -skew-x-12 translate-x-1/2 opacity-5 hidden lg:block"></div>
        
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 relative z-10">
          <div className="reveal">
            <span className="text-[#c5a059] uppercase tracking-[0.4em] text-[10px] mb-4 block">Reserve sua Experiência</span>
            <h2 className="text-5xl md:text-6xl font-serif mb-12 text-[#1a0f12]">Agende seu <br/><span className="italic">momento sublime</span>.</h2>
            <div className="space-y-12">
              <div className="flex gap-6 items-start group">
                <div className="w-12 h-12 bg-white flex items-center justify-center rounded-full shadow-sm text-[#c5a059] group-hover:bg-[#c5a059] group-hover:text-white transition-all duration-500">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest font-bold mb-2">Sanctuary Address</h4>
                  <p className="font-light text-gray-500">Av. Tancredo Neves, 1283, Salvador/BA</p>
                </div>
              </div>
              <div className="flex gap-6 items-start group">
                <div className="w-12 h-12 bg-white flex items-center justify-center rounded-full shadow-sm text-[#c5a059] group-hover:bg-[#c5a059] group-hover:text-white transition-all duration-500">
                  <FaWhatsapp />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest font-bold mb-2">Private Line</h4>
                  <p className="font-light text-gray-500">(71) 99971-6572 / 99249-0105</p>
                </div>
              </div>
            </div>
            
            <div className="mt-20 p-10 border border-[#c5a059]/10 bg-white/40 backdrop-blur-sm rounded-sm">
              <h4 className="text-sm font-serif mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-[#c5a059]"></span> 
                Atendimento
              </h4>
              <div className="space-y-4">
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="text-[10px] uppercase tracking-widest text-gray-400">Seg — Sex</span>
                  <span className="text-[10px] uppercase tracking-widest text-[#1a0f12]">08:00 — 17:00</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="text-[10px] uppercase tracking-widest text-gray-400">Sábado</span>
                  <span className="text-[10px] uppercase tracking-widest text-[#1a0f12]">08:00 — 12:00</span>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="bg-[#1a0f12]/10 backdrop-blur-3xl p-1 md:p-12 rounded-sm border border-[#c5a059]/20 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.1)] relative overflow-hidden group">
              {/* Internal Glow Enhancement */}
              <div className="absolute -top-32 -right-32 w-80 h-80 bg-[#c5a059]/15 rounded-full blur-[100px] transition-all duration-1000 group-hover:bg-[#c5a059]/25"></div>

              {formStatus === 'success' ? (
                <div className="h-[500px] flex flex-col items-center justify-center text-center animate-fade-in p-6">
                  <div className="w-24 h-24 bg-[#c5a059]/10 rounded-full flex items-center justify-center mb-8">
                    <FaCheckCircle className="text-[#c5a059] text-5xl" />
                  </div>
                  <h3 className="text-3xl font-serif text-[#1a0f12] mb-4">Solicitação Enviada</h3>
                  <p className="text-gray-500 font-light leading-relaxed max-w-xs">Sua jornada de renovação começa agora. Entraremos em contato em breve para confirmar sua reserva.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-12 p-4 md:p-0 relative z-10">
                  <div className="relative group">
                    <input 
                      required
                      name="name"
                      type="text" 
                      placeholder=" "
                      className="peer w-full bg-transparent border-b border-gray-200/50 py-4 outline-none focus:border-[#c5a059] transition-all text-sm font-light text-[#1a0f12]" 
                    />
                    <label className="absolute left-0 top-4 text-gray-400 text-sm font-light transition-all pointer-events-none peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-[#c5a059] peer-focus:uppercase peer-focus:tracking-widest peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:text-[#c5a059]">
                      Nome Completo
                    </label>
                  </div>

                  <div className="relative group">
                    <input 
                      required
                      name="email"
                      type="email" 
                      placeholder=" "
                      className="peer w-full bg-transparent border-b border-gray-200/50 py-4 outline-none focus:border-[#c5a059] transition-all text-sm font-light text-[#1a0f12]" 
                    />
                    <label className="absolute left-0 top-4 text-gray-400 text-sm font-light transition-all pointer-events-none peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-[#c5a059] peer-focus:uppercase peer-focus:tracking-widest peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:text-[#c5a059]">
                      E-mail Profissional
                    </label>
                  </div>

                  <div className="relative group">
                    <select 
                      name="service"
                      className="peer w-full bg-transparent border-b border-gray-200/50 py-4 outline-none focus:border-[#c5a059] transition-all text-sm font-light text-gray-500 appearance-none cursor-pointer"
                    >
                      <option value="">Selecione o Ritual</option>
                      <option value="massagem">Massagem Terapêutica Premium</option>
                      <option value="estetica">Estética Facial Advanced</option>
                      <option value="posop">Pós-Operatório Especializado</option>
                      <option value="outro">Outros Protocolos</option>
                    </select>
                    <div className="absolute right-0 top-4 pointer-events-none text-gray-300">
                      <FaChevronRight className="rotate-90 text-[10px]" />
                    </div>
                  </div>

                  <div className="relative group">
                    <textarea 
                      name="message"
                      placeholder=" "
                      className="peer w-full bg-transparent border-b border-gray-200/50 py-4 outline-none focus:border-[#c5a059] transition-all text-sm font-light text-[#1a0f12] resize-none h-28"
                    />
                    <label className="absolute left-0 top-4 text-gray-400 text-sm font-light transition-all pointer-events-none peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-[#c5a059] peer-focus:uppercase peer-focus:tracking-widest peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:text-[#c5a059]">
                      Suas Preferências ou Dúvidas
                    </label>
                  </div>
                  
                  {formStatus === 'error' && (
                    <div className="bg-red-50/50 backdrop-blur-md p-4 border-l-2 border-red-400">
                      <p className="text-red-400 text-[9px] uppercase tracking-widest font-bold">Infelizmente ocorreu um erro. Por favor, utilize o botão do WhatsApp ao lado.</p>
                    </div>
                  )}

                  <button 
                    disabled={formStatus === 'submitting'}
                    type="submit" 
                    className="w-full relative overflow-hidden group/btn bg-[#1a0f12] text-white py-6 text-[10px] uppercase tracking-[0.4em] font-bold transition-all duration-700 disabled:bg-gray-400"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-4">
                      {formStatus === 'submitting' ? (
                        <>Solicitando <FaSpinner className="animate-spin" /></>
                      ) : (
                        <>Confirmar Solicitação <FaArrowRight className="group-hover/btn:translate-x-2 transition-transform" /></>
                      )}
                    </span>
                    <div className="absolute inset-0 bg-[#c5a059] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500"></div>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-white border-t border-gray-50 text-center">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
          <div className="text-3xl tracking-[0.4em] font-serif mb-8">
            JC <span className="text-[#c5a059]">ESTÉTICA</span>
          </div>
          <div className="flex gap-12 mb-12">
            <a href="#" className="text-gray-300 hover:text-[#c5a059] transition-all duration-500 transform hover:scale-125"><FaInstagram size={20} /></a>
            <a href="#" className="text-gray-300 hover:text-[#c5a059] transition-all duration-500 transform hover:scale-125"><FaWhatsapp size={20} /></a>
          </div>
          <p className="text-[9px] uppercase tracking-[0.6em] text-gray-300 font-light">
            © 2024 JC Advanced Esthetics & Wellness • Crafted for the Extraordinary.
          </p>
        </div>
      </footer>

      {/* WhatsApp Floating */}
      <a 
        href="https://wa.me/5571999716572" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-10 right-10 z-50 bg-[#1a0f12] text-[#c5a059] w-16 h-16 rounded-full shadow-2xl hover:bg-[#c5a059] hover:text-white transition-all duration-500 flex items-center justify-center group"
      >
        <FaWhatsapp size={28} className="group-hover:scale-110 transition-transform" />
        <span className="absolute right-20 bg-white text-[#1a0f12] py-2 px-4 rounded-sm text-[10px] uppercase tracking-widest font-bold opacity-0 pointer-events-none group-hover:opacity-100 group-hover:right-18 transition-all shadow-xl whitespace-nowrap">Converse Conosco</span>
      </a>
    </div>
  );
};

export default App;
