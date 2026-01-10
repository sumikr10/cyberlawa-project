import { Phone, MessageCircle, MapPin, Scale } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-serif font-bold text-2xl">
                  M
                </span>
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-foreground">
                  Mayank Singh
                </h3>
                <p className="text-sm text-muted-foreground">
                  Cyber Crime & Financial Fraud Law Firm
                </p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Specialized in Account Unfreezing, Fund Recovery, PMLA Defense &
              Cyber Litigation. Serving clients across India with 24/7 legal
              support.
            </p>
            <div className="flex items-center gap-2 text-primary">
              <Scale className="w-5 h-5" />
              <span className="text-sm font-medium">
                Ghaziabad, Uttar Pradesh | Pan-India Legal Support
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-foreground mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                "Home",
                "Services",
                "About",
                "Why Us",
                "Testimonials",
                "Contact",
              ].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-foreground mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-muted-foreground whitespace-nowrap">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />

                <span className="flex items-center gap-1">
                  <a
                    href="tel:+918586858466"
                    className="hover:text-primary transition-colors"
                  >
                    +91 85868 58466
                  </a>

                  <span className="mx-1">,</span>

                  <a
                    href="tel:+919625858466"
                    className="hover:text-primary transition-colors"
                  >
                    +91 96258 58466
                  </a>
                </span>
              </li>
              <li>
                <a
                  href="https://wa.me/918586858466"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-[#25D366] transition-colors"
                >
                  <MessageCircle className="w-5 h-5 text-[#25D366]" />
                  +91 85868 58466
                </a>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span>
                  Chamber no .06, RdC Gate, District and Session court,
                  <br />
                  6/155, RDC, Block 1, P & T Colony, Raj Nagar,
                  <br />
                  Ghaziabad, Uttar Pradesh 201002
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} Mayank Singh – Cyber Crime & Financial Fraud Law
              Firm. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Disclaimer
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
