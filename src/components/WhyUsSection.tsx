import { CheckCircle, ShieldCheck, Zap, HeadphonesIcon, Globe, Award } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "500+ Cyber Crime Matters",
    description: "Extensive experience handling complex cyber crime and financial fraud cases across India",
  },
  {
    icon: ShieldCheck,
    title: "High Success Rate",
    description: "Proven track record in account unfreezing and fund recovery with 98% success rate",
  },
  {
    icon: Zap,
    title: "24-Hour Legal Action",
    description: "We initiate legal proceedings within 24 hours of engagement for urgent matters",
  },
  {
    icon: Globe,
    title: "Pan-India Jurisdiction",
    description: "Legal support across all states with expertise in multiple High Courts",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Client Assistance",
    description: "Round-the-clock support via phone and WhatsApp for emergency situations",
  },
  {
    icon: CheckCircle,
    title: "Transparent Process",
    description: "Clear communication and regular updates on your case progress",
  },
];

const WhyUsSection = () => {
  return (
    <section id="why-us" className="py-24 bg-background relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why <span className="text-gradient-gold">Mayank Singh</span> Law Firm?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by hundreds of clients across India for expert cyber crime legal representation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
