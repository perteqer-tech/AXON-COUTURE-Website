import React from 'react';
import { motion } from 'motion/react';
import { Ruler, RefreshCcw, Heart, BarChart3, Zap, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: <Ruler className="w-6 h-6" />,
    title: "Asesor de Talla Inteligente",
    description: "Algoritmos avanzados que analizan las medidas del cliente y el tallaje específico de cada prenda para recomendar el ajuste perfecto."
  },
  {
    icon: <RefreshCcw className="w-6 h-6" />,
    title: "Cierre de Devoluciones",
    description: "Atacamos la causa raíz de las devoluciones en moda: el error de talla. Reduce costes logísticos de forma inmediata."
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Experiencia de Cliente Premium",
    description: "Un trato personalizado que imita la atención de un sastre experto, aumentando la confianza y la lealtad a la marca."
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Análisis de Datos de Ajuste",
    description: "Obtén insights valiosos sobre cómo tus prendas se ajustan a la realidad de tus clientes para optimizar futuras colecciones."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Integración Invisible",
    description: "Se conecta con tu e-commerce actual sin fricciones. Compatible con Shopify, Magento, WooCommerce y desarrollos a medida."
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "IA Ética y Segura",
    description: "Protegemos la privacidad de tus clientes. Procesamiento de datos seguro y cumplimiento total de normativas."
  }
];

export default function Features() {
  return (
    <section className="py-24 px-6 lg:px-24 bg-ink text-paper relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl lg:text-6xl font-serif mb-6">
            Transformando el <br />
            <span className="italic text-accent">Retail de Moda</span>
          </h2>
          <p className="text-paper/60 max-w-2xl text-lg">
            No somos solo una agencia de IA. Somos artesanos digitales que entienden que en la moda, el detalle lo es todo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-paper transition-all duration-500">
                {feature.icon}
              </div>
              <h3 className="text-xl font-serif mb-4 group-hover:text-accent transition-colors">
                {feature.title}
              </h3>
              <p className="text-paper/50 leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
