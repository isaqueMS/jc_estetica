import { useState, useEffect, useRef, useCallback } from 'react';
import viteLogo from '../src/assets/logo jc.png';
import imagem01 from '../src/assets/imagem01.jpeg';
import imagem03 from '../src/assets/imagem03.jpeg';
import imagem04 from '../src/assets/imagem04.jpeg';
import jana from "../src/assets/jana.jpeg";
import './App.css';
import { 

  FaTree, 
  FaCircle,
  FaBandAid,
  FaHeartbeat,
  FaUmbrella,
  FaLeaf,
  FaWind,
  FaMedkit,
   FaTimes, 
  FaPhone, 
  FaInstagram, 
  FaWhatsapp, 
  FaMapMarkerAlt, 
  FaEnvelope,
  FaSpa, 
  FaSyringe, 
  FaTint, 
  FaWater, 
  FaFire, 
  FaHands, 
  FaClinicMedical, 
  FaAward, 
  FaUserMd,
  FaCamera 
} from 'react-icons/fa';
import videoBackground from './assets/jana01.mp4';
import videoPoster from './assets/logo jc.jpeg';

// Interfaces para tipagem
interface MenuItem {
  id: string;
  label: string;
}

interface Service {
  name: string;
  description: string;
  icon: JSX.Element;
}

interface Benefit {
  title: string;
  description: string;
  icon: JSX.Element;
}

interface GalleryItem {
  id: number;
  title: string;
  description: string;
}

// Dados estáticos (poderiam ser movidos para arquivos separados)
const MENU_ITEMS: MenuItem[] = [
  { id: 'inicio', label: 'Início' },
  { id: 'tratamentos', label: 'Tratamentos' },
  { id: 'servicos', label: 'Serviços' },
  { id: 'galeria', label: 'Galeria' },
  { id: 'sobre', label: 'Sobre Nós' },
  { id: 'contato', label: 'Contato' }
];

const SERVICES: Service[] = [


  { name: 'Massagem Relaxante', description: 'Alívio de tensões e relaxamento muscular profundo', icon: <FaHands /> },
  { name: 'Liberação Miofascial', description: 'Liberação de tensões na fáscia muscular', icon: <FaWind /> },
  { name: 'Bambuterapia', description: 'Massagem terapêutica com bambus', icon: <FaTree /> },
  { name: 'Ventosaterapia', description: 'Terapia com ventosas para alívio de dores', icon: <FaCircle /> },
  { name: 'Kinesio Tape', description: 'Bandagem terapêutica para apoio muscular', icon: <FaBandAid /> },
  { name: 'Dry Needling', description: 'Técnica de liberação de pontos-gatilho', icon: <FaSyringe /> },
  { name: 'Pós Operatório', description: 'Cuidados especiais para recuperação cirúrgica', icon: <FaHeartbeat /> },
  { name: 'Spa dos Pés', description: 'Hidratação e relaxamento para os pés', icon: <FaSpa /> },
  { name: 'Massagem com Velas', description: 'Massagem relaxante com velas quentes', icon: <FaFire /> },
  { name: 'Fisioterapia', description: 'Reabilitação e prevenção de lesões', icon: <FaMedkit /> },
  { name: 'Acupuntura', description: 'Estímulo de pontos energéticos corporais', icon: <FaLeaf /> },
  { name: 'Drenagem Linfática', description: 'Redução de inchaço e melhora da circulação', icon: <FaWater /> },
  { name: 'Limpeza de Pele', description: 'Profunda e suave para todos os tipos de pele', icon: <FaSpa /> },

];

const BENEFITS: Benefit[] = [
  { 
    title: 'Consultoria Individual', 
    description: 'Análise personalizada para indicar os melhores tratamentos',
    icon: <FaUserMd />
  },
  { 
    title: 'Ambiente Luxuoso', 
    description: 'Clínica equipada com o que há de mais moderno no mercado',
    icon: <FaClinicMedical />
  },
  { 
    title: 'Resultados Garantidos', 
    description: 'Protocolos cientificamente comprovados',
    icon: <FaAward />
  }
];

const galleryItems = [
  { id: 1, title: 'Resultado 1', description: 'Antes e depois do tratamento', image: imagem01 },
  { id: 3, title: 'Resultado 2', description: 'Antes e depois do tratamento', image: imagem03 },
  { id: 4, title: 'Resultado 3', description: 'Antes e depois do tratamento', image: imagem04 },

];


const galleryItems1 = [
  { id: 1, title: 'jana 1', description: 'Janai Conceição', image: imagem01 },

]
// Componente Header separado
const Header = ({ 
  scrollProgress, 
  activeSection, 
  isMenuOpen, 
  setIsMenuOpen, 
  scrollToSection 
}: { 
  scrollProgress: number;
  activeSection: string;
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  scrollToSection: (sectionId: string, index: number) => void;
}) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const menuRef = useRef<HTMLDivElement>(null);

  // Detectar mudança de tamanho de tela
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen, setIsMenuOpen]);

  // Fechar menu ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setIsMenuOpen]);

  const headerStyle = {
    backgroundColor: `rgba(44, 4, 20, ${1 - scrollProgress * 0.9})`,
    height: `${70 - (20 * scrollProgress)}px`,
    boxShadow: scrollProgress > 0.8 ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none',
    backdropFilter: scrollProgress > 0.5 ? 'blur(8px)' : 'none'
  };

  const textColor = scrollProgress > 0.5 ? '##2c0414' : '#f8e6e9';
  const logoFilter = scrollProgress > 0.5 ? 
    'invert(0) sepia(100%) saturate(1000%) hue-rotate(320deg)' : 
    'brightness(0) invert(1)';

  return (
    <header className="header" style={headerStyle}>
      <div className="header-container">
        <div className="logo" onClick={() => scrollToSection('inicio', 0)}>
          <img 
            src={viteLogo} 
            alt="Logo JC Estética" 
            className="logo-icon" 
            style={{}} 
          />
        </div>
        
        <button 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <nav 
          className={`menu ${isMenuOpen ? 'open' : ''}`} 
          ref={menuRef}
          aria-label="Navegação principal"
        >
          <ul className="menu-list">
            {MENU_ITEMS.map((item, index) => (
              <li 
                key={item.id}
                className={`menu-item ${activeSection === item.id ? 'active' : ''}`}
                style={{ color: textColor }}
                onClick={() => scrollToSection(item.id, index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    scrollToSection(item.id, index);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`Ir para ${item.label}`}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

// Componente Hero Section com vídeo
const HeroSection = ({ 
  setSectionRef, 
  scrollToSection, 
  videoError, 
  setVideoError 
}: { 
  setSectionRef: (index: number, ref: HTMLDivElement | null) => void;
  scrollToSection: (sectionId: string, index: number) => void;
  videoError: boolean;
  setVideoError: (error: boolean) => void;
}) => {
  const contactIndex = MENU_ITEMS.findIndex(item => item.id === 'contato');
  
  return (
    <section 
      id="inicio"
      ref={(ref) => setSectionRef(0, ref)}
      className="page-section inicio-section"
    >
      <div className="video-container">
        {!videoError ? (
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="background-video"
            poster={videoPoster}
            onError={() => setVideoError(true)}
          >
            <source src={videoBackground} type="video/mp4" />
            Seu navegador não suporta vídeos HTML5.
          </video>
        ) : (
          <img 
            src={videoPoster} 
            alt="JC Estética" 
            className="video-fallback"
          />
        )}
        <div className="video-overlay"></div>
      </div>
      
      <div className="section-content inicio-content">
        <h1 className="estetica-title">JC Estética</h1>
        <p className="estetica-subtitle">Beleza que irradia confiança</p>
        <button 
          className="cta-button"
          onClick={() => scrollToSection('contato', contactIndex)}
          aria-label="Agendar avaliação"
        >
          Agende sua avaliação
        </button>
      </div>
    </section>
  );
};

// Componente de Serviços
const ServicesSection = ({ 
  setSectionRef, 
  activeSection, 
  scrollToSection 
}: { 
  setSectionRef: (index: number, ref: HTMLDivElement | null) => void;
  activeSection: string;
  scrollToSection: (sectionId: string, index: number) => void;
}) => {
  const contactIndex = MENU_ITEMS.findIndex(item => item.id === 'contato');
  
  return (
    <section 
      id="tratamentos"
      ref={(ref) => setSectionRef(1, ref)}
      className={`page-section ${activeSection === 'tratamentos' ? 'highlighted' : ''}`}
      aria-labelledby="tratamentos-title"
    >
      <div className="section-content">
        <h2 id="tratamentos-title">Nossos Tratamentos</h2>
        <div className="services-grid">
          {SERVICES.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon" aria-hidden="true">
                {service.icon}
              </div>
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              <button 
                className="service-button"
                onClick={() => scrollToSection('contato', contactIndex)}
                aria-label={`Saiba mais sobre ${service.name}`}
              >
                Saiba mais
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Componente de Benefícios
const BenefitsSection = ({ 
  setSectionRef, 
  activeSection 
}: { 
  setSectionRef: (index: number, ref: HTMLDivElement | null) => void;
  activeSection: string;
}) => {
  return (
    <section 
      id="servicos"
      ref={(ref) => setSectionRef(2, ref)}
      className={`page-section ${activeSection === 'servicos' ? 'highlighted' : ''}`}
      aria-labelledby="servicos-title"
    >
      <div className="section-content">
        <h2 id="servicos-title">Serviços Exclusivos</h2>
        <p className="section-description">
          Oferecemos os melhores procedimentos estéticos com tecnologia de ponta e profissionais altamente qualificados.
        </p>
        <div className="benefits-container">
          {BENEFITS.map((benefit, index) => (
            <div key={index} className="benefit">
              <div className="benefit-icon" aria-hidden="true">
                {benefit.icon}
              </div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Componente Galeria
const GallerySection = ({ 
  setSectionRef, 
  activeSection 
}: { 
  setSectionRef: (index: number, ref: HTMLDivElement | null) => void;
  activeSection: string;
}) => {
  return (
   <section 
  id="galeria"
  ref={(ref) => setSectionRef(3, ref)}
  className={`page-section ${activeSection === 'galeria' ? 'highlighted' : ''}`}
>
  <div className="section-content">
    <h2>Galeria de Resultados</h2>
    <div className="gallery-grid">
      {galleryItems.map((item) => (
        <div key={item.id} className="gallery-item">
          <div className="gallery-image">
            <img 
              src={item.image} 
              alt={item.title}
              className="gallery-img"
            />
            <div className="gallery-overlay">
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
  );
};

// Componente Sobre
// Componente Sobre
const AboutSection = ({ 
  setSectionRef, 
  activeSection 
}: { 
  setSectionRef: (index: number, ref: HTMLDivElement | null) => void;
  activeSection: string;
}) => {
  return (
    <section 
      id="sobre"
      ref={(ref) => setSectionRef(4, ref)}
      className={`page-section ${activeSection === 'sobre' ? 'highlighted' : ''}`}
      aria-labelledby="sobre-title"
    >
      <div className="section-content about-content">
        <div className="about-text">
          <h2 id="sobre-title">Sobre Nós</h2>
          <p>
            A JC Estética nasceu da paixão por cuidar e realçar a beleza única de cada pessoa. 
            Com mais de ano 9 anos de experiência no mercado, nossa equipe de profissionais 
            altamente qualificados está comprometida em oferecer tratamentos 
            personalizados e resultados excepcionais.
          </p>
          <p>
            Nossa missão é proporcionar uma experiência transformadora, onde autoestima,saude e bem-estar caminham juntos.
          </p>
          <div className="about-stats">
            <div className="stat">
              <span className="stat-number">9+</span>
              <span className="stat-label">Anos de Experiência</span>
            </div>
            <div className="stat">
              <span className="stat-number">300+</span>
              <span className="stat-label">Clientes Satisfeitos</span>
            </div>
            <div className="stat">
              <span className="stat-number">15+</span>
              <span className="stat-label">Tratamentos Disponíveis</span>
            </div>
          </div>
        </div>
        <div className="about-image">
          <img 
            src={jana} 
            alt="Equipe JC Estética - Jana" 
            className="team-photo"
          />
          <span className="image-caption">Jana - Especialista em Estética</span>
        </div>
      </div>
    </section>
  );
};

// Componente Contato
const ContactSection = ({ 
  setSectionRef, 
  activeSection 
}: { 
  setSectionRef: (index: number, ref: HTMLDivElement | null) => void;
  activeSection: string;
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica para enviar o formulário
    alert('Mensagem enviada! Entraremos em contato em breve.');
    const form = e.target as HTMLFormElement;
    form.reset();
  };

  return (
    <section 
      id="contato"
      ref={(ref) => setSectionRef(5, ref)}
      className={`page-section ${activeSection === 'contato' ? 'highlighted' : ''}`}
      aria-labelledby="contato-title"
    >
      <div className="section-content contact-content">
        <div className="contact-info">
          <h2 id="contato-title">Entre em Contato</h2>
          <p>Estamos prontos para cuidar de você</p>
          
          <div className="contact-methods">
            <div className="contact-item">
              <FaPhone className="contact-icon" aria-hidden="true" />
              <span>(71) 99971-6572</span>
            </div>
            <div className="contact-item">
              <FaWhatsapp className="contact-icon" aria-hidden="true" />
              <span>(71) 99249-0105</span>
            </div>
            <div className="contact-item">
              <FaInstagram className="contact-icon" aria-hidden="true" />
              <span>@jcesteticaefisio</span>
            </div>
            <div className="contact-item">
              <FaEnvelope className="contact-icon" aria-hidden="true" />
              <span>contato@jcestetica.com.br</span>
            </div>
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" aria-hidden="true" />
              <span> Av.Tancredo Neves, 1283 - Caminho das Arvores, Salvador</span>
            </div>
          </div>
          
          <div className="business-hours">
            <h3>Horário de Funcionamento</h3>
            <p>Segunda a Sexta: 8h às 17h</p>
            <p>Sábado: 8h às 12h</p>
            <p>Domingo: Fechado</p>
          </div>
        </div>
        
        <form className="contact-form" onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Seu nome" 
            required 
            aria-label="Seu nome"
          />
          <input 
            type="email" 
            placeholder="Seu e-mail" 
            required 
            aria-label="Seu e-mail"
          />
          <input 
            type="tel" 
            placeholder="Seu telefone" 
            aria-label="Seu telefone (opcional)"
          />
          <textarea 
            placeholder="Sua mensagem" 
            rows={4} 
            required 
            aria-label="Sua mensagem"
          ></textarea>
          <button type="submit">Enviar Mensagem</button>
        </form>
      </div>
    </section>
  );
};

// Componente Footer
const Footer = ({ scrollToSection }: { scrollToSection: (sectionId: string, index: number) => void }) => {
  return (
    <footer className="footer" aria-label="Rodapé">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={viteLogo} alt="Logo JC Estética" className="logo-icon" />
          <span>Estética</span>
        </div>
        <div className="footer-links">
          {MENU_ITEMS.map((item, index) => (
            <a 
              key={item.id}
              onClick={() => scrollToSection(item.id, index)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  scrollToSection(item.id, index);
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`Ir para ${item.label}`}
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="footer-social">
          <a href="#" aria-label="Instagram"><FaInstagram /></a>
          <a href="#" aria-label="WhatsApp"><FaWhatsapp /></a>
          <a href="#" aria-label="Localização"><FaMapMarkerAlt /></a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} JC Estética. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

// Componente principal App
function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('inicio');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const sections = useRef<(HTMLDivElement | null)[]>([]);
  const isScrolling = useRef(false);
  const scrollTimeout = useRef<number | null>(null);

  // Configura as referências das seções
  const setSectionRef = useCallback((index: number, ref: HTMLDivElement | null) => {
    sections.current[index] = ref;
  }, []);

  // Efeitos para scroll e detecção de seção ativa
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollMax = 150;
      setScrollProgress(Math.min(scrollY / scrollMax, 1));

      if (!isScrolling.current) {
        detectActiveSection();
      }
    };

    const detectActiveSection = () => {
      const scrollPosition = window.scrollY + 100;
      
      MENU_ITEMS.forEach((item, index) => {
        const section = sections.current[index];
        if (section && section.offsetTop <= scrollPosition && 
            (section.offsetTop + section.offsetHeight) > scrollPosition) {
          setActiveSection(item.id);
        }
      });
    };

    // Usando requestAnimationFrame para melhor performance
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Navegação suave para a seção
  const scrollToSection = useCallback((sectionId: string, index: number) => {
    setIsMenuOpen(false);
    isScrolling.current = true;
    setActiveSection(sectionId);
    
    if (sections.current[index]) {
      window.scrollTo({
        top: sections.current[index]!.offsetTop - 70,
        behavior: 'smooth'
      });
    }

    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
    }
    scrollTimeout.current = window.setTimeout(() => {
      isScrolling.current = false;
    }, 1000);
  }, []);

  return (
    <>
      <Header 
        scrollProgress={scrollProgress}
        activeSection={activeSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollToSection={scrollToSection}
      />
      
      <main className="content">
        <HeroSection 
          setSectionRef={setSectionRef}
          scrollToSection={scrollToSection}
          videoError={videoError}
          setVideoError={setVideoError}
        />

        <ServicesSection 
          setSectionRef={setSectionRef}
          activeSection={activeSection}
          scrollToSection={scrollToSection}
        />

        <BenefitsSection 
          setSectionRef={setSectionRef}
          activeSection={activeSection}
        />

        <GallerySection 
          setSectionRef={setSectionRef}
          activeSection={activeSection}
        />

        <AboutSection 
          setSectionRef={setSectionRef}
          activeSection={activeSection}
        />

        <ContactSection 
          setSectionRef={setSectionRef}
          activeSection={activeSection}
        />
      </main>

      <Footer scrollToSection={scrollToSection} />
    </>
  );
}

export default App;