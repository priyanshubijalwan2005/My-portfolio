import { Button } from "@/components/Button";
import {
  ArrowRight,
  ChevronDown,
  Github,
  Linkedin,
  Download,
} from "lucide-react";

import { AnimatedBorderButton } from "../components/AnimatedBorderButton";


const skills = [
  "React.js",
  "JavaScript",
  "Tailwind CSS",
  "HTML5",
  "CSS3",
  "Bootstrap",
  "Node.js",
  "Express.js",
  "MongoDB",
  "SQL",
  "REST APIs",
  "Socket.IO",
  "WebRTC",
  "Git",
  "GitHub",
];


export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Portfolio background"
          className="w-full h-full object-cover opacity-40"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>


      {/* Animated Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${
                15 + Math.random() * 20
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>


      {/* Main Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <div className="space-y-8">

            {/* Role Badge */}
            <div className="animate-fade-in">

              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">

                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />

                Computer Science Student • MERN Developer

              </span>

            </div>


            {/* Main Heading */}
            <div className="space-y-4">

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">

                Building modern

                <span className="text-primary glow-text">
                  {" "}web experiences
                </span>

                <br />

                with creativity and

                <br />

                <span className="font-serif italic font-normal text-white">
                  passion.
                </span>

              </h1>


              {/* Introduction */}
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">

                Hi, I'm Priyanshu Bijalwan — a B.Tech Computer Science student
                and aspiring MERN Stack Developer. I enjoy building responsive
                and interactive web applications using React.js, Node.js,
                Express.js, and MongoDB.

              </p>

            </div>


            {/* Buttons */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">

              <a href="#contact">
                <Button size="lg">

                  Contact Me

                  <ArrowRight className="w-5 h-5" />

                </Button>
              </a>


              <a
                href="/Priyanshu_Bijalwan_Resume.pdf"
                download
              >

                <AnimatedBorderButton>

                  <Download className="w-5 h-5" />

                  Download Resume

                </AnimatedBorderButton>

              </a>

            </div>


            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">

              <span className="text-sm text-muted-foreground">
                Connect with me:
              </span>


              {/* GitHub */}
              <a
                href="https://github.com/priyanshubijalwan2005"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
              >

                <Github className="w-5 h-5" />

              </a>


              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/priyanshubijalwan2005"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
              >

                <Linkedin className="w-5 h-5" />

              </a>

            </div>

          </div>



          {/* Right Side - Profile Image */}
          <div className="relative animate-fade-in animation-delay-300">

            <div className="relative max-w-md mx-auto">


              {/* Glow */}
              <div
                className="absolute inset-0
                rounded-3xl bg-gradient-to-br
                from-primary/30 via-transparent
                to-primary/10 blur-2xl animate-pulse"
              />


              <div className="relative glass rounded-3xl p-2 glow-border">


                {/* Profile Image */}
                <img
                  src="/Priyanshu Photo.png"
                  alt="Priyanshu Bijalwan"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                />


                {/* Availability Badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">

                  <div className="flex items-center gap-3">

                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />

                    <span className="text-sm font-medium">

                      Open to opportunities

                    </span>

                  </div>

                </div>



                {/* Student Badge */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">

                  <div className="text-lg font-bold text-primary">
                    2023+
                  </div>

                  <div className="text-xs text-muted-foreground">

                    B.Tech CSE

                  </div>

                </div>


              </div>

            </div>

          </div>

        </div>



        {/* Skills Section */}
        <div className="mt-20 animate-fade-in animation-delay-600">

          <p className="text-sm text-muted-foreground mb-6 text-center">

            Technologies I work with

          </p>


          <div className="relative overflow-hidden">


            {/* Left Gradient */}
            <div
              className="absolute left-0 top-0 bottom-0 w-32
              bg-gradient-to-r from-background to-transparent z-10"
            />


            {/* Right Gradient */}
            <div
              className="absolute right-0 top-0 bottom-0 w-32
              bg-gradient-to-l from-background to-transparent z-10"
            />


            {/* Skills */}
            <div className="flex animate-marquee">

              {[...skills, ...skills].map((skill, idx) => (

                <div
                  key={idx}
                  className="flex-shrink-0 px-8 py-4"
                >

                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">

                    {skill}

                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>



      {/* Scroll Button */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2
        animate-fade-in animation-delay-800"
      >

        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >

          <span className="text-xs uppercase tracking-wider">
            Scroll
          </span>

          <ChevronDown className="w-6 h-6 animate-bounce" />

        </a>

      </div>

    </section>
  );
};