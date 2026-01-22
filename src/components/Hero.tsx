import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center bg-background pt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <p className="text-primary mb-4">Hi, my name is</p>
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4">
            Arsalan Khan
          </h1>
          <p className="text-3xl md:text-4xl text-muted-foreground font-medium mb-6">
            .NET Developer
          </p>
          <p className="text-lg text-muted-foreground max-w-xl mb-8">
            Building secure, scalable, and high-performance enterprise solutions
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Get In Touch
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 transition-all duration-300"
              asChild
            >
              <a href="/resume.pdf" download="Arsalan_Khan_Resume.pdf">
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
