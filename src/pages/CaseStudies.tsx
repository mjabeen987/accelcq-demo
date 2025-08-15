import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Cpu, Building, Play, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/common/PageHeader';
import SectionHeading from '../components/common/SectionHeading';

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
      color: 'bg-gradient-to-br from-blue-50 to-indigo-50',
      iconColor: 'text-blue-600',
      borderColor: 'border-blue-200'
    },
    {
      title: 'Quantum Computing',
      description: 'Discover the power of quantum algorithms through our live QuantumStock AI demo, demonstrating 94.7% accuracy in financial forecasting.',
      demo: 'QuantumStock AI Live Demo',
      icon: <Cpu size={32} />,
      link: '/case-studies/quantum-computing',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      color: 'bg-gradient-to-br from-purple-50 to-pink-50',
      iconColor: 'text-purple-600',
      borderColor: 'border-purple-200'
    },
    {
      title: 'TOGAF Enterprise Architecture',
      description: 'Experience our Financial Exchange Platform demo showcasing enterprise-grade architecture patterns and best practices in action.',
      demo: 'OnEdge AI Intelligence Service',
      icon: <Building size={32} />,
      link: '/case-studies/togaf-enterprise-architecture',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      color: 'bg-gradient-to-br from-emerald-50 to-teal-50',
      iconColor: 'text-emerald-600',
      borderColor: 'border-emerald-200'
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
      <section className="py-24 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Interactive Technology Demonstrations
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Explore our MVP demos showcasing the practical applications of advanced computing technologies
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
                <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-slate-100 group-hover:border-slate-200">
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={study.image} 
                      alt={study.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    
                    {/* Demo Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center px-3 py-1.5 bg-white/95 text-slate-900 rounded-full text-sm font-semibold shadow-lg">
                        <Play size={14} className="mr-1.5" />
                        {study.demo}
                      </span>
                    </div>
                    
                    {/* Icon Overlay */}
                    <div className={`absolute bottom-4 right-4 w-16 h-16 ${study.color} rounded-2xl flex items-center justify-center shadow-lg border ${study.borderColor}`}>
                      <div className={study.iconColor}>
                        {study.icon}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-4 text-slate-900 group-hover:text-purple-600 transition-colors duration-300">{study.title}</h3>
                    <p className="text-slate-600 leading-relaxed mb-6 text-lg">{study.description}</p>
                    
                    <Link 
                      to={study.link}
                      className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold transition-all duration-300 group/link"
                    >
                      <span className="mr-2">Explore Case Study</span>
                      <div className="flex items-center">
                        <ArrowRight size={16} className="mr-1 transition-transform duration-300 group-hover/link:translate-x-1" />
                        <ExternalLink size={14} className="opacity-0 group-hover/link:opacity-100 transition-all duration-300" />
                      </div>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Case Studies Matter Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-slate-900">
                Why Case Studies Matter
              </h2>
              <div className="space-y-6 mb-8">
                <p className="text-slate-600 text-lg leading-relaxed">
                  Our case studies provide hands-on demonstrations of how advanced computing technologies solve real-world challenges across different industries and use cases.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Each demo is designed to showcase the practical benefits and implementation approaches of our solutions, helping you understand the potential impact on your organization.
                </p>
              </div>
              
              <div className="space-y-4">
                {[
                  'Interactive demonstrations of core technologies',
                  'Real-world problem-solving approaches',
                  'Measurable performance improvements',
                  'Implementation best practices and patterns'
                ].map((item, index) => (
                  <div key={index} className="flex items-start group">
                    <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-300">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p className="text-slate-700 text-lg group-hover:text-slate-900 transition-colors duration-300">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              className="relative"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/3861943/pexels-photo-3861943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Technology Demonstration" 
                  className="w-full h-auto" 
                />
              </div>
              
              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border border-slate-100">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-1">94.7%</div>
                  <div className="text-sm text-slate-600 font-medium">Accuracy Rate</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-600 via-blue-600 to-blue-700">
        <div className="container-custom text-center">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              Ready to Implement These Solutions?
            </h2>
            <p className="text-blue-100 max-w-4xl mx-auto mb-10 text-xl leading-relaxed">
              Contact our team to discuss how these technologies can be customized and implemented for your specific use cases and requirements.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center px-10 py-5 bg-white text-purple-600 font-bold rounded-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300 text-lg"
            >
              Schedule a Consultation <ArrowRight className="ml-3" size={24} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default CaseStudies; 