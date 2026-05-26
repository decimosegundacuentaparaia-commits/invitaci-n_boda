import { motion } from 'motion/react';
import { Church, Utensils, MapPin } from 'lucide-react';

export default function EventDetails() {
  return (
    <section id="event" className="py-section-gap bg-surface-container-low">
      <div className="max-w-container-max mx-auto px-6 md:px-margin-edge">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl text-on-surface"
          >
            Detalles del Evento
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-secondary-brand mt-4"
          >
            MARTES, 30 DE MARZO
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-gutter">
          <EventCard 
            Icon={Church}
            title="La Ceremonia"
            time="17:00 Horas"
            location="Abbazia di San Galgano, SI"
            description="Un lugar sagrado donde el cielo es el único techo."
            delay={0}
          />
          <EventCard 
            Icon={Utensils}
            title="El Banquete"
            time="19:30 Horas"
            location="Borgo Santo Pietro, Chiusdino"
            description="Cena bajo las estrellas en un entorno mágico."
            delay={0.2}
          />
        </div>
      </div>
    </section>
  );
}

function EventCard({ Icon, title, time, location, description, delay }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="bg-surface p-12 rounded-xl shadow-[0px_20px_40px_rgba(139,94,60,0.05)] border border-secondary-brand/10 hover:border-secondary-brand/30 transition-all duration-300 group"
    >
      <div className="text-secondary-brand mb-6 transition-transform duration-300 group-hover:scale-110">
        <Icon size={40} strokeWidth={1.5} />
      </div>
      <h3 className="font-serif text-2xl text-on-surface mb-2">{title}</h3>
      <p className="font-sans text-lg text-on-surface-variant mb-4">{time}</p>
      <p className="font-sans text-base text-on-surface-variant mb-8">
        {location}<br/>
        <span className="opacity-80">{description}</span>
      </p>
      <a 
        href="#locations" 
        className="inline-flex items-center space-x-2 text-secondary-brand font-sans text-xs font-semibold uppercase tracking-[0.15em] hover:text-primary transition-colors group-hover:translate-x-1 duration-300"
      >
        <MapPin size={14} />
        <span>Ver ubicación</span>
      </a>
    </motion.div>
  );
}
