import React, { useState } from 'react';
import './LeadDatabasePage.css';

const LeadDatabasePage = ({ onToggleSidebar }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('All Industries');
  const [selectedLeads, setSelectedLeads] = useState([]);
  const [starredLeads, setStarredLeads] = useState([]);
  const [activeTab, setActiveTab] = useState('all');

  // Sample lead data
  const leads = [
    {
      id: 1,
      name: 'Sarah Chen',
      location: 'San Francisco, CA',
      title: 'Chief Technology Officer',
      company: 'FinanceFlow',
      industry: 'Financial Technology',
      score: 92,
      tags: ['CTO', 'Fintech', '+2'],
      starred: false
    },
    {
      id: 2,
      name: 'David Thompson',
      location: 'New York, NY',
      title: 'Chief Marketing Officer',
      company: 'TechFlow',
      industry: 'Software as a Service',
      score: 90,
      tags: ['CMO', 'SaaS', '+2'],
      starred: false
    },
    {
      id: 3,
      name: 'Michael Rodriguez',
      location: 'San Francisco, CA',
      title: 'VP of Engineering',
      company: 'PayScale Pro',
      industry: 'Financial Technology',
      score: 88,
      tags: ['VP Engineering', 'Security', '+1'],
      starred: false
    },
    {
      id: 4,
      name: 'Jennifer Kim',
      location: 'San Francisco, CA',
      title: 'Head of Product',
      company: 'CryptoLogic',
      industry: 'Cryptocurrency',
      score: 85,
      tags: ['Product Manager', 'DeFi', '+2'],
      starred: false
    }
  ];

  const industries = ['All Industries', 'Financial Technology', 'Software as a Service', 'Cryptocurrency'];

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleIndustryChange = (e) => {
    setSelectedIndustry(e.target.value);
  };

  const handleClearSearch = () => {
    setSearchTerm('');
  };

  const handleClearFilters = () => {
    setSearchTerm('');
    setSelectedIndustry('All Industries');
  };

  const handleSelectLead = (leadId) => {
    setSelectedLeads(prev => 
      prev.includes(leadId) 
        ? prev.filter(id => id !== leadId)
        : [...prev, leadId]
    );
  };

  const handleSelectAll = () => {
    if (selectedLeads.length === leads.length) {
      setSelectedLeads([]);
    } else {
      setSelectedLeads(leads.map(lead => lead.id));
    }
  };

  const handleStarLead = (leadId) => {
    setStarredLeads(prev => 
      prev.includes(leadId) 
        ? prev.filter(id => id !== leadId)
        : [...prev, leadId]
    );
  };

  const filteredLeads = leads.filter(lead => {
    // Search functionality
    const searchLower = searchTerm.toLowerCase();
    const matchesSearch = searchTerm === '' || 
                         lead.name.toLowerCase().includes(searchLower) ||
                         lead.company.toLowerCase().includes(searchLower) ||
                         lead.title.toLowerCase().includes(searchLower) ||
                         lead.location.toLowerCase().includes(searchLower);
    
    // Industry filter
    const matchesIndustry = selectedIndustry === 'All Industries' || lead.industry === selectedIndustry;
    
    // Tab filter (All Leads vs Starred Leads)
    const matchesTab = activeTab === 'all' || (activeTab === 'starred' && starredLeads.includes(lead.id));
    
    return matchesSearch && matchesIndustry && matchesTab;
  });

  const starredLeadsCount = starredLeads.length;
  const totalLeads = leads.length;

  return (
    <div className="lead-database-page">
      {/* Top Header with Hamburger Menu */}
      <div className="dashboard-header">
        <div className="header-left">
          <button className="menu-button" onClick={onToggleSidebar}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6"/>
              <line x1="3" y1="12" x2="21" y2="12"/>
              <line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          </button>
          <div className="header-title">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
            <span>Lead Management</span>
          </div>
        </div>
        <div className="header-right">
          <button className="pro-button">Pro</button>
        </div>
      </div>

      {/* Page Header */}
      <div className="page-header">
        <div className="header-content">
          <h1 className="page-title">Lead Database</h1>
          <p className="page-subtitle">
            {totalLeads} total leads • {starredLeadsCount} starred • {selectedLeads.length} selected
          </p>
        </div>
        
        <div className="header-tabs">
          <button 
            className={`tab-button ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All Leads ({totalLeads})
          </button>
          <button 
            className={`tab-button ${activeTab === 'starred' ? 'active' : ''}`}
            onClick={() => setActiveTab('starred')}
          >
            Starred Leads ({starredLeadsCount})
          </button>
        </div>
      </div>

      {/* Search and Filter Bar */}
      <div className="search-filter-bar">
        <div className="search-container">
          <div className="search-input-wrapper">
            <svg className="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/>
              <path d="m21 21-4.35-4.35"/>
            </svg>
            <input
              type="text"
              placeholder="Search leads by name, company, title, or location..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="search-input"
            />
            {searchTerm && (
              <button 
                className="clear-search-btn"
                onClick={handleClearSearch}
                title="Clear search"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            )}
          </div>
        </div>
        
        <div className="filter-container">
          <svg className="filter-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="22,3 2,3 10,12.46 10,19 14,21 14,12.46"/>
          </svg>
          <select 
            value={selectedIndustry} 
            onChange={handleIndustryChange}
            className="industry-select"
          >
            {industries.map(industry => (
              <option key={industry} value={industry}>{industry}</option>
            ))}
          </select>
          {(searchTerm || selectedIndustry !== 'All Industries') && (
            <button 
              className="clear-filters-btn"
              onClick={handleClearFilters}
              title="Clear all filters"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Table */}
      <div className="table-container">
        <div className="table-header">
          <div className="table-info">
            <span>
              Showing {filteredLeads.length > 0 ? `1-${filteredLeads.length}` : '0'} of {filteredLeads.length} leads
              {searchTerm && ` (filtered by "${searchTerm}")`}
              {selectedIndustry !== 'All Industries' && ` (${selectedIndustry})`}
            </span>
          </div>
          <div className="table-controls">
            <select className="show-select">
              <option value="10">Show: 10</option>
              <option value="25">Show: 25</option>
              <option value="50">Show: 50</option>
            </select>
            <div className="pagination">
              <button className="pagination-btn" disabled>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="15,18 9,12 15,6"/>
                </svg>
              </button>
              <span className="pagination-text">Page 1 of 1</span>
              <button className="pagination-btn" disabled>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9,18 15,12 9,6"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="table-wrapper">
          <table className="leads-table">
            <thead>
              <tr>
                <th className="checkbox-col">
                  <input 
                    type="checkbox" 
                    checked={selectedLeads.length === leads.length && leads.length > 0}
                    onChange={handleSelectAll}
                  />
                </th>
                <th className="star-col">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
                  </svg>
                </th>
                <th className="name-col">
                  Name
                  <svg className="sort-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="6,9 12,15 18,9"/>
                  </svg>
                </th>
                <th className="title-col">
                  Title
                  <svg className="sort-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="6,9 12,15 18,9"/>
                  </svg>
                </th>
                <th className="company-col">
                  Company
                  <svg className="sort-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="6,9 12,15 18,9"/>
                  </svg>
                </th>
                <th className="industry-col">
                  Industry
                  <svg className="sort-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="6,9 12,15 18,9"/>
                  </svg>
                </th>
                <th className="score-col">
                  Score
                  <svg className="sort-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="6,9 12,15 18,9"/>
                  </svg>
                </th>
                <th className="tags-col">Tags</th>
                <th className="actions-col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredLeads.length === 0 ? (
                <tr>
                  <td colSpan="9" className="no-results">
                    <div className="no-results-content">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                        <circle cx="11" cy="11" r="8"/>
                        <path d="m21 21-4.35-4.35"/>
                      </svg>
                      <h3>No leads found</h3>
                      <p>
                        {searchTerm || selectedIndustry !== 'All Industries' 
                          ? 'Try adjusting your search or filter criteria'
                          : 'No leads available'
                        }
                      </p>
                      {(searchTerm || selectedIndustry !== 'All Industries') && (
                        <button 
                          className="clear-filters-btn-large"
                          onClick={handleClearFilters}
                        >
                          Clear Filters
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ) : (
                filteredLeads.map(lead => (
                <tr key={lead.id} className="lead-row">
                  <td className="checkbox-col">
                    <input 
                      type="checkbox" 
                      checked={selectedLeads.includes(lead.id)}
                      onChange={() => handleSelectLead(lead.id)}
                    />
                  </td>
                  <td className="star-col">
                    <button 
                      className={`star-button ${starredLeads.includes(lead.id) ? 'starred' : ''}`}
                      onClick={() => handleStarLead(lead.id)}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
                      </svg>
                    </button>
                  </td>
                  <td className="name-col">
                    <div className="lead-name">
                      <div className="name">{lead.name}</div>
                      <div className="location">{lead.location}</div>
                    </div>
                  </td>
                  <td className="title-col">{lead.title}</td>
                  <td className="company-col">{lead.company}</td>
                  <td className="industry-col">
                    <span className="industry-tag">{lead.industry}</span>
                  </td>
                  <td className="score-col">
                    <span className="score-tag">{lead.score}</span>
                  </td>
                  <td className="tags-col">
                    <div className="tags">
                      {lead.tags.map((tag, index) => (
                        <span key={index} className="tag">{tag}</span>
                      ))}
                    </div>
                  </td>
                  <td className="actions-col">
                    <div className="action-buttons">
                      <button className="action-btn email-btn" title="Email">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                          <polyline points="22,6 12,13 2,6"/>
                        </svg>
                      </button>
                      <button className="action-btn phone-btn" title="Phone">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                        </svg>
                      </button>
                      <button className="action-btn chat-btn" title="Chat">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LeadDatabasePage;
