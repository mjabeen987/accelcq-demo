import PageHeader from '../components/common/PageHeader';
import SectionHeading from '../components/common/SectionHeading';
import { Shield, Lock, Users, CheckCircle, ArrowRight, Eye, Database } from 'lucide-react';

const PrivacyPreservingComputation = () => {
  const services = [
    {
      title: "Encrypted Data Analytics in Secure Enclaves",
      description: [
        "Leverage Azure Confidential VMs, AWS Nitro Enclaves, Google Confidential VMs, and IBM Hyper Protect to run encrypted workloads securely.",
        "Analyze health, finance, or personally identifiable information (PII) without ever decrypting it in the cloud."
      ]
    },
    {
      title: "Multi-Party & Federated Computation",
      description: [
        "Enable collaborative analytics and AI across organizations or departments without sharing raw data.",
        "Deploy federated learning and multi-party computation (MPC) using secure enclave infrastructure and cryptography (e.g., homomorphic encryption, differential privacy)."
      ]
    },
    {
      title: "Zero Trust Data Sharing",
      description: [
        "Set up data clean rooms where multiple parties contribute data, but each party's information remains private—even during processing.",
        "Enable secure regulatory reporting and cross-entity data collaboration in finance, healthcare, and logistics."
      ]
    },
    {
      title: "Advanced Cryptographic Integration",
      description: [
        "Integrate homomorphic encryption, secure multi-party computation (SMPC), and trusted execution to create custom privacy-preserving workflows.",
        "Consult on best-fit cryptographic and enclave strategies for your industry and use case."
      ]
    },
    {
      title: "AI/ML Privacy Enablement",
      description: [
        "Train and deploy machine learning models inside enclaves or using encrypted data, protecting intellectual property and sensitive inputs/outputs.",
        "Support for frameworks like PyTorch, TensorFlow, Flower, and ONNX—optimized for secure enclaves."
      ]
    },
    {
      title: "Regulatory Compliance for Sensitive Data",
      description: [
        "Achieve and automate compliance with HIPAA, GDPR, CCPA, FedRAMP, and financial regulations—using privacy-preserving compute as your compliance backbone.",
        "Provide secure audit trails and attestation for all privacy-preserving workflows."
      ]
    },
    {
      title: "Privacy DevSecOps & Automation",
      description: [
        "Integrate privacy-preserving computation into your CI/CD pipelines, from data ingestion to analytics and reporting.",
        "Automate privacy risk detection and cryptographic key management."
      ]
    }
  ];

  const platforms = [
    "Microsoft Azure Confidential Computing (Confidential VMs, Enclaves, Data Clean Rooms)",
    "AWS Nitro Enclaves & Clean Rooms",
    "Google Cloud Confidential VMs & Clean Rooms",
    "IBM Hyper Protect Services",
    "Intel SGX, ARM TrustZone, Fortanix, OpenEnclave"
  ];

  const benefits = [
    "Cross-Cloud Expertise: Deep hands-on with all major secure enclave platforms.",
    "Cryptography Meets Engineering: Practical implementation of advanced privacy techniques—no vaporware.",
    "End-to-End Enablement: From discovery and PoC to secure production and ongoing compliance.",
    "Industry-Specific Use Cases: Healthcare, Biotech, Finance, Ecommerce, and more.",
    "Accelerated Deployment: Templates, automation, and training for rapid go-live."
  ];

  return (
    <div className="min-h-screen">
      <PageHeader
        title="Privacy-Preserving Computation Services"
        subtitle="Unlock the value of sensitive data without ever compromising privacy using advanced Privacy-Preserving Computation"
        backgroundImage="https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&h=1020&q=80"
      />

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              AccelCQ enables organizations to unlock the value of sensitive data—without ever compromising privacy. 
              Using the latest advances in Privacy-Preserving Computation, we help you process, analyze, and share data 
              securely with partners, customers, or regulators, all while maintaining strict privacy guarantees.
            </p>
          </div>
        </div>
      </section>

      {/* What Is Privacy-Preserving Computation */}
      <section className="py-16 bg-gradient-to-b from-white via-secondary-50 to-white/90 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-10 pointer-events-none" />
        <div className="container-custom relative z-10">
          <SectionHeading
            title="What Is Privacy-Preserving Computation?"
            subtitle=""
            alignment="center"
          />
          <div className="max-w-4xl mx-auto">
            <div className="glass bg-gradient-to-br from-white/90 via-primary-50/60 to-accent-50/60 rounded-2xl shadow-xl border border-secondary-100 p-8 flex items-center gap-6">
              <div className="flex items-center justify-center w-14 h-14 min-w-[3.5rem] min-h-[3.5rem] bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl shadow-lg">
                <Eye size={32} className="text-white" />
              </div>
              <p className="text-lg md:text-xl text-secondary-700 leading-relaxed mb-0">
                Privacy-Preserving Computation combines secure enclaves with advanced cryptographic techniques to ensure data remains confidential even during use. This allows you to extract insights, run analytics, or train AI models on sensitive data—without exposing raw information to the cloud, third parties, or even your own IT staff.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* AccelCQ's Services */}
      <section className="py-16 bg-gradient-to-br from-secondary-50 via-white to-primary-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-5 pointer-events-none" />
        <div className="container-custom relative z-10">
          <SectionHeading
            title="AccelCQ's Privacy-Preserving Computation Services"
            subtitle="Comprehensive privacy-first solutions for sensitive data processing"
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
      {/* Supported Platforms */}
      <section className="py-16 bg-gradient-to-b from-white via-secondary-50 to-white/90 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-10 pointer-events-none" />
        <div className="container-custom relative z-10">
          <SectionHeading
            title="Supported Platforms"
            subtitle="We work with all major confidential computing and clean room platforms"
            alignment="center"
          />
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {platforms.map((platform, index) => (
                <div key={index} className="glass bg-gradient-to-br from-white/90 via-primary-50/60 to-accent-50/60 rounded-2xl p-8 shadow-xl border border-secondary-100 flex items-center gap-5 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 min-h-[90px]">
                  <div className="flex items-center justify-center w-12 h-12 min-w-[3rem] min-h-[3rem] bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl shadow-lg">
                    <Database size={28} className="text-white" />
                  </div>
                  <span className="font-medium text-secondary-700 text-lg leading-snug flex items-center min-h-[3rem]">{platform}</span>
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
            title="Why AccelCQ for Privacy-Preserving Computation?"
            subtitle="Your trusted partner for privacy-first data solutions"
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
              Transform data risk into data value.
            </h2>
            <p className="text-xl mb-8 text-secondary-700 max-w-2xl mx-auto">
              With AccelCQ's Privacy-Preserving Computation services, you can collaborate, innovate, and grow—all while 
              keeping your most sensitive information private and secure.
            </p>
            <p className="text-lg mb-8 text-secondary-700">
              Contact AccelCQ today to enable privacy-first analytics and AI in your organization.
            </p>
            <a
              href="/contact"
              className="btn btn-primary text-lg px-8 py-4"
            >
              Enable Privacy-First Analytics
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPreservingComputation; 