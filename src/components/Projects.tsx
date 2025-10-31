import { Code2 } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Campus Management System UET Mardan",
      description: "A comprehensive system to manage various campus-related activities"
    },
    {
      title: "MIS For SPPAP",
      description: "Member Information System for improved project tracking and reporting"
    },
    {
      title: "CMS (Complaint Management System) NRSP",
      description: "System designed for managing complaints efficiently"
    },
    {
      title: "MIS of Artificial Limbs",
      description: "Management Information System to track artificial limb distribution"
    },
    {
      title: "TTMS (Traffic Ticketing Management System) KPK",
      description: "System aimed at managing traffic-related ticketing efficiently"
    },
    {
      title: "DLMS (Driving License Management System) KPK",
      description: "System for managing driving licenses more effectively"
    },
    {
      title: "Inventory Management System",
      description: "Designed to optimize inventory control and tracking"
    },
    {
      title: "NSD E Pay",
      description: "Portal for Wallet which facilitates online payments"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-primary bg-clip-text text-transparent">
          Projects
        </h2>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-gradient-card backdrop-blur-sm border border-border p-6 transition-all duration-300 hover:shadow-glow hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors duration-300">
                    <Code2 className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-foreground/70">{project.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
