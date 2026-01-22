import { Mail, Phone, MapPin, Github } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          <span className="text-primary">01.</span> About Me
        </h2>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              Experienced .NET Developer with 3+ years of professional experience delivering secure, scalable, and high-performance web applications for enterprise and government sector projects. Strong expertise in ASP.NET Core, C#, RESTful APIs, and SQL Server with a proven track record of building transaction-based, MIS, and payment-related systems. Well-versed in structured development environments, documentation, and long-term system maintenance. Seeking a challenging opportunity in the Gulf region to contribute to large-scale, business-critical software solutions.
            </p>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">Education</h3>
              <div className="rounded-lg border border-border bg-card p-6">
                <h4 className="font-bold text-foreground">Bachelor of Computer Software Engineering</h4>
                <p className="text-primary">University of Engineering & Technology, Peshawar</p>
                <p className="text-muted-foreground mt-2">2017 – 2021</p>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-border bg-card p-6">
            <h3 className="text-lg font-bold text-foreground mb-6">Contact Info</h3>
            <div className="space-y-4">
              <a
                href="mailto:arsallanbakht6@gmail.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="w-5 h-5 text-primary" />
                <span>arsallanbakht6@gmail.com</span>
              </a>
              <a
                href="tel:+923497300253"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone className="w-5 h-5 text-primary" />
                <span>+92 349 7300253</span>
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Peshawar, Pakistan</span>
              </div>
              <a
                href="https://github.com/CodeByArsalan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="w-5 h-5 text-primary" />
                <span>CodeByArsalan</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
