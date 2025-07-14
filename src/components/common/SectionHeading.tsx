import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center';
  titleClass?: string;
  subtitleClass?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  alignment = 'center',
  titleClass = '',
  subtitleClass = '',
}) => {
  return (
    <div className={`mb-16 ${alignment === 'center' ? 'text-center' : 'text-left'}`}>
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight ${titleClass}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg md:text-xl text-secondary-600 leading-relaxed max-w-4xl ${alignment === 'center' ? 'mx-auto' : ''} ${subtitleClass}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;