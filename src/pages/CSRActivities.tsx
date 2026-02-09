import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Target, BarChart, ShieldCheck, Users, Briefcase, FileText, ChevronRight, Zap } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import csrHero from '../assets/generated_images/csr_community_hero.png';

const CRMActivities = () => {
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
              src={csrHero} 
              alt="Strategic CSR Partnership" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container-wide relative z-10 text-center">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-body text-golden text-sm tracking-[0.2em] uppercase mb-6 block"
            >
              Strategic Partnership
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-5xl md:text-8xl text-cream mb-8 leading-tight"
            >
              CSR Activities
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-body text-xl md:text-2xl text-cream/80 max-w-3xl mx-auto leading-relaxed"
            >
              Empowering Communities: The Strategic CSR Partnership Between Coforge & ASTHA.
            </motion.p>
          </div>
        </section>

        {/* Vision Section */}
        <section className="section-padding">
          <div className="container-wide text-center max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="font-display text-4xl text-foreground mb-8 text-primary">Our Shared Vision</h2>
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-12">
                Coforge Ltd. and ASTHA have entered into a development partnership with a clear mission: to ensure that the communities where social projects are implemented benefit substantially. Our goal is to create a positive impact that far outweighs the resources provided, ensuring these communities gain lasting value through a vision of long-term transformation.
              </p>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-border/50 inline-block">
                <span className="font-display text-xl text-primary block mb-2">Supported by Coforge Ltd</span>
                <p className="font-body text-sm text-muted-foreground italic">"A partnership built on transparency and strategic growth"</p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Objectives Grid */}
        <section className="section-padding bg-primary/5">
          <div className="container-wide">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="font-display text-4xl text-foreground mb-4">Strategic Objectives & Impact</h2>
                <p className="font-body text-muted-foreground">High-level strategic inputs and operational support.</p>
              </div>
            </ScrollReveal>
            <div className="grid md:grid-cols-3 gap-8">
              <ScrollReveal delay={0.1}>
                <div className="bg-white p-8 rounded-2xl h-full shadow-sm border-b-4 border-primary">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                    <Target className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-xl mb-4">ESG Roadmap</h3>
                  <p className="font-body text-muted-foreground text-sm">
                    Designing a three-to-five-year roadmap aligned with the Environmental, Social, and Governance (ESG) framework.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="bg-white p-8 rounded-2xl h-full shadow-sm border-b-4 border-golden">
                  <div className="w-12 h-12 bg-golden/10 rounded-full flex items-center justify-center mb-6 text-golden">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-xl mb-4">Operational Excellence</h3>
                  <p className="font-body text-muted-foreground text-sm">
                    Drafting Standard Operating Procedures (SOPs) to streamline CSR activities across all corporate units.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <div className="bg-white p-8 rounded-2xl h-full shadow-sm border-b-4 border-primary">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                    <BarChart className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-xl mb-4">Impact Assessment</h3>
                  <p className="font-body text-muted-foreground text-sm">
                    Establishing rigorous monitoring systems and conducting third-party impact assessments for course corrections.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Ethical Standards */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <ScrollReveal>
                <div>
                  <h2 className="font-display text-4xl text-foreground mb-8 text-primary">Commitment to Ethical Standards</h2>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <ShieldCheck className="w-6 h-6 text-primary flex-shrink-0" />
                      <div>
                        <h4 className="font-display text-lg mb-1">Anti-Corruption</h4>
                        <p className="font-body text-sm text-muted-foreground">Full compliance with national and international laws (FCPA).</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Users className="w-6 h-6 text-primary flex-shrink-0" />
                      <div>
                        <h4 className="font-display text-lg mb-1">Fair Labour Practices</h4>
                        <p className="font-body text-sm text-muted-foreground">Zero-tolerance policy for slave, forced, or child labour.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Briefcase className="w-6 h-6 text-primary flex-shrink-0" />
                      <div>
                        <h4 className="font-display text-lg mb-1">Safe Workplaces</h4>
                        <p className="font-body text-sm text-muted-foreground">Workplaces free from discrimination and harassment.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="bg-forest-dark rounded-3xl p-8 text-cream">
                  <h3 className="font-display text-2xl text-golden mb-6 italic">Project Blueprint Analogy</h3>
                  <p className="font-body text-lg leading-relaxed opacity-90">
                    Think of this as a Project Blueprint. Coforge is the Architect providing the resources and the master vision, while ASTHA is the Lead Engineer, ensuring the structure is built to the highest safety codes (compliance), uses the best materials (ESG roadmap), and truly serves the community.
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

export default CRMActivities;
