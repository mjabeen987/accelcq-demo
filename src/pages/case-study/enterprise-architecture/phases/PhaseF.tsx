import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Map, ArrowRight, Construction, CheckCircle, Target, Users, Shield } from 'lucide-react'
import CaseStudySidebar from '../../../../components/case-study/CaseStudySidebar'

const PhaseF = () => {
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
        <section className="bg-gradient-to-r from-teal-600 to-teal-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="max-w-4xl"
            >
              <motion.div variants={itemVariants} className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                  <Map className="w-6 h-6" />
                </div>
                <span className="text-teal-200">Phase F</span>
              </motion.div>
              <motion.h1 variants={itemVariants} className="text-4xl lg:text-5xl font-bold mb-6">
                Migration Planning
              </motion.h1>
              <motion.p variants={itemVariants} className="text-xl text-teal-100 leading-relaxed">
                Planning the detailed migration and implementation strategy for the OnEdge AI platform.
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
                  Migration Planning
                </h2>
                <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                  Phase F is dedicated to creating a detailed plan to move from the current architecture to the target architecture. 
                  This involves organizing implementation projects, planning resource allocation, and scheduling activities to ensure a smooth transition. 
                  The main goal is to prioritize and sequence projects to manage risk, maximize benefits, and minimize impact on ongoing operations. 
                  This phase translates strategic plans into executable projects.
                </p>
              </motion.div>

              {/* Migration Planning Section */}
              <motion.div variants={itemVariants} className="mb-12">
                <div className="bg-white rounded-lg shadow-sm p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                      <Map className="w-6 h-6 text-orange-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-900">Implementation Planning</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-neutral-900">Migration Plan</h4>
                          <p className="text-sm text-neutral-600">A comprehensive roadmap for implementation, including timelines, resources, and dependencies.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-neutral-900">Project Portfolio</h4>
                          <p className="text-sm text-neutral-600">Lists all projects required for migration, their objectives, and contribution to the target architecture.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-neutral-900">Implementation and Migration Strategy</h4>
                          <p className="text-sm text-neutral-600">A refined strategy focusing on practical aspects of implementation, including change management.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-neutral-900">Resource Allocation Plan</h4>
                          <p className="text-sm text-neutral-600">Ensures necessary resources are appropriately distributed for effective implementation.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-neutral-900">Implementation Governance Model</h4>
                          <p className="text-sm text-neutral-600">Sets up structures and processes to oversee and guide implementation projects.</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-neutral-900">Change Management Plan</h4>
                          <p className="text-sm text-neutral-600">Addresses how changes will be communicated and managed to minimize disruption.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-neutral-900">Transition Architectures (Detailed)</h4>
                          <p className="text-sm text-neutral-600">Provides clear milestones and stages within the overall migration.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-neutral-900">Risk Management Plan</h4>
                          <p className="text-sm text-neutral-600">An updated plan for managing risks during migration.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-neutral-900">Stakeholder Communication Plan</h4>
                          <p className="text-sm text-neutral-600">Ensures stakeholders are kept informed and involved.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-neutral-900">Detailed Implementation Schedule</h4>
                          <p className="text-sm text-neutral-600">Provides a timeline for activities, aiding coordination and tracking progress.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Key Deliverables Summary */}
              <motion.div variants={itemVariants} className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-neutral-900 mb-6">Key Deliverables</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Map className="w-8 h-8 text-orange-600" />
                    </div>
                    <h4 className="font-semibold text-neutral-900 mb-2">Migration Plan</h4>
                    <p className="text-sm text-neutral-600">Comprehensive implementation roadmap and timeline</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-orange-600" />
                    </div>
                    <h4 className="font-semibold text-neutral-900 mb-2">Project Portfolio</h4>
                    <p className="text-sm text-neutral-600">Organized project list with objectives and dependencies</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-orange-600" />
                    </div>
                    <h4 className="font-semibold text-neutral-900 mb-2">Governance Model</h4>
                    <p className="text-sm text-neutral-600">Implementation oversight and control framework</p>
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
                to="/case-study/enterprise-architecture/phase-e"
                className="flex items-center text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
                Previous: Phase E - Opportunities & Solutions
              </Link>
              <Link 
                to="/case-study/enterprise-architecture/phase-g"
                className="flex items-center bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
              >
                Next: Phase G - Implementation Governance
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default PhaseF 