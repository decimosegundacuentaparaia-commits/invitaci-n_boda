import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bus, Clock, Calendar, AlertTriangle, ArrowRight, X, Sparkles, Check } from 'lucide-react';

export default function Transport() {
  const [showSchedule, setShowSchedule] = useState(false);

  const keyPoints = [
    {
      title: 'Ida a la ceremonia',
      desc: 'Los autobuses saldrán desde los hoteles recomendados con antelación suficiente para llegar cómodamente a la ceremonia de las 17:00.',
      icon: Clock,
      time: '16:00 aprox.'
    },
    {
      title: 'Traslado al banquete',
      desc: 'Al finalizar la ceremonia, habrá transporte directo y coordinado hacia Borgo Santo Pietro para continuar con el cóctel y la gran celebración.',
      icon: ArrowRight,
      time: '18:15 aprox.'
    },
    {
      title: 'Servicio de vuelta',
      desc: 'Habrá autobuses de regreso hacia los alojamientos recomendados de forma escalonada con salidas continuas en varias frecuencias nocturnas.',
      icon: Bus,
      time: 'Varias salidas'
    }
  ];

  const scheduleItinerary = [
    {
      category: '🚍 Ida a la ceremonia',
      items: [
        { time: '16:00', label: 'Salida de autobuses desde los alojamientos recomendados' },
        { time: '16:30', label: 'Llegada a la majestuosa Abbazia di San Galgano' },
        { time: '17:00', label: 'Inicio de la ceremonia de enlace' }
      ]
    },
    {
      category: '🚍 Traslado a la finca',
      items: [
        { time: '18:15', label: 'Salida de autobuses desde San Galgano hacia la finca' },
        { time: '18:30', label: 'Llegada a Borgo Santo Pietro' },
        { time: '—', label: 'Inicio del Cóctel y celebración principal en la finca' }
      ]
    },
    {
      category: '🚍 Regreso en la noche',
      items: [
        { time: '01:00', label: 'Primera salida nocturna de autobuses de vuelta' },
        { time: '02:30', label: 'Segunda salida nocturna de autobuses de vuelta' },
        { time: '04:00', label: 'Último servicio y clausura del evento' }
      ]
    }
  ];

  return (
    <section id="transport" className="py-section-gap bg-surface relative overflow-hidden border-t border-secondary-brand/5">
      {/* Decorative vectors */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-80 h-80 rounded-full bg-secondary-brand/5 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-primary/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-container-max mx-auto px-6 md:px-margin-edge relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center space-x-2 text-primary mb-3"
          >
            <Bus size={18} className="text-primary animate-bounce-slow" />
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em]">Traslados cómodos</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl text-secondary-brand mb-4"
          >
            Servicio de Transporte
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="font-serif text-base sm:text-lg italic text-on-surface-variant max-w-2xl mx-auto mb-6 leading-relaxed"
          >
            Hemos organizado autobuses para que podáis disfrutar del gran día con total comodidad y tranquilidad, conectando la Abbazia di San Galgano y Borgo Santo Pietro.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-16 h-px bg-tertiary-container mx-auto"
          ></motion.div>
        </div>

        {/* Informative Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {keyPoints.map((point, idx) => {
            const IconComponent = point.icon;
            return (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="bg-surface-container-low p-8 rounded-2xl border border-secondary-brand/5 shadow-[0px_10px_35px_rgba(142,76,49,0.02)] flex flex-col justify-between hover:border-secondary-brand/15 transition-all duration-300 group"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <IconComponent size={20} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-on-surface">{point.title}</h3>
                  <span className="inline-block px-3 py-1 bg-surface rounded-full text-[10px] font-bold uppercase tracking-wider text-secondary-brand border border-secondary-brand/5">
                    {point.time}
                  </span>
                  <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Action Button & General Warning Block */}
        <div className="max-w-3xl mx-auto text-center space-y-8">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-6 bg-surface-container-high/40 rounded-2xl border border-secondary-brand/10 max-w-2xl mx-auto"
          >
            <div className="flex items-start gap-4 text-left">
              <div className="text-primary mt-1 shrink-0">
                <AlertTriangle size={20} className="animate-pulse" />
              </div>
              <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                👉 <strong>Recomendación cordial:</strong> Os sugerimos encarecidamente utilizar el servicio de transporte organizado. Las carreteras por el entorno rural de Toscana son sinuosas, estrechas y de noche no cuentan con iluminación artificial. Adicionalmente, las opciones de recogida mediante taxis tradicionales son ínfimas o nulas en esta zona.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="pt-2"
          >
            <button
              onClick={() => setShowSchedule(true)}
              className="inline-flex items-center space-x-2 px-8 py-4 bg-primary text-surface rounded-full font-sans text-xs font-bold uppercase tracking-[0.15em] hover:bg-primary-container hover:scale-105 transition-all duration-300 shadow-md group"
            >
              <Clock size={16} className="text-surface animate-pulse" />
              <span>Ver Horarios del Transporte</span>
            </button>
          </motion.div>
        </div>

      </div>

      {/* Schedule Detail Modal overlay with perfect animations */}
      <AnimatePresence>
        {showSchedule && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 overflow-y-auto">
            {/* Backdrop cover */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowSchedule(false)}
              className="fixed inset-0 bg-on-surface/50 backdrop-blur-sm"
            ></motion.div>

            {/* Modal Body Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="relative w-full max-w-2xl bg-surface rounded-3xl p-6 md:p-10 shadow-[0px_25px_60px_rgba(0,0,0,0.15)] overflow-hidden z-20 max-h-[90vh] flex flex-col justify-between border border-secondary-brand/5"
            >
              {/* Internal decorative background sparkles */}
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-primary/5 blur-2xl pointer-events-none"></div>

              {/* Close Button Header */}
              <div className="flex justify-between items-center mb-6 pb-4 border-b border-secondary-brand/10">
                <div className="flex items-center space-x-2.5 text-secondary-brand">
                  <Bus size={20} className="text-primary" />
                  <h4 className="font-serif text-xl md:text-2xl font-bold tracking-tight text-on-surface">Horarios de Autobús</h4>
                </div>
                <button 
                  onClick={() => setShowSchedule(false)}
                  className="p-1 rounded-full bg-surface-container-high text-on-surface-variant hover:text-on-surface transition-colors"
                  aria-label="Cerrar modal"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Itinerary Scrollable Box */}
              <div className="overflow-y-auto pr-1 flex-1 space-y-8 my-2 font-sans text-sm text-on-surface-variant">
                <p className="leading-relaxed italic text-on-surface-variant">
                  Para que podáis disfrutar del día plenamente y sin ningún tipo de preocupaciones, hemos estructurado el siguiente cronograma de transporte entre los enclaves toscanos:
                </p>

                {scheduleItinerary.map((sched, sectionIdx) => (
                  <div key={sched.category} className="space-y-4">
                    <h5 className="font-serif text-base font-bold text-secondary-brand border-l-2 border-primary pl-2.5">
                      {sched.category}
                    </h5>
                    
                    <div className="divide-y divide-secondary-brand/5">
                      {sched.items.map((item, itemIdx) => (
                        <div key={itemIdx} className="py-3 flex items-start gap-4">
                          <span className="font-mono text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded shrink-0">
                            {item.time}
                          </span>
                          <span className="text-on-surface leading-relaxed">{item.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}

                <div className="p-4 bg-surface-container-low rounded-xl border border-secondary-brand/10 text-xs flex gap-3 text-secondary-brand leading-relaxed mt-4">
                  <AlertTriangle size={16} className="shrink-0 mt-0.5" />
                  <p>
                    Reiteramos el consejo de utilizar este servicio debido a la nula disponibilidad de taxis en Chiusdino/Siena a altas horas de la madrugada y las limitadas condiciones de iluminación en las vías toscanas.
                  </p>
                </div>
              </div>

              {/* Footer Modal Action */}
              <div className="mt-8 pt-4 border-t border-secondary-brand/10 text-right">
                <button
                  onClick={() => setShowSchedule(false)}
                  className="px-6 py-2.5 bg-outline hover:bg-outline-variant duration-300 font-sans text-xs font-semibold uppercase tracking-wider rounded-full text-on-surface transition-colors"
                >
                  Entendido
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
