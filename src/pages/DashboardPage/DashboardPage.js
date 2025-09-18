import React, { useState } from 'react';
import './DashboardPage.css';

const DashboardPage = ({ onToggleSidebar }) => {
  const [inputValue, setInputValue] = useState('');

  const examplePrompts = [
    "Find CTOs of fintech startups in San Francisco with 50-200 employees",
    "Generate leads for marketing managers at SaaS companies in New York",
    "Find decision makers at healthcare tech companies in Boston",
    "Target retail executives at companies expanding internationally"
  ];


  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleGenerate = () => {
    console.log('Generate clicked with:', inputValue);
  };

  const handleTemplates = () => {
    console.log('Templates clicked');
  };

  const handlePromptClick = (prompt) => {
    setInputValue(prompt);
  };

  return (
    <div className="dashboard-page">
      {/* Header */}
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
              <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
            </svg>
            <span>AI Lead Generation</span>
          </div>
        </div>
        <div className="header-right">
          <button className="pro-button">Pro</button>
        </div>
      </div>

      {/* Main Content */}
      <div className="dashboard-content">
        <div className="content-layout">
          {/* Example Prompts Section */}
          <div className="prompts-section">
              <div className="prompts-header">
                <div className="prompts-title">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12l2 2 4-4"/>
                    <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3"/>
                    <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3"/>
                    <path d="M13 12h3"/>
                    <path d="M8 12h3"/>
                  </svg>
                  <span>Example Prompts</span>
                </div>
                <p className="prompts-subtitle">
                  Try these prompts to get started, or create your own
                </p>
              </div>
              
              <div className="prompts-list">
                {examplePrompts.map((prompt, index) => (
                  <div key={index} className="prompt-item" onClick={() => handlePromptClick(prompt)}>
                    {prompt}
                  </div>
                ))}
              </div>
            </div>

        </div>

        {/* Input Section */}
        <div className="input-section">
          <div className="input-container">
            <input
              type="text"
              placeholder="Describe your ideal leads... (e.g., 'Find CTOs at Series A startups in fintech')"
              value={inputValue}
              onChange={handleInputChange}
              className="lead-input"
            />
            <button className="send-button">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </button>
          </div>
          
          <div className="action-buttons">
            <button className="action-button generate-button" onClick={handleGenerate}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
              </svg>
              Generate
            </button>
            <button className="action-button templates-button" onClick={handleTemplates}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14,2 14,8 20,8"/>
              </svg>
              Templates
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
