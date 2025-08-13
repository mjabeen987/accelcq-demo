import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  showLearnMore?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, link, showLearnMore = true }) => {
  return (
    <div className="group relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
      <div className="relative card card-hover h-full bg-white">
        <div className="p-8 flex flex-col h-full">
          {/* Icon */}
          <div className="relative mb-6">
            <div className="bg-gradient-to-br from-primary-50 to-accent-50 p-4 rounded-2xl w-16 h-16 flex items-center justify-center text-primary-600 group-hover:scale-110 transition-transform duration-300">
              {icon}
            </div>
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          
          {/* Content */}
          <div className="flex-grow">
            <h3 className="text-xl font-semibold mb-4 text-secondary-900 group-hover:text-primary-600 transition-colors duration-300">
              {title}
            </h3>
            <p className="text-secondary-600 leading-relaxed mb-6">
              {description}
            </p>
          </div>
          
          {/* CTA */}
          <Link 
            to={link} 
            className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-all duration-300 group/link"
          >
            <span className="mr-2">Learn more</span>
            <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;