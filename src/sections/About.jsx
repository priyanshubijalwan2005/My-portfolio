import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing structured and maintainable code while continuously improving my development skills.",
  },
  {
    icon: Rocket,
    title: "MERN Development",
    description:
      "Building full-stack web applications using MongoDB, Express.js, React.js, and Node.js.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    description:
      "Exploring modern web technologies and improving my skills through projects and hands-on development.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Working on real-world development tasks and collaborating to build better web applications.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Column */}
          <div className="space-y-8">

            {/* Section Label */}
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building modern web experiences,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one project at a time.
              </span>
            </h2>

            {/* About Description */}
            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">

              <p>
                I'm a Computer Science student at COER University with a strong
                interest in Full Stack Web Development. I enjoy building
                responsive and interactive web applications while continuously
                improving my problem-solving and development skills.
              </p>

              <p>
                My primary focus is on the MERN stack, including MongoDB,
                Express.js, React.js, and Node.js. I also work with JavaScript,
                Tailwind CSS, HTML, and CSS to create modern and responsive
                user interfaces.
              </p>

              <p>
                Through academic projects and hands-on development experience,
                I've worked on interactive web applications and real-time
                projects. I'm always eager to explore new technologies and turn
                ideas into functional digital experiences.
              </p>

            </div>

            {/* Personal Mission */}
            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My goal is to continuously learn, build meaningful projects,
                and create modern web applications that provide useful and
                engaging experiences."
              </p>
            </div>

          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">

            {highlights.map((item, idx) => (

              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{
                  animationDelay: `${(idx + 1) * 100}ms`,
                }}
              >

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>

              </div>

            ))}

          </div>

        </div>
      </div>
    </section>
  );
};