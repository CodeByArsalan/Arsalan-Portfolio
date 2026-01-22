import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "NSD E-Pay System",
      description:
        "Online payment and digital wallet platform for challans and government fees. Comprehensive payment gateway integration with secure transaction processing.",
      technologies: ["ASP.NET Core", "C#", "SQL Server", "REST APIs", "Payment Gateway"],
    },
    {
      title: "Traffic Ticketing Management System (KPK)",
      description:
        "End-to-end traffic violation and ticket processing solution for Khyber Pakhtunkhwa government. Complete workflow automation from violation to payment.",
      technologies: ["ASP.NET Core", "MVC", "SQL Server", "Entity Framework", "ADO.NET"],
    },
    {
      title: "Driving License Management System (KPK)",
      description:
        "Government-based driving record management system handling license issuance, renewal, and verification processes.",
      technologies: ["ASP.NET Core", "C#", "SQL Server", "REST APIs"],
    },
    {
      title: "Campus Management System (UET Mardan)",
      description:
        "Academic and administrative enterprise system for university management, student records, and institutional operations.",
      technologies: ["ASP.NET Core", "MVC", "SQL Server", "Entity Framework Core"],
    },
    {
      title: "MIS Platforms",
      description:
        "SPPAP, Artificial Limbs & Inventory systems for organizational tracking and reporting. Comprehensive dashboards and data analytics.",
      technologies: ["ASP.NET Core", "SQL Server", "T-SQL", "Reporting Services"],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          <span className="text-primary">03.</span> Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group rounded-lg border border-border bg-card p-6 hover:border-primary/50 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>

              <p className="text-muted-foreground text-sm mb-6 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <Badge
                    key={idx}
                    variant="secondary"
                    className="bg-secondary text-muted-foreground text-xs"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
