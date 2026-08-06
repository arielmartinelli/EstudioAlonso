import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: '¿Cómo solicito una consulta?',
    answer: 'Puede solicitar una consulta completando el formulario de contacto al final de esta página, enviándonos un correo electrónico o comunicándose directamente vía WhatsApp.'
  },
  {
    question: '¿Atienden urgencias penales?',
    answer: 'Sí, disponemos de atención prioritaria para urgencias penales, como detenciones o allanamientos, las 24 horas del día. Recomendamos contactarnos por teléfono o WhatsApp para estos casos.'
  },
  {
    question: '¿La primera consulta tiene costo?',
    answer: 'La primera evaluación inicial del caso puede tener un costo que luego se descuenta de los honorarios si decide tomar nuestros servicios. Por favor contáctenos para más detalles.'
  },
  {
    question: '¿Qué documentación debo llevar a la primera reunión?',
    answer: 'Es fundamental aportar cualquier notificación judicial, denuncia, copias de expedientes que posea y su documento de identidad. Si hay pruebas relevantes, también es recomendable aportarlas.'
  },
  {
    question: '¿Cómo se manejan los honorarios?',
    answer: 'Nuestros honorarios se establecen de forma transparente tras la primera consulta, evaluando la complejidad del caso y las etapas procesales. Ofrecemos convenios claros y facilidades de pago.'
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-primary mb-4"
          >
            Preguntas Frecuentes
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-accent mx-auto"
          />
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left bg-light hover:bg-gray-100 flex justify-between items-center focus:outline-none transition-colors"
                onClick={() => toggleAccordion(index)}
              >
                <span className="font-semibold text-primary text-lg">{faq.question}</span>
                <ChevronDown 
                  className={`text-accent transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`} 
                />
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 py-4 bg-white text-gray-600 leading-relaxed border-t border-gray-200">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
