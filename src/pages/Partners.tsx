import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Handshake, Users, Globe, Building2, Heart, Leaf, PawPrint, GraduationCap, ShieldCheck } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import csrHero from '../assets/generated_images/csr_community_hero.png';

const Partners = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const strategicPartners = [
    {
      name: "Coforge Ltd",
      description: "ASTHA's main corporate partner for conducting Corporate Social Responsibility (CSR) impact assessments and providing strategic inputs to increase project effectiveness.",
      icon: <Building2 className="w-6 h-6" />
    },
    {
      name: "Chhaya Strategic Advisors (Chhaya)",
      description: "An associated consulting firm that works alongside ASTHA to provide strategic inputs, design monitoring systems, and carry out impact assessments.",
      icon: <ShieldCheck className="w-6 h-6" />
    },
    {
      name: "N G Paranjape Pratishthan (NGPP)",
      description: "A partner that supports specific initiatives, such as the E-Rickshaw service for school children in the Pasali Valley.",
      icon: <Users className="w-6 h-6" />
    }
  ];

  const ngoPartners = [
    { name: "BAIF Livelihoods-Karnataka", description: "Focused on integrated livelihood approaches, including agriculture and livestock development.", icon: <Leaf /> },
    { name: "Jnan Prabodhini", description: "Involved in rural development and joint projects with ASTHA, such as the Swadhar project in Velhe.", icon: <Building2 /> },
    { name: "Swayamsiddha (Swayamsiddha Institute)", description: "Specialized in women's entrepreneurship and comprehensive village development.", icon: <Users /> },
    { name: "Udayan Care", description: "Provides alternative care for orphaned and abandoned children (Udayan Ghars) and higher education fellowships for girls.", icon: <Heart /> },
    { name: "CYDA (Centre for Youth Development and Activities)", description: "Focuses on youth empowerment and providing humanitarian aid to families affected by COVID-19.", icon: <Users /> },
    { name: "Vidya & Child", description: "Works on the education of underprivileged children in slum communities.", icon: <GraduationCap /> },
    { name: "S.M. Sehgal Foundation", description: "Partners on environmental and water management projects, such as Project Vardhan.", icon: <Globe /> },
    { name: "Sparsha Trust", description: "Dedicated to the holistic development and rehabilitation of vulnerable children and youth.", icon: <Heart /> },
    { name: "Margadarshi (The Association for Physically Challenged)", description: "Supports the physical, social, and economic well-being of persons with disabilities.", icon: <Users /> },
    { name: "Ashagram (Param Prasad Charitable Society)", description: "Serves intellectually disabled and orphaned children and adults.", icon: <Heart /> },
    { name: "SAFE (Social Action for Forest and Environment)", description: "Focuses on environmental conservation, such as restoring dumping sites into biodiversity parks.", icon: <Leaf /> },
    { name: "People for Animals (PFA)", description: "Dedicated to animal welfare, rescue, and rehabilitation.", icon: <PawPrint /> },
    { name: "Voice of Stray Dogs (VOSD)", description: "Operates as a rescue and rehabilitation centre for stray dogs.", icon: <PawPrint /> }
  ];

  const associates = [
    { name: "Xorient", description: "A sponsor for providing solar-powered lighting in the Velhe Block." },
    { name: "Maharashtra Bamboo Promotion Foundation", description: "Collaborates on feasibility studies for bamboo plantation and processing." }
  ];

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      
      <main className="pt-0">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-forest-dark">
          <div className="absolute inset-0 opacity-40">
            <img 
              src={csrHero} 
              alt="Our Partners" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container-wide relative z-10 text-center">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-body text-golden text-sm tracking-[0.2em] uppercase mb-6 block"
            >
              Collaborations for Change
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-5xl md:text-7xl text-cream mb-8 leading-tight"
            >
              Our Partners
            </motion.h1>
          </div>
        </section>

        {/* Strategic Partners */}
        <section className="section-padding">
          <div className="container-wide">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="font-display text-4xl text-primary mb-4">Strategic & Funding Partners</h2>
                <div className="w-24 h-1 bg-golden mx-auto"></div>
              </div>
            </ScrollReveal>
            
            <div className="grid md:grid-cols-3 gap-8">
              {strategicPartners.map((partner, index) => (
                <ScrollReveal key={partner.name} delay={index * 0.1}>
                  <div className="bg-white p-8 rounded-2xl h-full shadow-sm border border-border/50 hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                      {partner.icon}
                    </div>
                    <h3 className="font-display text-xl mb-4 text-primary">{partner.name}</h3>
                    <p className="font-body text-muted-foreground text-sm leading-relaxed">
                      {partner.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Implementing NGO Partners */}
        <section className="section-padding bg-forest-dark/5">
          <div className="container-wide">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="font-display text-4xl text-primary mb-4">Implementing NGO Partners</h2>
                <p className="font-body text-muted-foreground max-w-2xl mx-auto">
                  Collaborating with specialized organizations to deliver impactful social projects across various sectors.
                </p>
              </div>
            </ScrollReveal>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ngoPartners.map((partner, index) => (
                <ScrollReveal key={partner.name} delay={index * 0.05}>
                  <div className="bg-white p-6 rounded-xl h-full shadow-sm border border-border/30 hover:border-golden/50 transition-colors group">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-golden/10 rounded-lg flex items-center justify-center text-golden group-hover:bg-golden group-hover:text-white transition-colors flex-shrink-0 mt-1">
                        {partner.icon}
                      </div>
                      <div>
                        <h4 className="font-display text-lg mb-2 text-primary">{partner.name}</h4>
                        <p className="font-body text-sm text-muted-foreground leading-relaxed">
                          {partner.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Other Notable Associates */}
        <section className="section-padding">
          <div className="container-wide">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="font-display text-4xl text-primary mb-4">Other Notable Associates</h2>
                <div className="w-24 h-1 bg-golden mx-auto"></div>
              </div>
            </ScrollReveal>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {associates.map((associate, index) => (
                <ScrollReveal key={associate.name} delay={index * 0.1}>
                  <div className="bg-primary/5 p-8 rounded-2xl border-l-4 border-golden">
                    <h3 className="font-display text-xl mb-3 text-primary">{associate.name}</h3>
                    <p className="font-body text-muted-foreground text-sm">
                      {associate.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Call to Action */}
        <section className="section-padding bg-forest-dark text-cream">
          <div className="container-wide text-center">
            <ScrollReveal>
              <Handshake className="w-16 h-16 text-golden mx-auto mb-8" />
              <h2 className="font-display text-4xl mb-6">Building a Better Future Together</h2>
              <p className="font-body text-xl text-cream/80 max-w-2xl mx-auto mb-10 leading-relaxed">
                Our impact is multiplied through the strength of our partnerships. Together, we are creating sustainable change in rural India.
              </p>
              <button 
                onClick={() => document.getElementById('connect')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-golden text-forest-dark px-10 py-4 rounded-full font-display text-lg hover:bg-white transition-colors"
              >
                Become a Partner
              </button>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Partners;
