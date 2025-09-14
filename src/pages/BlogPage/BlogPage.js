import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './BlogPage.css';

const BlogPage = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedBlog, setSelectedBlog] = useState(null);

  // Comprehensive blog data including all blogs from homepage plus additional content
  const blogData = [
    {
      id: 'branding-agency',
      title: 'How to Start Your Own Branding Agency',
      author: 'Rajesh Thapa',
      date: '31 Aug 2022',
      readTime: '20 minute read',
      category: 'Strategy',
      authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&auto=format',
      featuredImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop&auto=format',
      excerpt: 'Learn the essential steps to build a successful branding agency from scratch, including client acquisition, service offerings, and business growth strategies.',
      content: {
        introduction: `In today's digital landscape, consistent branding has become more crucial than ever. With the rise of online businesses, social media marketing, and e-commerce platforms, companies are realizing the immense value of professional brand design and identity.

The branding industry has seen exponential growth, with businesses investing heavily in creating memorable, cohesive brand experiences that resonate with their target audiences. From startups to Fortune 500 companies, everyone understands that a strong brand is not just a logo—it's the foundation of customer trust and business success.

But what if you could be the one helping these businesses build their brand identity? What if you could turn your creative skills and business acumen into a profitable venture? Starting your own branding agency might be the perfect opportunity to combine your passion for design with entrepreneurial success.`,
        sections: [
          {
            title: 'How to Start a Branding Agency',
            subsections: [
              {
                title: '1. Research and decide the specifics',
                content: `Before diving headfirst into starting your branding agency, it's crucial to conduct thorough research and make informed decisions about your business direction. This foundational step will save you countless hours and potential setbacks down the road.

Start by researching the industry landscape. Understand who your competitors are, what services they offer, and how they position themselves in the market. Look at both local and international agencies to get a comprehensive view of the industry.

Next, decide on your specific service offerings. Will you focus on logo design, complete brand identity systems, or offer a full range of marketing services? Consider your strengths and interests when making this decision.

Think about your target market. Will you work with startups, established businesses, or a specific industry? Understanding your ideal client will help you tailor your services and marketing efforts more effectively.`
              },
              {
                title: '2. Build your portfolio and skills',
                content: `Your portfolio is your most powerful marketing tool. Start building it even before you officially launch your agency. Work on personal projects, offer pro bono work to local businesses, or create speculative work for brands you admire.

Focus on developing a diverse range of skills including logo design, brand strategy, typography, color theory, and understanding of different industries. The more versatile you are, the more clients you can serve.`
              },
              {
                title: '3. Set up your business structure',
                content: `Choose the right business structure for your agency. Consider factors like liability protection, tax implications, and growth plans. Most agencies start as sole proprietorships or LLCs, then evolve as they grow.

Set up proper accounting systems, get necessary licenses and permits, and consider business insurance. These foundational elements will protect you and your business as you grow.`
              }
            ]
          }
        ]
      }
    },
    {
      id: 'lead-scoring',
      title: 'Advanced Lead Scoring Techniques',
      author: 'Priya Sharma',
      date: '28 Aug 2022',
      readTime: '15 minute read',
      category: 'Analytics',
      authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&auto=format',
      featuredImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&auto=format',
      excerpt: 'Discover sophisticated methods to score and qualify leads effectively, improving your conversion rates and sales team productivity.',
      content: {
        introduction: `Lead scoring is one of the most critical components of modern sales and marketing operations. It's the process of assigning values to leads based on their characteristics and behaviors.`,
        sections: [
          {
            title: 'Understanding Lead Scoring Fundamentals',
            subsections: [
              {
                title: '1. Demographic Scoring',
                content: `Demographic scoring forms the foundation of any lead scoring system. This approach assigns points based on static characteristics of your leads.`
              }
            ]
          }
        ]
      }
    },
    {
      id: 'crm-integration',
      title: 'CRM Integration Best Practices',
      author: 'Suresh Maharjan',
      date: '25 Aug 2022',
      readTime: '18 minute read',
      category: 'Technology',
      authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&auto=format',
      featuredImage: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop&auto=format',
      excerpt: 'Master the art of integrating your lead management system with CRM platforms for seamless data flow and improved customer relationships.',
      content: {
        introduction: `Customer Relationship Management (CRM) systems have become the backbone of modern business operations, serving as the central hub for customer data.`,
        sections: [
          {
            title: 'Planning Your CRM Integration Strategy',
            subsections: [
              {
                title: '1. Assess Your Current Systems',
                content: `Before diving into CRM integration, it's essential to conduct a thorough assessment of your current systems and processes.`
              }
            ]
          }
        ]
      }
    },
    {
      id: 'sales-automation',
      title: 'Sales Automation: The Future of Lead Management',
      author: 'Alex Thompson',
      date: '22 Aug 2022',
      readTime: '12 minute read',
      category: 'Technology',
      authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&auto=format',
      featuredImage: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=250&fit=crop&auto=format',
      excerpt: 'Explore how automation is revolutionizing sales processes and learn how to implement effective automation strategies in your organization.',
      content: {
        introduction: `Sales automation is transforming how businesses manage their sales processes, from lead generation to closing deals.`,
        sections: [
          {
            title: 'The Benefits of Sales Automation',
            subsections: [
              {
                title: '1. Increased Efficiency',
                content: `Automation eliminates repetitive tasks, allowing sales teams to focus on high-value activities like building relationships and closing deals.`
              }
            ]
          }
        ]
      }
    },
    {
      id: 'email-marketing',
      title: 'Email Marketing Strategies for Lead Nurturing',
      author: 'Maria Garcia',
      date: '20 Aug 2022',
      readTime: '14 minute read',
      category: 'Marketing',
      authorAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&auto=format',
      featuredImage: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=250&fit=crop&auto=format',
      excerpt: 'Master the art of email marketing to nurture leads effectively and convert prospects into loyal customers.',
      content: {
        introduction: `Email marketing remains one of the most effective tools for lead nurturing and customer retention.`,
        sections: [
          {
            title: 'Building Effective Email Campaigns',
            subsections: [
              {
                title: '1. Personalization is Key',
                content: `Personalized emails have significantly higher open and click-through rates compared to generic messages.`
              }
            ]
          }
        ]
      }
    },
    {
      id: 'data-analytics',
      title: 'Data-Driven Decision Making in Sales',
      author: 'David Kim',
      date: '18 Aug 2022',
      readTime: '16 minute read',
      category: 'Analytics',
      authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&auto=format',
      featuredImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&auto=format',
      excerpt: 'Learn how to leverage data analytics to make informed decisions and optimize your sales performance.',
      content: {
        introduction: `In today's competitive business environment, data-driven decision making is crucial for sales success.`,
        sections: [
          {
            title: 'Key Metrics to Track',
            subsections: [
              {
                title: '1. Conversion Rates',
                content: `Tracking conversion rates at each stage of the sales funnel helps identify bottlenecks and optimization opportunities.`
              }
            ]
          }
        ]
      }
    },
    {
      id: 'customer-retention',
      title: 'Customer Retention Strategies That Work',
      author: 'Sarah Wilson',
      date: '15 Aug 2022',
      readTime: '13 minute read',
      category: 'Strategy',
      authorAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&auto=format',
      featuredImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop&auto=format',
      excerpt: 'Discover proven strategies to retain customers and build long-term relationships that drive business growth.',
      content: {
        introduction: `Customer retention is often more cost-effective than acquiring new customers and leads to higher lifetime value.`,
        sections: [
          {
            title: 'Building Customer Loyalty',
            subsections: [
              {
                title: '1. Exceptional Customer Service',
                content: `Providing outstanding customer service is the foundation of customer retention and loyalty.`
              }
            ]
          }
        ]
      }
    },
    {
      id: 'social-selling',
      title: 'Social Selling: Leveraging Social Media for Sales',
      author: 'Michael Brown',
      date: '12 Aug 2022',
      readTime: '11 minute read',
      category: 'Marketing',
      authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&auto=format',
      featuredImage: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop&auto=format',
      excerpt: 'Learn how to use social media platforms effectively to build relationships and generate sales opportunities.',
      content: {
        introduction: `Social selling has become an essential skill for modern sales professionals, allowing them to connect with prospects on a personal level.`,
        sections: [
          {
            title: 'Social Media Platforms for Sales',
            subsections: [
              {
                title: '1. LinkedIn for B2B Sales',
                content: `LinkedIn is the most powerful platform for B2B social selling, offering tools to identify and connect with decision-makers.`
              }
            ]
          }
        ]
      }
    }
  ];

  const categories = ['All', 'Strategy', 'Analytics', 'Technology', 'Marketing'];

  const filteredBlogs = selectedCategory === 'All' 
    ? blogData 
    : blogData.filter(blog => blog.category === selectedCategory);

  const handleBlogClick = (blogId) => {
    const blog = blogData.find(b => b.id === blogId);
    if (blog) {
      setSelectedBlog(blog);
    }
  };

  const closeBlogModal = () => {
    setSelectedBlog(null);
  };

  return (
    <div className="blog-page">
      <div className="blog-container">
        {/* Header Section */}
        <div className="blog-page-header">
          <div className="blog-page-header-content">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="blog-page-title-section"
            >
              <h1 className="blog-page-title">Latest Insights</h1>
              <p className="blog-page-subtitle">
                Stay updated with the latest trends and insights in sales lead management
              </p>
            </motion.div>
          </div>
        </div>

        {/* Back Button Section */}
        <div className="back-button-section">
          <motion.button 
            onClick={() => navigate('/')} 
            className="back-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            ← Back to Home
          </motion.button>
            </div>

        {/* Category Filter */}
        <motion.div 
          className="blog-categories"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Blog Grid */}
        <motion.div 
          className="blog-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {filteredBlogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              className="blog-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              onClick={() => handleBlogClick(blog.id)}
            >
              <div className="blog-image">
                <img src={blog.featuredImage} alt={blog.title} />
                <div className="blog-category">{blog.category}</div>
              </div>
              <div className="blog-content">
                <h3 className="blog-title">{blog.title}</h3>
                <p className="blog-excerpt">{blog.excerpt}</p>
                <div className="blog-meta">
                  <div className="blog-author">
                    <img src={blog.authorAvatar} alt={blog.author} className="author-avatar" />
                    <span className="author-name">{blog.author}</span>
                  </div>
                  <div className="blog-date">{blog.date}</div>
                </div>
                <div className="blog-actions">
                  <button className="read-more-btn">
                    Read More
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More Button */}
        <motion.div 
          className="blog-footer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.button 
            className="load-more-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Load More Articles
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </motion.button>
        </motion.div>
      </div>

      {/* Blog Modal */}
      {selectedBlog && (
        <div className="blog-modal-overlay" onClick={closeBlogModal}>
          <div className="blog-modal" onClick={(e) => e.stopPropagation()}>
            <div className="blog-modal-header">
              <button className="blog-modal-close" onClick={closeBlogModal}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12"/>
                </svg>
              </button>
            </div>
            
            <div className="blog-modal-content">
              {/* Header */}
              <div className="blog-modal-header-content">
                <div className="blog-modal-header-top">
                  <span className="read-time">{selectedBlog.readTime}</span>
                </div>
                
                <h1 className="blog-modal-title">{selectedBlog.title}</h1>
                
                <div className="blog-modal-author-info">
                  <img src={selectedBlog.authorAvatar} alt={selectedBlog.author} className="blog-modal-author-avatar" />
                  <div className="blog-modal-author-details">
                    <span className="blog-modal-author-name">{selectedBlog.author}</span>
                    <span className="blog-modal-publish-date">{selectedBlog.date}</span>
                  </div>
                </div>
              </div>

              {/* Featured Image */}
              <div className="blog-modal-featured-image">
                <img src={selectedBlog.featuredImage} alt={selectedBlog.title} />
              </div>

              {/* Introduction */}
              <div className="blog-modal-section">
                <h2 className="blog-modal-section-title">Introduction</h2>
                <div className="blog-modal-text">
                  {selectedBlog.content.introduction.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Main Sections */}
              {selectedBlog.content.sections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="blog-modal-section">
                  <h2 className="blog-modal-section-title">{section.title}</h2>
                  {section.subsections.map((subsection, subIndex) => (
                    <div key={subIndex} className="blog-modal-subsection">
                      <h3 className="blog-modal-subsection-title">{subsection.title}</h3>
                      <div className="blog-modal-text">
                        {subsection.content.split('\n\n').map((paragraph, pIndex) => (
                          <p key={pIndex}>{paragraph}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogPage;
