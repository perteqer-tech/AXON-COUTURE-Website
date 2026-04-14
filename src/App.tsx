import React from 'react';
import { motion } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ChatDemo from './components/ChatDemo';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import { Sparkles, ArrowRight, Quote } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-accent/30">
      <Navbar />
      
      <main>
        <Hero />

        {/* Problem Section */}
        <section className="py-24 px-6 lg:px-24 bg-paper relative overflow-hidden">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl relative">
                <img 
                  src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=1000" 
                  alt="Fashion Logistics" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-accent/10 mix-blend-multiply" />
              </div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl -z-10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-6xl font-serif mb-8 leading-tight">
                El problema de los <br />
                <span className="italic text-accent">$218 Billones</span>
              </h2>
              <p className="text-lg text-ink/70 mb-8 leading-relaxed">
                Las devoluciones por errores de talla son la mayor ineficiencia en el e-commerce de moda. No solo erosionan tus márgenes, sino que dañan la confianza del cliente y aumentan la huella de carbono.
              </p>
              <div className="space-y-6">
                {[
                  "El 70% de las devoluciones en moda son por problemas de ajuste.",
                  "Cada devolución cuesta de media $15 en logística y depreciación.",
                  "La incertidumbre de talla detiene al 40% de los compradores potenciales."
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                    </div>
                    <p className="text-sm font-medium text-ink/80">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <Features />

        {/* Interactive Demo Section */}
        <section className="py-24 px-6 lg:px-24 bg-paper">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent">Live Experience</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-serif mb-6">Pruébalo tú <span className="italic text-accent">mismo</span></h2>
            <p className="text-ink/60 max-w-2xl mx-auto text-lg">
              Interactúa con nuestro Asesor de Talla AI. Descubre cómo una conversación elegante puede cerrar una venta y eliminar una devolución.
            </p>
          </div>

          <div className="relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/5 rounded-full blur-[120px] -z-10" />
            <ChatDemo />
          </div>
        </section>

        <Pricing />
        
        {/* Testimonial Section */}
        <section className="py-24 px-6 lg:px-24 border-y border-ink/5">
          <div className="max-w-4xl mx-auto text-center">
            <Quote className="w-12 h-12 text-accent/20 mx-auto mb-8" />
            <h3 className="text-3xl lg:text-5xl font-serif italic leading-tight mb-12">
              "AXON & COUTURE no solo nos dio una herramienta, nos dio una ventaja competitiva. Nuestras devoluciones bajaron un 30% en el primer trimestre."
            </h3>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-ink/10 overflow-hidden">
                <img src="https://picsum.photos/seed/fashion-ceo/100/100" alt="CEO" referrerPolicy="no-referrer" />
              </div>
              <div className="text-left">
                <p className="font-bold text-sm uppercase tracking-widest">Elena Valenti</p>
                <p className="text-xs text-ink/50 uppercase tracking-widest">CEO, Valenti Atelier</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 lg:px-24 bg-ink text-paper text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <h2 className="text-5xl lg:text-7xl font-serif mb-8">
              ¿Listo para <span className="italic text-accent">evolucionar</span>?
            </h2>
            <p className="text-paper/60 max-w-xl mx-auto mb-12 text-lg">
              Únete a las marcas de moda que ya están definiendo el futuro del retail con inteligencia artificial.
            </p>
            <button className="px-12 py-5 bg-accent text-ink rounded-full font-bold uppercase tracking-widest hover:bg-paper transition-all duration-500 flex items-center gap-3 mx-auto group">
              Reservar Consultoría Gratuita
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
