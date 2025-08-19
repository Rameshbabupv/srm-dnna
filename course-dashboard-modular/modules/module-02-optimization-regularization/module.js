// Module 2: Optimization and Regularization - Interactive Functionality

class Module2Controller {
    constructor() {
        this.data = window.moduleData;
        this.progressKey = 'module_2_progress';
        this.activeTab = 'overview';
        this.init();
    }

    init() {
        this.loadProgress();
        this.renderContent();
        this.attachEventListeners();
        console.log('Module 2 controller initialized');
    }

    renderContent() {
        this.renderTabNavigation();
        this.renderTabContent();
        this.renderSidebar();
        this.renderNavigation();
        this.initializeInteractiveFeatures();
    }

    renderTabNavigation() {
        const container = CourseUtils.dom.getElementById('module-tabs');
        if (!container) return;

        const tabs = [
            { id: 'overview', label: 'Overview', icon: '📋' },
            { id: 'concepts', label: 'Key Concepts', icon: '🧠' },
            { id: 'timeline', label: 'Timeline', icon: '📅' },
            { id: 'assessment', label: 'Assessment', icon: '📝' }
        ];

        container.innerHTML = `
            <div class="tab-navigation">
                ${tabs.map(tab => `
                    <button class="tab-button ${tab.id === this.activeTab ? 'active' : ''}" 
                            data-tab="${tab.id}">
                        <span class="tab-icon">${tab.icon}</span>
                        <span class="tab-label">${tab.label}</span>
                    </button>
                `).join('')}
            </div>
        `;
    }

    renderTabContent() {
        const container = CourseUtils.dom.getElementById('module-content');
        if (!container) return;

        let content = '';

        switch (this.activeTab) {
            case 'overview':
                content = this.renderOverviewTab();
                break;
            case 'concepts':
                content = this.renderConceptsTab();
                break;
            case 'timeline':
                content = this.renderTimelineTab();
                break;
            case 'assessment':
                content = this.renderAssessmentTab();
                break;
        }

        container.innerHTML = content;
    }

    renderOverviewTab() {
        return `
            <div class="tab-content">
                <!-- Learning Objectives -->
                <div class="concept-section">
                    <div class="concept-header">
                        <div class="concept-icon">🎯</div>
                        <h3 class="concept-title">Learning Objectives</h3>
                    </div>
                    <div class="concept-grid">
                        ${this.data.objectives.map(objective => `
                            <div class="concept-item">
                                <h4>✓ Achievement Goal</h4>
                                <p>${objective}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- Topics Grid -->
                <div class="topics-grid">
                    ${this.data.topics.map(topic => `
                        <div class="topic-card">
                            <div class="topic-header">
                                <div class="topic-icon">⚡</div>
                                <h4 class="topic-title">${topic.title}</h4>
                            </div>
                            <div class="topic-description">${topic.description}</div>
                            <div class="topic-meta">
                                <span class="complexity-badge complexity-${topic.complexity.toLowerCase()}">${topic.complexity}</span>
                                <span class="duration-tag">${topic.duration}</span>
                            </div>
                        </div>
                    `).join('')}
                </div>

                <!-- Prerequisites -->
                <div class="concept-section">
                    <div class="concept-header">
                        <div class="concept-icon">📚</div>
                        <h3 class="concept-title">Prerequisites</h3>
                    </div>
                    <div class="concept-grid">
                        ${this.data.prerequisites.map(prereq => `
                            <div class="concept-item">
                                <p>• ${prereq}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- Interactive Features -->
                <div class="interactive-features">
                    ${Object.entries(this.data.interactiveFeatures).map(([key, feature]) => `
                        <div class="feature-card">
                            <div class="feature-icon">🎛️</div>
                            <div class="feature-title">${feature.title}</div>
                            <div class="feature-description">${feature.description}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    renderConceptsTab() {
        return `
            <div class="tab-content">
                ${Object.entries(this.data.concepts).map(([key, concept]) => `
                    <div class="concept-section">
                        <div class="concept-header">
                            <div class="concept-icon">🔬</div>
                            <h3 class="concept-title">${concept.title}</h3>
                        </div>
                        <div class="concept-grid">
                            ${concept.items.map(item => `
                                <div class="concept-item">
                                    <h4>${item.name}</h4>
                                    <div class="formula-display">${item.formula}</div>
                                    ${item.pros && item.cons ? `
                                        <div class="pros-cons">
                                            <div class="pros">
                                                <h5>Advantages</h5>
                                                ${item.pros.map(pro => `<p>• ${pro}</p>`).join('')}
                                            </div>
                                            <div class="cons">
                                                <h5>Limitations</h5>
                                                ${item.cons.map(con => `<p>• ${con}</p>`).join('')}
                                            </div>
                                        </div>
                                    ` : ''}
                                    ${item.effect ? `<p><strong>Effect:</strong> ${item.effect}</p>` : ''}
                                    ${item.benefits ? `
                                        <div style="margin-top: 10px;">
                                            <strong>Benefits:</strong>
                                            <ul>
                                                ${item.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
                                            </ul>
                                        </div>
                                    ` : ''}
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    renderTimelineTab() {
        return `
            <div class="tab-content">
                <div class="timeline-container">
                    <div class="timeline">
                        ${this.data.weekly.map((week, index) => `
                            <div class="timeline-item" data-week="${week.week}">
                                <div class="milestone-badge">Week ${week.week}</div>
                                <h4>${week.title}</h4>
                                <p><strong>Topics:</strong> ${week.topics.join(', ')}</p>
                                <p><strong>Deliverables:</strong> ${week.deliverables.join(', ')}</p>
                                <p><strong>Tutorial:</strong> ${week.tutorial}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- Milestones -->
                <div class="concept-section" style="margin-top: 40px;">
                    <div class="concept-header">
                        <div class="concept-icon">🏆</div>
                        <h3 class="concept-title">Learning Milestones</h3>
                    </div>
                    <div class="concept-grid">
                        ${this.data.milestones.map(milestone => `
                            <div class="concept-item">
                                <h4>Week ${milestone.week}: ${milestone.title}</h4>
                                <ul>
                                    ${milestone.criteria.map(criterion => `<li>${criterion}</li>`).join('')}
                                </ul>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    }

    renderAssessmentTab() {
        return `
            <div class="tab-content">
                <div class="assessment-prep">
                    <div class="assessment-header">
                        <div class="assessment-icon">📝</div>
                        <h3 class="assessment-title">Unit Test 1 Preparation</h3>
                    </div>
                    <p><strong>Weight:</strong> ${this.data.assessment.weight}</p>
                    <p><strong>Date:</strong> ${this.data.assessment.date}</p>
                    <p><strong>Format:</strong> ${this.data.assessment.format}</p>
                    <p><strong>Coverage:</strong> ${this.data.assessment.coverage}</p>
                    
                    <div class="key-topics-grid">
                        ${this.data.assessment.keyTopics.map(topic => `
                            <div class="topic-item">${topic}</div>
                        `).join('')}
                    </div>
                </div>

                <!-- Study Resources -->
                <div class="concept-section" style="margin-top: 30px;">
                    <div class="concept-header">
                        <div class="concept-icon">📖</div>
                        <h3 class="concept-title">Study Resources</h3>
                    </div>
                    <div class="concept-grid">
                        ${this.data.resources.map(resource => `
                            <div class="concept-item">
                                <h4>${resource.type}: ${resource.title}</h4>
                                <p><strong>Author:</strong> ${resource.author}</p>
                                ${resource.chapter ? `<p><strong>Chapter:</strong> ${resource.chapter}</p>` : ''}
                                <a href="${resource.url}" target="_blank" style="color: var(--module-primary);">View Resource →</a>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- Practice Applications -->
                <div class="concept-section">
                    <div class="concept-header">
                        <div class="concept-icon">💻</div>
                        <h3 class="concept-title">Practical Applications</h3>
                    </div>
                    <div class="concept-grid">
                        ${this.data.applications.map(app => `
                            <div class="concept-item">
                                <h4>${app.title}</h4>
                                <p>${app.description}</p>
                                <div style="margin-top: 10px;">
                                    <span class="complexity-badge complexity-${app.complexity.toLowerCase()}">${app.complexity}</span>
                                    <div style="margin-top: 8px;">
                                        <strong>Tools:</strong> ${app.tools.join(', ')}
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    }

    renderSidebar() {
        const container = CourseUtils.dom.getElementById('module-sidebar');
        if (!container) return;

        const progress = this.getProgress();
        const completionPercentage = CourseUtils.progress.calculateCompletion(
            progress.completedSections.length,
            this.data.tutorials.length + this.data.weekly.length
        );

        container.innerHTML = `
            <!-- Progress Card -->
            <div class="sidebar-card">
                <div class="sidebar-title">📈 Progress</div>
                <div class="progress-container">
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${completionPercentage}%"></div>
                    </div>
                    <div class="progress-text">${completionPercentage}% Complete</div>
                </div>
            </div>

            <!-- Quick Stats -->
            <div class="sidebar-card">
                <div class="sidebar-title">📊 Module Stats</div>
                <div class="stat-grid">
                    <div class="stat-item">
                        <div class="stat-value">${this.data.weekly.length}</div>
                        <div class="stat-label">Weeks</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-value">${this.data.tutorials.length}</div>
                        <div class="stat-label">Tutorials</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-value">${this.data.duration}</div>
                        <div class="stat-label">Duration</div>
                    </div>
                </div>
            </div>

            <!-- Tutorials -->
            <div class="sidebar-card">
                <div class="sidebar-title">💻 Tutorials</div>
                <div class="tutorial-list">
                    ${this.data.tutorials.map(tutorial => `
                        <div class="tutorial-item">
                            <div class="tutorial-info">
                                <h5>${tutorial.id}: ${tutorial.title}</h5>
                                <p>${tutorial.description}</p>
                                <div class="tutorial-meta">
                                    <span class="complexity-badge complexity-${tutorial.difficulty.toLowerCase()}">${tutorial.difficulty}</span>
                                    <span class="duration-tag">${tutorial.estimatedTime}</span>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <!-- Learning Outcome -->
            <div class="sidebar-card">
                <div class="sidebar-title">🎯 Learning Outcome</div>
                ${this.data.outcomes.map(outcome => `
                    <div class="outcome-item">
                        <div class="outcome-id">${outcome.id}</div>
                        <div class="outcome-text">${outcome.text}</div>
                        <div class="outcome-target">Target: Week ${outcome.targetWeek}</div>
                        <div class="outcome-contribution">${outcome.moduleContribution}</div>
                    </div>
                `).join('')}
            </div>

            <!-- Quick Actions -->
            <div class="sidebar-card">
                <div class="sidebar-title">⚡ Actions</div>
                <div style="display: flex; flex-direction: column; gap: 10px;">
                    <button class="btn btn-primary" onclick="module2.startTutorial('T4')">
                        🚀 Start T4 Tutorial
                    </button>
                    <button class="btn btn-secondary" onclick="module2.downloadResources()">
                        📥 Download Resources
                    </button>
                    <button class="btn btn-info" onclick="module2.exportProgress()">
                        💾 Export Progress
                    </button>
                </div>
            </div>
        `;
    }

    renderNavigation() {
        const container = CourseUtils.dom.getElementById('module-navigation');
        if (!container) return;

        const { previous, next, dashboard } = this.data.navigation;

        container.innerHTML = `
            <div class="module-nav-buttons">
                <a href="${previous.path}" class="nav-button previous">
                    <span class="nav-icon">←</span>
                    <span>Previous: ${previous.title}</span>
                </a>
                
                <a href="${dashboard}" class="nav-button dashboard">
                    <span class="nav-icon">🏠</span>
                    <span>Dashboard</span>
                </a>
                
                <a href="${next.path}" class="nav-button next">
                    <span>Next: ${next.title}</span>
                    <span class="nav-icon">→</span>
                </a>
            </div>
        `;
    }

    attachEventListeners() {
        // Tab navigation
        const tabButtons = CourseUtils.dom.queryAll('.tab-button');
        tabButtons.forEach(button => {
            CourseUtils.dom.on(button, 'click', () => {
                const tabId = button.dataset.tab;
                this.switchTab(tabId);
            });
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.altKey) {
                switch(e.key) {
                    case '1': this.switchTab('overview'); break;
                    case '2': this.switchTab('concepts'); break;
                    case '3': this.switchTab('timeline'); break;
                    case '4': this.switchTab('assessment'); break;
                }
            }
        });
    }

    switchTab(tabId) {
        this.activeTab = tabId;
        this.renderTabNavigation();
        this.renderTabContent();
        
        // Update URL without reload
        history.replaceState(null, null, `#${tabId}`);
        
        // Save preference
        const progress = this.getProgress();
        progress.activeTab = tabId;
        this.saveProgress(progress);
    }

    initializeInteractiveFeatures() {
        // Add any interactive animations or features specific to Module 2
        this.addHoverEffects();
        this.initializeProgressAnimations();
    }

    addHoverEffects() {
        const cards = CourseUtils.dom.queryAll('.topic-card, .feature-card, .concept-item');
        cards.forEach(card => {
            CourseUtils.dom.on(card, 'mouseenter', () => {
                card.style.transform = 'translateY(-5px)';
            });
            
            CourseUtils.dom.on(card, 'mouseleave', () => {
                card.style.transform = 'translateY(0)';
            });
        });
    }

    initializeProgressAnimations() {
        const progressBars = CourseUtils.dom.queryAll('.progress-fill');
        progressBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0%';
            
            setTimeout(() => {
                bar.style.transition = 'width 1s ease-out';
                bar.style.width = width;
            }, 500);
        });
    }

    // Progress Management
    getProgress() {
        return CourseUtils.storage.get(this.progressKey, {
            completedSections: [],
            activeTab: 'overview',
            moduleCompleted: false,
            timeSpent: 0,
            lastAccessed: new Date().toISOString()
        });
    }

    saveProgress(progress) {
        progress.lastAccessed = new Date().toISOString();
        CourseUtils.storage.set(this.progressKey, progress);
    }

    loadProgress() {
        const progress = this.getProgress();
        this.activeTab = progress.activeTab || 'overview';
        
        // Load from URL hash if present
        const hash = window.location.hash.substring(1);
        if (hash && ['overview', 'concepts', 'timeline', 'assessment'].includes(hash)) {
            this.activeTab = hash;
        }
        
        this.saveProgress(progress);
        console.log('Module 2 progress loaded:', progress);
    }

    // Utility Functions
    startTutorial(tutorialId) {
        const tutorial = this.data.tutorials.find(t => t.id === tutorialId);
        if (tutorial) {
            const tutorialPath = `../../tutorials/tutorial-${tutorialId}/index.html`;
            window.location.href = tutorialPath;
        }
    }

    downloadResources() {
        // Create downloadable resource summary
        const resourceData = {
            module: this.data.title,
            concepts: this.data.concepts,
            resources: this.data.resources,
            applications: this.data.applications,
            generatedDate: new Date().toISOString()
        };

        const dataStr = JSON.stringify(resourceData, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        
        const link = CourseUtils.dom.createElement('a', {
            href: url,
            download: 'module2_optimization_resources.json'
        });
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    }

    exportProgress() {
        const progress = this.getProgress();
        const exportData = {
            module: this.data.title,
            progress: progress,
            exportDate: new Date().toISOString()
        };
        
        const dataStr = JSON.stringify(exportData, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        
        const link = CourseUtils.dom.createElement('a', {
            href: url,
            download: 'module2_progress.json'
        });
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    }
}

// Initialize module when DOM is ready
let module2;
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        module2 = new Module2Controller();
    });
} else {
    module2 = new Module2Controller();
}