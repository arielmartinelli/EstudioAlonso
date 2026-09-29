import { Link } from 'react-scroll';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src="/logo.jpg" alt="Logo" className="h-12 w-12 rounded-sm object-cover grayscale" />
              <span className="text-white font-bold font-serif text-xl tracking-wide uppercase">Estudio Alonso<br/><span className="text-accent font-sans text-sm tracking-widest">Penalista</span></span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Especialistas en derecho penal brindando una defensa sólida, estratégica y confidencial para proteger sus derechos con máxima eficacia.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-300 hover:bg-accent hover:text-primary transition-all">
                <Globe size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-300 hover:bg-accent hover:text-primary transition-all">
                <Mail size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-300 hover:bg-accent hover:text-primary transition-all">
                <Phone size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Links Rápidos</h4>
            <ul className="space-y-3">
              {['Inicio', 'Sobre Nosotros', 'Servicios', 'FAQ'].map((item, i) => (
                <li key={i}>
                  <Link 
                    to={item === 'Inicio' ? 'home' : item === 'Sobre Nosotros' ? 'about' : item === 'Servicios' ? 'services' : 'faq'} 
                    smooth={true} 
                    className="text-gray-400 hover:text-accent cursor-pointer transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Servicios</h4>
            <ul className="space-y-3">
              {['Defensa Penal', 'Excarcelaciones', 'Violencia de Género', 'Asesoramiento'].map((item, i) => (
                <li key={i}>
                  <Link 
                    to="services" 
                    smooth={true} 
                    className="text-gray-400 hover:text-accent cursor-pointer transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info in footer */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Contacto</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>Av. Roque Sáenz Peña 215,<br/>X5105 Villa Allende, Córdoba</li>
              <li>Tel: 351 618-6694</li>
              <li>contacto@estudioalonso.com</li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Estudio Alonso Penalista. Todos los derechos reservados.
          </p>
          <div className="flex gap-4 text-sm text-gray-500">
            <a href="#" className="hover:text-accent transition-colors">Términos y Condiciones</a>
            <a href="#" className="hover:text-accent transition-colors">Política de Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
