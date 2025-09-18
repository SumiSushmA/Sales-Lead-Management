import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import PageWrapper from './components/PageWrapper/PageWrapper';
import HomePage from './pages/HomePage/HomePage';
import ChatPage from './pages/ChatPage/ChatPage';
import AboutPage from './pages/AboutPage/AboutPage';
import BlogPage from './pages/BlogPage/BlogPage';
import SettingsPage from './pages/SettingsPage/SettingsPage';
import './App.css';


// Main app component
function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;
