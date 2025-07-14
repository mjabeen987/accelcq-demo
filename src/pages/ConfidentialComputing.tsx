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
      <section className="section bg-gradient-to-b from-white via-secondary-50 to-white/90 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-10 pointer-events-none" />
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary-600 font-semibold mb-2 block">Advanced Data Protection</span>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-8 gradient-text drop-shadow-lg break-words whitespace-normal leading-tight overflow-visible">
                Protecting Data In Use
              </h2>
              <p className="text-secondary-700 mb-4 text-lg">
                Confidential Computing is the protection of data in use by performing computation in a hardware-based Trusted Execution Environment (TEE). These secure and isolated environments prevent unauthorized access or modification of applications and data while they are in use.
              </p>
              <p className="text-secondary-700 mb-4">
                While traditional security measures protect data at rest and in transit, confidential computing closes the gap by securing data during processing, ensuring complete data lifecycle protection.
              </p>
              <p className="text-secondary-700 mb-6">
                At AccelCQ, we specialize in implementing state-of-the-art confidential computing solutions tailored to your organization's specific needs and security requirements.
              </p>
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
                src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Confidential Computing" 
                className="w-full h-auto" 
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="section bg-gradient-to-br from-secondary-50 via-white to-primary-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-5 pointer-events-none" />
        <div className="container-custom relative z-10">
          <SectionHeading
            title="Our Confidential Computing Technologies"
            subtitle="Leveraging the latest hardware and software innovations to secure your data"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <motion.div 
                key={index}
                className="glass bg-gradient-to-br from-white/80 via-primary-50/60 to-accent-50/60 p-8 rounded-3xl shadow-xl border border-secondary-100 flex flex-col items-center text-center hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-100 via-white/80 to-accent-100 mb-6 shadow-lg">
                  <span className="text-primary-600 text-3xl">{tech.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 gradient-text drop-shadow-md">{tech.title}</h3>
                <p className="text-secondary-700 text-base leading-relaxed">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="section bg-gradient-to-b from-white via-secondary-50 to-white/90 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-10 pointer-events-none" />
        <div className="container-custom relative z-10">
          <SectionHeading
            title="Our Implementation Methodology"
            subtitle="A systematic approach to implementing confidential computing solutions"
            alignment="left"
          />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
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
                className="relative glass bg-gradient-to-br from-white/90 via-primary-50/60 to-accent-50/60 rounded-3xl p-8 shadow-xl border border-secondary-100"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <span className="text-5xl font-bold text-primary-100 absolute right-6 top-4 opacity-60 select-none">{step.number}</span>
                <h3 className="text-xl font-semibold mb-3 gradient-text drop-shadow-md relative z-10">{step.title}</h3>
                <p className="text-secondary-700 relative z-10">{step.description}</p>
              </motion.div>
            ))}
          </div>
          <motion.div 
            className="mt-12 glass bg-gradient-to-br from-white/90 via-primary-50/60 to-accent-50/60 border border-primary-100 rounded-3xl p-8 shadow-xl"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-primary-700 gradient-text drop-shadow-md">Our Technical Expertise</h3>
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
                  <CheckCircle size={18} className="text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-secondary-700">{tech}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="section bg-gradient-to-br from-secondary-50 via-white to-primary-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-5 pointer-events-none" />
        <div className="container-custom relative z-10">
          <SectionHeading
            title="Use Cases"
            subtitle="How our confidential computing solutions are transforming industries"
          />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {useCases.map((useCase, index) => (
              <motion.div 
                key={index}
                className="glass bg-gradient-to-br from-white/80 via-primary-50/60 to-accent-50/60 rounded-3xl shadow-xl border border-secondary-100 overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="h-56 overflow-hidden rounded-t-3xl">
                  <img 
                    src={useCase.image} 
                    alt={useCase.title} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-semibold mb-3 gradient-text drop-shadow-md">{useCase.title}</h3>
                  <p className="text-secondary-700">{useCase.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section bg-gradient-to-b from-white via-secondary-50 to-white/90 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-10 pointer-events-none" />
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              className="rounded-3xl overflow-hidden shadow-2xl border border-secondary-100 glass"
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
              <h2 className="text-4xl md:text-5xl font-extrabold mb-8 gradient-text drop-shadow-lg">AI-Powered Benefits</h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle size={20} className="text-primary-600 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-secondary-700">{benefit}</p>
                  </div>
                ))}
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
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white border border-secondary-100 rounded-3xl p-12 max-w-3xl mx-auto shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">Ready to Secure Your Data Processing?</h2>
              <p className="text-secondary-700 max-w-3xl mx-auto mb-8 text-lg">
                Contact us today to discuss how our confidential computing solutions can protect your most sensitive data.
              </p>
              <a href="/contact" className="btn btn-primary text-lg px-8 py-4">
                Schedule a Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ConfidentialComputing;