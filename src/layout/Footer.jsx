import { Github, Linkedin } from "lucide-react";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/priyanshubijalwan2005",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/priyanshubijalwan2005",
    label: "LinkedIn",
  },
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-3">
            {" "}
            <a
              href="#"
              className="flex items-center justify-center w-11 h-11 rounded-full
  border border-primary/40 bg-primary/10
  text-base font-bold tracking-wide
  transition-all duration-300
  hover:bg-primary hover:text-primary-foreground
  hover:scale-110 hover:shadow-lg hover:shadow-primary/30"
            >
              PB
            </a>
            <p className="text-sm text-muted-foreground">
              © {currentYear} Priyanshu Bijalwan. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
