
import React from 'react';
import { COMPANY_NAME, CONTACT_PHONE, AREA_SERVED } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <h4 className="text-white font-black text-2xl mb-6">
              {COMPANY_NAME.split(' ')[0]} <span className="text-blue-600">{COMPANY_NAME.split(' ')[1]}</span>
            </h4>
            <p className="text-sm leading-relaxed mb-6">
              Líder em desentupimento técnico em São Paulo. Tecnologia, agilidade e respeito ao seu patrimônio em primeiro lugar.
            </p>
          </div>
          
          <div>
            <h5 className="text-white font-bold mb-6">Links Rápidos</h5>
            <ul className="space-y-4 text-sm">
              <li><a href="#servicos" className="hover:text-blue-400 transition-colors">Serviços</a></li>
              <li><a href="#sobre" className="hover:text-blue-400 transition-colors">Sobre Nós</a></li>
              <li><a href="#depoimentos" className="hover:text-blue-400 transition-colors">Depoimentos</a></li>
              <li><a href="#contato" className="hover:text-blue-400 transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold mb-6">Nossos Serviços</h5>
            <ul className="space-y-4 text-sm">
              <li>Desentupimento de Pia</li>
              <li>Desentupimento de Vaso</li>
              <li>Desentupimento de Ralo</li>
              <li>Limpeza de Fossa</li>
              <li>Hidrojateamento</li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold mb-6">Atendimento</h5>
            <p className="text-sm mb-4">Atendemos em {AREA_SERVED}.</p>
            <p className="text-sm font-bold text-white mb-2">WhatsApp / Telefone:</p>
            <p className="text-blue-500 font-black text-xl">{CONTACT_PHONE}</p>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© {new Date().getFullYear()} {COMPANY_NAME}. Todos os direitos reservados.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
