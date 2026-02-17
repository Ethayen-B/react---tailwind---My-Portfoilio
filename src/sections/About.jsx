import {
  BicepsFlexed,
  BookOpenCheck,
  ClipboardClock,
  Ear,
  Handshake,
} from "lucide-react";

const highlight = [
  {
    icon: Ear,
    title: "Listening",
    description: "I have a good skill of listening.",
  },
  {
    icon: Handshake,
    title: "Team Work",
    description: "I'm a team player, and also can perform tasks by my self.",
  },
  {
    icon: BookOpenCheck,
    title: "Fast Learner",
    description: "I can make my self familiar with a new concepts.",
  },
  {
    icon: BicepsFlexed,
    title: "Hard Worker",
    description: "I am dedicated, always prioritizing my work.",
  },
  {
    icon: ClipboardClock,
    title: "Time Management",
    description:
      "I have a good time management skill, always on time and punctual.",
  },
];
const About = () => {
  return (
    <section id="about">
      <div className="py-3 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Col */}
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animate-delay-400 text-secondary-foreground">
                About <span className="text-white font-serif italic">ME</span>
              </h2>

              <div className="space-y-4 text-muted-foreground animate-fade-in animate-delay-600">
                <p className="">
                  I'm a passionate Web developer and graphics Designer. I got my
                  Bsc Degree in Computer Science from ST. Mary's University in
                  2023. My journey didn't start then, before joining computer
                  science, it was my dream to be a software engineer every since
                  I was a child.
                </p>
                <p className="">
                  When i was at high school, I was hooked with web development.
                  starting from then i try to build different web pages using
                  HTML, CSS and JS.
                </p>
                <p className="">
                  My favorite framework is react, and i like to develop websites
                  using MERN stack. I'm still learning, but i believe i would
                  become a grate web developer.
                </p>
                <p className="">
                  When i'm not coding I like to listen to short stories. and
                  watch movies.
                </p>
              </div>
            </div>
            {/* right col */}

            <div className="grid sm:grid-cols-2 gap-6">
              {highlight.map((item, idx) => (
                <div
                  className="glass p-6 rounded-2xl"
                  key={idx}
                  style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                    {<item.icon className="w-6 h-6 text-primary"/>}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm ">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
