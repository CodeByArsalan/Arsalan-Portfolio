import { Mail, MessageSquare, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Get In Touch
        </h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          I'm currently seeking opportunities in the Gulf region. Whether you have a question or just want to say hi, feel free to reach out!
        </p>

        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl">
          <div className="lg:col-span-2">
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="text-lg font-bold text-foreground mb-2">Send Message</h3>
              <p className="text-muted-foreground text-sm mb-6">
                Fill out the form below and I'll get back to you soon.
              </p>

              <form className="space-y-4">
                <Input
                  type="text"
                  placeholder="Your Name"
                  className="bg-background border-border focus:border-primary"
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="bg-background border-border focus:border-primary"
                />
                <Textarea
                  placeholder="Your Message"
                  rows={5}
                  className="bg-background border-border focus:border-primary resize-none"
                />
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  <Mail className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="text-lg font-bold text-foreground mb-4">Quick Contact</h3>
              <div className="space-y-3">
                <Button
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground justify-center"
                  onClick={() => window.open("https://wa.me/923497300253", "_blank")}
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  WhatsApp Me
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground justify-center"
                  onClick={() => (window.location.href = "mailto:arsalanbakht6@gmail.com")}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Email Me
                </Button>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="text-lg font-bold text-foreground mb-4">Connect</h3>
              <a
                href="https://github.com/CodeByArsalan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="w-5 h-5" />
                <span>View My GitHub Profile</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
