import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Shirt, ShieldAlert, Check } from 'lucide-react';

export default function DressCode() {
  return (
    <section id="dress-code" className="py-section-gap bg-surface relative overflow-hidden border-t border-secondary-brand/5">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 rounded-full bg-primary/5 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-10 w-80 h-80 rounded-full bg-secondary-brand/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-container-max mx-auto px-6 md:px-margin-edge relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center space-x-2 text-primary mb-3"
          >
            <Sparkles size={18} className="text-primary animate-pulse" />
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em]">Código de Vestimenta</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl text-secondary-brand mb-4"
          >
            Dress Code
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="font-serif text-lg italic text-on-surface-variant max-w-xl mx-auto mb-6"
          >
            "Italian Chic" — Inspirado en la elegancia atemporal y los cálidos atardeceres de la primavera en la Toscana.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-16 h-px bg-tertiary-container mx-auto"
          ></motion.div>
        </div>

        {/* Dress Code Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          
          {/* Women Dress Code Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-surface-container-low p-8 md:p-10 rounded-2xl border border-secondary-brand/5 shadow-[0px_10px_35px_rgba(142,76,49,0.03)] flex flex-col justify-between group hover:border-secondary-brand/20 transition-all duration-500"
          >
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Sparkles size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-on-surface font-semibold">Para Ellas</h3>
                  <p className="font-sans text-xs uppercase tracking-[0.1em] text-primary font-medium">Elegancia Primaveral</p>
                </div>
              </div>

              <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                Os invitamos a seguir un estilo de elegancia natural, fresca y sofisticada que rinda homenaje al marco incomparable de la campiña Toscana.
              </p>

              <div className="space-y-3.5 pt-2">
                <h4 className="font-sans text-xs font-bold uppercase tracking-[0.15em] text-secondary-brand">Sugerencias:</h4>
                <ul className="space-y-2.5">
                  <li className="flex items-start text-sm text-on-surface-variant">
                    <Check size={16} className="text-primary mr-3 mt-1 shrink-0" />
                    <span>Vestidos midi o largos</span>
                  </li>
                  <li className="flex items-start text-sm text-on-surface-variant">
                    <Check size={16} className="text-primary mr-3 mt-1 shrink-0" />
                    <span>Conjuntos elegantes o monos sofisticados</span>
                  </li>
                  <li className="flex items-start text-sm text-on-surface-variant">
                    <Check size={16} className="text-primary mr-3 mt-1 shrink-0" />
                    <span>Tejidos refinados como seda, satén, crepé o terciopelo ligero</span>
                  </li>
                  <li className="flex items-start text-sm text-on-surface-variant">
                    <Check size={16} className="text-primary mr-3 mt-1 shrink-0" />
                    <span>Tonos neutros, colores tierra o tonos suaves de primavera</span>
                  </li>
                </ul>
              </div>

              {/* Climate Warning integration */}
              <div className="p-4 bg-surface rounded-xl border border-secondary-brand/5">
                <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                  💡 <strong>Nota del clima:</strong> Como la celebración continuará por la noche al aire libre, recomendamos traer un abrigo o chal elegante.
                </p>
              </div>
            </div>

            {/* Avoid limits */}
            <div className="mt-8 pt-6 border-t border-secondary-brand/5 flex items-start space-x-3">
              <ShieldAlert size={18} className="text-primary shrink-0 mt-0.5" />
              <p className="font-sans text-xs italic text-on-surface-variant">
                Por favor, <strong>evitad el blanco, marfil</strong> o looks excesivamente informales.
              </p>
            </div>
          </motion.div>

          {/* Men Dress Code Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-surface-container-low p-8 md:p-10 rounded-2xl border border-secondary-brand/5 shadow-[0px_10px_35px_rgba(142,76,49,0.03)] flex flex-col justify-between group hover:border-secondary-brand/20 transition-all duration-500"
          >
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-secondary-brand/10 flex items-center justify-center text-secondary-brand">
                  <Shirt size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-on-surface font-semibold">Para Ellos</h3>
                  <p className="font-sans text-xs uppercase tracking-[0.1em] text-secondary-brand font-medium">Clásico Contemporáneo</p>
                </div>
              </div>

              <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                Os invitamos a vestir con una elegancia clásica italiana, un corte impecable y un aire fresco y sofisticado.
              </p>

              <div className="space-y-3.5 pt-2">
                <h4 className="font-sans text-xs font-bold uppercase tracking-[0.15em] text-secondary-brand">Sugerencias:</h4>
                <ul className="space-y-2.5">
                  <li className="flex items-start text-sm text-on-surface-variant">
                    <Check size={16} className="text-secondary-brand mr-3 mt-1 shrink-0" />
                    <span>Traje en tonos oscuros, neutros o tierra</span>
                  </li>
                  <li className="flex items-start text-sm text-on-surface-variant">
                    <Check size={16} className="text-secondary-brand mr-3 mt-1 shrink-0" />
                    <span>Camisa y zapatos de vestir</span>
                  </li>
                  <li className="flex items-start text-sm text-on-surface-variant">
                    <Check size={16} className="text-secondary-brand mr-3 mt-1 shrink-0" />
                    <span>Corbata recomendada</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-surface rounded-xl border border-secondary-brand/5 Invisible">
                <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                  ✨ <strong>Inspiración:</strong> La sastrería clásica italiana combina texturas ligeras e impecables idóneas para el final de marzo.
                </p>
              </div>
            </div>

            {/* Avoid limits */}
            <div className="mt-8 pt-6 border-t border-secondary-brand/5 flex items-start space-x-3">
              <ShieldAlert size={18} className="text-secondary-brand shrink-0 mt-0.5" />
              <p className="font-sans text-xs italic text-on-surface-variant">
                Por favor, <strong>evitad prendas excesivamente informales</strong>, deportivas o demasiado veraniegas.
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
