import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Car, Users, GraduationCap, HeartPulse, MapPin, Building2, ChevronRight, Zap } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import erikshaHero from '../assets/eriksha-hero.png';
import erikshaImpact from '../assets/eriksha-impact.png';

const ERiksha = () => {
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
              src="/attached_assets/IMG-20240930-WA0030_1768212571350.jpg" 
              alt="E-Riksha Initiative" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container-wide relative z-10 text-center">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-body text-golden text-sm tracking-[0.2em] uppercase mb-6 block"
            >
              Mobility & Service
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-5xl md:text-8xl text-cream mb-8 leading-tight"
            >
              E-Riksha Initiative
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-body text-xl md:text-2xl text-cream/80 max-w-3xl mx-auto leading-relaxed"
            >
              A village lifeline on wheels, bridging the gap between homes and essential services for the vulnerable.
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
                  <img src="/attached_assets/IMG-20240930-WA0030_1768212571350.jpg" alt="E-Riksha in service" className="w-full h-full object-cover" />
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div>
                  <h2 className="font-display text-4xl text-foreground mb-8 text-primary">A Targeted Transport Solution</h2>
                  <p className="font-body text-lg text-muted-foreground mb-8 leading-relaxed">
                    The E-Riksha initiative is designed to improve mobility for vulnerable groups, serving as a vital link to education and healthcare.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-border/50">
                      <MapPin className="w-8 h-8 text-primary mb-4" />
                      <h3 className="font-display text-lg mb-2">Service Area</h3>
                      <p className="font-body text-sm text-muted-foreground">Operating throughout the 18 Gav Maval region.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-border/50">
                      <Building2 className="w-8 h-8 text-primary mb-4" />
                      <h3 className="font-display text-lg mb-2">Sponsorship</h3>
                      <p className="font-body text-sm text-muted-foreground">Supported by NG Paranjape Pratishthan.</p>
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
                <h2 className="font-display text-3xl md:text-4xl mb-8 text-golden italic">"A Village Lifeline on Wheels"</h2>
                <p className="font-body text-xl leading-relaxed opacity-90 mb-8">
                  While many take transport for granted, for a student or an elderly patient in a rural block, 
                  this vehicle serves as the vital link between their home and the essential services 
                  they might otherwise struggle to reach.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Pillars */}
        <section className="section-padding bg-cream">
          <div className="container-wide">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="font-display text-4xl text-foreground mb-4">Supporting the Vulnerable</h2>
                <p className="font-body text-muted-foreground">Essential transportation for those who need it most.</p>
              </div>
            </ScrollReveal>
            <div className="grid md:grid-cols-3 gap-8">
              <ScrollReveal delay={0.1}>
                <div className="bg-white p-8 rounded-2xl h-full shadow-sm border-b-4 border-primary">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-xl mb-4">School Children</h3>
                  <p className="font-body text-muted-foreground text-sm">
                    Providing safe and reliable transport for children to reach their schools daily.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="bg-white p-8 rounded-2xl h-full shadow-sm border-b-4 border-golden">
                  <div className="w-12 h-12 bg-golden/10 rounded-full flex items-center justify-center mb-6 text-golden">
                    <HeartPulse className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-xl mb-4">Patients</h3>
                  <p className="font-body text-muted-foreground text-sm">
                    Ensuring timely transport to healthcare facilities for those requiring medical attention.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <div className="bg-white p-8 rounded-2xl h-full shadow-sm border-b-4 border-primary">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-xl mb-4">Senior Citizens</h3>
                  <p className="font-body text-muted-foreground text-sm">
                    Assisting elderly residents with essential travel needs within the region.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Evolution & Future */}
        <section className="section-padding">
          <div className="container-wide text-center bg-primary text-primary-foreground rounded-3xl p-12 lg:p-24 shadow-xl">
            <h2 className="font-display text-4xl mb-8">Evolution & Future Plans</h2>
            <p className="font-body text-lg max-w-2xl mx-auto mb-12 opacity-80">
              For the 2025–26 period, the Trust intends to expand the vehicle's utility, 
              supporting various ASTHA activities alongside its core mission of school transit.
            </p>
            <div className="flex justify-center gap-4">
               <Zap className="w-6 h-6 text-golden" />
               <span className="font-display">Sustainable Electric Mobility</span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ERiksha;
