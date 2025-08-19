// Module 2: Optimization and Regularization - Isolated Data
const moduleData = {
    id: 2,
    title: "Optimization and Regularization",
    subtitle: "Advanced Training Techniques for Neural Networks",
    weeks: "4-6",
    duration: "9 hours",
    color: "#667eea",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    
    // Learning Objectives
    objectives: [
        "Master various gradient descent optimization algorithms",
        "Understand and solve the vanishing gradient problem",
        "Implement regularization techniques to prevent overfitting",
        "Apply normalization methods for stable training",
        "Optimize neural network hyperparameters effectively"
    ],
    
    // Weekly Breakdown
    weekly: [
        {
            week: 4,
            title: "Gradient Descent Algorithms",
            topics: ["SGD fundamentals", "Mini-batch gradient descent", "Momentum and adaptive methods"],
            deliverables: ["GD variants comparison", "Convergence analysis"],
            tutorial: "T4: Neural Network in Python"
        },
        {
            week: 5,
            title: "Regularization Techniques",
            topics: ["Vanishing gradients", "L1/L2 regularization", "Dropout and early stopping"],
            deliverables: ["Regularization implementation", "Overfitting prevention"],
            tutorial: "T5: Keras Neural Networks"
        },
        {
            week: 6,
            title: "Normalization & Advanced Optimization",
            topics: ["Batch normalization", "Layer normalization", "Adam optimizer"],
            deliverables: ["Normalization comparison", "Unit Test 1 preparation"],
            tutorial: "T6: Optimization Techniques"
        }
    ],
    
    // Key Topics
    topics: [
        {
            title: "Gradient Descent Variants",
            description: "From basic SGD to advanced adaptive optimizers",
            complexity: "Intermediate",
            duration: "3 hours"
        },
        {
            title: "Vanishing Gradients",
            description: "Understanding and solving gradient flow problems",
            complexity: "Advanced", 
            duration: "2 hours"
        },
        {
            title: "Regularization Methods",
            description: "Preventing overfitting with L1, L2, dropout, and early stopping",
            complexity: "Intermediate",
            duration: "2 hours"
        },
        {
            title: "Normalization Techniques",
            description: "Batch, layer, and other normalization methods for stable training",
            complexity: "Advanced",
            duration: "2 hours"
        }
    ],
    
    // Learning Outcomes Mapping
    outcomes: [
        {
            id: "CO-2",
            text: "Build multi-layer neural networks with appropriate activation functions",
            targetWeek: 9,
            moduleContribution: "Primary - Optimization enables deep network training"
        }
    ],
    
    // Tutorials
    tutorials: [
        {
            id: "T4",
            title: "Neural Network in Python",
            description: "Build multi-layer networks from scratch with optimization",
            difficulty: "Intermediate",
            estimatedTime: "120 minutes"
        },
        {
            id: "T5", 
            title: "Keras Neural Networks",
            description: "Implement regularized networks using Keras framework",
            difficulty: "Intermediate",
            estimatedTime: "90 minutes"
        },
        {
            id: "T6",
            title: "Optimization Techniques", 
            description: "Compare different optimizers and normalization methods",
            difficulty: "Advanced",
            estimatedTime: "105 minutes"
        }
    ],
    
    // Prerequisites
    prerequisites: [
        "Completion of Module 1 (Perceptron and MLP basics)",
        "Understanding of calculus (derivatives, chain rule)",
        "Familiarity with linear algebra (matrix operations)",
        "Python programming with NumPy experience"
    ],
    
    // Key Concepts Deep Dive
    concepts: {
        optimizers: {
            title: "Gradient Descent Optimizers",
            items: [
                {
                    name: "Stochastic Gradient Descent (SGD)",
                    formula: "θ = θ - η∇J(θ)",
                    pros: ["Simple implementation", "Memory efficient"],
                    cons: ["Noisy convergence", "Fixed learning rate"]
                },
                {
                    name: "SGD with Momentum",
                    formula: "v = βv + η∇J(θ); θ = θ - v",
                    pros: ["Faster convergence", "Reduces oscillations"],
                    cons: ["Additional hyperparameter β"]
                },
                {
                    name: "Adam Optimizer",
                    formula: "Adaptive moment estimation with bias correction",
                    pros: ["Adaptive learning rates", "Works well in practice"],
                    cons: ["More complex", "Can overfit small datasets"]
                }
            ]
        },
        regularization: {
            title: "Regularization Techniques",
            items: [
                {
                    name: "L1 Regularization (Lasso)",
                    formula: "Loss + λ Σ|w_i|",
                    effect: "Promotes sparsity, feature selection"
                },
                {
                    name: "L2 Regularization (Ridge)",
                    formula: "Loss + λ Σw_i²",
                    effect: "Prevents large weights, smooth solutions"
                },
                {
                    name: "Dropout",
                    formula: "Randomly set neurons to 0 with probability p",
                    effect: "Prevents co-adaptation, improves generalization"
                }
            ]
        },
        normalization: {
            title: "Normalization Methods",
            items: [
                {
                    name: "Batch Normalization",
                    formula: "Normalize across batch dimension",
                    benefits: ["Faster training", "Higher learning rates", "Regularization effect"]
                },
                {
                    name: "Layer Normalization", 
                    formula: "Normalize across feature dimension",
                    benefits: ["Works with any batch size", "Good for RNNs"]
                }
            ]
        }
    },
    
    // Practical Applications
    applications: [
        {
            title: "Image Classification Optimization",
            description: "Apply optimization techniques to improve CNN training on CIFAR-10",
            complexity: "Advanced",
            tools: ["TensorFlow", "Keras", "Matplotlib"]
        },
        {
            title: "Regularization Case Study",
            description: "Compare different regularization methods on overfitting dataset",
            complexity: "Intermediate",
            tools: ["Scikit-learn", "NumPy", "Plotting"]
        },
        {
            title: "Hyperparameter Tuning",
            description: "Systematic approach to finding optimal learning rates and architectures",
            complexity: "Advanced",
            tools: ["Grid search", "Random search", "Bayesian optimization"]
        }
    ],
    
    // Resources
    resources: [
        {
            type: "Book",
            title: "Deep Learning",
            author: "Ian Goodfellow",
            chapter: "Chapters 6-8 (Optimization)",
            url: "#"
        },
        {
            type: "Paper",
            title: "Adam: A Method for Stochastic Optimization",
            author: "Kingma & Ba (2014)",
            url: "https://arxiv.org/abs/1412.6980"
        },
        {
            type: "Paper",
            title: "Batch Normalization",
            author: "Ioffe & Szegedy (2015)",
            url: "https://arxiv.org/abs/1502.03167"
        },
        {
            type: "Video",
            title: "Optimization for Deep Learning",
            author: "Andrew Ng - Stanford CS229",
            url: "https://www.youtube.com/watch?v=1waHlpKiNyY"
        }
    ],
    
    // Assessment Information
    assessment: {
        weight: "Part of Unit Test 1 (22.5%)",
        date: "September 19, 2025",
        coverage: "Gradient descent variants, regularization techniques, normalization methods",
        format: "Theory + Practical implementation + Optimization problem solving",
        keyTopics: [
            "Derive gradient descent update rules",
            "Implement L1/L2 regularization",
            "Explain vanishing gradient problem solutions",
            "Compare different optimization algorithms",
            "Apply batch normalization effectively"
        ]
    },
    
    // Milestones and Checkpoints
    milestones: [
        {
            week: 4,
            title: "Optimization Fundamentals Mastered",
            criteria: [
                "Understand different gradient descent variants",
                "Implement SGD with momentum",
                "Compare convergence properties"
            ]
        },
        {
            week: 5,
            title: "Regularization Techniques Applied",
            criteria: [
                "Identify overfitting in neural networks",
                "Implement L1/L2 regularization",
                "Apply dropout effectively"
            ]
        },
        {
            week: 6,
            title: "Advanced Optimization Ready",
            criteria: [
                "Implement batch normalization",
                "Use Adam optimizer effectively",
                "Ready for Unit Test 1"
            ]
        }
    ],
    
    // Navigation
    navigation: {
        previous: {
            id: 1,
            title: "Introduction to Deep Learning",
            path: "../module-01-intro-deep-learning/index.html"
        },
        next: {
            id: 3,
            title: "Image Processing & Deep Neural Networks",
            path: "../module-03-image-processing-dnns/index.html"
        },
        dashboard: "../../index.html"
    },
    
    // Advanced Features
    interactiveFeatures: {
        optimizerComparison: {
            title: "Interactive Optimizer Comparison",
            description: "Visualize how different optimizers navigate loss landscapes",
            available: true
        },
        regularizationSliders: {
            title: "Regularization Strength Explorer", 
            description: "See real-time effects of L1/L2 regularization on model weights",
            available: true
        },
        learningRateFinder: {
            title: "Learning Rate Range Test",
            description: "Find optimal learning rate using systematic exploration",
            available: true
        }
    }
};

// Export for use in component
if (typeof window !== 'undefined') {
    window.moduleData = moduleData;
}