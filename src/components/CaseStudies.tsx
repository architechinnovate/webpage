import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ArrowRight, ExternalLink } from "lucide-react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

interface CaseStudy {
  id: number;
  title: string;
  client: string;
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
    technologies: ["React Native", "Node.js", "MongoDB", "AWS"],
    results: [
      "50% faster task completion",
      "Offline-first architecture",
      "Enhanced customer communication"
    ],
    category: "Mobile Development",
  },
];

const CaseStudies = () => {
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);

  return (
    <section id="case-studies" className="py-20 bg-section-bg">

      {/* tags and keywords for seo */}

      <Helmet>
        <title>Case Studies | ArchiTech Innovate</title>
        <meta
          name="description"
          content="Explore ArchiTech Innovate’s success stories in blockchain, web apps, and AI-driven platforms that transformed businesses worldwide."
        />
        <meta
          name="keywords"
          content="case studies, blockchain projects, AI solutions, software success stories, ArchiTech Innovate"
        />
        <meta property="og:title" content="Case Studies | ArchiTech Innovate" />
        <meta
          property="og:description"
          content="See how ArchiTech Innovate’s technical excellence has empowered startups and enterprises globally."
        />
        <meta property="og:url" content="https://architechinnovate.com/case-studies" />
        <meta property="og:image" content="https://architechinnovate.com/og-image.png" />
      </Helmet>

      <div className="section-container">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Case Studies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover how we've helped businesses transform their digital presence
            with innovative solutions and expert technical execution.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <Card
              key={study.id}
              className="group hover:shadow-xl transition-all duration-300 border-border/50 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {study.category}
                  </Badge>
                </div>
                <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                  {study.title}
                </CardTitle>
                <CardDescription className="text-base">
                  <span className="font-semibold text-foreground">Client:</span> {study.client}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {study.description}
                </p>

                <div>
                  <h4 className="font-semibold text-sm mb-2 text-foreground">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm mb-2 text-foreground">Key Results:</h4>
                  <ul className="space-y-1">
                    {study.results.map((result, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start">
                        <span className="text-accent mr-2">✓</span>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      variant="ghost" 
                      className="w-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                      onClick={() => setSelectedStudy(study)}
                    >
                      View Case Study
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <div className="flex items-start justify-between mb-3">
                        <Badge variant="secondary" className="bg-accent text-accent-foreground">
                          {study.category}
                        </Badge>
                      </div>
                      <DialogTitle className="text-3xl">{study.title}</DialogTitle>
                      <DialogDescription className="text-lg">
                        <span className="font-semibold text-foreground">Client:</span> {study.client}
                      </DialogDescription>
                    </DialogHeader>
                    
                    <div className="space-y-6 mt-4">
                      <div>
                        <h4 className="font-semibold text-lg mb-2 text-foreground">Project Overview</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {study.description}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-lg mb-3 text-foreground">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {study.technologies.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-sm px-3 py-1">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-lg mb-3 text-foreground">Key Results & Impact</h4>
                        <ul className="space-y-2">
                          {study.results.map((result, idx) => (
                            <li key={idx} className="text-muted-foreground flex items-start">
                              <span className="text-accent mr-3 text-xl">✓</span>
                              <span>{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Ready to start your own success story? Let’s make it happen together.
          </p>
          {/* <Button size="lg" className="bg-accent hover:bg-accent/90">
            Schedule a Consultation
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button> */}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
