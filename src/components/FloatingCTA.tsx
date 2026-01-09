import { Phone, MessageCircle } from "lucide-react";

const FloatingCTA = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/918586858466?text=Hi%2C%20I%20need%20legal%20assistance%20regarding%20my%20frozen%20bank%20account."
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
        aria-label="WhatsApp Support"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="hidden group-hover:block whitespace-nowrap pr-2 animate-fade-in">
          WhatsApp Us
        </span>
      </a>

      {/* Phone Button */}
      <a
        href="tel:+918586858466"
        className="group flex items-center gap-3 bg-primary text-primary-foreground p-4 rounded-full shadow-lg glow-gold hover:shadow-xl hover:scale-110 transition-all duration-300"
        aria-label="Call Now"
      >
        <Phone className="w-6 h-6" />
        <span className="hidden group-hover:block whitespace-nowrap pr-2 animate-fade-in">
          Call Now
        </span>
      </a>
    </div>
  );
};

export default FloatingCTA;
