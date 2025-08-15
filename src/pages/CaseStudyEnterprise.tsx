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
        <div className="w-80 bg-white border-r border-slate-200 overflow-y-auto fixed left-0 top-16 md:top-20 bottom-0 z-40 shadow-lg">
          <div className="p-8">
            <div className="mb-10">
              <h2 className="text-xl font-bold text-slate-900 mb-3">
                TOGAF Case Study
              </h2>
              <p className="text-slate-600 font-medium">
                OnEdge AI Intelligence Service
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">
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
                    className="rounded-xl"
                  >
                    <Link
                      to={phase.href}
                      className={`group flex items-center p-4 rounded-xl transition-all duration-300 ${
                        isActive
                          ? 'text-blue-700 bg-blue-50 border border-blue-200 shadow-md'
                          : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                      }`}
                    >
                      <div className={`flex items-center justify-center w-10 h-10 rounded-xl mr-4 ${
                        isActive
                          ? 'bg-blue-100 text-blue-600'
                          : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200'
                      }`}>
                        <Icon size={18} />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <div className="text-sm font-semibold truncate">
                            Phase {phase.id.toUpperCase()}: {phase.name}
                          </div>

                        </div>
                        <div className="text-xs text-slate-500 truncate mt-1">
                          {phase.description}
                        </div>
                      </div>
                      
                      <ChevronRight
                        size={16}
                        className={`ml-2 flex-shrink-0 transition-transform duration-200 ${
                          isActive ? 'text-blue-600' : 'text-slate-400 group-hover:text-slate-600'
                        }`}
                      />
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-10 pt-8 border-t border-slate-200">
              <Link
                to="/contact?subject=TOGAF Enterprise Architecture&template=enterprise-architecture#contact-form"
                className="group flex items-center p-4 rounded-xl transition-all duration-300 text-slate-700 hover:text-slate-900 hover:bg-slate-50"
              >
                <div className="flex items-center justify-center w-10 h-10 bg-slate-100 text-slate-500 rounded-xl mr-4 group-hover:bg-slate-200">
                  <span className="text-sm font-semibold">?</span>
                </div>
                <div className="text-sm font-semibold">Contact & Support</div>
                <ChevronRight
                  size={16}
                  className="ml-auto text-slate-400 group-hover:text-slate-600"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="ml-80 pt-16 md:pt-20 pb-16">
          {/* Hero Section */}
          <section className="relative bg-gradient-to-br from-slate-800 via-purple-800 to-blue-800 text-white overflow-hidden">
            <div className="absolute inset-0 bg-black/10" />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-4xl mx-auto text-center"
              >
                <motion.div variants={itemVariants} className="mb-8">
                  <span className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold">
                    <Building2 className="w-4 h-4 mr-2" />
                    Enterprise Architecture Case Study
                  </span>
                </motion.div>
                
                <motion.h1 variants={itemVariants} className="text-4xl lg:text-6xl font-bold mb-8">
                  OnEdge AI Intelligence Service
                </motion.h1>
                
                <motion.p variants={itemVariants} className="text-xl lg:text-2xl text-slate-200 mb-10 leading-relaxed">
                  A comprehensive TOGAF-based enterprise architecture transformation showcasing 
                  the design and implementation of a decentralized AI platform for SMBs.
                </motion.p>
                
                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link to="/case-study/enterprise-architecture/phase-a" className="bg-white text-slate-800 hover:bg-slate-100 px-8 py-4 rounded-xl font-semibold inline-flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    Explore TOGAF Phases
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                  <Link to="/contact?subject=TOGAF Enterprise Architecture&template=enterprise-architecture#contact-form" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg px-8 py-4 rounded-xl font-semibold inline-flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1">
                    Get Started
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Key Statistics */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-4 gap-8"
              >
                <motion.div variants={itemVariants} className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Target className="w-10 h-10 text-purple-600" />
                  </div>
                  <div className="text-4xl font-bold text-slate-900 mb-2">8</div>
                  <div className="text-slate-600 font-medium">TOGAF Phases</div>
                </motion.div>

                <motion.div variants={itemVariants} className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Users className="w-10 h-10 text-blue-600" />
                  </div>
                  <div className="text-4xl font-bold text-slate-900 mb-2">50K+</div>
                  <div className="text-slate-600 font-medium">Target SMBs</div>
                </motion.div>

                <motion.div variants={itemVariants} className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <TrendingUp className="w-10 h-10 text-emerald-600" />
                  </div>
                  <div className="text-4xl font-bold text-slate-900 mb-2">300%</div>
                  <div className="text-slate-600 font-medium">Efficiency Gain</div>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Project Overview */}
          <section className="py-24 bg-gradient-to-br from-slate-50 to-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="max-w-4xl mx-auto"
              >
                <motion.div variants={itemVariants} className="text-center mb-20">
                  <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8">
                    Transforming SMB Operations with AI
                  </h2>
                  <p className="text-xl text-slate-600 leading-relaxed">
                    The OnEdge AI Intelligence Service represents a paradigm shift in how small and medium 
                    businesses leverage artificial intelligence through decentralized micro-factories and 
                    innovative technology integration.
                  </p>
                </motion.div>

                <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-8 mb-20">
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">Business Challenge</h3>
                    <ul className="space-y-4 text-slate-600">
                      <li className="flex items-start">
                        <div className="w-3 h-3 bg-purple-500 rounded-full mt-2 mr-4 flex-shrink-0" />
                        Limited access to enterprise-grade AI capabilities
                      </li>
                      <li className="flex items-start">
                        <div className="w-3 h-3 bg-purple-500 rounded-full mt-2 mr-4 flex-shrink-0" />
                        High infrastructure costs and complexity
                      </li>
                      <li className="flex items-start">
                        <div className="w-3 h-3 bg-purple-500 rounded-full mt-2 mr-4 flex-shrink-0" />
                        Lack of technical expertise for AI implementation
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Solution</h3>
                    <ul className="space-y-4 text-slate-600">
                      <li className="flex items-start">
                        <div className="w-3 h-3 bg-emerald-500 rounded-full mt-2 mr-4 flex-shrink-0" />
                        ONEDGE Micro-Factories for decentralized processing
                      </li>
                      <li className="flex items-start">
                        <div className="w-3 h-3 bg-emerald-500 rounded-full mt-2 mr-4 flex-shrink-0" />
                        NeoCortex AI engine with plug-and-play capabilities
                      </li>
                      <li className="flex items-start">
                        <div className="w-3 h-3 bg-emerald-500 rounded-full mt-2 mr-4 flex-shrink-0" />
                        KOIN cryptocurrency for seamless transactions
                      </li>
                    </ul>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="text-center">
                  <Link 
                    to="/case-study/enterprise-architecture/phase-a" 
                    className="bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-xl px-8 py-4 rounded-xl font-semibold inline-flex items-center mx-auto transition-all duration-300 transform hover:-translate-y-1"
                  >
                    Start with Phase A: Architecture Vision
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Phase Progress */}
          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div variants={itemVariants} className="text-center mb-20">
                  <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8">
                    TOGAF Implementation Progress
                  </h2>
                  <p className="text-xl text-slate-600 leading-relaxed">
                    Follow our systematic approach through all eight phases of the TOGAF Architecture Development Method.
                  </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                  {phases.map((phase) => {
                    const Icon = phase.icon;
                    return (
                      <motion.div
                        key={phase.id}
                        variants={itemVariants}
                      >
                        <Link 
                          to={phase.href}
                          className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group block border border-slate-100 hover:border-slate-200"
                        >
                          <div className="flex items-start space-x-6">
                            <div className="w-16 h-16 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                              <Icon className="w-8 h-8 text-slate-600" />
                            </div>
                            <div className="flex-1">
                              <h4 className="text-xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors mb-2">
                                Phase {phase.id.toUpperCase()}: {phase.name}
                              </h4>
                              <p className="text-slate-600 leading-relaxed">
                                {phase.description}
                              </p>
                            </div>
                            <ChevronRight className="w-6 h-6 text-slate-400 group-hover:text-purple-600 transition-colors" />
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