import { Github, Linkedin, Instagram, Mail, Heart } from "lucide-react";

export function Footer() {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/RebeccaAyodele",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/rebecca-ayodele-012065298",
      label: "LinkedIn",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/ayodelerebeccaayomide?igsh=OWJyMmkzdHUzM3A=",
      label: "Instagram",
    },
    { icon: Mail, href: "mailto:rebeccaayodele08@gmail.com", label: "Email" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">
              Rebecca Ayodele
            </h3>
            <p className="text-muted-foreground mb-4">
              Frontend Developer passionate about creating beautiful, functional
              web experiences that make a difference.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-muted hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-primary mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["Home", "About", "Skills", "Projects", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-primary mb-4">
              Services
            </h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Frontend Development</li>
              <li>React/Next.js Applications</li>
              <li>UI/UX Implementation</li>
              <li>Performance Optimization</li>
              <li>Responsive Design</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-1">
            Made with{" "}
            <Heart className="w-4 h-4 text-[#aaff00] fill-[#aaff00]" />{" "}
            by Becca © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
