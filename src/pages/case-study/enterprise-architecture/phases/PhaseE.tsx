import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Target, ArrowRight, Construction, CheckCircle, Users, Building2, Map, TrendingUp } from 'lucide-react'
import CaseStudySidebar from '../../../../components/case-study/CaseStudySidebar'

const PhaseE = () => {
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
        <section className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="max-w-4xl"
            >
              <motion.div variants={itemVariants} className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                  <Target className="w-6 h-6" />
                </div>
                <span className="text-indigo-200">Phase E</span>
              </motion.div>
              <motion.h1 variants={itemVariants} className="text-4xl lg:text-5xl font-bold mb-6">
                Opportunities & Solutions
              </motion.h1>
              <motion.p variants={itemVariants} className="text-xl text-indigo-100 leading-relaxed">
                Identifying opportunities and defining solutions for the OnEdge AI platform transformation.
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
                  Opportunities and Solutions
                </h2>
                <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                  Phase E shifts from developing architectures to identifying and analyzing opportunities for achieving these architectures. 
                  It explores solutions to transition from the current to the desired future state. This is a pivotal phase that transforms 
                  architectural vision and theory into actionable plans, helping in decision-making, planning, and managing the transition to the new architecture.
                </p>
              </motion.div>

              {/* Opportunities and Solutions Section */}
              <motion.div variants={itemVariants} className="mb-12">
                <div className="bg-white rounded-lg shadow-sm p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                      <Target className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-900">Solution Analysis</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-neutral-900">Opportunities and Solutions Document</h4>
                          <p className="text-sm text-neutral-600">Presents various options for achieving target architectures, highlighting feasibility and impacts.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-neutral-900">Architecture Roadmap</h4>
                          <p className="text-sm text-neutral-600">A detailed plan showing how architectures will be implemented over time.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-neutral-900">Implementation and Migration Strategy</h4>
                          <p className="text-sm text-neutral-600">Lays out the approach for transitioning from current to future state, including project prioritization.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-neutral-900">Transition Architectures</h4>
                          <p className="text-sm text-neutral-600">Defines intermediate stages in architecture evolution to manage complexity and risk during transition.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-neutral-900">Business Value Assessment</h4>
                          <p className="text-sm text-neutral-600">Analyzes the business value of proposed solutions, assisting in understanding ROI and benefits realization.</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-neutral-900">Risk Assessment</h4>
                          <p className="text-sm text-neutral-600">An updated assessment of potential risks associated with the solutions and mitigation strategies.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-neutral-900">Resource Requirements</h4>
                          <p className="text-sm text-neutral-600">Outlines human, financial, and technology resources needed for the transition.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-neutral-900">Cost-Benefit Analysis</h4>
                          <p className="text-sm text-neutral-600">Evaluates the financial impacts of solutions, providing a basis for decision-making.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-neutral-900">Stakeholder Impact Analysis</h4>
                          <p className="text-sm text-neutral-600">Helps understand and manage the effects of the transition on different stakeholder groups.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-neutral-900">Implementation Governance Plan</h4>
                          <p className="text-sm text-neutral-600">Sets out the framework for managing and controlling implementation projects.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Key Deliverables Summary */}
              <motion.div variants={itemVariants} className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-neutral-900 mb-6">Key Deliverables</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Target className="w-8 h-8 text-green-600" />
                    </div>
                    <h4 className="font-semibold text-neutral-900 mb-2">Solution Options</h4>
                    <p className="text-sm text-neutral-600">Feasible solutions and implementation approaches</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Map className="w-8 h-8 text-green-600" />
                    </div>
                    <h4 className="font-semibold text-neutral-900 mb-2">Transition Roadmap</h4>
                    <p className="text-sm text-neutral-600">Implementation timeline and migration strategy</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-8 h-8 text-green-600" />
                    </div>
                    <h4 className="font-semibold text-neutral-900 mb-2">Value Assessment</h4>
                    <p className="text-sm text-neutral-600">Business value and ROI analysis</p>
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
                to="/case-study/enterprise-architecture/phase-d"
                className="flex items-center text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
                Previous: Phase D - Technology Architecture
              </Link>
              <Link 
                to="/case-study/enterprise-architecture/phase-f"
                className="flex items-center bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
              >
                Next: Phase F - Migration Planning
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default PhaseE 