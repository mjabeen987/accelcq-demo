import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import SectionHeading from '../components/common/SectionHeading';

const FAQ = () => {
  const [openSection, setOpenSection] = useState<number | null>(0);

  const toggleSection = (index: number) => {
    setOpenSection(openSection === index ? null : index);
  };

  const faqSections = [
    {
      question: "Why Use AccelCQ for Memory Encryption—Even If You Have a Cloud Team?",
      content: (
        <div className="space-y-6">
          <p className="text-gray-700 leading-relaxed">
            Even if your internal cloud team is skilled, implementing memory encryption in confidential computing 
            is rarely a simple "set-and-forget" task. AccelCQ delivers specialized expertise that goes far beyond 
            basic setup and configuration.
          </p>
        </div>
      )
    },
    {
      question: "What Expertise Do You Provide Beyond Basic Setup?",
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Depth of Experience</h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              We specialize in hardware-backed memory encryption across all major clouds (Azure, AWS, Google, IBM) 
              and on-premises TEEs (Intel SGX, AMD SEV, etc.), so we anticipate and avoid pitfalls, performance 
              regressions, and misconfigurations that in-house teams may overlook.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">End-to-End Security</h4>
            <p className="text-gray-700 leading-relaxed">
              Encryption is just the foundation—secure attestation, monitoring, audit logging, and lifecycle key 
              management are essential for ongoing protection and compliance.
            </p>
          </div>
        </div>
      )
    },
    {
      question: "How Do You Handle Ongoing Compliance & Risk Management?",
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Continuous Compliance Alignment</h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              For regulated industries (healthcare, finance, biotech, etc.), compliance is a moving target. We provide 
              automated checks, reporting, and attestation tailored to HIPAA, GDPR, PCI, and more—so audits and 
              certifications don't disrupt your business.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Rapid Response</h4>
            <p className="text-gray-700 leading-relaxed">
              Proactive monitoring and threat detection—especially important as attacks evolve or new vulnerabilities 
              are discovered.
            </p>
          </div>
        </div>
      )
    },
    {
      question: "What About Operational Excellence & Future-Proofing?",
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Seamless Integration</h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              We help you optimize memory encryption for real-world workloads—balancing security, performance, and cost, 
              whether you're cloud-native or hybrid.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Feature Evolution</h4>
            <p className="text-gray-700 leading-relaxed">
              Even if the initial job seems "one-off," security and compliance requirements rarely stay static. AccelCQ 
              keeps you ahead of new cloud features (like confidential containers or next-gen TEEs) and regulatory 
              changes—future-proofing your investment.
            </p>
          </div>
        </div>
      )
    },
    {
      question: "Do You Handle Specialized Scenarios?",
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">On-Premises and Hybrid Cloud</h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              For organizations running confidential workloads in private data centers or hybrid clouds, AccelCQ 
              delivers the same level of expertise, integrating TEEs (Intel SGX, AMD SEV, ARM TrustZone) and memory 
              encryption solutions without relying on public cloud infrastructure.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Complex Multi-Cloud Deployments</h4>
            <p className="text-gray-700 leading-relaxed">
              Coordinating consistent security posture and memory encryption across multiple clouds and/or on-prem 
              environments can be challenging—we make it seamless.
            </p>
          </div>
        </div>
      )
    },
    {
      question: "What Independent Assurance & Support Do You Provide?",
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Third-Party Validation</h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              AccelCQ provides unbiased security reviews and documentation, offering assurance for your customers, 
              partners, or regulators.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Dedicated Support</h4>
            <p className="text-gray-700 leading-relaxed">
              24/7 expertise for incident response, upgrades, and troubleshooting—beyond the scope of most internal teams.
            </p>
          </div>
        </div>
      )
    },
    {
      question: "Who Needs AccelCQ Memory Encryption Services?",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Regulated Enterprises</h4>
              <p className="text-gray-700 leading-relaxed">
                Healthcare, finance, pharma, and biotech firms requiring strong, auditable security.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Data-Centric Businesses</h4>
              <p className="text-gray-700 leading-relaxed">
                Companies processing highly sensitive IP, customer, or financial data in cloud or hybrid environments.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Rapidly Growing Organizations</h4>
              <p className="text-gray-700 leading-relaxed">
                When in-house teams are stretched, or the security/compliance landscape evolves faster than they can keep up.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Proactive Security Leaders</h4>
              <p className="text-gray-700 leading-relaxed">
                Clients who see memory encryption as part of a holistic, evolving data protection strategy—not a one-off checkbox.
              </p>
            </div>
          </div>
          <div className="mt-6 p-6 bg-primary-50 rounded-lg">
            <p className="text-gray-700 leading-relaxed font-medium">
              AccelCQ isn't just a deployment partner—we are your strategic security ally, ensuring memory encryption 
              delivers real, lasting protection and peace of mind, wherever your workloads run.
            </p>
          </div>
        </div>
      )
    }
  ];

  return (
    <>
      <Helmet>
        <title>FAQ | AccelCQ LLC</title>
        <meta name="description" content="Frequently asked questions about AccelCQ's confidential computing and quantum computing services. Get answers about memory encryption, secure enclaves, and more." />
      </Helmet>

      <PageHeader 
        title="Frequently Asked Questions"
        subtitle="Get answers to common questions about AccelCQ's confidential computing and quantum computing services"
        backgroundImage="https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&h=1020&q=80"
      />

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Memory Encryption & Cloud Security"
            subtitle="Common questions about choosing AccelCQ for your memory encryption and confidential computing needs"
            alignment="center"
          />
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqSections.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors focus:outline-none focus:bg-gray-100"
                    onClick={() => toggleSection(index)}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900 pr-4">
                        {faq.question}
                      </h3>
                      {openSection === index ? (
                        <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                      )}
                    </div>
                  </button>
                  {openSection === index && (
                    <div className="px-6 py-6 bg-white border-t border-gray-200">
                      {faq.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto">
            <HelpCircle className="h-16 w-16 text-primary-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our team of confidential computing experts is here to help. Get in touch for personalized answers 
              and guidance on your specific use case.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              Contact Our Experts
              <ChevronDown className="ml-2 h-5 w-5 rotate-[-90deg]" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ; 