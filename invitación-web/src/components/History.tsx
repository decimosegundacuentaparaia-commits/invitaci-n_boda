import { motion } from 'motion/react';

const Vignette = ({ src, alt, delay }: { src: string; alt: string; delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay }}
    className="relative group w-full max-w-[280px] mx-auto"
  >
    {/* Frame ornaments */}
    <div className="absolute inset-0 border-2 border-primary/10 -m-3 rounded-sm group-hover:border-primary/20 transition-colors duration-500"></div>
    <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-primary/40"></div>
    <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-primary/40"></div>
    
    <div className="bg-surface p-2 shadow-2xl relative z-10">
      <div className="overflow-hidden">
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-auto grayscale-[30%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 aspect-[4/5] object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
    </div>
  </motion.div>
);

export default function History() {
  return (
    <section id="story" className="py-section-gap max-w-container-max mx-auto px-6 md:px-margin-edge">
      <div className="mb-12 text-center md:text-left">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-4xl md:text-6xl text-secondary-brand mb-4"
        >
          Nuestra Historia
        </motion.h2>
        <div className="w-16 h-px bg-tertiary-container mx-auto md:mx-0"></div>
      </div>

      <div className="max-w-3xl mx-auto text-center mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="space-y-8"
        >
          <p className="font-sans text-lg md:text-xl text-on-surface-variant leading-relaxed">
            Nos conocimos como se conocen muchas historias importantes: sin tener ni idea de que acabaríamos aquí. Al principio éramos dos personas normales… y ahora míranos: discutiendo por dónde comer, mandándonos memes a horas imposibles y sobreviviendo juntos a “¿qué quieres cenar?” sin romper la relación. Eso es amor verdadero.
          </p>
          <p className="font-sans text-lg md:text-xl text-on-surface-variant leading-relaxed">
            Nuestra historia no fue perfecta, pero justamente por eso fue nuestra. Tuvimos momentos románticos de película… y otros donde uno parecía terapeuta del otro mientras el otro lloraba por algo completamente absurdo. Aprendimos que amar también es aguantar audios eternos, robar comida del plato ajeno y decir “ya llego” cuando todavía estás en la ducha.
          </p>
          <p className="font-sans text-lg md:text-xl text-on-surface-variant leading-relaxed">
            Dicen que las parejas felices se parecen mucho entre sí. Nosotros no. Somos esa mezcla rara entre romance y comedia que nadie entiende desde fuera pero que funciona increíblemente bien. Porque mientras unos se enamoran con flores, nosotros también nos enamoramos haciendo el ridículo juntos.
          </p>
          <span className="block font-serif text-3xl italic text-primary-container mt-12">— A & J</span>
        </motion.div>
      </div>

      {/* Vignettes Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mt-12">
        <Vignette src="/fotito/A.jpg" alt="Recuerdo A" delay={0.1} />
        <Vignette src="/fotito/B.jpg" alt="Recuerdo B" delay={0.3} />
        <Vignette src="/fotito/C.jpg" alt="Recuerdo C" delay={0.5} />
      </div>
    </section>
  );
}
