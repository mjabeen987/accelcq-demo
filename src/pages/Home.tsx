import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Shield, Cpu, Server, BarChart, Code, Globe, Users, ArrowRight, ChevronLeft, ChevronRight, Star, CheckCircle, Zap } from 'lucide-react';
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
      staggerChildren: 0.2
    }
  }
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
      image: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
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
    { value: '99.9%', label: 'Uptime Reliability', icon: <CheckCircle size={20} /> },
    { value: '< 1ms', label: 'Response Latency', icon: <Zap size={20} /> },
    { value: '24/7', label: 'System Monitoring', icon: <Shield size={20} /> },
    { value: '3x', label: 'Performance Improvement', icon: <BarChart size={20} /> }
  ];

  return (
    <>
      <Helmet>
        <title>AccelCQ Inc | Confidential & Quantum Computing Solutions</title>
        <meta name="description" content="AccelCQ Inc provides cutting-edge confidential computing and quantum computing solutions for enterprises. Secure your data and accelerate your business." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 bg-hero-pattern opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-secondary-900/20" />
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-secondary-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="container-custom relative z-10 pt-20 lg:pt-0">
          <div className="flex flex-col items-center justify-center min-h-[60vh]">
            {/* Content */}
            <motion.div 
              className="text-center w-full"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6 border border-white/20"
              >
                <Star size={16} className="mr-2 text-primary-300" />
                Leading the AI Infrastructure Revolution
              </motion.div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-tight mb-8 text-white drop-shadow-xl">
                Secure Infrastructure<br />
                <span>
                  for the <span className="gradient-text bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">AI Era</span>
                </span>
              </h1>
              
              <p className="text-2xl md:text-3xl text-secondary-200 mb-10 max-w-3xl mx-auto leading-relaxed">
                Accelerating development, deployment and adoption of Confidential & Quantum Computing
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn btn-primary text-lg px-8 py-4">
                  Get Started
                  <ArrowRight size={20} className="ml-2" />
                </Link>
                <Link to="/services/confidential-computing" className="btn btn-ghost text-lg px-8 py-4 text-white border-white/20 hover:bg-white/10">
                  Explore Solutions
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div 
              className="w-1.5 h-3 bg-white rounded-full mt-2"
              animate={{ 
                y: [0, 12, 0],
                opacity: [1, 0.5, 1]
              }}
              transition={{ 
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut"
              }}
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="section bg-gradient-to-br from-secondary-50 to-primary-50">
        <div className="container-custom">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {stats.map((stat, index) => (
              <motion.div key={index} variants={fadeInUp} className="text-center">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-secondary-100">
                  <div className="text-primary-600 mb-3 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-secondary-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-secondary-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section">
        <div className="container-custom">
          <SectionHeading
            title="Our Services"
            subtitle="AccelCQ delivers next-generation confidential and quantum computing solutions that are production-ready today, transforming how enterprises secure and accelerate their most critical workloads."
          />

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="section bg-gradient-to-br from-secondary-50 to-primary-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary-600 font-semibold mb-2 block">About AccelCQ Inc</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Pioneering the Future of{' '}
                <span className="gradient-text">Secure Computing</span>
              </h2>
              <p className="text-secondary-600 mb-4 text-lg leading-relaxed">
                At AccelCQ Inc, we combine expertise in confidential computing and quantum technologies to provide cutting-edge solutions that address the most challenging computational problems while maintaining the highest security standards.
              </p>
              <p className="text-secondary-600 mb-6 text-lg leading-relaxed">
                Our team of experts, with backgrounds from leading tech companies and research institutions, is dedicated to pushing the boundaries of what's possible in secure and high-performance computing.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  { icon: <Shield size={20} />, text: "Industry-leading secure computing solutions" },
                  { icon: <Globe size={20} />, text: "Global delivery with local expertise" },
                  { icon: <Users size={20} />, text: "Team of top researchers and engineers" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="text-primary-600 mr-4 mt-1 p-2 bg-primary-50 rounded-xl">
                      {item.icon}
                    </div>
                    <p className="text-secondary-700 text-lg">{item.text}</p>
                  </div>
                ))}
              </div>
              
              <Link to="/about" className="btn btn-primary">
                Learn More About Us
                <ArrowRight size={20} className="ml-2" />
              </Link>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-600 rounded-3xl blur-2xl opacity-20"></div>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-secondary-100">
                  <img 
                    src="/public/image.png" 
                    alt="AccelCQ Secure Computing" 
                    className="w-full h-110 object-cover object-center" 
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              Ready to Secure Your Future?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Join leading enterprises that trust AccelCQ for their confidential and quantum computing needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn bg-white text-primary-600 hover:bg-secondary-50">
                Get Started Today
                <ArrowRight size={20} className="ml-2" />
              </Link>
              <Link to="/case-studies" className="btn btn-outline text-white border-white/30 hover:bg-white/10">
                View Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;