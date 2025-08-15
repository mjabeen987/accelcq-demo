import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Shield, Play, ExternalLink, CheckCircle, BarChart, Lock, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/common/PageHeader';
import SectionHeading from '../components/common/SectionHeading';

const CaseStudyConfidential = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const features = [
    {
      icon: <Shield size={28} />,
      title: 'Secure Data Processing',
      description: 'Process sensitive text data without exposing it to the processing environment',
      gradient: 'from-purple-500 to-blue-500',
      bgGradient: 'from-purple-50 to-blue-50'
    },
    {
      icon: <Lock size={28} />,
      title: 'Privacy Preservation',
      description: 'Maintain confidentiality while enabling advanced analytics and machine learning',
      gradient: 'from-blue-500 to-indigo-500',
      bgGradient: 'from-blue-50 to-indigo-50'
    },
    {
      icon: <BarChart size={28} />,
      title: 'Real-time Analysis',
      description: 'Get instant sentiment scores while keeping data encrypted in memory',
      gradient: 'from-indigo-500 to-purple-500',
      bgGradient: 'from-indigo-50 to-purple-50'
    },
    {
      icon: <CheckCircle size={28} />,
      title: 'Compliance Ready',
      description: 'Meet regulatory requirements for data privacy and protection',
      gradient: 'from-emerald-500 to-teal-500',
      bgGradient: 'from-emerald-50 to-teal-50'
    }
  ];

  const technicalSpecs = [
    { label: 'Trusted Execution Environment', value: 'Intel SGX / AMD SEV', icon: '🔒' },
    { label: 'Encryption', value: 'AES-256 with Hardware Keys', icon: '🔐' },
    { label: 'Processing Time', value: '< 100ms per text sample', icon: '⚡' },
    { label: 'Accuracy', value: '94.7% sentiment classification', icon: '🎯' },
    { label: 'Data Privacy', value: 'Zero-knowledge processing', icon: '🛡️' },
    { label: 'Compliance', value: 'GDPR, HIPAA, SOC 2', icon: '✅' }
  ];

  const useCases = [
    {
      title: 'Financial Services',
      description: 'Analyze customer feedback and social media sentiment without exposing PII data',
      icon: '🏦',
      bgGradient: 'from-blue-50 to-indigo-50'
    },
    {
      title: 'Healthcare',
      description: 'Process patient feedback while maintaining HIPAA compliance and privacy',
      icon: '🏥',
      bgGradient: 'from-emerald-50 to-teal-50'
    },
    {
      title: 'Government',
      description: 'Analyze classified documents and communications with security clearance requirements',
      icon: '🏛️',
      bgGradient: 'from-purple-50 to-pink-50'
    },
    {
      title: 'Enterprise',
      description: 'Monitor employee feedback and internal communications while preserving confidentiality',
      icon: '🏢',
      bgGradient: 'from-orange-50 to-red-50'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Confidential Computing Case Study | AccelCQ Inc</title>
        <meta name="description" content="Explore our Sentiment Analysis demo showcasing confidential computing capabilities for secure data processing in untrusted environments." />
      </Helmet>

      <PageHeader 
        title="Confidential Computing Case Study"
        subtitle="Sentiment Analysis with Privacy-Preserving Technology"
        backgroundImage="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      {/* Demo Overview */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-800/20"></div>
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full mb-8 border border-white/20 shadow-lg">
                <Sparkles size={20} className="mr-3 text-yellow-400" />
                <span className="font-semibold">Live Demo Available</span>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Secure Sentiment Analysis Demo
              </h2>
              <p className="text-slate-200 mb-8 text-xl leading-relaxed">
                Experience firsthand how confidential computing enables sentiment analysis of sensitive text data while maintaining complete privacy and security. Our demo processes customer feedback, social media posts, and confidential documents without exposing the content.
              </p>
              
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 mb-8 shadow-2xl">
                <h3 className="font-bold text-white mb-6 text-xl flex items-center">
                  <div className="w-2 h-8 bg-gradient-to-b from-purple-400 to-blue-400 rounded-full mr-4"></div>
                  Demo Highlights
                </h3>
                <ul className="space-y-4 text-slate-200">
                  <li className="flex items-center group">
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mr-4 group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="group-hover:text-white transition-colors duration-300">Real-time sentiment scoring (positive, negative, neutral)</span>
                  </li>
                  <li className="flex items-center group">
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mr-4 group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="group-hover:text-white transition-colors duration-300">Encrypted data processing in secure enclaves</span>
                  </li>
                  <li className="flex items-center group">
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mr-4 group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="group-hover:text-white transition-colors duration-300">Zero-knowledge architecture implementation</span>
                  </li>
                  <li className="flex items-center group">
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mr-4 group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="group-hover:text-white transition-colors duration-300">Performance benchmarking vs. traditional methods</span>
                  </li>
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-6">
                <button className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold rounded-2xl shadow-2xl hover:shadow-purple-500/25 transform hover:-translate-y-2 transition-all duration-300 hover:scale-105">
                  <Play className="mr-3 group-hover:scale-110 transition-transform duration-300" size={20} />
                  Launch Demo
                </button>
                <Link to="/contact" className="group inline-flex items-center px-8 py-4 border-2 border-white/30 text-white font-bold rounded-2xl hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-105">
                  Request Implementation
                  <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform duration-300" size={20} />
                </Link>
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
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="bg-slate-800/50 rounded-2xl p-6 shadow-lg mb-6 border border-slate-700/50">
                    <h4 className="font-bold mb-4 text-white text-lg">Sample Input (Encrypted)</h4>
                    <div className="bg-slate-900 p-4 rounded-xl text-sm font-mono text-slate-300 border border-slate-700">
                      █████████████████████████<br/>
                      ██████████ ███████ ██████<br/>
                      ████████████████████████
                    </div>
                  </div>
                  
                  <div className="bg-slate-800/50 rounded-2xl p-6 shadow-lg border border-slate-700/50">
                    <h4 className="font-bold mb-4 text-white text-lg">Sentiment Analysis Result</h4>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-slate-200">Positive</span>
                        <div className="w-32 bg-slate-700 rounded-full h-3">
                          <div className="bg-gradient-to-r from-emerald-400 to-emerald-500 h-3 rounded-full w-3/4 shadow-lg"></div>
                        </div>
                        <span className="text-sm font-bold text-emerald-400">75%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-slate-200">Neutral</span>
                        <div className="w-32 bg-slate-700 rounded-full h-3">
                          <div className="bg-gradient-to-r from-slate-400 to-slate-500 h-3 rounded-full w-1/4 shadow-lg"></div>
                        </div>
                        <span className="text-sm font-bold text-slate-400">20%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-slate-200">Negative</span>
                        <div className="w-32 bg-slate-700 rounded-full h-3">
                          <div className="bg-gradient-to-r from-red-400 to-red-500 h-3 rounded-full w-1/12 shadow-lg"></div>
                        </div>
                        <span className="text-sm font-bold text-red-400">5%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-slate-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-200/30"></div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8">
              Key Features
            </h2>
            <p className="text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Advanced capabilities that set our confidential computing solution apart
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="group cursor-pointer"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500 border border-slate-100 hover:border-slate-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500 from-purple-500 to-blue-500"></div>
                  <div className="relative z-10">
                    <div className={`w-20 h-20 bg-gradient-to-br ${feature.bgGradient} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                      <div className={`text-transparent bg-gradient-to-r ${feature.gradient} bg-clip-text`}>
                        {feature.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-slate-900 group-hover:text-purple-600 transition-colors duration-300">{feature.title}</h3>
                    <p className="text-slate-600 leading-relaxed text-lg group-hover:text-slate-700 transition-colors duration-300">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl font-bold mb-8 text-slate-900">Technical Specifications</h2>
              <p className="text-slate-600 mb-10 text-xl leading-relaxed">
                Our sentiment analysis solution leverages cutting-edge confidential computing technologies to ensure maximum security and performance.
              </p>
              
              <div className="space-y-4">
                {technicalSpecs.map((spec, index) => (
                  <motion.div 
                    key={index}
                    className="flex justify-between items-center py-4 border-b border-slate-200 group hover:bg-slate-50 rounded-xl px-4 transition-all duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex items-center">
                      <span className="text-2xl mr-4 group-hover:scale-110 transition-transform duration-300">{spec.icon}</span>
                      <span className="font-semibold text-slate-700">{spec.label}</span>
                    </div>
                    <span className="text-slate-600 font-medium bg-slate-100 px-4 py-2 rounded-lg group-hover:bg-slate-200 transition-colors duration-300">{spec.value}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-5xl font-bold mb-8 text-slate-900">Use Cases</h2>
              <div className="space-y-6">
                {useCases.map((useCase, index) => (
                  <motion.div 
                    key={index}
                    className="group cursor-pointer"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className={`bg-gradient-to-br ${useCase.bgGradient} p-6 rounded-2xl border border-slate-200 shadow-lg group-hover:shadow-xl transform group-hover:-translate-y-2 transition-all duration-300`}>
                      <div className="flex items-center mb-4">
                        <span className="text-3xl mr-4 group-hover:scale-110 transition-transform duration-300">{useCase.icon}</span>
                        <h3 className="text-xl font-bold text-slate-900">{useCase.title}</h3>
                      </div>
                      <p className="text-slate-700 leading-relaxed text-lg">{useCase.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-slate-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-200/40"></div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8">
              Implementation Process
            </h2>
            <p className="text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              How we deploy confidential computing solutions for your organization
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Security Assessment',
                description: 'Analyze your data flow and identify sensitive processing requirements'
              },
              {
                step: '02',
                title: 'Architecture Design',
                description: 'Design secure enclave architecture tailored to your specific use case'
              },
              {
                step: '03',
                title: 'Deployment & Testing',
                description: 'Deploy solution with comprehensive testing and performance validation'
              }
            ].map((process, index) => (
              <motion.div 
                key={index}
                className="text-center group cursor-pointer"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500 border border-slate-100 hover:border-slate-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500 from-purple-500 to-blue-500"></div>
                  <div className="relative z-10">
                    <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-3xl flex items-center justify-center mx-auto mb-8 text-3xl font-bold shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      {process.step}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-slate-900 group-hover:text-purple-600 transition-colors duration-300">{process.title}</h3>
                    <p className="text-slate-600 leading-relaxed text-lg group-hover:text-slate-700 transition-colors duration-300">{process.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-600 via-blue-600 to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-800/20"></div>
        <div className="container-custom text-center relative z-10">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">
              Ready to Secure Your Data Processing?
            </h2>
            <p className="text-blue-100 max-w-4xl mx-auto mb-10 text-xl leading-relaxed">
              Experience the power of confidential computing with our sentiment analysis demo, then let's discuss implementing this technology for your specific needs.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="group inline-flex items-center px-8 py-4 bg-white text-purple-600 font-bold rounded-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-300">
                <ExternalLink className="mr-3 group-hover:scale-110 transition-transform duration-300" size={20} />
                Try Live Demo
              </button>
              <Link to="/contact" className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-300">
                Schedule Consultation
                <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform duration-300" size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default CaseStudyConfidential; 