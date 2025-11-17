interface CaseStudy {
    id: number;
    title: string;
    client: string;
    shortDescription?: string;
    description: string;
    technologies: string[];
    results: string[];
    category: string;
    image?: string;
  }
  
const caseStudies: CaseStudy[] = [
    {
      id: 1,
      title: "Enterprise Resource Planning System",
      client: "Global Manufacturing Corp",
      description: "Developed a comprehensive ERP solution to streamline operations across 15 international facilities, integrating inventory management, procurement, and financial reporting.",
      shortDescription: "Developed a comprehensive ERP solution to streamline operations across 15 international facilities, integrating inventory management, procurement, and financial reporting.",
      technologies: [".NET Core", "React", "SQL Server", "Azure"],
      results: [
        "40% reduction in operational costs",
        "Real-time data synchronization",
        "Improved decision-making capabilities"
      ],
      category: "Enterprise Web Application",
    },
    {
      id: 2,
      title: "Healthcare Management Platform",
      client: "Regional Healthcare Network",
      description: "Built a HIPAA-compliant patient management system with appointment scheduling, electronic health records, and billing integration for a network of 20+ clinics.",
      shortDescription: "Built a HIPAA-compliant patient management system with appointment scheduling, electronic health records, and billing integration for a network of 20+ clinics.",
      technologies: ["Java", "Angular", "PostgreSQL", "AWS"],
      results: [
        "99.9% system uptime",
        "30% increase in patient satisfaction",
        "Seamless integration with existing systems"
      ],
      category: "Web Development",
    },
    {
      id: 3,
      title: "Financial Trading Desktop Application",
      client: "Investment Banking Firm",
      description: "Created a high-performance Windows desktop application for real-time stock trading with advanced analytics, risk assessment, and portfolio management capabilities.",
      shortDescription: "Created a high-performance Windows desktop application for real-time stock trading with advanced analytics, risk assessment, and portfolio management capabilities.",
      technologies: ["C#", "WPF", ".NET", "Redis"],
      results: [
        "Sub-millisecond trade execution",
        "Advanced risk analytics",
        "Secure multi-factor authentication"
      ],
      category: "Desktop Application",
    },
    {
      id: 4,
      title: "Mobile Field Service Application",
      client: "Utilities Company",
      description: "Designed and deployed a cross-platform mobile app for field technicians to manage work orders, capture site data, and sync offline operations seamlessly.",
      shortDescription: "Designed and deployed a cross-platform mobile app for field technicians to manage work orders, capture site data, and sync offline operations seamlessly.",
      technologies: ["React Native", "Node.js", "MongoDB", "AWS"],
      results: [
        "50% faster task completion",
        "Offline-first architecture",
        "Enhanced customer communication"
      ],
      category: "Mobile Development",
    },
  ];

  export default caseStudies;