import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Dotnet (Backend) Developer",
      company: "National Software Developers",
      period: "01/2024 - Present",
      location: "Peshawar, Pakistan",
      description: "A software company specializing in high-quality software solutions",
      responsibilities: [
        "Developing and maintaining high-quality web-based applications using C#, ASP.NET, and SQL Server",
        "Collaborating with cross-functional teams to ensure timely project delivery",
        "Utilizing strong analytical and problem-solving skills for quick issue resolution effectively"
      ]
    },
    {
      title: "Dotnet (Backend) Developer",
      company: "NRSP (National Rural Support Program)",
      period: "12/2022 - 12/2023",
      location: "Islamabad, Pakistan",
      description: "An organization dedicated to rural support and sustainable development",
      responsibilities: [
        "Worked as a Dotnet Backend developer focusing on web-based applications",
        "Contributed to project development and team collaboration"
      ]
    },
    {
      title: "Junior Dotnet Developer",
      company: "National Software Developers",
      period: "12/2021 - 11/2022",
      location: "Peshawar, Pakistan",
      description: "A software company specializing in high-quality software solutions",
      responsibilities: [
        "Assisted in developing software solutions using .NET technologies",
        "Gained comprehensive experience through collaboration within the development team"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-hero relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-primary bg-clip-text text-transparent">
          Experience
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-gradient-card backdrop-blur-sm border border-border p-8 transition-all duration-300 hover:shadow-glow hover:scale-[1.02]"
            >
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4 flex-wrap gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{exp.title}</h3>
                    <p className="text-xl text-primary font-semibold">{exp.company}</p>
                    <p className="text-muted-foreground mt-2">{exp.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 text-foreground/70 mb-2">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-foreground/70">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                </div>
                
                <ul className="space-y-2 mt-6">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-foreground/80">
                      <Briefcase className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
