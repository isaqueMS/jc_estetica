
import React, { useState, useEffect } from 'react';
import { 
  FaInstagram, FaWhatsapp, FaMapMarkerAlt, 
  FaArrowRight, FaCheckCircle, FaSpinner,
  FaShieldAlt, FaStar, FaAward, FaPlus, FaMinus, FaBars, FaTimes
} from 'react-icons/fa';
import { SERVICES, GALLERY_ITEMS, FAQ_ITEMS } from './constants';
import fundadoraImg from "./src/assets/janai.png";

const FAQAccordion = ({ items }: { items: typeof FAQ_ITEMS }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="border-b border-[#c5a059]/20 pb-4">
          <button 
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex justify-between items-center py-6 text-left group"
          >
            <span className={`font-serif text-xl md:text-2xl transition-colors ${openIndex === index ? 'text-[#c5a059]' : 'text-[#1a0f12] group-hover:text-[#c5a059]'}`}>
              {item.question}
            </span>
            <span className="text-[#c5a059] ml-4">
              {openIndex === index ? <FaMinus /> : <FaPlus />}
            </span>
          </button>
          <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-[500px] opacity-100 mb-6' : 'max-h-0 opacity-0'}`}>
            <p className="text-gray-500 font-light leading-relaxed text-lg max-w-3xl">
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500);
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, [isMobileMenuOpen]);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    await new Promise(r => setTimeout(r, 1500));
    setFormStatus('success');
    setTimeout(() => setFormStatus('idle'), 5000);
  };

  const menuLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Tratamentos', href: '#tratamentos' },
    { name: 'Galeria', href: '#galeria' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Janai', href: '#conceito' },
    { name: 'Contato', href: '#contato' }
  ];

  return (
    <div className="min-h-screen bg-[#f9f7f2]">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-[1000] transition-all duration-700 px-6 py-5 ${scrolled ? 'bg-[#f9f7f2]/95 backdrop-blur-md border-b border-[#c5a059]/10 py-4 shadow-sm' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center relative z-[1001]">
          <div className="text-2xl tracking-[0.3em] font-serif uppercase cursor-pointer text-[#1a0f12]" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            JC <span className="text-[#c5a059]">Estética</span>
          </div>

          <div className="hidden lg:flex gap-12 text-[10px] uppercase tracking-[0.5em] font-semibold text-gray-800">
            {menuLinks.map(link => (
              <a key={link.name} href={link.href} className="hover:text-[#c5a059] transition-all">
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <a href="#contato" className="hidden sm:block bg-[#1a0f12] text-white px-8 py-3 text-[10px] uppercase tracking-widest font-bold hover:bg-[#c5a059] transition-all btn-luxury-pulse">
              Agendar
            </a>
            
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className="lg:hidden text-[#1a0f12] p-2 focus:outline-none"
            >
              {isMobileMenuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 bg-[#1a0f12] z-[999] flex flex-col items-center justify-center transition-all duration-500 ease-in-out lg:hidden ${
            isMobileMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-full'
          }`}
          style={{ height: '100vh' }}
        >
          <div className="flex flex-col items-center gap-8 text-center px-6">
            {menuLinks.map((link, i) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)} 
                className="text-white text-3xl font-serif tracking-widest hover:text-[#c5a059] transition-all"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://wa.me/5571999716572" 
              className="mt-4 bg-[#c5a059] text-[#1a0f12] px-10 py-4 text-[12px] uppercase tracking-[0.4em] font-bold"
            >
              WhatsApp VIP
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="h-screen relative flex items-center justify-center overflow-hidden bg-[#1a0f12]">
        <div className={`absolute inset-0 transition-transform duration-[3000ms] ${isLoaded ? 'scale-100' : 'scale-110 opacity-0'}`}>
          <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=1920" alt="JC Estética Hero" className="w-full h-full object-cover opacity-30" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a0f12]/50 via-transparent to-[#1a0f12]"></div>
        <div className="relative z-10 text-center px-6">
          <span className="text-[#c5a059] uppercase tracking-[0.6em] text-[10px] mb-8 block font-bold reveal active">Salvador • Ed. CEO</span>
          <h1 className="text-white text-4xl md:text-9xl font-serif mb-10 reveal active leading-tight">Estética de <br /> <span className="italic text-[#c5a059]">Elite</span></h1>
          <p className="text-gray-300 font-light text-base md:text-2xl mb-14 reveal active max-w-2xl mx-auto leading-relaxed">Referência em Pós-Operatório e Massoterapia Premium no coração financeiro da Bahia.</p>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-16">
          {[
            { icon: <FaShieldAlt size={32} />, title: "Rigor Clínico", desc: "Protocolos baseados em ciência e anatomia humana." },
            { icon: <FaAward size={32} />, title: "Legado JC", desc: "9 anos transformando a experiência de pós-operatório." },
            { icon: <FaStar size={32} />, title: "Exclusive", desc: "Atendimento individualizado e privativo no Ed. CEO." }
          ].map((v, i) => (
            <div key={i} className="text-center reveal">
              <div className="text-[#c5a059] mb-8 flex justify-center">{v.icon}</div>
              <h4 className="font-serif text-xl mb-4 uppercase tracking-widest">{v.title}</h4>
              <p className="text-gray-500 font-light text-sm">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="tratamentos" className="py-24 bg-white border-t border-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20 reveal active text-center lg:text-left">
            <span className="text-[#c5a059] uppercase tracking-[0.5em] text-[10px] mb-4 block font-bold">Assinaturas JC</span>
            <h2 className="text-4xl md:text-7xl font-serif text-[#1a0f12]">Nossos <span className="italic text-[#c5a059]">Tratamentos</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((s, idx) => (
              <div key={idx} className="bg-white p-12 border border-gray-100 hover:bg-[#f9f7f2] transition-all duration-700 group reveal active shadow-sm flex flex-col h-full min-h-[420px]">
                <div className="text-[#c5a059] mb-10 text-4xl group-hover:scale-110 transition-transform">{s.icon}</div>
                <h3 className="text-2xl font-serif mb-6 text-[#1a0f12] group-hover:text-[#c5a059]">{s.name}</h3>
                <p className="text-gray-400 font-light text-sm leading-relaxed mb-12 flex-grow">{s.description}</p>
                <a href="https://wa.me/5571999716572" className="inline-flex items-center gap-4 text-[11px] uppercase tracking-[0.4em] font-bold text-[#c5a059] mt-auto group">Agendar <FaArrowRight size={12} className="group-hover:translate-x-2 transition-transform" /></a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="py-24 bg-[#1a0f12] text-white">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <h2 className="text-4xl md:text-7xl font-serif reveal italic text-[#c5a059]">Santuário</h2>
        </div>
        <div className="flex gap-8 overflow-x-auto pb-16 scrollbar-hide px-6">
          {GALLERY_ITEMS.map((item, idx) => (
            <div key={idx} className="min-w-[280px] md:min-w-[400px] aspect-[3/4] relative group overflow-hidden reveal">
              <img src={`${item.image}&w=600`} alt={item.title} className="w-full h-full object-cover opacity-60 transition-all duration-1000 group-hover:scale-110" />
              <div className="absolute bottom-10 left-10">
                <p className="text-[9px] uppercase tracking-[0.5em] mb-2 text-[#c5a059]">{item.description}</p>
                <h4 className="text-xl font-serif">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-[#f9f7f2]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <span className="text-[#c5a059] uppercase tracking-[0.5em] text-[10px] mb-4 block font-bold">Dúvidas</span>
            <h2 className="text-4xl md:text-6xl font-serif text-[#1a0f12]">Esclarecimentos <span className="italic text-[#c5a059]">Vip</span></h2>
          </div>
          <div className="reveal">
            <FAQAccordion items={FAQ_ITEMS} />
          </div>
        </div>
      </section>

      {/* Janai Section - Strategically placed before Contact */}
      <section id="conceito" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 reveal">
            <div className="image-mask bg-gray-100 aspect-[4/5] overflow-hidden shadow-2xl relative">
             <img
  src={fundadoraImg}
  alt="Janai Conceição"
  onLoad={() => setIsLoaded(true)}
  className={`w-full h-full object-cover transition-opacity duration-1000 ${
    isLoaded ? "opacity-100" : "opacity-0"
  }`}
/>
            </div>
          </div>
          <div className="lg:col-span-7 reveal">
            <div className="bg-[#f9f7f2] p-8 md:p-20 border border-[#c5a059]/10 relative">
               <div className="absolute -top-6 -right-6 w-16 h-16 bg-[#c5a059] rounded-full flex items-center justify-center border-4 border-white shadow-lg text-white font-serif text-xl">JC</div>
              <span className="text-[#c5a059] uppercase tracking-[0.5em] text-[11px] mb-10 block font-bold">A Fundadora</span>
              <h3 className="font-serif italic text-3xl md:text-5xl text-[#1a0f12] mb-12 leading-tight">"A cura que transcende o toque estético."</h3>
              <div className="space-y-8 text-gray-600 font-light text-lg">
                <p>Com quase uma década de legado em Salvador, minha missão na JC Estética é oferecer excelência técnica unida ao acolhimento. Como especialista em pós-operatório, entendo que a recuperação exige paciência e o toque correto.</p>
                <p>No Edifício CEO, projetei um espaço onde você é a prioridade absoluta. Cada ritual é uma assinatura da minha dedicação ao seu bem-estar.</p>
              </div>
              <div className="mt-16 pt-10 border-t border-[#c5a059]/10">
                <div className="font-serif italic text-4xl text-[#1a0f12]">Janai Conceição</div>
                <div className="text-[10px] uppercase tracking-[0.4em] text-[#c5a059] font-bold mt-2">Fisioterapeuta • Especialista Pós-Op</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-24 bg-[#1a0f12]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24">
          <div className="reveal text-white">
            <span className="text-[#c5a059] uppercase tracking-[0.5em] text-[11px] mb-6 block font-bold">Reserva Exclusive</span>
            <h2 className="text-4xl md:text-7xl font-serif mb-12 leading-tight italic">Reserve seu <br /><span className="text-[#c5a059] not-italic">Protocolo</span>.</h2>
            <div className="space-y-12">
              <div className="flex gap-8 items-start group">
                <div className="w-14 h-14 bg-white/5 flex items-center justify-center rounded-full text-[#c5a059] transition-all group-hover:bg-[#c5a059] group-hover:text-[#1a0f12] shrink-0">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <h4 className="text-[11px] uppercase tracking-[0.4em] font-bold mb-3 text-gray-500">Localização Privativa</h4>
                  <p className="text-lg font-light text-gray-300">CEO Salvador Shopping, Torre Londres, Salvador/BA</p>
                </div>
              </div>
              <div className="flex gap-8 items-start group">
                <div className="w-14 h-14 bg-white/5 flex items-center justify-center rounded-full text-[#c5a059] transition-all group-hover:bg-[#c5a059] group-hover:text-[#1a0f12] shrink-0">
                  <FaWhatsapp size={20} />
                </div>
                <div>
                  <h4 className="text-[11px] uppercase tracking-[0.4em] font-bold mb-3 text-gray-500">Concierge WhatsApp</h4>
                  <p className="text-lg font-light text-gray-300">(71) 99971-6572 • (71) 99249-0105</p>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal">
            <div className="bg-white/5 backdrop-blur-sm p-10 md:p-16 border border-white/10 shadow-2xl">
              {formStatus === 'success' ? (
                <div className="h-[400px] flex flex-col items-center justify-center text-center text-white">
                  <FaCheckCircle className="text-[#c5a059] text-7xl mb-8" />
                  <h3 className="text-3xl font-serif mb-4">Solicitação Recebida</h3>
                  <p className="text-gray-400 font-light">Nosso concierge entrará em contato em instantes.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-10">
                  <input required type="text" placeholder="Nome Completo" className="w-full bg-transparent border-b border-white/20 py-5 outline-none focus:border-[#c5a059] transition-all text-white text-base placeholder-gray-600" />
                  <input required type="tel" placeholder="WhatsApp" className="w-full bg-transparent border-b border-white/20 py-5 outline-none focus:border-[#c5a059] transition-all text-white text-base placeholder-gray-600" />
                  <select className="w-full bg-transparent border-b border-white/20 py-5 outline-none focus:border-[#c5a059] transition-all text-gray-400 text-base appearance-none cursor-pointer">
                    <option value="" className="bg-[#1a0f12]">Tratamento de Interesse</option>
                    <option value="pos" className="bg-[#1a0f12]">Pós-Operatório</option>
                    <option value="masso" className="bg-[#1a0f12]">Massoterapia Premium</option>
                  </select>
                  <button disabled={formStatus === 'submitting'} type="submit" className="w-full py-6 bg-[#c5a059] text-[#1a0f12] text-[11px] uppercase tracking-[0.5em] font-bold hover:bg-white transition-all flex items-center justify-center gap-4">
                    {formStatus === 'submitting' ? <FaSpinner className="animate-spin" /> : "Agendar Consulta VIP"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-[#1a0f12] text-white/40 border-t border-white/5 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-2xl tracking-[0.5em] font-serif mb-12 uppercase text-white">JC Estética</div>
          <div className="flex justify-center gap-10 mb-12">
            <a href="#" className="hover:text-[#c5a059] transition-colors"><FaInstagram size={24} /></a>
            <a href="#" className="hover:text-[#c5a059] transition-colors"><FaWhatsapp size={24} /></a>
          </div>
          <p className="text-[10px] uppercase tracking-[0.6em] mb-4">Salvador • Edifício CEO Salvador Shopping</p>
          <p className="text-[9px] uppercase tracking-widest font-light">© 2024 Janai Conceição | Estética de Alta Performance</p>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a 
        href="https://wa.me/5571999716572" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[100] bg-[#25D366] text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 active:scale-95 btn-luxury-pulse"
      >
        <FaWhatsapp size={28} />
      </a>
    </div>
  );
};

export default App;
