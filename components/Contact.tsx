
import React, { useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';
import { CONTACT_PHONE, AREA_SERVED, WHATSAPP_LINK } from '../constants';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', phone: '', service: '', message: '' });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
    setTimeout(() => setIsSent(false), 5000);
    setFormState({ name: '', phone: '', service: '', message: '' });
  };

  return (
    <section id="contato" className="py-24 bg-blue-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          <div className="w-full lg:w-2/5 bg-blue-600 p-12 text-white">
            <h3 className="text-3xl font-black mb-6">Informações de Contato</h3>
            <p className="text-blue-100 mb-10 leading-relaxed">
              Precisa de ajuda urgente? Nossa equipe está de plantão para te atender agora mesmo via WhatsApp.
            </p>

            <div className="space-y-8">
              <a 
                href={WHATSAPP_LINK} 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 hover:translate-x-2 transition-transform"
              >
                <div className="bg-white/10 p-4 rounded-2xl">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </div>
                <div>
                  <p className="text-blue-200 text-sm">WhatsApp</p>
                  <p className="text-xl font-bold">{CONTACT_PHONE}</p>
                </div>
              </a>
              <div className="flex items-center gap-5">
                <div className="bg-white/10 p-4 rounded-2xl">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-blue-200 text-sm">Área de Atendimento</p>
                  <p className="text-lg font-bold">{AREA_SERVED}</p>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div className="bg-white/10 p-4 rounded-2xl">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-blue-200 text-sm">E-mail</p>
                  <p className="text-lg font-bold">contato@barao.com.br</p>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-16 border-t border-white/10 flex gap-4">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="bg-white/10 p-3 rounded-xl hover:bg-white/20 transition-colors">
                 <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
            </div>
          </div>

          <div className="w-full lg:w-3/5 p-8 md:p-16">
            <h3 className="text-3xl font-black text-slate-900 mb-8">Peça um Orçamento Grátis</h3>
            
            {isSent ? (
              <div className="bg-green-50 text-green-700 p-8 rounded-3xl border border-green-100 flex items-center gap-4 animate-in zoom-in duration-300">
                <div className="bg-green-100 p-3 rounded-full">
                  <Send className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-lg">Mensagem enviada com sucesso!</p>
                  <p>Em breve um de nossos consultores entrará em contato.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Seu Nome</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Ex: João Silva" 
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                      value={formState.name}
                      onChange={e => setFormState({...formState, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Seu Telefone/WhatsApp</label>
                    <input 
                      required
                      type="tel" 
                      placeholder="Ex: (19) 98827-9475" 
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                      value={formState.phone}
                      onChange={e => setFormState({...formState, phone: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Tipo de Serviço</label>
                  <select 
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all appearance-none"
                    value={formState.service}
                    onChange={e => setFormState({...formState, service: e.target.value})}
                  >
                    <option value="">Selecione uma opção</option>
                    <option value="pia">Desentupimento de Pia</option>
                    <option value="vaso">Desentupimento de Vaso</option>
                    <option value="ralo">Desentupimento de Ralo</option>
                    <option value="fossa">Limpeza de Fossa</option>
                    <option value="outro">Outros Serviços</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Mensagem (Opcional)</label>
                  <textarea 
                    rows={4}
                    placeholder="Conte-nos brevemente o seu problema..." 
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all resize-none"
                    value={formState.message}
                    onChange={e => setFormState({...formState, message: e.target.value})}
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 active:scale-95 flex items-center justify-center gap-3 group"
                >
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  Enviar Solicitação
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
