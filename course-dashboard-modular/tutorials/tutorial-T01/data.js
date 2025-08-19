// Tutorial T1: Perceptron Implementation - Isolated Data
const tutorialData = {
    id: "T1",
    title: "Perceptron Implementation",
    subtitle: "Building Your First Neural Network from Scratch",
    module: 1,
    week: 1,
    difficulty: "Beginner",
    estimatedTime: "90 minutes",
    color: "#43e97b",
    gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    
    // Learning Objectives
    objectives: [
        "Understand the mathematical foundation of the perceptron",
        "Implement a perceptron from scratch in Python",
        "Learn about activation functions and decision boundaries",
        "Apply perceptron to solve simple classification problems",
        "Understand the limitations of single-layer perceptrons"
    ],
    
    // Prerequisites
    prerequisites: [
        "Basic Python programming (functions, loops, conditionals)",
        "Understanding of vectors and dot products",
        "Familiarity with NumPy arrays",
        "Basic knowledge of linear algebra"
    ],
    
    // Tutorial Steps
    steps: [
        {
            id: 1,
            title: "Environment Setup",
            description: "Install required libraries and set up development environment",
            estimatedTime: "15 minutes",
            type: "setup",
            content: {
                overview: "We'll install the necessary Python libraries for neural network implementation.",
                requirements: ["Python 3.7+", "NumPy", "Matplotlib", "Jupyter Notebook (optional)"],
                code: `# Install required packages
pip install numpy matplotlib jupyter

# Verify installation
python -c "import numpy as np; print('NumPy version:', np.__version__)"
python -c "import matplotlib; print('Matplotlib installed successfully')"`,
                tips: [
                    "Use virtual environments to avoid package conflicts",
                    "Consider using Anaconda for easier package management",
                    "Jupyter Notebook provides interactive development experience"
                ]
            }
        },
        {
            id: 2,
            title: "Mathematical Foundation",
            description: "Understand the perceptron algorithm and mathematical concepts",
            estimatedTime: "20 minutes", 
            type: "theory",
            content: {
                overview: "Learn the mathematical foundation that powers the perceptron algorithm.",
                concepts: [
                    {
                        name: "Weighted Sum",
                        formula: "z = w₁x₁ + w₂x₂ + ... + wₙxₙ + b",
                        explanation: "Each input is multiplied by its weight, then all products are summed with bias"
                    },
                    {
                        name: "Activation Function", 
                        formula: "ŷ = f(z) = 1 if z ≥ 0, else 0",
                        explanation: "Step function converts weighted sum to binary output"
                    },
                    {
                        name: "Learning Rule",
                        formula: "wᵢ = wᵢ + η(y - ŷ)xᵢ",
                        explanation: "Weights are updated based on prediction error"
                    }
                ],
                visualConcepts: [
                    "Decision boundary as a linear separator",
                    "Weight vector perpendicular to decision boundary",
                    "Learning as iterative boundary adjustment"
                ]
            }
        },
        {
            id: 3,
            title: "Basic Perceptron Implementation", 
            description: "Code a simple perceptron class from scratch",
            estimatedTime: "25 minutes",
            type: "coding",
            content: {
                overview: "Implement the core perceptron algorithm using only NumPy.",
                code: `import numpy as np
import matplotlib.pyplot as plt

class Perceptron:
    def __init__(self, learning_rate=0.01, max_epochs=100):
        """
        Initialize perceptron with learning parameters
        
        Args:
            learning_rate: Step size for weight updates
            max_epochs: Maximum training iterations
        """
        self.learning_rate = learning_rate
        self.max_epochs = max_epochs
        self.weights = None
        self.bias = None
        self.errors = []
        
    def activation_function(self, z):
        """Step function: returns 1 if z >= 0, else 0"""
        return np.where(z >= 0, 1, 0)
    
    def fit(self, X, y):
        """
        Train the perceptron on training data
        
        Args:
            X: Training features (n_samples, n_features)
            y: Training labels (n_samples,)
        """
        # Initialize weights and bias
        n_features = X.shape[1]
        self.weights = np.random.normal(0, 0.01, n_features)
        self.bias = 0
        
        # Training loop
        for epoch in range(self.max_epochs):
            epoch_errors = 0
            
            for i, x_i in enumerate(X):
                # Forward pass
                linear_output = np.dot(x_i, self.weights) + self.bias
                y_predicted = self.activation_function(linear_output)
                
                # Update weights and bias if prediction is wrong
                error = y[i] - y_predicted
                if error != 0:
                    self.weights += self.learning_rate * error * x_i
                    self.bias += self.learning_rate * error
                    epoch_errors += 1
            
            self.errors.append(epoch_errors)
            
            # Stop if no errors (converged)
            if epoch_errors == 0:
                print(f"Converged after {epoch + 1} epochs")
                break
        
        return self
    
    def predict(self, X):
        """Make predictions on new data"""
        linear_output = np.dot(X, self.weights) + self.bias
        return self.activation_function(linear_output)
    
    def score(self, X, y):
        """Calculate accuracy on test data"""
        predictions = self.predict(X)
        return np.mean(predictions == y)`,
                explanation: [
                    "Class initialization sets hyperparameters",
                    "Weights are randomly initialized for symmetry breaking",
                    "Training loop updates weights only when prediction is wrong",
                    "Convergence occurs when no classification errors remain"
                ]
            }
        },
        {
            id: 4,
            title: "AND Gate Implementation",
            description: "Test perceptron on logical AND operation",
            estimatedTime: "15 minutes",
            type: "application",
            content: {
                overview: "Apply our perceptron to learn the logical AND function.",
                code: `# Create AND gate dataset
X_and = np.array([[0, 0], [0, 1], [1, 0], [1, 1]])
y_and = np.array([0, 0, 0, 1])

print("AND Gate Training Data:")
for i in range(len(X_and)):
    print(f"Input: {X_and[i]} -> Output: {y_and[i]}")

# Train perceptron
perceptron_and = Perceptron(learning_rate=0.1, max_epochs=10)
perceptron_and.fit(X_and, y_and)

# Test predictions
predictions = perceptron_and.predict(X_and)
accuracy = perceptron_and.score(X_and, y_and)

print(f"\\nTraining Results:")
print(f"Predictions: {predictions}")
print(f"Expected:    {y_and}")
print(f"Accuracy: {accuracy:.2%}")
print(f"Final weights: {perceptron_and.weights}")
print(f"Final bias: {perceptron_and.bias:.3f}")`,
                expectedOutput: "The perceptron should achieve 100% accuracy on the AND gate problem within a few epochs."
            }
        },
        {
            id: 5,
            title: "OR Gate Implementation",
            description: "Extend to logical OR operation",
            estimatedTime: "10 minutes",
            type: "application", 
            content: {
                overview: "Test the same perceptron architecture on the OR gate problem.",
                code: `# Create OR gate dataset
X_or = np.array([[0, 0], [0, 1], [1, 0], [1, 1]])
y_or = np.array([0, 1, 1, 1])

print("OR Gate Training Data:")
for i in range(len(X_or)):
    print(f"Input: {X_or[i]} -> Output: {y_or[i]}")

# Train perceptron
perceptron_or = Perceptron(learning_rate=0.1, max_epochs=10)
perceptron_or.fit(X_or, y_or)

# Test predictions
predictions = perceptron_or.predict(X_or)
accuracy = perceptron_or.score(X_or, y_or)

print(f"\\nTraining Results:")
print(f"Predictions: {predictions}")
print(f"Expected:    {y_or}")
print(f"Accuracy: {accuracy:.2%}")`,
                challenge: "Try different learning rates (0.01, 0.1, 1.0) and observe convergence speed."
            }
        },
        {
            id: 6,
            title: "XOR Problem - Limitation Discovery",
            description: "Understand single-layer perceptron limitations",
            estimatedTime: "15 minutes",
            type: "exploration",
            content: {
                overview: "Discover why single-layer perceptrons cannot solve the XOR problem.",
                code: `# Create XOR gate dataset
X_xor = np.array([[0, 0], [0, 1], [1, 0], [1, 1]])
y_xor = np.array([0, 1, 1, 0])

print("XOR Gate Training Data:")
for i in range(len(X_xor)):
    print(f"Input: {X_xor[i]} -> Output: {y_xor[i]}")

# Train perceptron (this will fail to converge)
perceptron_xor = Perceptron(learning_rate=0.1, max_epochs=50)
perceptron_xor.fit(X_xor, y_xor)

# Test predictions
predictions = perceptron_xor.predict(X_xor)
accuracy = perceptron_xor.score(X_xor, y_xor)

print(f"\\nTraining Results:")
print(f"Predictions: {predictions}")
print(f"Expected:    {y_xor}")
print(f"Accuracy: {accuracy:.2%}")

# Plot error curve
plt.figure(figsize=(10, 4))
plt.plot(perceptron_xor.errors, marker='o')
plt.title('XOR Problem: Training Errors Over Time')
plt.xlabel('Epoch')
plt.ylabel('Number of Errors')
plt.grid(True)
plt.show()

print("\\n🚨 Key Insight: Single-layer perceptrons cannot solve XOR!")
print("This limitation led to the development of multi-layer networks.")`,
                insight: "The XOR problem is not linearly separable, requiring multiple layers to solve."
            }
        }
    ],
    
    // Assessment
    assessment: {
        questions: [
            {
                type: "coding",
                question: "Modify the perceptron to use a sigmoid activation function instead of step function",
                difficulty: "intermediate",
                hints: ["Sigmoid: 1/(1 + e^(-z))", "You'll need to adjust the decision threshold"]
            },
            {
                type: "theory", 
                question: "Explain why the perceptron learning rule guarantees convergence for linearly separable data",
                difficulty: "advanced"
            },
            {
                type: "application",
                question: "Create a perceptron to classify points above/below the line y = 2x + 1",
                difficulty: "intermediate"
            }
        ],
        practiceExercises: [
            "Implement NAND gate using perceptron",
            "Visualize decision boundary for 2D classification",
            "Compare different learning rates on convergence speed",
            "Create a perceptron ensemble for improved performance"
        ]
    },
    
    // Resources
    resources: [
        {
            type: "documentation",
            title: "NumPy Documentation",
            url: "https://numpy.org/doc/stable/",
            description: "Official NumPy documentation for array operations"
        },
        {
            type: "video",
            title: "Perceptron Learning Algorithm",
            author: "3Blue1Brown",
            url: "https://www.youtube.com/watch?v=aircAruvnKk",
            description: "Visual explanation of how perceptrons learn"
        },
        {
            type: "paper",
            title: "The Perceptron: A Probabilistic Model",
            author: "Frank Rosenblatt (1958)",
            description: "Original paper introducing the perceptron algorithm"
        }
    ],
    
    // Navigation
    navigation: {
        previous: null,
        next: {
            id: "T2",
            title: "MLP & Backpropagation", 
            path: "../tutorial-T02/index.html"
        },
        module: {
            id: 1,
            title: "Introduction to Deep Learning",
            path: "../../modules/module-01-intro-deep-learning/index.html"
        },
        dashboard: "../../index.html"
    },
    
    // Progress Tracking
    progress: {
        totalSteps: 6,
        estimatedTotal: 90,
        checkpoints: [
            { step: 2, description: "Theory understood" },
            { step: 4, description: "First working perceptron" },
            { step: 6, description: "Limitations discovered" }
        ]
    }
};

// Export for use in component
if (typeof window !== 'undefined') {
    window.tutorialData = tutorialData;
}