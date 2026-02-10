import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Users,
  UserCircle,
  ShieldCheck,
  Briefcase,
  Navigation,
  Car,
  Award,
  Target,
  Eye,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

import aboutHero from "@/assets/about-hero-bg.jpg";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const trustees = [
    {
      name: "Vikramjit Mehmi",
      role: "Chairman and Managing Trustee",
      icon: <UserCircle className="w-8 h-8" />,
    },
    {
      name: "Satish Khade",
      role: "Trustee and signatory",
      icon: <ShieldCheck className="w-8 h-8" />,
    },
    {
      name: "Sudam Dagadu Zende",
      role: "Trustee",
      icon: <Users className="w-8 h-8" />,
    },
    {
      name: "Dattatraya Maruti Mulay",
      role: "Trustee and the Settler",
      icon: <Award className="w-8 h-8" />,
    },
    {
      name: "Pramod Dattatraya Kale",
      role: "Trustee",
      icon: <Users className="w-8 h-8" />,
    },
    {
      name: "Biren Sudhir Vora",
      role: "Trustee",
      icon: <Users className="w-8 h-8" />,
    },
    {
      name: "Sanjay Mahadeo Bobade",
      role: "Trustee",
      icon: <Users className="w-8 h-8" />,
    },
    {
      name: "Suresh Rajaram Dere",
      role: "Trustee (Historical)",
      icon: <Users className="w-8 h-8" />,
    },
    {
      name: "Ramakant Raghunath Kulkarni",
      role: "Trustee (Historical)",
      icon: <Users className="w-8 h-8" />,
    },
  ];

  const leadership = [
    {
      name: "Ms Seemantinee Khot",
      role: "Director and Senior Consultant",
      icon: <Briefcase className="w-8 h-8" />,
    },
    {
      name: "Dr Anagha Joshi",
      role: "Director and Senior Consultant",
      icon: <Briefcase className="w-8 h-8" />,
    },
    {
      name: "Mr Raosaheb Badhe",
      role: "Chief Operating Officer (COO)",
      icon: <Target className="w-8 h-8" />,
    },
  ];

  const fieldTeam = [
    {
      name: "Kiran Reddy Avuthu",
      role: "Field assessments and evaluations",
      icon: <Navigation className="w-8 h-8" />,
    },
    {
      name: "Dr Ranveer Sing",
      role: "Field visits and assessments",
      icon: <Navigation className="w-8 h-8" />,
    },
    {
      name: "Raosaheb (R.K.) Badhe",
      role: "Field visits and interactions",
      icon: <Navigation className="w-8 h-8" />,
    },
    {
      name: "Local Project Driver",
      role: "E-Rickshaw service in Pasali Valley",
      icon: <Car className="w-8 h-8" />,
    },
  ];

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />

      <main className="pt-0">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-forest-dark">
          <div className="absolute inset-0 opacity-40">
            <img 
              src={aboutHero} 
              alt="About Us" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container-wide relative z-10 text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-body text-golden text-sm tracking-[0.2em] uppercase mb-6 block"
            >
              Our Foundation & People
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-5xl md:text-7xl text-cream mb-8 leading-tight"
            >
              About Us
            </motion.h1>
          </div>
        </section>

        {/* Vision, Mission, Goal - Grid layout matching Partners page cards */}
        <section className="section-padding bg-white">
          <div className="container-wide">
            <div className="grid md:grid-cols-3 gap-8">
              <ScrollReveal>
                <div className="bg-cream/30 p-8 rounded-2xl h-full shadow-sm border border-border/50 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                    <Eye className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-2xl mb-4 text-primary">
                    Our Vision
                  </h3>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed">
                    To be a catalyst for profound social transformation and
                    human advancement, creating a world where every individual
                    has the opportunity to live a life of dignity,
                    self-reliance, and prosperity.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <div className="bg-cream/30 p-8 rounded-2xl h-full shadow-sm border border-border/50 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                    <Target className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-2xl mb-4 text-primary">
                    Our Mission
                  </h3>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed">
                    To empower marginalized communities by implementing
                    high-impact initiatives in education, health, livelihood,
                    and environmental conservation, while providing strategic
                    expertise.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="bg-cream/30 p-8 rounded-2xl h-full shadow-sm border border-border/50 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                    <Award className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-2xl mb-4 text-primary">
                    Our Goal
                  </h3>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed">
                    Ultimately, we strive to make every region we touch "Sujlam,
                    Suflam"—rich in resources and abundant in
                    opportunity—ensuring ecological and social harmony.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Trustees Section - Referencing Implementing NGO Partners layout */}
        <section className="section-padding bg-forest-dark/5">
          <div className="container-wide">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="font-display text-4xl text-primary mb-4">
                  Board of Trustees
                </h2>
                <div className="w-24 h-1 bg-golden mx-auto"></div>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trustees.map((member, index) => (
                <ScrollReveal key={member.name} delay={index * 0.05}>
                  <div className="bg-white p-6 rounded-xl h-full shadow-sm border border-border/30 hover:border-golden/50 transition-colors group">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-golden/10 rounded-lg flex items-center justify-center text-golden group-hover:bg-golden group-hover:text-white transition-colors flex-shrink-0">
                        {member.icon}
                      </div>
                      <div>
                        <h4 className="font-display text-lg mb-2 text-primary">
                          {member.name}
                        </h4>
                        <p className="font-body text-sm text-muted-foreground leading-relaxed">
                          {member.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="section-padding">
          <div className="container-wide">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="font-display text-4xl text-primary mb-4">
                  Senior Leadership
                </h2>
                <div className="w-24 h-1 bg-golden mx-auto"></div>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {leadership.map((member, index) => (
                <ScrollReveal key={member.name} delay={index * 0.1}>
                  <div className="bg-white p-8 rounded-2xl h-full shadow-sm border border-border/50 text-center group hover:shadow-md transition-shadow">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      {member.icon}
                    </div>
                    <h3 className="font-display text-xl mb-3 text-primary">
                      {member.name}
                    </h3>
                    <p className="font-body text-muted-foreground text-sm">
                      {member.role}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Field Team Section */}
        <section
          className="section-padding"
          style={{ backgroundColor: "#1c402b0d" }}
        >
          <div className="container-wide">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="font-display text-4xl mb-4 text-primary">
                  Field Team & Personnel
                </h2>
                <div className="w-24 h-1 bg-golden mx-auto"></div>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {fieldTeam.map((member, index) => (
                <ScrollReveal key={member.name} delay={index * 0.1}>
                  <div className="bg-white/40 backdrop-blur-sm p-6 rounded-xl border border-black/5 hover:border-golden/50 transition-colors h-full">
                    <div className="text-primary mb-4">{member.icon}</div>
                    <h4 className="font-display text-lg mb-2 text-primary">
                      {member.name}
                    </h4>
                    <p className="font-body text-sm text-primary/70">
                      {member.role}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
