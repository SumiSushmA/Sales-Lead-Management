import React from 'react';
import './DashboardHeader.css';

const DashboardHeader = ({ title, icon, onToggleSidebar }) => {
  return (
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
          {icon}
          <span>{title}</span>
        </div>
      </div>
      <div className="header-right">
        <button className="pro-button">Pro</button>
      </div>
    </div>
  );
};

export default DashboardHeader;
