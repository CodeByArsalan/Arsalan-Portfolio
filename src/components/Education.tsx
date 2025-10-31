import { GraduationCap, Calendar, MapPin } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gradient-hero relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-primary bg-clip-text text-transparent">
          Education
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="group relative overflow-hidden rounded-xl bg-gradient-card backdrop-blur-sm border border-border p-8 transition-all duration-300 hover:shadow-glow hover:scale-[1.02]">
            <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
            
            <div className="relative z-10">
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-xl bg-primary/20 group-hover:bg-primary/30 transition-colors duration-300">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Bachelor of Computer Software Engineering
                  </h3>
                  <p className="text-xl text-primary font-semibold mb-4">
                    University of Engineering and Technology
                  </p>
                  
                  <div className="flex flex-wrap gap-6 text-foreground/70">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>09/2017 - 09/2021</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>Peshawar, Khyber Pakhtunkhwa, Pakistan</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
