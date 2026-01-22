import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["C#", "SQL", "T-SQL", "HTML", "CSS", "JavaScript"],
    },
    {
      title: "Frameworks",
      skills: [
        "ASP.NET Core",
        "ASP.NET MVC",
        "ASP.NET Web Forms",
        "Entity Framework Core",
        "ADO.NET",
      ],
    },
    {
      title: "Tools & Technologies",
      skills: ["SQL Server", "Docker", "REST APIs", "Git", "Visual Studio"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl">
          {skillCategories.map((category, index) => (
            <div key={index}>
              <h3 className="text-lg font-bold text-foreground mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <Badge
                    key={idx}
                    variant="outline"
                    className="border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                  >
                    {skill}
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

export default Skills;
