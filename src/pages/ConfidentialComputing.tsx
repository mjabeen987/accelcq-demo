import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Shield, Lock, Database, Server, CheckCircle } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import SectionHeading from '../components/common/SectionHeading';

const ConfidentialComputing = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Technologies list
  const technologies = [
    {
      icon: <Shield size={24} />,
      title: 'Secure Enclaves',
      description: 'Hardware-based isolated execution environments that protect data in use from privileged access.'
    },
    {
      icon: <Lock size={24} />,
      title: 'Privacy-Preserving Computation',
      description: 'Process sensitive data while maintaining privacy guarantees through advanced cryptographic techniques.'
    },
    {
      icon: <Database size={24} />,
      title: 'Memory Encryption',
      description: 'Encryption of data in memory to protect against physical access attacks and memory dumps.'
    },
    {
      icon: <Server size={24} />,
      title: 'Trusted Execution Environments',
      description: 'Isolated environments for running applications that provide confidentiality and integrity guarantees.'
    }
  ];

  // Use cases
  const useCases = [
    {
      title: 'Financial Services',
      description: 'Protect sensitive financial data during processing, enabling secure multi-party analytics while maintaining regulatory compliance.',
      image: 'https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      title: 'Healthcare',
      description: 'Process patient data securely for research and analytics while preserving privacy and meeting HIPAA requirements.',
      image: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      title: 'Cloud Computing',
      description: 'Enable secure processing of sensitive data in public cloud environments with cryptographic guarantees.',
      image: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];

  // Benefits
  const benefits = [
    'Secure AI model training and inference without exposing sensitive data',
    'Protect proprietary AI algorithms and machine learning models from theft',
    'Enable privacy-preserving AI across multiple organizations and datasets',
    'Secure federated learning while maintaining data sovereignty',
    'Process sensitive training data for AI/ML without compromising privacy',
    'Deploy confidential AI inference for healthcare, finance, and regulated industries'
  ];

  return (
    <>
      <Helmet>
        <title>Confidential Computing | AccelCQ Inc</title>
        <meta name="description" content="AccelCQ's confidential computing solutions protect your most sensitive data during processing, enabling secure computation in untrusted environments." />
      </Helmet>

      <PageHeader 
        title="Confidential Computing"
        subtitle="Secure your most sensitive data during processing with hardware-based isolation and encryption"
        backgroundImage="https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      {/* Overview Section */}
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
              <span className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-6">
                Advanced Data Protection
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-slate-900">
                Protecting Data In Use
              </h2>
              <div className="space-y-6">
                <p className="text-slate-600 text-lg leading-relaxed">
                  Confidential Computing is the protection of data in use by performing computation in a hardware-based Trusted Execution Environment (TEE). These secure and isolated environments prevent unauthorized access or modification of applications and data while they are in use.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  While traditional security measures protect data at rest and in transit, confidential computing closes the gap by securing data during processing, ensuring complete data lifecycle protection.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  At AccelCQ, we specialize in implementing state-of-the-art confidential computing solutions tailored to your organization's specific needs and security requirements.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="rounded-2xl overflow-hidden shadow-2xl"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img 
                src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Confidential Computing" 
                className="w-full h-auto" 
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Our Confidential Computing Technologies
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Leveraging the latest hardware and software innovations to secure your data
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <motion.div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-slate-100"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{tech.title}</h3>
                <p className="text-slate-600 leading-relaxed">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Our Implementation Methodology
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              A systematic approach to implementing confidential computing solutions
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                number: '01',
                title: 'Assessment & Architecture',
                description: 'We begin by thoroughly assessing your existing infrastructure, data flows, and security requirements to design an optimal confidential computing architecture.'
              },
              {
                number: '02',
                title: 'Secure Implementation',
                description: 'Our expert team implements the solution using industry-leading hardware and software technologies, ensuring seamless integration with your existing systems.'
              },
              {
                number: '03',
                title: 'Validation & Monitoring',
                description: 'We rigorously validate the implementation and establish ongoing monitoring to ensure continued security and performance.'
              }
            ].map((step, index) => (
              <motion.div 
                key={index}
                className="relative border border-slate-200 rounded-2xl p-8 bg-white shadow-lg hover:shadow-xl transition-all duration-300"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <span className="text-6xl font-bold text-slate-100 absolute right-4 top-2">{step.number}</span>
                <h3 className="text-xl font-bold mb-4 relative z-10 text-slate-900">{step.title}</h3>
                <p className="text-slate-600 relative z-10 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="mt-16 bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-200 rounded-2xl p-8 shadow-lg"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-purple-700">Our Technical Expertise</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                'Intel SGX & TDX',
                'AMD SEV',
                'ARM TrustZone',
                'Microsoft Azure Confidential Computing',
                'AWS Nitro Enclaves',
                'Google Confidential Computing',
                'Homomorphic Encryption',
                'Secure Multi-party Computation',
                'Confidential Containers'
              ].map((tech, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle size={18} className="text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">{tech}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Use Cases
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              How our confidential computing solutions are transforming industries
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-slate-100"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={useCase.image} 
                    alt={useCase.title} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-4 text-slate-900">{useCase.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{useCase.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              className="rounded-2xl overflow-hidden shadow-2xl"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Confidential Computing Benefits" 
                className="w-full h-auto" 
              />
            </motion.div>
            
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-slate-900">AI-Powered Benefits</h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle size={20} className="text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-slate-700 leading-relaxed">{benefit}</p>
                  </div>
                ))}
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
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Ready to Secure Your Data Processing?</h2>
            <p className="text-blue-100 max-w-4xl mx-auto mb-10 text-xl leading-relaxed">
              Contact us today to discuss how our confidential computing solutions can protect your most sensitive data.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center px-10 py-5 bg-white text-purple-600 font-bold rounded-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300 text-lg"
            >
              Schedule a Consultation
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ConfidentialComputing;