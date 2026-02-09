import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { MapPin, Users, Leaf, ArrowRight } from "lucide-react";

const visionItems = [
  {
    icon: MapPin,
    title: "Across the state of Maharashtra",
    description:
      "Creating a development prototype in the 18-village cluster of Velhe Taluka. A model that can be replicated across rural India.",
  },
  {
    icon: Users,
    title: "Stop Distress Migration",
    description:
      "Creating local economic viability so people can live in their villages with satisfaction, not flee to cities out of desperation.",
  },
  {
    icon: Leaf,
    title: "Conserve the Western Ghats",
    description:
      "Protecting one of the world's most biodiverse regions while creating sustainable livelihoods for communities that call it home.",
  },
];

const VisionSection = () => {
  return (
    <section
      id="vision"
      className="section-padding bg-cream relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-golden rounded-full blur-3xl" />
      </div>

      <div className="container-wide relative z-10">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center mb-20">
            <span className="font-body text-accent text-sm tracking-[0.2em] uppercase mb-6 block">
              The Road Ahead
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-8">
              Our 5-Year Vision
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              A cluster of villages needs to be developed, not just one. We want
              to create a model of area development that proves sustainable
              transformation is possible — and replicable.
            </p>
          </div>
        </ScrollReveal>

        {/* Vision Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {visionItems.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 0.15}>
              <motion.div
                whileHover={{ y: -12, scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="bg-background p-8 lg:p-10 rounded-xl shadow-lg border border-border/30 h-full group"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-2xl text-foreground mb-4">
                  {item.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Quote */}
        <ScrollReveal className="mt-24">
          <div className="bg-forest-dark rounded-2xl p-8 lg:p-16 text-center">
            <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl text-cream italic mb-8 leading-relaxed">
              "We want to hand this work over to capable people, not keep it in
              our control. Our goal is to make ourselves unnecessary."
            </blockquote>
            <p className="font-body text-golden tracking-wider uppercase text-sm">
              — The Founders of Astha
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default VisionSection;
