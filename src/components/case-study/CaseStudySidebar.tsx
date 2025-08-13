import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { 
  Eye,
  Building,
  Database,
  Server,
  Target,
  Map,
  Shield,
  RefreshCw,
  ChevronRight
} from 'lucide-react'

const CaseStudySidebar = () => {
  const location = useLocation();

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
    <div className="w-80 bg-white border-r border-neutral-200 overflow-y-auto fixed left-0 top-16 md:top-20 bottom-0 z-40">
      <div className="p-6">
        <div className="mb-8">
          <Link to="/case-studies/togaf-enterprise-architecture" className="block">
            <h2 className="text-lg font-semibold text-neutral-900 mb-2">
              TOGAF Case Study
            </h2>
            <p className="text-sm text-neutral-600">
              OnEdge AI Intelligence Service
            </p>
          </Link>
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
  );
};

export default CaseStudySidebar; 