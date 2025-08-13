import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { RefreshCw, ArrowRight, Construction, CheckCircle, Target, Users, TrendingUp } from 'lucide-react'
import CaseStudySidebar from '../../../../components/case-study/CaseStudySidebar'

const PhaseH = () => {
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
        <section className="bg-gradient-to-r from-rose-600 to-rose-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="max-w-4xl"
            >
              <motion.div variants={itemVariants} className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                  <RefreshCw className="w-6 h-6" />
                </div>
                <span className="text-rose-200">Phase H</span>
              </motion.div>
              <motion.h1 variants={itemVariants} className="text-4xl lg:text-5xl font-bold mb-6">
                Architecture Change Management
              </motion.h1>
              <motion.p variants={itemVariants} className="text-xl text-rose-100 leading-relaxed">
                Managing ongoing changes and evolution of the OnEdge AI platform architecture.
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
                  Architecture Change Management
                </h2>
                <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                  Phase H deals with the processes for managing changes to the new architecture. This phase ensures the architecture can evolve 
                  in response to changing business needs and technological advancements. It involves continuous monitoring and a feedback loop 
                  for proactive adjustments. This phase is critical for maintaining the architecture's long-term viability and relevance, 
                  focusing on its adaptability.
                </p>
              </motion.div>

              {/* Change Management Section */}
              <motion.div variants={itemVariants} className="mb-12">
                <div className="bg-white rounded-lg shadow-sm p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                      <RefreshCw className="w-6 h-6 text-indigo-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-900">Continuous Evolution</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-neutral-900">Architecture Change Management Plan</h4>
                          <p className="text-sm text-neutral-600">Guides the process for identifying, assessing, and implementing changes in the architecture.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-neutral-900">Change Requests</h4>
                          <p className="text-sm text-neutral-600">Manages proposed modifications to the architecture, ensuring alignment with strategic objectives.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-neutral-900">Architecture Update Assessments</h4>
                          <p className="text-sm text-neutral-600">Assesses the current architecture against new business requirements to ensure relevance.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-neutral-900">Technology Disruption Analysis</h4>
                          <p className="text-sm text-neutral-600">Identifies new technological trends and opportunities for innovation within the architecture.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-neutral-900">Business Process Impact Analysis</h4>
                          <p className="text-sm text-neutral-600">Helps understand the implications of architectural changes on business operations and strategies.</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-neutral-900">Architecture Performance Reports</h4>
                          <p className="text-sm text-neutral-600">Evaluates the effectiveness of the architecture in meeting business goals post-implementation.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-neutral-900">Lessons Learned Documentation</h4>
                          <p className="text-sm text-neutral-600">Provides valuable feedback for future architecture projects.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-neutral-900">Compliance Review Reports</h4>
                          <p className="text-sm text-neutral-600">Regular reviews of architecture compliance post-implementation.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-neutral-900">Revised Risk Management Plan</h4>
                          <p className="text-sm text-neutral-600">Manages risks related to the implementation of changes.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-neutral-900">Stakeholder Feedback and Surveys</h4>
                          <p className="text-sm text-neutral-600">Provides insights into stakeholder satisfaction and areas for improvement with changes.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Key Deliverables Summary */}
              <motion.div variants={itemVariants} className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-neutral-900 mb-6">Key Deliverables</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <RefreshCw className="w-8 h-8 text-indigo-600" />
                    </div>
                    <h4 className="font-semibold text-neutral-900 mb-2">Change Management</h4>
                    <p className="text-sm text-neutral-600">Processes for managing architectural evolution</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-8 h-8 text-indigo-600" />
                    </div>
                    <h4 className="font-semibold text-neutral-900 mb-2">Performance Monitoring</h4>
                    <p className="text-sm text-neutral-600">Architecture effectiveness and business alignment</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-indigo-600" />
                    </div>
                    <h4 className="font-semibold text-neutral-900 mb-2">Continuous Feedback</h4>
                    <p className="text-sm text-neutral-600">Stakeholder input and lessons learned</p>
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
                to="/case-study/enterprise-architecture/phase-g"
                className="flex items-center text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
                Previous: Phase G - Implementation Governance
              </Link>
              <Link 
                to="/case-studies/togaf-enterprise-architecture"
                className="flex items-center bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
              >
                Back to Case Study Overview
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default PhaseH 