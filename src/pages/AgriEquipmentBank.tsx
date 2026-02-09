import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Settings,
  PenTool as Tool,
  BarChart3,
  TrendingUp,
  ChevronRight,
  HardHat,
  Hammer,
  Sprout,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";
import agriBank1 from "../assets/agri-bank-1.png";
import agriBank2 from "../assets/agri-bank-2.png";

const AgriEquipmentBank = () => {
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
              src={agriBank1}
              alt="Agri Equipment Bank"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container-wide relative z-10 text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-body text-golden text-sm tracking-[0.2em] uppercase mb-6 block"
            >
              Key Initiative
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-5xl md:text-8xl text-cream mb-8 leading-tight"
            >
              Agri Equipment Bank
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-body text-xl md:text-2xl text-cream/80 max-w-3xl mx-auto leading-relaxed"
            >
              Modernising traditional farming and reducing physical labour in
              the Pasali Valley.
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

        {/* Overview */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <ScrollReveal>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px]">
                  <img
                    src="/attached_assets/IMG20241029102602_1768282169620.jpg"
                    alt="Farmers using equipment"
                    className="w-full h-full object-cover"
                  />
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div>
                  <h2 className="font-display text-4xl text-foreground mb-8 text-primary">
                    Core Objectives & Strategy
                  </h2>
                  <p className="font-body text-lg text-muted-foreground mb-8 leading-relaxed">
                    The primary goal is to reduce the "drudgery" — the heavy
                    physical burden associated with manual farming. By providing
                    access to modern machinery, we encourage farmers to
                    cultivate second and third crops (Rabbi), such as potatoes
                    and wheat, which were previously avoided due to labour
                    shortages and high costs.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-border/50">
                      <Tool className="w-8 h-8 text-primary mb-4" />
                      <h3 className="font-display text-lg mb-2">
                        Modern Access
                      </h3>
                      <p className="font-body text-sm text-muted-foreground">
                        Enabling multi-crop farming through technology.
                      </p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-border/50">
                      <TrendingUp className="w-8 h-8 text-primary mb-4" />
                      <h3 className="font-display text-lg mb-2">
                        Economic Growth
                      </h3>
                      <p className="font-body text-sm text-muted-foreground">
                        Reducing input costs and increasing overall
                        productivity.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Operational Model */}
        <section className="section-padding bg-primary/5">
          <div className="container-wide">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="font-display text-4xl text-foreground mb-4">
                  Operational & Financial Model
                </h2>
                <p className="font-body text-muted-foreground">
                  A sustainable approach to community-led modernisation.
                </p>
              </div>
            </ScrollReveal>
            <div className="grid md:grid-cols-3 gap-8">
              <ScrollReveal delay={0.1}>
                <div className="bg-white p-8 rounded-2xl h-full shadow-sm">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                    <Settings className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-xl mb-4">
                    Shared Rental Service
                  </h3>
                  <p className="font-body text-muted-foreground text-sm">
                    Larger assets are provided at reasonable daily rates. User
                    fees contribute to a Sustainability Fund for long-term
                    maintenance.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="bg-white p-8 rounded-2xl h-full shadow-sm">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                    <HardHat className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-xl mb-4">
                    Subsidised Distribution
                  </h3>
                  <p className="font-body text-muted-foreground text-sm">
                    Smaller hand tools like sickles are sold directly to farmers
                    at 50% subsidised costs to ensure individual ownership.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <div className="bg-white p-8 rounded-2xl h-full shadow-sm">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                    <Hammer className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-xl mb-4">Infrastructure</h3>
                  <p className="font-body text-muted-foreground text-sm">
                    Construction of semi-pakka tool sheds ensures secure storage
                    and professional maintenance of all machinery.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Inventory */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="bg-forest-dark rounded-3xl p-8 md:p-16 overflow-hidden relative">
              <div className="relative z-10 grid lg:grid-cols-2 gap-12">
                <div>
                  <h2 className="font-display text-4xl text-cream mb-8">
                    Technical Standards & Inventory
                  </h2>
                  <p className="font-body text-cream/70 mb-8">
                    We maintain a diverse range of equipment specifically
                    tailored for hilly terrain, focusing on branded OEM machines
                    for durability.
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Mini-tractors (Land prep & dehusking)",
                      "Power weeders & Power reapers",
                      "Brush cutters & Augers",
                      "High-quality OEM machinery",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-cream/90"
                      >
                        <ChevronRight className="text-golden w-5 h-5" />
                        <span className="font-body">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-cream/10 backdrop-blur-md p-6 rounded-2xl flex flex-col justify-center text-center">
                    <span className="font-display text-3xl text-golden block">
                      OEM
                    </span>
                    <span className="text-cream/60 text-xs uppercase tracking-wider">
                      Quality Standard
                    </span>
                  </div>
                  <div className="bg-cream/10 backdrop-blur-md p-6 rounded-2xl flex flex-col justify-center text-center">
                    <span className="font-display text-3xl text-golden block">
                      Diverse
                    </span>
                    <span className="text-cream/60 text-xs uppercase tracking-wider">
                      Inventory
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact */}
        <section className="section-padding bg-cream">
          <div className="container-wide">
            <ScrollReveal>
              <div className="text-center mb-20">
                <h2 className="font-display text-4xl text-foreground mb-6">
                  Quantifiable Impact
                </h2>
                <div className="w-24 h-1 bg-primary mx-auto" />
              </div>
            </ScrollReveal>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <BarChart3 className="w-12 h-12 text-primary mx-auto mb-6" />
                <span className="font-display text-5xl text-primary block mb-2">
                  300
                </span>
                <p className="font-body text-muted-foreground">
                  Person-days of labour saved using augers for plantations.
                </p>
              </div>
              <div className="text-center">
                <Sprout className="w-12 h-12 text-primary mx-auto mb-6" />
                <span className="font-display text-5xl text-primary block mb-2">
                  ₹25k+
                </span>
                <p className="font-body text-muted-foreground">
                  Estimated savings in labour costs for participating farmers.
                </p>
              </div>
              <div className="text-center">
                <TrendingUp className="w-12 h-12 text-primary mx-auto mb-6" />
                <span className="font-display text-5xl text-primary block mb-2">
                  104
                </span>
                <p className="font-body text-muted-foreground">
                  Participating families seeing increased efficiency.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Future */}
        <section className="section-padding">
          <div className="container-wide text-center bg-primary text-primary-foreground rounded-3xl p-12 lg:p-24 shadow-xl">
            <h2 className="font-display text-4xl mb-8">Future Expansion</h2>
            <p className="font-body text-lg max-w-2xl mx-auto mb-12 opacity-80">
              By March 2025, we plan to procure tractor attachments, electric
              saws, and additional tools, eventually transitioning management to
              a Farmer Producer Organisation (FPO).
            </p>
            <button className="bg-golden text-foreground font-display px-8 py-4 rounded-full hover:bg-white transition-colors">
              Support This Project
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AgriEquipmentBank;
