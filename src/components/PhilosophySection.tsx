import ScrollReveal from './ScrollReveal';
import { motion } from 'framer-motion';

const PhilosophySection = () => {
  return (
    <section id="philosophy" className="section-padding bg-cream">
      <div className="container-wide">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center">
            <span className="font-body text-accent text-sm tracking-[0.2em] uppercase mb-6 block">
              Our Philosophy
            </span>
            
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-8 text-balance">
              Not Charity.{' '}
              <span className="text-primary">Empowerment.</span>
            </h2>

            <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed mb-12">
              "Astha" is not pity. It is not worry. It is <em>faith</em> — a deep internal relationship 
              built on love and respect. We don't give help; we awaken the <strong>power within</strong>. 
              Helping them to help themselves.
            </p>
          </div>
        </ScrollReveal>

        {/* Philosophy Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {[
            {
              title: 'Power Within',
              description: 'Not "Power Over" — we believe in igniting the inherent capability that already exists within every individual.',
              icon: '🌱',
            },
            {
              title: 'Dignity First',
              description: 'Every person we work with is treated as a partner, not a beneficiary. Their voice shapes our path.',
              icon: '🤝',
            },
            {
              title: 'Sustainable Change',
              description: 'Quick fixes don\'t last. We invest in transformation that grows stronger with time.',
              icon: '🔄',
            },
          ].map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 0.15}>
              <motion.div 
                whileHover={{ y: -8 }}
                className="bg-background p-8 rounded-lg shadow-sm border border-border/50 h-full"
              >
                <span className="text-4xl mb-4 block">{item.icon}</span>
                <h3 className="font-display text-2xl text-foreground mb-4">{item.title}</h3>
                <p className="font-body text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
