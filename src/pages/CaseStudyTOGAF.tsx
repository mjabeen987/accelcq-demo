import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Building, Play, ExternalLink, Network, Shield, Settings, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/common/PageHeader';

const CaseStudyTOGAF = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const architectureLayers = [
    {
      layer: 'Business Architecture',
      description: 'Financial operations, regulatory compliance, and business processes',
      status: 'Active',
      components: 12
    },
    {
      layer: 'Data Architecture',
      description: 'Secure data models for financial transactions and customer information',
      status: 'Active',
      components: 8
    },
    {
      layer: 'Application Architecture',
      description: 'Core banking systems, exchange platform, and integration services',
      status: 'Running',
      components: 15
    },
    {
      layer: 'Technology Architecture',
      description: 'Cloud infrastructure, security frameworks, and monitoring systems',
      status: 'Optimized',
      components: 22
    }
  ];

  const exchangeMetrics = [
    { metric: 'Daily Transactions', value: '2,847', change: '+12%' },
    { metric: 'Network Participants', value: '156', change: '+8%' },
    { metric: 'Total Volume', value: '$45.2M', change: '+23%' },
    { metric: 'System Uptime', value: '99.97%', change: '+0.02%' }
  ];

  return (
    <>
      <Helmet>
        <title>TOGAF Enterprise Architecture Case Study | AccelCQ Inc</title>
        <meta name="description" content="Explore our Financial Exchange Platform demo showcasing TOGAF enterprise architecture principles and best practices in financial services." />
      </Helmet>

      <PageHeader 
        title="TOGAF Enterprise Architecture Case Study"
        subtitle="Financial Exchange Platform with Enterprise Architecture Excellence"
        backgroundImage="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
              <div className="inline-flex items-center bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-700 px-6 py-3 rounded-full mb-8 border border-emerald-200 shadow-lg">
                <Sparkles size={20} className="mr-3 text-emerald-600" />
                <span className="font-semibold">Live Architecture Demo</span>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">
                Financial Exchange Platform
              </h2>
              <p className="text-slate-600 mb-8 text-xl leading-relaxed">
                Explore a comprehensive enterprise architecture implementation for financial institutions. Our demo showcases TOGAF 9.2 principles applied to create a secure, scalable, and compliant financial exchange platform.
              </p>
              
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 rounded-2xl p-8 mb-8 shadow-lg">
                <h3 className="font-bold text-emerald-900 mb-4 text-lg">Architecture Highlights</h3>
                <ul className="space-y-3 text-emerald-800">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                    TOGAF ADM (Architecture Development Method) implementation
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                    Four-layer enterprise architecture model
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                    Regulatory compliance and risk management
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                    Real-time transaction processing and monitoring
                  </li>
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-6">
                <button className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold rounded-2xl shadow-2xl hover:shadow-purple-500/25 transform hover:-translate-y-2 transition-all duration-300 hover:scale-105">
                  <Play className="mr-3 group-hover:scale-110 transition-transform duration-300" size={20} />
                  Explore Architecture
                </button>
                <Link to="/contact" className="group inline-flex items-center px-8 py-4 border-2 border-slate-300 text-slate-700 font-bold rounded-2xl hover:bg-slate-50 transition-all duration-300 hover:scale-105">
                  Request Assessment
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
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 shadow-2xl border border-emerald-200 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <h4 className="font-bold mb-8 text-center text-slate-900 text-xl">Financial Exchange Dashboard</h4>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {exchangeMetrics.map((metric, index) => (
                      <div key={index} className="bg-white rounded-2xl p-4 shadow-lg border border-slate-100 group-hover:shadow-xl transition-all duration-300">
                        <div className="text-sm text-slate-500 mb-2 font-medium">{metric.metric}</div>
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-xl text-slate-900">{metric.value}</span>
                          <span className="text-xs bg-emerald-100 text-emerald-800 px-3 py-1.5 rounded-xl font-semibold">
                            {metric.change}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 group-hover:shadow-xl transition-all duration-300">
                    <h5 className="font-bold mb-4 text-slate-900">Architecture Layers Status</h5>
                    <div className="space-y-3">
                      {architectureLayers.map((layer, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="font-semibold text-sm text-slate-700">{layer.layer}</div>
                            <div className="text-xs text-slate-500">{layer.components} components</div>
                          </div>
                          <span className="text-xs bg-emerald-100 text-emerald-800 px-3 py-1.5 rounded-xl font-semibold">
                            {layer.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TOGAF Framework */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              TOGAF Framework Implementation
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Comprehensive enterprise architecture following TOGAF 9.2 standards
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {architectureLayers.map((layer, index) => (
              <motion.div 
                key={index}
                className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-slate-100 group cursor-pointer"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500 from-emerald-500 to-teal-500 rounded-3xl"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-slate-900">{layer.layer}</h3>
                    <div className="w-4 h-4 bg-emerald-500 rounded-full"></div>
                  </div>
                  <p className="text-slate-600 mb-6 leading-relaxed">{layer.description}</p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500 font-medium">{layer.components} Components</span>
                    <span className="bg-emerald-100 text-emerald-800 px-3 py-1.5 rounded-xl text-xs font-bold">
                      {layer.status}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Enterprise Architecture Features
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Advanced capabilities and compliance requirements for financial institutions
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield size={24} />,
                title: 'Regulatory Compliance',
                description: 'Built-in compliance with banking regulations, AML, KYC, and FFIEC guidelines for financial operations.',
                features: ['SOX Compliance', 'AML/BSA Requirements', 'FFIEC Guidance', 'GDPR/CCPA Ready']
              },
              {
                icon: <Network size={24} />,
                title: 'Integration Excellence',
                description: 'Seamless integration capabilities with existing banking systems and third-party services.',
                features: ['API Gateway', 'ESB Integration', 'Real-time Messaging', 'Legacy System Support']
              },
              {
                icon: <Settings size={24} />,
                title: 'Operational Excellence',
                description: 'Comprehensive monitoring, governance, and management capabilities for enterprise operations.',
                features: ['24/7 Monitoring', 'Automated Deployment', 'Disaster Recovery', 'Performance Analytics']
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 group cursor-pointer relative overflow-hidden"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500 from-emerald-500 to-teal-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-slate-900">{feature.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">{feature.description}</p>
                  <ul className="space-y-3">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                        <span className="text-slate-700 font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Approach */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Implementation Approach
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Proven methodology for enterprise architecture transformation
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                phase: 'Phase A',
                title: 'Architecture Vision',
                description: 'Define architecture vision, stakeholder requirements, and business case for financial exchange platform.'
              },
              {
                phase: 'Phase B-D',
                title: 'Architecture Development',
                description: 'Develop business, data, and application architectures aligned with financial operational requirements.'
              },
              {
                phase: 'Phase E-F',
                title: 'Implementation Planning',
                description: 'Create detailed implementation roadmap with migration planning and risk assessment.'
              },
              {
                phase: 'Phase G-H',
                title: 'Governance & Change',
                description: 'Establish architecture governance and change management processes for ongoing operations.'
              }
            ].map((phase, index) => (
              <motion.div 
                key={index}
                className="text-center group"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-sm font-bold shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  {phase.phase}
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">{phase.title}</h3>
                <p className="text-slate-600 leading-relaxed">{phase.description}</p>
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
              Ready to Transform Your Enterprise Architecture?
            </h2>
            <p className="text-blue-100 max-w-4xl mx-auto mb-10 text-xl leading-relaxed">
              Experience the power of TOGAF-based enterprise architecture with our Financial Exchange Platform demo. See how proper architecture governance can transform your organization's capabilities.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="group inline-flex items-center px-8 py-4 bg-white text-purple-600 font-bold rounded-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-300">
                <ExternalLink className="mr-3 group-hover:scale-110 transition-transform duration-300" size={20} />
                Explore Demo Platform
              </button>
              <Link to="/contact" className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-300">
                Schedule Architecture Review
                <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform duration-300" size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default CaseStudyTOGAF; 