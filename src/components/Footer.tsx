import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full py-section-gap bg-surface flex flex-col items-center justify-center text-center space-y-gutter px-6 md:px-margin-edge">
      <span className="font-serif text-4xl md:text-5xl text-secondary-brand">A&J</span>
      
      <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
        <FooterLink href="#locations">Ubicaciones</FooterLink>
        <FooterLink href="#contacto">Contacto</FooterLink>
      </div>
      
      <p className="font-sans text-sm md:text-base text-on-surface-variant opacity-80 hover:opacity-100 transition-opacity max-w-sm">
        Con amor, desde Chiusdino.<br/>Marzo 2027.
      </p>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a 
      href={href} 
      className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-on-surface-variant hover:text-primary transition-colors duration-300"
    >
      {children}
    </a>
  );
}
