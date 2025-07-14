import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, HelpCircle, Shield, CheckCircle, Cloud, Server, Users } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import SectionHeading from '../components/common/SectionHeading';

const TEEFaq = () => {
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  const toggleQuestion = (questionId: string) => {
    setOpenQuestion(openQuestion === questionId ? null : questionId);
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
      id: "depth-experience-best-practices",
      question: "1. Depth of Experience & Best Practices",
      icon: <Shield size={20} />,
      content: (
        <div className="space-y-6">
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-secondary-900 mb-2">Specialized Skills</h4>
              <p className="text-secondary-700 leading-relaxed">
                TEEs require in-depth knowledge of enclave SDKs (Intel SGX, AMD SEV, ARM TrustZone), secure code design, 
                attestation, and enclave lifecycle management—beyond the reach of most generalist cloud teams.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-secondary-900 mb-2">Pitfall Avoidance</h4>
              <p className="text-secondary-700 leading-relaxed">
                We help avoid common mistakes (e.g., incorrect attestation, performance bottlenecks, privilege escalation risks) 
                that only show up with real-world experience.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "holistic-security-compliance",
      question: "2. Holistic Security & Compliance",
      icon: <CheckCircle size={20} />,
      content: (
        <div className="space-y-6">
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-secondary-900 mb-2">More Than Setup</h4>
              <p className="text-secondary-700 leading-relaxed">
                TEEs must be architected and monitored for end-to-end security—covering secure code deployment, attestation, 
                and integrity verification, plus integration with existing identity, monitoring, and key management tools.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-secondary-900 mb-2">Evolving Threats</h4>
              <p className="text-secondary-700 leading-relaxed">
                As TEE vulnerabilities and attack surfaces change, AccelCQ provides ongoing updates and proactive defenses—keeping 
                you audit-ready and resilient.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "multi-cloud-hybrid-complexity",
      question: "3. Multi-Cloud & Hybrid Complexity",
      icon: <Cloud size={20} />,
      content: (
        <div className="space-y-6">
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-secondary-900 mb-2">Seamless Orchestration</h4>
              <p className="text-secondary-700 leading-relaxed">
                Consistently deploying, updating, and managing TEEs across Azure, AWS, Google, and on-premises environments is 
                non-trivial. We unify your security posture and provide cross-platform expertise.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-secondary-900 mb-2">Performance & Cost Optimization</h4>
              <p className="text-secondary-700 leading-relaxed">
                TEE workloads require careful tuning to balance security, latency, and resource usage—we provide guidance that 
                maximizes ROI.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "on-premises-reality-check",
      question: "4. On-Premises: The Reality Check",
      icon: <Server size={20} />,
      content: (
        <div className="space-y-6">
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-secondary-900 mb-2">Higher Complexity & Cost</h4>
              <p className="text-secondary-700 leading-relaxed mb-3">
                Setting up and maintaining TEEs in your own data center is significantly more complex and expensive than 
                leveraging public cloud TEEs. It demands:
              </p>
              <ul className="list-disc list-inside text-secondary-700 space-y-1 ml-4">
                <li>Custom hardware (with enclave/TEE support)</li>
                <li>Security-hardened operating systems</li>
                <li>Ongoing firmware and microcode updates</li>
                <li>In-house secure enclave engineering skills</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-secondary-900 mb-2">Operational Overhead</h4>
              <p className="text-secondary-700 leading-relaxed">
                Continuous patching, monitoring, and secure key management are essential and resource-intensive. AccelCQ brings 
                streamlined, automated processes and the latest TEE expertise to your in-prem cloud.
              </p>
            </div>
          </div>
        </div>
      )
    }
  ];

  const targetCustomers = [
    {
      title: "Highly Regulated Industries",
      description: "Healthcare, financial services, pharma, and critical infrastructure organizations handling sensitive or regulated data.",
      icon: <Shield size={20} />
    },
    {
      title: "Companies Sharing Sensitive Data",
      description: "Any business conducting analytics, machine learning, or multi-party computation across boundaries (e.g., healthcare collaborations, financial clearinghouses, government contracts).",
      icon: <Users size={20} />
    },
    {
      title: "IP-Intensive or Security-First Organizations",
      description: "Enterprises needing strict protection for proprietary code, algorithms, or customer information.",
      icon: <Users size={20} />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Why Choose AccelCQ for Trusted Execution Environments (TEEs)? | AccelCQ Inc</title>
        <meta name="description" content="Even if you have a cloud team, here's why AccelCQ adds value for Trusted Execution Environments. Learn about our specialized TEE expertise and services." />
      </Helmet>

      <PageHeader 
        title="Why Choose AccelCQ for Trusted Execution Environments (TEEs)?"
        subtitle="Even If You Have a Cloud Team—Here's Why AccelCQ Adds Value"
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
              title="Why Choose AccelCQ for TEEs?"
              subtitle="Even if you have a cloud team, here's why AccelCQ delivers specialized TEE expertise for both cloud and on-premises scenarios"
              alignment="center"
            />
          </motion.div>
          <div className="max-w-4xl mx-auto mt-12">
            <motion.div 
              className="space-y-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {faqQuestions.map((faq, index) => (
                <motion.div 
                  key={faq.id} 
                  className="bg-gradient-to-br from-primary-100 via-white to-accent-100 border border-secondary-100 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
                  variants={fadeIn}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <button
                    className="w-full px-6 py-5 text-left bg-gradient-to-r from-primary-50 via-white to-accent-50 hover:bg-primary-50 transition-colors focus:outline-none focus:bg-primary-50 flex items-center justify-between"
                    onClick={() => toggleQuestion(faq.id)}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-primary-600 bg-primary-100 rounded-lg p-2">
                        {faq.icon}
                      </span>
                      <span className="font-semibold text-lg text-secondary-900">
                        {faq.question}
                      </span>
                    </div>
                    <span className="ml-4">
                      {openQuestion === faq.id ? (
                        <ChevronUp size={22} className="text-primary-500" />
                      ) : (
                        <ChevronDown size={22} className="text-primary-400" />
                      )}
                    </span>
                  </button>
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={openQuestion === faq.id ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden px-8 pb-6"
                  >
                    {openQuestion === faq.id && (
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

      {/* Target Customers Section */}
      <section className="py-16 bg-gradient-to-br from-secondary-50 to-primary-50">
        <div className="container-custom">
          <SectionHeading
            title="Who Should Use TEE Services?"
            subtitle="Organizations that benefit most from our specialized Trusted Execution Environment expertise"
            alignment="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
            {targetCustomers.map((customer, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-primary-100 via-white to-accent-100 rounded-2xl shadow-md border border-secondary-100 p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-primary-50 via-white/80 to-accent-50 mb-4">
                  <span className="bg-white/60 rounded-lg p-2 text-primary-600">
                    {customer.icon}
                  </span>
                </div>
                <h3 className="font-semibold text-secondary-900 mb-2 text-lg">{customer.title}</h3>
                <p className="text-secondary-700 text-base">{customer.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TEEFaq; 