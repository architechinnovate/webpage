import { Card } from "@/components/ui/card";

const techCategories = [
  {
    category: "Backend & Core",
    technologies: ["GoLang", "Java", ".NET (C#)", "Python", "Django", "Flask", "Node.js"],
    highlights: ["Microservices & event-driven architecture", "RESTful & gRPC-based APIs", "Asynchronous processing"]
  },
  {
    category: "Web Development",
    technologies: ["MERN Stack", "NestJS", "GraphQL", "HTML5", "CSS3", "JavaScript", "React"],
    highlights: ["Modular front-end architecture", "API-first development", "Server-side rendering"]
  },
  {
    category: "Mobile Development",
    technologies: ["React Native", "iOS", "Android"],
    highlights: ["Native-level performance", "Unified UI/UX", "Faster deployment cycles"]
  },
  {
    category: "Architecture & Performance",
    technologies: ["gRPC", "Kafka", "Redis", "Memcached"],
    highlights: ["Event streaming", "Advanced caching", "Fault-tolerant design"]
  },
  {
    category: "Database & Storage",
    technologies: ["PostgreSQL", "MySQL", "SQL Server", "Oracle", "MongoDB", "Redis"],
    highlights: ["Data consistency", "High availability", "Optimized performance"]
  },
  {
    category: "Business & Enterprise",
    technologies: ["Power BI", "SharePoint", "K2 Blackpearl"],
    highlights: ["Real-time analytics", "Process automation", "Workflow management"]
  },
  {
    category: "Emerging Technologies",
    technologies: ["Blockchain", "Smart Contracts", "dApps", "DLTs"],
    highlights: ["Decentralized applications", "Distributed ledger", "Secure ecosystems"]
  },
];

const TechStack = () => {
  return (
    <section id="tech-stack" className="py-24 bg-section-bg">
      <div className="section-container">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Leveraging cutting-edge technologies to build robust solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50"
            >
              <h3 className="text-xl font-bold mb-4 text-primary">{category.category}</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {category.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {category.highlights && (
                <ul className="text-sm text-muted-foreground space-y-1 mt-4 border-t border-border pt-4">
                  {category.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
