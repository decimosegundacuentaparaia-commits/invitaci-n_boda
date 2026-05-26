import { motion } from 'motion/react';
import { MapPin, Navigation } from 'lucide-react';

export default function Locations() {
  return (
    <section id="locations" className="py-section-gap bg-surface">
      <div className="max-w-container-max mx-auto px-6 md:px-margin-edge">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl text-on-surface"
          >
            Ubicaciones
          </motion.h2>
          <div className="w-16 h-px bg-tertiary-container mx-auto mt-4"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-gutter">
          <LocationCard 
            title="Abbazia di San Galgano"
            address="Strada Comunale di S. Galgano, 53012 Chiusdino SI, Italia"
            mapUrl="https://www.google.com/maps/search/?api=1&query=Abbazia+di+San+Galgano"
            imageUrl="/fotito/abadía-medieval-de-san-galgano-en-siena-toscana-italia-69816634.jpg"
            delay={0}
          />
          <LocationCard 
            title="Borgo Santo Pietro"
            address="Località Palazzetto, 110, 53012 Chiusdino SI, Italia"
            mapUrl="https://www.google.com/maps/search/?api=1&query=Borgo+Santo+Pietro+Chiusdino"
            imageUrl="/fotito/Borgo_Santo_Pietro-Chiusdino-Exterior_view-23-635538.jpg"
            delay={0.2}
          />
        </div>
      </div>
    </section>
  );
}

function LocationCard({ title, address, mapUrl, imageUrl, delay }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      className="space-y-6"
    >
      <a 
        href={mapUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block aspect-video w-full bg-surface-container-low rounded-xl border border-outline-variant/30 overflow-hidden relative flex items-center justify-center shadow-sm group cursor-pointer"
      >
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={title}
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-90 group-hover:brightness-95"
          />
        ) : (
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1000')] bg-cover opacity-10 grayscale group-hover:opacity-20 transition-opacity duration-500"></div>
        )}
        
        {/* Elegant overlay to enhance text readability */}
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/15 transition-colors duration-500"></div>
        
        <div className="relative z-10 flex flex-col items-center text-white drop-shadow-md transition-transform duration-500 group-hover:scale-105">
          <div className="w-12 h-12 rounded-full bg-white/25 backdrop-blur-md flex items-center justify-center mb-2 shadow-inner border border-white/20">
            <MapPin size={24} className="text-white" />
          </div>
          <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-white">Ver en el Mapa</span>
        </div>
      </a>
      <div className="space-y-4">
        <h3 className="font-serif text-2xl text-on-surface">{title}</h3>
        <p className="font-sans text-base text-on-surface-variant">{address}</p>
        <a 
          href={mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-secondary-brand text-white rounded-full font-sans text-xs font-semibold uppercase tracking-[0.15em] hover:scale-105 transition-transform duration-300 shadow-md"
        >
          <Navigation size={14} className="mr-2" />
          Cómo llegar
        </a>
      </div>
    </motion.div>
  );
}
