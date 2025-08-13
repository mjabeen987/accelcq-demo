import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Shield, ArrowRight, Construction, CheckCircle, Target, Users } from 'lucide-react'
import CaseStudySidebar from '../../../../components/case-study/CaseStudySidebar'

const PhaseG = () => {
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
        <section className="bg-gradient-to-r from-amber-600 to-amber-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="max-w-4xl"
            >
              <motion.div variants={itemVariants} className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                  <Shield className="w-6 h-6" />
                </div>
                <span className="text-amber-200">Phase G</span>
              </motion.div>
              <motion.h1 variants={itemVariants} className="text-4xl lg:text-5xl font-bold mb-6">
                Implementation Governance
              </motion.h1>
              <motion.p variants={itemVariants} className="text-xl text-amber-100 leading-relaxed">
                Establishing governance and oversight for the OnEdge AI platform implementation.
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
                  Implementation Governance
                </h2>
                <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                  Phase G focuses on providing architectural oversight of the implementation, ensuring it complies with the defined architecture, 
                  Architecture Vision, and Target Architecture. It's about the governance of the architecture's realization, ensuring it doesn't 
                  deviate from what was planned and remains aligned with strategic objectives. This phase is crucial for maintaining architectural 
                  integrity, helping track progress, manage changes, and ensure the architecture is implemented as envisioned.
                </p>
              </motion.div>

              {/* Implementation Governance Section */}
              <motion.div variants={itemVariants} className="mb-12">
                <div className="bg-white rounded-lg shadow-sm p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                      <Shield className="w-6 h-6 text-red-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-900">Governance and Oversight</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-neutral-900">Implementation Governance Plan</h4>
                          <p className="text-sm text-neutral-600">Oversees the architecture implementation as per defined standards and principles.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-neutral-900">Architecture Contract</h4>
                          <p className="text-sm text-neutral-600">A formal agreement between the development team and stakeholders, addressing how changes are managed.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-neutral-900">Compliance Assessments</h4>
                          <p className="text-sm text-neutral-600">Regular checks to ensure implementation aligns with the architecture, identifying and addressing deviations.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-neutral-900">Change Requests</h4>
                          <p className="text-sm text-neutral-600">Manages alterations to the architecture in a controlled manner.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-neutral-900">Project Status Reports</h4>
                          <p className="text-sm text-neutral-600">Provides ongoing visibility into project progress and performance.</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-neutral-900">Updated Risk Management Plan</h4>
                          <p className="text-sm text-neutral-600">Addresses new risks arising during implementation.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-neutral-900">Architecture Compliance Reports</h4>
                          <p className="text-sm text-neutral-600">Assesses whether implemented solutions conform to architectural models and standards.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-neutral-900">Lessons Learned Documentation</h4>
                          <p className="text-sm text-neutral-600">Provides insights for future architecture projects and refining the development process.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-neutral-900">Stakeholder Feedback</h4>
                          <p className="text-sm text-neutral-600">Offers insights into stakeholder satisfaction and areas for improvement.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-neutral-900">Quality Assurance Checkpoints</h4>
                          <p className="text-sm text-neutral-600">Ensures implementation maintains the desired level of quality and adheres to standards.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Key Deliverables Summary */}
              <motion.div variants={itemVariants} className="bg-gradient-to-r from-red-50 to-pink-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-neutral-900 mb-6">Key Deliverables</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-red-600" />
                    </div>
                    <h4 className="font-semibold text-neutral-900 mb-2">Governance Plan</h4>
                    <p className="text-sm text-neutral-600">Implementation oversight and compliance framework</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-red-600" />
                    </div>
                    <h4 className="font-semibold text-neutral-900 mb-2">Compliance Reports</h4>
                    <p className="text-sm text-neutral-600">Architecture compliance and quality assurance</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-red-600" />
                    </div>
                    <h4 className="font-semibold text-neutral-900 mb-2">Stakeholder Management</h4>
                    <p className="text-sm text-neutral-600">Feedback collection and change management</p>
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
                to="/case-study/enterprise-architecture/phase-f"
                className="flex items-center text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
                Previous: Phase F - Migration Planning
              </Link>
              <Link 
                to="/case-study/enterprise-architecture/phase-h"
                className="flex items-center bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
              >
                Next: Phase H - Architecture Change Management
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default PhaseG 