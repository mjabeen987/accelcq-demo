import PageHeader from '../components/common/PageHeader';
import SectionHeading from '../components/common/SectionHeading';
import { Shield, Lock, Cloud, CheckCircle, ArrowRight, Eye, Server } from 'lucide-react';

const MemoryEncryption = () => {
  const services = [
    {
      title: "End-to-End Memory Encryption Deployment",
      description: [
        "Enable and optimize hardware-level memory encryption on cloud platforms including Azure Confidential VMs (AMD SEV, Intel TDX), AWS Nitro Enclaves, Google Confidential VMs, and IBM Hyper Protect.",
        "Protect against advanced threats: Ensure data remains secure even if memory is physically accessed or dumped by a malicious actor."
      ]
    },
    {
      title: "Secure Enclave Integration",
      description: [
        "Deploy applications within secure enclaves (e.g., Intel SGX, AMD SEV, ARM TrustZone), automatically benefiting from encrypted memory regions managed by the CPU.",
        "Use enclave technology from all leading providers to guarantee the confidentiality and integrity of in-memory data."
      ]
    },
    {
      title: "Compliance & Audit-Ready Security",
      description: [
        "Automate the deployment of memory encryption to meet HIPAA, GDPR, PCI-DSS, and financial industry compliance standards.",
        "Provide audit trails and real-time verification of encrypted memory status for regulatory and internal assurance."
      ]
    },
    {
      title: "Advanced Protection for AI/ML & Data Analytics",
      description: [
        "Enable secure, encrypted processing for AI training, data analytics, and sensitive workloads.",
        "Prevent leakage of intellectual property and confidential data during real-time inference or analytics."
      ]
    },
    {
      title: "Secure Key Management Integration",
      description: [
        "Deploy and manage cryptographic keys for memory encryption using cloud-native or custom key management systems.",
        "Integrate with Azure Key Vault, AWS KMS, Google Cloud KMS, and IBM Key Protect for robust lifecycle management."
      ]
    },
    {
      title: "Consulting & Optimization",
      description: [
        "Assess your workloads for memory encryption readiness and compatibility across multiple cloud and on-premise environments.",
        "Optimize performance and cost for encrypted workloads, leveraging latest CPU and enclave technologies."
      ]
    },
    {
      title: "Continuous Monitoring & Support",
      description: [
        "24/7 monitoring of memory encryption status and threat detection.",
        "Ongoing patching, attestation, and rapid response in the event of a security anomaly."
      ]
    }
  ];

  const technologies = [
    "Microsoft Azure: Confidential VMs (AMD SEV-SNP, Intel TDX), Confidential Containers",
    "AWS: Nitro Enclaves, EC2 Nitro memory encryption",
    "Google Cloud: Confidential VMs (AMD SEV)",
    "IBM Cloud: Hyper Protect Virtual Servers (hardware memory protection)",
    "Intel SGX, AMD SEV, ARM TrustZone",
    "Fortanix, OpenEnclave, and other TEE technologies"
  ];

  const benefits = [
    "Cross-Platform Expertise: Deep experience with all leading cloud providers and memory encryption standards.",
    "Turnkey Solutions: Rapid assessment, deployment, and management for seamless integration.",
    "End-to-End Protection: Memory encryption, secure enclaves, and key management—all in one trusted solution.",
    "Proven Results: Successful deployments in highly regulated industries like healthcare, finance, and biotech."
  ];

  return (
    <div className="min-h-screen">
      <PageHeader
        title="Memory Encryption Services"
        subtitle="Advanced Memory Encryption solutions to protect sensitive data in use—right where it lives in memory"
        backgroundImage="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&h=1020&q=80"
      />

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              AccelCQ brings the next layer of cloud security to your business with advanced Memory Encryption solutions. 
              Protect sensitive data in use—right where it lives in memory—with hardware-backed encryption and secure 
              enclave technologies from all major U.S. cloud providers.
            </p>
          </div>
        </div>
      </section>

      {/* What Is Memory Encryption */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="What Is Memory Encryption?"
            subtitle=""
            alignment="center"
          />
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
    </div>
  );
};

export default MemoryEncryption; 