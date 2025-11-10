import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Modern tech workspace" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/90 to-background/70" />
      </div>

      <div className="section-container relative z-10 py-20">
        <div className="max-w-3xl animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Building Excellence Through
            <span className="gradient-text"> Code Mastery</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Delivering robust, scalable solutions built on technical excellence, clean architecture, and lasting quality.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card/50 backdrop-blur p-6 rounded-lg border border-border">
              <h3 className="text-lg font-semibold mb-3 text-primary">Our Vision</h3>
              <p className="text-muted-foreground">
                To be the definitive source for expert technical guidance, consistently setting the benchmark for quality and innovation in software development, transforming complex business challenges into efficient, high-performing digital realities for our partners.
              </p>
            </div>
            <div className="bg-card/50 backdrop-blur p-6 rounded-lg border border-border">
              <h3 className="text-lg font-semibold mb-3 text-primary">Our Mission</h3>
              <p className="text-muted-foreground">
                To deliver robust, scalable, and meticulously crafted code solutions, ensuring every product is built on a foundation of technical excellence, clean architecture, and lasting quality through relentless commitment and deep domain expertise.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="text-lg group">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg">
              View Our Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
