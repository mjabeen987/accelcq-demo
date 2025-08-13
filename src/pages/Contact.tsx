import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Mail, Phone, MapPin, MessageCircle, Calendar, ArrowRight, ExternalLink, CheckCircle, Shield, Zap, Globe } from 'lucide-react';
import ContactForm from '../components/common/ContactForm';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

interface Benefit {
  icon: JSX.Element;
  title: string;
  description: string;
}

interface ContactInfo {
  icon: JSX.Element;
  title: string;
  value: string;
  subtitle: string;
  href: string;
  gradient: string;
  bgGradient: string;
}

interface Metric {
  value: string;
  label: string;
}

const Contact: React.FC = () => {
  const [searchParams] = useSearchParams();
  
  // Get prefill values from URL parameters
  const prefilledSubject = searchParams.get('subject') || '';
  const messageTemplate = searchParams.get('template') || '';
  
  // Generate prefilled message based on template
  const getPrefilledMessage = (template: string) => {
    switch (template) {
      case 'confidential-computing':
        return `Hi,

My Name is [Your name], I'm working as [position] in [company], my number is +1(xxx)-xxx-xxxx based out of xxxxxx.

I am interested in the Confidential Computing implementation demo. Can I know your availability for an implementation demo?

Regards
[Your name]`;
      case 'quantum-computing':
        return `Hi,

My Name is [Your name], I'm working as [position] in [company], my number is +1(xxx)-xxx-xxxx based out of xxxxxx.

I am interested in the Quantum Computing implementation demo. Can I know your availability for an implementation demo?

Regards
[Your name]`;
      case 'enterprise-architecture':
        return `Hi,

My Name is [Your name], I'm working as [position] in [company], my number is +1(xxx)-xxx-xxxx based out of xxxxxx.

I am interested in the TOGAF Enterprise Architecture assessment. Can I know your availability for an architecture review?

Regards
[Your name]`;
      default:
        return '';
    }
  };

  // Auto-scroll to contact form if prefilled parameters are present
  useEffect(() => {
    if (prefilledSubject || messageTemplate) {
      setTimeout(() => {
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
          contactForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100); // Small delay to ensure page has loaded
    }
  }, [prefilledSubject, messageTemplate]);

  // Contact Methods
  const contactMethods: ContactInfo[] = [{
      icon: <span className="text-primary-500"><Phone size={24} /></span>,
      title: "Call Us",
      value: "+1 (408) 816-6610",
      subtitle: "Mon-Fri, 9AM-5PM PST",
      href: "tel:+14088166610",
      gradient: "from-primary-500 to-accent-500",
      bgGradient: "from-primary-50 to-accent-50"
    },
    {
      icon: <span className="text-accent-500"><Mail size={24} /></span>,
      title: "Email Us",
      value: "info@accelcq.com",
      subtitle: "We'll respond within 24h",
      href: "mailto:info@accelcq.com",
      gradient: "from-accent-500 to-primary-500",
      bgGradient: "from-accent-50 to-primary-50"
    },
    {
      icon: <span className="text-secondary-500"><MapPin size={24} /></span>,
      title: "Visit Us",
      value: "Milpitas, CA",
      subtitle: "691 S Milpitas Blvd, Ste 217",
      href: "#map",
      gradient: "from-secondary-500 to-primary-500",
      bgGradient: "from-secondary-50 to-primary-50"
    },
    {
      icon: <span className="text-primary-600"><Calendar size={24} /></span>,
      title: "Book Meeting",
      value: "Schedule Call",
      subtitle: "Free 30-min consultation",
      href: "#contact-form",
      gradient: "from-primary-500 to-secondary-500",
      bgGradient: "from-primary-50 to-secondary-50"
    }
  ];

  // Benefits data
  const benefits: Benefit[] = [
    {
      icon: <Shield size={20} />,
      title: "Free initial consultation",
      description: "Expert assessment of your needs"
    },
    {
      icon: <Zap size={20} />,
      title: "Custom solution assessment", 
      description: "Tailored recommendations for your business"
    },
    {
      icon: <Globe size={20} />,
      title: "Expert technical guidance",
      description: "Deep expertise in confidential computing"
    },
    {
      icon: <CheckCircle size={20} />,
      title: "Rapid implementation support",
      description: "Quick deployment and ongoing assistance"
    }
  ];

  // Stats data
  const metrics: Metric[] = [
    { value: "99.9%", label: "Uptime SLA" },
    { value: "24/7", label: "Expert Support" },
    { value: "< 1ms", label: "Response Time" },
    { value: "100+", label: "Implementations" }
  ];

  return (
    <div className="contact-page">
      <Helmet>
        <title>Contact Us | AccelCQ LLC</title>
        <meta name="description" content="Get in touch with AccelCQ for confidential computing and quantum computing solutions. Contact our team for consultations and inquiries." />
      </Helmet>

      {/* Modern Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 text-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-accent-400 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-secondary-400 to-transparent rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-custom relative z-10 pt-32 pb-20">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
              Let's Build Something Amazing Together
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-gray-200">Ready to Transform Your</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-300 to-secondary-300">Computing Future?</span>
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Connect with our experts to discover how confidential and quantum computing can revolutionize your business.
            </p>
            
            {/* Quick Action Buttons */}
            <motion.div 
              className="flex flex-wrap justify-center gap-4 mb-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.a 
                href="tel:+14088166610"
                variants={fadeIn}
                className="group flex items-center px-8 py-4 bg-white text-primary-900 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                <Phone size={20} className="mr-2" />
                Call Now
              </motion.a>
              <motion.a 
                href="mailto:info@accelcq.com?subject=Inquiry%20from%20xxx%20for%20Confidential%2FQuantum%20computing%2FEnterprise%20Architecture&body=Hi%0A%0AMy%20Name%20is%20....%2C%20I%27m%20working%20as%20%5Bposition%5D%20in%20%5Bcompany%5D%2C%20my%20number%20is%20%2B1%28xxx%29-xxx-xxxx%20based%20out%20of%20xxxxxx%0A%0AI%20am%20inquiring%20about%20....%0A%0ARegards%0AYour%20name"
                variants={fadeIn}
                className="group flex items-center px-8 py-4 bg-gradient-to-r from-accent-500 to-accent-600 text-white rounded-full font-semibold hover:from-accent-600 hover:to-accent-700 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                <Mail size={20} className="mr-2" />
                Email Us
              </motion.a>
              <motion.button 
                variants={fadeIn}
                className="group flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full font-semibold hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <MessageCircle size={20} className="mr-2" />
                Send Message
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods - Modern Cards */}
      <section className="section relative">
        <div className="container-custom">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-16 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {contactMethods.map((contact, index) => (
              <a
                key={index}
                href={contact.href}
                className="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 100 + 200}ms`, animationFillMode: 'forwards' }}
                onClick={contact.href.startsWith('#') ? (e) => {
                  e.preventDefault();
                  document.querySelector(contact.href)?.scrollIntoView({ behavior: 'smooth' });
                } : undefined}
              >
                <div className={`mx-auto mb-6 w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br ${contact.bgGradient} shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                  <div className="bg-white/60 rounded-xl p-2">
                    {contact.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-secondary-900 group-hover:text-primary-600 transition-colors duration-300">
                  {contact.title}
                </h3>
                <p className="text-base text-secondary-800 font-medium mb-1">{contact.value}</p>
                <p className="text-sm text-secondary-500 mb-2">{contact.subtitle}</p>
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight size={18} className="text-primary-400" />
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="section bg-gradient-to-br from-secondary-50 to-primary-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Info */}
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="max-w-lg">
                <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
                  Get Started Today
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary-900">
                  Let's Discuss Your <span className="gradient-text">Computing Needs</span>
                </h2>
                <p className="text-lg text-secondary-600 mb-8 leading-relaxed">
                  Our experts are ready to help you harness the power of confidential and quantum computing for your business.
                </p>
                
                {/* Benefits List */}
                <div className="space-y-6">
                  {benefits.map((benefit, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-accent-500 to-accent-600 rounded-full flex items-center justify-center mr-3">
                        <CheckCircle size={14} className="text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900 mb-1">{benefit.title}</div>
                        <div className="text-gray-600 text-sm">{benefit.description}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
            
            {/* Right Side - Form */}
            <motion.div 
              className="lg:col-span-3"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
                <ContactForm 
                  prefilledSubject={prefilledSubject}
                  prefilledMessage={getPrefilledMessage(messageTemplate)}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="map" className="section">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-secondary-900">
                Visit Our <span className="gradient-text">Innovation Hub</span>
              </h2>
              <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
                Located in the heart of Silicon Valley, our office is where cutting-edge computing meets practical business solutions.
              </p>
            </div>
            
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.5437503334373!2d-121.9076748!3d37.4342464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fc9c1d3f9c0bb%3A0x1234567890abcdef!2s691%20S%20Milpitas%20Blvd%20%23217%2C%20Milpitas%2C%20CA%2095035!5e0!3m2!1sen!2sus!4v1682371879254!5m2!1sen!2sus" 
                width="100%" 
                  height="400" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="AccelCQ LLC Office Location"
                  className="w-full h-96 md:h-[500px]"
              ></iframe>
              </div>
              
              {/* Floating Address Card */}
              <motion.div 
                className="absolute bottom-6 left-6 right-6 md:right-auto md:max-w-sm bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center mr-4">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                                         <h3 className="font-semibold text-gray-900 mb-1">AccelCQ LLC</h3>
                    <address className="not-italic text-gray-600 text-sm leading-relaxed">
                      691 S Milpitas Boulevard, Ste 217<br />
                      Milpitas, California 95035<br />
                      United States
                    </address>
                    <a 
                      href="https://maps.google.com/?q=691+S+Milpitas+Blvd+Suite+217+Milpitas+CA+95035" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary-600 hover:text-primary-700 text-sm font-medium group"
                    >
                      Get Directions 
                      <ExternalLink size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Signals Section */}
      <section className="section bg-gradient-to-r from-primary-600 to-accent-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-10" />
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              <span className="text-primary-100">Trusted by</span> <span className="text-accent-200">Industry Leaders</span>
            </h2>
            <p className="text-xl text-primary-100 mb-12 max-w-3xl mx-auto">
              Join the growing number of organizations transforming their computing capabilities with AccelCQ.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {metrics.map((metric, index) => (
                <motion.div 
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-accent-200 mb-2">{metric.value}</div>
                  <div className="text-primary-100">{metric.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;