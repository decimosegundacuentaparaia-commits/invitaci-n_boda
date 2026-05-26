import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Sun, Orbit, Hourglass } from 'lucide-react';

export default function Countdown() {
  const TARGET_DATE = new Date('2027-03-30T17:00:00');

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isCompleted: false,
  });

  // Metaphorical states updated dynamically
  const [heartbeats, setHeartbeats] = useState(0);
  const [spaceDistance, setSpaceDistance] = useState(0);

  useEffect(() => {
    function updateCountdown() {
      const now = new Date();
      const difference = TARGET_DATE.getTime() - now.getTime();

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isCompleted: true });
        setHeartbeats(0);
        setSpaceDistance(0);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isCompleted: false });

      // 1. Heartbeats - assuming ~72 beats per minute (1.2 beats per second)
      const beatsRemaining = Math.floor((difference / 1000) * 1.2);
      setHeartbeats(beatsRemaining);

      // 2. Cosmic Voyage of the Earth - Earth orbital speed is ~29.78 km/s
      const kmRemaining = Math.floor((difference / 1000) * 29.78);
      setSpaceDistance(kmRemaining);
    }

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeUnits = [
    { label: 'DÍAS', value: timeLeft.days },
    { label: 'HORAS', value: timeLeft.hours },
    { label: 'MINUTOS', value: timeLeft.minutes },
    { label: 'SEGUNDOS', value: timeLeft.seconds },
  ];

  return (
    <section id="countdown" className="py-section-gap bg-surface-container-low relative overflow-hidden">
      {/* Decorative celestial background elements */}
      <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-secondary-brand/5 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-primary/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-container-max mx-auto px-6 md:px-margin-edge relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center space-x-2 text-secondary-brand mb-3"
          >
            <Hourglass size={20} className="animate-spin-slow" />
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em]">El tiempo detenido</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-secondary-brand mb-4"
          >
            Nuestra Cuenta Atrás
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-16 h-px bg-tertiary-container mx-auto"
          ></motion.div>
        </div>

        {/* Dynamic & Precise Countdown Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-20">
          <AnimatePresence mode="popLayout">
            {timeUnits.map((unit, index) => (
              <motion.div
                key={unit.label}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative bg-surface p-6 md:p-8 rounded-2xl shadow-[0px_15px_30px_rgba(142,76,49,0.04)] border border-secondary-brand/10 text-center group"
              >
                {/* Vintage Card Ornament */}
                <div className="absolute inset-2 border border-secondary-brand/5 rounded-xl pointer-events-none group-hover:border-secondary-brand/20 transition-colors duration-500"></div>
                
                <div className="relative font-serif text-4xl md:text-6xl lg:text-7xl text-on-surface font-extrabold tracking-tight select-none">
                  {timeLeft.isCompleted ? (
                    "00"
                  ) : (
                    String(unit.value).padStart(2, '0')
                  )}
                </div>
                
                <div className="mt-3 font-sans text-xs font-semibold uppercase tracking-[0.15em] text-secondary-brand">
                  {unit.label}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Poetical & Metaphorical Perspective Section */}
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h3 className="font-serif text-xl md:text-2xl italic text-on-surface-variant font-medium">
              "Mientras el reloj avanza sin pausa, el universo mide nuestra dulce distancia..."
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Metaphor Card 1: Heartbeats */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-surface p-6 md:p-8 rounded-2xl border border-secondary-brand/5 shadow-sm text-center flex flex-col justify-between"
            >
              <div className="flex justify-center text-secondary-brand mb-4">
                <Heart size={32} strokeWidth={1.5} className="animate-pulse" />
              </div>
              <div className="space-y-4">
                <h4 className="font-serif text-lg font-bold text-on-surface">Latidos de Ilusión</h4>
                <div className="flex justify-center">
                  <span className="font-serif text-base sm:text-lg lg:text-xl text-secondary-brand font-bold bg-surface-container-low py-1.5 px-3 rounded-lg">
                    {timeLeft.isCompleted ? 'El momento ha de latir' : `~${heartbeats.toLocaleString()}`}
                  </span>
                </div>
                <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                  Latidos de emoción que darán nuestros corazones llenos de ilusión antes de decirnos "Sí, quiero" bajo el cielo abierto de San Galgano.
                </p>
              </div>
            </motion.div>

            {/* Metaphor Card 2: Tuscan Sunrises */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-surface p-6 md:p-8 rounded-2xl border border-secondary-brand/5 shadow-sm text-center flex flex-col justify-between"
            >
              <div className="flex justify-center text-tertiary-container mb-4">
                <Sun size={32} strokeWidth={1.5} className="animate-spin-slow" />
              </div>
              <div className="space-y-4">
                <h4 className="font-serif text-lg font-bold text-on-surface">Amaneceres Dorados</h4>
                <div className="flex justify-center">
                  <span className="font-serif text-base sm:text-lg lg:text-xl text-primary font-bold bg-surface-container-low py-1.5 px-3 rounded-lg">
                    {timeLeft.isCompleted ? 'El sol del gran día ha salido' : `${timeLeft.days} amaneceres`}
                  </span>
                </div>
                <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                  Buenos días que el sol regalará a los campos de Toscana antes de iluminar nuestro día más esperado. Cada amanecer es una caricia que acorta la espera.
                </p>
              </div>
            </motion.div>

            {/* Metaphor Card 3: Orbital Space Flight */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-surface p-6 md:p-8 rounded-2xl border border-secondary-brand/5 shadow-sm text-center flex flex-col justify-between"
            >
              <div className="flex justify-center text-primary-container mb-4">
                <Orbit size={32} strokeWidth={1.5} className="text-primary-container" />
              </div>
              <div className="space-y-4">
                <h4 className="font-serif text-lg font-bold text-on-surface">Viaje Celestial</h4>
                <div className="flex justify-center">
                  <span className="font-serif text-base md:text-sm lg:text-base xl:text-xl text-secondary-brand font-bold bg-surface-container-low py-1.5 px-3 rounded-lg text-center break-all sm:break-normal max-w-full">
                    {timeLeft.isCompleted ? 'Alineación completa' : `~${spaceDistance.toLocaleString()} km`}
                  </span>
                </div>
                <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                  Kilómetros que la Tierra recorrerá a toda velocidad a través del cosmos hasta alinearse perfectamente en la fecha de nuestro enlace.
                </p>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
