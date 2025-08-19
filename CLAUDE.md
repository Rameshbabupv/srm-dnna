# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a comprehensive web-based course dashboard for **Deep Neural Network Architectures (21CSE558T)**, a 3-credit M.Tech course at SRM University. The project creates an interactive, beautiful, and engaging learning management system that integrates all course components into a single cohesive platform.

## Development Commands

### Local Development Server
```bash
# Start a local HTTP server for development
python3 -m http.server 8000
# or
python -m http.server 8000
```

Then open `http://localhost:8000` in your browser to view the dashboard.

### File Serving
This is a **static website** with no build process required. Simply open `index.html` in any modern web browser or serve it via a local HTTP server for development.

### Linting and Testing
- **No formal testing framework** is currently implemented
- **Manual testing**: Open pages in different browsers and screen sizes
- **Code validation**: Use browser developer tools to check for JavaScript errors
- **CSS validation**: Verify responsive design across mobile, tablet, and desktop

### Project Structure
```
course-dashboard/
├── CLAUDE.md                    # This file - Claude AI guidance
├── README.md                    # Project documentation
├── index.html                   # Main dashboard interface
├── assets/
│   ├── css/
│   │   └── styles.css          # Complete styling system
│   └── js/
│       └── dashboard.js        # Interactive functionality
├── data/
│   └── course-data.js          # Centralized course information
├── pages/
│   ├── modules/                # Individual module detail pages
│   │   ├── module-1.html       # Introduction to Deep Learning
│   │   ├── module-2.html       # Optimization & Regularization
│   │   ├── module-3.html       # Image Processing & DNNs
│   │   ├── module-4.html       # CNNs & Transfer Learning
│   │   └── module-5.html       # Object Detection & Localization
│   ├── assessments/            # Assessment preparation pages
│   │   ├── unit-test-1.html    # Modules 1-2 preparation
│   │   ├── mid-term-practical.html # Hands-on lab assessment
│   │   ├── unit-test-2.html    # Modules 3-4 preparation
│   │   └── final-examination.html # Comprehensive final prep
│   └── tutorials/              # Tutorial instruction system
│       ├── index.html          # Tutorial hub with progress tracking
│       ├── tutorial-T1.html    # Perceptron Implementation
│       ├── tutorial-T2.html    # MLP & Backpropagation
│       ├── tutorial-T3.html    # TensorFlow Neural Network
│       ├── tutorial-T10.html   # CNN from Scratch
│       ├── tutorial-T15.html   # End-to-End Application (Capstone)
│       └── [T4-T14].html       # Additional tutorial pages
```

## Code Architecture

### Core Architecture Pattern
This is a **client-side single-page application** with a modular architecture:

1. **Data Layer** (`data/course-data.js`): Centralized configuration containing all course information, structured as JavaScript objects
2. **Presentation Layer** (`index.html`): Main dashboard with tabbed navigation between different views
3. **Logic Layer** (`assets/js/dashboard.js`): JavaScript class-based controllers managing dynamic content and user interactions
4. **Style Layer** (`assets/css/styles.css`): CSS custom properties and component-based styling system

### Dual Architecture System
The project has **two parallel architectures**:

1. **Main Dashboard** (`/index.html`): Single-file dashboard with all sections in one page
2. **Modular System** (`/course-dashboard-modular/`): Separate pages for each component with individual controllers:
   - Each module has its own: `index.html`, `module.js`, `module.css`, `data.js`
   - Each tutorial has its own: `index.html`, `tutorial.js`, `tutorial.css`, `data.js`
   - Each assessment has its own: `index.html`, `assessment.js`, `assessment.css`, `data.js`

### Data Flow
1. **Load Phase**: `course-data.js` loads centralized data → Dashboard class initializes → Content renders dynamically
2. **User Interaction**: Click events → Class methods update DOM → Visual feedback and navigation
3. **State Management**: Local storage for progress tracking → No server-side persistence

### JavaScript Class Structure
```javascript
class CourseDashboard {
    constructor() // Initialize dashboard
    loadLearningOutcomes() // Dynamic content loading
    loadMonthCards() // Render monthly view
    loadModuleCards() // Render module cards
    loadTimeline() // Render week-by-week timeline
    loadAssessments() // Load assessment information
}

// Modular components use similar patterns
class Module2Controller extends BaseController
class TutorialT1Controller extends BaseController
```

## Key Features Implemented

### 🎨 Visual Design System
- **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox
- **Glass-morphism Effects**: Modern translucent card designs with backdrop filters
- **Gradient System**: Consistent color theming with CSS custom properties
- **Interactive Elements**: Hover effects, animations, and smooth transitions
- **Accessibility**: Proper contrast ratios, semantic HTML, and keyboard navigation

### 📊 Dashboard Components
- **Overview Section**: Course progress, learning outcomes, and quick stats
- **Monthly View**: Detailed monthly planning with weekly breakdowns
- **Modules Section**: 5 comprehensive modules with progressive difficulty
- **Timeline View**: Visual course progression with milestones
- **Assessments Hub**: 4 major evaluations with study guides
- **Tutorials System**: 15 hands-on programming tutorials with step-by-step instructions

### 🔧 Technical Implementation
- **Modular Architecture**: Separation of concerns with dedicated JS and CSS files
- **Data-Driven Content**: Centralized course data in `course-data.js`
- **Local Storage Integration**: Progress tracking and user preferences
- **Interactive Navigation**: Tab-based interface with smooth transitions
- **Copy-to-Clipboard**: Code examples with one-click copying
- **Progress Tracking**: Real-time completion status across all components

## Development Guidelines

### Code Standards
- **HTML5 Semantic Elements**: Use proper semantic tags for accessibility
- **CSS Custom Properties**: Maintain consistent theming with CSS variables
- **Modular JavaScript**: ES6+ features with clear function separation
- **Responsive Design**: Mobile-first approach with progressive enhancement
- **Performance Optimization**: Efficient selectors and minimal DOM manipulation

### File Organization
- **Atomic Design**: Components built from small, reusable pieces
- **Clear Naming**: Descriptive file names and CSS class conventions
- **Consistent Structure**: Similar layout patterns across all pages
- **Asset Management**: Organized directory structure for easy maintenance

### Content Management
- **Centralized Data**: All course information in `data/course-data.js`
- **Template Consistency**: Standardized layouts across all pages
- **Progressive Disclosure**: Information hierarchy from overview to details
- **Educational Flow**: Logical progression from basic to advanced concepts

## Working with the Codebase

### Making Content Changes
1. **Course Data Updates**: Modify `data/course-data.js` - this single file controls most dynamic content
2. **Styling Changes**: Edit `assets/css/styles.css` - uses CSS custom properties for consistent theming
3. **Functionality**: Update `assets/js/dashboard.js` for main dashboard or individual controller files in modular system

### Adding New Pages
1. **Main Dashboard**: Add new sections to `index.html` and corresponding methods to `dashboard.js`
2. **Modular System**: Create new directory with 4 files: `index.html`, `controller.js`, `styles.css`, `data.js`

### Code Conventions
- **CSS**: BEM-inspired naming with utility classes
- **JavaScript**: ES6+ classes with consistent naming patterns (`loadX()`, `renderX()`, `handleX()`)
- **HTML**: Semantic HTML5 elements with ARIA attributes for accessibility
- **Data**: JavaScript objects with consistent structure (id, title, content properties)

## User Experience Focus

### Learning Journey
- **Progressive Complexity**: Beginner → Intermediate → Advanced → Expert
- **Visual Hierarchy**: Clear information organization and flow
- **Interactive Elements**: Engaging user interface with immediate feedback
- **Goal Tracking**: Progress indicators and completion status
- **Resource Integration**: Seamless navigation between related content

### Accessibility Features
- **Keyboard Navigation**: Full functionality without mouse
- **Screen Reader Support**: Proper ARIA labels and semantic structure
- **Color Contrast**: WCAG compliance for visual accessibility
- **Responsive Text**: Scalable typography for different devices
- **Clear Feedback**: Visual and textual status indicators

## Course-Specific Implementation

### Academic Calendar Integration
- **15-Week Structure**: Aug 11 - Nov 21, 2025 schedule
- **Day 3/Day 4 Format**: Wednesday (8:00am-9:40am) + Thursday (4:00pm-4:50pm)
- **Assessment Timeline**: Unit tests, practical, and final examination scheduling
- **Module Progression**: 5 modules with clear learning objectives and outcomes

### Technical Curriculum Alignment
- **Tutorial Progression**: T1 (Perceptron) → T15 (End-to-End Application)
- **Skill Development**: From basic neural networks to production deployment
- **Technology Stack**: Python, TensorFlow, OpenCV, FastAPI, React
- **Assessment Integration**: Theory + Practical + Integration approach

### Educational Best Practices
- **Constructivist Learning**: Building knowledge through hands-on experience
- **Scaffolded Instruction**: Support structures that can be gradually removed
- **Authentic Assessment**: Real-world projects and practical applications
- **Reflective Practice**: Opportunities for students to assess their own learning

## Maintenance and Updates

### Content Updates
- **Course Data**: Modify `data/course-data.js` for schedule or content changes
- **Module Content**: Update individual module pages for curriculum changes
- **Tutorial Instructions**: Enhance tutorial pages with new technologies or methods
- **Assessment Criteria**: Adjust evaluation rubrics based on learning outcomes

### Technical Maintenance
- **Performance Monitoring**: Regular testing of page load times and responsiveness
- **Cross-Browser Testing**: Ensure compatibility across different browsers
- **Mobile Optimization**: Continuous improvement of mobile user experience
- **Accessibility Audits**: Regular checks for WCAG compliance

### Future Enhancements
- **Video Integration**: Embedded lecture videos and tutorial demonstrations
- **Interactive Coding**: In-browser code execution and testing
- **Collaboration Features**: Student discussion forums and peer review
- **Analytics Dashboard**: Learning analytics and progress insights
- **LMS Integration**: Connection with institutional learning management systems

## Deployment Considerations

### Production Readiness
- **Static Site Hosting**: Optimized for CDN deployment (Netlify, Vercel, GitHub Pages)
- **Asset Optimization**: Minified CSS/JS and optimized images
- **Caching Strategy**: Proper cache headers for static assets
- **SEO Optimization**: Meta tags, structured data, and semantic HTML

### Security & Privacy
- **Client-Side Only**: No server-side dependencies or data collection
- **Local Storage**: Student progress stored locally, not transmitted
- **External Resources**: Minimal dependencies on external services
- **Content Security**: No dynamic content injection or user-generated content

## Integration Points

### External Tools
- **Google Colab**: Links to interactive Python notebooks
- **GitHub**: Code repository integration for tutorial materials
- **TensorFlow**: Official documentation and API references
- **OpenCV**: Computer vision library documentation and tutorials

### Assessment Systems
- **Rubric Integration**: Detailed evaluation criteria for each component
- **Progress Tracking**: Visual indicators for completion status
- **Portfolio Development**: Student work organization and presentation
- **Peer Review**: Structured feedback mechanisms for collaborative learning

## Quick Start for Developers

### Local Development
1. **Clone Repository**: Download or clone the project files
2. **Open in Browser**: Navigate to `index.html` in a web browser
3. **Development Server**: Use Live Server or similar tool for hot reloading
4. **Testing**: Verify functionality across different devices and browsers

### Making Changes
1. **Content Updates**: Modify `data/course-data.js` for course information
2. **Styling Changes**: Update `assets/css/styles.css` for visual modifications
3. **Functionality**: Enhance `assets/js/dashboard.js` for interactive features
4. **New Pages**: Follow existing patterns for consistent user experience

### Quality Assurance
1. **Responsive Testing**: Verify layouts on mobile, tablet, and desktop
2. **Performance Check**: Ensure fast loading times and smooth interactions
3. **Accessibility Audit**: Test with screen readers and keyboard navigation
4. **Cross-Browser**: Verify compatibility with major browsers

---

This dashboard represents a complete educational technology solution that combines modern web development practices with pedagogically sound instructional design to create an engaging and effective learning environment for deep learning education.