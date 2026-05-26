import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, X, Star } from 'lucide-react';

interface SparkleParticle {
  id: number;
  x: number;
  y: number;
  scale: number;
  rotate: number;
  delay: number;
  duration: number;
  color: string;
  isStar: boolean;
}

export default function RSVP() {
  const [attendance, setAttendance] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [companions, setCompanions] = useState('');
  const [busNeeded, setBusNeeded] = useState<'yes' | 'no'>('no');
  const [dietPreference, setDietPreference] = useState('standard');
  const [dietDetails, setDietDetails] = useState('');
  const [song, setSong] = useState('');
  const [artist, setArtist] = useState('');
  const [observations, setObservations] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [particles, setParticles] = useState<SparkleParticle[]>([]);

  const getDietLabel = (pref: string) => {
    switch (pref) {
      case 'standard': return 'Estándar';
      case 'vegetarian': return 'Vegetariano';
      case 'vegan': return 'Vegano';
      case 'celiac': return 'Celíaco (Sin Gluten)';
      case 'other': return 'Otras intolerancias/alergias';
      default: return 'Estándar';
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (name && attendance) {
      setIsSending(true);
      try {
        const submissionDate = new Date().toLocaleString('es-ES', { timeZone: 'Europe/Madrid' });

        const data = {
          tipo: "rsvp",
          nombre: name,
          asistencia: attendance === 'yes' ? 'Sí' : 'No',
          acompanantes: attendance === 'yes' ? (companions || '0') : '0',
          autobus: attendance === 'yes' ? (busNeeded === 'yes' ? 'Sí' : 'No') : 'No',
          menu: attendance === 'yes' ? getDietLabel(dietPreference) : '',
          alergias: attendance === 'yes' ? dietDetails : '',
          cancion: attendance === 'yes' ? song : '',
          artista: attendance === 'yes' ? artist : '',
          fecha: submissionDate,
          observaciones: observations || '',

          // Versiones con mayúsculas y acentos para coincidir exactamente con las cabeceras de Google Sheets
          "Nombre": name,
          "Asistencia": attendance === 'yes' ? 'Sí' : 'No',
          "Acompañantes": attendance === 'yes' ? (companions || '0') : '0',
          "Autobús": attendance === 'yes' ? (busNeeded === 'yes' ? 'Sí' : 'No') : 'No',
          "Menú": attendance === 'yes' ? getDietLabel(dietPreference) : '',
          "Alergias": attendance === 'yes' ? dietDetails : '',
          "Canción": attendance === 'yes' ? song : '',
          "Artista": attendance === 'yes' ? artist : '',
          "Fecha": submissionDate,
          "Observaciones": observations || ''
        };

        const res = await fetch("https://script.google.com/macros/s/AKfycbxtJUudeMTkYzvGFN3l0ydKOac4qQ_36GeUjqE7RoKV2bv-1unNN-Rwm4n9vUJt5z66vQ/exec", {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "text/plain"
          },
          body: JSON.stringify(data)
        });
        
        console.log("Response from Google Apps Script:", res);
      } catch (err) {
        console.error("Error submitting RSVP:", err);
      } finally {
        setIsSending(false);
        if (attendance === 'yes') {
          // Generate a beautiful batch of sparkles & stars
          const newParticles = Array.from({ length: 50 }).map((_, i) => ({
            id: i,
            x: (Math.random() - 0.5) * 500, // horizontal angle flight
            y: -Math.random() * 320 - 80,   // vertical burst altitude
            scale: Math.random() * 1.1 + 0.4,
            rotate: Math.random() * 360,
            delay: Math.random() * 0.3,
            duration: Math.random() * 1.8 + 1.2,
            color: ['#E6D8C5', '#8E4C31', '#D29062', '#EAA82C', '#F59E0B', '#FCD34D'][Math.floor(Math.random() * 6)],
            isStar: Math.random() > 0.4
          }));
          setParticles(newParticles);
        }
        setSubmitted(true);
      }
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setParticles([]);
    setCompanions('');
    setBusNeeded('no');
    setDietPreference('standard');
    setDietDetails('');
    setSong('');
    setArtist('');
    setObservations('');
  };

  return (
    <section id="rsvp" className="py-section-gap bg-surface-container-high relative overflow-hidden">
      <div className="max-w-[600px] mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-surface p-8 md:p-12 rounded-2xl shadow-xl text-center relative overflow-hidden"
        >
          {/* Confetti / Sparkles explosion container */}
          {submitted && attendance === 'yes' && (
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-visible">
              <AnimatePresence>
                {particles.map((p) => (
                  <motion.div
                    key={p.id}
                    initial={{ x: 0, y: 50, scale: 0, opacity: 1, rotate: 0 }}
                    animate={{
                      x: p.x,
                      y: p.y,
                      scale: [0, p.scale, p.scale * 1.2, 0],
                      opacity: [1, 1, 0.8, 0],
                      rotate: p.rotate + 360
                    }}
                    transition={{
                      delay: p.delay,
                      duration: p.duration,
                      ease: "easeOut"
                    }}
                    className="absolute"
                  >
                    {p.isStar ? (
                      <Star 
                        size={20} 
                        fill={p.color} 
                        stroke="none" 
                        className="drop-shadow-[0_2px_8px_rgba(234,168,44,0.3)] animate-pulse" 
                      />
                    ) : (
                      // Diamond sparkles
                      <div 
                        style={{ backgroundColor: p.color }}
                        className="w-3 h-3 rotate-45 rounded-[2px]"
                      />
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}

          {!submitted ? (
            <>
              <h2 className="font-serif text-3xl md:text-5xl text-on-surface mb-2">Confirmar Asistencia</h2>
              <p className="font-sans text-sm md:text-base text-on-surface-variant mb-12">
                Nos encantaría que nos acompañaras en este día tan especial. Por favor, confírmanos antes del 1 de Enero.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-8 text-left">
                <div className="relative">
                  <label className="block font-sans text-xs font-semibold uppercase tracking-[0.15em] text-secondary-brand mb-2">NOMBRE COMPLETO</label>
                  <input 
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary px-0 py-3 font-sans text-lg text-on-surface placeholder:text-outline-variant/50 transition-colors"
                    placeholder="Escribe tu nombre aquí" 
                    type="text" 
                  />
                </div>
                
                <div className="pt-4">
                  <label className="block font-sans text-xs font-semibold uppercase tracking-[0.15em] text-secondary-brand mb-6 text-center">¿PODRÁS ASISTIR?</label>
                  <div className="flex justify-center space-x-8 md:space-x-12">
                    <AttendanceOption 
                      value="yes"
                      label="SÍ, IRÉ"
                      Icon={Check}
                      selected={attendance === 'yes'}
                      onClick={() => setAttendance('yes')}
                      colorClass="bg-primary border-primary"
                    />
                    <AttendanceOption 
                      value="no"
                      label="LO SIENTO"
                      Icon={X}
                      selected={attendance === 'no'}
                      onClick={() => setAttendance('no')}
                      colorClass="bg-secondary-brand border-secondary-brand"
                    />
                  </div>
                </div>

                {/* Additional conditional fields */}
                <AnimatePresence>
                  {attendance && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-8 overflow-hidden pt-4"
                    >
                      {attendance === 'yes' && (
                        <>
                          <div className="relative">
                            <label className="block font-sans text-xs font-semibold uppercase tracking-[0.15em] text-secondary-brand mb-2">¿CUÁNTOS ACOMPAÑANTES TRAES?</label>
                            <input 
                              value={companions}
                              onChange={(e) => setCompanions(e.target.value)}
                              className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary px-0 py-3 font-sans text-lg text-on-surface placeholder:text-outline-variant/50 transition-colors"
                              placeholder="Número de acompañantes (ej. 0, 1, 2...)" 
                              type="number"
                              min="0"
                            />
                          </div>

                          {/* Bus / Shuttle Selection */}
                          <div className="relative">
                            <label className="block font-sans text-xs font-semibold uppercase tracking-[0.15em] text-secondary-brand mb-3">¿NECESITAS AUTOBÚS PARA EL TRASLADO?</label>
                            <div className="flex gap-4">
                              <button
                                type="button"
                                onClick={() => setBusNeeded('no')}
                                className={`flex-1 py-3 px-6 rounded-xl border text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${busNeeded === 'no' ? 'bg-primary text-surface border-primary font-bold shadow-sm' : 'border-outline-variant text-on-surface-variant hover:border-outline'}`}
                              >
                                NO EN AUTOBÚS
                              </button>
                              <button
                                type="button"
                                onClick={() => setBusNeeded('yes')}
                                className={`flex-1 py-3 px-6 rounded-xl border text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${busNeeded === 'yes' ? 'bg-primary text-surface border-primary font-bold shadow-sm' : 'border-outline-variant text-on-surface-variant hover:border-outline'}`}
                              >
                                SÍ, IDA Y VUELTA
                              </button>
                            </div>
                          </div>

                          {/* Menu Preference */}
                          <div className="relative">
                            <label className="block font-sans text-xs font-semibold uppercase tracking-[0.15em] text-secondary-brand mb-2">TIPO DE MENÚ REQUERIDO</label>
                            <div className="relative">
                              <select
                                value={dietPreference}
                                onChange={(e) => setDietPreference(e.target.value)}
                                className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary px-0 py-3 font-sans text-base text-on-surface transition-colors cursor-pointer"
                              >
                                <option value="standard" className="bg-surface text-on-surface">Menú Estándar</option>
                                <option value="vegetarian" className="bg-surface text-on-surface">Menú Vegetariano</option>
                                <option value="vegan" className="bg-surface text-on-surface">Menú Vegano</option>
                                <option value="celiac" className="bg-surface text-on-surface">Celíaco (Sin Gluten)</option>
                                <option value="other" className="bg-surface text-on-surface">Otras intolerancias/alergias (Elegir y detallar)</option>
                              </select>
                            </div>
                            
                            {(dietPreference === 'other' || dietDetails) && (
                              <motion.div 
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="relative pt-3"
                              >
                                <label className="block font-sans text-[10px] font-semibold uppercase tracking-[0.12em] text-secondary-brand mb-1">ESPECIFICA LAS INTOLERANCIAS O ALERGIAS</label>
                                <input 
                                  value={dietDetails}
                                  onChange={(e) => setDietDetails(e.target.value)}
                                  className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary px-0 py-2 font-sans text-base text-on-surface placeholder:text-outline-variant/50 transition-colors"
                                  placeholder="Ej. Sin marisco, alergia a frutos secos, sin lactosa..." 
                                  type="text" 
                                />
                              </motion.div>
                            )}
                          </div>

                          {/* Song Request */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="relative">
                              <label className="block font-sans text-xs font-semibold uppercase tracking-[0.15em] text-secondary-brand mb-2">¿QUÉ CANCIÓN TE HARÍA BAILAR?</label>
                              <input 
                                value={song}
                                onChange={(e) => setSong(e.target.value)}
                                className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary px-0 py-3 font-sans text-base text-on-surface placeholder:text-outline-variant/50 transition-colors"
                                placeholder="Título de la canción" 
                                type="text" 
                              />
                            </div>
                            <div className="relative">
                              <label className="block font-sans text-xs font-semibold uppercase tracking-[0.15em] text-secondary-brand mb-2">¿DE QUÉ ARTISTA O GRUPO?</label>
                              <input 
                                value={artist}
                                onChange={(e) => setArtist(e.target.value)}
                                className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary px-0 py-3 font-sans text-base text-on-surface placeholder:text-outline-variant/50 transition-colors"
                                placeholder="Nombre del artista" 
                                type="text" 
                              />
                            </div>
                          </div>
                        </>
                      )}

                      <div className="relative">
                        <label className="block font-sans text-xs font-semibold uppercase tracking-[0.15em] text-secondary-brand mb-2">OBSERVACIONES O MENSAJE PARA LOS NOVIOS</label>
                        <textarea 
                          value={observations}
                          onChange={(e) => setObservations(e.target.value)}
                          rows={2}
                          className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary px-0 py-2 font-sans text-base text-on-surface placeholder:text-outline-variant/50 transition-colors resize-none"
                          placeholder={attendance === 'yes' ? "Cualquier otro detalle o saludo especial..." : "Déjanos tus mejores deseos..."} 
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                <button 
                  type="submit"
                  disabled={!attendance || isSending}
                  className="w-full mt-12 py-4 bg-primary text-surface rounded-full font-sans text-xs font-semibold uppercase tracking-[0.15em] hover:bg-primary-container transition-all duration-300 shadow-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSending ? (
                    <>
                      <svg className="animate-spin h-4 w-4 text-surface" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      ENVIANDO...
                    </>
                  ) : (
                    "ENVIAR CONFIRMACIÓN"
                  )}
                </button>
              </form>
            </>
          ) : (
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="py-12 relative"
            >
              {attendance === 'yes' ? (
                // Confetti Burst Celebration Banner
                <div className="flex flex-col items-center">
                  <motion.div 
                    initial={{ scale: 0, rotate: -20 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 260, damping: 15 }}
                    className="mb-6 flex space-x-2 text-warning"
                  >
                    <Star size={36} fill="#EAA82C" stroke="none" className="animate-bounce" />
                    <Star size={44} fill="#F59E0B" stroke="none" className="animate-pulse" style={{ animationDelay: '200ms' }} />
                    <Star size={36} fill="#FCD34D" stroke="none" className="animate-bounce" style={{ animationDelay: '400ms' }} />
                  </motion.div>
                  
                  <h3 className="font-serif text-3xl md:text-4xl text-on-surface mb-4">¡Gracias!</h3>
                  <p className="font-sans text-lg text-on-surface-variant max-w-sm">
                    Hemos recibido tu confirmación. <strong>¡Estamos deseando verte!</strong>
                  </p>
                </div>
              ) : (
                // Sad Face animation with Falling Teardrop
                <div className="flex flex-col items-center">
                  <div className="relative w-24 h-24 mb-6">
                    {/* Minimalist Cute Sad Face Vector */}
                    <svg width="96" height="96" viewBox="0 0 100 100" className="text-secondary-brand/60">
                      {/* Face circle */}
                      <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="4" />
                      {/* Eyes */}
                      <circle cx="35" cy="42" r="3.5" fill="currentColor" />
                      <circle cx="65" cy="42" r="3.5" fill="currentColor" />
                      {/* Sad eyebrows */}
                      <path d="M28 34 Q35 30 38 35" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                      <path d="M72 34 Q65 30 62 35" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                      {/* Sad mouth */}
                      <path d="M36 68 Q50 54 64 68" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                    </svg>

                    {/* Highly polished dropping animated tear element */}
                    <motion.div
                      initial={{ opacity: 0, y: -45, x: 28 }}
                      animate={{
                        opacity: [0, 1, 1, 0],
                        y: [-12, 15, 30, 42],
                        scale: [0.3, 1, 1.1, 0.4]
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 2.2,
                        ease: "easeIn",
                        delay: 0.6
                      }}
                      className="absolute top-1/2 left-1/2"
                    >
                      {/* Liquid Drop SVG shape */}
                      <svg width="14" height="20" viewBox="0 0 30 42">
                        <path d="M15 0 C15 0 30 18 30 27 C30 35.28 23.28 42 15 42 C6.72 42 0 35.28 0 27 C0 18 15 0 15 0 Z" fill="#93C5FD" />
                      </svg>
                    </motion.div>
                  </div>

                  <h3 className="font-serif text-3xl md:text-4xl text-on-surface mb-4">Te echaremos de menos</h3>
                  <p className="font-sans text-lg text-on-surface-variant max-w-sm">
                    Qué pena que no puedas acompañarnos. De todas formas, ¡gracias por avisarnos!
                  </p>
                </div>
              )}
              
              <button 
                onClick={handleReset}
                className="mt-8 text-secondary-brand font-sans text-xs font-semibold uppercase tracking-[0.15em] hover:underline"
              >
                Editar respuesta
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-tertiary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-brand/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
    </section>
  );
}

function AttendanceOption({ label, Icon, selected, onClick, colorClass }: any) {
  return (
    <div className="flex flex-col items-center cursor-pointer group" onClick={onClick}>
      <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${selected ? `${colorClass} text-surface` : 'border-outline-variant text-outline-variant group-hover:border-outline'}`}>
        <Icon size={20} strokeWidth={selected ? 3 : 2} />
      </div>
      <span className={`mt-2 font-sans text-[10px] font-semibold uppercase tracking-[0.1em] ${selected ? 'text-on-surface' : 'text-on-surface-variant opacity-60'}`}>{label}</span>
    </div>
  );
}
