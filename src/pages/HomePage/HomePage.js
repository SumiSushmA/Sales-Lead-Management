import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const aboutRef = useRef(null);
  const isInView = useInView(aboutRef, { once: true, threshold: 0.3 });
  const trackRef = useRef(null);
  const navigate = useNavigate();
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [activeCard, setActiveCard] = useState(0); // Start with first card active
  const [currentIndex, setCurrentIndex] = useState(0); // Track current position in carousel
  const [activeFeature, setActiveFeature] = useState(0); // Track active feature image
  const [currentFeature, setCurrentFeature] = useState(0); // Track which feature card to show
  const [activeScrollSection, setActiveScrollSection] = useState(1); // Track which scroll section is active
  const [selectedBlog, setSelectedBlog] = useState(null); // Track which blog is selected for modal

  // Blog data - same as in BlogPage component
  const blogData = {
    'branding-agency': {
      title: 'How to Start Your Own Branding Agency',
      author: 'Rajesh Thapa',
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
      author: 'Priya Sharma',
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
      author: 'Suresh Maharjan',
      date: '25 Aug 2022',
      readTime: '18 minute read',
      category: 'Technology',
      authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&auto=format',
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

  // Function to open blog modal
  const openBlogModal = (slug) => {
    setSelectedBlog(blogData[slug]);
  };

  // Function to close blog modal
  const closeBlogModal = () => {
    setSelectedBlog(null);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX);
    setScrollLeft(trackRef.current.scrollLeft);
    e.preventDefault();
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX;
    const walk = (x - startX) * 1.5;
    trackRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX);
    setScrollLeft(trackRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.touches[0].pageX;
    const walk = (x - startX) * 1.5;
    trackRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleCardClick = (index) => {
    setActiveCard(index);
  };

  // Auto-play functionality - change active card every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % 5; // 5 total cards, loops back to 0 after 4
        setActiveCard(nextIndex);
        return nextIndex;
      });
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  // Enhanced scroll detection for compact sections with throttling
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScroll = window.scrollY;
          const howItWorksSection = document.querySelector('.how-it-works-section');
          
          if (!howItWorksSection) {
            ticking = false;
            return;
          }
          
          const sectionTop = howItWorksSection.offsetTop;
          const sectionHeight = howItWorksSection.offsetHeight;
          const relativeScroll = currentScroll - sectionTop;
          
          // Calculate which section should be active based on scroll position within the section
          const sectionProgress = relativeScroll / sectionHeight;
          
          // Much more responsive thresholds for faster section switching
          if (sectionProgress < 0.08) {
            setActiveScrollSection(1); // Lead Capture
          } else if (sectionProgress < 0.25) {
            setActiveScrollSection(2); // Lead Nurturing
          } else if (sectionProgress < 0.45) {
            setActiveScrollSection(3); // Sales Conversion
          } else {
            setActiveScrollSection(3); // Keep last section active
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };

    // Initial call to set the correct section on load
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  // Feature data for the main card
  const getFeatures = () => {
    return [
      {
        id: 1,
        title: "Pioneers",
        description: "Creating industry narratives that others follow. We paved the path for creative SEO and multi-channel search.",
        subDescription: "First search-first agency to win a Cannes Lion.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop&auto=format&q=80"
      },
      {
        id: 2,
        title: "Award Winning",
        description: "79 awards and counting. Voted The Drum's best agency outside of London.",
        subDescription: "Official judges for Global Search Awards and Global Content Marketing Awards.",
        image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=500&h=500&fit=crop&auto=format&q=80"
      },
      {
        id: 3,
        title: "Innovation",
        description: "Pushing boundaries with new technologies to stay ahead in digital marketing.",
        subDescription: "AI-powered solutions and cutting-edge analytics for today's businesses.",
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=500&fit=crop&auto=format&q=80"
      },
      {
        id: 4,
        title: "Results",
        description: "Data-driven approach delivering measurable results and sustainable growth.",
        subDescription: "Every campaign optimized for maximum ROI with transparent reporting.",
        image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=500&h=500&fit=crop&auto=format&q=80"
      }
    ];
  };

  // Features will only change when user clicks arrows or indicators
  // No automatic scroll-triggered changes

  // How it Works data
  const getHowItWorksData = () => {
    return [
      {
        id: 1,
        title: "LEAD CAPTURE",
        description: "Automatically capture leads from multiple channels and score them in real-time for maximum conversion potential.",
        icon: (
          <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
            <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2"/>
            <circle cx="12" cy="12" r="2" fill="currentColor"/>
          </svg>
        )
      },
      {
        id: 2,
        title: "LEAD NURTURING",
        description: "Personalized engagement through automated sequences and multi-channel campaigns tailored to lead behavior.",
        icon: (
          <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )
      },
      {
        id: 3,
        title: "LEAD QUALIFICATION",
        description: "AI-powered scoring and automated workflows to identify high-value prospects and prioritize follow-up.",
        icon: (
          <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )
      },
      {
        id: 4,
        title: "SALES CONVERSION",
        description: "Seamless handoff to sales teams with complete context and automated assignment for optimal results.",
        icon: (
          <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 1V23M17 5H9.5C8.11929 5 7 6.11929 7 7.5S8.11929 10 9.5 10H14.5C15.8807 10 17 11.1193 17 12.5S15.8807 15 14.5 15H7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )
      }
    ];
  };

  // Problems data for the horizontal scrollable layout
  const getProblems = () => {
    return [
      { 
        id: 1, 
        title: "Lost Leads", 
        description: "Leads slip through the cracks without proper tracking systems.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&auto=format&q=80"
      },
      { 
        id: 2, 
        title: "Poor Follow-up", 
        description: "Inconsistent follow-up processes lead to missed opportunities.",
        image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop&auto=format&q=80"
      },
      { 
        id: 3, 
        title: "No Analytics", 
        description: "Lack of data insights makes optimization impossible.",
        image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop&auto=format&q=80"
      },
      { 
        id: 4, 
        title: "Manual Tracking", 
        description: "Time-consuming manual processes reduce efficiency.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&auto=format&q=80"
      },
      { 
        id: 5, 
        title: "Low Conversion", 
        description: "Poor lead nurturing results in lost revenue.",
        image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop&auto=format&q=80"
      }
    ];
  };

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">


        {/* Transparent Sales Lead Management Image */}
        <div className="hero-transparent-image">
          <img 
            src="/hero.jpg" 
            alt="Sales Lead Management" 
            className="transparent-bg-image"
          />
        </div>


        {/* Hero Content Container */}
        <div className="hero-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-content"
          >
            {/* Main Heading - Rise at Seven Style */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hero-title"
            >
              We Create
              <span className="title-highlight">
                Sales Leaders
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=120&h=120&fit=crop&auto=format"
                  alt="Sales Leaders"
                  className="sales-image"
                />
              </span>
            </motion.h1>

            {/* Sub Heading - Rise at Seven Style */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="hero-subtitle"
            >
              on every searchable platform
            </motion.p>

            {/* CTA Button - Rise at Seven Style */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="hero-cta"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "#ffffff",
                  color: "#000000"
                }}
                whileTap={{ scale: 0.98 }}
                className="hero-button"
              >
                Get In Touch
                <svg 
                  width="12" 
                  height="12" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="button-arrow"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* About Section */}
      <section id="about" ref={aboutRef} className="about-section">
        <div className="about-container">
          <div className="about-content">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="about-description"
            >
              <p>
                Leads are everywhere—but without direction, they go nowhere. 
                Lead management makes sure every interaction is tracked, 
                nurtured, and converted into growth.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="about-title-section"
            >
              <h2 className="about-main-title">
                Turning Interest Into
                <span className="title-emphasis"> Opportunity</span>
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=80&h=80&fit=crop&auto=format"
                  alt="Opportunity"
                  className="about-image"
                />
              </h2>
              
              <div className="about-buttons">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="about-btn primary-btn"
                >
                  Learn More <span className="btn-arrow">↗</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="about-btn secondary-btn"
                >
                  Get Started <span className="btn-arrow">↗</span>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section id="problem" className="problems-section">
        <div className="problems-container">
          <div className="problems-header">
            <h2 className="problems-title">Problems</h2>
          </div>
          <div className="problems-scroll-container">
            <div 
              className="problems-track"
              ref={trackRef}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {getProblems().map((problem) => (
                <div key={problem.id} className="problem-card">
                  <div className="problem-number">{String(problem.id).padStart(2, '0')}</div>
                  <div className="problem-image">
                    <img 
                      src={problem.image} 
                      alt={problem.title} 
                    />
                  </div>
                  <div className="problem-content">
                    <h3 className="problem-title">{problem.title}</h3>
                    <p className="problem-description">{problem.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with Card Design */}
      <section id="feature" className="features-section">
        <div className="features-container">
          <div className="features-header">
            <h2 className="features-title">Features</h2>
            <p className="features-subtitle">Powerful tools to streamline your lead management process</p>
          </div>
          
          <div className="features-card-container">
            {/* Navigation arrows outside the card */}
            <button 
              className="features-nav-arrow features-prev-arrow"
              onClick={() => setCurrentFeature(prev => prev > 0 ? prev - 1 : getFeatures().length - 1)}
              aria-label="Previous feature"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            <button 
              className="features-nav-arrow features-next-arrow"
              onClick={() => setCurrentFeature(prev => prev < getFeatures().length - 1 ? prev + 1 : 0)}
              aria-label="Next feature"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            <div className="features-card-layout">
              {/* Main feature card with image slider */}
              <div className="main-feature-card">
                <div className="card-image-container">
                  <motion.div 
                    className="card-image-slider"
                    key={currentFeature}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ 
                      opacity: 1, 
                      x: 0,
                      transition: { 
                        duration: 0.5, 
                        ease: "easeOut"
                      }
                    }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <img 
                      src={getFeatures()[currentFeature].image}
                      alt={getFeatures()[currentFeature].title} 
                    />
                  </motion.div>
                </div>
                <div className="card-content">
                  <motion.div
                    key={`content-${currentFeature}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0,
                      transition: { 
                        duration: 0.4, 
                        delay: 0.2,
                        ease: "easeOut"
                      }
                    }}
                  >
                    <h3>{getFeatures()[currentFeature].title}</h3>
                    <p className="card-description">{getFeatures()[currentFeature].description}</p>
                    <p className="card-sub-description">{getFeatures()[currentFeature].subDescription}</p>
                  </motion.div>
                </div>
              </div>
            </div>
            
            {/* Feature indicators */}
            <div className="feature-indicators">
              {getFeatures().map((_, index) => (
                <button
                  key={index}
                  className={`feature-indicator ${index === currentFeature ? 'active' : ''}`}
                  onClick={() => setCurrentFeature(index)}
                  aria-label={`Go to feature ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About-like Section */}
      <section className="about-like-section">
        <div className="about-like-container">
          <div className="about-like-content">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="about-like-description"
            >
              <p>
                Transform your lead management with intelligent automation. 
                Our platform ensures every lead is captured, nurtured, and converted 
                into meaningful business growth.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="about-like-title-section"
            >
              <h2 className="about-like-main-title">
                From Leads To
                <span className="title-emphasis"> Success</span>
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=80&h=80&fit=crop&auto=format"
                  alt="Success"
                  className="about-like-image"
                />
              </h2>
              
              <div className="about-like-buttons">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="about-like-btn primary-btn"
                >
                  Learn More <span className="btn-arrow">↗</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="about-like-btn secondary-btn"
                >
                  Get Started <span className="btn-arrow">↗</span>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How it Works Section - Scroll-based Reveal Design */}
      <section id="how-it-works" className="how-it-works-section">
        <div className="section-header">
          <h2>How It Works</h2>
          <div className="manual-navigation">
            <button 
              className={`nav-btn ${activeScrollSection === 1 ? 'active' : ''}`}
              onClick={() => setActiveScrollSection(1)}
            >
              Lead Capture
            </button>
            <button 
              className={`nav-btn ${activeScrollSection === 2 ? 'active' : ''}`}
              onClick={() => setActiveScrollSection(2)}
            >
              Lead Nurturing
            </button>
            <button 
              className={`nav-btn ${activeScrollSection === 3 ? 'active' : ''}`}
              onClick={() => setActiveScrollSection(3)}
            >
              Sales Conversion
            </button>
          </div>
        </div>
        <div className="how-it-works-container">
          {/* Section 1: Lead Capture - Light Beige */}
          <div className={`scroll-reveal-section section-1 ${activeScrollSection === 1 ? 'active' : ''}`}>
            <div className="section-number">001</div>
            <div className="section-content">
              <h3 className="section-title">Lead Capture</h3>
              <p className="section-description">Automatically capture leads from multiple channels and score them in real-time for maximum conversion potential.</p>
              <ul className="section-features">
                <li>Multi-channel lead collection (website, social media, email)</li>
                <li>Real-time lead scoring and qualification</li>
                <li>Automated data validation and enrichment</li>
                <li>Instant lead assignment to sales teams</li>
                <li>CRM integration and synchronization</li>
              </ul>
            </div>
            <div className="section-visual">
              <div className="visual-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Section 2: Lead Nurturing - Medium Beige */}
          <div className={`scroll-reveal-section section-2 ${activeScrollSection === 2 ? 'active' : ''}`}>
            <div className="section-number">002</div>
            <div className="section-content">
              <h3 className="section-title">Lead Nurturing</h3>
              <p className="section-description">Personalized engagement through automated sequences and multi-channel campaigns tailored to lead behavior and preferences.</p>
              <ul className="section-features">
                <li>Automated email sequences based on lead behavior</li>
                <li>Behavioral trigger campaigns and follow-ups</li>
                <li>Multi-touch engagement across all channels</li>
                <li>Personalized content delivery and recommendations</li>
                <li>Lead scoring updates and qualification tracking</li>
              </ul>
            </div>
            <div className="section-visual">
              <div className="visual-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Section 3: Sales Conversion - Darker Tan */}
          <div className={`scroll-reveal-section section-3 ${activeScrollSection === 3 ? 'active' : ''}`}>
            <div className="section-number">003</div>
            <div className="section-content">
              <h3 className="section-title">Sales Conversion</h3>
              <p className="section-description">Seamless handoff to sales teams with complete context and automated assignment for optimal conversion results.</p>
              <ul className="section-features">
                <li>Intelligent lead routing to best-fit sales rep</li>
                <li>Complete lead context and interaction history</li>
                <li>Real-time sales team notifications and alerts</li>
                <li>Conversion tracking and performance analytics</li>
                <li>ROI measurement and campaign optimization</li>
              </ul>
            </div>
            <div className="section-visual">
              <div className="visual-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blogs Section */}
      <section id="blog" className="blogs-section">
        <div className="blogs-container">
          <div className="blogs-header">
            <h2 className="blogs-title">Latest Insights</h2>
            <p className="blogs-subtitle">Stay updated with the latest trends and insights in sales lead management</p>
          </div>
          
          <div className="blogs-grid">
            <div className="blog-card">
              <div className="blog-image">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop&auto=format" 
                  alt="Lead Generation Strategies" 
                />
                <div className="blog-category">Strategy</div>
              </div>
              <div className="blog-content">
                <h3 className="blog-title" onClick={() => openBlogModal('branding-agency')}>How to Start Your Own Branding Agency</h3>
                <p className="blog-excerpt">Learn the essential steps to build a successful branding agency from scratch, including client acquisition, service offerings, and business growth strategies.</p>
                <div className="blog-meta">
                  <div className="blog-author">
                    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&auto=format" alt="Author" className="author-avatar" />
                    <span className="author-name">Rajesh Thapa</span>
                  </div>
                  <div className="blog-date">31 Aug 2022</div>
                </div>
                <div className="blog-actions">
                  <button className="read-more-btn" onClick={() => openBlogModal('branding-agency')}>
                    Read More
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="blog-card">
              <div className="blog-image">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&auto=format" 
                  alt="Sales Analytics" 
                />
                <div className="blog-category">Analytics</div>
              </div>
              <div className="blog-content">
                <h3 className="blog-title" onClick={() => openBlogModal('lead-scoring')}>Advanced Lead Scoring Techniques</h3>
                <p className="blog-excerpt">Discover sophisticated methods to score and qualify leads effectively, improving your conversion rates and sales team productivity.</p>
                <div className="blog-meta">
                  <div className="blog-author">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&auto=format" alt="Author" className="author-avatar" />
                    <span className="author-name">Priya Sharma</span>
                  </div>
                  <div className="blog-date">28 Aug 2022</div>
                </div>
                <div className="blog-actions">
                  <button className="read-more-btn" onClick={() => openBlogModal('lead-scoring')}>
                    Read More
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="blog-card">
              <div className="blog-image">
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop&auto=format" 
                  alt="CRM Integration" 
                />
                <div className="blog-category">Technology</div>
              </div>
              <div className="blog-content">
                <h3 className="blog-title" onClick={() => openBlogModal('crm-integration')}>CRM Integration Best Practices</h3>
                <p className="blog-excerpt">Master the art of integrating your lead management system with CRM platforms for seamless data flow and improved customer relationships.</p>
                <div className="blog-meta">
                  <div className="blog-author">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&auto=format" alt="Author" className="author-avatar" />
                    <span className="author-name">Suresh Maharjan</span>
                  </div>
                  <div className="blog-date">25 Aug 2022</div>
                </div>
                <div className="blog-actions">
                  <button className="read-more-btn" onClick={() => openBlogModal('crm-integration')}>
                    Read More
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="blogs-footer">
            <button className="view-all-btn" onClick={() => navigate('/blogs')}>
              View All Articles
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer-section">
        <div className="footer-container">
          <div className="footer-brand">
            <h3 className="footer-logo">Sales Lead</h3>
            <p className="footer-tagline">Your Partner in Sales Growth</p>
            <p className="footer-description">
              Transform your sales process with our comprehensive lead management platform. 
              From capture to conversion, we help you turn prospects into customers.
            </p>
          </div>
          
          <div className="footer-links">
            <div className="footer-column">
              <h4 className="footer-heading">Company</h4>
              <ul className="footer-list">
                <li><a href="#about">About Us</a></li>
                <li><a href="#careers">Careers</a></li>
                <li><a href="#press">Press</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4 className="footer-heading">Solutions</h4>
              <ul className="footer-list">
                <li><a href="#lead-capture">Lead Capture</a></li>
                <li><a href="#lead-nurturing">Lead Nurturing</a></li>
                <li><a href="#sales-conversion">Sales Conversion</a></li>
                <li><a href="#analytics">Analytics</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4 className="footer-heading">Resources</h4>
              <ul className="footer-list">
                <li><a href="#blog">Blog</a></li>
                <li><a href="#case-studies">Case Studies</a></li>
                <li><a href="#help">Help Center</a></li>
                <li><a href="#support">Support</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4 className="footer-heading">Connect</h4>
              <div className="social-links">
                <a href="#" className="social-link">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.594 0-6.492 2.907-6.492 6.492 0 .511.058 1.007.172 1.483-5.39-2.705-10.187-5.704-13.38-9.079-.56.961-.883 2.07-.883 3.256 0 2.253 1.149 4.243 2.88 5.417-.847-.028-1.646-.26-2.344-.647v.08c0 3.154 2.237 5.78 5.193 6.39-.545.148-1.12.23-1.704.23-.417 0-.82-.041-1.215-.117.823 2.572 3.22 4.438 6.04 4.489-2.217 1.743-5.022 2.78-8.07 2.78-.523 0-1.04-.03-1.549-.09 2.867 1.849 6.298 2.934 9.965 2.934 11.955 0 18.483-9.9 18.483-18.483 0-.281-.006-.562-.018-.843.961-.695 1.798-1.56 2.465-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="social-link">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" className="social-link">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="social-link">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              &copy; {new Date().getFullYear()} Sales Lead. All rights reserved.
            </p>
            <div className="footer-legal">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#cookies">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>

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

export default HomePage;
