import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './BlogPage.css';

const BlogPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Sample blog data - in a real app, this would come from an API
  const blogData = {
    'branding-agency': {
      title: 'How to Start Your Own Branding Agency',
      author: 'Joe Fredrick',
      date: '31 Aug 2022',
      readTime: '20 minute read',
      category: 'Strategy',
      authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&auto=format',
      featuredImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop&auto=format',
      content: {
        introduction: `In today's digital landscape, consistent branding has become more crucial than ever. With the rise of online businesses, social media marketing, and e-commerce platforms, companies are realizing the immense value of professional brand design and identity.

The branding industry has seen exponential growth, with businesses investing heavily in creating memorable, cohesive brand experiences that resonate with their target audiences. From startups to Fortune 500 companies, everyone understands that a strong brand is not just a logo—it's the foundation of customer trust and business success.

But what if you could be the one helping these businesses build their brand identity? What if you could turn your creative skills and business acumen into a profitable venture? Starting your own branding agency might be the perfect opportunity to combine your passion for design with entrepreneurial success.

The branding industry offers tremendous potential for growth and profitability. With the right approach, skills, and business strategy, you can build a successful agency that not only generates substantial income but also makes a real impact on businesses worldwide.

If you're considering this path, you might want to start by understanding the fundamentals. Check out our comprehensive guide on "What is a Branding Agency?" to get a solid foundation before diving into the specifics of starting your own.`,

        sections: [
          {
            title: 'How to Start a Branding Agency',
            subsections: [
              {
                title: '1. Research and decide the specifics',
                content: `Before diving headfirst into starting your branding agency, it's crucial to conduct thorough research and make informed decisions about your business direction. This foundational step will save you countless hours and potential setbacks down the road.

Start by researching the industry landscape. Understand who your competitors are, what services they offer, and how they position themselves in the market. Look at both local and international agencies to get a comprehensive view of the industry.

Next, decide on your specific service offerings. Will you focus on logo design, complete brand identity systems, or offer a full range of marketing services? Consider your strengths and interests when making this decision.

Think about your target market. Will you work with startups, established businesses, or a specific industry? Understanding your ideal client will help you tailor your services and marketing efforts more effectively.

Consider your business structure and legal requirements. Research the necessary licenses, permits, and business registrations in your area. Decide whether you'll operate as a sole proprietorship, partnership, or corporation.

Plan your initial budget carefully. Consider expenses like software subscriptions, equipment, office space (if needed), marketing, and working capital. Be realistic about your financial needs, especially in the early months when income might be irregular.

Finally, identify gaps in the market that you could fill. Look for underserved niches or emerging trends that could present opportunities for your agency. This research will help you differentiate your services and find your unique value proposition.`
              }
            ]
          }
        ]
      }
    },
    'lead-scoring': {
      title: 'Advanced Lead Scoring Techniques',
      author: 'Sarah Johnson',
      date: '28 Aug 2022',
      readTime: '15 minute read',
      category: 'Analytics',
      authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&auto=format',
      featuredImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop&auto=format',
      content: {
        introduction: `Lead scoring is one of the most critical components of modern sales and marketing operations. It's the process of assigning values to leads based on their characteristics and behaviors, helping sales teams prioritize their efforts and focus on the most promising prospects.

In today's competitive business environment, companies can't afford to waste time on unqualified leads. Advanced lead scoring techniques enable organizations to identify high-value prospects early in the sales funnel, resulting in higher conversion rates, improved sales efficiency, and better ROI on marketing investments.

This comprehensive guide will walk you through the most effective lead scoring methodologies, from basic demographic scoring to sophisticated behavioral analysis and predictive modeling. Whether you're just starting with lead scoring or looking to optimize your existing system, you'll find actionable insights to improve your lead qualification process.`,

        sections: [
          {
            title: 'Understanding Lead Scoring Fundamentals',
            subsections: [
              {
                title: '1. Demographic Scoring',
                content: `Demographic scoring forms the foundation of any lead scoring system. This approach assigns points based on static characteristics of your leads, such as job title, company size, industry, and location.

Start by identifying the characteristics that best predict a lead's likelihood to convert. For B2B companies, this might include job title (C-level executives typically have higher conversion rates), company size (larger companies often have bigger budgets), and industry (some industries are more likely to purchase your product or service).

Create a scoring matrix that assigns different point values to each demographic factor. For example, a CEO might receive 50 points, while a manager receives 20 points. Company size could be scored based on employee count or annual revenue.

Remember to regularly review and adjust your demographic scoring criteria based on actual conversion data. What works for one company might not work for another, so it's essential to analyze your specific data to optimize your scoring model.`
              }
            ]
          }
        ]
      }
    },
    'crm-integration': {
      title: 'CRM Integration Best Practices',
      author: 'Mike Chen',
      date: '25 Aug 2022',
      readTime: '18 minute read',
      category: 'Technology',
      authorAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&auto=format',
      featuredImage: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=600&fit=crop&auto=format',
      content: {
        introduction: `Customer Relationship Management (CRM) systems have become the backbone of modern business operations, serving as the central hub for customer data, interactions, and sales processes. However, the true power of a CRM system is unlocked when it's properly integrated with other business tools and platforms.

Effective CRM integration can transform your business operations, providing seamless data flow, improved customer insights, and enhanced team productivity. From marketing automation platforms to accounting software, the right integrations can create a unified ecosystem that drives growth and efficiency.

This comprehensive guide will explore the best practices for CRM integration, covering everything from planning and implementation to maintenance and optimization. Whether you're just starting with CRM integration or looking to improve your existing setup, you'll find valuable insights to maximize your system's potential.`,

        sections: [
          {
            title: 'Planning Your CRM Integration Strategy',
            subsections: [
              {
                title: '1. Assess Your Current Systems',
                content: `Before diving into CRM integration, it's essential to conduct a thorough assessment of your current systems and processes. This evaluation will help you identify integration opportunities and potential challenges.

Start by mapping out all the tools and platforms your team currently uses. This includes marketing automation platforms, email marketing tools, accounting software, project management systems, and any other business applications.

Document the data flow between these systems and identify any manual processes that could be automated through integration. Look for data silos where information is trapped in one system and not accessible to other teams.

Consider your team's technical capabilities and resources. Some integrations require significant technical expertise, while others can be implemented using no-code or low-code solutions. Understanding your team's capabilities will help you choose the right integration approach.`
              }
            ]
          }
        ]
      }
    }
  };

  const blog = blogData[slug];

  if (!blog) {
    return (
      <div className="blog-page">
        <div className="blog-container">
          <div className="blog-not-found">
            <h1>Blog Post Not Found</h1>
            <p>The blog post you're looking for doesn't exist.</p>
            <button onClick={() => navigate('/')} className="back-btn">
              ← Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-page">
      <div className="blog-container">
        {/* Header */}
        <div className="blog-header">
          <div className="blog-header-top">
            <button onClick={() => navigate('/')} className="back-btn">
              ← Back
            </button>
            <span className="read-time">{blog.readTime}</span>
          </div>
          
          <h1 className="blog-main-title">{blog.title}</h1>
          
          <div className="blog-author-info">
            <img src={blog.authorAvatar} alt={blog.author} className="blog-author-avatar" />
            <div className="blog-author-details">
              <span className="blog-author-name">{blog.author}</span>
              <span className="blog-publish-date">{blog.date}</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="blog-content-wrapper">
          <div className="blog-main-content">
            {/* Featured Image */}
            <div className="blog-featured-image">
              <img src={blog.featuredImage} alt={blog.title} />
            </div>

            {/* Introduction */}
            <div className="blog-section">
              <h2 className="blog-section-title">Introduction</h2>
              <div className="blog-text">
                {blog.content.introduction.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Main Sections */}
            {blog.content.sections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="blog-section">
                <h2 className="blog-section-title">{section.title}</h2>
                {section.subsections.map((subsection, subIndex) => (
                  <div key={subIndex} className="blog-subsection">
                    <h3 className="blog-subsection-title">{subsection.title}</h3>
                    <div className="blog-text">
                      {subsection.content.split('\n\n').map((paragraph, pIndex) => (
                        <p key={pIndex}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Table of Contents Sidebar */}
          <div className="blog-sidebar">
            <div className="toc-container">
              <h3 className="toc-title">Table of contents</h3>
              <ul className="toc-list">
                <li className="toc-item">
                  <a href="#introduction">Introduction</a>
                </li>
                {blog.content.sections.map((section, index) => (
                  <li key={index} className="toc-item">
                    <a href={`#section-${index}`}>{section.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
