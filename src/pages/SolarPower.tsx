import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Lightbulb, MapPin, Building2, ShieldCheck, Zap, ChevronRight, Wrench } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import solarHero from '../assets/solar-hero.png';
import solarImpact from '../assets/solar-impact.png';

const SolarPower = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      
      <main className="pt-0">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-forest-dark">
          <div className="absolute inset-0 opacity-40">
            <img 
              src={solarHero} 
              alt="Solar Power Initiative" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container-wide relative z-10 text-center">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-body text-golden text-sm tracking-[0.2em] uppercase mb-6 block"
            >
              Infrastructure Development
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-5xl md:text-8xl text-cream mb-8 leading-tight"
            >
              Solar Power
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-body text-xl md:text-2xl text-cream/80 max-w-3xl mx-auto leading-relaxed"
            >
              Illuminating lives through sustainable solar-powered street and home lighting in rural Velhe.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-12"
            >
              <div className="animate-bounce inline-block p-2 rounded-full border border-cream/20">
                <ChevronRight className="w-6 h-6 text-cream rotate-90" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Project Overview */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <ScrollReveal>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img src={solarImpact} alt="Solar Impact" className="w-full h-full object-cover" />
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div>
                  <h2 className="font-display text-4xl text-foreground mb-8 text-primary">Lighting the Way</h2>
                  <p className="font-body text-lg text-muted-foreground mb-8 leading-relaxed">
                    The Solar Power project focuses on providing both street lighting and home lighting to improve safety and quality of life across three villages in the Velhe Block.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-border/50">
                      <MapPin className="w-8 h-8 text-primary mb-4" />
                      <h3 className="font-display text-lg mb-2">Target Area</h3>
                      <p className="font-body text-sm text-muted-foreground">Specifically implemented in three core villages of Velhe Block.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-border/50">
                      <Building2 className="w-8 h-8 text-primary mb-4" />
                      <h3 className="font-display text-lg mb-2">Sponsorship</h3>
                      <p className="font-body text-sm text-muted-foreground">Collaboratively powered by Xoriant.</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Analogy Section */}
        <section className="section-padding bg-primary/5">
          <div className="container-wide">
            <div className="bg-forest-dark rounded-3xl p-8 md:p-16 text-center text-cream relative overflow-hidden">
              <div className="relative z-10 max-w-4xl mx-auto">
                <h2 className="font-display text-3xl md:text-4xl mb-8 text-golden italic">"Luminous Trees in the Village"</h2>
                <p className="font-body text-xl leading-relaxed opacity-90 mb-8">
                  Think of solar lights as "luminous trees" planted in the villages. Once fully rooted, they require minimal fuel but need regular "pruning" — oversight and maintenance — to ensure they continue to provide safety and light to the community.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Scope & Status */}
        <section className="section-padding bg-cream">
          <div className="container-wide">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="font-display text-4xl text-foreground mb-4">Project Scope & Status</h2>
                <p className="font-body text-muted-foreground">From initial execution to long-term oversight.</p>
              </div>
            </ScrollReveal>
            <div className="grid md:grid-cols-3 gap-8">
              <ScrollReveal delay={0.1}>
                <div className="bg-white p-8 rounded-2xl h-full shadow-sm border-b-4 border-primary">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-xl mb-4">Infrastructure</h3>
                  <p className="font-body text-muted-foreground text-sm">
                    Providing solar-powered street and home lighting to improve rural safety and utility.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="bg-white p-8 rounded-2xl h-full shadow-sm border-b-4 border-golden">
                  <div className="w-12 h-12 bg-golden/10 rounded-full flex items-center justify-center mb-6 text-golden">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-xl mb-4">Execution Status</h3>
                  <p className="font-body text-muted-foreground text-sm">
                    As of September 2025, the project is actively under execution with installations progressing.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <div className="bg-white p-8 rounded-2xl h-full shadow-sm border-b-4 border-primary">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                    <Wrench className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-xl mb-4">Future Oversight</h3>
                  <p className="font-body text-muted-foreground text-sm">
                    Committed to long-term maintenance for 2025–26 to ensure lasting community impact.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SolarPower;
