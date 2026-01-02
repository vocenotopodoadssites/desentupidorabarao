
import React from 'react';
import { SERVICES } from '../constants';
import { ArrowRight } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">Especialidades</h2>
          <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">Soluções completas para qualquer entupimento</h3>
          <p className="text-lg text-slate-600">Utilizamos tecnologia de ponta para diagnosticar e resolver o problema na raiz, sem danificar pisos ou paredes.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="group relative bg-slate-50 rounded-3xl p-8 hover:bg-blue-600 transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-blue-200 hover:-translate-y-2">
              <div className="bg-white p-4 rounded-2xl inline-block mb-6 shadow-sm group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-white transition-colors">{service.title}</h4>
              <p className="text-slate-600 mb-6 group-hover:text-blue-50 transition-colors leading-relaxed">
                {service.description}
              </p>
              <div className="mt-auto">
                <a href="#contato" className="inline-flex items-center gap-2 font-bold text-blue-600 group-hover:text-white transition-colors">
                  Saiba mais <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
