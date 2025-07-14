import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, HelpCircle, Shield, Lock, Server, CheckCircle } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import SectionHeading from '../components/common/SectionHeading';

const FAQ = () => {
  const [openQuestions, setOpenQuestions] = useState<string[]>([]);

  const toggleQuestion = (questionId: string) => {
    setOpenQuestions((prev) =>
      prev.includes(questionId)
        ? prev.filter((id) => id !== questionId)
        : [...prev, questionId]
    );
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
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
          <p className="text-secondary-700 leading-relaxed">
            Even if your internal cloud team is skilled, implementing memory encryption in confidential computing 
            is rarely a simple "set-and-forget" task. AccelCQ delivers:
          </p>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-secondary-900 mb-2">Depth of Experience</h4>
              <p className="text-secondary-700 leading-relaxed">
                We specialize in hardware-backed memory encryption across all major clouds (Azure, AWS, Google, IBM) 
                and on-premises TEEs (Intel SGX, AMD SEV, etc.), so we anticipate and avoid pitfalls, performance 
                regressions, and misconfigurations that in-house teams may overlook.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-secondary-900 mb-2">End-to-End Security</h4>
              <p className="text-secondary-700 leading-relaxed">
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
          <p className="text-secondary-700 leading-relaxed">
            For regulated industries (healthcare, finance, biotech, etc.), compliance is a moving target. AccelCQ provides:
          </p>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-secondary-900 mb-2">Continuous Compliance Alignment</h4>
              <p className="text-secondary-700 leading-relaxed">
                Automated checks, reporting, and attestation tailored to HIPAA, GDPR, PCI, and more—so audits and 
                certifications don't disrupt your business.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-secondary-900 mb-2">Rapid Response</h4>
              <p className="text-secondary-700 leading-relaxed">
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
              <h4 className="font-semibold text-secondary-900 mb-2">Seamless Integration</h4>
              <p className="text-secondary-700 leading-relaxed">
                We help you optimize memory encryption for real-world workloads—balancing security, performance, and cost, 
                whether you're cloud-native or hybrid.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-secondary-900 mb-2">Feature Evolution</h4>
              <p className="text-secondary-700 leading-relaxed">
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
              <h4 className="font-semibold text-secondary-900 mb-2">On-Premises and Hybrid Cloud</h4>
              <p className="text-secondary-700 leading-relaxed">
                For organizations running confidential workloads in private data centers or hybrid clouds, AccelCQ 
                delivers the same level of expertise, integrating TEEs (Intel SGX, AMD SEV, ARM TrustZone) and memory 
                encryption solutions without relying on public cloud infrastructure.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-secondary-900 mb-2">Complex Multi-Cloud Deployments</h4>
              <p className="text-secondary-700 leading-relaxed">
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
              <h4 className="font-semibold text-secondary-900 mb-2">Third-Party Validation</h4>
              <p className="text-secondary-700 leading-relaxed">
                AccelCQ provides unbiased security reviews and documentation, offering assurance for your customers, 
                partners, or regulators.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-secondary-900 mb-2">Dedicated Support</h4>
              <p className="text-secondary-700 leading-relaxed">
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
        <title>FAQ | AccelCQ Inc</title>
        <meta name="description" content="Frequently asked questions about AccelCQ's confidential computing, memory encryption, and quantum computing services. Learn why AccelCQ is the right choice for your security needs." />
      </Helmet>

      <PageHeader 
        title="Memory Encryption FAQ"
        subtitle="Why Choose AccelCQ for Memory Encryption?"
        backgroundImage="https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&h=1020&q=80"
      />

      {/* Main FAQ Section */}
      <section className="py-16 bg-gradient-to-br from-primary-50 via-white to-accent-50">
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
          <div className="max-w-4xl mx-auto mt-12">
            <motion.div 
              className="space-y-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {faqQuestions.map((faq, index) => (
                <motion.div 
                  key={faq.id} 
                  className="bg-white/80 border border-secondary-100 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden group relative"
                  variants={fadeIn}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <button
                    className="w-full px-8 py-6 text-left bg-gradient-to-r from-primary-50 via-white to-accent-50 hover:bg-primary-50 transition-colors focus:outline-none focus:bg-primary-50 flex items-center justify-between"
                    onClick={() => toggleQuestion(faq.id)}
                  >
                    <div className="flex items-center gap-6">
                      <span className="inline-flex items-center justify-center w-14 h-14 text-2xl text-primary-600 bg-gradient-to-br from-primary-100 via-white to-accent-100 rounded-2xl shadow group-hover:scale-110 transition-transform duration-300">
                        {faq.icon}
                      </span>
                      <span className="font-semibold text-xl text-secondary-900">
                        {faq.question}
                      </span>
                    </div>
                    <span className="ml-4 transition-transform duration-300" style={{ transform: openQuestions.includes(faq.id) ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                      <ChevronDown size={28} className={openQuestions.includes(faq.id) ? 'text-primary-500' : 'text-primary-400'} />
                    </span>
                  </button>
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={openQuestions.includes(faq.id) ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden px-10 pb-8"
                  >
                    {openQuestions.includes(faq.id) && (
                      <div className="pt-2">
                        {faq.content}
                      </div>
                    )}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Target Customers Section with Images */}
      <section className="py-16 bg-gradient-to-br from-secondary-50 to-primary-50">
        <div className="container-custom">
          <SectionHeading
            title="Who Should Use Memory Encryption Services?"
            subtitle="Organizations that benefit most from our specialized expertise"
            alignment="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 max-w-6xl mx-auto">
            {/* Example images, replace src with your own relevant images if desired */}
            {[
              {
                title: "Regulated Enterprises",
                description: "Healthcare, finance, pharma, and biotech firms requiring strong, auditable security.",
                image: "/public/4. Government In-House Data Residency & Ultra-Secure Processing.png"
              },
              {
                title: "Data-Centric Businesses",
                description: "Companies processing highly sensitive IP, customer, or financial data in cloud or hybrid environments.",
                image: "/public/3. Biotech Protecting Intellectual Property.png"
              },
              {
                title: "Organizations Facing Rapid Growth or Change",
                description: "When in-house teams are stretched, or the security/compliance landscape evolves faster than they can keep up.",
                image: "/public/2. Finance Confidential Multi-Party Computation.png"
              },
              {
                title: "Proactive Security Seekers",
                description: "Clients who see memory encryption as part of a holistic, evolving data protection strategy—not a one-off checkbox.",
                image: "/public/image.png"
              }
            ].map((customer, index) => (
              <motion.div
                key={index}
                className="bg-white/80 rounded-3xl shadow-lg border border-secondary-100 p-0 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300 overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-full h-40 overflow-hidden">
                  <img src={customer.image} alt={customer.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <h3 className="font-semibold text-secondary-900 mb-2 text-lg">{customer.title}</h3>
                  <p className="text-secondary-700 text-base">{customer.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ; 