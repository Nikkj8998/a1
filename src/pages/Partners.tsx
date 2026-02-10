import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Handshake, Users, Globe, Building2, Heart, Leaf, PawPrint, GraduationCap, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import partnersHero from '../assets/generated_images/partners_hero.png';
import coforgeLogo from '../assets/logos/coforge.png';
import pfaLogo from '../assets/logos/pfa.png';
import safeLogo from '../assets/logos/safe.png';
import vosdLogo from '../assets/logos/vosd.png';

// New partner logos
import cydaLogo from '../assets/partners/cyda.png';
import margadarshiLogo from '../assets/partners/margadarshi.png';
import mhbambooLogo from '../assets/partners/mhbamboo.png';
import sehgalLogo from '../assets/partners/sehgal.png';
import sparshaLogo from '../assets/partners/sparsha.png';
import swayamsiddhaLogo from '../assets/partners/swayamsiddha.png';
import udayanLogo from '../assets/partners/udayan.png';
import vidyachildLogo from '../assets/partners/vidyachild.jpg';
import xoriantLogo from '../assets/partners/xoriant.png';
import chhayaLogo from '../assets/partners/chhaya.jfif';

const Partners = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const navigate = useNavigate();

  const strategicPartners = [
    {
      name: "Coforge Ltd",
      logo: coforgeLogo,
      description: "ASTHA's main corporate partner for conducting Corporate Social Responsibility (CSR) impact assessments and providing strategic inputs to increase project effectiveness.",
    },
    {
      name: "Chhaya Strategic Advisors (Chhaya)",
      logo: chhayaLogo,
      description: "An associated consulting firm that works alongside ASTHA to provide strategic inputs, design monitoring systems, and carry out impact assessments.",
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
    { name: "Swayamsiddha (Swayamsiddha Institute)", logo: swayamsiddhaLogo, description: "Specialized in women's entrepreneurship and comprehensive village development." },
    { name: "Udayan Care", logo: udayanLogo, description: "Provides alternative care for orphaned and abandoned children (Udayan Ghars) and higher education fellowships for girls." },
    { name: "CYDA (Centre for Youth Development and Activities)", logo: cydaLogo, description: "Focuses on youth empowerment and providing humanitarian aid to families affected by COVID-19." },
    { name: "Vidya & Child", logo: vidyachildLogo, description: "Works on the education of underprivileged children in slum communities." },
    { name: "S.M. Sehgal Foundation", logo: sehgalLogo, description: "Partners on environmental and water management projects, such as Project Vardhan." },
    { name: "Sparsha Trust", logo: sparshaLogo, description: "Dedicated to the holistic development and rehabilitation of vulnerable children and youth." },
    { name: "Margadarshi (The Association for Physically Challenged)", logo: margadarshiLogo, description: "Supports the physical, social, and economic well-being of persons with disabilities." },
    { name: "Ashagram (Param Prasad Charitable Society)", description: "Serves intellectually disabled and orphaned children and adults.", icon: <Heart /> },
    { name: "SAFE (Social Action for Forest and Environment)", logo: safeLogo, description: "Focuses on environmental conservation, such as restoring dumping sites into biodiversity parks.", icon: <Leaf /> },
    { name: "People for Animals (PFA)", logo: pfaLogo, description: "Dedicated to animal welfare, rescue, and rehabilitation.", icon: <PawPrint /> },
    { name: "Voice of Stray Dogs (VOSD)", logo: vosdLogo, description: "Operates as a rescue and rehabilitation centre for stray dogs.", icon: <PawPrint /> }
  ];

  const associates = [
    { name: "Xoriant", logo: xoriantLogo, description: "A sponsor for providing solar-powered lighting in the Velhe Block." },
    { name: "Maharashtra Bamboo Promotion Foundation", logo: mhbambooLogo, description: "Collaborates on feasibility studies for bamboo plantation and processing." }
  ];

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      
      <main className="pt-0">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-forest-dark">
          <div className="absolute inset-0 opacity-40">
            <img 
              src={partnersHero} 
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
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                        {partner.icon}
                      </div>
                      {partner.logo && (
                        <div className="h-10 px-3 bg-white border border-border/30 rounded-lg flex items-center shadow-sm">
                          <img src={partner.logo} alt={partner.name} className="h-full object-contain" />
                        </div>
                      )}
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
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ngoPartners.map((partner, index) => (
                <ScrollReveal key={partner.name} delay={index * 0.05}>
                  <div className="bg-white p-8 rounded-2xl h-full shadow-sm border border-border/30 hover:shadow-lg transition-all group flex flex-col">
                    <div className="mb-6">
                      {partner.logo ? (
                        <div className="w-full h-24 bg-white border border-border/10 rounded-xl flex items-center justify-center p-4 shadow-sm group-hover:border-golden/30 transition-colors">
                          <img src={partner.logo} alt={partner.name} className="max-w-full max-h-full object-contain" />
                        </div>
                      ) : (
                        <div className="w-16 h-16 bg-golden/10 rounded-2xl flex items-center justify-center text-golden group-hover:bg-golden group-hover:text-white transition-all">
                          {partner.icon}
                        </div>
                      )}
                    </div>
                    <div className="flex-1 flex flex-col">
                      <h4 className="font-display text-xl text-primary mb-4">{partner.name}</h4>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed">
                        {partner.description}
                      </p>
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
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {associates.map((associate, index) => (
                <ScrollReveal key={associate.name} delay={index * 0.1}>
                  <div className="bg-white p-10 rounded-3xl border border-border/30 shadow-sm hover:shadow-xl transition-all flex flex-col items-center text-center">
                    {associate.logo && (
                      <div className="w-full h-32 mb-8 bg-white border border-border/10 rounded-2xl p-6 flex items-center justify-center shadow-sm">
                        <img src={associate.logo} alt={associate.name} className="max-w-full max-h-full object-contain" />
                      </div>
                    )}
                    <div className="flex-1">
                      <h3 className="font-display text-2xl mb-4 text-primary">{associate.name}</h3>
                      <p className="font-body text-base text-muted-foreground leading-relaxed max-w-md">
                        {associate.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Call to Action */}
        <section className="section-padding bg-[#e5e7eb] text-primary">
          <div className="container-wide text-center">
            <ScrollReveal>
              <Handshake className="w-16 h-16 text-golden mx-auto mb-8" />
              <h2 className="font-display text-4xl mb-6">Building a Better Future Together</h2>
              <p className="font-body text-xl text-primary/80 max-w-2xl mx-auto mb-10 leading-relaxed">
                Our impact is multiplied through the strength of our partnerships. Together, we are creating sustainable change in rural India.
              </p>
              <button 
                onClick={() => navigate('/#connect')}
                className="bg-primary text-cream px-10 py-4 rounded-full font-display text-lg hover:bg-primary/90 transition-colors"
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
