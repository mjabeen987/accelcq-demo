import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ 
  title, 
  subtitle,
  backgroundImage = 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
}) => {
  return (
    <div className="relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      
      {/* Stronger, darker gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-primary-900/90" />
      
      {/* Additional smooth gradient layer */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/20 via-transparent to-transparent" />
      
      {/* Pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-5" />
      
      {/* Content */}
      <div className="relative z-10 container-custom pt-32 pb-20 md:pt-40 md:pb-28 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-xl" style={{ textShadow: '0 2px 16px rgba(0,0,0,0.35)' }}>
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl text-secondary-100 max-w-4xl mx-auto leading-relaxed drop-shadow-md" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.25)' }}>
            {subtitle}
          </p>
        )}
      </div>
      
      {/* Smooth bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/95 to-transparent" />
    </div>
  );
};

export default PageHeader;