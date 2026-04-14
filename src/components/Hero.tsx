import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import Logo from './Logo';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 lg:px-24 pt-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 -z-10 skew-x-12 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2" />

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center gap-2 mb-6">
            <span className="px-3 py-1 bg-accent/10 text-accent text-[10px] font-bold uppercase tracking-[0.2em] rounded-full flex items-center gap-2">
              <Sparkles className="w-3 h-3" />
              The Future of Fashion Commerce
            </span>
          </div>
          
          <h1 className="text-6xl lg:text-8xl font-serif leading-[0.9] mb-8">
            AXON <span className="italic text-accent">&</span> <br />
            COUTURE
          </h1>
          
          <p className="text-xl text-ink/70 max-w-lg mb-10 leading-relaxed">
            Elevamos la experiencia de compra online con IA. Nuestro Asesor de Talla inteligente elimina la incertidumbre, reduce las devoluciones y fideliza a tus clientes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-ink text-paper rounded-full font-medium hover:bg-accent hover:text-paper transition-all duration-300 flex items-center justify-center gap-2 group">
              Solicitar Demo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border border-ink/10 rounded-full font-medium hover:bg-ink/5 transition-all duration-300">
              Nuestros Servicios
            </button>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 border-t border-ink/5 pt-8">
            <div>
              <p className="text-3xl font-serif text-accent">-35%</p>
              <p className="text-[10px] uppercase tracking-widest opacity-50">Devoluciones</p>
            </div>
            <div>
              <p className="text-3xl font-serif text-accent">+22%</p>
              <p className="text-[10px] uppercase tracking-widest opacity-50">Conversión</p>
            </div>
            <div>
              <p className="text-3xl font-serif text-accent">98%</p>
              <p className="text-[10px] uppercase tracking-widest opacity-50">Satisfacción</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative group">
            <img 
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1000" 
              alt="High Fashion" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
              <p className="text-paper/80 text-sm italic">"La tecnología es la nueva alta costura del retail."</p>
            </div>
          </div>
          
          {/* Floating Card */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-ink/5 max-w-[200px]"
          >
            <div className="flex items-center gap-3 mb-2">
              <Logo className="w-8 h-8" />
              <p className="text-[10px] font-bold uppercase tracking-wider">AI Insight</p>
            </div>
            <p className="text-xs text-ink/70">"Este cliente suele usar talla M en marcas similares. Recomienda M para este corte."</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
