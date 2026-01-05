import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import caseStudies from "@/data";

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

const CaseStudies = () => {
  const navigate = useNavigate();

  return (
    <section id="case-studies" className="py-20 bg-section-bg">
      {/* tags and keywords for seo */}

      <Helmet>
      {/* Primary SEO */}
      <title>Case Studies | Blockchain, Web & AI Projects | ArchiTech Innovate</title>
      <meta
        name="description"
        content="Explore real-world case studies by ArchiTech Innovate showcasing blockchain solutions, scalable web applications, and AI-driven platforms that delivered measurable business impact."
      />
      <link
        rel="canonical"
        href="https://architechinnovate.com/case-studies"
      />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="ArchiTech Innovate" />
      <meta property="og:title" content="Case Studies | ArchiTech Innovate" />
      <meta
        property="og:description"
        content="Discover how ArchiTech Innovate helps startups and enterprises succeed through blockchain, AI, and modern web technologies."
      />
      <meta
        property="og:url"
        content="https://architechinnovate.com/case-studies"
      />
      <meta
        property="og:image"
        content="https://architechinnovate.com/og-image.png"
      />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Case Studies | ArchiTech Innovate" />
      <meta
        name="twitter:description"
        content="Real success stories of blockchain, AI, and web development projects delivered by ArchiTech Innovate."
      />
      <meta
        name="twitter:image"
        content="https://architechinnovate.com/og-image.png"
      />
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

                <Button 
                  variant="ghost" 
                  className="w-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                  onClick={() => navigate(`/case-study/${study.id}`)}
                >
                  View Case Study
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
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
