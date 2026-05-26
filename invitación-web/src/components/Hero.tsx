import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          className="w-full h-full object-cover" 
          src="/fotito/1000007921.png"
          alt="Tuscan landscape"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 hero-gradient"></div>
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-surface-container-lowest mb-4 leading-tight"
        >
          El latido de dos almas
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-serif text-xl md:text-3xl text-surface-container mb-12"
        >
          Azahra & Josema • 30 de marzo, 2027
        </motion.p>
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <a 
            href="#story" 
            className="inline-block px-10 py-4 bg-surface text-primary rounded-full font-sans text-xs font-semibold uppercase tracking-[0.15em] hover:scale-105 transition-transform duration-300 shadow-lg shadow-black/20"
          >
            Descubrir más
          </a>
        </motion.div>
      </div>
    </section>
  );
}
