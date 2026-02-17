import React from "react";
import Button from "../components/Button";
import {
  ArrowRight,
  Download,
  Github,
  Instagram,
  Linkedin,
} from "lucide-react";

const Hero = () => {
  const socialLinks = [
    { icon: Github, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Linkedin, href: "#" },
  ];
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/Hero-bg.jpg"
          alt="Hero Image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* green Dots that flow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-40 "
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Col */}
          <div className="space-y-8">
            <div className="animate-fade-in animate-delay-100">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Web Developer
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Graphics Designer
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in animate-delay-300">
                Ethayen{" "}
                <span className="text-primary glow-text">Bayou</span>{" "}
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animate-delay-500">
                Passionate <span className="text-white">website</span> and{" "}
                <span className="text-white">
                  mobile application developer{" "}
                </span>{" "}
                with the ability to create a{" "}
                <span className="text-white">graphics design</span> as well.
                Looking forward to continue my professional career.{" "}
                <span className="text-white">Good time management </span>
                skill combined with a fast learning ability.{" "}
                <span className="text-white italic font-serif underline">
                  Energetic{" "}
                </span>
                ,
                <span className="text-white italic font-serif underline">
                  {" "}
                  Hardworking{" "}
                </span>{" "}
                and
                <span className="text-white italic font-serif underline">
                  {" "}
                  Team Player.{" "}
                </span>
              </p>
            </div>
            {/* CTA */}
            <div className="flex items-center gap-5 animate-fade-in animate-delay-400">
              <Button size="lg">
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>

              <button className="flex items-center gap-2 border border-primary px-8 py-4 rounded-full hover:bg-primary hover:text-foreground hover:shadow-lg hover:shadow-primary/50 hover:border-white">
                <Download className="w-5 h-5" /> Download Cv
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animate-delay-600">
              <span className="text-sm text-muted-foreground">Follow Me :</span>
              {socialLinks.map((link, idx) => (
                <a
                  href={link.href}
                  key={idx}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary hover:border-primary transition-all duration-300"
                >
                  {<link.icon />}
                </a>
              ))}
            </div>
          </div>
          {/* right */}

          <div className="relative animate-fade-in animate-delay-300">
            {/* Profile Image */}
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse" />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/myPic.jpg"
                  alt="Ethayen Bayou"
                  className="w-full object-cover aspect-auto rounded-2xl"
                />
                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 border-3 border-primary glow-border bg-gray-800 rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                    <span className="text-sm">Available for work</span>
                  </div>
                </div>
                {/* stat badge */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animate-delay-800">
                  <div className="text-2xl text-primary font-bold ">BSc.</div>
                  <div className="text-sm text-white">Computer Science</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
