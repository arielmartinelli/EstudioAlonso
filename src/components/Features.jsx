import { motion } from 'framer-motion';
import { CheckSquare } from 'lucide-react';

const features = [
  "Atención personalizada",
  "Confidencialidad absoluta",
  "Respuesta rápida",
  "Estrategia jurídica sólida",
  "Profesionalismo ético",
  "Compromiso inquebrantable"
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-primary text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent opacity-5 blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/3">
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold font-serif mb-6"
            >
              ¿Por qué elegirnos?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-300 text-lg leading-relaxed mb-8"
            >
              Nuestro enfoque se centra en la excelencia, la transparencia y el resultado. Cada caso es único y lo abordamos con la máxima dedicación y seriedad.
            </motion.p>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 bg-white/5 p-6 rounded-sm border border-white/10 hover:bg-white/10 transition-colors"
              >
                <CheckSquare className="text-accent flex-shrink-0" size={24} />
                <span className="font-medium text-lg tracking-wide">{feature}</span>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
