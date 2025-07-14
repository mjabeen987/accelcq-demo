import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Shield, Cloud, Server, Settings, Users, Headphones, CheckCircle, ArrowRight, Lock, Zap, Globe, Cpu, Database } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import SectionHeading from '../components/common/SectionHeading';

const TEEAsAService = () => {
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

  // Services offered
  const services = [
    {
      icon: <Settings size={24} />,
      title: 'Consulting & Architecture',
      description: 'Strategic guidance and architectural design for optimal TEE implementation tailored to your specific requirements.'
    },
    {
      icon: <Cloud size={24} />,
      title: 'Cloud TEE Deployment',
      description: 'Seamless deployment of TEE solutions on major cloud platforms including AWS, Azure, and Google Cloud.'
    },
    {
      icon: <Server size={24} />,
      title: 'On-Premises & Hybrid Enablement',
      description: 'Implementation of TEE solutions in on-premises and hybrid environments for maximum control and flexibility.'
    },
    {
      icon: <Users size={24} />,
      title: 'End-to-End Lifecycle Management',
      description: 'Complete lifecycle management from initial deployment through ongoing maintenance and optimization.'
    },
    {
      icon: <Shield size={24} />,
      title: 'Integration & DevSecOps',
      description: 'Seamless integration with existing systems and DevSecOps practices for continuous security.'
    },
    {
      icon: <Headphones size={24} />,
      title: 'Continuous Support & Incident Response',
      description: 'Round-the-clock support and rapid incident response to ensure maximum uptime and security.'
    }
  ];

  // Use case spotlights
  const useCases = [
    {
      title: 'Healthcare: Secure Medical Data Analytics',
      description: 'A major hospital system must analyze patient records for research while meeting HIPAA compliance. AccelCQ deploys TEEs in Azure Confidential VMs, enabling privacy-preserving analytics—ensuring sensitive data never leaves the secure enclave, even in the cloud.',
      image: '/image.png',
      icon: <Shield size={24} />
    },
    {
      title: 'Finance: Confidential Multi-Party Computation',
      description: 'Banks need to collaboratively detect fraud trends without revealing individual client data. Using AccelCQ\'s TEE-as-a-Service, banks run joint machine learning models in AWS Nitro Enclaves—securing data confidentiality and meeting strict regulatory standards.',
      image: '/2. Finance Confidential Multi-Party Computation.png',
      icon: <Globe size={24} />
    },
    {
      title: 'Biotech: Protecting Intellectual Property',
      description: 'A biotech startup develops proprietary drug discovery algorithms. With AccelCQ, their code and sensitive research data are run inside Google Confidential VMs, protected from both external and internal threats, and ensuring IP security during global cloud collaborations.',
      image: '/3. Biotech Protecting Intellectual Property.png',
      icon: <Cpu size={24} />
    },
    {
      title: 'Government: In-House Data Residency & Ultra-Secure Processing',
      description: 'A government agency with national security requirements cannot use public cloud. AccelCQ architects and manages TEEs on-premises using Intel SGX, delivering maximum data residency control and security—even at higher complexity and cost.',
      image: '/4. Government In-House Data Residency & Ultra-Secure Processing.png',
      icon: <Lock size={24} />
    }
  ];

  // Why choose AccelCQ
  const whyChooseUs = [
    {
      title: 'Cross-Platform Expertise',
      description: 'Across Intel SGX, AMD SEV, and ARM TrustZone'
    },
    {
      title: 'Accelerated Deployment',
      description: 'With proven methodologies and frameworks'
    },
    {
      title: 'Ongoing Management',
      description: 'Including monitoring, maintenance, and optimization'
    },
    {
      title: 'Cost Efficiency',
      description: 'Through optimized resource utilization and management'
    },
    {
      title: 'End-to-End Assurance',
      description: 'With comprehensive security validation and compliance'
    }
  ];

  // Cloud vs On-Premises comparison
  const comparisonData = [
    {
      characteristic: 'National Security',
      cloud: 'Not suitable',
      onPrem: 'Suitable',
      cloudColor: 'text-red-600',
      onPremColor: 'text-green-600'
    },
    {
      characteristic: 'Data Residency Control',
      cloud: 'Limited',
      onPrem: 'Maximum',
      cloudColor: 'text-yellow-600',
      onPremColor: 'text-green-600'
    },
    {
      characteristic: 'Security',
      cloud: 'Standard',
      onPrem: 'Enhanced',
      cloudColor: 'text-blue-600',
      onPremColor: 'text-green-600'
    },
    {
      characteristic: 'Complexity',
      cloud: 'Lower',
      onPrem: 'Higher',
      cloudColor: 'text-green-600',
      onPremColor: 'text-yellow-600'
    },
    {
      characteristic: 'Cost',
      cloud: 'Lower',
      onPrem: 'Higher',
      cloudColor: 'text-green-600',
      onPremColor: 'text-yellow-600'
    }
  ];

  // Supported Platforms
  const platforms = [
    'Intel SGX',
    'AMD SEV',
    'ARM TrustZone',
    'AWS Nitro Enclaves',
    'Azure Confidential Computing',
    'Google Confidential VMs'
  ];

  return (
    <>
      <Helmet>
        <title>TEE-as-a-Service | AccelCQ Inc</title>
        <meta name="description" content="Protect your most sensitive applications and data with AccelCQ's industry-leading TEE solutions—built for the cloud, optimized for compliance, and managed for your peace of mind." />
      </Helmet>

      <PageHeader 
        title="Trusted Execution Environment (TEE) as a Service"
        subtitle="Protect your most sensitive applications and data with industry-leading TEE solutions—built for the cloud, optimized for compliance, and managed for your peace of mind"
      />

      {/* What is TEE Section */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary-600 font-semibold mb-2 block">Secure Execution Environment</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                What is a <span className="gradient-text">Trusted Execution Environment (TEE)?</span>
              </h2>
              <p className="text-lg text-secondary-600 mb-4 leading-relaxed">
                A Trusted Execution Environment (TEE) is a secure, isolated area within a processor that guarantees confidentiality and integrity for applications and data—even in untrusted environments.
              </p>
              <p className="text-secondary-600 mb-4 leading-relaxed">
                With TEEs, your workloads are protected from unauthorized access, including from cloud providers, insiders, and advanced attackers. This hardware-based security ensures that your most sensitive data remains protected throughout its entire lifecycle.
              </p>
              <p className="text-secondary-600 mb-6 leading-relaxed">
                At AccelCQ, we provide comprehensive TEE-as-a-Service solutions that enable organizations to harness the power of trusted execution environments without the complexity of implementation and management.
              </p>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-600 rounded-3xl blur-2xl opacity-20"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-secondary-100">
                <img 
                  src="https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Trusted Execution Environment" 
                  className="w-full max-h-[420px] object-cover object-center" 
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section bg-gradient-to-br from-secondary-50 to-primary-50">
        <div className="container-custom">
          <SectionHeading
            title="How It Works"
            subtitle="Understanding how TEEs secure your application data"
          />
          
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              className="group relative"
              variants={fadeInUp}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-secondary-100 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-secondary-900">Data Submission</h3>
                <p className="text-secondary-600">User/application submits sensitive data for processing</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="group relative"
              variants={fadeInUp}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-secondary-100 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-primary-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-secondary-900">Secure Processing</h3>
                <p className="text-secondary-600">Data enters the TEE (Enclave) where it's protected by hardware-based isolation</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="group relative"
              variants={fadeInUp}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-secondary-100 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-secondary-900">Secure Results</h3>
                <p className="text-secondary-600">Only authorized, encrypted results leave the enclave—sensitive data never exposed</p>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="mt-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-secondary-100">
              <h3 className="text-xl font-semibold mb-6 text-center text-secondary-900">TEE Security Boundary</h3>
              <div className="flex flex-col items-center space-y-6">
                <div className="text-center">
                  <div className="inline-block bg-red-50 border-2 border-red-200 rounded-xl px-6 py-3 mb-3">
                    <span className="text-red-700 font-semibold">Untrusted Environment</span>
                  </div>
                  <p className="text-sm text-secondary-600">Operating System, Cloud Provider, Malicious Actors</p>
                </div>
                <div className="w-px h-12 bg-secondary-300"></div>
                <div className="text-center">
                  <div className="inline-block bg-accent-50 border-2 border-accent-200 rounded-xl px-6 py-3 mb-3">
                    <span className="text-accent-700 font-semibold">Trusted Execution Environment</span>
                  </div>
                  <p className="text-sm text-secondary-600">Hardware-isolated, encrypted processing of sensitive data</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section">
        <div className="container-custom">
          <SectionHeading
            title="AccelCQ TEE-as-a-Service: What We Offer"
            subtitle="Comprehensive TEE solutions tailored to your organization's needs"
          />
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div 
                key={index}
                className="group relative"
                variants={fadeInUp}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                <div className="relative card card-hover h-full bg-white">
                  <div className="p-8 flex flex-col h-full">
                    <div className="bg-gradient-to-br from-primary-50 to-accent-50 p-4 rounded-2xl w-16 h-16 flex items-center justify-center text-primary-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-secondary-900 group-hover:text-primary-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-secondary-600 flex-grow leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Use Case Spotlights Section */}
      <section className="section bg-gradient-to-br from-secondary-50 to-primary-50">
        <div className="container-custom">
          <SectionHeading
            title="Use Case Spotlights"
            subtitle="See how AccelCQ's TEE-as-a-Service transforms security across industries"
          />
          
          <div className="space-y-16">
            {useCases.map((useCase, index) => (
              <motion.div 
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center mr-4">
                      {useCase.icon}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-secondary-900">{useCase.title}</h3>
                  </div>
                  <p className="text-secondary-600 text-lg leading-relaxed">{useCase.description}</p>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-secondary-100">
                      <img 
                        src={useCase.image} 
                        alt={useCase.title} 
                        className="w-full h-auto group-hover:scale-105 transition-transform duration-500" 
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud vs On-Premises Comparison */}
      <section className="section">
        <div className="container-custom">
          <SectionHeading
            title="Should You Use Cloud TEEs or Build In-House?"
            subtitle="Understanding the trade-offs between cloud and on-premises TEE implementations"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <motion.div 
              className="group relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-secondary-100">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mb-6">
                  <Cloud size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-secondary-900">Cloud TEEs</h3>
                <p className="text-secondary-600">Best for scalability, speed, and lower cost.</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="group relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-secondary-100">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-primary-500 rounded-2xl flex items-center justify-center mb-6">
                  <Server size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-secondary-900">In-House TEEs</h3>
                <p className="text-secondary-600">Best for ultra-sensitive, regulated workloads needing total data control.</p>
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="group relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
            <div className="relative bg-white rounded-2xl shadow-lg border border-secondary-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-secondary-50">
                    <tr>
                      <th className="px-8 py-6 text-left text-sm font-semibold text-secondary-900">Characteristic</th>
                      <th className="px-8 py-6 text-center text-sm font-semibold text-secondary-900">Public Cloud</th>
                      <th className="px-8 py-6 text-center text-sm font-semibold text-secondary-900">On-Prem TEE</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-secondary-200">
                    {comparisonData.map((row, index) => (
                      <tr key={index} className="hover:bg-secondary-50 transition-colors duration-200">
                        <td className="px-8 py-6 text-sm font-medium text-secondary-900">{row.characteristic}</td>
                        <td className={`px-8 py-6 text-sm text-center font-medium ${row.cloudColor}`}>{row.cloud}</td>
                        <td className={`px-8 py-6 text-sm text-center font-medium ${row.onPremColor}`}>{row.onPrem}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why choose AccelCQ */}
      <section className="section bg-gradient-to-br from-secondary-50 via-white to-primary-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-5 pointer-events-none" />
        <div className="container-custom relative z-10">
          <SectionHeading
            title="Why Choose AccelCQ?"
            subtitle="Our expertise and proven track record make us the ideal partner for your TEE journey."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {whyChooseUs.map((benefit, index) => (
              <div key={index} className="glass bg-gradient-to-br from-white/90 via-primary-50/60 to-accent-50/60 rounded-3xl p-8 shadow-xl border border-secondary-100 flex items-start gap-5">
                <CheckCircle size={28} className="text-primary-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-secondary-900 mb-2 gradient-text drop-shadow-md">{benefit.title}</h3>
                  <p className="text-secondary-700 leading-relaxed text-base md:text-lg">{benefit.description}</p>
                </div>
              </div>
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
              Ready to protect your most sensitive workloads?
            </h2>
            <p className="text-xl mb-8 text-secondary-700 max-w-2xl mx-auto">
              With AccelCQ's TEE-as-a-Service, you get end-to-end protection, compliance, and peace of mind—no matter where your data lives.
            </p>
            <p className="text-lg mb-8 text-secondary-700">
              Contact AccelCQ to get started with trusted execution environments today.
            </p>
            <a
              href="/contact"
              className="btn btn-primary text-lg px-8 py-4"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Supported Platforms Section */}
      <section className="section bg-gradient-to-b from-white via-secondary-50 to-white/90 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-10 pointer-events-none" />
        <div className="container-custom relative z-10">
          <SectionHeading
            title="Supported Platforms"
            subtitle="We work with all major confidential computing and clean room platforms"
          />
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {platforms.map((platform, index) => (
                <div key={index} className="glass bg-gradient-to-br from-white/90 via-primary-50/60 to-accent-50/60 rounded-2xl p-8 shadow-xl border border-secondary-100 flex items-center gap-5 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Database size={24} className="text-white" />
                  </div>
                  <span className="font-medium text-secondary-700 text-lg leading-snug">{platform}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TEEAsAService; 