import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const stats = [
  { value: 18, suffix: '', label: 'Villages in Cluster', description: 'Maval region, Velhe Taluka' },
  { value: 15, suffix: '+', label: 'Years of Service', description: 'Founded by NABARD officers' },
  { value: 84, suffix: '', label: 'Plants Documented', description: 'Biodiversity study' },
  { value: 92, suffix: '', label: 'Bird Species', description: 'Catalogued in Western Ghats' },
];

const partners = [
  'Coforge',
  'Persistent Systems',
  'Zoriant',
];

const CountUp = ({ value, suffix }: { value: number; suffix: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      className="font-display text-5xl md:text-6xl lg:text-7xl text-golden font-bold"
    >
      {isInView ? (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {value}{suffix}
        </motion.span>
      ) : '0'}
    </motion.span>
  );
};

const ImpactSection = () => {
  return (
    <section id="impact" className="bg-earth py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <div className="text-center mb-20">
            <span className="font-body text-golden/80 text-sm tracking-[0.2em] uppercase mb-6 block">
              Our Impact
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-earth-foreground mb-6">
              Numbers That Matter
            </h2>
            <p className="font-body text-lg text-earth-foreground/70 max-w-3xl mx-auto">
              Beyond statistics, these represent lives transformed, dignity restored, and communities 
              that now believe in their own power.
            </p>
          </div>
        </ScrollReveal>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-20">
          {stats.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 0.1}>
              <div className="text-center">
                <CountUp value={stat.value} suffix={stat.suffix} />
                <h3 className="font-display text-xl text-earth-foreground mt-4 mb-2">{stat.label}</h3>
                <p className="font-body text-sm text-earth-foreground/60">{stat.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Partners */}
        <ScrollReveal>
          <div className="border-t border-earth-foreground/20 pt-12">
            <p className="font-body text-sm text-earth-foreground/60 text-center mb-8 tracking-wide uppercase">
              Trusted Partners in Transformation
            </p>
            <div className="flex flex-wrap justify-center items-center gap-12">
              {partners.map((partner) => (
                <motion.span 
                  key={partner}
                  whileHover={{ scale: 1.05 }}
                  className="font-display text-xl md:text-2xl text-earth-foreground/80 hover:text-golden transition-colors cursor-default"
                >
                  {partner}
                </motion.span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ImpactSection;
