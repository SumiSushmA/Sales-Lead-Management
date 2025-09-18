import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import MessageBox from '../MessageBox/MessageBox';
import './DashboardSidebar.css';

const DashboardSidebar = ({ isVisible = true }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { logout } = useAuth();
  const [messageBox, setMessageBox] = useState({
    isVisible: false,
    type: 'success',
    message: ''
  });

  const handleLogout = () => {
    logout();
    setMessageBox({
      isVisible: true,
      type: 'success',
      message: 'Logged out successfully!'
    });
    navigate('/');
  };

  const handleCloseMessageBox = () => {
    setMessageBox({
      isVisible: false,
      type: 'success',
      message: ''
    });
  };

  const menuItems = [
    {
      id: 'ai-lead-gen',
      label: 'AI Lead Gen',
      subLabel: 'Generate new leads',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
        </svg>
      ),
      path: '/dashboard'
    },
    {
      id: 'lead-database',
      label: 'Lead Database',
      subLabel: 'Manage all leads',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14,2 14,8 20,8"/>
        </svg>
      ),
      path: '/leads'
    },
    {
      id: 'campaigns',
      label: 'Campaigns',
      subLabel: 'Organize lead campaigns',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <circle cx="12" cy="12" r="3"/>
        </svg>
      ),
      path: '/campaigns'
    },
    {
      id: 'email-sequences',
      label: 'Email Sequences',
      subLabel: 'Automated sequences',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      ),
      path: '/email-sequences'
    },
    {
      id: 'email-templates',
      label: 'Email Templates',
      subLabel: 'Reusable templates',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14,2 14,8 20,8"/>
          <path d="M16 13H8"/>
          <path d="M16 17H8"/>
          <polyline points="10,9 9,9 8,9"/>
        </svg>
      ),
      path: '/email-templates'
    },
    {
      id: 'user-management',
      label: 'User Management',
      subLabel: 'Manage team members',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
      ),
      path: '/users'
    },
    {
      id: 'admin-dashboard',
      label: 'Admin Dashboard',
      subLabel: 'System overview',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
      path: '/admin'
    }
  ];

  const sections = [
    {
      title: 'LEAD GENERATION',
      items: menuItems.slice(0, 1)
    },
    {
      title: 'LEAD MANAGEMENT',
      items: menuItems.slice(1, 3)
    },
    {
      title: 'OUTREACH & EMAIL',
      items: menuItems.slice(3, 5)
    },
    {
      title: 'ADMINISTRATION',
      items: menuItems.slice(5, 7)
    }
  ];

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className={`dashboard-sidebar ${!isVisible ? 'sidebar-hidden' : ''}`}>
      {/* Logo */}
      <div className="sidebar-header">
        <div className="logo">
          <div className="logo-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5z"/>
              <path d="M2 17l10 5 10-5"/>
              <path d="M2 12l10 5 10-5"/>
            </svg>
          </div>
          <div className="logo-text">
            <div className="logo-title">Evecta</div>
            <div className="logo-subtitle">AI-Powered Platform</div>
          </div>
        </div>
      </div>

      {/* Navigation Sections */}
      <div className="sidebar-nav">
        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="nav-section">
            <div className="section-header">{section.title}</div>
            <div className="section-items">
              {section.items.map((item) => (
                <button
                  key={item.id}
                  className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
                  onClick={() => handleNavigation(item.path)}
                >
                  <div className="nav-icon-container">
                    <div className="nav-icon">{item.icon}</div>
                  </div>
                  <div className="nav-content">
                    <div className="nav-label">{item.label}</div>
                    <div className="nav-sublabel">{item.subLabel}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Logout Button */}
      <div className="sidebar-footer">
        <button className="logout-button" onClick={handleLogout}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
            <polyline points="16,17 21,12 16,7"/>
            <line x1="21" y1="12" x2="9" y2="12"/>
          </svg>
          Logout
        </button>
      </div>

      {/* Custom Message Box */}
      <MessageBox
        type={messageBox.type}
        message={messageBox.message}
        isVisible={messageBox.isVisible}
        onClose={handleCloseMessageBox}
      />
    </div>
  );
};

export default DashboardSidebar;
