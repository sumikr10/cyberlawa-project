import React, { useState, ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Send,
  CheckCircle,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzv_QHEYarfgcFsqis-nltEXwFJ6M28OEjaKMRvWo9AvgJjGdSyEQBFg0Tx4chDMEo/exec";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.phone.trim() || formData.phone.length < 10) {
      newErrors.phone = "Please enter a valid phone number";
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
      isValid = false;
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
      isValid = false;
    }

    if (!formData.message.trim() || formData.message.length < 10) {
      newErrors.message = "Please provide more details";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      console.log("Submitting to Google Sheets...", formData);

      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("subject", formData.subject);
      formDataToSend.append("message", formData.message);
      formDataToSend.append("timestamp", new Date().toISOString());

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: formDataToSend,
      });

      console.log("Response status:", response.status);
      const responseText = await response.text();
      console.log("Response text:", responseText);

      if (response.ok) {
        setIsSubmitted(true);
        toast({
          title: "Message Sent Successfully!",
          description: "We'll get back to you within 24 hours.",
        });

        setFormData({
          name: "",
          phone: "",
          email: "",
          subject: "",
          message: "",
        });

        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast({
        title: "Something went wrong",
        description:
          "Please try calling us directly or send a WhatsApp message.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-background relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Get In Touch
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Contact <span className="text-gradient-gold">Us Today</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Facing a bank account freeze or cyber fraud? Get immediate legal
            consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="p-6 rounded-xl bg-card border border-border">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
                Quick Contact
              </h3>

              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 rounded-lg bg-background hover:bg-primary/5 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>

                  <div className="whitespace-nowrap">
                    <p className="text-sm text-muted-foreground">Call Us</p>

                    <p className="text-lg font-semibold text-foreground flex items-center gap-1">
                      <a
                        href="tel:+918586858466"
                        className="hover:text-primary transition-colors"
                      >
                        +91 85868 58466
                      </a>

                      <span className="mx-1">|</span>

                      <a
                        href="tel:+919625858466"
                        className="hover:text-primary transition-colors"
                      >
                        +91 96258 58466
                      </a>
                    </p>
                  </div>
                </div>

                <a
                  href="https://wa.me/918586858466?text=Hi%2C%20I%20need%20legal%20assistance%20regarding%20my%20frozen%20bank%20account."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-background hover:bg-[#25D366]/5 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#25D366]/10 flex items-center justify-center group-hover:bg-[#25D366]/20 transition-colors">
                    <MessageCircle className="w-6 h-6 text-[#25D366]" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      WhatsApp 24/7
                    </p>
                    <p className="text-lg font-semibold text-foreground">
                      +91 85868 58466
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-background">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Office Address
                    </p>
                    <p className="text-foreground">
                      Chamber no .06, RdC Gate, District and Session court,
                      6/155, RDC, Block 1, P & T Colony,
                    </p>
                    <p className="text-foreground">
                      Raj Nagar, Ghaziabad, Uttar Pradesh 201002
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-background">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Working Hours
                    </p>
                    <p className="text-foreground font-semibold">
                      24/7 Emergency Support Available
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          {/* <div className="p-8 rounded-xl bg-card border border-border">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
              Send a Message
            </h3>

            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-2">
                  Message Sent!
                </h4>
                <p className="text-muted-foreground">
                  We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name *"
                      value={formData.name}
                      onChange={handleChange}
                      className={`bg-background ${
                        errors.name ? "border-destructive" : ""
                      }`}
                    />
                    {errors.name && (
                      <p className="text-sm text-destructive mt-1">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <Input
                      name="phone"
                      placeholder="Phone Number *"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`bg-background ${
                        errors.phone ? "border-destructive" : ""
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-sm text-destructive mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={handleChange}
                    className={`bg-background ${
                      errors.email ? "border-destructive" : ""
                    }`}
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive mt-1">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <Input
                    name="subject"
                    placeholder="Subject (e.g., Account Freeze, Cyber Fraud) *"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`bg-background ${
                      errors.subject ? "border-destructive" : ""
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-sm text-destructive mt-1">
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Describe your situation in detail... *"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={`bg-background resize-none ${
                      errors.message ? "border-destructive" : ""
                    }`}
                  />
                  {errors.message && (
                    <p className="text-sm text-destructive mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                <Button
                  onClick={handleSubmit}
                  variant="gold"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  By submitting, you agree to our privacy policy. Your
                  information is secure.
                </p>
              </div>
            )}
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
