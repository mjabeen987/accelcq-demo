import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Shield, Play, ExternalLink, CheckCircle, BarChart, Lock, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/common/PageHeader';

const CaseStudyConfidentialComputing = () => {
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
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 px-6 py-3 rounded-full mb-8 border border-blue-200 shadow-lg">
                <Sparkles size={20} className="mr-3 text-blue-600" />
                <span className="font-semibold">🚀 Live Demo Available</span>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-bold mb-8 text-slate-900">
                Secure Sentiment Analysis Demo
              </h2>
              <p className="text-slate-600 mb-8 text-xl leading-relaxed">
                Experience firsthand how confidential computing enables sentiment analysis of sensitive text data while maintaining complete privacy and security. Our demo processes customer feedback, social media posts, and confidential documents without exposing the content.
              </p>
              
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-3xl p-8 mb-8 shadow-2xl">
                <h3 className="font-bold text-blue-900 mb-6 text-xl flex items-center">
                  <div className="w-2 h-8 bg-gradient-to-b from-blue-400 to-indigo-400 rounded-full mr-4"></div>
                  Demo Highlights
                </h3>
                <ul className="space-y-4 text-blue-800">
                  <li className="flex items-center group">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full mr-4 group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="group-hover:text-blue-900 transition-colors duration-300">Real-time sentiment scoring (positive, negative, neutral)</span>
                  </li>
                  <li className="flex items-center group">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full mr-4 group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="group-hover:text-blue-900 transition-colors duration-300">Encrypted data processing in secure enclaves</span>
                  </li>
                  <li className="flex items-center group">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full mr-4 group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="group-hover:text-blue-900 transition-colors duration-300">Zero-knowledge architecture implementation</span>
                  </li>
                  <li className="flex items-center group">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full mr-4 group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="group-hover:text-blue-900 transition-colors duration-300">Performance benchmarking vs. traditional methods</span>
                  </li>
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-6">
                <a 
                  href="http://40.71.80.56:8080/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold rounded-2xl shadow-2xl hover:shadow-purple-500/25 transform hover:-translate-y-2 transition-all duration-300 hover:scale-105"
                >
                  <Play className="mr-3 group-hover:scale-110 transition-transform duration-300" size={20} />
                  View Live Demo
                </a>
                <Link 
                  to="/contact?subject=Confidential Computing&template=confidential-computing#contact-form" 
                  className="group inline-flex items-center px-8 py-4 border-2 border-slate-300 text-slate-700 font-bold rounded-2xl hover:bg-slate-50 transition-all duration-300 hover:scale-105"
                >
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
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 shadow-2xl border border-blue-200 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="bg-white rounded-2xl p-6 shadow-lg mb-6 border border-slate-200">
                    <h4 className="font-bold mb-4 text-slate-900 text-lg">Sample Input (Encrypted)</h4>
                    <div className="bg-slate-100 p-4 rounded-xl text-sm font-mono text-slate-600 border border-slate-200">
                      █████████████████████████<br/>
                      ██████████ ███████ ██████<br/>
                      ████████████████████████
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
                    <h4 className="font-bold mb-4 text-slate-900 text-lg">Sentiment Analysis Result</h4>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-slate-700">Positive</span>
                        <div className="w-32 bg-slate-200 rounded-full h-3">
                          <div className="bg-gradient-to-r from-emerald-400 to-emerald-500 h-3 rounded-full w-3/4 shadow-lg"></div>
                        </div>
                        <span className="text-sm font-bold text-emerald-600">75%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-slate-700">Neutral</span>
                        <div className="w-32 bg-slate-200 rounded-full h-3">
                          <div className="bg-gradient-to-r from-slate-400 to-slate-500 h-3 rounded-full w-1/4 shadow-lg"></div>
                        </div>
                        <span className="text-sm font-bold text-slate-600">20%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-slate-700">Negative</span>
                        <div className="w-32 bg-slate-200 rounded-full h-3">
                          <div className="bg-gradient-to-r from-red-400 to-red-500 h-3 rounded-full w-1/12 shadow-lg"></div>
                        </div>
                        <span className="text-sm font-bold text-red-600">5%</span>
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
                <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500 border border-slate-100 hover:border-slate-200 relative overflow-hidden h-full">
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500 from-purple-500 to-blue-500"></div>
                  <div className="relative z-10 h-full flex flex-col">
                    <div className={`w-20 h-20 bg-gradient-to-br ${feature.bgGradient} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg flex-shrink-0`}>
                      <div className={`text-${feature.gradient.split('-')[1]}-600`}>
                        {feature.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-4 text-slate-900 group-hover:text-purple-600 transition-colors duration-300">{feature.title}</h3>
                      <p className="text-slate-600 leading-relaxed text-lg group-hover:text-slate-700 transition-colors duration-300">{feature.description}</p>
                    </div>
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
              <a 
                href="http://40.71.80.56:8080/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group inline-flex items-center px-8 py-4 bg-white text-purple-600 font-bold rounded-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-300"
              >
                <ExternalLink className="mr-3 group-hover:scale-110 transition-transform duration-300" size={20} />
                View Live Demo
              </a>
              <Link 
                to="/contact?subject=Confidential Computing&template=confidential-computing#contact-form" 
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-300"
              >
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

export default CaseStudyConfidentialComputing; 