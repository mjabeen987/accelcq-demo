import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Building, Play, ExternalLink, Network, Shield, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/common/PageHeader';
import SectionHeading from '../components/common/SectionHeading';
import React from 'react'; // Added missing import for React

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
              <div className="inline-flex items-center bg-green-50 text-green-600 px-4 py-2 rounded-full mb-6">
                <Building size={20} className="mr-2" />
                <span className="font-medium">Live Architecture Demo</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Financial Exchange Platform
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                Explore a comprehensive enterprise architecture implementation for financial institutions. Our demo showcases TOGAF 9.2 principles applied to create a secure, scalable, and compliant financial exchange platform.
              </p>
              
              <div className="bg-green-50 border border-green-100 rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-green-900 mb-2">Architecture Highlights</h3>
                <ul className="space-y-2 text-green-800">
                  <li>• TOGAF ADM (Architecture Development Method) implementation</li>
                  <li>• Four-layer enterprise architecture model</li>
                  <li>• Regulatory compliance and risk management</li>
                  <li>• Real-time transaction processing and monitoring</li>
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <button className="btn btn-primary">
                  <Play className="mr-2" size={18} />
                  Explore Architecture
                </button>
                <Link to="/contact" className="btn btn-secondary">
                  Request Assessment
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
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-8 shadow-lg">
                <h4 className="font-semibold mb-4 text-center">Financial Exchange Dashboard</h4>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {exchangeMetrics.map((metric, index) => (
                    <div key={index} className="bg-white rounded-lg p-4 shadow-md">
                      <div className="text-sm text-gray-500 mb-1">{metric.metric}</div>
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-lg">{metric.value}</span>
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                          {metric.change}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <h5 className="font-semibold mb-3">Architecture Layers Status</h5>
                  <div className="space-y-2">
                    {architectureLayers.map((layer, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="font-medium text-sm">{layer.layer}</div>
                          <div className="text-xs text-gray-500">{layer.components} components</div>
                        </div>
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                          {layer.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TOGAF Framework */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="TOGAF Framework Implementation"
            subtitle="Comprehensive enterprise architecture following TOGAF 9.2 standards"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {architectureLayers.map((layer, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">{layer.layer}</h3>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <p className="text-gray-600 mb-4">{layer.description}</p>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">{layer.components} Components</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                    {layer.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="section bg-gradient-to-br from-secondary-50 via-white to-primary-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-5 pointer-events-none" />
        <div className="container-custom relative z-10">
          <SectionHeading
            title="Enterprise Architecture Features"
            subtitle="Advanced capabilities and compliance requirements for financial institutions"
          />
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
                className="glass bg-gradient-to-br from-white/90 via-primary-50/60 to-accent-50/60 p-8 rounded-3xl shadow-xl border border-secondary-100 flex flex-col items-center text-center hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="flex items-center justify-center w-16 h-16 min-w-[4rem] min-h-[4rem] bg-gradient-to-br from-green-500 to-accent-500 rounded-xl shadow-lg mb-6">
                  {React.cloneElement(feature.icon, { size: 36, className: 'text-white' })}
                </div>
                <h3 className="text-xl font-semibold mb-3 gradient-text drop-shadow-md">{feature.title}</h3>
                <p className="text-secondary-700 text-base leading-relaxed mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      <span className="text-secondary-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Approach */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="Implementation Approach"
            subtitle="Proven methodology for enterprise architecture transformation"
          />
          
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
                className="text-center"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                  {phase.phase}
                </div>
                <h3 className="text-lg font-semibold mb-3">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-primary-600 to-accent-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-10" />
        <div className="container-custom relative z-10 text-center">
          <div className="bg-white border border-secondary-100 rounded-3xl p-12 max-w-3xl mx-auto shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
              Ready to Transform Your Enterprise Architecture?
            </h2>
            <p className="text-xl mb-8 text-secondary-700 max-w-2xl mx-auto">
              Experience the power of TOGAF-based enterprise architecture with our Financial Exchange Platform demo. See how proper architecture governance can transform your organization's capabilities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="btn bg-white text-primary-600 opacity-50 cursor-not-allowed" disabled>
                <ExternalLink className="mr-2" size={18} />
                Demo Coming Soon
              </button>
              <Link to="/contact" className="btn bg-white text-primary-700 hover:bg-secondary-50">
                Schedule Architecture Review
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudyTOGAF; 