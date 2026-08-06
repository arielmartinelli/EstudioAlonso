import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to send form data
    alert('Consulta enviada con éxito. Nos pondremos en contacto a la brevedad.');
  };

  return (
    <section id="contact" className="py-24 bg-light">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-primary mb-4"
          >
            Contacto
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-accent mx-auto"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-primary mb-6">Información de Contacto</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Estamos a tu disposición para brindarte asesoramiento inmediato. Comunicate con nosotros o dejá tu mensaje y te contactaremos a la brevedad.
            </p>
            
            <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                <Phone />
              </div>
              <div>
                <h4 className="font-bold text-primary">Teléfono / WhatsApp</h4>
                <p className="text-gray-600">351 618-6694</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                <Mail />
              </div>
              <div>
                <h4 className="font-bold text-primary">Email</h4>
                <p className="text-gray-600">contacto@estudioalonso.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                <MapPin />
              </div>
              <div>
                <h4 className="font-bold text-primary">Dirección</h4>
                <p className="text-gray-600">Av. Roque Sáenz Peña 215, X5105<br/>Villa Allende, Córdoba</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-accent"
          >
            <h3 className="text-2xl font-bold text-primary mb-6">Envíanos tu Consulta</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nombre Completo</label>
                <input 
                  type="text" 
                  required
                  className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  placeholder="Ej. Juan Pérez"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    required
                    className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    placeholder="ejemplo@correo.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                  <input 
                    type="tel" 
                    required
                    className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    placeholder="Tu número de contacto"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mensaje (Breve descripción del caso)</label>
                <textarea 
                  required
                  rows="4"
                  className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                  placeholder="Escribí tu mensaje aquí..."
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-primary text-white font-bold py-4 rounded hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 group"
              >
                <span>Enviar Consulta</span>
                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
