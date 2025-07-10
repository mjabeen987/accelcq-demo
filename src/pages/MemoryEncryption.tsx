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
      <section className="py-16 bg-white">
        <div className="container-custom">
          <SectionHeading
            title="AccelCQ's Memory Encryption Service Offerings"
            subtitle="Comprehensive memory protection solutions for enterprise workloads"
            alignment="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="bg-primary-100 text-primary-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                    {index + 1}
                  </span>
                  {service.title}
                </h3>
                <div className="space-y-3">
                  {service.description.map((desc, descIndex) => (
                    <p key={descIndex} className="text-gray-600 leading-relaxed">
                      {desc}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Technologies */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="Supported Memory Encryption Technologies"
            subtitle="We work with all major cloud providers and memory encryption standards"
            alignment="center"
          />
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-3">
                    <Server className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                    <span className="font-medium text-gray-900">{tech}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose AccelCQ */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Why Choose AccelCQ for Memory Encryption?"
            subtitle="Your trusted partner for comprehensive memory protection"
            alignment="center"
          />
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Secure your data where it's most vulnerable—right in memory.
          </h2>
          <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
            With AccelCQ's Memory Encryption services, your critical workloads are protected from even the most advanced threats.
          </p>
          <p className="text-lg mb-8 text-primary-100">
            Contact AccelCQ to safeguard your sensitive data in every layer of the cloud.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Protected Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default MemoryEncryption; 