import React from 'react';
import { motion } from 'motion/react';
import { Check, Sparkles } from 'lucide-react';

const plans = [
  {
    name: "Básico",
    price: "1.197",
    description: "Esenciales para digitalizar la atención y el tallaje de tu boutique.",
    features: [
      "Chatbot web + WhatsApp",
      "Guía talla para 50 SKUs",
      "Dashboard básico",
      "Soporte email"
    ],
    highlight: false
  },
  {
    name: "Pro",
    price: "2.497",
    description: "Omnicanalidad y escala para marcas en plena expansión.",
    features: [
      "Chatbot web + WhatsApp",
      "Instagram + Email",
      "Guía talla ilimitada",
      "Recuperación postcompra",
      "Dashboard avanzado",
      "Soporte chat 24h"
    ],
    highlight: true
  },
  {
    name: "Premium",
    price: "4.997",
    description: "Control total e integración profunda para grandes firmas.",
    features: [
      "Chatbot web + WhatsApp",
      "Instagram + Email",
      "Guía talla ilimitada",
      "Recuperación postcompra",
      "Dashboard avanzado",
      "Soporte chat 24h",
      "Integración CRM/ERP",
      "Optimización mensual IA",
      "Alertas preventivas por producto",
      "Soporte prioritario + Auditoría mensual"
    ],
    highlight: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 lg:px-24 bg-paper">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-serif mb-6">Inversión en <span className="italic text-accent">Excelencia</span></h2>
          <p className="text-ink/60 max-w-2xl mx-auto text-lg">
            Planes diseñados para escalar con tu marca y transformar cada devolución en una oportunidad de fidelización.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-8 rounded-[2.5rem] border ${
                plan.highlight 
                  ? 'bg-ink text-paper border-ink shadow-2xl scale-105 z-10' 
                  : 'bg-white border-ink/5 text-ink'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-paper text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full flex items-center gap-2">
                  <Sparkles className="w-3 h-3" />
                  Más Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-serif mb-2">{plan.name}</h3>
                <p className={`text-sm ${plan.highlight ? 'text-paper/60' : 'text-ink/50'}`}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-serif">{plan.price}€</span>
                  <span className={`text-sm uppercase tracking-widest ${plan.highlight ? 'text-paper/40' : 'text-ink/40'}`}>/mes</span>
                </div>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm">
                    <Check className={`w-5 h-5 shrink-0 ${plan.highlight ? 'text-accent' : 'text-accent'}`} />
                    <span className={plan.highlight ? 'text-paper/80' : 'text-ink/70'}>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-full font-bold uppercase tracking-widest text-xs transition-all duration-300 ${
                plan.highlight 
                  ? 'bg-accent text-paper hover:bg-paper hover:text-ink' 
                  : 'bg-ink text-paper hover:bg-accent'
              }`}>
                Comenzar Ahora
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
