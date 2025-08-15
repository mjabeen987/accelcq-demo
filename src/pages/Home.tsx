import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Shield, Cpu, Server, BarChart, Code, Globe, Users, ArrowRight, ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading';
import ServiceCard from '../components/common/ServiceCard';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 }
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 }
};

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Carousel data for value propositions
  const valuePropositions = [
    {
      title: 'Data Protection',
      description: 'Enhanced security without compromising performance',
      details: 'Our confidential computing solutions protect your data at all stages - at rest, in transit, and in use.',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      icon: <Shield size={24} />,
      color: 'primary'
    },
    {
      title: 'Quantum Performance',
      description: 'Exponential speed-ups for complex computations',
      details: 'Leverage quantum algorithms to solve optimization and simulation problems exponentially faster.',
      image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      icon: <Cpu size={24} />,
      color: 'secondary'
    },
    {
      title: 'Enterprise Scalability',
      description: 'Production-ready solutions for any scale',
      details: 'From startups to Fortune 500 companies, our solutions scale seamlessly with your business needs.',
      image: 'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      icon: <Server size={24} />,
      color: 'accent'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % valuePropositions.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + valuePropositions.length) % valuePropositions.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Auto-advance every 5 seconds
    return () => clearInterval(interval);
  }, []);

  // Services data
  const services = [
    {
      title: 'Confidential Computing',
      description: 'Secure data processing in trusted execution environments that protect sensitive information even during computation.',
      icon: <Shield size={24} />,
      link: '/services/confidential-computing'
    },
    {
      title: 'Quantum Computing',
      description: 'Harness the power of quantum algorithms and simulation to solve complex problems beyond classical capabilities.',
      icon: <Cpu size={24} />,
      link: '/services/quantum-computing'
    },
    {
      title: 'Secure Cloud Infrastructure',
      description: 'Design and implementation of highly secure cloud architectures with confidential computing capabilities.',
      icon: <Server size={24} />,
      link: '/services/confidential-computing'
    },
    {
      title: 'Quantum Algorithm Development',
      description: 'Custom quantum algorithm development for optimization, machine learning, and simulation applications.',
      icon: <Code size={24} />,
      link: '/services/quantum-computing'
    }
  ];

  // Stats data
  const stats = [
    { value: '99.9%', label: 'Uptime Reliability' },
    { value: '< 1ms', label: 'Response Latency' },
    { value: '24/7', label: 'System Monitoring' },
    { value: '3x', label: 'Performance Improvement' }
  ];

  return (
    <>
      <Helmet>
        <title>AccelCQ Inc | Confidential & Quantum Computing Solutions</title>
        <meta name="description" content="AccelCQ Inc provides cutting-edge confidential computing and quantum computing solutions for enterprises. Secure your data and accelerate your business." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-800/95 via-purple-800/90 to-blue-800/95" />

        <div className="container-custom relative z-10 pt-28 md:pt-0">
          <motion.div 
            className="max-w-4xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.span 
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full text-sm font-medium mb-8 shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <Shield size={16} className="mr-2" />
              Securing the AI Revolution
            </motion.span>
            
            <motion.h1 
              className="text-white text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Accelerating{' '}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Confidential & Quantum
              </span>{' '}
              Computing
            </motion.h1>
            
            <motion.p 
              className="text-slate-200 text-xl md:text-2xl mb-10 max-w-3xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Addressing Security, Scale & Performance in the AI Era
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <Link 
                to="/contact" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Get Started
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link 
                to="/services" 
                className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
              >
                Explore Solutions
              </Link>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Animated scroll indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10 hidden md:block">
          <motion.div 
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <motion.div 
              className="w-1 h-3 bg-white rounded-full mt-2"
              animate={{ 
                y: [0, 16, 0],
                opacity: [1, 0.3, 1]
              }}
              transition={{ 
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Our Services
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              AccelCQ delivers next-generation confidential and quantum computing solutions that are production-ready today, transforming how enterprises secure and accelerate their most critical workloads.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-slate-100">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-6">{service.description}</p>
                  <Link 
                    to={service.link}
                    className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700 transition-colors"
                  >
                    Learn More <ArrowRight className="ml-2" size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-6">
                About AccelCQ Inc
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                Pioneering the Future of Secure Computing
              </h2>
              <div className="space-y-6 mb-8">
                <p className="text-lg text-slate-600 leading-relaxed">
                  At AccelCQ Inc, we combine expertise in confidential computing and quantum technologies to provide cutting-edge solutions that address the most challenging computational problems while maintaining the highest security standards.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Our team of experts, with backgrounds from leading tech companies and research institutions, is dedicated to pushing the boundaries of what's possible in secure and high-performance computing.
                </p>
              </div>
              
              <div className="space-y-4 mb-10">
                {[
                  { icon: <Shield size={20} />, text: "Industry-leading secure computing solutions" },
                  { icon: <Globe size={20} />, text: "Global delivery with local expertise" },
                  { icon: <Users size={20} />, text: "Team of top researchers and engineers" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mr-4 mt-0.5 flex-shrink-0">
                      <CheckCircle size={16} />
                    </div>
                    <p className="text-slate-700 text-lg">{item.text}</p>
                  </div>
                ))}
              </div>
              
              <Link 
                to="/about" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Learn More About Us
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </motion.div>
            
            <motion.div 
              className="relative"
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Value Proposition Carousel */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="relative h-96 md:h-[28rem]">
                  {valuePropositions.map((slide, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-all duration-700 ${
                        index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                      }`}
                    >
                      <img 
                        src={slide.image} 
                        alt={slide.title} 
                        className="w-full h-full object-cover" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    </div>
                  ))}
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
                >
                  <ChevronRight size={24} />
                </button>

                {/* Slide Indicators */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
                  {valuePropositions.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Current Slide Info Card */}
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-2xl w-80 border border-slate-100">
                <div className="flex items-start">
                                     <div className={`p-3 rounded-xl mr-4 ${
                     valuePropositions[currentSlide].color === 'primary' ? 'bg-purple-50 text-purple-600' :
                     valuePropositions[currentSlide].color === 'secondary' ? 'bg-blue-50 text-blue-600' :
                     'bg-slate-50 text-slate-600'
                   }`}>
                    {valuePropositions[currentSlide].icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-slate-900 mb-2 text-lg">
                      {valuePropositions[currentSlide].title}
                    </h4>
                    <p className="text-slate-700 mb-3 font-medium">
                      {valuePropositions[currentSlide].description}
                    </p>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {valuePropositions[currentSlide].details}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-r from-slate-800 via-purple-800 to-blue-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our solutions deliver measurable results that drive business transformation
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 group-hover:bg-white/20 transition-all duration-300">
                  <p className="text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
                    {stat.value}
                  </p>
                  <p className="text-slate-300 text-lg font-medium">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-600 via-blue-600 to-blue-700">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Transform Your Computing Capabilities?
            </h2>
            <p className="text-blue-100 max-w-4xl mx-auto mb-12 text-xl leading-relaxed">
              Contact us today to discover how our confidential computing and quantum solutions can secure your data and accelerate your business.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center px-10 py-5 bg-white text-purple-600 font-bold rounded-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300 text-lg"
            >
              Schedule a Consultation 
              <ArrowRight className="ml-3" size={24} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;