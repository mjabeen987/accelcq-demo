import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-5" />
      
      <div className="relative z-10">
        <div className="container-custom py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Link to="/" className="inline-block mb-6">
                <div className="bg-white rounded-2xl p-3 shadow-lg">
                  <img 
                    src="/accelcq-logo.png" 
                    alt="AccelCQ LLC" 
                    className="h-10 w-auto"
                  />
                </div>
              </Link>
              <p className="text-secondary-300 mb-6 leading-relaxed">
                Cutting-edge software services company specializing in confidential computing and quantum computing solutions.
              </p>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin size={18} className="text-primary-400 mt-1 flex-shrink-0" />
                  <span className="text-secondary-300">
                    691 S Milpitas Boulevard, Ste 217<br />
                    Milpitas, California 95035, United States
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={18} className="text-primary-400" />
                  <a href="tel:+14088166610" className="text-secondary-300 hover:text-primary-400 transition-colors">
                    +1 (408) 816-6610
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail size={18} className="text-primary-400" />
                  <a href="mailto:info@accelcq.com" className="text-secondary-300 hover:text-primary-400 transition-colors">
                    info@accelcq.com
                  </a>
                </div>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { name: 'Home', path: '/' },
                  { name: 'About Us', path: '/about' },
                  { name: 'Confidential Computing', path: '/services/confidential-computing' },
                  { name: 'Quantum Computing', path: '/services/quantum-computing' },
                  { name: 'Case Studies', path: '/case-studies' },
                  { name: 'Blog', path: '/blog' },
                  { name: 'FAQ', path: '/faq' },
                  { name: 'Contact', path: '/contact' },
                ].map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.path} 
                      className="text-secondary-300 hover:text-primary-400 transition-colors duration-300 flex items-center group"
                    >
                      <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Services</h4>
              <ul className="space-y-3">
                {[
                  { name: 'Secure Enclaves', path: '/services/confidential-computing/secure-enclave' },
                  { name: 'Memory Encryption', path: '/services/confidential-computing/memory-encryption' },
                  { name: 'Privacy-Preserving Computation', path: '/services/confidential-computing/privacy-preserving-computation' },
                  { name: 'Trusted Execution Environments', path: '/services/confidential-computing' },
                  { name: 'Quantum Algorithm Development', path: '/services/quantum-computing' },
                  { name: 'Quantum Machine Learning', path: '/services/quantum-computing' },
                  { name: 'Post-Quantum Cryptography', path: '/services/quantum-computing' },
                ].map((service, index) => (
                  <li key={index}>
                    <Link 
                      to={service.path} 
                      className="text-secondary-300 hover:text-primary-400 transition-colors duration-300 flex items-center group"
                    >
                      <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Stay Updated</h4>
              <p className="text-secondary-300 mb-6 leading-relaxed">
                Subscribe to our newsletter for the latest updates on confidential and quantum computing.
              </p>
              <form className="mb-6">
                <div className="flex flex-col space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="px-4 py-3 bg-secondary-800 text-white rounded-xl border border-secondary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                  <button 
                    type="submit" 
                    className="bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
              
              {/* Social Links */}
              <div>
                <h5 className="text-sm font-semibold mb-4 text-secondary-200">Follow Us</h5>
                <div className="flex space-x-4">
                  {[
                    { icon: <Linkedin size={20} />, href: '#', label: 'LinkedIn' },
                    { icon: <Twitter size={20} />, href: '#', label: 'Twitter' },
                    { icon: <Github size={20} />, href: '#', label: 'GitHub' },
                  ].map((social, index) => (
                    <a 
                      key={index}
                      href={social.href} 
                      className="w-10 h-10 bg-secondary-800 hover:bg-primary-600 rounded-xl flex items-center justify-center text-secondary-300 hover:text-white transition-all duration-300 transform hover:scale-110"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-secondary-800">
          <div className="container-custom py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-secondary-400 text-sm">
                &copy; {currentYear} AccelCQ LLC. All rights reserved.
              </p>
              <div className="flex space-x-6">
                {[
                  { name: 'Privacy Policy', path: '/privacy' },
                  { name: 'Terms of Service', path: '/terms' },
                  { name: 'Sitemap', path: '/sitemap' },
                ].map((link, index) => (
                  <Link 
                    key={index}
                    to={link.path} 
                    className="text-secondary-400 hover:text-primary-400 text-sm transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;