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
    githubUrl: "https://github.com/hossain-ahamed-khan/SwapNest-Client.git",
    serverUrl: "https://github.com/Humayun1318/SwapNest-server.git",
    imageUrl: "/projects/swapnest.png",
    features: [
      "User-friendly interface for buyers and sellers",
      "Product listing, browsing, and purchasing functionality",
      "Category-based product navigation",
      "Secure login and registration with custom authentication",
      "Advanced real-time search and filtering system",
      "Mobile responsiveness across all devices",
      "Responsive dashboard for managing user activities"
    ],
    challenges: [
      "Implementing real-time search and filtering efficiently",
      "Designing a secure and scalable authentication system",
      "Ensuring consistent user experience across devices",
      "Managing large numbers of product listings with performance"
    ],
    solutions: [
      "Implemented JWT-based custom authentication system",
      "Developed a responsive and user-centric UI with modern frameworks",
      "Optimized search and filtering using debounced queries",
      "Structured scalable components for maintainability"
    ],
    contributions: {
      role: "Frontend & Backend Developer",
      responsibilities: [
        "Developed and implemented the complete checkout system with transaction functionality",
        "Designed and built responsive UI components for enhanced user experience",
        "Integrated payment processing system in both frontend and backend",
        "Implemented secure transaction handling and payment verification",
        "Contributed to codebase refactoring and optimization",
        "Collaborated with team members to ensure seamless integration"
      ]
    }
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
    githubUrl: "https://github.com/rafiferdos/papyrus.git",
    serverUrl: "https://github.com/rafiferdos/papyrus-server.git",
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
      "Integrated Shurjopay payment system",
      "Implemented real-time inventory tracking",
      "Created modular admin dashboard"
    ],
    contributions: {
      role: "Full Stack Developer",
      responsibilities: [
        "Integrated Shurjopay payment gateway in both frontend and backend",
        "Developed complete product listing and single product view functionality",
        "Implemented user authentication and account creation system",
        "Created responsive UI components and enhanced visual design",
        "Built RESTful APIs for product management and user operations",
        "Optimized database queries and API endpoints for better performance",
        "Participated in code reviews and architecture discussions"
      ]
    }
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
    category: "frontend",
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
      "User authentication and role-based access control",
      "CRUD operations for blogs by authenticated users",
      "Admin capabilities to manage users and delete any blog",
      "Search, sort, and filter functionality for public blog viewing",
      "Robust error handling and secure JWT authentication"
    ],
    challenges: [
      "Implementing secure and differentiated role-based permissions",
      "Allowing only blog owners to update or delete their content",
      "Handling public API queries efficiently with filters and pagination",
      "Managing blocked users and restricting access appropriately"
    ],
    solutions: [
      "Implemented JWT-based authentication and middleware for authorization",
      "Used Mongoose population and query filters for secure and efficient data access",
      "Manually seeded the admin with secure credentials for exclusive permissions",
      "Created structured error handlers to manage validation and runtime errors"
    ]
    
  }
];