import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Heart, Calendar, MapPin, Sparkles, Phone, Compass, Info } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Disable body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const menuItems = [
    { href: '#story', label: 'Nuestra Historia', subtitle: 'Nuestra andadura juntos' },
    { href: '#event', label: 'Ceremonia & Banquete', subtitle: 'Detalles de la celebración' },
    { href: '#locations', label: 'Ubicaciones', subtitle: 'Abbazia y Borgo Santo Pietro' },
    { href: '#gallery', label: 'Galería', subtitle: 'Momentos compartidos' },
    { href: '#dress-code', label: 'Dress Code', subtitle: 'Código de vestimenta' },
    { href: '#accommodations', label: 'Alojamiento', subtitle: 'Estancia recomendada' },
    { href: '#transport', label: 'Transporte', subtitle: 'Autobuses y horarios' },
    { href: '#contacto', label: 'Contacto', subtitle: '¿Alguna duda o pregunta?' },
  ];

  return (
    <>
      <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-surface/85 shadow-[0px_10px_30px_rgba(139,94,60,0.04)] border-b border-secondary-brand/5">
        <nav className="flex justify-between items-center w-full max-w-container-max mx-auto px-6 md:px-margin-edge h-20">
          
          {/* Brand/Monogram Logo */}
          <a 
            href="#" 
            className="font-serif text-3xl text-on-surface tracking-tighter shrink-0 select-none hover:text-primary transition-colors duration-300"
          >
            A&J
          </a>
          
          <div className="flex items-center space-x-6">
            {/* Quick Action RSVP Button on Desktop */}
            <a 
              href="#rsvp" 
              className="hidden sm:inline-flex items-center px-5 py-2 border border-primary/20 hover:border-primary text-primary font-sans text-[10px] md:text-xs font-semibold uppercase tracking-[0.15em] rounded-full transition-all duration-300 hover:scale-105"
            >
              Confirmar alta
            </a>

            {/* Hamburger (3-bar) Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center space-x-2.5 px-3 py-2 rounded-full hover:bg-on-surface/5 transition-colors duration-300 group z-50 relative"
              aria-label="Toggle Menu"
            >
              <span className="hidden md:inline font-sans text-xs font-bold uppercase tracking-[0.15em] text-on-surface-variant group-hover:text-primary transition-colors">
                Menú
              </span>
              
              {/* Elegant Custom 3-Bar / Cross Icon */}
              <div className="w-6 h-5 flex flex-col justify-between items-end relative overflow-hidden">
                <span 
                  className={`h-[1.5px] bg-on-surface-variant group-hover:bg-primary transition-all duration-300 rounded ${
                    isOpen ? 'w-6 rotate-45 translate-y-[9px]' : 'w-6'
                  }`}
                />
                <span 
                  className={`h-[1.5px] bg-on-surface-variant group-hover:bg-primary transition-all duration-300 rounded ${
                    isOpen ? 'opacity-0 w-0' : 'w-4.5 group-hover:w-6'
                  }`}
                />
                <span 
                  className={`h-[1.5px] bg-on-surface-variant group-hover:bg-primary transition-all duration-300 rounded ${
                    isOpen ? 'w-6 -rotate-45 -translate-y-[9px]' : 'w-5 group-hover:w-6'
                  }`}
                />
              </div>
            </button>
          </div>

        </nav>
      </header>

      {/* Slide-out Menu Overlay Drawer */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-40 flex justify-end">
            
            {/* Backdrop Blur overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-on-surface/40 backdrop-blur-sm"
            />

            {/* Menu Container Card */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 220 }}
              className="relative w-full max-w-md h-full bg-surface shadow-[0px_0px_50px_rgba(0,0,0,0.15)] flex flex-col justify-between p-6 md:p-10 overflow-y-auto border-l border-secondary-brand/5"
            >
              
              {/* Top Row with Brand and Close controls */}
              <div className="flex justify-between items-center mt-4">
                <span className="font-serif text-3xl text-on-surface font-semibold">A&J</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-1 p-2 rounded-full hover:bg-on-surface/5 text-on-surface-variant hover:text-on-surface transition-colors"
                  aria-label="Cerrar menú"
                >
                  <span className="font-sans text-[10px] font-bold uppercase tracking-wider">Cerrar</span>
                  <X size={18} />
                </button>
              </div>

              {/* Navigation Links List */}
              <div className="my-auto py-10 space-y-6">
                <p className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-primary/60 border-b border-secondary-brand/10 pb-2">
                  Secciones de la boda
                </p>

                <div className="flex flex-col space-y-4">
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <a
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="group flex items-center justify-between py-2 text-left"
                      >
                        <div className="space-y-0.5">
                          <span className="block font-serif text-xl md:text-2xl text-on-surface group-hover:text-primary transition-colors duration-300 font-medium">
                            {item.label}
                          </span>
                          <span className="block font-sans text-[10px] md:text-xs text-on-surface-variant uppercase tracking-wider group-hover:text-primary/75 transition-colors">
                            {item.subtitle}
                          </span>
                        </div>
                        <Heart 
                          size={14} 
                          className="text-primary opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 shrink-0" 
                          fill="currentColor"
                        />
                      </a>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Direct call to action RSVP inside the menu drawer footer */}
              <div className="space-y-6 border-t border-secondary-brand/10 pt-6">
                <div className="text-center">
                  <p className="font-serif text-sm italic text-on-surface-variant mb-4">
                    "Arrivederci in Toscana" — Con cariño, Azahra & Josema.
                  </p>
                  
                  <a
                    href="#rsvp"
                    onClick={() => setIsOpen(false)}
                    className="w-full inline-flex items-center justify-center py-4 bg-primary text-surface rounded-full font-sans text-xs font-extrabold uppercase tracking-[0.2em] hover:bg-primary-container hover:scale-102 transition-all duration-300 shadow-md"
                  >
                    <Heart size={14} className="mr-2 animate-pulse" fill="currentColor" stroke="none" />
                    Confirmar mi Asistencia (RSVP)
                  </a>
                </div>

                {/* Additional metadata info inside header menu */}
                <div className="flex justify-around text-[10px] text-on-surface-variant font-sans uppercase tracking-wider text-center border-t border-on-surface/5 pt-4">
                  <div className="flex flex-col items-center">
                    <Calendar size={12} className="text-secondary-brand mb-1" />
                    <span>30 Mar 2027</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <MapPin size={12} className="text-secondary-brand mb-1" />
                    <span>Toscana, Italia</span>
                  </div>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
