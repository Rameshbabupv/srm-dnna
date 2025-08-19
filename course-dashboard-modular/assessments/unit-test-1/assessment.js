// Unit Test 1 Assessment - Interactive Functionality

class AssessmentController {
    constructor() {
        this.data = window.assessmentData;
        this.progressKey = 'unit_test_1_progress';
        this.activeTab = 'overview';
        this.examDate = new Date('2025-09-19T14:00:00');
        this.timers = {};
        this.init();
    }

    init() {
        this.loadProgress();
        this.renderContent();
        this.attachEventListeners();
        this.startCountdown();
        this.initializeFeatures();
        console.log('Unit Test 1 assessment controller initialized');
    }

    renderContent() {
        this.renderCountdown();
        this.renderTabNavigation();
        this.renderTabContent();
        this.renderSidebar();
        this.renderFeatureButtons();
    }

    renderCountdown() {
        const container = CourseUtils.dom.getElementById('countdown-container');
        if (!container) return;

        const now = new Date();
        const timeDiff = this.examDate - now;
        const isExamPassed = timeDiff < 0;

        if (isExamPassed) {
            container.innerHTML = `
                <div class="countdown-container">
                    <div class="countdown-title">📝 Unit Test 1 Results</div>
                    <div style="text-align: center; color: var(--assessment-primary); font-size: 1.2rem;">
                        Exam completed on September 19, 2025
                    </div>
                </div>
            `;
            return;
        }

        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        let message = '';
        if (days > 14) {
            message = 'Plenty of time to prepare! Start with Module 1 review.';
        } else if (days > 7) {
            message = 'Two weeks left! Focus on key concepts and practice problems.';
        } else if (days > 3) {
            message = 'Final week! Complete practice tests and review formulas.';
        } else if (days > 0) {
            message = 'Last few days! Review key formulas and get good rest.';
        } else {
            message = 'Exam day! Stay calm and confident. Good luck!';
        }

        container.innerHTML = `
            <div class="countdown-container">
                <div class="countdown-title">⏰ Time Until Unit Test 1</div>
                <div class="countdown-timer">
                    <div class="time-unit">
                        <div class="time-value">${days}</div>
                        <div class="time-label">Days</div>
                    </div>
                    <div class="time-unit">
                        <div class="time-value">${hours}</div>
                        <div class="time-label">Hours</div>
                    </div>
                    <div class="time-unit">
                        <div class="time-value">${minutes}</div>
                        <div class="time-label">Minutes</div>
                    </div>
                    <div class="time-unit">
                        <div class="time-value">${seconds}</div>
                        <div class="time-label">Seconds</div>
                    </div>
                </div>
                <div class="countdown-message">${message}</div>
            </div>
        `;
    }

    renderTabNavigation() {
        const container = CourseUtils.dom.getElementById('assessment-tabs');
        if (!container) return;

        const tabs = [
            { id: 'overview', label: 'Overview', icon: '📋' },
            { id: 'syllabus', label: 'Coverage', icon: '📚' },
            { id: 'structure', label: 'Exam Structure', icon: '🏗️' },
            { id: 'samples', label: 'Sample Questions', icon: '❓' },
            { id: 'study-plan', label: 'Study Plan', icon: '📅' },
            { id: 'resources', label: 'Resources', icon: '📖' }
        ];

        container.innerHTML = `
            <div class="assessment-tabs">
                ${tabs.map(tab => `
                    <button class="assessment-tab ${tab.id === this.activeTab ? 'active' : ''}" 
                            data-tab="${tab.id}">
                        <span class="tab-icon">${tab.icon}</span>
                        <span class="tab-label">${tab.label}</span>
                    </button>
                `).join('')}
            </div>
        `;
    }

    renderTabContent() {
        const container = CourseUtils.dom.getElementById('assessment-content');
        if (!container) return;

        let content = '';

        switch (this.activeTab) {
            case 'overview':
                content = this.renderOverviewTab();
                break;
            case 'syllabus':
                content = this.renderSyllabusTab();
                break;
            case 'structure':
                content = this.renderStructureTab();
                break;
            case 'samples':
                content = this.renderSamplesTab();
                break;
            case 'study-plan':
                content = this.renderStudyPlanTab();
                break;
            case 'resources':
                content = this.renderResourcesTab();
                break;
        }

        container.innerHTML = content;
    }

    renderOverviewTab() {
        return `
            <div class="tab-content">
                <!-- Exam Details -->
                <div class="section-card">
                    <div class="section-header">
                        <div class="section-icon">📝</div>
                        <h3 class="section-title">Exam Information</h3>
                    </div>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px;">
                        <div>
                            <strong>Date:</strong> ${this.data.date}<br>
                            <strong>Time:</strong> ${this.data.time}<br>
                            <strong>Duration:</strong> ${this.data.duration}
                        </div>
                        <div>
                            <strong>Weight:</strong> ${this.data.weight}<br>
                            <strong>Format:</strong> ${this.data.format}<br>
                            <strong>Location:</strong> ${this.data.examDetails.location}
                        </div>
                    </div>
                </div>

                <!-- Learning Objectives -->
                <div class="section-card">
                    <div class="section-header">
                        <div class="section-icon">🎯</div>
                        <h3 class="section-title">Learning Objectives Assessment</h3>
                    </div>
                    <div class="coverage-grid">
                        ${this.data.learningObjectives.map(objective => `
                            <div class="module-card">
                                <div class="module-header">
                                    <div class="module-title">${objective.id}</div>
                                    <div class="module-weight">${objective.weight}</div>
                                </div>
                                <p>${objective.text}</p>
                                <div style="margin-top: 10px; font-size: 0.9rem; opacity: 0.9;">
                                    <strong>Assessment Method:</strong> ${objective.assessmentMethod}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- Exam Day Guidelines -->
                <div class="section-card">
                    <div class="section-header">
                        <div class="section-icon">ℹ️</div>
                        <h3 class="section-title">Exam Day Instructions</h3>
                    </div>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px;">
                        <div>
                            <h4 style="color: var(--success-color); margin-bottom: 15px;">✅ Allowed Items</h4>
                            <ul style="list-style: none; padding: 0;">
                                ${this.data.examDetails.allowedItems.map(item => `
                                    <li style="padding: 5px 0; border-bottom: 1px solid rgba(255,255,255,0.1);">• ${item}</li>
                                `).join('')}
                            </ul>
                        </div>
                        <div>
                            <h4 style="color: var(--danger-color); margin-bottom: 15px;">❌ Forbidden Items</h4>
                            <ul style="list-style: none; padding: 0;">
                                ${this.data.examDetails.forbiddenItems.map(item => `
                                    <li style="padding: 5px 0; border-bottom: 1px solid rgba(255,255,255,0.1);">• ${item}</li>
                                `).join('')}
                            </ul>
                        </div>
                    </div>
                    
                    <div style="margin-top: 25px;">
                        <h4 style="color: var(--assessment-primary); margin-bottom: 15px;">📋 Important Instructions</h4>
                        <ul style="list-style: none; padding: 0;">
                            ${this.data.examDetails.instructions.map(instruction => `
                                <li style="padding: 8px 0; border-bottom: 1px solid rgba(255,255,255,0.1);">• ${instruction}</li>
                            `).join('')}
                        </ul>
                    </div>
                </div>

                <!-- Grading Rubric -->
                <div class="section-card">
                    <div class="section-header">
                        <div class="section-icon">📊</div>
                        <h3 class="section-title">Grading Rubric</h3>
                    </div>
                    <div style="display: grid; gap: 15px;">
                        ${Object.entries(this.data.gradingRubric.overallGrading).map(([grade, description]) => `
                            <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 8px; border-left: 4px solid var(--assessment-primary);">
                                <div style="display: flex; justify-content: between; align-items: center;">
                                    <strong style="color: var(--assessment-primary);">${grade}</strong>
                                    <span style="font-size: 0.9rem; opacity: 0.9;">${description}</span>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    }

    renderSyllabusTab() {
        return `
            <div class="tab-content">
                <div class="section-card">
                    <div class="section-header">
                        <div class="section-icon">📚</div>
                        <h3 class="section-title">Module Coverage</h3>
                    </div>
                    <div class="coverage-grid">
                        ${this.data.coverage.modules.map(module => `
                            <div class="module-card">
                                <div class="module-header">
                                    <div class="module-title">Module ${module.id}: ${module.title}</div>
                                    <div class="module-weight">${module.weight}</div>
                                </div>
                                <ul class="topics-list">
                                    ${module.topics.map(topic => `<li>${topic}</li>`).join('')}
                                </ul>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="section-card">
                    <div class="section-header">
                        <div class="section-icon">🔑</div>
                        <h3 class="section-title">Key Concepts by Category</h3>
                    </div>
                    ${this.data.keyTopics.map(category => `
                        <div style="margin: 25px 0;">
                            <h4 style="color: var(--assessment-primary); margin-bottom: 15px; display: flex; align-items: center; gap: 10px;">
                                <span style="background: var(--assessment-gradient); color: #1a1a2e; padding: 4px 8px; border-radius: 4px; font-size: 0.8rem;">${category.priority}</span>
                                ${category.category}
                            </h4>
                            <div style="display: grid; gap: 15px;">
                                ${category.topics.map(topic => `
                                    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 8px; border-left: 4px solid var(--assessment-primary);">
                                        <h5 style="color: var(--assessment-primary); margin-bottom: 10px;">${topic.name}</h5>
                                        ${topic.formula ? `<div style="font-family: Monaco, monospace; background: rgba(0,0,0,0.3); padding: 10px; border-radius: 4px; margin: 10px 0;">${topic.formula}</div>` : ''}
                                        ${topic.formulas ? `
                                            <div style="background: rgba(0,0,0,0.3); padding: 15px; border-radius: 4px; margin: 10px 0;">
                                                ${topic.formulas.map(formula => `<div style="font-family: Monaco, monospace; margin: 5px 0;">${formula}</div>`).join('')}
                                            </div>
                                        ` : ''}
                                        <p style="font-size: 0.9rem; opacity: 0.9; margin-top: 10px;">${topic.importance}</p>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    renderStructureTab() {
        return `
            <div class="tab-content">
                <div class="section-card">
                    <div class="section-header">
                        <div class="section-icon">🏗️</div>
                        <h3 class="section-title">Examination Structure</h3>
                    </div>
                    <div class="structure-grid">
                        ${this.data.structure.map(section => `
                            <div class="structure-item">
                                <div class="structure-header">
                                    <div class="structure-section">${section.section}</div>
                                    <div class="structure-marks">${section.marks}</div>
                                </div>
                                <div class="structure-details">
                                    <div class="structure-detail">
                                        <div class="detail-value">${section.duration}</div>
                                        <div class="detail-label">Duration</div>
                                    </div>
                                    <div class="structure-detail">
                                        <div class="detail-value">${section.questions}</div>
                                        <div class="detail-label">Questions</div>
                                    </div>
                                    <div class="structure-detail">
                                        <div class="detail-value">${section.type}</div>
                                        <div class="detail-label">Type</div>
                                    </div>
                                </div>
                                <p style="margin-top: 15px; font-size: 0.9rem; opacity: 0.9;">${section.description}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- Formula Sheet Information -->
                <div class="section-card">
                    <div class="section-header">
                        <div class="section-icon">📋</div>
                        <h3 class="section-title">Formula Sheet (Provided)</h3>
                    </div>
                    <div class="formula-container">
                        ${this.data.formulaSheet.contents.map(category => `
                            <div class="formula-category">
                                <h4>${category.category}</h4>
                                <ul class="formula-list">
                                    ${category.formulas.map(formula => `<li>${formula}</li>`).join('')}
                                </ul>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    }

    renderSamplesTab() {
        return `
            <div class="tab-content">
                <div class="section-card">
                    <div class="section-header">
                        <div class="section-icon">❓</div>
                        <h3 class="section-title">Sample Questions</h3>
                    </div>
                    ${this.data.sampleQuestions.map((question, index) => `
                        <div class="question-container">
                            <div class="question-header">
                                <div class="question-type">${question.type}</div>
                                <div class="question-section">${question.section}</div>
                            </div>
                            <div class="question-text">${question.question}</div>
                            
                            ${question.options ? `
                                <ul class="options-list">
                                    ${question.options.map((option, optionIndex) => `
                                        <li class="${optionIndex === question.correct ? 'correct' : ''}">${String.fromCharCode(65 + optionIndex)}. ${option}</li>
                                    `).join('')}
                                </ul>
                                ${question.explanation ? `<div style="margin-top: 15px; padding: 10px; background: rgba(50, 215, 75, 0.1); border-left: 3px solid var(--success-color); border-radius: 4px;"><strong>Explanation:</strong> ${question.explanation}</div>` : ''}
                            ` : ''}
                            
                            ${question.keyPoints ? `
                                <div style="margin-top: 15px;">
                                    <strong>Key Points (${question.points} marks):</strong>
                                    <ul style="margin-top: 10px;">
                                        ${question.keyPoints.map(point => `<li>${point}</li>`).join('')}
                                    </ul>
                                </div>
                            ` : ''}
                            
                            ${question.solution ? `
                                <div class="solution-container">
                                    <strong>Solution:</strong>
                                    <ol class="solution-steps">
                                        ${question.solution.steps.map(step => `<li>${step}</li>`).join('')}
                                    </ol>
                                    <div style="margin-top: 15px; padding: 10px; background: var(--assessment-gradient); color: #1a1a2e; border-radius: 4px; font-weight: bold;">
                                        Final Answer: ${question.solution.answer}
                                    </div>
                                </div>
                            ` : ''}
                            
                            ${question.code ? `
                                <div style="background: #1a1a2e; padding: 15px; border-radius: 8px; margin: 15px 0; overflow-x: auto;">
                                    <pre style="margin: 0; color: #e2e8f0; font-family: Monaco, monospace; font-size: 0.9rem;">${question.code}</pre>
                                </div>
                                ${question.answer ? `<div style="margin-top: 10px; color: var(--success-color);"><strong>Answer:</strong> ${question.answer}</div>` : ''}
                                ${question.explanation ? `<div style="margin-top: 10px; font-size: 0.9rem; opacity: 0.9;">${question.explanation}</div>` : ''}
                            ` : ''}
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    renderStudyPlanTab() {
        return `
            <div class="tab-content">
                <div class="section-card">
                    <div class="section-header">
                        <div class="section-icon">📅</div>
                        <h3 class="section-title">Two-Week Study Plan</h3>
                    </div>
                    <div class="timeline-container">
                        <div class="timeline">
                            ${this.data.studyPlan.map(week => `
                                <div class="timeline-item">
                                    <div class="timeline-week">${week.week}</div>
                                    <div class="timeline-focus">${week.focus}</div>
                                    <ul class="timeline-tasks">
                                        ${week.tasks.map(task => `<li>${task}</li>`).join('')}
                                    </ul>
                                    <div class="time-allocation">${week.timeAllocation}</div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>

                <div class="section-card">
                    <div class="section-header">
                        <div class="section-icon">💪</div>
                        <h3 class="section-title">Practice Problems</h3>
                    </div>
                    <div class="problems-grid">
                        ${this.data.practiceProblems.map(problem => `
                            <div class="problem-card">
                                <div class="problem-header">
                                    <div class="difficulty-badge difficulty-${problem.difficulty.toLowerCase()}">${problem.difficulty}</div>
                                    <div class="problem-topic">${problem.topic}</div>
                                </div>
                                <div style="margin-top: 15px;">
                                    <strong>Problem:</strong> ${problem.problem}
                                </div>
                                <div class="estimated-time">⏱️ Estimated time: ${problem.estimatedTime}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    }

    renderResourcesTab() {
        return `
            <div class="tab-content">
                <div class="section-card">
                    <div class="section-header">
                        <div class="section-icon">📖</div>
                        <h3 class="section-title">Study Resources</h3>
                    </div>
                    <div style="display: grid; gap: 15px;">
                        ${this.data.studyResources.map(resource => `
                            <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 8px; border-left: 4px solid var(--assessment-primary);">
                                <div style="display: flex; justify-content: between; align-items: center; margin-bottom: 10px;">
                                    <div>
                                        <div style="color: var(--assessment-primary); font-weight: 600;">${resource.type}: ${resource.title}</div>
                                        <div style="font-size: 0.9rem; opacity: 0.8;">by ${resource.author}</div>
                                    </div>
                                    <div style="background: var(--assessment-gradient); color: #1a1a2e; padding: 4px 8px; border-radius: 4px; font-size: 0.8rem; font-weight: 600;">${resource.priority}</div>
                                </div>
                                ${resource.chapters ? `<div style="margin: 8px 0; font-size: 0.9rem;"><strong>Focus:</strong> ${resource.chapters}</div>` : ''}
                                ${resource.location ? `<div style="margin: 8px 0;"><a href="${resource.location}" style="color: var(--assessment-primary);">Access Tutorial →</a></div>` : ''}
                                ${resource.url ? `<div style="margin: 8px 0;"><a href="${resource.url}" target="_blank" style="color: var(--assessment-primary);">View Resource →</a></div>` : ''}
                                <div style="font-size: 0.9rem; opacity: 0.9; font-style: italic;">${resource.notes}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    }

    renderSidebar() {
        const container = CourseUtils.dom.getElementById('assessment-sidebar');
        if (!container) return;

        const progress = this.getProgress();
        const totalItems = this.data.studyPlan.length + this.data.practiceProblems.length + this.data.sampleQuestions.length;
        const completedItems = progress.completedItems.length;
        const completionPercentage = CourseUtils.progress.calculateCompletion(completedItems, totalItems);

        container.innerHTML = `
            <!-- Progress Tracking -->
            <div class="progress-card">
                <div class="progress-title">📈 Study Progress</div>
                <div class="progress-container">
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${completionPercentage}%"></div>
                    </div>
                    <div class="progress-text">${completionPercentage}% Complete</div>
                </div>
                <div style="margin-top: 15px;">
                    <div class="progress-item">
                        <span class="progress-label">Study Plan</span>
                        <span class="progress-status ${progress.studyPlanCompleted ? 'status-completed' : 'status-pending'}">
                            ${progress.studyPlanCompleted ? 'Completed' : 'Pending'}
                        </span>
                    </div>
                    <div class="progress-item">
                        <span class="progress-label">Practice Problems</span>
                        <span class="progress-status ${progress.practiceCompleted ? 'status-completed' : 'status-in-progress'}">
                            ${progress.practiceCompleted ? 'Completed' : 'In Progress'}
                        </span>
                    </div>
                    <div class="progress-item">
                        <span class="progress-label">Sample Questions</span>
                        <span class="progress-status ${progress.samplesCompleted ? 'status-completed' : 'status-pending'}">
                            ${progress.samplesCompleted ? 'Completed' : 'Pending'}
                        </span>
                    </div>
                    <div class="progress-item">
                        <span class="progress-label">Mock Exam</span>
                        <span class="progress-status ${progress.mockExamCompleted ? 'status-completed' : 'status-pending'}">
                            ${progress.mockExamCompleted ? 'Completed' : 'Pending'}
                        </span>
                    </div>
                </div>
            </div>

            <!-- Quick Stats -->
            <div class="progress-card">
                <div class="progress-title">📊 Exam Stats</div>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-top: 15px;">
                    <div style="text-align: center; padding: 15px; background: rgba(255,255,255,0.05); border-radius: 8px;">
                        <div style="font-size: 1.5rem; font-weight: bold; color: var(--assessment-primary);">${this.data.duration}</div>
                        <div style="font-size: 0.8rem; opacity: 0.8;">Duration</div>
                    </div>
                    <div style="text-align: center; padding: 15px; background: rgba(255,255,255,0.05); border-radius: 8px;">
                        <div style="font-size: 1.5rem; font-weight: bold; color: var(--assessment-primary);">${this.data.weight}</div>
                        <div style="font-size: 0.8rem; opacity: 0.8;">Course Weight</div>
                    </div>
                    <div style="text-align: center; padding: 15px; background: rgba(255,255,255,0.05); border-radius: 8px;">
                        <div style="font-size: 1.5rem; font-weight: bold; color: var(--assessment-primary);">100</div>
                        <div style="font-size: 0.8rem; opacity: 0.8;">Total Marks</div>
                    </div>
                    <div style="text-align: center; padding: 15px; background: rgba(255,255,255,0.05); border-radius: 8px;">
                        <div style="font-size: 1.5rem; font-weight: bold; color: var(--assessment-primary);">2</div>
                        <div style="font-size: 0.8rem; opacity: 0.8;">Modules</div>
                    </div>
                </div>
            </div>

            <!-- Related Resources -->
            <div class="progress-card">
                <div class="progress-title">🔗 Quick Links</div>
                <div style="display: flex; flex-direction: column; gap: 10px; margin-top: 15px;">
                    ${this.data.navigation.modules.map(module => `
                        <a href="${module.path}" style="text-decoration: none; color: var(--light-text); padding: 10px; background: rgba(255,255,255,0.05); border-radius: 6px; transition: var(--transition);" 
                           onmouseover="this.style.background='var(--assessment-light)'" 
                           onmouseout="this.style.background='rgba(255,255,255,0.05)'">
                            📚 Module ${module.id}: ${module.title}
                        </a>
                    `).join('')}
                    
                    ${this.data.navigation.tutorials.map(tutorial => `
                        <a href="${tutorial.path}" style="text-decoration: none; color: var(--light-text); padding: 10px; background: rgba(255,255,255,0.05); border-radius: 6px; transition: var(--transition);"
                           onmouseover="this.style.background='var(--assessment-light)'"
                           onmouseout="this.style.background='rgba(255,255,255,0.05)'">
                            💻 ${tutorial.id}: ${tutorial.title}
                        </a>
                    `).join('')}
                </div>
            </div>
        `;
    }

    renderFeatureButtons() {
        const container = CourseUtils.dom.getElementById('feature-buttons');
        if (!container) return;

        container.innerHTML = `
            <div class="feature-buttons">
                <div class="feature-btn" onclick="assessment.startMockExam()">
                    <div class="feature-icon">🧪</div>
                    <div class="feature-title">Mock Exam</div>
                    <div class="feature-description">Full-length practice test</div>
                </div>
                
                <div class="feature-btn" onclick="assessment.showFlashcards()">
                    <div class="feature-icon">🗃️</div>
                    <div class="feature-title">Flashcards</div>
                    <div class="feature-description">Review key concepts</div>
                </div>
                
                <div class="feature-btn" onclick="assessment.startTimer()">
                    <div class="feature-icon">⏱️</div>
                    <div class="feature-title">Study Timer</div>
                    <div class="feature-description">Pomodoro technique</div>
                </div>
                
                <div class="feature-btn" onclick="assessment.exportProgress()">
                    <div class="feature-icon">💾</div>
                    <div class="feature-title">Export Progress</div>
                    <div class="feature-description">Save your preparation</div>
                </div>
            </div>
        `;
    }

    attachEventListeners() {
        // Tab navigation
        const tabButtons = CourseUtils.dom.queryAll('.assessment-tab');
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
                    case '2': this.switchTab('syllabus'); break;
                    case '3': this.switchTab('structure'); break;
                    case '4': this.switchTab('samples'); break;
                    case '5': this.switchTab('study-plan'); break;
                    case '6': this.switchTab('resources'); break;
                }
            }
        });
    }

    switchTab(tabId) {
        this.activeTab = tabId;
        this.renderTabNavigation();
        this.renderTabContent();
        
        // Update URL
        history.replaceState(null, null, `#${tabId}`);
        
        // Save preference
        const progress = this.getProgress();
        progress.activeTab = tabId;
        this.saveProgress(progress);
    }

    startCountdown() {
        this.renderCountdown();
        setInterval(() => {
            this.renderCountdown();
        }, 1000);
    }

    initializeFeatures() {
        // Initialize progress animations
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
            completedItems: [],
            activeTab: 'overview',
            studyPlanCompleted: false,
            practiceCompleted: false,
            samplesCompleted: false,
            mockExamCompleted: false,
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
        if (hash && ['overview', 'syllabus', 'structure', 'samples', 'study-plan', 'resources'].includes(hash)) {
            this.activeTab = hash;
        }
        
        this.saveProgress(progress);
        console.log('Assessment progress loaded:', progress);
    }

    // Interactive Features
    startMockExam() {
        if (confirm('Start a 120-minute mock examination? This will simulate the actual test conditions.')) {
            // Here you would implement a full mock exam interface
            alert('🚧 Mock Exam feature coming soon! For now, practice with the sample questions.');
        }
    }

    showFlashcards() {
        // Create a simple flashcard interface
        alert('🚧 Flashcards feature coming soon! Review the key concepts in the Coverage tab for now.');
    }

    startTimer() {
        // Implement Pomodoro timer
        const minutes = prompt('Enter study duration in minutes (default: 25):') || 25;
        this.startPomodoro(parseInt(minutes));
    }

    startPomodoro(minutes) {
        let timeLeft = minutes * 60;
        const originalTitle = document.title;
        
        const timer = setInterval(() => {
            const mins = Math.floor(timeLeft / 60);
            const secs = timeLeft % 60;
            document.title = `⏱️ ${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')} - ${originalTitle}`;
            
            if (timeLeft <= 0) {
                clearInterval(timer);
                document.title = originalTitle;
                alert('🎉 Pomodoro completed! Take a 5-minute break.');
            }
            timeLeft--;
        }, 1000);
        
        this.timers.pomodoro = timer;
    }

    exportProgress() {
        const progress = this.getProgress();
        const exportData = {
            assessment: this.data.title,
            progress: progress,
            exportDate: new Date().toISOString()
        };
        
        const dataStr = JSON.stringify(exportData, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        
        const link = CourseUtils.dom.createElement('a', {
            href: url,
            download: 'unit_test_1_progress.json'
        });
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    }
}

// Initialize assessment when DOM is ready
let assessment;
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        assessment = new AssessmentController();
    });
} else {
    assessment = new AssessmentController();
}