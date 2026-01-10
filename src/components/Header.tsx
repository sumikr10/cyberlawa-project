import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Why Us", href: "#why-us" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-serif font-bold text-xl">
                M
              </span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-serif text-lg font-semibold text-foreground leading-tight">
                Mayank Singh
              </h1>
              <p className="text-xs text-muted-foreground">
                Cyber Crime Law Firm
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+918586858466">
              <Button variant="goldOutline" size="sm">
                <Phone className="w-4 h-4" />
                Call Now
              </Button>
            </a>
            <a
              href="https://wa.me/919547524526?text=Hi%2C%20I%20need%20legal%20assistance%20regarding%20my%20frozen%20bank%20account."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="whatsapp" size="sm">
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-border">
                <a href="tel:+918586858466">
                  <Button variant="gold" className="w-full">
                    <Phone className="w-4 h-4" />
                    Call: +91 85868 58466
                  </Button>
                </a>
                <a
                  href="https://wa.me/918586858466?text=Hi%2C%20I%20need%20legal%20assistance%20regarding%20my%20frozen%20bank%20account."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="whatsapp" className="w-full">
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp Support
                  </Button>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
