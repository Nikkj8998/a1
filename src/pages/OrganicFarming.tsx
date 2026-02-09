import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Leaf, Droplets, GraduationCap, LineChart, ChevronRight, Recycle, ShieldCheck, Sprout } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import organicHero from '../assets/organic-hero.png';
import organicInputs from '../assets/organic-inputs.png';

const OrganicFarming = () => {
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
              src="/attached_assets/shared_image_(23)_1768279646697.jfif" 
              alt="Organic Farming" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container-wide relative z-10 text-center">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-body text-golden text-sm tracking-[0.2em] uppercase mb-6 block"
            >
              Sustainable Agriculture
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-5xl md:text-8xl text-cream mb-8 leading-tight"
            >
              Organic Farming
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-body text-xl md:text-2xl text-cream/80 max-w-3xl mx-auto leading-relaxed"
            >
              Moving away from chemical dependency toward economically viable and ecologically sound practices.
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

        {/* Addressing the Chemical Crisis */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <ScrollReveal>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img src={organicInputs} alt="Bio-inputs" className="w-full h-full object-cover" />
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div>
                  <h2 className="font-display text-4xl text-foreground mb-8 text-primary">Addressing the Chemical Crisis</h2>
                  <p className="font-body text-lg text-muted-foreground mb-8 leading-relaxed">
                    Our initiative is a direct response to the deterioration of soil nutrition caused by chemical fertilisers. 
                    We focus on restoring soil health and ensuring economic viability for small-scale landholders.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-border/50">
                      <ShieldCheck className="w-8 h-8 text-primary mb-4" />
                      <h3 className="font-display text-lg mb-2">Health Restoration</h3>
                      <p className="font-body text-sm text-muted-foreground">Removing chemical residues affecting local populations.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-border/50">
                      <Recycle className="w-8 h-8 text-primary mb-4" />
                      <h3 className="font-display text-lg mb-2">Economically Sound</h3>
                      <p className="font-body text-sm text-muted-foreground">Reducing dependency on expensive external inputs.</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Bio-Inputs & Support */}
        <section className="section-padding bg-primary/5">
          <div className="container-wide">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="font-display text-4xl text-foreground mb-4">Provision of Organic Bio-Inputs</h2>
                <p className="font-body text-muted-foreground max-w-2xl mx-auto">
                  Providing essential organic bio-inputs to restore soil texture and nutrient levels across the Pasali Valley.
                </p>
              </div>
            </ScrollReveal>
            <div className="grid md:grid-cols-3 gap-8">
              <ScrollReveal delay={0.1}>
                <div className="bg-white p-8 rounded-2xl h-full shadow-sm">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                    <Droplets className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-xl mb-4">Microbial Solutions</h3>
                  <p className="font-body text-muted-foreground text-sm">
                    Specialised solutions and organic manures provided to restore soil health.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="bg-white p-8 rounded-2xl h-full shadow-sm">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                    <Sprout className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-xl mb-4">Direct Farmer Support</h3>
                  <p className="font-body text-muted-foreground text-sm">
                    Already supporting 38 out of 80 farmers with bio-input spraying on their crops.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <div className="bg-white p-8 rounded-2xl h-full shadow-sm">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                    <Leaf className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-xl mb-4">Vegetable Nurseries</h3>
                  <p className="font-body text-muted-foreground text-sm">
                    Distributing saplings like tomato and chilli to "Parasbag" kitchen garden farmers.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Analogy Section */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="bg-forest-dark rounded-3xl p-8 md:p-16 text-center text-cream relative overflow-hidden">
              <div className="relative z-10 max-w-4xl mx-auto">
                <h2 className="font-display text-3xl md:text-4xl mb-8 text-golden italic">"A Nutritional Detox for the Land"</h2>
                <p className="font-body text-xl leading-relaxed opacity-90 mb-8">
                  Instead of giving the soil "energy drinks" (chemical fertilisers) that provide a quick boost but ruin its health, 
                  ASTHA provides a natural, balanced diet and expert coaching. 
                  This allows the farm to build its own natural strength.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Training & Impact */}
        <section className="section-padding bg-cream">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-16">
              <ScrollReveal>
                <div>
                  <h2 className="font-display text-4xl text-foreground mb-8">Expert Guidance & Impact</h2>
                  <div className="space-y-8">
                    <div className="flex gap-6">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <GraduationCap className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-display text-xl mb-2">On-Field Mentorship</h3>
                        <p className="font-body text-muted-foreground text-sm leading-relaxed">
                          Agriculture graduates provide direct technical guidance to farmers regarding organic inputs and optimal crop combinations.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-6">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <LineChart className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-display text-xl mb-2">Demonstration Plots</h3>
                        <p className="font-body text-muted-foreground text-sm leading-relaxed">
                          "Farmers by Choice" (FbC) provide land for demonstration plots to showcase the effectiveness of organic methods.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="bg-white p-10 rounded-2xl shadow-xl border border-border/50">
                  <h3 className="font-display text-2xl text-primary mb-6">Proven Results</h3>
                  <div className="space-y-4">
                    {[
                      'Successful first-time cultivation of potatoes',
                      'Healthy yields of wheat and chickpeas (Harbara)',
                      'Increased resilience against fungal issues',
                      'Behavioral shift: Farmers now prefer organic treatment advice'
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <ChevronRight className="text-golden w-5 h-5" />
                        <span className="font-body text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
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

export default OrganicFarming;
