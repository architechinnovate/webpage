import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="section-container">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">ArchiTech Innovate</h3>
            <p className="text-background/80 mb-4">
              Delivering robust, scalable solutions built on technical excellence, clean architecture, and lasting quality.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-background/80">
              <li><a href="/services" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="/tech-stack" className="hover:text-primary transition-colors">Tech Stack</a></li>
              <li><a href="/case-studies" className="hover:text-primary transition-colors">Case Studies</a></li>
              <li><a href="/contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-background/80">
              <li>Enterprise Web Apps</li>
              <li>Desktop Applications</li>
              <li>Technical Consultation</li>
              <li>Training & Enablement</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-background/20 text-center text-background/60">
          <p>&copy; {new Date().getFullYear()} ArchiTech Innovate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
