import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Shield, Cloud, Lock, Cpu, Users, Globe, Zap, CheckCircle, ArrowRight, Server, Code, BookOpen } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import SectionHeading from '../components/common/SectionHeading';

const SecureEnclave = () => {
  const services = [
    {
      number: "1",
      title: "Confidential Computing Readiness & Assessment",
      details: [
        "Cloud Infrastructure Risk Audits: Deep-dive assessments of your cloud footprint, spanning Azure Confidential VMs, AWS Nitro Enclaves, Google Confidential VMs, and IBM Hyper Protect Virtual Servers.",
        "Regulatory Alignment: Mapping your security and compliance to HIPAA, GDPR, CCPA, and FedRAMP.",
        "Deliverables: Comprehensive risk report, readiness roadmap, and Proof-of-Concept (PoC) recommendations."
      ]
    },
    {
      number: "2", 
      title: "Enclave-Based Solution Design & Implementation",
      details: [
        "Rapid Prototyping: From ideation to pilot, we design and deploy Secure Enclave applications using tools like Intel SGX, Fortanix, OpenEnclave, and cloud-native SDKs.",
        "AI/ML in Enclaves: Deploy machine learning models securely inside Azure, AWS, or Google TEEs, ensuring sensitive training data is never exposed.",
        "Multi-Party Computation: Enable confidential analytics across organizations—ideal for healthcare, finance, and government."
      ]
    },
    {
      number: "3",
      title: "Secure AI & Federated Learning", 
      details: [
        "AI Model Training & Inference: Protect intellectual property and customer data by training and serving models inside enclaves.",
        "Federated Learning: Set up privacy-preserving AI collaborations across hospitals, banks, or partners—without sharing raw data."
      ]
    },
    {
      number: "4",
      title: "Cloud & Edge Integration",
      details: [
        "Cloud Enclave Deployments: Seamlessly deploy confidential workloads across Azure, AWS, Google Cloud, and IBM.",
        "Edge Security: Enable enclave protections at the edge using ARM TrustZone or custom hardware for IoT, 5G, and smart cities."
      ]
    },
    {
      number: "5",
      title: "Compliance Automation & Attestation",
      details: [
        "Real-Time Audit Logging: Automate compliance tasks with secure, auditable logs from within enclaves.",
        "Attestation Services: Guarantee code and data integrity throughout the workload lifecycle."
      ]
    },
    {
      number: "6",
      title: "Quantum-Ready Secure Compute",
      details: [
        "Hybrid Security Consulting: Future-proof your data with hybrid architectures that combine TEEs with post-quantum cryptography, leveraging IBM Q, Google Quantum AI, and more."
      ]
    },
    {
      number: "7",
      title: "DevSecOps for Trusted Execution Environments",
      details: [
        "CI/CD Integration: Build, test, and deploy securely with enclave-aware DevSecOps pipelines.",
        "SDK & Platform Enablement: Integrate enclave SDKs (Fortanix, Graphene, OpenEnclave) into your development process."
      ]
    },
    {
      number: "8",
      title: "Expert Training & Enablement",
      details: [
        "Developer workshops: Rapid upskilling in building enclave apps on Azure, AWS, and more.",
        "Bootcamps for architects and compliance leaders."
      ]
    }
  ];

  const platforms = [
    "Microsoft Azure Confidential VMs",
    "AWS Nitro Enclaves", 
    "Google Cloud Confidential VMs",
    "IBM Hyper Protect Virtual Servers",
    "Intel SGX, ARM TrustZone, Fortanix, OpenEnclave"
  ];

  const benefits = [
    {
      title: "End-to-End Expertise",
      description: "From assessment to production, including cross-cloud and hybrid environments."
    },
    {
      title: "Deep Domain Knowledge", 
      description: "Proven success in healthcare, finance, biotech, logistics, and beyond."
    },
    {
      title: "Accelerated Deployment",
      description: "Pre-built templates, SDKs, and automation for faster go-live."
    },
    {
      title: "Regulatory Confidence",
      description: "Automated compliance, audit-ready logs, and secure attestation."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Secure Enclave Services | AccelCQ Inc</title>
        <meta name="description" content="AccelCQ provides advanced Secure Enclave solutions leveraging Microsoft Azure, AWS, Google Cloud, IBM, and more. Protect your sensitive data, AI models, and workloads." />
      </Helmet>

      <PageHeader 
        title="Secure Enclave Services"
        subtitle="AccelCQ empowers enterprises to adopt next-generation security with advanced Secure Enclave solutions, leveraging the best of cloud providers like Microsoft Azure, AWS, Google Cloud, IBM, and more. Our offerings ensure your sensitive data, AI models, and workloads remain private, protected, and compliant—no matter where they run."
      />

      {/* What Are Secure Enclaves Section */}
      <section className="section bg-gradient-to-b from-white via-secondary-50 to-white/90 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-10 pointer-events-none" />
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-center gradient-text drop-shadow-lg">
                What Are Secure Enclaves?
              </h2>
              <div className="glass bg-gradient-to-br from-white/80 via-primary-50/60 to-accent-50/60 rounded-3xl p-10 shadow-2xl border border-secondary-100">
                <p className="text-lg md:text-xl text-secondary-700 leading-relaxed">
                  Secure Enclaves, also known as Trusted Execution Environments (TEEs), are isolated hardware areas within modern CPUs. They allow organizations to process and analyze sensitive data in the cloud—without exposing it to cloud providers, insiders, or external threats.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AccelCQ's Secure Enclave Services Section */}
      <section className="section bg-gradient-to-br from-secondary-50 via-white to-primary-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-5 pointer-events-none" />
        <div className="container-custom relative z-10">
          <SectionHeading
            title="AccelCQ's Secure Enclave Services"
            subtitle="Comprehensive solutions designed to protect your most sensitive data and workloads across all major cloud platforms."
          />

          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600/60 to-accent-600/60 rounded-3xl blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                <div className="relative glass bg-gradient-to-br from-white/90 via-primary-50/60 to-accent-50/60 rounded-3xl shadow-2xl border border-secondary-100 card-hover flex flex-col h-full">
                  <div className="p-10 flex flex-col h-full">
                    <div className="flex items-center space-x-6 mb-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary-500 via-accent-400 to-accent-500 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg ring-4 ring-primary-100/40 group-hover:ring-accent-200/60 transition-all duration-300">
                          {service.number}
                        </div>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-semibold text-secondary-900 group-hover:text-primary-600 transition-colors duration-300 gradient-text drop-shadow-md">
                        {service.title}
                      </h3>
                    </div>
                    <ul className="space-y-4 mt-2 flex-1">
                      {service.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start gap-3">
                          <span className="mt-1"><CheckCircle size={20} className="text-primary-500" /></span>
                          <span className="text-secondary-700 leading-relaxed text-base md:text-lg">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Platforms Section */}
      <section className="section bg-gradient-to-b from-white via-secondary-50 to-white/90 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-10 pointer-events-none" />
        <div className="container-custom relative z-10">
          <SectionHeading
            title="Secure Enclave Services"
            subtitle="We work with all major cloud providers and hardware platforms to ensure your solutions are flexible and future-proof."
          />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {platforms.map((platform, index) => (
                <div
                  key={index}
                  className="glass bg-gradient-to-br from-white/90 via-primary-50/60 to-accent-50/60 rounded-2xl p-8 shadow-xl border border-secondary-100 flex items-center gap-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 min-h-[110px]"
                >
                  <div className="flex items-center justify-center w-16 h-16 min-w-[4rem] min-h-[4rem] bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl shadow-lg">
                    <Cloud size={36} className="text-white" />
                  </div>
                  <span className="font-medium text-secondary-700 text-lg leading-snug flex items-center min-h-[3rem]">
                    {platform}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose AccelCQ Section */}
      <section className="section bg-gradient-to-br from-secondary-50 via-white to-primary-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-5 pointer-events-none" />
        <div className="container-custom relative z-10">
          <SectionHeading
            title="Why Choose AccelCQ?"
            subtitle="Our expertise and proven track record make us the ideal partner for your confidential computing journey."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass bg-gradient-to-br from-white/90 via-primary-50/60 to-accent-50/60 rounded-3xl p-10 shadow-2xl border border-secondary-100"
              >
                <div className="flex items-start">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center flex-shrink-0 mr-5 shadow-lg">
                    <CheckCircle size={28} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-secondary-900 mb-3 gradient-text drop-shadow-md">{benefit.title}</h3>
                    <p className="text-secondary-700 leading-relaxed text-base md:text-lg">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-primary-600 to-accent-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-10" />
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white border border-secondary-100 rounded-3xl p-12 max-w-3xl mx-auto shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">Confidential Computing is not the future—it's now.</h2>
              <p className="text-xl text-secondary-700 mb-8 max-w-3xl mx-auto">
                Partner with AccelCQ to secure your most valuable data, accelerate innovation, and lead in your industry.
              </p>
              <p className="text-lg text-secondary-700 mb-8">
                Ready to transform your security posture? Contact AccelCQ for a consultation today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="btn btn-primary text-lg px-8 py-4"
                >
                  Get Started Today
                  <ArrowRight size={20} className="ml-2" />
                </a>
                <a 
                  href="/services/confidential-computing" 
                  className="btn btn-outline text-primary-600 border-primary-200 hover:bg-primary-50"
                >
                  Explore All Services
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default SecureEnclave; 