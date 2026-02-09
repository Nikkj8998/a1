import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const AboutUs = () => {
  const trustees = [
    { name: "Vikramjit Mehmi", role: "Chairman and Managing Trustee" },
    { name: "Satish Khade", role: "Trustee and signatory" },
    { name: "Sudam Dagadu Zende", role: "Trustee" },
    { name: "Dattatraya Maruti Mulay", role: "Trustee and the Settler of the ASTHA Trust" },
    { name: "Pramod Dattatraya Kale", role: "Trustee" },
    { name: "Biren Sudhir Vora", role: "Trustee" },
    { name: "Sanjay Mahadeo Bobade", role: "Trustee" },
    { name: "Suresh Rajaram Dere", role: "Trustee (Historical)" },
    { name: "Ramakant Raghunath Kulkarni", role: "Trustee (Historical)" },
  ];

  const leadership = [
    { name: "Ms Seemantinee Khot", role: "Director and Senior Consultant" },
    { name: "Dr Anagha Joshi", role: "Director and Senior Consultant" },
    { name: "Mr Raosaheb Badhe", role: "Chief Operating Officer (COO)" },
  ];

  const fieldTeam = [
    { name: "Kiran Reddy Avuthu", role: "Field assessments and evaluations" },
    { name: "Dr Ranveer Sing", role: "Field visits and assessments (Environmental & Educational)" },
    { name: "Raosaheb (R.K.) Badhe", role: "Field visits and beneficiary interactions" },
    { name: "Local Project Driver", role: "E-Rickshaw service in Pasali Valley" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-forest-dark text-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-5xl md:text-7xl mb-6"
          >
            About Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-xl md:text-2xl max-w-3xl text-cream/80"
          >
            Empowering marginalized communities through holistic and sustainable development.
          </motion.p>
        </div>
      </section>

      {/* Vision, Mission, Goal */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-3 gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="font-display text-3xl text-forest-dark">Our Vision</h2>
            <p className="font-body text-forest-dark/80 leading-relaxed">
              To be a catalyst for profound social transformation and human advancement, creating a world where every individual has the opportunity to live a life of dignity, self-reliance, and prosperity through holistic and sustainable development.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h2 className="font-display text-3xl text-forest-dark">Our Mission</h2>
            <p className="font-body text-forest-dark/80 leading-relaxed">
              To empower marginalized communities and vulnerable groups by implementing high-impact initiatives in education, health, livelihood, and environmental conservation, while providing strategic expertise to increase the effectiveness of social development projects.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="space-y-4"
          >
            <h2 className="font-display text-3xl text-forest-dark">Our Goal</h2>
            <p className="font-body text-forest-dark/80 leading-relaxed">
              Ultimately, we strive to make every region we touch "Sujlam, Suflam"—rich in resources and abundant in opportunity—ensuring that human advancement goes hand-in-hand with ecological and social harmony.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Sections */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="font-display text-4xl text-forest-dark mb-10 text-center">Board of Trustees</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {trustees.map((member, idx) => (
                <div key={idx} className="p-6 rounded-lg bg-cream/30 border border-forest-dark/10">
                  <h3 className="font-display text-xl text-forest-dark">{member.name}</h3>
                  <p className="font-body text-forest-dark/60">{member.role}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="font-display text-4xl text-forest-dark mb-10 text-center">Senior Leadership</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {leadership.map((member, idx) => (
                <div key={idx} className="p-6 rounded-lg bg-cream/30 border border-forest-dark/10">
                  <h3 className="font-display text-xl text-forest-dark">{member.name}</h3>
                  <p className="font-body text-forest-dark/60">{member.role}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl text-forest-dark mb-10 text-center">Field Team & Personnel</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {fieldTeam.map((member, idx) => (
                <div key={idx} className="p-6 rounded-lg bg-cream/30 border border-forest-dark/10">
                  <h3 className="font-display text-xl text-forest-dark">{member.name}</h3>
                  <p className="font-body text-forest-dark/60">{member.role}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
