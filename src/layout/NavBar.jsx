import { Menu, X } from "lucide-react";
import Button from "../components/Button";
import { useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contactMe", label: "Contact Me"}
];
const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 bg-gray-700 py-5 right-0 z-50 rounded-br-3xl rounded-bl-3xl">
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          className="text-xl font-bold tracking-tight hover:text-primary"
        >
          Ethayen<span className="text-primary">.</span>
        </a>

        <div className="items-center gap-1 hidden md:flex">
          <div className=" glass rounded-full px-2 py-1 flex items-center gap-1">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-primary  rounded-full hover:bg-surface  transition-all duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* CTA
        <div className="hidden md:block">
          <Button size="sm">Contact Me</Button>
        </div> */}

        {/* Mobile Nav */}

        <button
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground cursor-pointer"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* mobile menu */}
      </nav>
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg text-muted-foreground hover:text-foreground py-2"
              >
                {link.label}
              </a>
            ))}
            {/* <Button onClick={() => setIsMobileMenuOpen(false)}>
              Contact Me
            </Button> */}
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
