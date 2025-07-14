import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, MessageCircle, Calendar, Users, ArrowRight, ExternalLink, CheckCircle, Shield, Zap, Globe } from 'lucide-react';
import ContactForm from '../components/common/ContactForm';
import PageHeader from '../components/common/PageHeader';

const Contact = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 }
  };

  // Contact methods data
  const contactMethods = [
    {
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
  const benefits = [
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
  const stats = [
    { value: "99.9%", label: "Uptime SLA" },
    { value: "24/7", label: "Expert Support" },
    { value: "< 1ms", label: "Response Time" },
    { value: "100+", label: "Implementations" }
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us | AccelCQ Inc</title>
        <meta name="description" content="Get in touch with AccelCQ Inc for confidential computing and quantum computing solutions. Contact our team for consultations and inquiries." />
      </Helmet>

      <PageHeader 
        title="Get in Touch"
        subtitle="Ready to transform your computing future? Let's discuss how confidential and quantum computing can revolutionize your business."
      />

      {/* Contact Methods Section */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((contact, index) => (
              <motion.a
                key={index}
                href={contact.href}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group block rounded-3xl bg-white/70 backdrop-blur-md border border-secondary-100 shadow-md hover:shadow-xl transition-all duration-300 p-8 text-center relative overflow-hidden hover:-translate-y-1"
                onClick={contact.href.startsWith('#') ? (e) => {
                  e.preventDefault();
                  document.querySelector(contact.href)?.scrollIntoView({ behavior: 'smooth' });
                } : undefined}
              >
                {/* Soft gradient/glass icon background */}
                <div className="mx-auto mb-6 w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-primary-50 via-white/80 to-accent-50 shadow-sm group-hover:scale-110 transition-transform duration-300">
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
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="section bg-gradient-to-br from-secondary-50 to-primary-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Info */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
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
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center mr-4">
                        {benefit.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-secondary-900 mb-1">{benefit.title}</h4>
                        <p className="text-secondary-600 text-sm">{benefit.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
            
            {/* Right Side - Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-600 rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-secondary-100">
                  <ContactForm />
                </div>
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
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-600 rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-secondary-100">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.5437503334373!2d-121.9076748!3d37.4342464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fc9c1d3f9c0bb%3A0x1234567890abcdef!2s691%20S%20Milpitas%20Blvd%20%23217%2C%20Milpitas%2C%20CA%2095035!5e0!3m2!1sen!2sus!4v1682371879254!5m2!1sen!2sus" 
                    width="100%" 
                    height="400" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="AccelCQ Inc Office Location"
                    className="w-full h-96 md:h-[500px]"
                  ></iframe>
                </div>
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
                    <h3 className="font-semibold text-secondary-900 mb-2">AccelCQ Inc</h3>
                    <address className="not-italic text-secondary-600 text-sm leading-relaxed mb-3">
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
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-accent-200 mb-2">{stat.value}</div>
                  <div className="text-primary-100">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;