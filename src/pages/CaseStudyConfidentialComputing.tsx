import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Shield, Play, ExternalLink, CheckCircle, BarChart, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/common/PageHeader';
import SectionHeading from '../components/common/SectionHeading';
import React from 'react'; // Added missing import for React

const CaseStudyConfidentialComputing = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const features = [
    {
      icon: <Shield size={24} />,
      title: 'Secure Data Processing',
      description: 'Process sensitive text data without exposing it to the processing environment'
    },
    {
      icon: <Lock size={24} />,
      title: 'Privacy Preservation',
      description: 'Maintain confidentiality while enabling advanced analytics and machine learning'
    },
    {
      icon: <BarChart size={24} />,
      title: 'Real-time Analysis',
      description: 'Get instant sentiment scores while keeping data encrypted in memory'
    },
    {
      icon: <CheckCircle size={24} />,
      title: 'Compliance Ready',
      description: 'Meet regulatory requirements for data privacy and protection'
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
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center bg-gray-50 text-gray-600 px-4 py-2 rounded-full mb-6">
                <Shield size={20} className="mr-2" />
                <span className="font-medium">⏳ Live Demo Not Available</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Secure Sentiment Analysis Demo
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                Experience firsthand how confidential computing enables sentiment analysis of sensitive text data while maintaining complete privacy and security. Our demo processes customer feedback, social media posts, and confidential documents without exposing the content.
              </p>
              
              <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-blue-900 mb-2">Demo Highlights</h3>
                <ul className="space-y-2 text-blue-800">
                  <li>• Real-time sentiment scoring (positive, negative, neutral)</li>
                  <li>• Encrypted data processing in secure enclaves</li>
                  <li>• Zero-knowledge architecture implementation</li>
                  <li>• Performance benchmarking vs. traditional methods</li>
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <button className="btn btn-primary opacity-50 cursor-not-allowed" disabled>
                  <Play className="mr-2" size={18} />
                  Demo Coming Soon
                </button>
                <Link to="/contact" className="btn btn-secondary">
                  Request Implementation
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
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8 shadow-lg">
                <div className="bg-white rounded-lg p-6 shadow-md mb-4">
                  <h4 className="font-semibold mb-3">Sample Input (Encrypted)</h4>
                  <div className="bg-gray-100 p-3 rounded text-sm font-mono">
                    █████████████████████████<br/>
                    ██████████ ███████ ██████<br/>
                    ████████████████████████
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold mb-3">Sentiment Analysis Result</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span>Positive</span>
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full w-3/4"></div>
                      </div>
                      <span className="text-sm">75%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Neutral</span>
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-gray-400 h-2 rounded-full w-1/4"></div>
                      </div>
                      <span className="text-sm">20%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Negative</span>
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-red-500 h-2 rounded-full w-1/12"></div>
                      </div>
                      <span className="text-sm">5%</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="section bg-gradient-to-br from-secondary-50 via-white to-primary-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-5 pointer-events-none" />
        <div className="container-custom relative z-10">
          <SectionHeading
            title="Key Features"
            subtitle="Advanced capabilities that set our confidential computing solution apart"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="glass bg-gradient-to-br from-white/90 via-primary-50/60 to-accent-50/60 p-8 rounded-3xl shadow-xl border border-secondary-100 flex flex-col items-center text-center hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center justify-center w-16 h-16 min-w-[4rem] min-h-[4rem] bg-gradient-to-br from-blue-500 to-accent-500 rounded-xl shadow-lg mb-6">
                  {React.cloneElement(feature.icon, { size: 36, className: 'text-white' })}
                </div>
                <h3 className="text-xl font-semibold mb-3 gradient-text drop-shadow-md">{feature.title}</h3>
                <p className="text-secondary-700 text-base leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-blue-600 to-accent-600 relative overflow-hidden">
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
              Ready to Secure Your Data Processing?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Experience the power of confidential computing with our sentiment analysis demo, then let's discuss implementing this technology for your specific needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="btn bg-white text-gray-400 opacity-50 cursor-not-allowed" disabled>
                <ExternalLink className="mr-2" size={18} />
                Demo Coming Soon
              </button>
              <Link to="/contact" className="btn bg-blue-500 text-white hover:bg-secondary-50">
                Schedule Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default CaseStudyConfidentialComputing; 