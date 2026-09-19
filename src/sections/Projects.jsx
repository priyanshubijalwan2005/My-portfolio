import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import meetflowImage from "@/assets/meetflow-image.jpg";

const projects = [
  {
  title: "MeetFlow",
  description:
    "A real-time video conferencing application that enables seamless communication through video calls and interactive features.",
  image: meetflowImage,
  tags: [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Socket.IO",
    "WebRTC",
  ],
  link: "https://meet-flow-tawny.vercel.app/",
  github: "https://github.com/priyanshubijalwan2005/meetflow",
},

  {
    title: "E-Learning Website",
    description:
      "A responsive e-learning platform designed to provide an interactive and user-friendly experience for exploring educational content.",
    image: "/projects/project2.png",
    tags: ["HTML", "CSS", "JavaScript"],

    // Add your deployed E-Learning URL here later
    link: "#",

    github: "#",
  },

  {
    title: "Simon Says Game",
    description:
      "An interactive memory-based game where players must remember and repeat an increasingly complex sequence of colors. Built with JavaScript to practice DOM manipulation, event handling, and game logic.",
    image: "/Simon-Says-Game.png",
    tags: ["HTML", "CSS", "JavaScript"],

    link: "https://priyanshubijalwan2005.github.io/Simon-Says-Game/",

    github: "https://github.com/priyanshubijalwan2005/Simon-Says-Game",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            My Work
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Featured{" "}
            <span className="font-serif italic font-normal text-primary">
              Projects
            </span>
          </h2>

          <p className="text-muted-foreground">
            A collection of projects I've built while learning and exploring
            modern web development technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group relative glass rounded-3xl overflow-hidden hover:glow-border transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div className="relative aspect-video overflow-hidden">
                {project.link !== "#" ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-full"
                    aria-label={`Open ${project.title} project`}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </a>
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Project Action Buttons */}
                <div className="absolute top-4 right-4 flex gap-2">
                  {/* GitHub */}
                  {project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} GitHub repository`}
                      className="p-2 rounded-full glass hover:bg-primary/20 transition-colors pointer-events-auto"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}

                  {/* Open Project */}
                  {project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.title}`}
                      className="p-2 rounded-full glass hover:bg-primary/20 transition-colors pointer-events-auto"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-sm text-muted-foreground mt-2 line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Right Arrow */}
                  {project.link !== "#" ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.title}`}
                      className="shrink-0 p-2 rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  ) : (
                    <span className="shrink-0 p-2 rounded-full text-muted-foreground/50">
                      <ArrowUpRight className="w-5 h-5" />
                    </span>
                  )}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-secondary text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="flex justify-center mt-12">
          <a
            href="https://github.com/priyanshubijalwan2005"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AnimatedBorderButton>
              View More Projects
              <ArrowUpRight className="w-4 h-4" />
            </AnimatedBorderButton>
          </a>
        </div>
      </div>
    </section>
  );
};