// Tutorial T2: Multi-layer Perceptron & Backpropagation - Isolated Data
const tutorialData = {
    id: "T2",
    title: "Multi-layer Perceptron & Backpropagation",
    subtitle: "Building Deep Networks with Gradient-based Learning",
    module: "Module 1",
    estimatedTime: "105 minutes",
    difficulty: "Intermediate",
    type: "Theory + Implementation",
    color: "#4facfe",
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    
    // Learning Objectives
    objectives: [
        "Understand the architecture and forward propagation of multi-layer perceptrons",
        "Master the backpropagation algorithm and its mathematical derivation",
        "Implement MLPs from scratch using NumPy with proper gradient computation",
        "Analyze the role of activation functions in deep learning",
        "Apply MLPs to solve non-linear classification problems like XOR"
    ],
    
    // Prerequisites
    prerequisites: [
        "Completion of Tutorial T1 (Perceptron Implementation)",
        "Understanding of calculus (derivatives, chain rule)",
        "Linear algebra basics (matrix multiplication, vector operations)",
        "Python programming with NumPy proficiency"
    ],
    
    // Tutorial Steps
    steps: [
        {
            id: 1,
            title: "MLP Architecture & Forward Propagation",
            estimatedTime: "20 minutes",
            type: "theory",
            description: "Understand how multi-layer networks overcome the limitations of single perceptrons and learn the forward propagation process.",
            content: {
                overview: "Multi-layer perceptrons (MLPs) are the foundation of deep learning. By stacking multiple layers of neurons, we can learn complex non-linear functions that single perceptrons cannot represent.",
                concepts: [
                    {
                        name: "Hidden Layers",
                        formula: "h = f(W₁x + b₁)",
                        explanation: "Hidden layers transform input features into higher-level representations using learned weights and biases."
                    },
                    {
                        name: "Universal Approximation",
                        formula: "Any continuous function can be approximated with sufficient hidden units",
                        explanation: "MLPs with at least one hidden layer can approximate any continuous function given enough neurons."
                    },
                    {
                        name: "Forward Propagation",
                        formula: "ŷ = f₂(W₂f₁(W₁x + b₁) + b₂)",
                        explanation: "Information flows forward through layers, with each layer applying linear transformation followed by non-linear activation."
                    }
                ],
                tips: [
                    "Visualize MLPs as function composition: each layer transforms the representation",
                    "The depth (number of layers) determines model expressiveness",
                    "Width (neurons per layer) affects the capacity at each level",
                    "Non-linear activations are crucial - linear layers just perform matrix multiplication"
                ]
            }
        },
        {
            id: 2,
            title: "Activation Functions Deep Dive",
            estimatedTime: "15 minutes",
            type: "theory",
            description: "Explore different activation functions, their properties, and when to use each one in your neural networks.",
            content: {
                overview: "Activation functions introduce non-linearity and determine how neurons respond to inputs. The choice of activation function significantly impacts training dynamics and model performance.",
                concepts: [
                    {
                        name: "Sigmoid Activation",
                        formula: "σ(x) = 1/(1 + e^(-x)), σ'(x) = σ(x)(1 - σ(x))",
                        explanation: "Smooth, bounded function good for binary classification but suffers from vanishing gradients."
                    },
                    {
                        name: "Hyperbolic Tangent",
                        formula: "tanh(x) = (e^x - e^(-x))/(e^x + e^(-x)), tanh'(x) = 1 - tanh²(x)",
                        explanation: "Zero-centered version of sigmoid with stronger gradients, better for hidden layers."
                    },
                    {
                        name: "ReLU Activation",
                        formula: "ReLU(x) = max(0, x), ReLU'(x) = 1 if x > 0, else 0",
                        explanation: "Simple, efficient, solves vanishing gradients but can cause dying neurons."
                    },
                    {
                        name: "Leaky ReLU",
                        formula: "LeakyReLU(x) = max(αx, x) where α = 0.01",
                        explanation: "Fixes dying ReLU problem by allowing small negative gradients."
                    }
                ],
                tips: [
                    "Use ReLU for hidden layers in most cases - it's simple and effective",
                    "Sigmoid/Tanh for output layers in binary classification",
                    "Softmax for multi-class classification outputs",
                    "Experiment with ELU or Swish for potentially better performance"
                ]
            }
        },
        {
            id: 3,
            title: "Backpropagation Algorithm Derivation",
            estimatedTime: "25 minutes", 
            type: "theory",
            description: "Master the mathematics behind backpropagation - the algorithm that makes deep learning possible.",
            content: {
                overview: "Backpropagation is the cornerstone of neural network training. It efficiently computes gradients by applying the chain rule backward through the network, enabling gradient descent optimization.",
                concepts: [
                    {
                        name: "Chain Rule Foundation",
                        formula: "∂L/∂w = (∂L/∂y)(∂y/∂z)(∂z/∂w)",
                        explanation: "The chain rule allows us to decompose complex derivatives into manageable parts."
                    },
                    {
                        name: "Output Layer Gradients",
                        formula: "∂L/∂w₂ = δ₂h₁ᵀ, where δ₂ = ∂L/∂y₂ ⊙ f'₂(z₂)",
                        explanation: "Output layer gradients combine loss derivative with activation derivative."
                    },
                    {
                        name: "Hidden Layer Gradients",
                        formula: "∂L/∂w₁ = δ₁x₁ᵀ, where δ₁ = (W₂ᵀδ₂) ⊙ f'₁(z₁)",
                        explanation: "Hidden layer gradients propagate error backwards through weighted connections."
                    },
                    {
                        name: "Bias Gradients",
                        formula: "∂L/∂b = δ (sum over batch dimension)",
                        explanation: "Bias gradients are simply the error signals averaged over the batch."
                    }
                ],
                requirements: [
                    "Derive backpropagation equations for a 2-layer network step by step",
                    "Show how gradients flow backwards through each layer",
                    "Understand the role of the Jacobian matrix in gradient computation",
                    "Explain why we need the chain rule for deep networks"
                ]
            }
        },
        {
            id: 4,
            title: "Implementing MLP Forward Pass",
            estimatedTime: "20 minutes",
            type: "coding",
            description: "Implement the forward propagation algorithm for a multi-layer perceptron using NumPy.",
            content: {
                overview: "Build a complete MLP class with forward propagation. This implementation will serve as the foundation for our backpropagation algorithm.",
                code: `import numpy as np

class MultiLayerPerceptron:
    def __init__(self, input_size, hidden_size, output_size, learning_rate=0.01):
        \"\"\"
        Initialize MLP with random weights and zero biases
        Args:
            input_size: Number of input features
            hidden_size: Number of neurons in hidden layer
            output_size: Number of output neurons
            learning_rate: Step size for gradient descent
        \"\"\"
        # Initialize weights using Xavier/Glorot initialization
        self.W1 = np.random.randn(input_size, hidden_size) * np.sqrt(2.0 / input_size)
        self.b1 = np.zeros((1, hidden_size))
        
        self.W2 = np.random.randn(hidden_size, output_size) * np.sqrt(2.0 / hidden_size)
        self.b2 = np.zeros((1, output_size))
        
        self.learning_rate = learning_rate
        
        # Store intermediate values for backpropagation
        self.z1 = None  # Hidden layer pre-activation
        self.a1 = None  # Hidden layer activation
        self.z2 = None  # Output layer pre-activation
        self.a2 = None  # Output layer activation (final prediction)
    
    def sigmoid(self, x):
        \"\"\"Sigmoid activation function with numerical stability\"\"\"
        return np.where(x >= 0, 
                       1 / (1 + np.exp(-x)), 
                       np.exp(x) / (1 + np.exp(x)))
    
    def sigmoid_derivative(self, x):
        \"\"\"Derivative of sigmoid function\"\"\"
        s = self.sigmoid(x)
        return s * (1 - s)
    
    def relu(self, x):
        \"\"\"ReLU activation function\"\"\"
        return np.maximum(0, x)
    
    def relu_derivative(self, x):
        \"\"\"Derivative of ReLU function\"\"\"
        return (x > 0).astype(float)
    
    def forward(self, X):
        \"\"\"
        Forward propagation through the network
        Args:
            X: Input data of shape (batch_size, input_size)
        Returns:
            Output predictions of shape (batch_size, output_size)
        \"\"\"
        # Hidden layer computation
        self.z1 = np.dot(X, self.W1) + self.b1  # Linear transformation
        self.a1 = self.relu(self.z1)            # ReLU activation
        
        # Output layer computation  
        self.z2 = np.dot(self.a1, self.W2) + self.b2  # Linear transformation
        self.a2 = self.sigmoid(self.z2)               # Sigmoid activation
        
        return self.a2
    
    def predict(self, X):
        \"\"\"Make predictions on new data\"\"\"
        output = self.forward(X)
        return (output > 0.5).astype(int)  # Binary classification threshold

# Test the forward pass implementation
if __name__ == \"__main__\":
    # Create sample data
    X = np.array([[0, 0], [0, 1], [1, 0], [1, 1]])  # XOR inputs
    y = np.array([[0], [1], [1], [0]])               # XOR outputs
    
    # Create MLP
    mlp = MultiLayerPerceptron(input_size=2, hidden_size=4, output_size=1)
    
    # Test forward pass
    predictions = mlp.forward(X)
    print(\"Forward pass successful!\")
    print(f\"Input shape: {X.shape}\")
    print(f\"Output shape: {predictions.shape}\")
    print(f\"Sample predictions: {predictions.flatten()}\")`,
                requirements: [
                    "Implement proper weight initialization using Xavier/Glorot method",
                    "Include both ReLU and Sigmoid activation functions", 
                    "Store intermediate values needed for backpropagation",
                    "Add numerical stability to prevent overflow/underflow",
                    "Test the forward pass with XOR dataset"
                ],
                expectedOutput: "Forward pass successful! The network should output 4 predictions for the XOR inputs, though they'll be random initially since the network isn't trained yet."
            }
        },
        {
            id: 5,
            title: "Implementing Backpropagation",
            estimatedTime: "25 minutes",
            type: "coding", 
            description: "Implement the backpropagation algorithm to compute gradients and update network weights.",
            content: {
                overview: "Complete the MLP implementation by adding backpropagation. This is where the magic happens - the network learns by computing gradients and adjusting weights to minimize the loss.",
                code: `def mean_squared_error(self, y_true, y_pred):
    \"\"\"Compute MSE loss and its derivative\"\"\"
    loss = np.mean((y_true - y_pred) ** 2)
    loss_derivative = -2 * (y_true - y_pred) / y_true.shape[0]
    return loss, loss_derivative

def backward(self, X, y):
    \"\"\"
    Backpropagation algorithm to compute gradients
    Args:
        X: Input data of shape (batch_size, input_size)
        y: True labels of shape (batch_size, output_size)
    \"\"\"
    m = X.shape[0]  # Batch size
    
    # Compute loss and its derivative
    loss, dL_dy = self.mean_squared_error(y, self.a2)
    
    # Output layer gradients (Layer 2)
    # δ₂ = ∂L/∂z₂ = (∂L/∂a₂) ⊙ (∂a₂/∂z₂)
    delta2 = dL_dy * self.sigmoid_derivative(self.z2)
    
    # Weight gradients: ∂L/∂W₂ = a₁ᵀ · δ₂
    dW2 = np.dot(self.a1.T, delta2)
    
    # Bias gradients: ∂L/∂b₂ = sum(δ₂)
    db2 = np.sum(delta2, axis=0, keepdims=True)
    
    # Hidden layer gradients (Layer 1)  
    # δ₁ = ∂L/∂z₁ = (W₂ · δ₂) ⊙ (∂a₁/∂z₁)
    delta1 = np.dot(delta2, self.W2.T) * self.relu_derivative(self.z1)
    
    # Weight gradients: ∂L/∂W₁ = Xᵀ · δ₁
    dW1 = np.dot(X.T, delta1)
    
    # Bias gradients: ∂L/∂b₁ = sum(δ₁)
    db1 = np.sum(delta1, axis=0, keepdims=True)
    
    # Store gradients for inspection
    self.gradients = {
        'dW2': dW2, 'db2': db2,
        'dW1': dW1, 'db1': db1,
        'delta2': delta2, 'delta1': delta1
    }
    
    return loss

def update_weights(self):
    \"\"\"Update weights using computed gradients\"\"\"
    self.W2 -= self.learning_rate * self.gradients['dW2']
    self.b2 -= self.learning_rate * self.gradients['db2']
    self.W1 -= self.learning_rate * self.gradients['dW1'] 
    self.b1 -= self.learning_rate * self.gradients['db1']

def train_step(self, X, y):
    \"\"\"Single training step: forward pass + backprop + weight update\"\"\"
    # Forward pass
    predictions = self.forward(X)
    
    # Backward pass
    loss = self.backward(X, y)
    
    # Update weights
    self.update_weights()
    
    return loss, predictions

# Training loop implementation
def train(self, X, y, epochs=1000, verbose=True):
    \"\"\"
    Train the MLP using gradient descent
    Args:
        X: Training inputs
        y: Training targets
        epochs: Number of training iterations
        verbose: Whether to print training progress
    \"\"\"
    losses = []
    
    for epoch in range(epochs):
        loss, predictions = self.train_step(X, y)
        losses.append(loss)
        
        if verbose and (epoch + 1) % 100 == 0:
            accuracy = np.mean((predictions > 0.5) == y) * 100
            print(f\"Epoch {epoch + 1:4d}: Loss = {loss:.6f}, Accuracy = {accuracy:.1f}%\")
    
    return losses

# Complete training example
if __name__ == \"__main__\":
    # XOR problem - the classic test for MLPs
    X = np.array([[0, 0], [0, 1], [1, 0], [1, 1]], dtype=np.float32)
    y = np.array([[0], [1], [1], [0]], dtype=np.float32)
    
    # Create and train MLP
    mlp = MultiLayerPerceptron(input_size=2, hidden_size=4, output_size=1, learning_rate=0.1)
    
    print(\"Training MLP on XOR problem...\")
    losses = mlp.train(X, y, epochs=1000)
    
    # Test final predictions
    final_predictions = mlp.forward(X)
    print(\"\\nFinal Results:\")
    print(\"Input | Target | Prediction | Binary\")
    print(\"-\" * 40)
    for i in range(len(X)):
        pred_val = final_predictions[i, 0]
        pred_bin = int(pred_val > 0.5)
        print(f\"{X[i]} |   {int(y[i, 0])}    |   {pred_val:.4f}   |   {pred_bin}\")`,
                requirements: [
                    "Implement mean squared error loss function and its derivative",
                    "Correctly compute gradients using the chain rule for both layers",
                    "Update weights using gradient descent with proper learning rate",
                    "Include a complete training loop with progress monitoring",
                    "Test on the XOR problem to verify non-linear learning capability"
                ],
                expectedOutput: "The network should learn to solve XOR after ~500-1000 epochs, with final accuracy approaching 100% and loss dropping below 0.01.",
                tips: [
                    "Watch for exploding/vanishing gradients - adjust learning rate if needed",
                    "The ReLU activation in hidden layer is crucial for learning XOR",
                    "Monitor both loss and accuracy during training",
                    "If convergence is slow, try different weight initialization or learning rates"
                ]
            }
        }
    ],
    
    // Resources
    resources: [
        {
            title: "Deep Learning Book - Chapter 6",
            author: "Ian Goodfellow",
            url: "https://www.deeplearningbook.org/contents/mlp.html",
            type: "Book Chapter"
        },
        {
            title: "Backpropagation Calculus", 
            author: "3Blue1Brown",
            url: "https://www.youtube.com/watch?v=tIeHLnjs5U8",
            type: "Video"
        },
        {
            title: "CS231n: Backpropagation Notes",
            author: "Stanford University",
            url: "https://cs231n.github.io/optimization-2/", 
            type: "Lecture Notes"
        },
        {
            title: "Neural Networks from Scratch",
            author: "Harrison Kinsley",
            url: "https://nnfs.io/",
            type: "Book"
        }
    ],
    
    // Navigation
    navigation: {
        previous: {
            id: "T1",
            title: "Perceptron Implementation",
            path: "../tutorial-T01/index.html"
        },
        next: {
            id: "T3", 
            title: "TensorFlow Neural Network",
            path: "../tutorial-T03/index.html"
        },
        module: {
            id: 1,
            title: "Introduction to Deep Learning", 
            path: "../../modules/module-01-intro-deep-learning/index.html"
        },
        dashboard: "../../index.html"
    },
    
    // Assessment Integration
    assessment: {
        relatedQuestions: [
            "Derive the backpropagation update rule for a 2-layer MLP",
            "Explain why MLPs can solve XOR but single perceptrons cannot",
            "Compare different activation functions and their gradients",
            "Implement forward and backward passes for a simple MLP"
        ],
        keyFormulas: [
            "Forward: a₂ = σ(W₂ · ReLU(W₁x + b₁) + b₂)",
            "Backprop: δₗ = (Wₗ₊₁ᵀδₗ₊₁) ⊙ f'(zₗ)",
            "Weight update: W := W - η∇W",
            "Chain rule: ∂L/∂W = (∂L/∂y)(∂y/∂z)(∂z/∂W)"
        ]
    },
    
    // Advanced Extensions
    extensions: [
        {
            title: "Multi-class Classification",
            description: "Extend the MLP to handle multiple output classes using softmax activation and cross-entropy loss",
            difficulty: "Intermediate",
            estimatedTime: "30 minutes"
        },
        {
            title: "Momentum Optimization",
            description: "Implement SGD with momentum to improve convergence speed and stability",
            difficulty: "Advanced",
            estimatedTime: "45 minutes"
        },
        {
            title: "Regularization Techniques",
            description: "Add L1/L2 regularization and dropout to prevent overfitting",
            difficulty: "Advanced", 
            estimatedTime: "60 minutes"
        },
        {
            title: "Deep MLP Architecture",
            description: "Extend to support arbitrary number of hidden layers with configurable sizes",
            difficulty: "Expert",
            estimatedTime: "90 minutes"
        }
    ],
    
    // Common Pitfalls and Solutions
    troubleshooting: [
        {
            problem: "Vanishing Gradients",
            symptoms: "Loss stops decreasing, gradients become very small",
            solutions: [
                "Use ReLU instead of sigmoid/tanh in hidden layers",
                "Implement proper weight initialization (Xavier/He)",
                "Consider gradient clipping for very deep networks",
                "Monitor gradient magnitudes during training"
            ]
        },
        {
            problem: "Exploding Gradients",
            symptoms: "Loss increases rapidly, NaN values appear",
            solutions: [
                "Reduce learning rate significantly",
                "Implement gradient clipping",
                "Check weight initialization - avoid large initial weights",
                "Use batch normalization in deeper networks"
            ]
        },
        {
            problem: "Poor Convergence on XOR",
            symptoms: "Network fails to learn XOR pattern, stuck at 50% accuracy",
            solutions: [
                "Ensure hidden layer has at least 2 neurons",
                "Use non-linear activation in hidden layer (ReLU/tanh)",
                "Try different learning rates (0.01 to 1.0)",
                "Increase training epochs or check weight initialization"
            ]
        }
    ]
};

// Export for use in component  
if (typeof window !== 'undefined') {
    window.tutorialData = tutorialData;
}