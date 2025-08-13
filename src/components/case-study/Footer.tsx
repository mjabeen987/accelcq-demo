import { Link } from 'react-router-dom'
import { Building2, Mail, Linkedin, Globe } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex items-center justify-center w-10 h-10 bg-primary-600 rounded-lg">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold">AccelCQ</div>
                <div className="text-sm text-neutral-400">Enterprise Architecture Consulting</div>
              </div>
            </div>
            <p className="text-neutral-400 mb-6 max-w-md">
              Accelerating digital transformation through expert enterprise architecture consulting 
              and TOGAF-based methodology implementation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* TOGAF Phases */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              TOGAF Phases
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/case-study/enterprise-architecture/phase-a" className="text-neutral-400 hover:text-white transition-colors">
                  Phase A: Architecture Vision
                </Link>
              </li>
              <li>
                <Link to="/case-study/enterprise-architecture/phase-b" className="text-neutral-400 hover:text-white transition-colors">
                  Phase B: Business Architecture
                </Link>
              </li>
              <li>
                <Link to="/case-study/enterprise-architecture/phase-c" className="text-neutral-400 hover:text-white transition-colors">
                  Phase C: Information Systems
                </Link>
              </li>
              <li>
                <Link to="/case-study/enterprise-architecture/phase-d" className="text-neutral-400 hover:text-white transition-colors">
                  Phase D: Technology Architecture
                </Link>
              </li>
              <li>
                <Link to="/case-study/enterprise-architecture/phase-e" className="text-neutral-400 hover:text-white transition-colors">
                  Phase E: Opportunities & Solutions
                </Link>
              </li>
              <li>
                <Link to="/case-study/enterprise-architecture/phase-f" className="text-neutral-400 hover:text-white transition-colors">
                  Phase F: Migration Planning
                </Link>
              </li>
              <li>
                <Link to="/case-study/enterprise-architecture/phase-g" className="text-neutral-400 hover:text-white transition-colors">
                  Phase G: Implementation Governance
                </Link>
              </li>
              <li>
                <Link to="/case-study/enterprise-architecture/phase-h" className="text-neutral-400 hover:text-white transition-colors">
                  Phase H: Architecture Change Management
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/case-study/enterprise-architecture" className="text-neutral-400 hover:text-white transition-colors">
                  Case Study Overview
                </Link>
              </li>
              <li>
                <Link to="/contact?subject=TOGAF Enterprise Architecture&template=enterprise-architecture#contact-form" className="text-neutral-400 hover:text-white transition-colors">
                  Contact Support
                </Link>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                  Best Practices
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-400 text-sm">
              © 2024 AccelCQ Inc. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 