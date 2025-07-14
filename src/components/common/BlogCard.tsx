import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  image: string;
  author: {
    name: string;
    avatar: string;
  };
  category: string;
  slug: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ 
  title, 
  excerpt, 
  date, 
  image, 
  author, 
  category, 
  slug 
}) => {
  return (
    <article className="group relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
      <div className="relative card card-hover h-full flex flex-col bg-white">
        {/* Image */}
        <Link to={`/blog/${slug}`} className="block overflow-hidden rounded-t-2xl">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105" 
          />
        </Link>
        
        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          {/* Meta */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-semibold bg-gradient-to-r from-primary-50 to-accent-50 text-primary-600 px-3 py-1.5 rounded-full border border-primary-100">
              {category}
            </span>
            <div className="flex items-center text-secondary-500 text-sm">
              <Calendar size={14} className="mr-1.5" />
              <time dateTime={date}>{date}</time>
            </div>
          </div>
          
          {/* Title */}
          <h3 className="text-xl font-semibold mb-3 text-secondary-900 group-hover:text-primary-600 transition-colors duration-300">
            <Link to={`/blog/${slug}`}>
              {title}
            </Link>
          </h3>
          
          {/* Excerpt */}
          <p className="text-secondary-600 mb-6 flex-grow leading-relaxed">
            {excerpt}
          </p>
          
          {/* Author and CTA */}
          <div className="flex items-center justify-between pt-4 border-t border-secondary-100">
            <div className="flex items-center">
              <img 
                src={author.avatar} 
                alt={author.name} 
                className="w-8 h-8 rounded-full object-cover border-2 border-secondary-100" 
              />
              <span className="text-sm font-medium text-secondary-700 ml-3">{author.name}</span>
            </div>
            <Link 
              to={`/blog/${slug}`} 
              className="text-primary-600 hover:text-primary-700 transition-colors duration-300"
            >
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;