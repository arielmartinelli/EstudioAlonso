import { motion } from 'framer-motion';
import { Shield, Scale, Key, FileText, UserCheck, AlertTriangle, Briefcase, Activity } from 'lucide-react';

const services = [
  {
    icon: <Scale className="w-8 h-8" />,
    title: 'Derecho Penal',
    description: 'Asesoramiento integral en materia penal, garantizando el respeto por el debido proceso.'
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Defensa Penal',
    description: 'Representación legal en juicios y procesos de instrucción con estrategias sólidas.'
  },
  {
    icon: <Key className="w-8 h-8" />,
    title: 'Excarcelaciones',
    description: 'Gestión ágil para la obtención de libertades durante el proceso judicial.'
  },
  {
    icon: <UserCheck className="w-8 h-8" />,
    title: 'Asistencia al Detenido',
    description: 'Presencia inmediata en comisarías y juzgados para garantizar los derechos desde el primer momento.'
  },
  {
    icon: <AlertTriangle className="w-8 h-8" />,
    title: 'Violencia de Género',
    description: 'Acompañamiento legal especializado con sensibilidad y firmeza profesional.'
  },
  {
    icon: <Briefcase className="w-8 h-8" />,
    title: 'Delitos Económicos',
    description: 'Defensa en fraudes, estafas y lavado de activos con análisis profundo del caso.'
  },
  {
    icon: <Activity className="w-8 h-8" />,
    title: 'Accidentes y Lesiones',
    description: 'Asistencia en causas penales derivadas de accidentes de tránsito y lesiones.'
  },
  {
    icon: <FileText className="w-8 h-8" />,
    title: 'Asesoramiento Preventivo',
    description: 'Consultoría empresarial y personal para evitar contingencias penales.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold font-serif text-primary mb-4"
          >
            Áreas de Práctica
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-accent mx-auto"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-light p-8 rounded-sm shadow-sm hover:shadow-lg transition-all duration-300 border border-transparent hover:border-accent/30 group"
            >
              <div className="w-14 h-14 bg-primary text-white rounded-sm flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-primary transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold font-serif text-primary mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
