import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const experiences = [
    {
      title: ".NET Developer (Backend)",
      company: "National Software Developers",
      location: "Peshawar",
      period: "Jan 2024 – Present",
      isCurrent: true,
      responsibilities: [
        "Develop and maintain enterprise-level web applications using ASP.NET Core, C#, and SQL Server",
        "Build secure APIs, financial and MIS modules, and transaction-based systems",
        "Work on government-sector solutions including payment, traffic, and licensing systems",
        "Optimize system performance, improve database efficiency, and support deployments",
      ],
    },
    {
      title: ".NET Developer (Backend)",
      company: "NRSP",
      location: "Islamabad",
      period: "Dec 2022 – Dec 2023",
      isCurrent: false,
      responsibilities: [
        "Developed large-scale information systems for organizational and rural development operations",
        "Implemented backend services, reporting dashboards, and data-processing modules",
        "Ensured system stability, data accuracy, and long-term maintainability",
      ],
    },
    {
      title: "Junior .NET Developer",
      company: "National Software Developers",
      location: "Peshawar",
      period: "Dec 2021 – Nov 2022",
      isCurrent: false,
      responsibilities: [
        "Supported development of enterprise web applications and internal management systems",
        "Assisted in debugging, module enhancement, and system testing",
        "Collaborated with senior developers to learn best practices and coding standards",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Professional Experience
        </h2>

        <div className="space-y-6 max-w-4xl">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="rounded-lg border border-border bg-card p-6 hover:border-primary/50 transition-colors duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                  <p className="text-primary">
                    {exp.company} • {exp.location}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="border-primary text-primary whitespace-nowrap">
                    {exp.period}
                  </Badge>
                  {exp.isCurrent && (
                    <Badge className="bg-primary text-primary-foreground">Current</Badge>
                  )}
                </div>
              </div>

              <ul className="space-y-2">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                    <span className="text-primary mt-1.5">▹</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
