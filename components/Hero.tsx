
import React from 'react';
import { CheckCircle, MapPin } from 'lucide-react';
import { AREA_SERVED, WHATSAPP_LINK } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-slate-900 pt-16 pb-24 md:pt-32 md:pb-40">
      <div className="absolute inset-0 opacity-20">
        <img 
          src="https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=2000" 
          alt="Plumbing work background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-slate-900 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-blue-600/20 text-blue-400 px-4 py-1.5 rounded-full text-sm font-bold mb-6 border border-blue-500/30">
            <MapPin className="w-4 h-4" />
            Atendendo {AREA_SERVED}
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Desentupimento Residencial e Comercial – Ligue Agora
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 font-medium mb-10">
            Serviço Rápido, Garantido e Sem Quebra-Quebra
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer" 
              className="flex items-center justify-center gap-3 bg-green-600 text-white px-8 py-5 rounded-2xl font-bold text-lg hover:bg-green-700 transition-all shadow-xl shadow-green-900/40 active:scale-95 group"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current group-hover:scale-110 transition-transform" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp
            </a>
            <a 
              href="#servicos" 
              className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-5 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all active:scale-95"
            >
              Nossos Serviços
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 text-slate-300">
              <CheckCircle className="w-5 h-5 text-blue-500" />
              <span>Visita Gratuita para Orçamento</span>
            </div>
            <div className="flex items-center gap-3 text-slate-300">
              <CheckCircle className="w-5 h-5 text-blue-500" />
              <span>Aceitamos Cartões e Pix</span>
            </div>
            <div className="flex items-center gap-3 text-slate-300">
              <CheckCircle className="w-5 h-5 text-blue-500" />
              <span>Equipamentos de Última Geração</span>
            </div>
            <div className="flex items-center gap-3 text-slate-300">
              <CheckCircle className="w-5 h-5 text-blue-500" />
              <span>Garantia de até 90 Dias</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 hidden lg:block transform translate-y-1/4 translate-x-1/4">
        <div className="relative">
          <div className="absolute -inset-10 bg-blue-600/30 blur-3xl rounded-full"></div>
          <img 
            src="https://images.unsplash.com/photo-1521207418485-99c705420785?auto=format&fit=crop&q=80&w=800" 
            alt="Profissional da Desentupidora Barão" 
            className="w-[500px] h-[600px] object-cover rounded-3xl relative z-10 border-4 border-slate-800"
          />
        </div>
      </div>
    </section>
  );
};
