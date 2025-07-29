import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  ArrowRight, 
  Building2, 
  Target, 
  Users, 
  TrendingUp,
  CheckCircle,
  Eye,
  Building,
  Database,
  Server,
  Map,
  Shield,
  RefreshCw
} from 'lucide-react'

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const phases = [
    {
      id: 'a',
      name: 'Architecture Vision',
      icon: Eye,
      description: 'Established the business case and scope for OnEdge AI platform transformation.',
      href: '/case-study/enterprise-architecture/phase-a'
    },
    {
      id: 'b',
      name: 'Business Architecture',
      icon: Building,
      description: 'Defined business capabilities, processes, and organizational structure.',
      href: '/case-study/enterprise-architecture/phase-b'
    },
    {
      id: 'c',
      name: 'Information Systems',
      icon: Database,
      description: 'Design data and application architecture for the AI platform.',
      href: '/case-study/enterprise-architecture/phase-c'
    },
    {
      id: 'd',
      name: 'Technology Architecture',
      icon: Server,
      description: 'Define technology infrastructure and platform components.',
      href: '/case-study/enterprise-architecture/phase-d'
    },
    {
      id: 'e',
      name: 'Opportunities & Solutions',
      icon: Target,
      description: 'Identify migration strategy and implementation roadmap.',
      href: '/case-study/enterprise-architecture/phase-e'
    },
    {
      id: 'f',
      name: 'Migration Planning',
      icon: Map,
      description: 'Develop detailed implementation and migration plans.',
      href: '/case-study/enterprise-architecture/phase-f'
    },
    {
      id: 'g',
      name: 'Implementation Governance',
      icon: Shield,
      description: 'Oversee implementation and ensure compliance.',
      href: '/case-study/enterprise-architecture/phase-g'
    },
    {
      id: 'h',
      name: 'Architecture Change Management',
      icon: RefreshCw,
      description: 'Manage ongoing changes and evolution.',
      href: '/case-study/enterprise-architecture/phase-h'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative container section-padding py-24 lg:py-32">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium">
                <Building2 className="w-4 h-4 mr-2" />
                Enterprise Architecture Case Study
              </span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-4xl lg:text-6xl font-bold mb-6">
              OnEdge AI Intelligence Service
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-xl lg:text-2xl text-primary-100 mb-8 leading-relaxed">
              A comprehensive TOGAF-based enterprise architecture transformation showcasing 
              the design and implementation of a decentralized AI platform for SMBs.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/phases/a" className="btn-secondary">
                Explore TOGAF Phases
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link to="/contact" className="btn-primary bg-white text-primary-600 hover:bg-primary-50">
                Get Started
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-16 bg-white">
        <div className="container section-padding">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            <motion.div variants={itemVariants} className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-primary-600" />
              </div>
              <div className="text-3xl font-bold text-neutral-900 mb-2">8</div>
              <div className="text-neutral-600">TOGAF Phases</div>
            </motion.div>



            <motion.div variants={itemVariants} className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-neutral-900 mb-2">50K+</div>
              <div className="text-neutral-600">Target SMBs</div>
            </motion.div>

            <motion.div variants={itemVariants} className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-neutral-900 mb-2">300%</div>
              <div className="text-neutral-600">Efficiency Gain</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20 bg-neutral-50">
        <div className="container section-padding">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-6">
                Transforming SMB Operations with AI
              </h2>
              <p className="text-lg text-neutral-600">
                The OnEdge AI Intelligence Service represents a paradigm shift in how small and medium 
                businesses leverage artificial intelligence through decentralized micro-factories and 
                innovative technology integration.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="card">
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">Business Challenge</h3>
                <ul className="space-y-2 text-neutral-600">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                    Limited access to enterprise-grade AI capabilities
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                    High infrastructure costs and complexity
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                    Lack of technical expertise for AI implementation
                  </li>
                </ul>
              </div>

              <div className="card">
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">Our Solution</h3>
                <ul className="space-y-2 text-neutral-600">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-accent-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                    ONEDGE Micro-Factories for decentralized processing
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-accent-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                    NeoCortex AI engine with plug-and-play capabilities
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-accent-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                    KOIN cryptocurrency for seamless transactions
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Link 
                to="/phases/a" 
                className="btn-primary mx-auto flex items-center w-fit"
              >
                Start with Phase A: Architecture Vision
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Phase Progress */}
      <section className="py-20 bg-white">
        <div className="container section-padding">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-6">
                TOGAF Implementation Progress
              </h2>
              <p className="text-lg text-neutral-600">
                Follow our systematic approach through all eight phases of the TOGAF Architecture Development Method.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {phases.map((phase) => {
                const Icon = phase.icon
                return (
                  <Link
                    key={phase.id}
                    to={phase.href}
                    className="card hover:shadow-md transition-all duration-200 group"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-neutral-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors">
                          Phase {phase.id.toUpperCase()}: {phase.name}
                        </h4>
                        <p className="text-sm text-neutral-600 mt-1">
                          {phase.description}
                        </p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-neutral-400 group-hover:text-primary-600 transition-colors" />
                    </div>
                  </Link>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home 