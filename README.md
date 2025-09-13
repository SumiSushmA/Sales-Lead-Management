# Sales Lead Management System

A modern, responsive sales lead management system built with React, featuring 3D animations and a beautiful glassy header design.

## Features

### Header
- ✨ **Transparency Glassy Effect** - Beautiful frosted glass appearance with backdrop blur
- 🌓 **Dark & Light Theme** - Toggle between themes with smooth transitions
- 📱 **Responsive Design** - Works perfectly on all device sizes
- 🎯 **Smart Scroll Behavior** - Header hides on scroll down, appears on scroll up
- 🎨 **Modern Design** - Matches the provided design with professional styling

### Homepage
- 🎭 **3D Animations** - Interactive 3D sphere with distortion effects using Three.js
- 🚀 **Smooth Animations** - Framer Motion powered animations throughout
- 📊 **Feature Showcase** - Beautiful cards highlighting system capabilities
- 💫 **Gradient Effects** - Modern gradient backgrounds and text effects

## Tech Stack

- **React 18** - Modern React with hooks
- **Three.js** - 3D graphics and animations
- **Framer Motion** - Smooth animations and transitions
- **Styled Components** - CSS-in-JS styling
- **React Three Fiber** - React renderer for Three.js
- **React Three Drei** - Useful helpers for React Three Fiber

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```

3. **Open in Browser**
   Navigate to `http://localhost:3000`

## Project Structure

```
src/
├── components/
│   └── Header/
│       ├── Header.js          # Main header component
│       └── Header.css         # Header styles
├── pages/
│   └── HomePage/
│       ├── HomePage.js        # Homepage with 3D animations
│       └── HomePage.css       # Homepage styles
├── contexts/
│   └── ThemeContext.js        # Theme management context
├── App.js                     # Main app component
├── App.css                    # Global app styles
├── index.js                   # App entry point
└── index.css                  # Global styles
```

## Key Components

### Header Component
- Fixed position with glassy transparency effect
- Smooth hide/show on scroll
- Theme toggle functionality
- Mobile-responsive navigation
- Matches the provided design exactly

### HomePage Component
- 3D animated sphere using Three.js
- Interactive features section
- Smooth scroll animations
- Call-to-action sections
- Fully responsive design

## Customization

### Themes
The app supports both light and dark themes. The theme preference is saved in localStorage and respects system preferences.

### Colors
Main color scheme uses a gradient from `#667eea` to `#764ba2` with accent color `#00d4aa`.

### Animations
All animations use Framer Motion for smooth, performant transitions.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this project for your own needs.
