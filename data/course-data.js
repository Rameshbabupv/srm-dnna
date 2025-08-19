// Course Data Configuration
const courseData = {
    course: {
        code: "21CSE558T",
        title: "Deep Neural Network Architectures",
        credits: "3 (2L + 1T + 0P)",
        duration: "15 weeks",
        startDate: "August 11, 2025",
        endDate: "November 21, 2025",
        totalHours: 45
    },
    
    months: [
        {
            id: 1,
            title: "Foundations of Deep Learning",
            period: "August 11 - September 12, 2025",
            weeks: [1, 2, 3, 4, 5],
            modules: [1, 2],
            keyMilestones: ["Environment Setup", "XOR Problem Solution", "Unit Test 1 Prep"],
            color: "#667eea"
        },
        {
            id: 2,
            title: "Advanced Techniques & Applications",
            period: "September 15 - October 17, 2025",
            weeks: [6, 7, 8, 9, 10],
            modules: [2, 3, 4],
            keyMilestones: ["Unit Test 1", "Image Processing Mastery", "CNN Foundations"],
            color: "#764ba2"
        },
        {
            id: 3,
            title: "Modern Architectures & Detection",
            period: "October 20 - November 21, 2025",
            weeks: [11, 12, 13, 14, 15],
            modules: [4, 5],
            keyMilestones: ["Unit Test 2", "Transfer Learning", "Final Project"],
            color: "#f093fb"
        }
    ],
    
    modules: [
        {
            id: 1,
            title: "Introduction to Deep Learning",
            weeks: "1-3",
            duration: "9 hours",
            topics: ["Biological Neurons", "Perceptron", "MLP", "TensorFlow Basics", "Activation Functions"],
            tutorials: ["T1: TensorFlow Environment", "T2: Working With Tensors", "T3: Basic Operations"],
            color: "#4facfe"
        },
        {
            id: 2,
            title: "Optimization and Regularization",
            weeks: "4-6",
            duration: "9 hours",
            topics: ["Gradient Descent", "Vanishing Gradients", "Regularization", "Normalization"],
            tutorials: ["T4: Neural Network in Python", "T5: Keras Implementation", "T6: Optimization"],
            color: "#00f2fe"
        },
        {
            id: 3,
            title: "Image Processing & Deep Neural Networks",
            weeks: "7-9",
            duration: "9 hours",
            topics: ["Image Enhancement", "Segmentation", "Feature Extraction", "Classification"],
            tutorials: ["T7: OpenCV Basics", "T8: Image Segmentation", "T9: Feature Extraction"],
            color: "#43e97b"
        },
        {
            id: 4,
            title: "CNNs and Transfer Learning",
            weeks: "10-12",
            duration: "9 hours",
            topics: ["CNN Architecture", "Convolution Operations", "Transfer Learning", "Pre-trained Models"],
            tutorials: ["T10: CNN Classification", "T11: Data Augmentation", "T12: LSTM Model"],
            color: "#38f9d7"
        },
        {
            id: 5,
            title: "Object Localization and Detection",
            weeks: "13-15",
            duration: "9 hours",
            topics: ["Object Detection", "YOLO/SSD", "R-CNN Family", "Evaluation Metrics"],
            tutorials: ["T13: Pre-trained Models", "T14: Transfer Learning", "T15: Object Detection"],
            color: "#5ee7df"
        }
    ],
    
    assessments: [
        {
            type: "Unit Test 1",
            date: "September 19, 2025",
            coverage: "Modules 1 & 2",
            weight: "22.5%",
            status: "upcoming"
        },
        {
            type: "Mid-term Practical",
            date: "October 10, 2025",
            coverage: "Image Processing Pipeline",
            weight: "25% of CLA-2",
            status: "upcoming"
        },
        {
            type: "Unit Test 2",
            date: "October 31, 2025",
            coverage: "Modules 3 & 4",
            weight: "22.5%",
            status: "upcoming"
        },
        {
            type: "Final Examination",
            date: "November 24-28, 2025",
            coverage: "All Modules",
            weight: "40%",
            status: "upcoming"
        }
    ],
    
    learningOutcomes: [
        {
            id: "CO-1",
            text: "Create simple deep neural networks and explain their functions",
            targetWeek: 6
        },
        {
            id: "CO-2", 
            text: "Build multi-layer neural networks with appropriate activation functions",
            targetWeek: 9
        },
        {
            id: "CO-3",
            text: "Apply deep neural networks to image processing problems",
            targetWeek: 12
        },
        {
            id: "CO-4",
            text: "Implement convolutional neural networks for computer vision",
            targetWeek: 15
        },
        {
            id: "CO-5",
            text: "Determine and apply appropriate transfer learning techniques",
            targetWeek: 15
        }
    ],
    
    weekly: {
        1: {
            module: 1,
            title: "Course Launch & Biological Neurons",
            objectives: ["Understand biological motivation", "Master perceptron model", "Implement AND-OR logic"],
            deliverables: ["Environment setup", "Perceptron implementation"],
            tutorial: "T1: TensorFlow Environment",
            schedule: {
                day3: { day: "Wednesday", time: "8:00am - 9:40am IST", duration: "1h 40m", content: "Course intro, biological neurons, perceptron model" },
                day4: { day: "Thursday", time: "4:00pm - 4:50pm IST", duration: "50m", content: "T1: TensorFlow Environment Setup" }
            }
        },
        2: {
            module: 1,
            title: "Multilayer Perceptrons & TensorFlow",
            objectives: ["Solve XOR problem", "Master TensorFlow basics", "Understand MLP limitations"],
            deliverables: ["XOR solution", "TensorFlow operations"],
            tutorial: "T2 & T3: Tensors and Operations",
            schedule: {
                day3: { day: "Wednesday", time: "8:00am - 9:40am IST", duration: "1h 40m", content: "XOR problem, multilayer perceptron architecture, TensorFlow fundamentals" },
                day4: { day: "Thursday", time: "4:00pm - 4:50pm IST", duration: "50m", content: "T2: Working With Tensors, T3: Basic Operations" }
            }
        },
        3: {
            module: 1,
            title: "Activation Functions & Backpropagation",
            objectives: ["Master activation functions", "Understand network architecture", "Implement backpropagation"],
            deliverables: ["Activation comparison", "Complete feedforward network"],
            tutorial: "Loss Functions & Integration",
            schedule: {
                day3: { day: "Wednesday", time: "8:00am - 9:40am IST", duration: "1h 40m", content: "Activation functions, network architecture, backpropagation algorithm" },
                day4: { day: "Thursday", time: "4:00pm - 4:50pm IST", duration: "50m", content: "Loss functions implementation, complete network integration" }
            }
        },
        4: {
            module: 2,
            title: "Gradient Descent Algorithms",
            objectives: ["Master gradient descent variants", "Understand batch vs mini-batch", "Compare convergence"],
            deliverables: ["GD variants implementation", "Comparative analysis"],
            tutorial: "T4: Neural Network in Python",
            schedule: {
                day3: { day: "Wednesday", time: "8:00am - 9:40am IST", duration: "1h 40m", content: "Gradient descent fundamentals, SGD, mini-batch and batch variants" },
                day4: { day: "Thursday", time: "4:00pm - 4:50pm IST", duration: "50m", content: "T4: Building Neural Network in Python from scratch" }
            }
        },
        5: {
            module: 2,
            title: "Regularization Techniques",
            objectives: ["Understand vanishing gradients", "Master regularization", "Learn dropout"],
            deliverables: ["Regularization comparison", "Keras implementation"],
            tutorial: "T5: Keras Neural Networks"
        },
        6: {
            module: 2,
            title: "Normalization & Unit Test 1",
            objectives: ["Master normalization techniques", "Complete optimization concepts"],
            deliverables: ["Normalization implementation", "Unit Test 1"],
            tutorial: "T6: Optimization + Unit Test"
        },
        7: {
            module: 3,
            title: "Digital Image Processing",
            objectives: ["Understand image representation", "Master enhancement techniques", "Learn edge detection"],
            deliverables: ["Image enhancement portfolio", "OpenCV assignment"],
            tutorial: "T7: OpenCV Image Processing"
        },
        8: {
            module: 3,
            title: "Image Segmentation",
            objectives: ["Master segmentation techniques", "Understand ROI processing", "Learn morphological operations"],
            deliverables: ["Segmentation project", "ROI analysis"],
            tutorial: "T8: Image Segmentation"
        },
        9: {
            module: 3,
            title: "Feature Extraction & Mid-term",
            objectives: ["Master feature extraction", "Learn image classification", "Apply computer vision"],
            deliverables: ["Feature extraction system", "Mid-term practical"],
            tutorial: "T9: Feature Extraction + Mid-term"
        },
        10: {
            module: 4,
            title: "CNN Fundamentals",
            objectives: ["Understand CNN motivation", "Master convolution operations", "Learn CNN architecture"],
            deliverables: ["Convolution implementations", "CNN concept mapping"],
            tutorial: "CNN Architecture Overview"
        },
        11: {
            module: 4,
            title: "CNN Architecture & Regularization",
            objectives: ["Master pooling layers", "Understand FC layers", "Learn CNN regularization"],
            deliverables: ["CNN architecture design", "Classification project"],
            tutorial: "T10: CNN Classification"
        },
        12: {
            module: 4,
            title: "Transfer Learning & Unit Test 2",
            objectives: ["Understand transfer learning", "Master pre-trained networks", "Learn fine-tuning"],
            deliverables: ["Transfer learning implementation", "Unit Test 2"],
            tutorial: "T11 & T12 + Unit Test"
        },
        13: {
            module: 5,
            title: "Object Detection Fundamentals",
            objectives: ["Understand detection vs classification", "Learn evaluation metrics", "Explore detection formulation"],
            deliverables: ["Detection analysis", "Metrics implementation"],
            tutorial: "Detection Pipeline Overview"
        },
        14: {
            module: 5,
            title: "Detection Architectures",
            objectives: ["Master YOLO and SSD", "Understand R-CNN family", "Compare architectures"],
            deliverables: ["YOLO implementation", "Architecture comparison"],
            tutorial: "T13: Pre-trained Detection"
        },
        15: {
            module: 5,
            title: "Advanced Detection & Course Integration",
            objectives: ["Master Faster R-CNN", "Understand NMS", "Integrate all concepts"],
            deliverables: ["Complete detection system", "Final project"],
            tutorial: "T14 & T15: Final Implementation"
        }
    }
};