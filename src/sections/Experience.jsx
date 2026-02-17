const experiences = [
  {
    period: "Feb 2025 - Jul 2025",
    role: "National Id Registration officer",
    company: "Ethio telecom",
    description: "Registering customers for National Id (FAYDA).",
    technologies: ["Data Encoding"],
    current: false,
  },
  {
    period: "Jul 2024 - Sep 2024",
    role: "Instructor",
    company: "I can language center",
    description:
      "Teaching graphics design, and basic computer Skills such as Word, Excel etc...",
    technologies: ["Photoshop", "Illustrator", "MS-Word", "MS-Excel", "MS-Powerpoint"],
    current: false,
  },
  {
    period: "Dec 2023 - Jul 2024",
    role: "ICT Teacher",
    company: "School of Nations",
    description:
      "Teaching elementary students ICT fundamentals and Programming using Scratch",
    technologies: ["Hardware", "MS OFfice", "Scratch", "HTML", "CSS", "JS"],
    current: false,
  },
  {
    period: "Jan 2024 - Apr 2024 ",
    role: "Internship",
    company: "Atbiya dotcom",
    description:
      "Helped on data encoding, and learnt on different web development technologies such as 'React', 'Node', 'Flask' etc... ",
    technologies: ['Data Encoding', 'React', 'Node', 'Mongo', 'Express', 'Flask'],
    current: false,
  },
  {
    period: "Jul 2022 - Sep 2022",
    role: "Network and User support Internship",
    company: "National Bank of Ethiopia (NBE)",
    description:
      "Assisted on network cable crimping, troubleshooting on the switch, creating accounts for new hired employees and identifying network problems.  ",
    technologies: ['Networking', 'Hardware'],
    current: false,
  },
];
const Experience = () => {
  return (
    <section id="experience" className="py-12 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animate-delay-400 text-secondary-foreground">
            My <span className="text-white font-serif italic">Experiences</span>
          </h2>

          <p className="text-sm text-muted-foreground animate-fade-in animate-delay-300">
            A timeline that shows what i have done starting from the internship
            i attend before i graduated to the works i've done until now.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                key={idx}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75 " />}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${idx % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500  `}
                  >
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-muted-foreground text-sm mt-4">
                      {exp.description}
                    </p>

                    <div className={`flex flex-wrap gap-2 mt-4 ${idx % 2 === 0 ? 'md:justify-end' : ''}`}>
                      {exp.technologies.map((tech,techId) => (
                        <span className="px-3 py-1 bg-surface text-xs border border-primary/50  rounded-full text-muted-foreground" key={techId}>{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
