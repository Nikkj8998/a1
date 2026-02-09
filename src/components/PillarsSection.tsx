import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import ruralYouth from '@/assets/rural-youth.jpg';
import womanFarmer from '@/assets/woman-farmer.jpg';
import elderlyDignity from '@/assets/elderly-dignity.jpg';

const pillars = [
  {
    id: 'youth',
    title: 'Rural Youth',
    subtitle: 'The Forgotten Constituency',
    description: 'Representing 65% of the demography, youth aged 15-35 are a priority section we aim to empower and build into future pillars for society. By equipping them to be productive, we ensure they strengthen the social and political economy rather than becoming a burden on their families.',
    image: ruralYouth,
    stats: '65%',
    statsLabel: 'Youth unemployment in rural India',
  },
  {
    id: 'women',
    title: 'Women Farmers',
    subtitle: 'The Invisible Backbone',
    description: 'Women make up 49% of the population and contribute 63% of the productive workforce, yet they own only 1% of national assets. We focus on this priority section of society to address this skewed economic distribution and empower the active hands that "hold half the sky".',
    image: womanFarmer,
    stats: '80%',
    statsLabel: 'Of farm work done by women',
  },
  {
    id: 'elderly',
    title: 'The Elderly',
    subtitle: 'Dignity in Twilight',
    description: 'As a priority section of society, the elderly shape the aspirations of the youth but often face lonely and neglected lives without adequate health care or nutrition. We focus on their psychological and physical well-being because their status directly impacts the morale of the coming generations who will one day enter this age group',
    image: elderlyDignity,
    stats: '71%',
    statsLabel: 'Elderly feel neglected in villages',
  },
];

const PillarsSection = () => {
  return (
    <section id="pillars" className="bg-forest-dark py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <div className="text-center mb-20">
            <span className="font-body text-golden text-sm tracking-[0.2em] uppercase mb-6 block">
              आस्था — About Whom?
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-cream mb-6">
              Our Priority Sections
            </h2>
            <p className="font-body text-lg text-cream/70 max-w-3xl mx-auto">
              If a society neglects these three groups, that society's progress becomes impossible.
              Our work centers on restoring their dignity and power.
            </p>
          </div>
        </ScrollReveal>

        {/* Pillars */}
        <div className="space-y-32">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.id}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
            >
              {/* Image */}
              <ScrollReveal
                direction={index % 2 === 0 ? 'left' : 'right'}
                className={index % 2 === 1 ? 'lg:order-2' : ''}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.5 }}
                  className="relative overflow-hidden rounded-lg aspect-[4/5] lg:aspect-[3/4]"
                >
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/60 to-transparent" />

                  {/* Stats Badge */}
                  <div className="absolute bottom-6 left-6 bg-golden/90 backdrop-blur-sm px-6 py-4 rounded">
                    <span className="font-display text-3xl text-forest-dark font-bold block">
                      {pillar.stats}
                    </span>
                    <span className="font-body text-xs text-forest-dark/80 uppercase tracking-wider">
                      {pillar.statsLabel}
                    </span>
                  </div>
                </motion.div>
              </ScrollReveal>

              {/* Content */}
              <ScrollReveal
                direction={index % 2 === 0 ? 'right' : 'left'}
                delay={0.2}
                className={index % 2 === 1 ? 'lg:order-1' : ''}
              >
                <div>
                  <span className="font-body text-golden/80 text-sm tracking-[0.15em] uppercase mb-4 block">
                    {pillar.subtitle}
                  </span>
                  <h3 className="font-display text-4xl md:text-5xl text-cream mb-6">
                    {pillar.title}
                  </h3>
                  <p className="font-body text-lg text-cream/70 leading-relaxed mb-8">
                    {pillar.description}
                  </p>
                  <div className="w-20 h-1 bg-golden rounded" />
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;
