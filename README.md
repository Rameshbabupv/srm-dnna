# Deep Neural Network Architectures - Course Dashboard

A beautiful, interactive web-based dashboard for tracking and managing the Deep Neural Network Architectures course (21CSE558T) at SRM University.

## 🎯 Overview

This dashboard provides a comprehensive view of the 15-week M.Tech course, offering multiple perspectives from high-level course overview to detailed weekly planning. It serves as your "mission control" for course preparation, progress tracking, and content organization.

## 🚀 Features

### Multi-Level Course Visualization
- **10,000 feet view**: Semester overview with months, modules, and key milestones
- **1,000 feet view**: Monthly deep-dives with weekly progression
- **Ground level**: Daily lesson plans, tutorials, and assessment details

### Interactive Components
- **Monthly View**: 3-month breakdown with progress tracking
- **Module View**: 5 modules with topics, tutorials, and outcomes
- **Timeline View**: 15-week chronological progression
- **Assessment View**: Unit tests, practicals, and final exam details

### Visual Design
- Modern gradient backgrounds and glass-morphism effects
- Responsive design that works on all devices
- Smooth animations and hover effects
- Color-coded progression and status indicators

## 📁 Directory Structure

```
course-dashboard/
├── index.html              # Main dashboard interface
├── assets/
│   ├── css/
│   │   └── styles.css      # Complete styling system
│   ├── js/
│   │   └── dashboard.js    # Interactive functionality
│   └── images/             # Icons and diagrams (expandable)
├── pages/
│   ├── monthly/            # Detailed monthly breakdown pages
│   │   ├── month-1.html    # Month 1: Foundations (Weeks 1-5)
│   │   ├── month-2.html    # Month 2: Applications (Weeks 6-10)
│   │   └── month-3.html    # Month 3: Modern Architectures (Weeks 11-15)
│   ├── modules/            # Individual module detail pages
│   │   ├── module-1.html   # Introduction to Deep Learning
│   │   ├── module-2.html   # Optimization and Regularization
│   │   ├── module-3.html   # Image Processing & DNNs
│   │   ├── module-4.html   # CNNs and Transfer Learning
│   │   └── module-5.html   # Object Detection
│   └── assessments/        # Assessment detail pages
│       ├── unit-test-1.html
│       ├── unit-test-2.html
│       └── final-exam.html
└── data/
    └── course-data.js      # Centralized course information
```

## 🔧 Technology Stack

- **Frontend**: Pure HTML5, CSS3, JavaScript (no external dependencies)
- **Styling**: Modern CSS with custom properties, gradients, and animations
- **Architecture**: Modular, maintainable, and easily extensible
- **Data**: Centralized JSON-based course information system

## 🎨 Design Philosophy

### Visual Hierarchy
- **Header**: Course title and metadata
- **Navigation**: Tab-based section switching
- **Content Areas**: Cards, grids, and timeline layouts
- **Interactive Elements**: Hover effects and smooth transitions

### Color System
- **Primary Gradient**: Blue to purple (#667eea → #764ba2)
- **Secondary Gradient**: Pink to red (#f093fb → #f5576c)
- **Success Gradient**: Green to teal (#43e97b → #38f9d7)
- **Info Gradient**: Blue to cyan (#4facfe → #00f2fe)
- **Warning Gradient**: Pink to yellow (#fa709a → #fee140)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Hierarchy**: 8 weight variations (300-800)
- **Responsive**: Scales appropriately across devices

## 🚀 Getting Started

### 1. Open the Dashboard
Simply open `index.html` in any modern web browser. No server setup required!

### 2. Navigate Through Views
- **Overview**: Course summary and progress tracking
- **Monthly View**: Detailed monthly planning
- **Modules**: In-depth module breakdowns
- **Timeline**: Week-by-week progression
- **Assessments**: Evaluation schedules and preparation

### 3. Interact with Content
- Click on month cards to highlight relevant weeks in timeline
- Click on module cards to focus on specific learning areas
- Use navigation tabs to switch between different views

## 📊 Course Information

### Course Details
- **Code**: 21CSE558T
- **Title**: Deep Neural Network Architectures
- **Credits**: 3 (2L + 1T + 0P)
- **Duration**: 15 weeks (Aug 11 - Nov 21, 2025)
- **Contact Hours**: 45 hours total

### Module Breakdown
1. **Module 1**: Introduction to Deep Learning (Weeks 1-3)
2. **Module 2**: Optimization and Regularization (Weeks 4-6)
3. **Module 3**: Image Processing & DNNs (Weeks 7-9)
4. **Module 4**: CNNs and Transfer Learning (Weeks 10-12)
5. **Module 5**: Object Detection (Weeks 13-15)

### Assessment Structure
- **CLA-1 (Unit Tests)**: 45% (Unit Test 1: 22.5%, Unit Test 2: 22.5%)
- **CLA-2 (Practice/Lab)**: 15% (Tutorials, projects, presentations)
- **Final Examination**: 40% (Comprehensive assessment)

## 🔄 Living Documentation System

### Easy Content Updates
All course content is centralized in `data/course-data.js`, making it easy to:
- Update weekly objectives and deliverables
- Modify assessment dates and weights
- Add new tutorials or project requirements
- Track progress throughout the semester

### Extensible Architecture
The modular design allows for easy expansion:
- Add new monthly detail pages
- Create specific tutorial instruction pages
- Include project showcase galleries
- Integrate progress tracking systems

## 🛠️ Customization Options

### Adding New Pages
1. Create HTML file in appropriate `pages/` subdirectory
2. Follow existing template structure
3. Link from main dashboard or related pages
4. Update navigation as needed

### Modifying Styles
1. Edit CSS custom properties in `:root` for global changes
2. Add new component styles following existing patterns
3. Maintain responsive design principles
4. Test across different screen sizes

### Updating Course Data
1. Modify `data/course-data.js` for content changes
2. Follow existing data structure
3. Update both static content and dynamic loading
4. Test all dashboard sections for consistency

## 📱 Responsive Design

The dashboard is fully responsive and optimized for:
- **Desktop**: Full feature set with hover effects
- **Tablet**: Touch-optimized with adjusted layouts
- **Mobile**: Stacked layouts with essential information
- **Accessibility**: High contrast support and reduced motion options

## 🎯 Usage Scenarios

### For Course Preparation
- Review monthly planning to understand scope
- Check weekly objectives and deliverables
- Plan tutorial implementations and assignments
- Track assessment schedules and preparation needs

### During Course Delivery
- Monitor progress against planned timeline
- Access quick reference for daily objectives
- Share visual progress with students
- Adjust planning based on actual delivery pace

### For Student Reference
- Understand course structure and expectations
- Track personal progress through learning outcomes
- Access preparation checklists for assessments
- Navigate between related topics and modules

## 🔮 Future Enhancements

### Potential Additions
- **Progress Tracking**: Real-time completion status
- **Calendar Integration**: Export to Google Calendar/Outlook
- **Collaboration**: Student progress sharing
- **Resources**: Direct links to tutorials and materials
- **Analytics**: Learning outcome achievement tracking

### Integration Possibilities
- **LMS Integration**: Canvas, Blackboard, Moodle
- **GitHub**: Link to tutorial repositories
- **Video Content**: Embedded lecture recordings
- **Assessment Tools**: Quiz integration and results

## 📄 License

This project is created for educational purposes as part of the Deep Neural Network Architectures course at SRM University. Feel free to adapt and modify for your own course management needs.

## 🤝 Contributing

To improve or extend this dashboard:
1. Follow the established code structure and naming conventions
2. Maintain the visual design consistency
3. Test across different browsers and devices
4. Document any new features or modifications

---

**Created with ❤️ for effective course management and beautiful learning experiences.**