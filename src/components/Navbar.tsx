import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logoPurex from "@/assets/logo-purex.jpeg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Products", href: "#products" },
    { label: "Features", href: "#features" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md shadow-md">
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        <a href="#home" className="flex items-center gap-3">
          <img src={logoPurex} alt="Purex Aqua Logo" className="h-10 md:h-14 w-auto rounded" />
          <span className="font-heading font-bold text-lg md:text-xl text-foreground">
            Purex <span className="text-gradient-water">Aqua</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-heading font-medium text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="tel:+919876543210"
          className="hidden md:flex items-center gap-2 gradient-water text-primary-foreground px-5 py-2.5 rounded-full font-heading font-semibold text-sm hover:opacity-90 transition-opacity"
        >
          <Phone className="w-4 h-4" />
          Call Now
        </a>

        {/* Mobile toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-card border-t border-border px-4 pb-4">
          <ul className="flex flex-col gap-3 pt-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block font-heading font-medium text-foreground py-2"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="tel:+919876543210"
            className="mt-3 flex items-center justify-center gap-2 gradient-water text-primary-foreground px-5 py-2.5 rounded-full font-heading font-semibold text-sm"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
