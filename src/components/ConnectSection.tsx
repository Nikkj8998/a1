import { motion } from 'framer-motion';
import { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import { Heart, Lightbulb, Users, Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

const ways = [
  {
    icon: Heart,
    title: 'Contribute',
    description: 'Your support directly funds programs that transform lives. Every rupee builds lasting change.',
  },
  {
    icon: Lightbulb,
    title: 'Share Skills',
    description: 'We don\'t just need money. Share your expertise — training, technology, strategy, or connections.',
  },
  {
    icon: Users,
    title: 'Visit Us',
    description: 'Come see our work firsthand. Walk the villages, meet the people, understand the reality.',
  },
];

const ConnectSection = () => {
  return (
    <section id="connect" className="bg-primary py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="font-body text-golden text-sm tracking-[0.2em] uppercase mb-6 block">
              Join the Movement
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-8">
              Connect With Us
            </h2>
            <p className="font-body text-lg text-primary-foreground/80 max-w-3xl mx-auto">
              "Astha" means faith — a personal connection. We invite you not just to give,
              but to be part of something meaningful. Bring your skills, your thoughts, your heart.
            </p>
          </div>
        </ScrollReveal>

        {/* Ways to Connect */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {ways.map((way, index) => (
            <ScrollReveal key={way.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-8 text-center border border-primary-foreground/20"
              >
                <div className="w-16 h-16 rounded-full bg-golden/20 flex items-center justify-center mx-auto mb-6">
                  <way.icon className="w-8 h-8 text-golden" />
                </div>
                <h3 className="font-display text-2xl text-primary-foreground mb-4">{way.title}</h3>
                <p className="font-body text-primary-foreground/70">{way.description}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Contact Info */}
        <ScrollReveal>
          <div className="bg-background rounded-2xl p-8 lg:p-12 grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-display text-3xl text-foreground mb-6">Get in Touch</h3>
              <p className="font-body text-muted-foreground mb-8 leading-relaxed">
                Whether you're an individual looking to make a difference or a corporation
                seeking meaningful CSR partnerships, we'd love to hear from you.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <MapPin className="w-5 h-5 text-accent" />
                  <span className="font-body text-foreground">Velhe Taluka, Pune District, Maharashtra</span>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-accent" />
                  <span className="font-body text-foreground">info@astharural.org</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-5 h-5 text-accent" />
                  <span className="font-body text-foreground">+91 98230 30218</span>
                </div>
              </div>
            </div>

            <div className="bg-secondary rounded-xl p-8">
              <h4 className="font-display text-xl text-foreground mb-6">Send us a message</h4>
              <ContactForm />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ConnectSection;

function ContactForm() {
  const CONTACT_ENDPOINT = 'https://astharural.org/contact.php';
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'error'; message: string } | null>(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);
    setShowSuccessModal(false);

    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload: Record<string, string> = {
      name: String(fd.get('name') || ''),
      email: String(fd.get('email') || ''),
      message: String(fd.get('message') || ''),
      phone: String(fd.get('phone') || ''), // Added phone if user adds it later
    };

    try {
      const res = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const json = await res.json().catch(() => ({}));

      if (res.ok && json.success) {
        setShowSuccessModal(true);
        form.reset();
      } else {
        setStatus({
          type: 'error',
          message: json.message || 'Failed to send message. Please try again.'
        });
      }
    } catch (err) {
      console.error('Contact Form Error:', err);
      setStatus({ type: 'error', message: 'Network error. Please try again later.' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <input
        name="name"
        type="text"
        placeholder="Your Name"
        required
        className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none font-body"
      />

      <input
        name="email"
        type="email"
        placeholder="Email Address"
        required
        className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none font-body"
      />

      <textarea
        name="message"
        placeholder="How would you like to connect?"
        rows={4}
        required
        className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none font-body resize-none"
      />

      {status && (
        <div className="text-red-500 text-sm font-body px-1">
          {status.message}
        </div>
      )}

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        disabled={submitting}
        className="w-full py-4 bg-primary text-primary-foreground rounded-lg font-body font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50"
      >
        {submitting ? 'Sending…' : 'Start the Conversation'}
      </motion.button>

      <SuccessModal open={showSuccessModal} onOpenChange={setShowSuccessModal} />
    </form>
  );
}

function SuccessModal({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] text-center p-12">
        <DialogHeader>
          <div className="w-20 h-20 bg-golden/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-golden" />
          </div>
          <DialogTitle className="font-display text-3xl text-primary mb-2">Message Received!</DialogTitle>
          <DialogDescription className="font-body text-lg text-muted-foreground leading-relaxed">
            Thank you for reaching out to Astha Foundation. <br />
            We've sent a confirmation email to you and our team will get back to you shortly.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onOpenChange(false)}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-body font-semibold hover:shadow-lg transition-all"
          >
            Wonderful
          </motion.button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
