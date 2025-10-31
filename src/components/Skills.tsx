const Skills = () => {
  const skills = [
    "C#", "HTML", "CSS", "Bootstrap", "ASP.NET", "ASP.NET Web Form",
    "ASP.NET MVC", "ASP.NET CORE", "ASP.NET CORE MVC", "EF Core",
    "ADO.NET", "SDLC", "SQL", "ASP.NET WINFORM", "Docker"
  ];

  return (
    <section id="skills" className="py-20 bg-background relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-primary bg-clip-text text-transparent">
          Technical Skills
        </h2>
        
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg bg-gradient-card backdrop-blur-sm border border-border p-4 text-center transition-all duration-300 hover:shadow-glow hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <p className="text-foreground font-medium relative z-10">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
