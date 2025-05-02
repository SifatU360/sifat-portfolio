import { Project } from "@/types/project";



export const projects: Project[] = [
  {
    id: "swapnest",
    title: "SwapNest",
    description: "SwapNest is a modern web platform designed to simplify the exchange of second-hand goods. It connects users in a secure and user-friendly environment, making it easy to buy and sell.",
    longDescription: `SwapNest is a comprehensive platform that revolutionizes second-hand goods exchange. 
    Users can easily list items, negotiate prices, and complete transactions in a secure environment. 
    The platform features real-time chat, user ratings, and advanced search capabilities.
    
    Built with modern technologies, SwapNest provides a seamless experience for both buyers and sellers,
    making it easier than ever to give pre-loved items a new home.`,
    technologies: ["Next.js", "TypeScript", "Express.js", "MongoDB", "Tailwind CSS", "Shadcn UI"],
    category: "fullstack",
    demoUrl: " https://swap-nest-client.vercel.app/",
    githubUrl: "https://github.com/username/repo",
    imageUrl: "/projects/swapnest.png",
    features: [
      "User authentication and profiles",
      "Real-time chat system",
      "Advanced search and filtering",
      "Secure payment integration",
      "Item listing and management",
      "User ratings and reviews"
    ],
    challenges: [
      "Implementing real-time communication",
      "Ensuring secure transactions",
      "Optimizing image uploads",
      "Managing user interactions"
    ],
    solutions: [
      "Used WebSocket for real-time features",
      "Implemented JWT authentication",
      "Integrated cloud storage for images",
      "Developed robust user management system"
    ]
  },
  {
    id: "papyrus",
    title: "Papyrus",
    description: "Papyrus is an e-commerce platform for stationery products. It allows users to browse a wide range of stationery items, add them to cart, and make secure payments.",
    longDescription: `Papyrus is a full-featured e-commerce platform specifically designed for stationery enthusiasts.
    The platform offers a comprehensive shopping experience with user profile management, order tracking,
    and an advanced admin panel for inventory and user management.
    
    The system includes secure payment processing, real-time inventory updates, and a responsive design
    that works seamlessly across all devices.`,
    technologies: ["React", "Redux", "TypeScript", "Express.js", "MongoDB", "Tailwind CSS", "Shadcn UI"],
    category: "fullstack",
    demoUrl: "https://papyrus-client.vercel.app/",
    githubUrl: "https://github.com/username/repo",
    imageUrl: "/projects/papyrus.png",
    features: [
      "User authentication and profiles",
      "Shopping cart functionality",
      "Secure payment processing",
      "Order management system",
      "Admin dashboard",
      "Product catalog with categories"
    ],
    challenges: [
      "Managing complex state with multiple users",
      "Implementing secure payment gateway",
      "Handling concurrent inventory updates",
      "Building responsive admin interface"
    ],
    solutions: [
      "Utilized Redux for state management",
      "Integrated Stripe payment system",
      "Implemented real-time inventory tracking",
      "Created modular admin dashboard"
    ]
  },
  {
    id: "infinia",
    title: "Infinia",
    description: "Infinia is an AI-powered assistant that helps users with various tasks through natural language interactions.",
    longDescription: `Infinia represents the next generation of AI assistants, offering intuitive natural
    language processing capabilities for various tasks. Built with modern web technologies, it provides
    real-time responses and learns from user interactions to improve its assistance over time.
    
    The platform features a modern, responsive interface and supports multiple types of queries,
    from simple questions to complex task automation.`,
    technologies: ["React", "Redux", "TypeScript", "Express.js", "MongoDB", "Tailwind CSS", "Shadcn UI"],
    category: "fullstack",
    demoUrl: "https://infinia-phi.vercel.app/",
    githubUrl: "https://github.com/SifatU360/infinia.git",
    imageUrl: "/projects/infinia.png",
    features: [
      "Natural language processing",
      "Real-time AI responses",
      "Task automation",
      "User interaction history",
      "Customizable AI preferences",
      "Multi-platform support"
    ],
    challenges: [
      "Implementing efficient AI processing",
      "Managing response latency",
      "Handling complex user queries",
      "Ensuring data privacy"
    ],
    solutions: [
      "Optimized AI model integration",
      "Implemented response caching",
      "Developed query preprocessing",
      "Enhanced data security measures"
    ]
  },
  {
    id: "blog-server",
    title: "Blog Server",
    description: "A comprehensive backend system for a blogging platform with role-based access control and CRUD operations.",
    longDescription: `This blog server provides a robust backend infrastructure for a modern blogging platform.
    It implements role-based access control with admin and user roles, secure authentication, and
    comprehensive CRUD operations for blog management.
    
    The system includes advanced features like search functionality, content filtering, and
    user management capabilities.`,
    technologies: ["TypeScript", "Express.js", "MongoDB", "Mongoose"],
    category: "backend",
    demoUrl: "https://blogproject-bice.vercel.app/",
    githubUrl: "https://github.com/SifatU360/Blog-Project",
    imageUrl: "/projects/blog.png",
    features: [
      "Role-based access control",
      "CRUD operations for blogs",
      "User authentication",
      "Search and filter functionality",
      "Admin dashboard",
      "API documentation"
    ],
    challenges: [
      "Implementing secure role-based access",
      "Managing complex database queries",
      "Ensuring API security",
      "Handling file uploads"
    ],
    solutions: [
      "Developed middleware for role verification",
      "Optimized database indexing",
      "Implemented JWT authentication",
      "Created efficient file handling system"
    ]
  },
  {
    id: "book-store",
    title: "Book Store Server",
    description: "A Book Shop Management application built with TypeScript, Express, and MongoDB, offering efficient management of books and orders.",
    longDescription: `The Book Store Server provides a comprehensive backend solution for managing a digital
    bookstore. It handles inventory management, order processing, and sales tracking with robust
    TypeScript implementation and MongoDB integration.
    
    The system includes features for inventory tracking, revenue calculations, and detailed
    reporting capabilities.`,
    technologies: ["TypeScript", "Express.js", "MongoDB", "Mongoose"],
    category: "backend",
    demoUrl: "https://book-shop-pi-nine.vercel.app/",
    githubUrl: " https://github.com/SifatU360/Book-Shop",
    imageUrl: "/projects/book.png",
    features: [
      "Inventory management",
      "Order processing",
      "Revenue tracking",
      "User authentication",
      "Admin controls",
      "Report generation"
    ],
    challenges: [
      "Managing inventory accuracy",
      "Handling concurrent orders",
      "Implementing reporting system",
      "Ensuring data consistency"
    ],
    solutions: [
      "Implemented transaction management",
      "Developed queue system for orders",
      "Created automated reporting",
      "Used MongoDB aggregation"
    ]
  }
];