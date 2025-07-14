import React from 'react';
import { Linkedin, Twitter, Mail, ExternalLink } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  position: string;
  image: string;
  bio: string;
  linkedin?: string;
  twitter?: string;
  email?: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ 
  name, 
  position, 
  image, 
  bio, 
  linkedin, 
  twitter, 
  email 
}) => {
  return (
    <div className="group relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
      <div className="relative card card-hover overflow-hidden bg-white">
        {/* Image */}
        <div className="relative overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        
        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-semibold text-secondary-900 mb-2">{name}</h3>
          <p className="text-primary-600 font-medium mb-4">{position}</p>
          <p className="text-secondary-600 mb-6 text-sm leading-relaxed">{bio}</p>
          
          {/* Social Links */}
          <div className="flex space-x-3">
            {linkedin && (
              <a 
                href={linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary-100 hover:bg-primary-600 rounded-xl flex items-center justify-center text-secondary-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                aria-label={`${name}'s LinkedIn Profile`}
              >
                <Linkedin size={18} />
              </a>
            )}
            {twitter && (
              <a 
                href={twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary-100 hover:bg-primary-600 rounded-xl flex items-center justify-center text-secondary-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                aria-label={`${name}'s Twitter Profile`}
              >
                <Twitter size={18} />
              </a>
            )}
            {email && (
              <a 
                href={`mailto:${email}`} 
                className="w-10 h-10 bg-secondary-100 hover:bg-primary-600 rounded-xl flex items-center justify-center text-secondary-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                aria-label={`Email ${name}`}
              >
                <Mail size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;