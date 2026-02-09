import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';
import goatFarming from '@/assets/goat-farming.jpg';
import landscapeImage from '@/assets/landscape-western-ghats.jpg';
import { Sprout, Sun, Leaf, Scale, Heart, ChevronRight } from 'lucide-react';

const programs = [
  {
    category: 'Economic Empowerment',
    icon: Sprout,
    items: [
      {
        title: 'Swadhar',
        description: 'Collaborative initiative with Jnana Prabodhini focusing on livelihood, environment, and governance in Velhe Block.',
        link: '/swadhar'
      },
      {
        title: 'Equipment Bank',
        description: 'Farmers can\'t afford equipment, so we buy it and rent it out. This allows them to continue farming instead of quitting due to capital costs. Supported by Persistent Systems.',
        link: '/agri-equipment-bank'
      },
      {
        title: 'Organic Farming',
        description: 'Demonstrations and training programs that transition farmers to sustainable, chemical-free agriculture while improving yields and income.',
        link: '/organic-farming'
      },
    ],
  },
  {
    category: 'Livestock & Infrastructure',
    icon: Heart,
    items: [
      {
        title: 'Solar Power',
        description: 'Providing solar-powered street and home lighting in three villages of Velhe Block, sponsored by Xoriant.',
        link: '/solar-power'
      },
      {
        title: 'E-Riksha',
        description: 'Targeted transport project providing mobility for school children, patients, and senior citizens in the 18 Gav Maval region.',
        link: '/e-riksha'
      },
      {
        title: 'Bamboo Plantation Feasibility Study',
        description: 'Conducted a study with the Maharashtra Bamboo Promotion Foundation to test bamboo as a resilient crop for the Velhe region.',
        link: '/bamboo-plantation-study'
      },
    ],
  },
];

const conservation = {
  title: 'Environmental Conservation',
  icon: Leaf,
  items: [
    { label: 'Solar Water Pumps', desc: 'Clean energy for irrigation' },
    { label: 'Solar Lamps', desc: '25+ villages protected from wildlife' },
    { label: 'Biogas Plants', desc: 'Sustainable cooking fuel' },
    { label: 'Biodiversity Study', desc: '84 plants, 52 mammals, 92 birds documented' },
  ],
};

const ProgramsSection = () => {
  const navigate = useNavigate();

  return (
    <section id="programs" className="section-padding bg-cream">
      <div className="container-wide">
        <ScrollReveal>
          <div className="text-center mb-20">
            <span className="font-body text-accent text-sm tracking-[0.2em] uppercase mb-6 block">
              Our Work
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              Programs That Transform
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
              Every initiative is designed not just to provide — but to build lasting capability.
              These are the seeds of self-reliance.
            </p>
          </div>
        </ScrollReveal>

        {/* Programs Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {programs.map((program, programIndex) => (
            <ScrollReveal key={program.category} delay={programIndex * 0.1}>
              <div className="bg-background rounded-xl p-8 lg:p-10 shadow-sm border border-border/30 h-full">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <program.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display text-2xl text-foreground">{program.category}</h3>
                </div>

                <div className="space-y-6">
                  {program.items.map((item, index) => (
                    <motion.div 
                      key={item.title}
                      whileHover={{ x: 8 }}
                      onClick={() => item.link && navigate(item.link)}
                      className={`border-l-2 border-golden/50 pl-6 py-2 ${item.link ? 'cursor-pointer' : ''}`}
                    >
                      <div className="flex items-center gap-2 group">
                        <h4 className="font-display text-lg text-foreground mb-2">{item.title}</h4>
                        {item.link && (
                          <ChevronRight className="w-4 h-4 text-golden opacity-0 group-hover:opacity-100 transition-opacity" />
                        )}
                      </div>
                      <p className="font-body text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Conservation Section with Image */}
        <ScrollReveal>
          <div className="grid lg:grid-cols-2 gap-0 rounded-xl overflow-hidden shadow-xl">
            {/* Image */}
            <div className="relative h-80 lg:h-auto">
              <img 
                src={landscapeImage} 
                alt="Western Ghats Landscape"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-transparent lg:bg-gradient-to-t" />
            </div>

            {/* Content */}
            <div className="bg-primary p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-6">
                <Leaf className="w-8 h-8 text-golden" />
                <h3 className="font-display text-2xl lg:text-3xl text-primary-foreground">
                  {conservation.title}
                </h3>
              </div>
              
              <p className="font-body text-primary-foreground/80 mb-8">
                The Western Ghats are among the world's most biodiverse regions. We work to protect 
                this heritage while providing sustainable solutions for rural communities.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {conservation.items.map((item) => (
                  <div key={item.label} className="bg-primary-foreground/10 rounded-lg p-4">
                    <span className="font-display text-sm text-golden block mb-1">{item.label}</span>
                    <span className="font-body text-xs text-primary-foreground/70">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Goat Program Feature */}
        <ScrollReveal className="mt-20">
          <div className="grid lg:grid-cols-5 gap-8 items-center">
            <div className="lg:col-span-2">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="rounded-xl overflow-hidden shadow-xl"
              >
                <img 
                  src="/attached_assets/shared_image_(39)_1768286715112.jpg" 
                  alt="Women with goats in rural village"
                  className="w-full h-80 lg:h-96 object-cover"
                />
              </motion.div>
            </div>
            <div className="lg:col-span-3 lg:pl-8">
              <span className="font-body text-accent text-sm tracking-[0.15em] uppercase mb-4 block">
                Impact Story
              </span>
              <h3 className="font-display text-3xl lg:text-4xl text-foreground mb-6">
                "Others won't sit with us because we smell of goats."
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                That day, one man sold 65 goats because his son couldn't get married due to the stigma. 
                Since then, we transformed goat farming from a source of shame to a path of prosperity.
                <br /><br />
                By introducing fair weighing scales, training paraveterinarians, and building market linkages, 
                we doubled the income of the poorest families. The same goat that fetched ₹800 now sells for ₹1500.
              </p>
              <div className="flex items-center gap-6 text-sm">
                <div>
                  <span className="font-display text-3xl text-primary block">2x</span>
                  <span className="text-muted-foreground">Income Increase</span>
                </div>
                <div className="w-px h-12 bg-border" />
                <div>
                  <span className="font-display text-3xl text-primary block">7</span>
                  <span className="text-muted-foreground">Trained Paravets</span>
                </div>
                <div className="w-px h-12 bg-border" />
                <div>
                  <span className="font-display text-3xl text-primary block">500+</span>
                  <span className="text-muted-foreground">Families Impacted</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProgramsSection;
