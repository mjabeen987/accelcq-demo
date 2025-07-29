import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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
  RefreshCw,
  ChevronRight
} from 'lucide-react';
import { useLocation } from 'react-router-dom';

const CaseStudyEnterprise = () => {
  const location = useLocation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const phases = [
    {
      id: 'a',
      name: 'Architecture Vision',
      description: 'Preliminary Phase',
      icon: Eye,
      href: '/case-study/enterprise-architecture/phase-a',
    },
    {
      id: 'b',
      name: 'Business Architecture',
      description: 'Business Strategy',
      icon: Building,
      href: '/case-study/enterprise-architecture/phase-b',
    },
    {
      id: 'c',
      name: 'Information Systems',
      description: 'Data & Application',
      icon: Database,
      href: '/case-study/enterprise-architecture/phase-c',
    },
    {
      id: 'd',
      name: 'Technology Architecture',
      description: 'Technology Platform',
      icon: Server,
      href: '/case-study/enterprise-architecture/phase-d',
    },
    {
      id: 'e',
      name: 'Opportunities & Solutions',
      description: 'Migration Strategy',
      icon: Target,
      href: '/case-study/enterprise-architecture/phase-e',
    },
    {
      id: 'f',
      name: 'Migration Planning',
      description: 'Implementation Plan',
      icon: Map,
      href: '/case-study/enterprise-architecture/phase-f',
    },
    {
      id: 'g',
      name: 'Implementation Governance',
      description: 'Project Management',
      icon: Shield,
      href: '/case-study/enterprise-architecture/phase-g',
    },
    {
      id: 'h',
      name: 'Architecture Change Management',
      description: 'Continuous Evolution',
      icon: RefreshCw,
      href: '/case-study/enterprise-architecture/phase-h',
    },
  ];

  return (
    <>
      <Helmet>
        <title>TOGAF Enterprise Architecture Case Study | AccelCQ Inc</title>
        <meta name="description" content="Interactive TOGAF case study showcasing OnEdge AI Intelligence Service transformation using enterprise architecture principles and best practices." />
      </Helmet>

      <div className="min-h-screen">
        {/* Sidebar Navigation */}
        <div className="w-80 bg-white border-r border-neutral-200 overflow-y-auto fixed left-0 top-16 md:top-20 bottom-0 z-40">
          <div className="p-6">
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-neutral-900 mb-2">
                TOGAF Case Study
              </h2>
              <p className="text-sm text-neutral-600">
                OnEdge AI Intelligence Service
              </p>
            </div>

            <div className="space-y-1">
              <h3 className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-3">
                Architecture Development Method
              </h3>
              
              {phases.map((phase) => {
                const Icon = phase.icon;
                const isActive = location.pathname === phase.href;
                
                return (
                  <motion.div
                    key={phase.id}
                    initial={false}
                    animate={{
                      backgroundColor: isActive ? '#f0f9ff' : 'transparent',
                    }}
                    transition={{ duration: 0.2 }}
                    className="rounded-lg"
                  >
                    <Link
                      to={phase.href}
                      className={`group flex items-center p-3 rounded-lg transition-all duration-200 ${
                        isActive
                          ? 'text-primary-700 bg-primary-50 border border-primary-200'
                          : 'text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50'
                      }`}
                    >
                      <div className={`flex items-center justify-center w-8 h-8 rounded-lg mr-3 ${
                        isActive
                          ? 'bg-primary-100 text-primary-600'
                          : 'bg-neutral-100 text-neutral-500 group-hover:bg-neutral-200'
                      }`}>
                        <Icon size={16} />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <div className="text-sm font-medium truncate">
                            Phase {phase.id.toUpperCase()}: {phase.name}
                          </div>

                        </div>
                        <div className="text-xs text-neutral-500 truncate">
                          {phase.description}
                        </div>
                      </div>
                      
                      <ChevronRight
                        size={16}
                        className={`ml-2 flex-shrink-0 transition-transform duration-200 ${
                          isActive ? 'text-primary-600' : 'text-neutral-400 group-hover:text-neutral-600'
                        }`}
                      />
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-200">
              <Link
                to="/contact?subject=TOGAF Enterprise Architecture&template=enterprise-architecture#contact-form"
                className="group flex items-center p-3 rounded-lg transition-all duration-200 text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50"
              >
                <div className="flex items-center justify-center w-8 h-8 bg-neutral-100 text-neutral-500 rounded-lg mr-3 group-hover:bg-neutral-200">
                  <span className="text-sm font-medium">?</span>
                </div>
                <div className="text-sm font-medium">Contact & Support</div>
                <ChevronRight
                  size={16}
                  className="ml-auto text-neutral-400 group-hover:text-neutral-600"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="ml-80 pt-16 md:pt-20 pb-16">
          {/* Hero Section */}
          <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden">
            <div className="absolute inset-0 bg-black/10" />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
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
                  <Link to="/case-study/enterprise-architecture/phase-a" className="bg-white text-primary-600 hover:bg-primary-50 px-6 py-3 rounded-lg font-medium inline-flex items-center justify-center transition-colors">
                    Explore TOGAF Phases
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                  <Link to="/contact?subject=TOGAF Enterprise Architecture&template=enterprise-architecture#contact-form" className="bg-primary-500 text-white hover:bg-primary-400 px-6 py-3 rounded-lg font-medium inline-flex items-center justify-center transition-colors">
                    Get Started
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Key Statistics */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-blue-600" />
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
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  <div className="bg-white rounded-lg p-6 shadow-sm">
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

                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h3 className="text-xl font-semibold text-neutral-900 mb-4">Our Solution</h3>
                    <ul className="space-y-2 text-neutral-600">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                        ONEDGE Micro-Factories for decentralized processing
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                        NeoCortex AI engine with plug-and-play capabilities
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                        KOIN cryptocurrency for seamless transactions
                      </li>
                    </ul>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Link 
                    to="/case-study/enterprise-architecture/phase-a" 
                    className="bg-primary-600 text-white hover:bg-primary-700 px-6 py-3 rounded-lg font-medium inline-flex items-center mx-auto transition-colors"
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
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                    const Icon = phase.icon;
                    return (
                      <motion.div
                        key={phase.id}
                        variants={itemVariants}
                      >
                        <Link 
                          to={phase.href}
                          className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-200 group block"
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
                            <ChevronRight className="w-5 h-5 text-neutral-400 group-hover:text-primary-600 transition-colors" />
                          </div>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default CaseStudyEnterprise; 