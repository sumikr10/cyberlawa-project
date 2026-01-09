import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How quickly can you help unfreeze my bank account?",
    answer:
      "We initiate legal action within 24 hours of engagement. Most cases see significant progress within 7-15 days, depending on the complexity and the authority that issued the freeze order (Police, Cyber Cell, ED, or PMLA).",
  },
  {
    question: "What types of account freezes do you handle?",
    answer:
      "We handle all types of freezes including Police/Cyber Cell orders, ED (Enforcement Directorate) freezes, PMLA (Prevention of Money Laundering Act) orders, debit freezes, salary account blocks, and freezes related to cyber fraud investigations.",
  },
  {
    question: "Can you help recover funds lost in crypto or investment scams?",
    answer:
      "Yes, we specialize in fund recovery from cryptocurrency scams, NFT frauds, and online investment schemes. Our team traces transactions, works with law enforcement, and initiates legal proceedings to maximize recovery chances.",
  },
  {
    question: "Do you provide services outside Kolkata?",
    answer:
      "Absolutely. While our office is in Ghaziabad, Uttar Pradesh, we provide Pan-India legal support. We have successfully handled cases across multiple states and can represent clients in various High Courts across India.",
  },
  {
    question: "What documents do I need to provide for account unfreeze?",
    answer:
      "Typically, you'll need bank statements, the freeze notice (if received), identity documents, business documents (if applicable), and any communication from investigating agencies. We'll guide you through the exact requirements during our initial consultation.",
  },
  {
    question: "How can I reach you in case of an emergency?",
    answer:
      "We offer 24/7 emergency support. Call us at +91 85868 58466 or reach out via WhatsApp at +91 85868 58466. For urgent matters outside business hours, WhatsApp typically gets the fastest response.",
  },
  {
    question: "What are your consultation fees?",
    answer:
      "We offer a free initial consultation to understand your case. Fee structure depends on the complexity and type of legal matter. We believe in transparent pricing and will provide a clear fee estimate before proceeding.",
  },
  {
    question: "How do you handle online defamation cases?",
    answer:
      "We take a multi-pronged approach: sending legal notices for content removal, filing cases under IT Act provisions, working with platforms for takedowns, and pursuing civil remedies for damages. Quick action is crucial in defamation matters.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 bg-card relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            FAQs
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Frequently Asked{" "}
            <span className="text-gradient-gold">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get answers to common questions about our cyber crime legal services
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background border border-border rounded-lg px-6 data-[state=open]:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="text-left font-serif text-lg font-semibold text-foreground hover:text-primary py-6 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* JSON-LD Schema for FAQs */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            }),
          }}
        />
      </div>
    </section>
  );
};

export default FAQSection;
