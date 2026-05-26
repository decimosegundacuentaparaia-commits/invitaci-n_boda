import { motion } from 'motion/react';

interface GalleryImage {
  src: string;
  aspect: string;
  alt: string;
  fit?: string;
}

const images: GalleryImage[] = [
  {
    src: "/fotito/D.png",
    aspect: "aspect-square",
    alt: "Recuerdo D"
  },
  {
    src: "/fotito/E.png",
    aspect: "aspect-video md:aspect-auto md:col-span-2 md:row-span-2",
    alt: "Recuerdo E"
  },
  {
    src: "/fotito/F.png",
    aspect: "aspect-square",
    alt: "Recuerdo F"
  },
  {
    src: "/fotito/G.jpg",
    aspect: "aspect-video md:aspect-auto md:col-span-3 aspect-[16/9]",
    alt: "Recuerdo G"
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-section-gap max-w-container-max mx-auto px-6 md:px-margin-edge">
      <div className="mb-12 text-center md:text-left">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-4xl md:text-6xl text-secondary-brand mb-4"
        >
          Instantes que Atesoramos
        </motion.h2>
        <div className="w-16 h-px bg-tertiary-container mx-auto md:mx-0"></div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className={`overflow-hidden rounded-lg bg-surface-variant/10 ${image.aspect}`}
          >
            <img 
              className={`w-full h-full ${image.fit || 'object-cover'} hover:scale-110 transition-transform duration-700`} 
              src={image.src} 
              alt={image.alt}
              referrerPolicy="no-referrer"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
