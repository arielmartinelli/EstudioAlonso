import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Counter = ({ end, label }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          clearInterval(timer);
          setCount(end);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
    }
  }, [inView, end]);

  return (
    <div ref={ref} className="text-center p-6 bg-white shadow-md rounded-sm border-b-4 border-accent">
      <h3 className="text-4xl font-bold font-serif text-primary mb-2">+{count}</h3>
      <p className="text-gray-600 font-medium uppercase tracking-wider text-xs">{label}</p>
    </div>
  );
};

export default function About() {
  return (
    <section id="about" className="py-24 bg-light">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-block px-4 py-1 border border-accent/50 text-primary font-semibold rounded-sm text-sm mb-2 uppercase tracking-wide">
              Nuestra Firma
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-primary leading-tight">
              Excelencia y ética en la defensa de sus derechos.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              En Estudio Alonso Penalista, comprendemos que enfrentar un proceso penal es uno de los momentos más críticos en la vida de una persona. Por ello, brindamos una defensa férrea, estratégica y absolutamente confidencial.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Nuestra experiencia nos permite analizar cada caso con rigor técnico, anticiparnos a los escenarios posibles y diseñar la mejor estrategia jurídica para proteger su libertad y su patrimonio.
            </p>
            <div className="pt-4">
              <img src="/logo.jpg" alt="Firma" className="h-12 opacity-80 mix-blend-multiply grayscale" />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <Counter end={15} label="Años de Experiencia" />
            <Counter end={500} label="Casos Atendidos" />
            <Counter end={98} label="Tasa de Éxito (%)" />
            <Counter end={24} label="Atención 24/7" />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
