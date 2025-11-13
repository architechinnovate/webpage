import { Code, Smartphone, Cloud, Database, Shield, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";

const services = [
  {
    icon: Code,
    title: "Enterprise Web Applications",
    description: "Developing complex, high-performance web solutions, tailored to manage core business operations, customer interactions, and data processing at scale.",
  },
  {
    icon: Shield,
    title: "Windows & Desktop Applications",
    description: "Crafting powerful, secure applications optimized for the Windows environment, providing specialized tools for internal operations, data analysis, and hardware integration.",
  },
  {
    icon: Cloud,
    title: "Technical Consultation & Architecture",
    description: "Providing pre-development services, including comprehensive system design, technology stack selection, audits, and feasibility analysis to ensure a successful product launch.",
  },
  {
    icon: Smartphone,
    title: "High Performance Mobile App",
    description: "Designing and deploying native-feeling mobile applications for iOS and Android, ensuring seamless user experience and robust backend integration.",
  },
  {
    icon: Database,
    title: "Business Analytics & Data Insights",
    description: "We transform raw data into actionable intelligence using tools like Microsoft Power BI to develop dynamic dashboards for informed business decisions.",
  },
  {
    icon: Zap,
    title: "Online Training & Technical Enablement",
    description: "Offering personalized, hands-on training for internal teams on new system deployments, clean code best practices, and modern architecture patterns to ensure quick adoption & independent mastery.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-section-bg">

      {/* tags and keywords for seo */}
      <Helmet>
        <title>Services | ArchiTech Innovate</title>
        <meta
          name="description"
          content="Explore ArchiTech Innovate’s software, blockchain, cloud, and AI services crafted for scalability, performance, and business success."
        />
        <meta
          name="keywords"
          content="software services, blockchain development, AI integration, cloud solutions, ArchiTech Innovate"
        />
        <meta property="og:title" content="Services | ArchiTech Innovate" />
        <meta
          property="og:description"
          content="Discover our range of software, AI, and blockchain services that drive modern digital innovation."
        />
        <meta property="og:url" content="https://architechinnovate.com/#services" />
        <meta property="og:image" content="https://architechinnovate.com/og-image.png" />
      </Helmet>

      <div className="section-container">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technology solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
