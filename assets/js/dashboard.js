// Dashboard JavaScript - Interactive Course Management System

class CourseDashboard {
    constructor() {
        this.currentWeek = 0; // Will be updated based on current date
        this.init();
    }

    init() {
        this.loadLearningOutcomes();
        this.loadMonthCards();
        this.loadModuleCards();
        this.loadTimeline();
        this.loadAssessments();
        this.initializeEventListeners();
        this.updateProgress();
    }

    initializeEventListeners() {
        // Navigation tab clicks
        document.querySelectorAll('.nav-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                this.updateActiveTab(tab);
            });
        });

        // Card click handlers for navigation
        document.addEventListener('click', (e) => {
            if (e.target.closest('.month-card')) {
                this.handleMonthClick(e.target.closest('.month-card'));
            }
            if (e.target.closest('.module-card')) {
                this.handleModuleClick(e.target.closest('.module-card'));
            }
            if (e.target.closest('.assessment-card')) {
                this.handleAssessmentClick(e.target.closest('.assessment-card'));
            }
        });
    }

    updateActiveTab(activeTab) {
        document.querySelectorAll('.nav-tab').forEach(tab => {
            tab.classList.remove('active');
        });
        activeTab.classList.add('active');
    }

    loadLearningOutcomes() {
        const container = document.getElementById('learning-outcomes');
        const outcomes = courseData.learningOutcomes;
        
        container.innerHTML = outcomes.map(outcome => `
            <div class="detail-row">
                <span class="detail-label">${outcome.id}</span>
                <span class="detail-value">Week ${outcome.targetWeek}</span>
            </div>
            <p style="margin-bottom: 15px; font-size: 0.9rem; opacity: 0.9;">${outcome.text}</p>
        `).join('');
    }

    loadMonthCards() {
        const container = document.getElementById('months-container');
        const months = courseData.months;
        
        container.innerHTML = months.map(month => `
            <div class="month-card hover-lift" data-month="${month.id}">
                <div class="month-header">
                    <div class="month-number">${month.id}</div>
                    <div>
                        <h3 class="month-title">${month.title}</h3>
                        <p class="month-period">${month.period}</p>
                    </div>
                </div>
                
                <div class="month-stats">
                    <div class="stat-item">
                        <span class="stat-number">${month.weeks.length}</span>
                        <span class="stat-label">Weeks</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">${month.modules.length}</span>
                        <span class="stat-label">Modules</span>
                    </div>
                </div>
                
                <div class="milestones">
                    <h4>🎯 Key Milestones</h4>
                    <ul class="milestone-list">
                        ${month.keyMilestones.map(milestone => `<li>${milestone}</li>`).join('')}
                    </ul>
                </div>
                
                <div style="margin-top: 20px;">
                    <div class="progress-label">
                        <span>Month Progress</span>
                        <span>${this.getMonthProgress(month.id)}%</span>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${this.getMonthProgress(month.id)}%"></div>
                    </div>
                </div>
            </div>
        `).join('');
    }

    loadModuleCards() {
        const container = document.getElementById('modules-container');
        const modules = courseData.modules;
        
        container.innerHTML = modules.map(module => `
            <div class="module-card hover-lift" data-module="${module.id}">
                <div class="module-number">${module.id}</div>
                <h3 class="card-title">${module.title}</h3>
                
                <div class="module-info">
                    <div class="module-badge">📅 Weeks ${module.weeks}</div>
                    <div class="module-badge">⏱️ ${module.duration}</div>
                </div>
                
                <div class="topics-list">
                    <h4>📚 Key Topics</h4>
                    <div class="topic-tags">
                        ${module.topics.map(topic => `<span class="topic-tag">${topic}</span>`).join('')}
                    </div>
                </div>
                
                <div class="tutorials-section">
                    <h4>💻 Tutorials</h4>
                    ${module.tutorials.map(tutorial => `
                        <div class="tutorial-item">${tutorial}</div>
                    `).join('')}
                </div>
                
                <div style="margin-top: 20px;">
                    <div class="progress-label">
                        <span>Module Progress</span>
                        <span>${this.getModuleProgress(module.id)}%</span>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${this.getModuleProgress(module.id)}%"></div>
                    </div>
                </div>
            </div>
        `).join('');
    }

    loadTimeline() {
        const container = document.getElementById('timeline-container');
        const weeks = Object.entries(courseData.weekly);
        
        container.innerHTML = weeks.map(([weekNum, week], index) => `
            <div class="timeline-item" data-week="${weekNum}">
                <div class="timeline-content">
                    <div class="timeline-marker"></div>
                    <h3 style="margin-bottom: 10px; color: #60a5fa;">Week ${weekNum}: ${week.title}</h3>
                    <p style="margin-bottom: 15px; opacity: 0.9;">Module ${week.module}</p>
                    
                    ${week.schedule ? `
                    <div style="margin-bottom: 15px; background: rgba(79, 172, 254, 0.1); padding: 15px; border-radius: 8px; border-left: 3px solid #4facfe;">
                        <h4 style="color: #4facfe; margin-bottom: 10px;">📅 Weekly Schedule</h4>
                        <div style="margin-bottom: 10px;">
                            <strong>${week.schedule.day3.day}:</strong> ${week.schedule.day3.time} (${week.schedule.day3.duration})<br>
                            <small style="opacity: 0.8;">${week.schedule.day3.content}</small>
                        </div>
                        <div>
                            <strong>${week.schedule.day4.day}:</strong> ${week.schedule.day4.time} (${week.schedule.day4.duration})<br>
                            <small style="opacity: 0.8;">${week.schedule.day4.content}</small>
                        </div>
                    </div>
                    ` : ''}
                    
                    <div style="margin-bottom: 15px;">
                        <h4 style="color: #fbbf24; margin-bottom: 8px;">🎯 Objectives</h4>
                        <ul style="list-style: none; padding-left: 0;">
                            ${week.objectives.map(obj => `<li style="margin-bottom: 5px; padding-left: 20px; position: relative;">
                                <span style="position: absolute; left: 0; color: #10b981;">•</span>
                                ${obj}
                            </li>`).join('')}
                        </ul>
                    </div>
                    
                    <div style="margin-bottom: 15px;">
                        <h4 style="color: #34d399; margin-bottom: 8px;">📋 Deliverables</h4>
                        <ul style="list-style: none; padding-left: 0;">
                            ${week.deliverables.map(del => `<li style="margin-bottom: 5px; padding-left: 20px; position: relative;">
                                <span style="position: absolute; left: 0; color: #f59e0b;">•</span>
                                ${del}
                            </li>`).join('')}
                        </ul>
                    </div>
                    
                    <div style="background: rgba(52, 211, 153, 0.1); padding: 10px; border-radius: 8px; border-left: 3px solid #34d399;">
                        <strong>💻 Tutorial:</strong> ${week.tutorial}
                    </div>
                    
                    <div style="margin-top: 15px;">
                        <span class="status-badge ${parseInt(weekNum) <= this.currentWeek ? 'status-completed' : 'status-upcoming'}">
                            ${parseInt(weekNum) <= this.currentWeek ? 'Completed' : 'Upcoming'}
                        </span>
                    </div>
                </div>
            </div>
        `).join('');
    }

    loadAssessments() {
        const container = document.getElementById('assessments-container');
        const assessments = courseData.assessments;
        
        container.innerHTML = assessments.map(assessment => `
            <div class="assessment-card hover-lift">
                <h3 class="assessment-type">${assessment.type}</h3>
                <p class="assessment-date">📅 ${assessment.date}</p>
                
                <div class="assessment-details">
                    <div class="detail-row">
                        <span class="detail-label">Coverage</span>
                        <span class="detail-value">${assessment.coverage}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Weight</span>
                        <span class="detail-value">${assessment.weight}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Status</span>
                        <span class="status-badge status-${assessment.status}">${assessment.status.charAt(0).toUpperCase() + assessment.status.slice(1)}</span>
                    </div>
                </div>
                
                ${this.getAssessmentPreparation(assessment)}
            </div>
        `).join('');
    }

    getAssessmentPreparation(assessment) {
        const preparations = {
            "Unit Test 1": [
                "Review Module 1: Perceptron, MLP, TensorFlow basics",
                "Review Module 2: Gradient descent, regularization",
                "Practice coding: Neural networks from scratch",
                "Complete all T1-T6 tutorials"
            ],
            "Mid-term Practical": [
                "Master OpenCV image processing",
                "Complete image segmentation projects",
                "Practice feature extraction techniques",
                "Review T7-T9 implementations"
            ],
            "Unit Test 2": [
                "Review Module 3: Image processing applications",
                "Review Module 4: CNN architectures, transfer learning",
                "Practice CNN implementations in Keras",
                "Complete T10-T12 tutorials"
            ],
            "Final Examination": [
                "Comprehensive review of all 5 modules",
                "Integration projects: End-to-end applications",
                "Object detection system implementation",
                "Portfolio review: All T1-T15 tutorials"
            ]
        };

        const prep = preparations[assessment.type] || [];
        if (prep.length === 0) return '';

        return `
            <div style="margin-top: 20px;">
                <h4 style="color: #60a5fa; margin-bottom: 10px;">📚 Preparation Checklist</h4>
                <ul style="list-style: none; padding-left: 0;">
                    ${prep.map(item => `
                        <li style="margin-bottom: 8px; padding: 8px; background: rgba(96, 165, 250, 0.1); border-radius: 6px; border-left: 3px solid #60a5fa;">
                            ${item}
                        </li>
                    `).join('')}
                </ul>
            </div>
        `;
    }

    getMonthProgress(monthId) {
        // Simulate progress based on current week
        const monthWeeks = courseData.months.find(m => m.id === monthId)?.weeks || [];
        const completedWeeks = monthWeeks.filter(week => week <= this.currentWeek).length;
        return Math.round((completedWeeks / monthWeeks.length) * 100);
    }

    getModuleProgress(moduleId) {
        // Simulate progress - would be calculated based on actual completion
        return this.currentWeek * 6.67; // Roughly 6.67% per week over 15 weeks
    }

    updateProgress() {
        // Update overall course progress
        const progressFill = document.querySelector('.progress-fill');
        if (progressFill) {
            const overallProgress = (this.currentWeek / 15) * 100;
            progressFill.style.width = `${overallProgress}%`;
            
            // Update progress label
            const progressLabel = document.querySelector('.progress-label span:last-child');
            if (progressLabel) {
                progressLabel.textContent = `Week ${this.currentWeek} of 15`;
            }
        }
    }

    handleMonthClick(monthCard) {
        const monthId = monthCard.dataset.month;
        // Create detailed monthly view (could navigate to separate page)
        this.showMonthDetails(monthId);
    }

    handleModuleClick(moduleCard) {
        const moduleId = moduleCard.dataset.module;
        // Create detailed module view (could navigate to separate page)
        this.showModuleDetails(moduleId);
    }

    showMonthDetails(monthId) {
        // Navigate to detailed monthly page
        const month = courseData.months.find(m => m.id == monthId);
        if (month) {
            // Navigate to the specific month detail page
            window.location.href = `pages/monthly/month-${monthId}.html`;
        }
    }

    showModuleDetails(moduleId) {
        // Navigate to detailed module page
        const module = courseData.modules.find(m => m.id == moduleId);
        if (module) {
            // Navigate to the specific module detail page
            window.location.href = `pages/modules/module-${moduleId}.html`;
        }
    }

    handleAssessmentClick(assessmentCard) {
        const assessmentType = assessmentCard.querySelector('.assessment-type').textContent;
        this.showAssessmentDetails(assessmentType);
    }

    showAssessmentDetails(assessmentType) {
        // Navigate to assessment preparation page
        const assessmentPages = {
            "Unit Test 1": "unit-test-1.html",
            "Mid-term Practical": "mid-term-practical.html", 
            "Unit Test 2": "unit-test-2.html",
            "Final Examination": "final-examination.html"
        };

        const page = assessmentPages[assessmentType];
        if (page) {
            window.location.href = `pages/assessments/${page}`;
        }
    }

    highlightMonthInTimeline(monthId) {
        const month = courseData.months.find(m => m.id == monthId);
        if (month) {
            // Remove existing highlights
            document.querySelectorAll('.timeline-item').forEach(item => {
                item.style.transform = '';
                item.style.boxShadow = '';
            });

            // Highlight relevant weeks
            month.weeks.forEach(weekNum => {
                const timelineItem = document.querySelector(`[data-week="${weekNum}"]`);
                if (timelineItem) {
                    timelineItem.style.transform = 'scale(1.02)';
                    timelineItem.querySelector('.timeline-content').style.boxShadow = '0 25px 50px rgba(102, 126, 234, 0.3)';
                    timelineItem.querySelector('.timeline-content').style.border = '2px solid rgba(102, 126, 234, 0.5)';
                }
            });
        }
    }

    highlightModuleInTimeline(moduleId) {
        // Similar to highlightMonthInTimeline but for modules
        const weeks = Object.entries(courseData.weekly).filter(([_, week]) => week.module == moduleId);
        
        // Remove existing highlights
        document.querySelectorAll('.timeline-item').forEach(item => {
            item.style.transform = '';
            item.style.boxShadow = '';
        });

        weeks.forEach(([weekNum, _]) => {
            const timelineItem = document.querySelector(`[data-week="${weekNum}"]`);
            if (timelineItem) {
                timelineItem.style.transform = 'scale(1.02)';
                timelineItem.querySelector('.timeline-content').style.boxShadow = '0 25px 50px rgba(67, 233, 123, 0.3)';
                timelineItem.querySelector('.timeline-content').style.border = '2px solid rgba(67, 233, 123, 0.5)';
            }
        });
    }

    // Method to update current week (can be called externally)
    setCurrentWeek(week) {
        this.currentWeek = week;
        this.updateProgress();
        this.loadTimeline(); // Refresh timeline with updated status
    }
}

// Global function for navigation (called from HTML)
function showSection(sectionName) {
    // Hide all sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show selected section
    const selectedSection = document.getElementById(sectionName);
    if (selectedSection) {
        selectedSection.classList.add('active');
    }
    
    // Update active tab
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    const activeTab = document.querySelector(`[onclick="showSection('${sectionName}')"]`);
    if (activeTab) {
        activeTab.classList.add('active');
    }
}

// Initialize dashboard when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const dashboard = new CourseDashboard();
    
    // Make dashboard globally accessible for debugging/external calls
    window.courseDashboard = dashboard;
    
    // Example: Set current week (you can modify this based on actual dates)
    // dashboard.setCurrentWeek(1); // Uncomment and adjust as needed
});

// Utility function to calculate current week based on start date
function getCurrentWeek() {
    const startDate = new Date('2025-08-11');
    const currentDate = new Date();
    const diffTime = currentDate - startDate;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const currentWeek = Math.max(0, Math.ceil(diffDays / 7));
    return Math.min(currentWeek, 15); // Cap at 15 weeks
}

// Auto-update current week on page load
document.addEventListener('DOMContentLoaded', () => {
    if (window.courseDashboard) {
        const week = getCurrentWeek();
        window.courseDashboard.setCurrentWeek(week);
    }
});

// Prof. Ramesh Babu's myPage functionality
function openMyPage() {
    const username = 'rbabu';
    const pin = '2228';
    
    // Simple authentication simulation
    const enteredPin = prompt(`Welcome ${username}!\nPlease enter your PIN to access myPage:`);
    
    if (enteredPin === pin) {
        alert('🎉 Access Granted!\n\nWelcome to Prof. Ramesh Babu\'s myPage\n\n📚 Course: Deep Neural Network Architectures\n🎓 Students: M.Tech Batch 2025\n📊 Progress Tracking Available\n💬 Office Hours: Mon-Fri 2-4 PM\n\n📋 Quick Actions:\n• View Student Progress\n• Update Course Materials\n• Manage Assessments\n• Office Hour Scheduling');
    } else if (enteredPin !== null) {
        alert('❌ Access Denied\nIncorrect PIN. Please contact Prof. Ramesh Babu for assistance.');
    }
}