import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-background">

      {/* tags and keywords for seo */}

      <Helmet>
        <title>Contact Us | ArchiTech Innovate</title>
        <meta
          name="description"
          content="Get in touch with ArchiTech Innovate for collaboration, project discussions, or technical consultation."
        />
        <meta
          name="keywords"
          content="contact ArchiTech Innovate, software consultation, project collaboration"
        />
        <meta property="og:title" content="Contact Us | ArchiTech Innovate" />
        <meta
          property="og:description"
          content="Reach out to ArchiTech Innovate for inquiries, partnerships, or technology solutions."
        />
        <meta property="og:url" content="https://architechinnovate.com/contact" />
        <meta property="og:image" content="https://architechinnovate.com/og-image.png" />
      </Helmet>

    
      <div className="section-container">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how we can help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <Card className="mb-8 border-2">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project"
                      rows={5}
                      required
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <a 
                  href="mailto:architechinnovate@gmail.com" 
                  className="flex items-start gap-4 hover:opacity-80 transition-opacity group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-muted-foreground group-hover:text-primary transition-colors">architechinnovate@gmail.com</p>
                  </div>
                </a>

                <a 
                  href="tel:+918076066584" 
                  className="flex items-start gap-4 hover:opacity-80 transition-opacity group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p className="text-muted-foreground group-hover:text-primary transition-colors">+91 8076066584</p>
                  </div>
                </a>

                <a 
                  href="https://architechinnovate.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 hover:opacity-80 transition-opacity group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Website</h4>
                    <p className="text-muted-foreground group-hover:text-primary transition-colors">architechinnovate.com</p>
                  </div>
                </a>
              </div>
            </div>

            {/* <Card className="p-6 bg-primary text-primary-foreground border-2 border-primary">
              <h3 className="text-xl font-bold mb-2">Ready to Transform Your Business?</h3>
              <p className="mb-4 opacity-90">
                Schedule a free consultation with our experts to discuss your project requirements.
              </p>
              <Button 
                asChild
                variant="secondary" 
                size="lg" 
                className="w-full"
              >
                <a 
                  href="https://calendly.com/architechinnovate"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a Call
                </a>
              </Button>
            </Card> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
