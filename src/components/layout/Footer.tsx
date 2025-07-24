import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom pt-6 pb-12 md:pt-8 md:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center mb-4">
              <div className="bg-white rounded-lg p-2">
                <img 
                  src="/accelcq-logo.png" 
                  alt="AccelCQ LLC" 
                  className="h-8 w-auto"
                />
              </div>
            </Link>
            <p className="text-gray-400 mb-4">
              Cutting-edge software services company specializing in confidential computing and quantum computing solutions.
            </p>
            <address className="not-italic text-gray-400">
              <div className="flex items-start space-x-2 mb-2">
                <MapPin size={18} className="text-gray-500 mt-1 flex-shrink-0" />
                <span>691 S Milpitas Blvd, STE 217<br />Milpitas, California 95035, United States</span>
              </div>
              <div className="flex items-center space-x-2 mb-2">
                <Phone size={18} className="text-gray-500" />
                <a href="tel:+14088166610" className="hover:text-primary-400 transition-colors">
                  +1 (408) 816-6610
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={18} className="text-gray-500" />
                <a href="mailto:info@accelcq.com" className="hover:text-primary-400 transition-colors">
                  info@accelcq.com
                </a>
              </div>
            </address>
          </div>
          
          {/* Company */}
          <div className="mt-16">
            <h4 className="text-lg font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2 ml-4">
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-primary-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-primary-400 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Confidential Computing */}
          <div className="mt-16">
            <h4 className="text-lg font-semibold mb-4 text-white">Confidential Computing</h4>
            <ul className="space-y-2 ml-4">
              <li>
                <Link to="/services/confidential-computing/secure-enclave" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Secure Enclave
                </Link>
              </li>
              <li>
                <Link to="/services/confidential-computing/memory-encryption" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Memory Encryption
                </Link>
              </li>
              <li>
                <Link to="/services/confidential-computing/privacy-preserving-computation" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Privacy-Preserving Computation
                </Link>
              </li>
              <li>
                <Link to="/services/tee-as-a-service" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Trusted Execution Environment
                </Link>
              </li>
              <li>
                <Link to="/case-studies/confidential-computing" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Case Study
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Quantum Computing */}
          <div className="mt-16">
            <h4 className="text-lg font-semibold mb-4 text-white">Quantum<br />Computing</h4>
            <ul className="space-y-2 ml-4">
              <li>
                <Link to="/services/quantum-computing" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Quantum Algorithm Development
                </Link>
              </li>
              <li>
                <Link to="/services/quantum-computing" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Quantum Machine Learning
                </Link>
              </li>
              <li>
                <Link to="/services/quantum-computing" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Post-Quantum Cryptography
                </Link>
              </li>
              <li>
                <Link to="/case-studies/quantum-computing" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Case Study
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Enterprise Architecture */}
          <div className="mt-16">
            <h4 className="text-lg font-semibold mb-4 text-white">Enterprise Architecture</h4>
            <ul className="space-y-2 ml-4">
              <li>
                <Link to="/services/enterprise-architecture#togaf-10" className="text-gray-400 hover:text-primary-400 transition-colors">
                  TOGAF 10
                </Link>
              </li>
              <li>
                <Link to="/services/enterprise-architecture#sparx-ea" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Sparx EA
                </Link>
              </li>
              <li>
                <Link to="/services/enterprise-architecture" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Scripting for EA
                </Link>
              </li>
              <li>
                <Link to="/case-studies/togaf-enterprise-architecture" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Case Study
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div className="mt-16">
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates on confidential and quantum computing.
            </p>
            <form className="mb-4">
              <div className="flex flex-col space-y-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-3 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-1 focus:ring-primary-500 text-sm"
                  required
                />
                <button 
                  type="submit" 
                  className="bg-primary-600 hover:bg-primary-700 px-4 py-2 rounded-md transition-colors text-sm"
                >
                  Subscribe
                </button>
              </div>
            </form>
            {/* Social media icons hidden - no accounts yet
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
            </div>
            */}
          </div>
        </div>
        
        <hr className="border-gray-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} AccelCQ LLC. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-gray-500 hover:text-primary-400 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-500 hover:text-primary-400 text-sm transition-colors">
              Terms of Service
            </Link>
            <Link to="/sitemap" className="text-gray-500 hover:text-primary-400 text-sm transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;