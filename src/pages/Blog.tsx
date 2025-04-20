
import React from 'react';
import { Search } from 'lucide-react';
import MainLayout from '@/components/layout/MainLayout';
import BlogCard from '@/components/ui/BlogCard';
import { Button } from '@/components/ui/button';

const blogPosts = [
  {
    title: 'Understanding Diabetes: Symptoms, Causes, and Prevention',
    excerpt: 'Learn about the common symptoms of diabetes, what causes it, and how you can prevent this condition through lifestyle changes.',
    category: 'Health',
    author: 'Dr. Rajesh Kumar',
    date: 'April 10, 2025',
    imageSrc: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    slug: 'understanding-diabetes'
  },
  {
    title: 'Heart Health: Simple Ways to Keep Your Heart Strong',
    excerpt: 'Discover simple yet effective ways to maintain heart health and reduce the risk of heart disease through diet, exercise, and lifestyle modifications.',
    category: 'Wellness',
    author: 'Dr. Ananya Sharma',
    date: 'March 28, 2025',
    imageSrc: 'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    slug: 'heart-health'
  },
  {
    title: 'Mental Health Awareness: Breaking the Stigma',
    excerpt: 'Explore the importance of mental health awareness and how breaking the stigma can lead to better support for those dealing with mental health issues.',
    category: 'Mental Health',
    author: 'Dr. Sarita Desai',
    date: 'March 15, 2025',
    imageSrc: 'https://images.unsplash.com/photo-1474377207190-a7d8b3334068?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    slug: 'mental-health-awareness'
  },
  {
    title: 'The Importance of Regular Health Check-ups',
    excerpt: 'Understand why regular health check-ups are essential for early detection of potential health issues and maintaining overall well-being.',
    category: 'Preventive Care',
    author: 'Dr. Vivek Joshi',
    date: 'March 5, 2025',
    imageSrc: 'https://images.unsplash.com/photo-1581595219315-a187dd40c322?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1767&q=80',
    slug: 'importance-of-checkups'
  },
  {
    title: 'Nutrition Tips for a Healthy Immune System',
    excerpt: 'Learn about the foods and nutrients that can help strengthen your immune system and protect your body from infections and diseases.',
    category: 'Nutrition',
    author: 'Dr. Priya Patel',
    date: 'February 20, 2025',
    imageSrc: 'https://images.unsplash.com/photo-1494390248081-4e521a5940db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1606&q=80',
    slug: 'nutrition-immune-system'
  },
  {
    title: 'Pediatric Health: Common Childhood Illnesses and Prevention',
    excerpt: 'Get insights into common childhood illnesses, their symptoms, and preventive measures to keep your children healthy.',
    category: 'Pediatrics',
    author: 'Dr. Rajesh Kumar',
    date: 'February 8, 2025',
    imageSrc: 'https://images.unsplash.com/photo-1566004100631-35d015d6a491?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    slug: 'pediatric-health'
  }
];

const categories = [
  'All',
  'Health',
  'Wellness',
  'Mental Health',
  'Nutrition',
  'Preventive Care',
  'Pediatrics'
];

const Blog = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  // Filter blog posts based on search term and selected category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.author.toLowerCase().includes(searchTerm.toLowerCase());
                          
    const matchesCategory = selectedCategory === 'All' || 
                            post.category === selectedCategory;
                            
    return matchesSearch && matchesCategory;
  });

  return (
    <MainLayout>
      <div className="bg-gradient-to-r from-healthcare-800 to-healthcare-900 py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl lg:text-4xl font-bold text-[#065F46] mb-6">HealthCare Blog</h1>
            <p className="text-base lg:text-lg text-gray-600 mb-8">
              Stay informed with the latest health insights, medical news, and wellness tips from our experts.
            </p>
            
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/10 backdrop-blur-md text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-healthcare-400"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="container py-12">
        <div className="mb-8 overflow-x-auto">
          <div className="flex space-x-2 pb-2 min-w-max">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  selectedCategory === category
                    ? 'bg-healthcare-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredPosts.map((post, index) => (
              <BlogCard
                key={index}
                title={post.title}
                excerpt={post.excerpt}
                category={post.category}
                author={post.author}
                date={post.date}
                imageSrc={post.imageSrc}
                slug={post.slug}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-700 mb-2">No articles found</h3>
            <p className="text-gray-500 mb-6">Try adjusting your search or filter criteria</p>
            <Button 
              variant="outline"
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
              }}
            >
              Reset Filters
            </Button>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default Blog;
