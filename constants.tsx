
import React from 'react';
import { 
  FaHands, FaWind, FaGem, FaMoon, FaMagic, FaSyringe, 
  FaHeartbeat, FaSpa, FaFire, FaStethoscope, FaLeaf, FaWater,
  FaUserTie, FaBuilding, FaAward
} from 'react-icons/fa';

export const SERVICES = [
  { name: 'Massagem Relaxante Premium', description: 'Um ritual de descompressão absoluta que combina aromaterapia exclusiva e toques profundos.', icon: <FaHands /> },
  { name: 'Liberação Miofascial Elite', description: 'Tratamento clínico para restauração da funcionalidade muscular e alívio de tensões crônicas.', icon: <FaWind /> },
  { name: 'Ritual de Bambuterapia', description: 'A força suave da natureza esculpindo contornos e drenando o sistema linfático.', icon: <FaGem /> },
  { name: 'Ventosaterapia Sistêmica', description: 'Protocolo ancestral para desintoxicação profunda e oxigenação dos tecidos.', icon: <FaMoon /> },
  { name: 'Drenagem de Luxo', description: 'Método rítmico para eliminação de líquidos e toxinas, revelando leveza imediata.', icon: <FaWater /> },
  { name: 'Pós-Operatório Especializado', description: 'Cuidado compassivo e técnico para uma recuperação segura e resultados cirúrgicos impecáveis.', icon: <FaHeartbeat /> },
];

export const BENEFITS = [
  { 
    title: 'Consultoria de Estilo de Vida', 
    description: 'Não apenas um tratamento, mas um diagnóstico completo do seu bem-estar para uma vida mais equilibrada.',
    icon: <FaUserTie />
  },
  { 
    title: 'Sanctuário Privativo', 
    description: 'Espaço desenhado para isolamento acústico e sensorial, permitindo uma imersão total no tratamento.',
    icon: <FaBuilding />
  },
  { 
    title: 'Excelência Certificada', 
    description: 'Protocolos rigorosos com as melhores tecnologias mundiais disponíveis no segmento.',
    icon: <FaAward />
  }
];

export const GALLERY_ITEMS = [
  { id: 1, title: 'Suite Premium', description: 'Atmosfera Minimalista', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800' },
  { id: 2, title: 'Rituais de Rosto', description: 'Tecnologia Avançada', image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800' },
  { id: 3, title: 'Equilíbrio Zen', description: 'Detalhes que Importam', image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800' },
  { id: 4, title: 'Nossa Especialista', description: 'Ciência e Toque', image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&q=80&w=800' },
  { id: 5, title: 'Paz Interior', description: 'Resultados Visíveis', image: 'https://images.unsplash.com/photo-1519415510236-8559119946b1?auto=format&fit=crop&q=80&w=800' },
  { id: 6, title: 'Terapia das Pedras', description: 'Energia Vital', image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=800' },
  { id: 7, title: 'Hidratação Profunda', description: 'Textura Sedosa', image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800' },
  { id: 8, title: 'Refúgio Olfativo', description: 'Essências Raras', image: 'https://images.unsplash.com/photo-1602850447541-60606d2003f4?auto=format&fit=crop&q=80&w=800' },
];

export const FAQ_ITEMS = [
  {
    question: "Como funciona a primeira avaliação?",
    answer: "Nossa avaliação inicial é um momento sagrado de 30 minutos onde analisamos seu histórico clínico, objetivos estéticos e níveis de tensão. Criamos um protocolo personalizado para garantir que cada toque seja direcionado à sua necessidade real."
  },
  {
    question: "Qual a periodicidade ideal das massagens?",
    answer: "Para manutenção do bem-estar e controle de estresse, recomendamos sessões quinzenais. Para tratamentos de liberação miofascial ou protocolos estéticos, o ideal é uma frequência semanal nas primeiras 4 a 6 semanas."
  },
  {
    question: "Aceitam convênios para Fisioterapia?",
    answer: "Operamos exclusivamente no modelo particular para garantir a exclusividade e o tempo necessário que cada tratamento premium exige. No entanto, fornecemos recibos detalhados para solicitações de reembolso junto ao seu plano de saúde."
  },
  {
    question: "É necessário agendamento antecipado?",
    answer: "Sim, devido à exclusividade de nossos atendimentos, trabalhamos apenas com hora marcada. Recomendamos agendar com pelo menos 48h de antecedência para garantir seu horário de preferência."
  },
  {
    question: "Existem contraindicações para a drenagem linfática?",
    answer: "Sim, embora muito benéfica, a drenagem é contraindicada em casos de infecções agudas, insuficiência cardíaca descompensada e tromboses ativas. Sempre realizamos uma anamnese rigorosa antes de iniciar qualquer procedimento."
  }
];
