import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-paper/80 backdrop-blur-lg py-4 shadow-sm' : 'bg-transparent py-8'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-24 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Logo className="w-10 h-10" />
          <span className="font-serif text-xl tracking-tighter font-bold">
            AXON <span className="text-accent">&</span> COUTURE
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-12">
          {['Soluciones', 'Planes', 'Casos de Éxito'].map((item) => (
            <a 
              key={item} 
              href={`#${item === 'Planes' ? 'pricing' : item.toLowerCase()}`} 
              className="text-[11px] uppercase tracking-[0.2em] font-semibold hover:text-accent transition-colors"
            >
              {item}
            </a>
          ))}
          <button className="px-6 py-2 bg-ink text-paper rounded-full text-[11px] uppercase tracking-widest font-bold hover:bg-accent hover:text-paper transition-all">
            Contacto
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-ink"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-paper border-t border-ink/5 p-6 flex flex-col gap-6 shadow-xl">
          {['Soluciones', 'Planes', 'Casos de Éxito'].map((item) => (
            <a 
              key={item} 
              href={`#${item === 'Planes' ? 'pricing' : item.toLowerCase()}`} 
              className="text-sm uppercase tracking-widest font-bold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <button className="w-full py-4 bg-ink text-paper rounded-full text-sm uppercase tracking-widest font-bold">
            Contacto
          </button>
        </div>
      )}
    </nav>
  );
}
