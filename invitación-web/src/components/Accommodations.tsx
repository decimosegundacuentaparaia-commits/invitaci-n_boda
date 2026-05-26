import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Navigation, Info, Bus, Star, Compass } from 'lucide-react';

interface AccommodationOption {
  name: string;
  description: string;
  badge: string;
  mapQueryUrl: string;
  embedUrl: string;
  distance: string;
  tag?: string;
}

export default function Accommodations() {
  const primaryRecommendation = {
    name: 'Borgo Santo Pietro',
    description: 'El lugar donde celebraremos la gran fiesta de nuestro enlace. Ideal para quienes quieran vivir la experiencia de ensueño completa en la Toscana.',
    badge: 'Ubicación de la Celebración',
    distance: 'Lugar de los eventos principales',
    mapQueryUrl: 'https://www.google.com/maps/search/?api=1&query=Borgo+Santo+Pietro+Chiusdino',
    embedUrl: 'https://maps.google.com/maps?q=Relais%20Borgo%20Santo%20Pietro,%20Loc.%20Palazzetto,%20Chiusdino&t=&z=14&ie=UTF8&iwloc=&output=embed',
    tag: 'Recomendación Principal'
  };

  const options: AccommodationOption[] = [
    {
      name: 'Tenuta di Papena',
      description: 'Hotel rural típico toscano rodeado de una naturaleza exhuberante y paz absoluta.',
      badge: 'Estilo Toscano Auténtico',
      distance: 'A aprox. 5 min en coche de la abadía',
      mapQueryUrl: 'https://www.google.com/maps/search/?api=1&query=Tenuta+di+Papena+Chiusdino',
      embedUrl: 'https://maps.google.com/maps?q=Tenuta%20di%20Papena,%20Chiusdino&t=&z=14&ie=UTF8&iwloc=&output=embed',
      tag: 'Muy cercano'
    },
    {
      name: 'Relais Santa Genoveffa',
      description: 'Un lugar perfecto para desconectar, descansar y deleitarse con el asombroso paisaje campestre.',
      badge: 'Relax y Paisaje',
      distance: 'A aprox. 10 min en coche',
      mapQueryUrl: 'https://www.google.com/maps/search/?api=1&query=Relais+Santa+Genoveffa+Chiusdino',
      embedUrl: 'https://maps.google.com/maps?q=Relais%20Santa%20Genoveffa,%20Chiusdino&t=&z=14&ie=UTF8&iwloc=&output=embed',
      tag: 'Excelente confort'
    },
    {
      name: 'Agriturismo Il Mulinaccio',
      description: 'Una opción maravillosa, sumamente acogedora y auténtica en plena campiña italiana.',
      badge: 'Tradicional y Familiar',
      distance: 'A aprox. 8 min en coche',
      mapQueryUrl: 'https://www.google.com/maps/search/?api=1&query=Agriturismo+Il+Mulinaccio+Chiusdino',
      embedUrl: 'https://maps.google.com/maps?q=Agriturismo%20Il%20Mulinaccio,%20Chiusdino&t=&z=14&ie=UTF8&iwloc=&output=embed',
      tag: 'Gran hospitalidad'
    },
    {
      name: 'La Melosa Resort & Spa',
      description: 'Ideal para quienes deseen prolongar el viaje, descansar más y deleitarse con unos maravillosos días de spa y máxima desconexión.',
      badge: 'Resort & Bienestar',
      distance: 'A aprox. 20 min en coche',
      mapQueryUrl: 'https://www.google.com/maps/search/?api=1&query=La+Melosa+Resort+spa+Roccastrada',
      embedUrl: 'https://maps.google.com/maps?q=La%20Melosa%20Resort%20and%20Spa,%20Roccastrada&t=&z=14&ie=UTF8&iwloc=&output=embed',
      tag: 'Relax Total'
    }
  ];

  return (
    <section id="accommodations" className="py-section-gap bg-surface-container-low relative overflow-hidden border-t border-secondary-brand/5">
      {/* Structural visual assets */}
      <div className="absolute top-10 left-10 w-48 h-48 rounded-full bg-primary/5 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full bg-secondary-brand/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-container-max mx-auto px-6 md:px-margin-edge relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center space-x-2 text-primary mb-3"
          >
            <Compass size={18} className="text-primary animate-spin-slow" />
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em]">Estancia en el Paraíso</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl text-secondary-brand mb-4"
          >
            Alojamientos Recomendados
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="font-serif text-base sm:text-lg italic text-on-surface-variant max-w-2xl mx-auto mb-6 leading-relaxed"
          >
            Para disfrutar cómodamente de nuestra boda en la Toscana, os sugerimos alojaros cerca de Abbazia di San Galgano y Borgo Santo Pietro.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-16 h-px bg-tertiary-container mx-auto"
          ></motion.div>
        </div>

        {/* Primary recommendation: Borgo Santo Pietro */}
        <div className="mb-16 max-w-5xl mx-auto">
          <div className="mb-6 flex items-center space-x-2">
            <Star size={16} fill="#EAA82C" stroke="none" />
            <h3 className="font-sans text-xs font-bold uppercase tracking-[0.15em] text-secondary-brand">Nuestra Recomendación</h3>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-surface p-6 md:p-8 rounded-2xl border border-secondary-brand/10 shadow-[0px_15px_30px_rgba(142,76,49,0.03)] hover:border-secondary-brand/20 transition-all duration-300"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Text Area */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="inline-block bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.15em] px-2.5 py-1 rounded-full mb-3">
                    {primaryRecommendation.tag}
                  </span>
                  <h4 className="font-serif text-3xl md:text-4xl text-on-surface font-semibold">{primaryRecommendation.name}</h4>
                  <p className="font-sans text-xs uppercase tracking-[0.1em] text-primary font-medium mt-1">{primaryRecommendation.badge}</p>
                </div>

                <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                  {primaryRecommendation.description}
                </p>

                <div className="space-y-2 text-xs text-on-surface-variant font-sans">
                  <div className="flex items-center space-x-2">
                    <MapPin size={14} className="text-secondary-brand" />
                    <span>Località Palazzetto, 110, 53012 Chiusdino SI, Italia</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Info size={14} className="text-primary animate-pulse" />
                    <span className="font-medium text-secondary-brand">{primaryRecommendation.distance}</span>
                  </div>
                </div>

                <div>
                  <a 
                    href={primaryRecommendation.mapQueryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-secondary-brand text-white rounded-full font-sans text-xs font-semibold uppercase tracking-[0.15em] hover:scale-105 transition-transform duration-300 shadow-md"
                  >
                    <Navigation size={14} className="mr-2" />
                    Abrir en Google Maps
                  </a>
                </div>
              </div>

              {/* Live Google Map Interactive Iframe */}
              <div className="lg:col-span-6 h-[280px] md:h-[320px] w-full rounded-xl border border-secondary-brand/10 overflow-hidden shadow-inner relative">
                <iframe
                  title="Google Maps: Borgo Santo Pietro"
                  src={primaryRecommendation.embedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>

            </div>
          </motion.div>
        </div>

        {/* Other Recommendations Grid */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="mb-8">
            <h3 className="font-sans text-xs font-bold uppercase tracking-[0.15em] text-secondary-brand">Opciones Cercanas</h3>
            <div className="w-12 h-px bg-tertiary-container mt-2"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {options.map((opt, idx) => (
              <motion.div
                key={opt.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="bg-surface p-6 rounded-2xl border border-secondary-brand/5 shadow-sm hover:border-secondary-brand/15 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="inline-block bg-secondary-brand/5 text-secondary-brand text-[9px] font-bold uppercase tracking-[0.12em] px-2 py-0.5 rounded-full mb-2">
                        {opt.tag}
                      </span>
                      <h4 className="font-serif text-2xl text-on-surface font-semibold">{opt.name}</h4>
                      <p className="font-sans text-xs text-primary font-medium">{opt.badge}</p>
                    </div>
                  </div>

                  <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                    {opt.description}
                  </p>

                  <div className="flex items-center space-x-2 text-xs text-on-surface-variant font-sans bg-surface-container-low/50 p-2.5 rounded-lg border border-secondary-brand/5">
                    <MapPin size={13} className="text-secondary-brand shrink-0" />
                    <span>{opt.distance}</span>
                  </div>

                  {/* Google Map of Accommodation */}
                  <div className="h-[200px] w-full rounded-lg border border-secondary-brand/5 overflow-hidden shadow-inner mt-2">
                    <iframe
                      title={`Google Maps: ${opt.name}`}
                      src={opt.embedUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-full"
                    ></iframe>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-secondary-brand/5">
                  <a 
                    href={opt.mapQueryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2.5 bg-outline text-on-surface font-sans text-[10px] font-bold uppercase tracking-[0.1em] hover:bg-outline-variant rounded-full transition-colors duration-300"
                  >
                    <Navigation size={12} className="mr-2" />
                    Ver ubicación
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Recommendations / Tips banner at the bottom */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-surface-container-high p-6 md:p-8 rounded-2xl border border-secondary-brand/10"
          >
            <div className="flex flex-col md:flex-row gap-6 items-start">
              
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <Info size={24} />
              </div>

              <div className="space-y-4">
                <h4 className="font-serif text-lg text-on-surface font-semibold">Consejos Generales para los Invitados</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans text-sm text-on-surface-variant">
                  <div className="space-y-2">
                    <p className="font-semibold text-secondary-brand">📅 Reserva con antelación</p>
                    <p className="leading-relaxed">
                      Os aconsejamos reservar vuestro hospedaje con bastante antelación, especialmente si queréis alojaros muy cerca del lugar de la celebración, ya que la disponibilidad en esta zona de la Toscana es altamente limitada.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold text-primary flex items-center gap-1">
                      <Bus size={14} className="animate-pulse" /> Transporte organizado ✨
                    </p>
                    <p className="leading-relaxed">
                      ¡Queremos que os divirtáis sin preocupaciones! Habrá transporte organizado por parte de nosotros entre los alojamientos aquí recomendados y los diferentes lugares de interés de los eventos de la boda.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
