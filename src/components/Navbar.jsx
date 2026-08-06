import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail, MapPin, ChevronDown, CheckCircle, Scale, Shield, FileText, Clock, Users } from 'lucide-react';
import { Link } from 'react-scroll';

const navLinks = [
  { name: 'Inicio', to: 'home' },
  { name: 'Sobre Nosotros', to: 'about' },
  { name: 'Servicios', to: 'services' },
  { name: 'Por qué elegirnos', to: 'features' },
  { name: 'Proceso', to: 'workflow' },
  { name: 'FAQ', to: 'faq' },
  { name: 'Contacto', to: 'contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-primary/95 backdrop-blur-sm py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src="/logo.jpg" alt="Logo Estudio Alonso Penalista" className="h-10 w-10 rounded-sm object-cover" />
          <span className="text-white font-bold text-xl tracking-wide">ESTUDIO ALONSO</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.to} 
              to={link.to} 
              smooth={true} 
              duration={500} 
              className="text-gray-200 hover:text-accent cursor-pointer transition-colors text-sm font-medium uppercase tracking-wider"
            >
              {link.name}
            </Link>
          ))}
          <a href="tel:3516186694" className="bg-accent text-primary px-5 py-2 rounded font-semibold hover:bg-white transition-colors">
            Llamar Ahora
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-primary shadow-xl md:hidden flex flex-col items-center py-6 gap-4"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.to} 
                to={link.to} 
                smooth={true} 
                duration={500} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-200 hover:text-accent cursor-pointer transition-colors text-lg font-medium"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
