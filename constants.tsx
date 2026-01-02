
import React from 'react';
import { 
  Droplets, 
  Trash2, 
  Waves, 
  Wrench, 
  ShieldCheck, 
  Clock, 
  Zap, 
  Construction 
} from 'lucide-react';
import { Service, Testimonial } from './types';

export const COMPANY_NAME = "Desentupidora Barão";
export const CONTACT_PHONE = "(19) 98827-9475";
export const WHATSAPP_LINK = "https://wa.me/5519988279475";
export const AREA_SERVED = "São Paulo e Região";

export const SERVICES: Service[] = [
  {
    id: 'pia',
    title: 'Desentupimento de Pia',
    description: 'Eliminamos obstruções de gordura e restos de alimentos rapidamente.',
    icon: <Droplets className="w-8 h-8 text-blue-600" />,
    imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'vaso',
    title: 'Desentupimento de Vaso',
    description: 'Atendimento higiênico e imediato para vasos sanitários obstruídos.',
    icon: <Waves className="w-8 h-8 text-blue-600" />,
    imageUrl: 'https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'ralo',
    title: 'Desentupimento de Ralo',
    description: 'Limpeza completa de ralos de banheiros, quintais e cozinhas.',
    icon: <Trash2 className="w-8 h-8 text-blue-600" />,
    imageUrl: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'fossa',
    title: 'Limpeza de Fossa',
    description: 'Serviço especializado com caminhões auto-vácuo de última geração.',
    icon: <Construction className="w-8 h-8 text-blue-600" />,
    imageUrl: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=400'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Carlos Mendes',
    location: 'Moema, SP',
    content: 'Atendimento nota 10! Chegaram em 30 minutos e resolveram o problema da pia sem fazer nenhuma sujeira.',
    rating: 5
  },
  {
    id: '2',
    name: 'Ana Paula Souza',
    location: 'São Bernardo do Campo',
    content: 'O melhor custo-benefício que encontrei na região. Profissionais educados e muito eficientes.',
    rating: 5
  },
  {
    id: '3',
    name: 'Roberto Silva',
    location: 'Tatuapé, SP',
    content: 'Minha fossa estava transbordando e eles resolveram tudo com agilidade e equipamento moderno.',
    rating: 4
  }
];

export const FEATURES = [
  {
    icon: <Clock className="w-6 h-6 text-yellow-500" />,
    title: 'Atendimento 24h',
    text: 'Estamos prontos para emergências a qualquer hora.'
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-yellow-500" />,
    title: 'Sem Quebra-Quebra',
    text: 'Técnicas modernas que preservam seu patrimônio.'
  },
  {
    icon: <Zap className="w-6 h-6 text-yellow-500" />,
    title: 'Preço Justo',
    text: 'Orçamentos transparentes e sem surpresas.'
  },
  {
    icon: <Wrench className="w-6 h-6 text-yellow-500" />,
    title: 'Garantia',
    text: 'Serviços com garantia total de satisfação.'
  }
];
