import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Mountain, Wallet, Calendar, CheckCircle2, Heart, Sprout, Factory, Droplets, ChevronRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import swadharHero from '../assets/swadhar-hero.png';
import swadharImpact from '../assets/swadhar-impact.png';

const Swadhar = () => {
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
              src={swadharHero} 
              alt="Swadhar Project" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container-wide relative z-10 text-center">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-body text-golden text-sm tracking-[0.2em] uppercase mb-6 block"
            >
              Collaborative Initiative
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-5xl md:text-8xl text-cream mb-8 leading-tight"
            >
              Project Swadhar
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-body text-xl md:text-2xl text-cream/80 max-w-3xl mx-auto leading-relaxed"
            >
              A joint effort for rural development in Velhe Block, building self-sustaining community structures.
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
                <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px]">
                  <img src="/attached_assets/shared_image_(39)_1768281748403.jpg" alt="Swadhar Impact" className="w-full h-full object-cover" />
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div>
                  <h2 className="font-display text-4xl text-foreground mb-8 text-primary">The Nature of Collaboration</h2>
                  <p className="font-body text-lg text-muted-foreground mb-8 leading-relaxed">
                    Swadhar is a collaborative initiative between Jnana Prabodhini and Astha Trust, situated in the Velhe Block and sponsored by Coforge.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-border/50">
                      <Users className="w-8 h-8 text-primary mb-4" />
                      <h3 className="font-display text-lg mb-2">Partnership</h3>
                      <p className="font-body text-sm text-muted-foreground">Jnana Prabodhini & Astha Trust collaboration.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-border/50">
                      <Wallet className="w-8 h-8 text-primary mb-4" />
                      <h3 className="font-display text-lg mb-2">Sponsorship</h3>
                      <p className="font-body text-sm text-muted-foreground">Proudly supported by Coforge.</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Three Pillars */}
        <section className="section-padding bg-primary/5">
          <div className="container-wide">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="font-display text-4xl text-foreground mb-4">The Three Pillars</h2>
                <p className="font-body text-muted-foreground">Built upon foundations of long-term sustainability.</p>
              </div>
            </ScrollReveal>
            <div className="grid md:grid-cols-3 gap-8">
              <ScrollReveal delay={0.1}>
                <div className="bg-white p-8 rounded-2xl h-full shadow-sm border-b-4 border-primary">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                    <Sprout className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-xl mb-4">Livelihood</h3>
                  <p className="font-body text-muted-foreground text-sm">
                    Creating sustainable income sources through FPOs and improved farming techniques.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="bg-white p-8 rounded-2xl h-full shadow-sm border-b-4 border-golden">
                  <div className="w-12 h-12 bg-golden/10 rounded-full flex items-center justify-center mb-6 text-golden">
                    <Mountain className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-xl mb-4">Environment</h3>
                  <p className="font-body text-muted-foreground text-sm">
                    Focusing on ecological restoration including well recharging and natural resource management.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <div className="bg-white p-8 rounded-2xl h-full shadow-sm border-b-4 border-primary">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-xl mb-4">Governance</h3>
                  <p className="font-body text-muted-foreground text-sm">
                    Strengthening Gram Panchayat Governance for effective local leadership and management.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Transition Analogy */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="bg-forest-dark rounded-3xl p-8 md:p-16 text-center text-cream relative overflow-hidden">
              <div className="relative z-10 max-w-4xl mx-auto">
                <h2 className="font-display text-3xl md:text-4xl mb-8 text-golden italic">"Standing on its Own"</h2>
                <p className="font-body text-xl leading-relaxed opacity-90 mb-8">
                  Think of Swadhar as a scaffolding for a new building. While the formal project timeline concluded in 2024, 
                  the "building" itself — the FPOs, farming improvements, and food units — is now standing on its own, 
                  with the Trust providing the mentorship to ensure it continues to succeed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Ongoing Activities */}
        <section className="section-padding bg-cream">
          <div className="container-wide">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="font-display text-4xl text-foreground mb-4">Ongoing Sustenance</h2>
                <p className="font-body text-muted-foreground">Activities that continue to thrive post-March 2024.</p>
              </div>
            </ScrollReveal>
            <div className="grid lg:grid-cols-2 gap-16">
              <ScrollReveal>
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Heart className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl mb-2">Goat Rearing FPO</h3>
                      <p className="font-body text-muted-foreground text-sm leading-relaxed">
                        Integrated into the Pasali SHG cluster. Astha manages animal health care, awareness, and improved housing.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Factory className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl mb-2">Food Processing Unit</h3>
                      <p className="font-body text-muted-foreground text-sm leading-relaxed">
                        Continued oversight and operational support for the community's dedicated processing facility.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Droplets className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl mb-2">Environmental Monitoring</h3>
                      <p className="font-body text-muted-foreground text-sm leading-relaxed">
                        Long-term monitoring of well recharging impacts committed through 2026.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="bg-white p-10 rounded-2xl shadow-xl border border-border/50 h-full flex flex-col justify-center">
                  <Calendar className="w-12 h-12 text-golden mb-6" />
                  <h3 className="font-display text-2xl text-primary mb-6">Project Timeline</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-border/50 pb-2">
                      <span className="font-body text-muted-foreground">Formal Period End</span>
                      <span className="font-display text-primary">March 2024</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-border/50 pb-2">
                      <span className="font-body text-muted-foreground">Impact Monitoring</span>
                      <span className="font-display text-primary">Through 2026</span>
                    </div>
                    <div className="mt-6">
                      <p className="font-body text-sm text-muted-foreground italic">
                        The project has transitioned from active implementation to mentored sustainability.
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

export default Swadhar;
