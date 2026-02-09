import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Leaf, MapPin, Users, Droplets, ChevronRight, Sprout, Search, BarChart3, Microscope } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import bambooImage from '../assets/generated_images/bamboo_plantation_in_rural_india.png';

const BambooPlantationStudy = () => {
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
              src={bambooImage} 
              alt="Bamboo Plantation" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container-wide relative z-10 text-center">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-body text-golden text-sm tracking-[0.2em] uppercase mb-6 block"
            >
              Environmental Initiative
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-5xl md:text-8xl text-cream mb-8 leading-tight"
            >
              Bamboo Plantation Feasibility Study
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-body text-xl md:text-2xl text-cream/80 max-w-3xl mx-auto leading-relaxed"
            >
              Testing a resilient crop to support the local economy and restore the ecosystem.
            </motion.p>
          </div>
        </section>

        {/* Study Overview */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <ScrollReveal>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img src={bambooImage} alt="Bamboo Research" className="w-full h-full object-cover" />
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div>
                  <h2 className="font-display text-4xl text-foreground mb-8 text-primary">Purpose and Scope</h2>
                  <p className="font-body text-lg text-muted-foreground mb-8 leading-relaxed">
                    The Astha Trust has undertaken a comprehensive feasibility study regarding the plantation, processing, and various applications of bamboo in the Velhe region.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-border/50">
                      <MapPin className="w-8 h-8 text-primary mb-4" />
                      <h3 className="font-display text-lg mb-2">Location</h3>
                      <p className="font-body text-sm text-muted-foreground">Focused specifically on the Velhe region's unique geography.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-border/50">
                      <Users className="w-8 h-8 text-primary mb-4" />
                      <h3 className="font-display text-lg mb-2">Collaboration</h3>
                      <p className="font-body text-sm text-muted-foreground">Partnered with Maharashtra Bamboo Promotion Foundation.</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Environmental Initiatives */}
        <section className="section-padding bg-primary/5">
          <div className="container-wide">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="font-display text-4xl text-foreground mb-4">Strategic Environmental Initiatives</h2>
                <p className="font-body text-muted-foreground">Focusing on sustainable resource management and agricultural diversification.</p>
              </div>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 gap-8">
              <ScrollReveal delay={0.1}>
                <div className="bg-white p-8 rounded-2xl h-full shadow-sm border-b-4 border-primary">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                    <Microscope className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-xl mb-4">Bamboo Study</h3>
                  <p className="font-body text-muted-foreground text-sm">
                    Investigating processing and various applications to create new economic pathways for farmers while ensuring ecological balance.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="bg-white p-8 rounded-2xl h-full shadow-sm border-b-4 border-golden">
                  <div className="w-12 h-12 bg-golden/10 rounded-full flex items-center justify-center mb-6 text-golden">
                    <Droplets className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-xl mb-4">Well Recharging Monitoring</h3>
                  <p className="font-body text-muted-foreground text-sm">
                    Monitoring the long-term impact of well recharging efforts originally started under the Swadhar Project to ensure sustainable water benefits.
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
                <h2 className="font-display text-3xl md:text-4xl mb-8 text-golden italic">"Testing the Soil and checking a Rain Gauge"</h2>
                <p className="font-body text-xl leading-relaxed opacity-90 mb-8">
                  The bamboo study is like testing if a new, resilient crop can thrive in the local "soil" to support the economy, while the well monitoring is like checking a "rain gauge" to ensure that the "water" previously saved is actually being stored effectively for the future.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Future Goals */}
        <section className="section-padding bg-cream">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-16">
              <ScrollReveal>
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <BarChart3 className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl mb-2">Impact Monitoring</h3>
                      <p className="font-body text-muted-foreground text-sm leading-relaxed">
                        Ensuring environmental interventions continue to provide sustainable benefits to the local ecosystem.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Search className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl mb-2">Strategic Planning</h3>
                      <p className="font-body text-muted-foreground text-sm leading-relaxed">
                        Part of the 2025–26 strategic roadmap for long-term ecological oversight.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="bg-white p-10 rounded-2xl shadow-xl border border-border/50 h-full flex flex-col justify-center">
                  <Sprout className="w-12 h-12 text-golden mb-6" />
                  <h3 className="font-display text-2xl text-primary mb-6">Initiative Goals</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-border/50 pb-2">
                      <span className="font-body text-muted-foreground">Monitoring Period</span>
                      <span className="font-display text-primary">2025 – 2026</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-border/50 pb-2">
                      <span className="font-body text-muted-foreground">Focus Region</span>
                      <span className="font-display text-primary">Velhe Block</span>
                    </div>
                    <div className="mt-6">
                      <p className="font-body text-sm text-muted-foreground italic">
                        Securing water resources and diversifying agriculture for a resilient future.
                      </p>
                    </div>
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

export default BambooPlantationStudy;
