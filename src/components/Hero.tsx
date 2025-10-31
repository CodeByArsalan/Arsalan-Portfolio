import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              ARSALAN
            </h1>
            <p className="text-2xl md:text-3xl text-foreground/90 font-light mb-6">
              .NET Developer | Web Applications
            </p>
          </div>

          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto mb-12 leading-relaxed">
            Crafting efficient software solutions with over 3 years of experience. 
            Specializing in C#, ASP.NET, and SQL Server to deliver top-quality applications.
          </p>

          <div className="flex flex-wrap gap-6 justify-center mb-12 text-foreground/80">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-primary" />
              <span>+92 3497300253</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-primary" />
              <span>arsalanbakht6@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              <span>Peshawar, KPK, Pakistan</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-primary text-primary-foreground hover:shadow-glow transition-all duration-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 transition-all duration-300"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
