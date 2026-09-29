import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to send form data
    alert('Consulta enviada con éxito. Nos pondremos en contacto a la mayor brevedad posible.');
  };

  return (
    <section id="contact" className="py-24 bg-light">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold font-serif text-primary mb-4"
          >
            Contacto Institucional
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
            <h3 className="text-2xl font-bold font-serif text-primary mb-6">Canales de Atención</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              El estudio se encuentra a su entera disposición para brindarle el asesoramiento jurídico requerido. Comuníquese por nuestras vías oficiales o deje su mensaje detallado.
            </p>
            
            <div className="flex items-start gap-4 p-5 bg-white rounded-sm shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-primary text-white rounded-sm flex items-center justify-center flex-shrink-0">
                <Phone size={20} />
              </div>
              <div>
                <h4 className="font-bold text-primary text-sm uppercase tracking-wider mb-1">Teléfono / WhatsApp</h4>
                <p className="text-gray-600">351 618-6694</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-white rounded-sm shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-primary text-white rounded-sm flex items-center justify-center flex-shrink-0">
                <Mail size={20} />
              </div>
              <div>
                <h4 className="font-bold text-primary text-sm uppercase tracking-wider mb-1">Correo Electrónico</h4>
                <p className="text-gray-600">contacto@estudioalonso.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-white rounded-sm shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-primary text-white rounded-sm flex items-center justify-center flex-shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="font-bold text-primary text-sm uppercase tracking-wider mb-1">Dirección</h4>
                <p className="text-gray-600 leading-relaxed">Av. Roque Sáenz Peña 215, X5105<br/>Villa Allende, Córdoba</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-sm shadow-lg border-t-4 border-accent"
          >
            <h3 className="text-2xl font-bold font-serif text-primary mb-6">Solicitud de Entrevista</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nombre y Apellido</label>
                <input 
                  type="text" 
                  required
                  className="w-full px-4 py-3 rounded-sm border border-gray-300 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-all bg-gray-50"
                  placeholder="Ingrese su nombre completo"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Correo Electrónico</label>
                  <input 
                    type="email" 
                    required
                    className="w-full px-4 py-3 rounded-sm border border-gray-300 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-all bg-gray-50"
                    placeholder="ejemplo@correo.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                  <input 
                    type="tel" 
                    required
                    className="w-full px-4 py-3 rounded-sm border border-gray-300 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-all bg-gray-50"
                    placeholder="Número de contacto"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Motivo de la consulta</label>
                <textarea 
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-sm border border-gray-300 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-all resize-none bg-gray-50"
                  placeholder="Describa brevemente su situación..."
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-primary text-white font-bold py-4 rounded-sm hover:bg-primary/90 transition-colors flex items-center justify-center gap-3 group uppercase tracking-widest text-sm"
              >
                <span>Enviar Solicitud</span>
                <Send size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
