// Unit Test 1: Modules 1-2 Assessment Preparation - Isolated Data
const assessmentData = {
    id: "unit-test-1",
    title: "Unit Test 1: Neural Network Fundamentals",
    subtitle: "Assessment covering Introduction to Deep Learning & Optimization",
    date: "September 19, 2025",
    time: "2:00 PM - 4:00 PM",
    duration: "120 minutes",
    weight: "22.5%",
    format: "Theory + Practical + Problem Solving",
    color: "#ffd700",
    gradient: "linear-gradient(135deg, #ffd700 0%, #ffed4e 100%)",
    
    // Coverage Information
    coverage: {
        modules: [
            {
                id: 1,
                title: "Introduction to Deep Learning",
                weight: "50%",
                topics: [
                    "Perceptron model and learning algorithm",
                    "Multi-layer perceptrons (MLPs)",
                    "Activation functions (step, sigmoid, tanh, ReLU)",
                    "Forward propagation",
                    "Backpropagation algorithm",
                    "TensorFlow basics and implementation"
                ]
            },
            {
                id: 2,
                title: "Optimization and Regularization", 
                weight: "50%",
                topics: [
                    "Gradient descent variants (SGD, momentum, adaptive)",
                    "Vanishing gradient problem and solutions",
                    "L1 and L2 regularization",
                    "Dropout and early stopping",
                    "Batch normalization and layer normalization",
                    "Hyperparameter tuning strategies"
                ]
            }
        ]
    },
    
    // Exam Structure
    structure: [
        {
            section: "Part A: Theoretical Concepts",
            duration: "45 minutes",
            marks: "40 marks",
            questions: 8,
            type: "Multiple Choice + Short Answer",
            description: "Fundamental concepts, definitions, and theoretical understanding"
        },
        {
            section: "Part B: Problem Solving",
            duration: "45 minutes", 
            marks: "35 marks",
            questions: 3,
            type: "Numerical Problems",
            description: "Mathematical calculations, algorithm derivations, and analytical problems"
        },
        {
            section: "Part C: Practical Implementation",
            duration: "30 minutes",
            marks: "25 marks", 
            questions: 2,
            type: "Code Analysis + Implementation",
            description: "Code interpretation, debugging, and small implementation tasks"
        }
    ],
    
    // Key Learning Objectives Being Assessed
    learningObjectives: [
        {
            id: "CO-1",
            text: "Build simple deep neural networks from mathematical foundations",
            assessmentMethod: "Theoretical concepts + Perceptron implementation",
            weight: "60%"
        },
        {
            id: "CO-2", 
            text: "Build multi-layer neural networks with appropriate activation functions",
            assessmentMethod: "MLP design + Backpropagation calculations",
            weight: "40%"
        }
    ],
    
    // Important Concepts for Study
    keyTopics: [
        {
            category: "Neural Network Basics",
            priority: "High",
            topics: [
                {
                    name: "Perceptron Learning Algorithm",
                    formula: "w_new = w_old + η(target - output)x",
                    importance: "Must understand convergence theorem and limitations"
                },
                {
                    name: "Activation Functions", 
                    formulas: [
                        "Sigmoid: σ(x) = 1/(1 + e^(-x))",
                        "ReLU: f(x) = max(0, x)",
                        "Tanh: tanh(x) = (e^x - e^(-x))/(e^x + e^(-x))"
                    ],
                    importance: "Know derivatives and when to use each"
                },
                {
                    name: "Backpropagation",
                    formula: "∂E/∂w = ∂E/∂output × ∂output/∂w",
                    importance: "Chain rule application in neural networks"
                }
            ]
        },
        {
            category: "Optimization Techniques",
            priority: "High", 
            topics: [
                {
                    name: "Gradient Descent Variants",
                    formulas: [
                        "SGD: θ = θ - η∇J(θ)",
                        "Momentum: v = βv + η∇J(θ); θ = θ - v",
                        "Adam: Combines momentum + RMSprop"
                    ],
                    importance: "Compare convergence properties and use cases"
                },
                {
                    name: "Regularization Methods",
                    formulas: [
                        "L1: Loss + λΣ|w_i|", 
                        "L2: Loss + λΣw_i²",
                        "Dropout: Randomly set p% neurons to 0"
                    ],
                    importance: "Preventing overfitting techniques"
                }
            ]
        }
    ],
    
    // Sample Questions
    sampleQuestions: [
        {
            type: "Multiple Choice",
            section: "Part A",
            question: "Which activation function suffers from the vanishing gradient problem in deep networks?",
            options: [
                "ReLU",
                "Sigmoid", 
                "Leaky ReLU",
                "Linear"
            ],
            correct: 1,
            explanation: "Sigmoid function has derivatives close to 0 in saturation regions, causing vanishing gradients."
        },
        {
            type: "Short Answer",
            section: "Part A", 
            question: "Explain why the perceptron cannot solve the XOR problem. What is the minimum number of layers needed?",
            points: 5,
            keyPoints: [
                "XOR is not linearly separable",
                "Perceptron can only learn linear decision boundaries",
                "Need at least 2 layers (1 hidden layer) for XOR",
                "Multi-layer networks can learn non-linear functions"
            ]
        },
        {
            type: "Numerical Problem",
            section: "Part B",
            question: "Given a 2-input perceptron with weights w1=0.5, w2=0.3, bias b=-0.2, and learning rate η=0.1. If input (1,1) with target output 0 produces output 1, calculate the new weights after one update.",
            solution: {
                steps: [
                    "Current output = step(0.5×1 + 0.3×1 - 0.2) = step(0.6) = 1",
                    "Error = target - output = 0 - 1 = -1", 
                    "w1_new = 0.5 + 0.1×(-1)×1 = 0.4",
                    "w2_new = 0.3 + 0.1×(-1)×1 = 0.2",
                    "b_new = -0.2 + 0.1×(-1)×1 = -0.3"
                ],
                answer: "w1=0.4, w2=0.2, b=-0.3"
            }
        },
        {
            type: "Code Analysis", 
            section: "Part C",
            question: "Analyze the following TensorFlow code and identify the optimization algorithm being used:",
            code: `
model = tf.keras.Sequential([
    tf.keras.layers.Dense(10, activation='relu'),
    tf.keras.layers.Dense(1, activation='sigmoid')
])
model.compile(optimizer='adam', loss='binary_crossentropy')
            `,
            answer: "Adam optimizer",
            explanation: "The optimizer parameter is explicitly set to 'adam' which uses adaptive moment estimation."
        }
    ],
    
    // Study Timeline (2 weeks before exam)
    studyPlan: [
        {
            week: "Week 1 (Sep 5-11)",
            focus: "Module 1 Concepts",
            tasks: [
                "Review perceptron algorithm and limitations",
                "Practice activation function calculations",
                "Understand backpropagation step-by-step",
                "Complete Tutorial T1-T3 if not done",
                "Solve numerical problems on forward propagation"
            ],
            timeAllocation: "8 hours"
        },
        {
            week: "Week 2 (Sep 12-18)",
            focus: "Module 2 Concepts + Integration",
            tasks: [
                "Master gradient descent variants",
                "Understand regularization techniques",
                "Practice optimization problem solving",
                "Review TensorFlow implementation details",
                "Complete practice test and mock exam"
            ],
            timeAllocation: "10 hours"
        }
    ],
    
    // Resources for Preparation
    studyResources: [
        {
            type: "Textbook",
            title: "Deep Learning",
            author: "Ian Goodfellow",
            chapters: "Chapters 3-6",
            priority: "High",
            notes: "Focus on mathematical foundations"
        },
        {
            type: "Textbook",
            title: "Deep Learning with Python", 
            author: "François Chollet",
            chapters: "Chapters 1-4",
            priority: "High",
            notes: "Practical TensorFlow/Keras implementation"
        },
        {
            type: "Tutorial",
            title: "Tutorial T1: Perceptron Implementation",
            location: "../../tutorials/tutorial-T01/index.html",
            priority: "Critical",
            notes: "Must complete all 6 steps"
        },
        {
            type: "Tutorial", 
            title: "Tutorial T2: MLP & Backpropagation",
            location: "../../tutorials/tutorial-T02/index.html",
            priority: "Critical", 
            notes: "Focus on backpropagation calculations"
        },
        {
            type: "Tutorial",
            title: "Tutorial T3: TensorFlow Neural Network",
            location: "../../tutorials/tutorial-T03/index.html", 
            priority: "High",
            notes: "Implementation and debugging skills"
        },
        {
            type: "Video",
            title: "Neural Networks Explained",
            author: "3Blue1Brown",
            url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi",
            priority: "Medium",
            notes: "Excellent visual explanations"
        },
        {
            type: "Paper",
            title: "Efficient BackProp", 
            author: "Yann LeCun et al.",
            url: "http://yann.lecun.com/exdb/publis/pdf/lecun-98b.pdf",
            priority: "Low",
            notes: "Advanced reading for deeper understanding"
        }
    ],
    
    // Practice Problems
    practiceProblems: [
        {
            difficulty: "Easy",
            topic: "Perceptron",
            problem: "Design a perceptron to implement the AND gate. Show the truth table and find suitable weights.",
            estimatedTime: "15 minutes"
        },
        {
            difficulty: "Medium",
            topic: "Activation Functions",
            problem: "Calculate the derivative of sigmoid function and explain why it causes vanishing gradient problem.",
            estimatedTime: "20 minutes"
        },
        {
            difficulty: "Medium", 
            topic: "Backpropagation",
            problem: "For a 2-layer network with 1 hidden neuron, derive the backpropagation update rule for the hidden layer weights.",
            estimatedTime: "30 minutes"
        },
        {
            difficulty: "Hard",
            topic: "Optimization",
            problem: "Compare SGD, SGD with momentum, and Adam optimizers on a simple quadratic loss function. Plot convergence paths.",
            estimatedTime: "45 minutes"
        },
        {
            difficulty: "Hard",
            topic: "Regularization",
            problem: "Implement L1 and L2 regularization in TensorFlow and analyze their effects on overfitting.",
            estimatedTime: "60 minutes"
        }
    ],
    
    // Formula Sheet (allowed during exam)
    formulaSheet: {
        allowed: true,
        contents: [
            {
                category: "Activation Functions",
                formulas: [
                    "Sigmoid: σ(x) = 1/(1 + e^(-x)), σ'(x) = σ(x)(1 - σ(x))",
                    "Tanh: tanh(x) = (e^x - e^(-x))/(e^x + e^(-x)), tanh'(x) = 1 - tanh²(x)",
                    "ReLU: f(x) = max(0, x), f'(x) = 1 if x > 0, else 0"
                ]
            },
            {
                category: "Optimization",
                formulas: [
                    "SGD: θ_t+1 = θ_t - η∇J(θ_t)",
                    "Momentum: v_t = βv_t-1 + η∇J(θ_t), θ_t+1 = θ_t - v_t",
                    "Adam: Combines bias-corrected momentum and RMSprop"
                ]
            },
            {
                category: "Regularization",
                formulas: [
                    "L1 Regularization: J_reg = J + λΣ|w_i|",
                    "L2 Regularization: J_reg = J + λΣw_i²",
                    "Dropout: During training, randomly set neurons to 0 with probability p"
                ]
            }
        ]
    },
    
    // Exam Day Information
    examDetails: {
        location: "Computer Lab A, Block 3",
        reportingTime: "1:45 PM",
        examTime: "2:00 PM - 4:00 PM",
        allowedItems: [
            "Scientific calculator",
            "Formula sheet (provided)",
            "Writing materials (pen, pencil, eraser)"
        ],
        forbiddenItems: [
            "Mobile phones",
            "Laptops or tablets",
            "Reference books",
            "Printed notes"
        ],
        instructions: [
            "Attempt all questions in Part A",
            "Choose any 2 out of 3 questions in Part B",
            "Both questions in Part C are compulsory",
            "Show all working for numerical problems",
            "Code segments must be syntactically correct"
        ]
    },
    
    // Assessment Rubric
    gradingRubric: {
        partA: {
            multipleChoice: "2 marks each (no negative marking)",
            shortAnswer: "3-5 marks each (partial credit available)"
        },
        partB: {
            numericalProblems: "Method: 40%, Calculation: 40%, Final Answer: 20%"
        },
        partC: {
            codeAnalysis: "Understanding: 60%, Explanation: 40%"
        },
        overallGrading: {
            "A+ (90-100%)": "Exceptional understanding with error-free solutions",
            "A (80-89%)": "Strong grasp with minor calculation errors", 
            "B+ (70-79%)": "Good understanding with some conceptual gaps",
            "B (60-69%)": "Satisfactory with major gaps in advanced topics",
            "C+ (50-59%)": "Basic understanding, needs improvement",
            "F (<50%)": "Insufficient preparation, requires remedial study"
        }
    },
    
    // Navigation
    navigation: {
        modules: [
            {
                id: 1,
                title: "Introduction to Deep Learning",
                path: "../../modules/module-01-intro-deep-learning/index.html"
            },
            {
                id: 2, 
                title: "Optimization and Regularization",
                path: "../../modules/module-02-optimization-regularization/index.html"
            }
        ],
        tutorials: [
            {
                id: "T1",
                title: "Perceptron Implementation", 
                path: "../../tutorials/tutorial-T01/index.html"
            },
            {
                id: "T2",
                title: "MLP & Backpropagation",
                path: "../../tutorials/tutorial-T02/index.html"
            },
            {
                id: "T3",
                title: "TensorFlow Neural Network",
                path: "../../tutorials/tutorial-T03/index.html"
            }
        ],
        dashboard: "../../index.html"
    },
    
    // Interactive Features
    features: {
        progressTracking: {
            enabled: true,
            trackItems: ["studyPlan", "practiceProblems", "sampleQuestions", "tutorials"]
        },
        timer: {
            enabled: true,
            modes: ["study", "practice", "mock"]
        },
        flashcards: {
            enabled: true,
            categories: ["formulas", "concepts", "definitions"]
        },
        mockExam: {
            enabled: true,
            duration: 120,
            questions: 15,
            autoGrade: true
        }
    }
};

// Export for use in component
if (typeof window !== 'undefined') {
    window.assessmentData = assessmentData;
}