import { Shield, Scale, Lock, Building2, Wallet, AlertTriangle } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Account Freeze Relief",
    description: "Unfreezing Police / Cyber Cell / ED / PMLA Orders",
    items: [
      "Debit Freeze & Salary Account Restoration",
      "Legal Action for Illegal Loan App Harassment",
      "Emergency Bank Account Access Recovery",
    ],
  },
  {
    icon: Wallet,
    title: "Fund Recovery & Fraud Litigation",
    description: "Complete financial fraud litigation services",
    items: [
      "UPI, ATM, Net Banking & Card Fraud",
      "Crypto / NFT / Investment Scams",
      "Tracing & Chargeback Recovery",
    ],
  },
  {
    icon: Lock,
    title: "Privacy & Data Protection",
    description: "Comprehensive digital protection services",
    items: [
      "Online Defamation Removal",
      "Data Breach Litigation",
      "Cyber Harassment Protection",
    ],
  },
  {
    icon: Building2,
    title: "Corporate Cyber Advisory",
    description: "Enterprise-grade legal cyber solutions",
    items: [
      "Digital Evidence & Forensic Advisory",
      "Copyright & IP Theft Protection",
      "Ransomware & Compliance Defense",
    ],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Core Services
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Specialized Legal <span className="text-gradient-gold">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive cyber crime and financial fraud legal solutions tailored for individuals and businesses
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 rounded-2xl bg-card-gradient border border-border hover:border-primary/50 transition-all duration-500 shadow-elevated hover:shadow-2xl"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <AlertTriangle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
