import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Server, ArrowRight, Construction, CheckCircle, Target, Users, Building2, Shield, TrendingUp } from 'lucide-react'
import CaseStudySidebar from '../../../../components/case-study/CaseStudySidebar'

const PhaseD = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className="min-h-screen">
      {/* Sidebar Navigation */}
      <CaseStudySidebar />

      {/* Main Content */}
      <div className="ml-80 pt-16 md:pt-20 pb-16 bg-neutral-50">
        {/* Header Section */}
        <section className="bg-gradient-to-r from-purple-600 to-purple-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="max-w-4xl"
            >
              <motion.div variants={itemVariants} className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                  <Server className="w-6 h-6" />
                </div>
                <span className="text-purple-200">Phase D</span>
              </motion.div>
              <motion.h1 variants={itemVariants} className="text-4xl lg:text-5xl font-bold mb-6">
                Technology Architecture
              </motion.h1>
              <motion.p variants={itemVariants} className="text-xl text-purple-100 leading-relaxed">
                Defining the technology infrastructure and platform components for the OnEdge AI ecosystem.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={itemVariants} className="mb-12">
                <h2 className="text-3xl font-bold text-neutral-900 mb-6">
                  Technology Architecture
                </h2>
                <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                  Phase D focuses on defining the hardware, software, and network infrastructure needed to support core business applications. 
                  The aim is to develop a blueprint outlining the technical infrastructure for implementing business, data, and application services, 
                  considering performance, scalability, adaptability, and security. This phase is crucial for ensuring the technology infrastructure 
                  supports current operational needs and is scalable and adaptable to future changes.
                </p>
              </motion.div>

              {/* Technology Infrastructure Section */}
              <motion.div variants={itemVariants} className="mb-12">
                <div className="bg-white rounded-lg shadow-sm p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                      <Server className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-900">Technology Infrastructure</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-neutral-900">Technology Architecture Document</h4>
                          <p className="text-sm text-neutral-600">Describes the necessary technology infrastructure to support business, data, and application architectures.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-neutral-900">Technology Standards Catalog</h4>
                          <p className="text-sm text-neutral-600">Ensures consistency and interoperability of technology components.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-neutral-900">Technology Portfolio Catalog</h4>
                          <p className="text-sm text-neutral-600">Provides an inventory of current technology assets for assessment, reuse, or replacement.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-neutral-900">System/Technology Interoperability Analysis</h4>
                          <p className="text-sm text-neutral-600">Addresses how different technology components will work together.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-neutral-900">Technology Lifecycle Analysis</h4>
                          <p className="text-sm text-neutral-600">Assists in planning for upgrades, replacements, or retirement of technology components.</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-neutral-900">Technology Security Architecture</h4>
                          <p className="text-sm text-neutral-600">Details the security architecture within the technology layer, aligning with security policies.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-neutral-900">Technology Risk Assessment</h4>
                          <p className="text-sm text-neutral-600">Identifies and plans for mitigation of risks related to technology implementation and integration.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-neutral-900">Capacity and Performance Plan</h4>
                          <p className="text-sm text-neutral-600">Ensures the technology architecture can meet current and future performance and capacity needs.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-neutral-900">Technology Implementation Plan</h4>
                          <p className="text-sm text-neutral-600">Provides a roadmap for deploying technology components.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-neutral-900">Architecture Roadmap</h4>
                          <p className="text-sm text-neutral-600">Highlights the timeline and milestones for implementing technology components in alignment with business objectives.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Key Deliverables Summary */}
              <motion.div variants={itemVariants} className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-neutral-900 mb-6">Key Deliverables</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Server className="w-8 h-8 text-purple-600" />
                    </div>
                    <h4 className="font-semibold text-neutral-900 mb-2">Infrastructure Blueprint</h4>
                    <p className="text-sm text-neutral-600">Hardware, software, and network infrastructure design</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-purple-600" />
                    </div>
                    <h4 className="font-semibold text-neutral-900 mb-2">Security Architecture</h4>
                    <p className="text-sm text-neutral-600">Technology security and risk management framework</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-8 h-8 text-purple-600" />
                    </div>
                    <h4 className="font-semibold text-neutral-900 mb-2">Performance Planning</h4>
                    <p className="text-sm text-neutral-600">Capacity and performance optimization strategies</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Navigation */}
        <section className="py-12 bg-white border-t">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              <Link 
                to="/case-study/enterprise-architecture/phase-c"
                className="flex items-center text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
                Previous: Phase C - Information Systems
              </Link>
              <Link 
                to="/case-study/enterprise-architecture/phase-e"
                className="flex items-center bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
              >
                Next: Phase E - Opportunities & Solutions
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default PhaseD 