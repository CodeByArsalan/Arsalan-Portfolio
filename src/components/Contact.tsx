import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-primary bg-clip-text text-transparent">
          Get In Touch
        </h2>
        
        <div className="max-w-2xl mx-auto">
          <div className="rounded-xl bg-gradient-card backdrop-blur-sm border border-border p-8 shadow-card">
            <p className="text-center text-foreground/80 mb-8 text-lg">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 rounded-lg bg-background/50 border border-border hover:border-primary transition-colors duration-300">
                <div className="p-3 rounded-lg bg-primary/20">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-foreground/60 mb-1">Email</p>
                  <a href="mailto:arsalanbakht6@gmail.com" className="text-foreground hover:text-primary transition-colors duration-300">
                    arsalanbakht6@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 rounded-lg bg-background/50 border border-border hover:border-primary transition-colors duration-300">
                <div className="p-3 rounded-lg bg-primary/20">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-foreground/60 mb-1">Phone</p>
                  <a href="tel:+923497300253" className="text-foreground hover:text-primary transition-colors duration-300">
                    +92 3497300253
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 rounded-lg bg-background/50 border border-border hover:border-primary transition-colors duration-300">
                <div className="p-3 rounded-lg bg-primary/20">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-foreground/60 mb-1">Location</p>
                  <p className="text-foreground">Peshawar, KPK, Pakistan</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <Button 
                size="lg" 
                className="bg-gradient-primary text-primary-foreground hover:shadow-glow transition-all duration-300"
                onClick={() => window.location.href = 'mailto:arsalanbakht6@gmail.com'}
              >
                Send Email
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
