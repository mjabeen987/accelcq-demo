import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ChevronDown, HelpCircle, Shield, Lock, Server, CheckCircle, ArrowRight } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import SectionHeading from '../components/common/SectionHeading';

const services = [
  {
    title: "Cloud Memory Encryption",
    description: [
      "Hardware-backed memory encryption for major cloud providers",
      "Secure key management and attestation",
      "Performance optimization and monitoring",
      "Compliance reporting and audit support"
    ]
  },
  {
    title: "On-Premises TEE Integration",
    description: [
      "Intel SGX and AMD SEV implementation",
      "Hardware security module integration",
      "Custom attestation solutions",
      "Hybrid cloud memory protection"
    ]
  }
];

const technologies = [
  "Intel SGX (Software Guard Extensions)",
  "AMD SEV (Secure Encrypted Virtualization)",
  "AWS Nitro Enclaves",
  "Azure Confidential Computing",
  "Google Cloud Confidential Computing",
  "IBM Cloud Data Shield",
  "ARM TrustZone Technology",
  "Custom TEE Solutions"
];

const benefits = [
  "End-to-end memory protection across cloud and on-premises environments",
  "Expert implementation and optimization of hardware-backed security",
  "Continuous compliance monitoring and reporting",
  "24/7 dedicated support and incident response",
  "Integration with existing security infrastructure",
  "Regular security assessments and updates",
  "Cost-effective scaling of secure workloads",
  "Future-proof architecture design"
];

const MemoryEncryptionFaq = () => {
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  const toggleQuestion = (questionId: string) => {
    setOpenQuestion(openQuestion === questionId ? null : questionId);
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const faqQuestions = [
    {
      id: "expertise-beyond-setup",
      question: "1. Expertise Beyond Basic Setup",
      icon: <Shield size={20} />,
      content: (
        <div className="space-y-6">
          <p className="text-gray-700 leading-relaxed">
            Even if your internal cloud team is skilled, implementing memory encryption in confidential computing 
            is rarely a simple "set-and-forget" task. AccelCQ delivers:
          </p>
          
          <div className="space-y-4">
          <div>
              <h4 className="font-semibold text-gray-900 mb-2">Depth of Experience</h4>
              <p className="text-gray-700 leading-relaxed">
              We specialize in hardware-backed memory encryption across all major clouds (Azure, AWS, Google, IBM) 
              and on-premises TEEs (Intel SGX, AMD SEV, etc.), so we anticipate and avoid pitfalls, performance 
              regressions, and misconfigurations that in-house teams may overlook.
            </p>
          </div>
            
          <div>
              <h4 className="font-semibold text-gray-900 mb-2">End-to-End Security</h4>
            <p className="text-gray-700 leading-relaxed">
              Encryption is just the foundation—secure attestation, monitoring, audit logging, and lifecycle key 
              management are essential for ongoing protection and compliance.
            </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "compliance-risk-management",
      question: "2. Ongoing Compliance & Risk Management",
      icon: <CheckCircle size={20} />,
      content: (
        <div className="space-y-6">
          <p className="text-gray-700 leading-relaxed">
            For regulated industries (healthcare, finance, biotech, etc.), compliance is a moving target. AccelCQ provides:
          </p>
          
          <div className="space-y-4">
          <div>
              <h4 className="font-semibold text-gray-900 mb-2">Continuous Compliance Alignment</h4>
              <p className="text-gray-700 leading-relaxed">
                Automated checks, reporting, and attestation tailored to HIPAA, GDPR, PCI, and more—so audits and 
              certifications don't disrupt your business.
            </p>
          </div>
            
          <div>
              <h4 className="font-semibold text-gray-900 mb-2">Rapid Response</h4>
            <p className="text-gray-700 leading-relaxed">
              Proactive monitoring and threat detection—especially important as attacks evolve or new vulnerabilities 
              are discovered.
            </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "operational-excellence",
      question: "3. Operational Excellence & Future-Proofing",
      icon: <Server size={20} />,
      content: (
        <div className="space-y-6">
          <div className="space-y-4">
          <div>
              <h4 className="font-semibold text-gray-900 mb-2">Seamless Integration</h4>
              <p className="text-gray-700 leading-relaxed">
              We help you optimize memory encryption for real-world workloads—balancing security, performance, and cost, 
              whether you're cloud-native or hybrid.
            </p>
          </div>
            
          <div>
              <h4 className="font-semibold text-gray-900 mb-2">Feature Evolution</h4>
            <p className="text-gray-700 leading-relaxed">
              Even if the initial job seems "one-off," security and compliance requirements rarely stay static. AccelCQ 
              keeps you ahead of new cloud features (like confidential containers or next-gen TEEs) and regulatory 
              changes—future-proofing your investment.
            </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "specialized-scenarios",
      question: "4. Specialized Scenarios",
      icon: <Lock size={20} />,
      content: (
        <div className="space-y-6">
          <div className="space-y-4">
          <div>
              <h4 className="font-semibold text-gray-900 mb-2">On-Premises and Hybrid Cloud</h4>
              <p className="text-gray-700 leading-relaxed">
              For organizations running confidential workloads in private data centers or hybrid clouds, AccelCQ 
              delivers the same level of expertise, integrating TEEs (Intel SGX, AMD SEV, ARM TrustZone) and memory 
              encryption solutions without relying on public cloud infrastructure.
            </p>
          </div>
            
          <div>
              <h4 className="font-semibold text-gray-900 mb-2">Complex Multi-Cloud Deployments</h4>
            <p className="text-gray-700 leading-relaxed">
              Coordinating consistent security posture and memory encryption across multiple clouds and/or on-prem 
              environments can be challenging—we make it seamless.
            </p>
          </div>
          </div>
        </div>
      )
    },
    {
      id: "independent-assurance",
      question: "5. Independent Assurance & Support",
      icon: <HelpCircle size={20} />,
      content: (
        <div className="space-y-6">
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Third-Party Validation</h4>
              <p className="text-gray-700 leading-relaxed">
                AccelCQ provides unbiased security reviews and documentation, offering assurance for your customers, 
                partners, or regulators.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Dedicated Support</h4>
              <p className="text-gray-700 leading-relaxed">
                24/7 expertise for incident response, upgrades, and troubleshooting—beyond the scope of most internal teams.
              </p>
            </div>
          </div>
        </div>
      )
    }
  ];

  const targetCustomers = [
    {
      title: "Regulated Enterprises",
      description: "Healthcare, finance, pharma, and biotech firms requiring strong, auditable security.",
      icon: <Shield size={20} />
    },
    {
      title: "Data-Centric Businesses", 
      description: "Companies processing highly sensitive IP, customer, or financial data in cloud or hybrid environments.",
      icon: <Lock size={20} />
    },
    {
      title: "Organizations Facing Rapid Growth or Change",
      description: "When in-house teams are stretched, or the security/compliance landscape evolves faster than they can keep up.",
      icon: <Server size={20} />
    },
    {
      title: "Those Seeking Proactive, Not Reactive, Security",
      description: "Clients who see memory encryption as part of a holistic, evolving data protection strategy—not a one-off checkbox.",
      icon: <CheckCircle size={20} />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Memory Encryption FAQ | AccelCQ Inc</title>
        <meta name="description" content="Frequently asked questions about AccelCQ's memory encryption services. Learn why AccelCQ is the right choice for your confidential computing and memory encryption needs." />
      </Helmet>

      <PageHeader 
        title="Memory Encryption FAQ"
        subtitle="Why Choose AccelCQ for Memory Encryption?"
        backgroundImage="https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&h=1020&q=80"
      />

      {/* Main FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
          <SectionHeading
              title="Why Choose AccelCQ for Memory Encryption?"
              subtitle="Even if you have a cloud team, here's why AccelCQ delivers specialized expertise for both cloud and on-premises scenarios"
            alignment="center"
          />
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-start space-x-4">
                <Lock className="h-8 w-8 text-primary-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Memory Encryption secures data while it's being processed—not just at rest or in transit. By encrypting 
                    data stored in server memory (RAM), we help prevent sophisticated attacks, such as physical access, 
                    memory scraping, and cold boot attacks, that can compromise sensitive information in cloud or on-prem environments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AccelCQ's Services */}
      <section className="py-16 bg-gradient-to-br from-secondary-50 via-white to-primary-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-5 pointer-events-none" />
        <div className="container-custom relative z-10">
          <SectionHeading
            title="AccelCQ's Memory Encryption Service Offerings"
            subtitle="Comprehensive memory protection solutions for enterprise workloads"
            alignment="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="glass bg-gradient-to-br from-white/90 via-primary-50/60 to-accent-50/60 rounded-3xl p-8 shadow-xl border border-secondary-100 flex flex-col h-full">
                <h3 className="text-xl font-semibold text-secondary-900 mb-4 flex items-center gradient-text drop-shadow-md">
                  <span className="bg-primary-100 text-primary-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                    {index + 1}
                  </span>
                  {service.title}
                </h3>
                <ul className="space-y-3 mt-2 flex-1">
                  {service.description.map((desc, descIndex) => (
                    <li key={descIndex} className="flex items-start gap-3">
                      <span className="mt-1"><CheckCircle size={20} className="text-primary-500" /></span>
                      <span className="text-secondary-700 leading-relaxed text-base md:text-lg">{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Supported Technologies */}
      <section className="py-16 bg-gradient-to-b from-white via-secondary-50 to-white/90 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-10 pointer-events-none" />
        <div className="container-custom relative z-10">
          <SectionHeading
            title="Supported Memory Encryption Technologies"
            subtitle="We work with all major cloud providers and memory encryption standards"
            alignment="center"
          />
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {technologies.map((tech, index) => (
                <div key={index} className="glass bg-gradient-to-br from-white/90 via-primary-50/60 to-accent-50/60 rounded-2xl p-8 shadow-xl border border-secondary-100 flex items-center gap-5 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 min-h-[90px]">
                  <div className="flex items-center justify-center w-12 h-12 min-w-[3rem] min-h-[3rem] bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl shadow-lg">
                    <Server size={28} className="text-white" />
                  </div>
                  <span className="font-medium text-secondary-700 text-lg leading-snug flex items-center min-h-[3rem]">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose AccelCQ */}
      <section className="py-16 bg-gradient-to-br from-secondary-50 via-white to-primary-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-5 pointer-events-none" />
        <div className="container-custom relative z-10">
          <SectionHeading
            title="Why Choose AccelCQ for Memory Encryption?"
            subtitle="Your trusted partner for comprehensive memory protection"
            alignment="center"
          />
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-primary-500 mt-1 flex-shrink-0" />
                  <span className="text-secondary-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-accent-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-10" />
        <div className="container-custom relative z-10 text-center">
          <div className="bg-white border border-secondary-100 rounded-3xl p-12 max-w-3xl mx-auto shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
              Secure your data where it's most vulnerable—right in memory.
            </h2>
            <p className="text-xl mb-8 text-secondary-700 max-w-2xl mx-auto">
              With AccelCQ's Memory Encryption services, your critical workloads are protected from even the most advanced threats.
            </p>
            <p className="text-lg mb-8 text-secondary-700">
              Contact AccelCQ to safeguard your sensitive data in every layer of the cloud.
            </p>
            <a
              href="/contact"
              className="btn btn-primary text-lg px-8 py-4"
            >
              Get Protected Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default MemoryEncryptionFaq; 