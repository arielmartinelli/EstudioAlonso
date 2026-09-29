import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Ken Burns effect */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center ken-burns"
          style={{ backgroundImage: "url('/hero-bg.jpg')" }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/50 to-primary" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="text-accent font-semibold tracking-[0.2em] uppercase text-sm md:text-base mb-4 block">Estudio Jurídico Especializado</span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-serif text-white mb-6 leading-tight">
            Defensa Penal con <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-yellow-200">Profesionalismo</span> y Compromiso
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Asesoramiento jurídico especializado para proteger sus derechos en cada etapa del proceso penal. Experiencia, estrategia y discreción.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="contact" 
              smooth={true} 
              duration={500}
              className="w-full sm:w-auto px-8 py-4 bg-accent text-primary font-bold rounded-sm hover:bg-white transition-all transform hover:-translate-y-1 shadow-lg cursor-pointer uppercase tracking-wide text-sm"
            >
              Solicitar Entrevista
            </Link>
            <Link 
              to="services" 
              smooth={true} 
              duration={500}
              className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-sm hover:bg-white/10 transition-all cursor-pointer uppercase tracking-wide text-sm"
            >
              Conocer Servicios
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
