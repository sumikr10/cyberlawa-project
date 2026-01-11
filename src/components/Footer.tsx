import { Phone, MessageCircle, MapPin, Scale } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                <span className="text-primary-foreground font-serif font-bold text-xl sm:text-2xl">
                  M
                </span>
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-serif text-lg sm:text-xl font-bold text-foreground">
                  Mayank Singh
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Cyber Crime & Financial Fraud Law Firm
                </p>
              </div>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 max-w-md leading-relaxed">
              Specialized in Account Unfreezing, Fund Recovery, PMLA Defense &
              Cyber Litigation. Serving clients across India with 24/7 legal
              support.
            </p>
            <div className="flex items-start sm:items-center gap-2 text-primary">
              <Scale className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5 sm:mt-0" />
              <span className="text-xs sm:text-sm font-medium leading-relaxed">
                Ghaziabad, Uttar Pradesh | Pan-India Legal Support
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-base sm:text-lg font-semibold text-foreground mb-4 sm:mb-6">
              Quick Links
            </h4>
            <ul className="space-y-2 sm:space-y-3">
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
                    className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors inline-block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-base sm:text-lg font-semibold text-foreground mb-4 sm:mb-6">
              Contact Us
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-2 sm:gap-3 text-muted-foreground">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-1" />

                <span className="flex flex-col gap-1 min-w-0 flex-1">
                  <a
                    href="tel:+918586858466"
                    className="text-sm sm:text-base hover:text-primary transition-colors break-all"
                  >
                    +91 85868 58466
                  </a>

                  <a
                    href="tel:+919625858466"
                    className="text-sm sm:text-base hover:text-primary transition-colors break-all"
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
                  className="flex items-center gap-2 sm:gap-3 text-muted-foreground hover:text-[#25D366] transition-colors"
                >
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#25D366] flex-shrink-0" />
                  <span className="text-sm sm:text-base break-all">+91 85868 58466</span>
                </a>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-1" />
                <a
                  href="https://maps.app.goo.gl/n4Mh2zF5MuhWwxQSA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base hover:text-primary transition-colors leading-relaxed"
                >
                  Chamber no .06, RdC Gate, District and Session court,
                  <br />
                  6/155, RDC, Block 1, P & T Colony, Raj Nagar,
                  <br />
                  Ghaziabad, Uttar Pradesh 201002
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
            <p className="text-xs sm:text-sm text-muted-foreground text-center md:text-left leading-relaxed">
              © {currentYear} Mayank Singh – Cyber Crime & Financial Fraud Law
              Firm. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors whitespace-nowrap"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors whitespace-nowrap"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors whitespace-nowrap"
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