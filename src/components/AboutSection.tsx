import { Scale, Users, Clock, MapPin } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-card relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              About the Firm
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              India's Premier <span className="text-gradient-gold">Cyber Crime</span> Law Practice
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg">
              <p>
                <strong className="text-foreground">Mayank Singh – Cyber Crime & Financial Fraud Law Firm</strong> is a specialized cyber litigation practice dedicated to helping individuals and businesses navigate complex digital legal challenges.
              </p>
              <p>
                We specialize in Bank Account Freezes, Cyber Fraud Allegations, PMLA / Investigation Agency Orders, Cryptocurrency & Online Investment Scams, and Debit Freeze & Transaction Blocks.
              </p>
              <p className="font-semibold text-primary">
                We initiate legal action within 24 hours to restore financial access and protect your reputation.
              </p>
            </div>
          </div>

          {/* Right Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="p-8 rounded-2xl bg-background border border-border text-center group hover:border-primary/50 transition-all duration-300">
              <Scale className="w-10 h-10 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <div className="font-serif text-4xl font-bold text-foreground mb-2">500+</div>
              <p className="text-muted-foreground">Cases Handled</p>
            </div>
            <div className="p-8 rounded-2xl bg-background border border-border text-center group hover:border-primary/50 transition-all duration-300">
              <Users className="w-10 h-10 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <div className="font-serif text-4xl font-bold text-foreground mb-2">98%</div>
              <p className="text-muted-foreground">Success Rate</p>
            </div>
            <div className="p-8 rounded-2xl bg-background border border-border text-center group hover:border-primary/50 transition-all duration-300">
              <Clock className="w-10 h-10 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <div className="font-serif text-4xl font-bold text-foreground mb-2">24hrs</div>
              <p className="text-muted-foreground">Rapid Response</p>
            </div>
            <div className="p-8 rounded-2xl bg-background border border-border text-center group hover:border-primary/50 transition-all duration-300">
              <MapPin className="w-10 h-10 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <div className="font-serif text-4xl font-bold text-foreground mb-2">Pan-India</div>
              <p className="text-muted-foreground">Coverage</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
