import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, ShieldAlert, Clock, Scale } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 bg-hero-gradient overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Gradient Overlays */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-primary/10 to-transparent blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-radial from-primary/5 to-transparent blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Urgency Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/20 border border-destructive/30 text-destructive mb-8 animate-pulse-slow">
            <ShieldAlert className="w-5 h-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Emergency Legal Assistance
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight mb-6 animate-fade-in-up">
            <span className="text-gradient-gold">Bank Account Frozen?</span>
            <br />
            <span className="text-foreground">Debit Freeze?</span>
          </h1>

          {/* Subheadline */}
          <p
            className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            Get Immediate Legal Intervention
          </p>

          <h2
            className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-6 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Mayank Singh – India's Trusted Cyber Crime Advocate
          </h2>

          <p
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            Specialists in Account Unfreezing, PMLA Freezes, Cyber Fraud Defense
            & Fund Recovery
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <a href="tel:+918586858466">
              <Button variant="gold" size="xl" className="w-full sm:w-auto">
                <Phone className="w-5 h-5" />
                Call Now: +91 85868 58466
              </Button>
            </a>
            <a
              href="https://wa.me/918586858466?text=Hi%2C%20I%20need%20legal%20assistance%20regarding%20my%20frozen%20bank%20account."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="whatsapp" size="xl" className="w-full sm:w-auto">
                <MessageCircle className="w-5 h-5" />
                WhatsApp 24/7 Support
              </Button>
            </a>
          </div>

          {/* Trust Indicators */}
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="flex items-center justify-center gap-3 p-4 rounded-lg bg-card/50 border border-border">
              <Clock className="w-6 h-6 text-primary" />
              <span className="text-sm text-foreground">24 Hour Response</span>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 rounded-lg bg-card/50 border border-border">
              <Scale className="w-6 h-6 text-primary" />
              <span className="text-sm text-foreground">
                500+ Cases Handled
              </span>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 rounded-lg bg-card/50 border border-border">
              <ShieldAlert className="w-6 h-6 text-primary" />
              <span className="text-sm text-foreground">Pan-India Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
