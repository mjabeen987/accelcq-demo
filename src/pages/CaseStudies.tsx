import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Cpu, Building } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/common/PageHeader';
import SectionHeading from '../components/common/SectionHeading';
import React from 'react'; // Added missing import for React

const CaseStudies = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const caseStudies = [
    {
      title: 'Confidential Computing',
      description: 'Explore our sentiment analysis demo showcasing secure data processing in untrusted environments while maintaining privacy and compliance.',
      demo: 'Sentiment Analysis',
      icon: <Shield size={32} />,
      link: '/case-studies/confidential-computing',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      color: 'bg-blue-50 border-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      title: 'Quantum Computing',
      description: 'Discover the power of quantum algorithms through our live QuantumStock AI demo, demonstrating 94.7% accuracy in financial forecasting.',
      demo: 'QuantumStock AI Live Demo',
      icon: <Cpu size={32} />,
      link: '/case-studies/quantum-computing',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      color: 'bg-purple-50 border-purple-100',
      iconColor: 'text-purple-600'
    },
    {
      title: 'TOGAF Enterprise Architecture',
      description: 'Experience our Financial Exchange Platform demo showcasing enterprise-grade architecture patterns and best practices in action.',
      demo: 'Financial Exchange Platform',
      icon: <Building size={32} />,
      link: '/case-studies/togaf-enterprise-architecture',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      color: 'bg-green-50 border-green-100',
      iconColor: 'text-green-600'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies | AccelCQ Inc</title>
        <meta name="description" content="Explore AccelCQ's case studies demonstrating real-world applications of confidential computing, quantum computing, and enterprise architecture." />
      </Helmet>

      <PageHeader 
        title="Case Studies"
        subtitle="Real-world demonstrations of our cutting-edge technologies and solutions in action"
        backgroundImage="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      {/* Overview Section */}
      <section className="section bg-gradient-to-br from-secondary-50 via-white to-primary-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-5 pointer-events-none" />
        <div className="container-custom relative z-10">
          <SectionHeading
            title="Interactive Technology Demonstrations"
            subtitle="Explore our MVP demos showcasing the practical applications of advanced computing technologies"
          />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {caseStudies.map((study, index) => (
              <motion.div 
                key={index}
                className="group"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="glass bg-gradient-to-br from-white/90 via-primary-50/60 to-accent-50/60 rounded-3xl shadow-xl border border-secondary-100 overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                  <div className="relative h-48 overflow-hidden rounded-t-3xl">
                    <img 
                      src={study.image} 
                      alt={study.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="inline-block px-3 py-1 bg-white/90 text-gray-900 rounded-full text-sm font-medium">
                        Demo: {study.demo}
                      </span>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col items-center text-center">
                    <div className={`flex items-center justify-center w-16 h-16 min-w-[4rem] min-h-[4rem] rounded-xl mb-4 ${study.color}`}> 
                      <div className={study.iconColor}>
                        {React.cloneElement(study.icon, { size: 36 })}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 gradient-text drop-shadow-md">{study.title}</h3>
                    <p className="text-secondary-700 mb-6">{study.description}</p>
                    <Link 
                      to={study.link}
                      className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors"
                    >
                      Explore Case Study
                      <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Case Studies Matter Section */}
      <section className="section bg-gradient-to-br from-secondary-50 via-white to-primary-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-5 pointer-events-none" />
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text drop-shadow-md">
                Why Case Studies Matter
              </h2>
              <p className="text-secondary-700 mb-4 text-lg">
                Our case studies provide hands-on demonstrations of how advanced computing technologies solve real-world challenges across different industries and use cases.
              </p>
              <p className="text-secondary-700 mb-6">
                Each demo is designed to showcase the practical benefits and implementation approaches of our solutions, helping you understand the potential impact on your organization.
              </p>
              <div className="space-y-4">
                {[
                  'Interactive demonstrations of core technologies',
                  'Real-world problem-solving approaches',
                  'Measurable performance improvements',
                  'Implementation best practices and patterns'
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <p className="text-secondary-700">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              className="rounded-3xl overflow-hidden shadow-2xl border border-secondary-100 glass"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img 
                src="https://images.pexels.com/photos/3861943/pexels-photo-3861943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Technology Demonstration" 
                className="w-full h-auto" 
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-primary-800 to-secondary-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-10" />
        <div className="container-custom relative z-10 text-center">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Implement These Solutions?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Contact our team to discuss how these technologies can be customized and implemented for your specific use cases and requirements.
            </p>
            <Link to="/contact" className="btn bg-white text-primary-800 hover:bg-secondary-50">
              Schedule a Consultation <ArrowRight className="ml-2" size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default CaseStudies; 