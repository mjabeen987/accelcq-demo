import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Database, ArrowRight, Construction, CheckCircle, Target, Users, Building2 } from 'lucide-react'
import CaseStudySidebar from '../../../../components/case-study/CaseStudySidebar'

const PhaseC = () => {
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
        <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="max-w-4xl"
            >
              <motion.div variants={itemVariants} className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                  <Database className="w-6 h-6" />
                </div>
                <span className="text-blue-200">Phase C</span>
              </motion.div>
              <motion.h1 variants={itemVariants} className="text-4xl lg:text-5xl font-bold mb-6">
                Information Systems Architecture
              </motion.h1>
              <motion.p variants={itemVariants} className="text-xl text-blue-100 leading-relaxed">
                Designing the data and application architecture to support the OnEdge AI Intelligence Service platform.
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
                  Information Systems Architecture
                </h2>
                <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                  Phase C involves developing the enterprise's Information Systems Architecture, divided into Data Architecture and Application Architecture. 
                  The focus is on defining how information assets and software applications will be structured and managed to support business strategy and processes. 
                  These documents align IT infrastructure with business objectives, ensuring scalability, flexibility, and efficiency in data management and application use.
                </p>
              </motion.div>

              {/* Data Architecture Section */}
              <motion.div variants={itemVariants} className="mb-12">
                <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <Database className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-900">Data Architecture</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-neutral-900">Data Architecture Document</h4>
                          <p className="text-sm text-neutral-600">Describes how data is to be managed and structured to support business processes and objectives.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-neutral-900">Logical Data Model</h4>
                          <p className="text-sm text-neutral-600">Provides a high-level view of organizational data structures without technical implementation details.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-neutral-900">Data Entity/Business Function Matrix</h4>
                          <p className="text-sm text-neutral-600">Links data entities to business functions, helping understand data's impact.</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-neutral-900">Data Lifecycle Analysis</h4>
                          <p className="text-sm text-neutral-600">Assists in understanding how data is created, used, stored, and disposed of.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-neutral-900">Data Governance Model</h4>
                          <p className="text-sm text-neutral-600">Outlines management, maintenance, and standards for data.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-neutral-900">Data Security and Privacy Analysis</h4>
                          <p className="text-sm text-neutral-600">Ensures adherence to security and privacy policies and regulations.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Application Architecture Section */}
              <motion.div variants={itemVariants} className="mb-12">
                <div className="bg-white rounded-lg shadow-sm p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <Building2 className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-900">Application Architecture</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-neutral-900">Application Architecture Document</h4>
                          <p className="text-sm text-neutral-600">Describes major applications and their interactions.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-neutral-900">Interface Analysis</h4>
                          <p className="text-sm text-neutral-600">Identifies how different applications communicate and interact.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-neutral-900">Application Interaction Matrix</h4>
                          <p className="text-sm text-neutral-600">Shows relationships and dependencies among applications.</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-neutral-900">Application Portfolio Catalog</h4>
                          <p className="text-sm text-neutral-600">An inventory of currently used applications and their characteristics.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-neutral-900">Application Governance Model</h4>
                          <p className="text-sm text-neutral-600">Outlines standards, policies, and procedures for application management.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-neutral-900">Software Development Lifecycle Policies</h4>
                          <p className="text-sm text-neutral-600">Guides consistency and standards in application development and maintenance.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Key Deliverables Summary */}
              <motion.div variants={itemVariants} className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-neutral-900 mb-6">Key Deliverables</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Database className="w-8 h-8 text-blue-600" />
                    </div>
                    <h4 className="font-semibold text-neutral-900 mb-2">Data Models</h4>
                    <p className="text-sm text-neutral-600">Logical data models and governance frameworks</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Building2 className="w-8 h-8 text-blue-600" />
                    </div>
                    <h4 className="font-semibold text-neutral-900 mb-2">Application Portfolio</h4>
                    <p className="text-sm text-neutral-600">Application catalog and interaction patterns</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Target className="w-8 h-8 text-blue-600" />
                    </div>
                    <h4 className="font-semibold text-neutral-900 mb-2">Integration Strategy</h4>
                    <p className="text-sm text-neutral-600">System integration and interface design</p>
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
                to="/case-study/enterprise-architecture/phase-b"
                className="flex items-center text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
                Previous: Phase B - Business Architecture
              </Link>
              <Link 
                to="/case-study/enterprise-architecture/phase-d"
                className="flex items-center bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
              >
                Next: Phase D - Technology Architecture
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default PhaseC 