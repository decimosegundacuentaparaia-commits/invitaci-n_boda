import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, Heart } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contacto" className="py-section-gap bg-surface-container-low border-t border-b border-outline-variant/10">
      <div className="max-w-container-max mx-auto px-6 md:px-margin-edge text-center">
        
        <div className="text-center mb-12">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="block font-sans text-xs font-semibold uppercase tracking-[0.25em] text-secondary-brand mb-3"
          >
            ¿TIENES DUDAS O PREGUNTAS?
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl text-on-surface"
          >
            Contacto
          </motion.h2>
          <div className="w-16 h-px bg-tertiary-container mx-auto mt-4"></div>
        </div>

        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-sans text-base md:text-lg text-on-surface-variant max-w-xl mx-auto mb-12 leading-relaxed"
        >
          Para cualquier consulta, confirmación especial o si necesitas ayuda con el alojamiento y traslados, estamos a tu entera disposición. ¡No dudes en escribirnos o llamarnos!
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          
          {/* Email Card */}
          <motion.a
            href="mailto:decimosegundacuentaparaia@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center p-8 bg-surface border border-outline-variant/30 rounded-2xl hover:border-primary/40 hover:shadow-md transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Mail className="text-primary" size={20} />
            </div>
            <span className="font-sans text-xs font-bold uppercase tracking-[0.15em] text-secondary-brand mb-1">
              CORREO ELECTRÓNICO
            </span>
            <span className="font-serif text-lg md:text-xl text-on-surface group-hover:text-primary transition-colors duration-300 break-all select-all">
              decimosegundacuentaparaia@gmail.com
            </span>
          </motion.a>

          {/* Phone Card */}
          <motion.a
            href="tel:+34600123456"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center p-8 bg-surface border border-outline-variant/30 rounded-2xl hover:border-primary/40 hover:shadow-md transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Phone className="text-primary" size={20} />
            </div>
            <span className="font-sans text-xs font-bold uppercase tracking-[0.15em] text-secondary-brand mb-1">
              TELÉFONO DE CONTACTO
            </span>
            <span className="font-serif text-lg md:text-xl text-on-surface group-hover:text-primary transition-colors duration-300 select-all">
              +34 600 123 456
            </span>
          </motion.a>

        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 flex justify-center items-center gap-2 text-outline text-xs tracking-wider uppercase"
        >
          <Heart size={12} className="text-secondary-brand" fill="currentColor" />
          <span>¡Os esperamos con mucha ilusión!</span>
        </motion.div>

      </div>
    </section>
  );
}
