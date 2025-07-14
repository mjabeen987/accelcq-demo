import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ExternalLink } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  const toggleDropdown = (dropdownName: string) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    {
      name: 'Services',
      children: [
        { 
          name: 'Confidential Computing', 
          path: '/services/confidential-computing',
          description: 'Secure data processing in trusted environments',
          children: [
            { name: 'Secure Enclave', path: '/services/secure-enclave' },
            { name: 'Memory Encryption', path: '/services/confidential-computing/memory-encryption' },
            { name: 'Privacy-Preserving Computation', path: '/services/confidential-computing/privacy-preserving-computation' },
            { name: 'TEE-as-a-Service', path: '/services/tee-as-a-service' }
          ]
        },
        { 
          name: 'Quantum Computing', 
          path: '/services/quantum-computing',
          description: 'Next-generation quantum solutions'
        },
      ],
    },
    {
      name: 'Case Studies',
      path: '/case-studies',
      children: [
        { name: 'Quantum Computing', path: '/case-studies/quantum-computing' },
        { name: 'Confidential Computing', path: '/case-studies/confidential-computing' },
        { name: 'TOGAF Enterprise Architecture', path: '/case-studies/togaf-enterprise-architecture' },
      ],
    },
    { name: 'Blog', path: '/blog' },
    {
      name: 'Resources',
      path: '/faq',
      children: [
        { name: 'Memory Encryption FAQ', path: '/faq/memory-encryption' },
        { name: 'Trusted Execution Environments', path: '/faq/trusted-execution-environments' },
        { name: 'Quantum Algorithm Development', path: '/faq/quantum-algorithms' },
      ],
    },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-xl shadow-xl border-b border-secondary-100' 
          : 'bg-white/40 backdrop-blur-xl shadow-md'
      }`}
      style={{ boxShadow: isScrolled ? '0 4px 24px 0 rgba(30,41,59,0.10)' : '0 2px 12px 0 rgba(30,41,59,0.08)' }}
    >
      <div className="container-custom flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center group" onClick={closeMenu}>
          <div className={`rounded-xl p-2 transition-all duration-300 ${
            !isScrolled ? 'bg-white/10 backdrop-blur-sm' : 'bg-primary-50'
          } group-hover:bg-primary-100`}>
            <img 
              src="/accelcq-logo.png" 
              alt="AccelCQ LLC" 
              className="h-8 lg:h-10 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navItems.map((item, index) => 
            item.children ? (
              <div key={index} className="relative group">
                {item.path ? (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                        isActive 
                          ? 'text-primary-600 bg-primary-50' 
                          : isScrolled 
                            ? 'text-secondary-700 hover:text-primary-600 hover:bg-secondary-50' 
                            : 'text-white hover:text-primary-300 hover:bg-white/10'
                      }`
                    }
                  >
                    {item.name}
                    <ChevronDown size={16} className="ml-1 transition-transform group-hover:rotate-180" />
                  </NavLink>
                ) : (
                  <button
                    className={`flex items-center px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                      isScrolled 
                        ? 'text-secondary-700 hover:text-primary-600 hover:bg-secondary-50' 
                        : 'text-white hover:text-primary-300 hover:bg-white/10'
                    }`}
                  >
                    {item.name}
                    <ChevronDown size={16} className="ml-1 transition-transform group-hover:rotate-180" />
                  </button>
                )}
                
                {/* Dropdown Menu */}
                <div className="absolute left-0 mt-2 w-80 rounded-2xl shadow-2xl bg-white border border-secondary-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-right scale-95 group-hover:scale-100">
                  <div className="p-4">
                    {item.children.map((child, childIndex) => (
                      'children' in child && child.children ? (
                        <div key={childIndex} className="relative group/nested">
                          <NavLink
                            to={child.path}
                            className={({ isActive }) =>
                              `flex items-center justify-between p-3 rounded-xl text-sm transition-all duration-300 ${
                                isActive ? 'bg-primary-50 text-primary-600' : 'text-secondary-700 hover:bg-secondary-50'
                              }`
                            }
                          >
                            <div>
                              <div className="font-medium">{child.name}</div>
                              {child.description && (
                                <div className="text-xs text-secondary-500 mt-1">{child.description}</div>
                              )}
                            </div>
                            <ChevronDown size={14} className="rotate-[-90deg] transition-transform group-hover/nested:rotate-0" />
                          </NavLink>
                          
                          {/* Nested Dropdown */}
                          <div className="absolute left-full top-0 w-64 rounded-2xl shadow-2xl bg-white border border-secondary-100 opacity-0 invisible group-hover/nested:opacity-100 group-hover/nested:visible transition-all duration-300 transform origin-top-left scale-95 group-hover/nested:scale-100">
                            <div className="p-3">
                              {child.children.map((nestedChild: any, nestedIndex: number) => (
                                <NavLink
                                  key={nestedIndex}
                                  to={nestedChild.path}
                                  className={({ isActive }) =>
                                    `block p-3 rounded-xl text-sm transition-all duration-300 ${
                                      isActive ? 'bg-primary-50 text-primary-600' : 'text-secondary-700 hover:bg-secondary-50'
                                    }`
                                  }
                                >
                                  {nestedChild.name}
                                </NavLink>
                              ))}
                            </div>
                          </div>
                        </div>
                      ) : (
                        <NavLink
                          key={childIndex}
                          to={child.path}
                          className={({ isActive }) =>
                            `block p-3 rounded-xl text-sm transition-all duration-300 ${
                              isActive ? 'bg-primary-50 text-primary-600' : 'text-secondary-700 hover:bg-secondary-50'
                            }`
                          }
                        >
                          {child.name}
                        </NavLink>
                      )
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                    isActive 
                      ? 'text-primary-600 bg-primary-50' 
                      : isScrolled 
                        ? 'text-secondary-700 hover:text-primary-600 hover:bg-secondary-50' 
                        : 'text-white hover:text-primary-300 hover:bg-white/10'
                  }`
                }
              >
                {item.name}
              </NavLink>
            )
          )}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Link 
            to="/contact" 
            className="btn btn-primary text-sm px-6 py-2.5"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`lg:hidden p-2 rounded-xl transition-all duration-300 ${
            isScrolled 
              ? 'text-secondary-700 hover:bg-secondary-100' 
              : 'text-white hover:bg-white/10'
          }`}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-b border-secondary-100 animate-fade-in-down">
          <div className="container-custom py-6">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item, index) => 
                item.children ? (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      {item.path ? (
                        <NavLink
                          to={item.path}
                          className={({ isActive }) =>
                            `font-medium py-3 px-4 rounded-xl transition-all duration-300 ${
                              isActive ? 'text-primary-600 bg-primary-50' : 'text-secondary-700 hover:text-primary-600 hover:bg-secondary-50'
                            }`
                          }
                        >
                          {item.name}
                        </NavLink>
                      ) : (
                        <span className="font-medium py-3 px-4 text-secondary-700">
                          {item.name}
                        </span>
                      )}
                      <button 
                        className="p-2 rounded-xl text-secondary-600 hover:bg-secondary-100 transition-all duration-300"
                        onClick={() => toggleDropdown(item.name)}
                      >
                        <ChevronDown 
                          size={20} 
                          className={`transition-transform duration-300 ${openDropdown === item.name ? 'rotate-180' : ''}`} 
                        />
                      </button>
                    </div>
                    {openDropdown === item.name && (
                      <div className="ml-4 space-y-1 border-l-2 border-secondary-200 pl-4">
                        {item.children.map((child, childIndex) => (
                          'children' in child && child.children ? (
                            <div key={childIndex} className="space-y-1">
                              <div className="flex items-center justify-between">
                                <NavLink
                                  to={child.path}
                                  className={({ isActive }) =>
                                    `block py-2 px-3 rounded-xl text-sm transition-all duration-300 ${
                                      isActive ? 'text-primary-600 bg-primary-50' : 'text-secondary-600 hover:text-primary-600 hover:bg-secondary-50'
                                    }`
                                  }
                                >
                                  {child.name}
                                </NavLink>
                              </div>
                              <div className="ml-4 space-y-1 border-l border-secondary-200 pl-4">
                                {child.children.map((nestedChild: any, nestedIndex: number) => (
                                  <NavLink
                                    key={nestedIndex}
                                    to={nestedChild.path}
                                    className={({ isActive }) =>
                                      `block py-2 px-3 rounded-xl text-sm transition-all duration-300 ${
                                        isActive ? 'text-primary-600 bg-primary-50' : 'text-secondary-500 hover:text-primary-600 hover:bg-secondary-50'
                                      }`
                                    }
                                  >
                                    {nestedChild.name}
                                  </NavLink>
                                ))}
                              </div>
                            </div>
                          ) : (
                            <NavLink
                              key={childIndex}
                              to={child.path}
                              className={({ isActive }) =>
                                `block py-2 px-3 rounded-xl text-sm transition-all duration-300 ${
                                  isActive ? 'text-primary-600 bg-primary-50' : 'text-secondary-600 hover:text-primary-600 hover:bg-secondary-50'
                                }`
                              }
                            >
                              {child.name}
                            </NavLink>
                          )
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <NavLink
                    key={index}
                    to={item.path}
                    className={({ isActive }) =>
                      `font-medium py-3 px-4 rounded-xl transition-all duration-300 ${
                        isActive ? 'text-primary-600 bg-primary-50' : 'text-secondary-700 hover:text-primary-600 hover:bg-secondary-50'
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                )
              )}
              
              {/* Mobile CTA */}
              <div className="pt-4 border-t border-secondary-200">
                <Link 
                  to="/contact" 
                  className="btn btn-primary w-full justify-center"
                >
                  Get Started
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;