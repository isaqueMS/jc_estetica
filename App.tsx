
import React, { useState, useEffect } from 'react';
import { 
  FaInstagram, FaWhatsapp, FaMapMarkerAlt, 
  FaChevronRight, FaArrowRight, FaFingerprint, FaPlus, FaMinus, FaCheckCircle, FaSpinner 
} from 'react-icons/fa';
import { SERVICES, GALLERY_ITEMS, FAQ_ITEMS } from './constants';
import fundadoraImg from "./src/assets/janai.png";

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
      <nav className={`fixed top-0 w-full z-50 transition-all duration-700 px-4 md:px-6 py-4 ${scrolled ? 'bg-[#f9f7f2]/90 backdrop-blur-md border-b border-[#c5a059]/10 py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-xl md:text-2xl tracking-[0.2em] md:tracking-[0.3em] font-serif">
            JC <span className="text-[#c5a059]">ESTÉTICA</span>
          </div>
          <div className="hidden md:flex gap-12 text-[10px] uppercase tracking-[0.4em] font-light">
            {['Início', 'Conceito', 'Tratamentos', 'Galeria', 'FAQ', 'Contato'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-[#c5a059] transition-colors">{item}</a>
            ))}
          </div>
          <a href="#contato" className="btn-gold px-4 md:px-8 py-2 text-[9px] md:text-[10px] uppercase tracking-widest font-medium">
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
          <span className="text-[#c5a059] uppercase tracking-[0.4em] md:tracking-[0.6em] text-[8px] md:text-[10px] mb-6 block reveal">The Art of Wellbeing</span>
          <h1 className="text-white text-4xl md:text-8xl font-serif mb-8 reveal leading-tight">
            Rebele sua <br />
            <span className="italic font-light opacity-80">Essência</span>
          </h1>
          <div className="w-px h-12 md:h-24 bg-[#c5a059] mx-auto reveal" style={{ transitionDelay: '0.4s' }}></div>
        </div>
      </section>

      {/* Concept Section */}
      <section id="conceito" className="py-20 md:py-32 bg-[#f9f7f2]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <div className="reveal order-2 lg:order-1">
            <span className="text-[#c5a059] uppercase tracking-[0.4em] text-[10px] mb-4 block">Nossa Filosofia</span>
            <h2 className="text-3xl md:text-6xl font-serif mb-8 text-[#1a0f12]">9 anos esculpindo <br/><span className="italic">perfeição</span>.</h2>
            <p className="text-gray-500 font-light leading-relaxed md:leading-loose text-base md:text-lg mb-10">
              Na JC Estética, cada sessão é uma coreografia de técnicas avançadas e toques intuitivos, desenhada para restaurar o equilíbrio que a vida moderna consome.
            </p>
            <div className="grid grid-cols-2 gap-8 md:gap-12">
              <div>
                <span className="text-2xl md:text-3xl font-serif text-[#c5a059]">3k+</span>
                <p className="text-[9px] md:text-[10px] uppercase tracking-widest mt-2">Vidas Transformadas</p>
              </div>
              <div>
                <span className="text-2xl md:text-3xl font-serif text-[#c5a059]">15+</span>
                <p className="text-[9px] md:text-[10px] uppercase tracking-widest mt-2">Protocolos Exclusivos</p>
              </div>
            </div>
          </div>
          <div className="relative reveal order-1 lg:order-2">
            <img 
              src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800" 
              alt="Ambiente de Luxo" 
              className="image-mask w-full h-[400px] md:h-[650px] object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Treatments Grid */}
      <section id="tratamentos" className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 reveal">
            <div>
              <span className="text-[#c5a059] uppercase tracking-[0.4em] text-[10px] mb-4 block">Menu de Luxo</span>
              <h2 className="text-3xl md:text-6xl font-serif text-[#1a0f12]">Experiências <br className="md:hidden"/><span className="italic">Customizadas</span></h2>
            </div>
            <a href="#" className="text-[9px] md:text-[10px] uppercase tracking-widest border-b border-[#c5a059] pb-2 mt-6 md:mt-0 hover:text-[#c5a059] transition-all">Ver todos os rituais</a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100 border border-gray-100">
            {SERVICES.slice(0, 6).map((service, idx) => (
              <div key={idx} className="bg-white p-8 md:p-12 hover:bg-[#f9f7f2] transition-colors duration-700 group reveal">
                <div className="text-[#c5a059] mb-6 md:mb-8 text-2xl group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                <h3 className="text-lg md:text-xl font-serif mb-4 text-[#1a0f12]">{service.name}</h3>
                <p className="text-gray-400 font-light text-xs md:text-sm leading-relaxed mb-8">{service.description}</p>
                <div className="flex items-center gap-2 text-[9px] uppercase tracking-[0.3em] font-bold opacity-0 group-hover:opacity-100 transition-all">
                  Explorar Ritual <FaChevronRight size={8} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="galeria" className="py-20 md:py-32 bg-[#1a0f12] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-center">
          <h2 className="text-3xl md:text-6xl font-serif reveal">Atmosfera & <br className="md:hidden"/><span className="italic text-[#c5a059]">Resultados</span></h2>
        </div>
        <div className="flex gap-4 md:gap-6 overflow-x-auto pb-8 md:pb-12 scrollbar-hide px-6">
          {GALLERY_ITEMS.map((item, idx) => (
            <div key={idx} className="min-w-[260px] md:min-w-[450px] h-[400px] md:h-[550px] relative group reveal" style={{ transitionDelay: `${idx * 0.1}s` }}>
              <img src={item.image} alt={item.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105" />
              <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
                <p className="text-[8px] md:text-[10px] uppercase tracking-[0.4em] mb-2 text-[#c5a059]">{item.description}</p>
                <h4 className="text-xl md:text-2xl font-serif">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-20 reveal">
            <span className="text-[#c5a059] uppercase tracking-[0.4em] text-[10px] mb-4 block">Dúvidas Frequentes</span>
            <h2 className="text-3xl md:text-5xl font-serif text-[#1a0f12]">Esclareça suas <span className="italic">Curiosidades</span></h2>
          </div>

          <div className="space-y-2 md:space-y-4 reveal">
            {FAQ_ITEMS.map((item, idx) => (
              <div key={idx} className="border-b border-gray-100">
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full py-6 md:py-8 flex justify-between items-center text-left group"
                >
                  <span className={`text-base md:text-xl font-serif transition-colors duration-500 pr-4 ${openFaq === idx ? 'text-[#c5a059]' : 'text-[#1a0f12]'}`}>
                    {item.question}
                  </span>
                  <div className={`transition-transform duration-500 flex-shrink-0 ${openFaq === idx ? 'rotate-180 text-[#c5a059]' : 'text-gray-300'}`}>
                    {openFaq === idx ? <FaMinus size={12} /> : <FaPlus size={12} />}
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-700 ease-in-out ${openFaq === idx ? 'max-h-96 opacity-100 pb-6 md:pb-8' : 'max-h-0 opacity-0'}`}>
                  <p className="text-gray-500 font-light leading-relaxed text-sm md:text-base">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Section: Janai Conceição Story (The Optimized Letter Design) */}
      <section className="py-20 md:py-32 bg-[#f9f7f2] border-t border-gray-100 overflow-hidden relative">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none overflow-hidden select-none">
            <div className="text-[12rem] md:text-[20rem] font-serif absolute -top-10 md:-top-20 -left-10 md:-left-20 leading-none">JC</div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 md:gap-16 items-start">
            {/* Image Side */}
            <div className="lg:col-span-5 relative reveal">
              <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-xl border-[8px] md:border-[12px] border-white">
                <img
  src={fundadoraImg}
  alt="Janai Conceição"
  className="w-full h-full object-cover grayscale-[10%]"
/>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-[#c5a059] text-white p-4 md:p-6 rounded-sm shadow-lg">
                <p className="text-[8px] md:text-[10px] uppercase tracking-[0.3em] font-bold">Protocolos Autorais</p>
              </div>
            </div>
            
            {/* The Letter Side - Optimized for Mobile */}
            <div className="lg:col-span-7 reveal" style={{ transitionDelay: '0.2s' }}>
              <div className="bg-white p-6 md:p-16 shadow-2xl relative border border-[#c5a059]/10 mt-8 lg:mt-0">
                {/* Seal - smaller on mobile */}
                <div className="absolute -top-6 -right-6 md:-top-10 md:-right-10 w-16 h-16 md:w-24 md:h-24 bg-[#c5a059] rounded-full flex items-center justify-center border-[6px] md:border-[8px] border-[#f9f7f2] shadow-lg z-20">
                    <span className="text-white font-serif text-lg md:text-2xl">JC</span>
                </div>

                <div className="relative z-10">
                  <span className="text-[#c5a059] uppercase tracking-[0.4em] text-[8px] md:text-[10px] mb-6 md:mb-8 block font-bold text-center md:text-left">Mensagem de Janai Conceição</span>
                  
                  <div className="font-serif italic text-xl md:text-4xl text-[#1a0f12] mb-8 md:mb-12 leading-tight border-l-2 border-[#c5a059]/20 pl-4 md:pl-8">
                    "O autocuidado é um ato de reverência à sua própria história."
                  </div>

                  <div className="space-y-6 md:space-y-8 text-gray-600 font-light leading-relaxed text-sm md:text-lg text-justify md:text-left font-sans">
                    <p>
                      Minha jornada com a estética começou como um chamado. Com quase uma década de dedicação exclusiva aqui em Salvador, consolidei a JC Estética como um refúgio de paz.
                    </p>
                    <p>
                      Cada protocolo que desenvolvo une ciência e a sensibilidade do toque. Para mim, a estética vai além da superfície; é uma ferramenta de saúde e empoderamento.
                    </p>
                    <p>
                      Aqui, você é o centro de um ritual planejado detalhadamente. Convido você a redescobrir sua essência através das minhas mãos.
                    </p>
                  </div>

                  <div className="mt-12 md:mt-16 pt-8 md:pt-10 border-t border-[#c5a059]/10 flex flex-col sm:flex-row items-center sm:items-center justify-between sm:justify-start gap-4 md:gap-8 text-center sm:text-left">
                    <div className="font-serif italic text-3xl md:text-4xl text-[#1a0f12] tracking-tighter">Janai Conceição</div>
                    <div className="hidden sm:block w-12 h-px bg-[#c5a059]/30"></div>
                    <div className="text-[8px] md:text-[10px] uppercase tracking-[0.3em] text-[#c5a059] font-bold">
                      Master Esteticista
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 md:py-20 bg-[#1a0f12] text-white text-center">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
          <div className="text-2xl md:text-3xl tracking-[0.4em] font-serif mb-8">
            JC <span className="text-[#c5a059]">ESTÉTICA</span>
          </div>
          <div className="flex gap-10 mb-10">
            <a href="#" className="text-gray-500 hover:text-[#c5a059] transition-all"><FaInstagram size={18} /></a>
            <a href="#" className="text-gray-500 hover:text-[#c5a059] transition-all"><FaWhatsapp size={18} /></a>
          </div>
          <p className="text-[8px] md:text-[9px] uppercase tracking-[0.5em] text-gray-600 font-light px-4 leading-loose">
            Av. Tancredo Neves, 1283 • Salvador/BA <br className="md:hidden"/>
            © 2024 Janai Conceição • Todos os direitos reservados
          </p>
        </div>
      </footer>

      {/* WhatsApp Floating */}
      <a 
        href="https://wa.me/5571999716572" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 bg-[#c5a059] text-white w-14 h-14 md:w-16 md:h-16 rounded-full shadow-2xl hover:bg-[#1a0f12] transition-all duration-500 flex items-center justify-center group"
      >
        <FaWhatsapp size={24} md:size={28} className="group-hover:scale-110 transition-transform" />
      </a>
    </div>
  );
};

export default App;
