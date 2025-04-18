
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BlogCardProps {
  title: string;
  excerpt: string;
  category?: string;
  author?: string;
  date?: string;
  imageSrc?: string;
  slug: string;
  className?: string;
}

const BlogCard = ({
  title,
  excerpt,
  category,
  author,
  date,
  imageSrc,
  slug,
  className,
}: BlogCardProps) => {
  return (
    <Link 
      to={`/blog/${slug}`}
      className={cn(
        "block rounded-xl overflow-hidden bg-white shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100",
        className
      )}
    >
      <div className="aspect-[16/9] w-full bg-gray-100 overflow-hidden">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center bg-healthcare-100">
            <span className="text-healthcare-600 font-semibold">No Image</span>
          </div>
        )}
      </div>
      
      <div className="p-6">
        {category && (
          <div className="inline-block px-3 py-1 bg-healthcare-50 text-healthcare-700 text-xs font-medium rounded-full mb-3">
            {category}
          </div>
        )}
        
        <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>
        
        <div className="flex items-center justify-between text-sm text-gray-500">
          {author && <span className="font-medium">{author}</span>}
          
          {date && (
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{date}</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
