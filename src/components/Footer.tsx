import React from 'react';
import { Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-paper border-t border-ink/5 pt-24 pb-12 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <Logo className="w-12 h-12" />
              <span className="font-serif text-2xl tracking-tighter font-bold">
                AXON <span className="text-accent">&</span> COUTURE
              </span>
            </div>
            <p className="text-ink/60 max-w-md mb-8 leading-relaxed">
              Liderando la intersección entre la inteligencia artificial y la moda de lujo. Ayudamos a las marcas a escalar mediante automatización inteligente y experiencias personalizadas.
            </p>
            <div className="flex gap-4">
              {[Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-ink/10 flex items-center justify-center hover:bg-ink hover:text-paper transition-all">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-8">Navegación</h4>
            <ul className="space-y-4">
              {['Servicios', 'Soluciones', 'Casos de Éxito', 'Agencia', 'Blog', 'Carreras'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-ink/60 hover:text-accent transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-8">Contacto</h4>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <div>
                  <p className="text-[10px] uppercase tracking-widest opacity-40 mb-1">Email</p>
                  <p className="text-sm">hello@axoncouture.ai</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <div>
                  <p className="text-[10px] uppercase tracking-widest opacity-40 mb-1">Teléfono</p>
                  <p className="text-sm">+34 910 000 000</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <MapPin className="w-5 h-5 text-accent shrink-0" />
                <div>
                  <p className="text-[10px] uppercase tracking-widest opacity-40 mb-1">Sede</p>
                  <p className="text-sm">Madrid | Paris | Milan</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-ink/5 flex flex-col md:row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-[0.2em] opacity-40 font-bold">
            © 2026 AXON & COUTURE. Todos los derechos reservados.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] uppercase tracking-[0.2em] opacity-40 font-bold hover:opacity-100 transition-opacity">Privacidad</a>
            <a href="#" className="text-[10px] uppercase tracking-[0.2em] opacity-40 font-bold hover:opacity-100 transition-opacity">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
