import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Building, 
  ArrowRight, 
  CheckCircle, 
  Target, 
  Users, 
  Building2,
  Lightbulb,
  TrendingUp
} from 'lucide-react'
import CaseStudySidebar from '../../../../components/case-study/CaseStudySidebar'

const PhaseB = () => {
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
        <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="max-w-4xl"
            >
              <motion.div variants={itemVariants} className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                  <Building className="w-6 h-6" />
                </div>
                <span className="text-green-200">Phase B</span>
              </motion.div>
              <motion.h1 variants={itemVariants} className="text-4xl lg:text-5xl font-bold mb-6">
                Business Architecture
              </motion.h1>
              <motion.p variants={itemVariants} className="text-xl text-green-100 leading-relaxed">
                Developing the business architecture that defines the business strategy, governance, organization, 
                and key business processes for the OnEdge AI Intelligence Service platform.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-12"
            >
              {/* Left Column - Overview */}
              <motion.div variants={itemVariants} className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-neutral-900 mb-4">Phase Overview</h2>
                  <p className="text-neutral-600 leading-relaxed">
                    Phase B focuses on developing the business architecture for the OnEdge AI Intelligence Service. 
                    This phase involves understanding the business strategy, governance structure, organization design, 
                    and key business processes that will support the decentralized AI platform for SMBs.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-neutral-900 mb-4">Key Objectives</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-neutral-600">Define business strategy and operating model</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-neutral-600">Establish governance framework and organization structure</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-neutral-600">Model key business processes and capabilities</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-neutral-600">Define business services and value streams</span>
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* Right Column - Key Deliverables */}
              <motion.div variants={itemVariants} className="space-y-8">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-neutral-900 mb-4">Key Deliverables</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                        <Building2 className="w-4 h-4 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-neutral-900">Business Architecture Document</h4>
                        <p className="text-sm text-neutral-600 mt-1">Comprehensive business strategy and organization design</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                        <Target className="w-4 h-4 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-neutral-900">Business Process Models</h4>
                        <p className="text-sm text-neutral-600 mt-1">Detailed process flows and business capabilities</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                        <Users className="w-4 h-4 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-neutral-900">Organization Chart</h4>
                        <p className="text-sm text-neutral-600 mt-1">Organizational structure and key stakeholders</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                        <Lightbulb className="w-4 h-4 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-neutral-900">Business Goals & Objectives</h4>
                        <p className="text-sm text-neutral-600 mt-1">Strategic objectives and success metrics</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-neutral-900 mb-4">Business Metrics</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">50K+</div>
                      <div className="text-sm text-neutral-600">Target SMBs</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">$50M</div>
                      <div className="text-sm text-neutral-600">Revenue Target</div>
                    </div>
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
                to="/case-study/enterprise-architecture/phase-a"
                className="flex items-center text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
                Previous: Phase A - Architecture Vision
              </Link>
              <Link 
                to="/case-study/enterprise-architecture/phase-c"
                className="flex items-center bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
              >
                Next: Phase C - Information Systems
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default PhaseB 