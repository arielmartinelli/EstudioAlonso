import { motion } from 'framer-motion';
import { PhoneCall, Search, Gavel, Scale } from 'lucide-react';

const steps = [
  {
    icon: <PhoneCall size={32} />,
    title: 'Primera Consulta',
    description: 'Contacto inicial confidencial para conocer los detalles del caso.'
  },
  {
    icon: <Search size={32} />,
    title: 'Evaluación del Caso',
    description: 'Análisis exhaustivo del expediente y viabilidad jurídica.'
  },
  {
    icon: <Scale size={32} />,
    title: 'Estrategia',
    description: 'Diseño de la mejor defensa técnica y recolección de pruebas.'
  },
  {
    icon: <Gavel size={32} />,
    title: 'Defensa Jurídica',
    description: 'Representación férrea en todas las instancias del proceso penal.'
  }
];

export default function Workflow() {
  return (
    <section id="workflow" className="py-24 bg-light">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-primary mb-4"
          >
            Proceso de Trabajo
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-accent mx-auto"
          />
        </div>

        <div className="relative">
          {/* Animated Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 z-0">
            <motion.div 
              className="h-full bg-accent"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center shadow-xl mb-6 relative group border-4 border-white">
                  <div className="absolute inset-0 bg-accent rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 z-0"></div>
                  <div className="relative z-10 group-hover:text-primary transition-colors">{step.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
