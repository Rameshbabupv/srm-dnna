// Tutorial T1: Perceptron Implementation - Interactive Functionality

class TutorialT1Controller {
    constructor() {
        this.data = window.tutorialData;
        this.progressKey = 'tutorial_t1_progress';
        this.currentStep = 1;
        this.init();
    }

    init() {
        this.loadProgress();
        this.renderContent();
        this.attachEventListeners();
        this.updateProgressTracker();
        console.log('Tutorial T1 controller initialized');
    }

    renderContent() {
        this.renderProgressTracker();
        this.renderTutorialSteps();
        this.renderSidebar();
        this.renderNavigation();
    }

    renderProgressTracker() {
        const container = CourseUtils.dom.getElementById('progress-tracker');
        if (!container) return;

        const progress = this.getProgress();
        const completedSteps = progress.completedSteps.length;
        const totalSteps = this.data.steps.length;
        const percentage = CourseUtils.progress.calculateCompletion(completedSteps, totalSteps);

        // Create step dots
        const stepDots = this.data.steps.map((step, index) => {
            const stepNum = index + 1;
            let className = 'step-dot pending';
            
            if (progress.completedSteps.includes(stepNum)) {
                className = 'step-dot completed';
            } else if (stepNum === this.currentStep) {
                className = 'step-dot current';
            }

            return `
                <div class="${className}" data-step="${stepNum}" title="${step.title}">
                    ${progress.completedSteps.includes(stepNum) ? '✓' : stepNum}
                </div>
                ${index < this.data.steps.length - 1 ? `
                    <div class="step-connector ${progress.completedSteps.includes(stepNum) ? 'completed' : ''}"></div>
                ` : ''}
            `;
        }).join('');

        container.innerHTML = `
            <div class="progress-header">
                <div class="progress-title">Tutorial Progress</div>
                <div class="progress-percentage">${percentage}%</div>
            </div>
            <div class="steps-progress">
                ${stepDots}
            </div>
            <div class="progress-container">
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${percentage}%"></div>
                </div>
            </div>
            <div class="time-estimate">
                <small>⏱️ Estimated completion: ${this.data.estimatedTime}</small>
            </div>
        `;
    }

    renderTutorialSteps() {
        const container = CourseUtils.dom.getElementById('tutorial-steps');
        if (!container) return;

        const stepsHTML = this.data.steps.map((step, index) => {
            const stepNum = index + 1;
            const progress = this.getProgress();
            const isCompleted = progress.completedSteps.includes(stepNum);
            const isActive = stepNum === this.currentStep;

            return `
                <div class="step-card ${isActive ? 'active' : ''}" id="step-${stepNum}" data-step="${stepNum}">
                    <div class="step-header">
                        <div class="step-number">
                            ${isCompleted ? '✓' : stepNum}
                        </div>
                        <div class="step-info">
                            <h3>${step.title}</h3>
                            <div class="step-meta">
                                <span>⏱️ ${step.estimatedTime}</span>
                                <span>📚 ${step.type.charAt(0).toUpperCase() + step.type.slice(1)}</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="step-description">
                        <p>${step.description}</p>
                    </div>

                    ${this.renderStepContent(step)}

                    <div class="step-actions">
                        <button class="step-btn" onclick="tutorialT1.goToPreviousStep()" 
                                ${stepNum === 1 ? 'disabled' : ''}>
                            ← Previous
                        </button>
                        
                        <button class="step-btn ${isCompleted ? '' : 'primary'}" 
                                onclick="tutorialT1.${isCompleted ? 'goToNextStep' : 'completeStep'}()">
                            ${isCompleted ? 'Next →' : 'Mark Complete ✓'}
                        </button>
                    </div>
                </div>
            `;
        }).join('');

        container.innerHTML = stepsHTML;
    }

    renderStepContent(step) {
        let contentHTML = '';

        if (step.content.overview) {
            contentHTML += `
                <div class="concept-box">
                    <div class="concept-title">Overview</div>
                    <p>${step.content.overview}</p>
                </div>
            `;
        }

        if (step.content.code) {
            contentHTML += `
                <div class="code-container">
                    <div class="code-header">
                        <div class="code-title">Code Implementation</div>
                        <button class="copy-btn" onclick="tutorialT1.copyCode(this)">Copy Code</button>
                    </div>
                    <pre class="code-content">${this.highlightSyntax(step.content.code)}</pre>
                    ${step.type === 'coding' ? '<button class="run-code-btn" onclick="tutorialT1.simulateCodeRun(this)">🔥 Run Code</button>' : ''}
                </div>
            `;
        }

        if (step.content.concepts) {
            contentHTML += `
                <div class="concept-box">
                    <div class="concept-title">Key Concepts</div>
                    ${step.content.concepts.map(concept => `
                        <div style="margin-bottom: 15px;">
                            <strong>${concept.name}:</strong> ${concept.formula}<br>
                            <em>${concept.explanation}</em>
                        </div>
                    `).join('')}
                </div>
            `;
        }

        if (step.content.requirements) {
            contentHTML += `
                <div class="concept-box">
                    <div class="concept-title">Requirements</div>
                    <ul>
                        ${step.content.requirements.map(req => `<li>${req}</li>`).join('')}
                    </ul>
                </div>
            `;
        }

        if (step.content.expectedOutput) {
            contentHTML += `
                <div class="concept-box">
                    <div class="concept-title">Expected Output</div>
                    <p>${step.content.expectedOutput}</p>
                </div>
            `;
        }

        if (step.content.tips) {
            contentHTML += `
                <div class="concept-box">
                    <div class="concept-title">💡 Pro Tips</div>
                    <ul>
                        ${step.content.tips.map(tip => `<li>${tip}</li>`).join('')}
                    </ul>
                </div>
            `;
        }

        return contentHTML;
    }

    renderSidebar() {
        const container = CourseUtils.dom.getElementById('tutorial-sidebar');
        if (!container) return;

        container.innerHTML = `
            <div class="reference-card">
                <div class="reference-title">
                    🎯 Learning Objectives
                </div>
                <ul class="reference-list">
                    ${this.data.objectives.map(obj => `<li>${obj}</li>`).join('')}
                </ul>
            </div>

            <div class="reference-card">
                <div class="reference-title">
                    📋 Prerequisites
                </div>
                <ul class="reference-list">
                    ${this.data.prerequisites.map(prereq => `<li>${prereq}</li>`).join('')}
                </ul>
            </div>

            <div class="reference-card">
                <div class="reference-title">
                    🚀 Quick Actions
                </div>
                <div style="display: flex; flex-direction: column; gap: 10px;">
                    <button class="btn btn-success" onclick="tutorialT1.downloadCode()">
                        📄 Download All Code
                    </button>
                    <button class="btn btn-info" onclick="tutorialT1.exportProgress()">
                        💾 Export Progress
                    </button>
                    <button class="btn btn-secondary" onclick="tutorialT1.resetProgress()">
                        🔄 Reset Tutorial
                    </button>
                </div>
            </div>

            <div class="reference-card">
                <div class="reference-title">
                    📚 Resources
                </div>
                <ul class="reference-list">
                    ${this.data.resources.map(resource => `
                        <li><a href="${resource.url}" target="_blank">${resource.title}</a></li>
                    `).join('')}
                </ul>
            </div>
        `;
    }

    renderNavigation() {
        const container = CourseUtils.dom.getElementById('tutorial-navigation');
        if (!container) return;

        const { previous, next, module, dashboard } = this.data.navigation;

        container.innerHTML = `
            <div class="nav-button-group" style="display: flex; justify-content: space-between; align-items: center;">
                ${previous ? `
                    <a href="${previous.path}" class="nav-button previous">
                        <span class="nav-icon">←</span>
                        <span>Previous: ${previous.title}</span>
                    </a>
                ` : `
                    <span class="nav-button disabled">
                        <span class="nav-icon">←</span>
                        <span>Previous Tutorial</span>
                    </span>
                `}
                
                <div style="display: flex; gap: 15px;">
                    <a href="${module.path}" class="nav-button module">
                        <span class="nav-icon">📚</span>
                        <span>${module.title}</span>
                    </a>
                    
                    <a href="${dashboard}" class="nav-button dashboard">
                        <span class="nav-icon">🏠</span>
                        <span>Dashboard</span>
                    </a>
                </div>
                
                ${next ? `
                    <a href="${next.path}" class="nav-button next">
                        <span>Next: ${next.title}</span>
                        <span class="nav-icon">→</span>
                    </a>
                ` : `
                    <span class="nav-button disabled">
                        <span>Next Tutorial</span>
                        <span class="nav-icon">→</span>
                    </span>
                `}
            </div>
        `;
    }

    attachEventListeners() {
        // Step dot navigation
        const stepDots = CourseUtils.dom.queryAll('.step-dot');
        stepDots.forEach((dot, index) => {
            CourseUtils.dom.on(dot, 'click', () => {
                this.goToStep(index + 1);
            });
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey || e.metaKey) {
                switch(e.key) {
                    case 'ArrowLeft':
                        e.preventDefault();
                        this.goToPreviousStep();
                        break;
                    case 'ArrowRight':
                        e.preventDefault();
                        this.goToNextStep();
                        break;
                    case ' ':
                        e.preventDefault();
                        this.completeStep();
                        break;
                }
            }
        });
    }

    // Progress Management
    getProgress() {
        return CourseUtils.storage.get(this.progressKey, {
            completedSteps: [],
            currentStep: 1,
            tutorialCompleted: false,
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
        this.currentStep = progress.currentStep || 1;
        this.saveProgress(progress);
        console.log('Tutorial T1 progress loaded:', progress);
    }

    // Step Navigation
    goToStep(stepNumber) {
        if (stepNumber < 1 || stepNumber > this.data.steps.length) return;
        
        this.currentStep = stepNumber;
        const progress = this.getProgress();
        progress.currentStep = stepNumber;
        this.saveProgress(progress);
        
        this.updateUI();
        this.scrollToStep(stepNumber);
    }

    goToNextStep() {
        this.goToStep(this.currentStep + 1);
    }

    goToPreviousStep() {
        this.goToStep(this.currentStep - 1);
    }

    completeStep() {
        const progress = this.getProgress();
        
        if (!progress.completedSteps.includes(this.currentStep)) {
            progress.completedSteps.push(this.currentStep);
            progress.completedSteps.sort((a, b) => a - b);
        }
        
        // Mark tutorial as completed if all steps are done
        if (progress.completedSteps.length === this.data.steps.length) {
            progress.tutorialCompleted = true;
            this.showCelebration();
        }
        
        this.saveProgress(progress);
        this.updateUI();
        this.showSuccessMessage(`Step ${this.currentStep} completed! 🎉`);
        
        // Auto-advance to next step after a delay
        setTimeout(() => {
            if (this.currentStep < this.data.steps.length) {
                this.goToNextStep();
            }
        }, 1500);
    }

    // UI Updates
    updateUI() {
        this.renderProgressTracker();
        this.renderTutorialSteps();
        this.updateStepCards();
    }

    updateProgressTracker() {
        this.renderProgressTracker();
    }

    updateStepCards() {
        const progress = this.getProgress();
        
        this.data.steps.forEach((step, index) => {
            const stepNum = index + 1;
            const stepCard = CourseUtils.dom.getElementById(`step-${stepNum}`);
            
            if (stepCard) {
                // Update active state
                stepCard.classList.toggle('active', stepNum === this.currentStep);
                
                // Update completion state
                const isCompleted = progress.completedSteps.includes(stepNum);
                const stepNumber = stepCard.querySelector('.step-number');
                if (stepNumber) {
                    stepNumber.textContent = isCompleted ? '✓' : stepNum;
                }
            }
        });
    }

    scrollToStep(stepNumber) {
        const stepElement = CourseUtils.dom.getElementById(`step-${stepNumber}`);
        if (stepElement) {
            stepElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    // Interactive Features
    copyCode(button) {
        const codeContainer = button.closest('.code-container');
        const codeContent = codeContainer.querySelector('.code-content');
        
        navigator.clipboard.writeText(codeContent.textContent).then(() => {
            button.textContent = 'Copied!';
            setTimeout(() => {
                button.textContent = 'Copy Code';
            }, 2000);
        });
    }

    simulateCodeRun(button) {
        const codeContainer = button.closest('.code-container');
        let outputContainer = codeContainer.querySelector('.output-container');
        
        if (!outputContainer) {
            outputContainer = CourseUtils.dom.createElement('div', {
                class: 'output-container'
            });
            codeContainer.appendChild(outputContainer);
        }
        
        // Simulate running code with fake output
        button.textContent = 'Running...';
        button.disabled = true;
        
        setTimeout(() => {
            outputContainer.innerHTML = `
                <div style="color: #32d74b;">✓ Code executed successfully!</div>
                <div style="margin-top: 10px; color: #e6edf3;">
                    Sample output:<br>
                    Training completed in 5 epochs<br>
                    Final accuracy: 100.00%<br>
                    Weights: [0.5, 0.5]<br>
                    Bias: -0.75
                </div>
            `;
            
            button.textContent = '🔥 Run Code';
            button.disabled = false;
        }, 2000);
    }

    highlightSyntax(code) {
        // Simple syntax highlighting
        return code
            .replace(/(class|def|import|from|if|else|for|while|return|print)/g, '<span class="code-keyword">$1</span>')
            .replace(/(["'].*?["'])/g, '<span class="code-string">$1</span>')
            .replace(/(#.*)/g, '<span class="code-comment">$1</span>')
            .replace(/(\d+\.?\d*)/g, '<span class="code-number">$1</span>');
    }

    // Utility Functions
    downloadCode() {
        const allCode = this.data.steps
            .filter(step => step.content.code)
            .map(step => `# ${step.title}\n${step.content.code}\n\n`)
            .join('');
        
        const blob = new Blob([allCode], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const link = CourseUtils.dom.createElement('a', {
            href: url,
            download: 'tutorial_t1_perceptron.py'
        });
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    }

    exportProgress() {
        const progress = this.getProgress();
        const exportData = {
            tutorial: this.data.title,
            progress: progress,
            exportDate: new Date().toISOString()
        };
        
        const dataStr = JSON.stringify(exportData, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        
        const link = CourseUtils.dom.createElement('a', {
            href: url,
            download: 'tutorial_t1_progress.json'
        });
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    }

    resetProgress() {
        if (confirm('Are you sure you want to reset all progress for this tutorial?')) {
            CourseUtils.storage.remove(this.progressKey);
            this.currentStep = 1;
            this.loadProgress();
            this.updateUI();
            this.showInfoMessage('Tutorial progress has been reset.');
        }
    }

    // UI Feedback
    showSuccessMessage(message) {
        this.showMessage(message, 'success');
    }

    showInfoMessage(message) {
        this.showMessage(message, 'info');
    }

    showMessage(message, type = 'info') {
        const messageEl = CourseUtils.dom.createElement('div', {
            class: `alert alert-${type}`,
            style: 'position: fixed; top: 20px; right: 20px; z-index: 1000; min-width: 300px;'
        }, message);
        
        document.body.appendChild(messageEl);
        
        setTimeout(() => {
            CourseUtils.animation.fadeOut(messageEl, 300);
            setTimeout(() => messageEl.remove(), 300);
        }, 3000);
    }

    showCelebration() {
        // Create celebration effect for tutorial completion
        for (let i = 0; i < 30; i++) {
            const confetti = CourseUtils.dom.createElement('div', {
                style: `
                    position: fixed;
                    top: -10px;
                    left: ${Math.random() * 100}%;
                    width: 8px;
                    height: 8px;
                    background: hsl(${Math.random() * 360}, 100%, 50%);
                    pointer-events: none;
                    z-index: 10000;
                    animation: confetti-fall ${2 + Math.random() * 3}s linear forwards;
                `
            });
            
            document.body.appendChild(confetti);
            setTimeout(() => confetti.remove(), 5000);
        }
        
        this.showSuccessMessage('🎉 Tutorial T1 Completed! Ready for Multi-layer Perceptrons!');
    }
}

// Initialize tutorial when DOM is ready
let tutorialT1;
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        tutorialT1 = new TutorialT1Controller();
    });
} else {
    tutorialT1 = new TutorialT1Controller();
}