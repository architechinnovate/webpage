import { useParams, useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import caseStudies from "@/data";
import { Helmet } from "react-helmet-async";

const CaseStudyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const study = caseStudies.find(s => s.id === parseInt(id || ""));

  if (!study) {
    return (
      <div className="min-h-screen">
        <div className="section-container py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
          <Button onClick={() => navigate("/")}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
  <>

    {/* tags for seo */}

    <Helmet>
        <title>{study.title} | Case Study | ArchiTech Innovate</title>
        <meta name="description" content={study.shortDescription} />
        <meta property="og:title" content={`${study.title} | Case Study`} />
        <meta property="og:description" content={study.shortDescription} />
        <meta property="og:url" content={`https://architechinnovate.com/case-study/${id}`} />
        {/* <meta property="og:image" content={study.coverImage} /> */}
    </Helmet>

    <div className="min-h-screen">
      
      <section className="py-20 bg-section-bg">
        <div className="section-container">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/case-studies")}
            className="mb-8"
            >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Case Studies
          </Button>

          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <div className="mb-6">
              <Badge variant="secondary" className="bg-accent text-accent-foreground mb-4">
                {study.category}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
                {study.title}
              </h1>
              <p className="text-xl text-muted-foreground">
                <span className="font-semibold text-foreground">Client:</span> {study.client}
              </p>
            </div>

            <div className="bg-card border border-border/50 rounded-lg p-8 space-y-8">
              <div>
                <h2 className="font-semibold text-2xl mb-4 text-foreground">Project Overview</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {study.description}
                </p>
              </div>

              <div>
                <h2 className="font-semibold text-2xl mb-4 text-foreground">Technologies Used</h2>
                <div className="flex flex-wrap gap-3">
                  {study.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-sm px-4 py-2">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="font-semibold text-2xl mb-4 text-foreground">Key Results & Impact</h2>
                <ul className="space-y-3">
                  {study.results.map((result, idx) => (
                    <li key={idx} className="text-muted-foreground flex items-start text-lg">
                      <span className="text-accent mr-3 text-2xl">✓</span>
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  </>
  );
};

export default CaseStudyDetail;
