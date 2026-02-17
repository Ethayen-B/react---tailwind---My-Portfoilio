import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    quote:
      "nksdnksdck  dsjkdbc ksdcbjhbdsc hd jhsdc hsdjhdskbn lkdn lknsdv jbd lknsd bnksjbdvkjnd kjdvn sdn vmsjhdvd?",
    author: "John Cena",
    role: "CEO, WWE Champion",
    avatar: "/Persons/person1.jpg",
  },
  {
    quote:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, temporibus?",
    author: "John Cena",
    role: "CEO, WWE Champion",
    avatar: "/Persons/person2.jpg",
  },
  {
    quote:
      "LLoskscmsc idnubhjf vhgvsdc jbkdvsdv pkpknjnsd bjshdv orem ipsum, dolor sit amet consectetur adipisicing elit. Eos, temporibus?",
    author: "John Cena",
    role: "CEO, WWE Champion",
    avatar: "/Persons/person3.jpg",
  },
];
const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section id="testimonials" className="py-12 relative overflow-hidden">
      {" "}
      <div className="absolute top-1/2 left-1/2 w-200 h-200 bg-primary/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-center leading-tight animate-fade-in animate-delay-400 text-secondary-foreground">
            Testimonials{" "}
            <span className="text-white font-serif italic">
              {" "}
              from amazing people.
            </span>
          </h2>
        </div>

        {/* Testimonial carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Testimonial */}
            <div className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animate-delay-200 ">
              <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <Quote className="w-6 h-6 text-primary-foreground" />
              </div>

              <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4">
                "{testimonials[activeIndex].quote}"
              </blockquote>

              <div className="flex items-center gap-4">
                <img
                  src={testimonials[activeIndex].avatar}
                  alt={testimonials[activeIndex].author}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/30"
                />

                {/* <div className="flex items-center gap-4"> */}
                <div className="">
                  <div className="font-semibold">
                    {testimonials[activeIndex].author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonials[activeIndex].role}
                  </div>
                </div>
              </div>
            </div>

            {/* Testmimonial navigation */}
            <div className="flex items-center justify-center gap4 mt-8">
              <button
                className="p-3 rounded-full glass hover:bg-primary/10  hover:text-primary transition-all"
                onClick={previous}
              >
                <ChevronLeft />
              </button>

              <div className="flex gap-2 mx-4">
                {testimonials.map((_, idx) => (
                  <button
                    onClick={() => setActiveIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === activeIndex ? "w-8 bg-primary " : "bg-muted-foreground/30 hover:bg-muted-foreground/50"}`}
                  />
                ))}
              </div>

              <button
                className="p-3 rounded-full glass hover:bg-primary/10  hover:text-primary transition-all"
                onClick={next}
              >
                <ChevronRight className="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
