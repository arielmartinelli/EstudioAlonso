import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

export default function CTA() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent via-primary to-primary"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10 border border-white/10 p-12 bg-white/5 rounded-sm backdrop-blur-sm max-w-5xl">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold font-serif text-white mb-6"
        >
          Su tranquilidad exige una defensa de excelencia.
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-300 mb-10 text-lg md:text-xl max-w-2xl mx-auto"
        >
          No deje su futuro al azar. Actuamos con celeridad y rigor jurídico para proteger sus derechos e intereses patrimoniales.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Link 
            to="contact" 
            smooth={true} 
            duration={500}
            className="inline-block px-10 py-4 bg-accent text-primary font-bold rounded-sm hover:bg-white transition-all transform hover:-translate-y-1 shadow-[0_0_20px_rgba(201,162,39,0.2)] cursor-pointer text-sm uppercase tracking-widest"
          >
            Contáctenos Hoy
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
