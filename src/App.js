import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Sidebar from './components/Sidebar/Sidebar';
import DashboardSidebar from './components/DashboardSidebar/DashboardSidebar';
import PageWrapper from './components/PageWrapper/PageWrapper';
import DashboardHeader from './components/DashboardHeader/DashboardHeader';
import HomePage from './pages/HomePage/HomePage';
import ChatPage from './pages/ChatPage/ChatPage';
import AboutPage from './pages/AboutPage/AboutPage';
import BlogPage from './pages/BlogPage/BlogPage';
import SettingsPage from './pages/SettingsPage/SettingsPage';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import LeadDatabasePage from './pages/LeadDatabasePage/LeadDatabasePage';
import './App.css';

// Component for authenticated layout
const AuthenticatedLayout = () => {
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div className="app">
      <DashboardSidebar isVisible={sidebarVisible} />
      <main className={`main-content ${!sidebarVisible ? 'sidebar-hidden' : ''}`}>
        <PageWrapper>
          <Routes>
            <Route path="/dashboard" element={<DashboardPage onToggleSidebar={toggleSidebar} />} />
            <Route path="/leads" element={<LeadDatabasePage onToggleSidebar={toggleSidebar} />} />
            <Route path="/campaigns" element={
              <div className="campaigns-page">
                <DashboardHeader 
                  title="Campaigns" 
                  icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/></svg>}
                  onToggleSidebar={toggleSidebar} 
                />
                <div style={{ padding: '24px', textAlign: 'center', fontSize: '18px', color: '#374151' }}>
                  Campaigns Page
                </div>
              </div>
            } />
            <Route path="/email-sequences" element={
              <div className="email-sequences-page">
                <DashboardHeader 
                  title="Email Sequences" 
                  icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>}
                  onToggleSidebar={toggleSidebar} 
                />
                <div style={{ padding: '24px', textAlign: 'center', fontSize: '18px', color: '#374151' }}>
                  Email Sequences Page
                </div>
              </div>
            } />
            <Route path="/email-templates" element={
              <div className="email-templates-page">
                <DashboardHeader 
                  title="Email Templates" 
                  icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14,2 14,8 20,8"/></svg>}
                  onToggleSidebar={toggleSidebar} 
                />
                <div style={{ padding: '24px', textAlign: 'center', fontSize: '18px', color: '#374151' }}>
                  Email Templates Page
                </div>
              </div>
            } />
            <Route path="/analytics" element={
              <div className="analytics-page">
                <DashboardHeader 
                  title="Analytics" 
                  icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/></svg>}
                  onToggleSidebar={toggleSidebar} 
                />
                <div style={{ padding: '24px', textAlign: 'center', fontSize: '18px', color: '#374151' }}>
                  Analytics Page
                </div>
              </div>
            } />
            <Route path="/users" element={
              <div className="user-management-page">
                <DashboardHeader 
                  title="User Management" 
                  icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>}
                  onToggleSidebar={toggleSidebar} 
                />
                <div style={{ padding: '24px', textAlign: 'center', fontSize: '18px', color: '#374151' }}>
                  User Management Page
                </div>
              </div>
            } />
            <Route path="/admin" element={
              <div className="admin-dashboard-page">
                <DashboardHeader 
                  title="Admin Dashboard" 
                  icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>}
                  onToggleSidebar={toggleSidebar} 
                />
                <div style={{ padding: '24px', textAlign: 'center', fontSize: '18px', color: '#374151' }}>
                  Admin Dashboard Page
                </div>
              </div>
            } />
            <Route path="*" element={<DashboardPage onToggleSidebar={toggleSidebar} />} />
          </Routes>
        </PageWrapper>
      </main>
    </div>
  );
};

// Component for unauthenticated layout
const UnauthenticatedLayout = () => {
  return (
    <div className="app">
      <Sidebar />
      <main className="main-content">
        <PageWrapper>
          <Routes>
            <Route path="/" element={<ChatPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/chat" element={<ChatPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </PageWrapper>
      </main>
    </div>
  );
};

// Main app component
const AppContent = () => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div className="app">
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return isAuthenticated ? <AuthenticatedLayout /> : <UnauthenticatedLayout />;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

export default App;
