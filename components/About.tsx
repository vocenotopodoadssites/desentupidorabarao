
import React from 'react';
import { FEATURES } from '../constants';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1595113316349-9fa4ee24f884?auto=format&fit=crop&q=80&w=800" 
                alt="Professional tools" 
                className="rounded-3xl shadow-2xl relative z-10"
              />
              <div className="absolute -bottom-10 -right-10 bg-blue-600 p-8 rounded-3xl shadow-xl z-20 hidden md:block">
                <p className="text-white font-black text-5xl mb-1">+15</p>
                <p className="text-blue-100 font-bold">Anos de Experiência</p>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">Por que a Barão?</h2>
            <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
              Excelência e agilidade que você pode confiar.
            </h3>
            <p className="text-lg text-slate-600 mb-10">
              Somos especialistas em desentupimento com foco em eficiência e limpeza. Atendemos residências, condomínios, empresas e indústrias em toda São Paulo e Grande SP.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {FEATURES.map((feature, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 bg-white p-3 rounded-2xl shadow-md h-fit">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg mb-1">{feature.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{feature.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
