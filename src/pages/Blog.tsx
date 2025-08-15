import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import BlogCard from '../components/common/BlogCard';

// Mock blog data
const blogPosts = [
  {
    id: 1,
    title: "The Future of Confidential Computing: Trends and Predictions",
    excerpt: "Explore the emerging trends in confidential computing and what they mean for enterprise security in the coming years.",
    date: "July 20, 2025",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    author: {
      name: "Priya Ranjan Kumar",
      avatar: "/1634105594218.jpeg"
    },
    category: "Confidential Computing",
    slug: "future-of-confidential-computing"
  },
  {
    id: 2,
    title: "Quantum Algorithms for Optimization Problems",
    excerpt: "A deep dive into how quantum algorithms can be applied to solve complex optimization challenges across various industries.",
    date: "July 15, 2025",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    author: {
      name: "Priya Ranjan Kumar",
      avatar: "/1634105594218.jpeg"
    },
    category: "Quantum Computing",
    slug: "quantum-algorithms-optimization"
  },
  {
    id: 3,
    title: "Secure Multi-Party Computation in Healthcare",
    excerpt: "How confidential computing is enabling secure collaboration on sensitive medical data while preserving patient privacy.",
    date: "July 8, 2025",
    image: "https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    author: {
      name: "Priya Ranjan Kumar",
      avatar: "/1634105594218.jpeg"
    },
    category: "Healthcare",
    slug: "secure-computation-healthcare"
  },
  {
    id: 4,
    title: "Post-Quantum Cryptography: Preparing for the Quantum Threat",
    excerpt: "An overview of post-quantum cryptographic approaches and how organizations can prepare for quantum threats to encryption.",
    date: "June 28, 2025",
    image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    author: {
      name: "Priya Ranjan Kumar",
      avatar: "/1634105594218.jpeg"
    },
    category: "Cybersecurity",
    slug: "post-quantum-cryptography"
  },
  {
    id: 5,
    title: "Quantum Machine Learning: Current State and Future Prospects",
    excerpt: "Examining the intersection of quantum computing and machine learning, with real-world applications and case studies.",
    date: "June 18, 2025",
    image: "https://images.pexels.com/photos/8386423/pexels-photo-8386423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    author: {
      name: "Priya Ranjan Kumar",
      avatar: "/1634105594218.jpeg"
    },
    category: "Quantum Computing",
    slug: "quantum-machine-learning"
  },
  {
    id: 6,
    title: "Confidential Computing in Financial Services",
    excerpt: "How banks and financial institutions are leveraging confidential computing to enhance security and regulatory compliance.",
    date: "June 5, 2025",
    image: "https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    author: {
      name: "Priya Ranjan Kumar",
      avatar: "/1634105594218.jpeg"
    },
    category: "Financial Services",
    slug: "confidential-computing-finance"
  },
  {
    id: 7,
    title: "TOGAF ADM for Enterprise Architecture",
    excerpt: "A comprehensive guide to the TOGAF Architecture Development Method and its key phases, documents, and artifacts for enterprise architecture development.",
    date: "June 14, 2025",
    image: "https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    author: {
      name: "Priya Ranjan Kumar",
      avatar: "/1634105594218.jpeg"
    },
    category: "Enterprise Architecture",
    slug: "togaf-adm-enterprise-architecture"
  }
];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [subscriptionError, setSubscriptionError] = useState('');
  
  // Get unique categories
  const categories = ['All', ...Array.from(new Set(blogPosts.map(post => post.category)))];
  
  // Filter posts based on search term and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Handle newsletter subscription
  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setSubscriptionError('Please enter a valid email address.');
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setSubscriptionError('Please enter a valid email address.');
      return;
    }
    
    setIsLoading(true);
    setSubscriptionError('');
    
    try {
      const response = await fetch('https://hook.us2.make.com/hsscivzugsvrcbghpklvreyc661plkeu', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email.trim(),
          source: 'Blog Newsletter Subscription',
          timestamp: new Date().toISOString(),
          page: 'blog'
        }),
      });
      
      if (response.ok) {
        setIsSubscribed(true);
        setSubscriptionError('');
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      setSubscriptionError('Sorry, there was an error subscribing. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      <Helmet>
        <title>Blog | AccelCQ Inc</title>
        <meta name="description" content="Stay updated with the latest insights, trends, and news in confidential computing and quantum computing from AccelCQ Inc." />
      </Helmet>

      <PageHeader 
        title="Blog & Insights"
        subtitle="Expert insights, industry trends, and the latest developments in confidential and quantum computing"
        backgroundImage="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      {/* Search & Filter Section */}
      <section className="py-12 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="relative w-full md:w-auto">
              <input
                type="text"
                placeholder="Search articles..."
                className="pl-10 pr-4 py-3 border border-slate-200 rounded-xl w-full md:w-80 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 shadow-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-3 text-slate-400" size={20} />
            </div>
            
            <div className="flex items-center space-x-3 w-full md:w-auto">
              <span className="text-slate-700 font-medium">Filter by:</span>
              <select 
                className="border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 shadow-sm bg-white"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((category, index) => (
                  <option key={index} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.div 
                  key={post.id}
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <BlogCard {...post} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">No articles found</h3>
              <p className="text-slate-600 text-lg">
                Try adjusting your search or filter to find what you're looking for.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">Stay Updated</h2>
              
              {!isSubscribed ? (
                <>
                  <p className="text-slate-600 mb-10 text-xl leading-relaxed max-w-2xl mx-auto">
                    Subscribe to our newsletter to receive the latest insights and updates on confidential computing and quantum technologies.
                  </p>
                  
                  {subscriptionError && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-xl mb-6 max-w-md mx-auto shadow-sm">
                      {subscriptionError}
                    </div>
                  )}
                  
                  <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-6">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="flex-1 px-6 py-4 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 shadow-sm"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setSubscriptionError('');
                      }}
                      disabled={isLoading}
                      required
                    />
                    <button 
                      type="submit" 
                      className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={isLoading}
                    >
                      {isLoading ? 'Subscribing...' : 'Subscribe'}
                    </button>
                  </form>
                  
                  <p className="text-slate-500 text-sm">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </>
              ) : (
                <div className="text-center">
                  <div className="bg-green-50 border border-green-200 rounded-2xl p-8 mb-6 max-w-md mx-auto shadow-lg">
                    <h3 className="text-green-800 font-bold text-xl mb-3">Thank you for subscribing!</h3>
                    <p className="text-green-700 leading-relaxed">
                      We've received your subscription to {email}. You'll receive the latest insights and updates on confidential computing and quantum technologies.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setIsSubscribed(false);
                      setEmail('');
                    }}
                    className="text-purple-600 hover:text-purple-700 font-semibold transition-colors"
                  >
                    Subscribe another email
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;