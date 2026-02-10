import { motion } from "framer-motion";
import { TrendingUp, Users, Leaf, CheckCircle2 } from "lucide-react";

const HolisticModel = () => {
  const pillars = [
    {
      title: "Economic Empowerment",
      subtitle: "Livelihoods & Innovation",
      icon: <TrendingUp className="w-8 h-8 text-forest" />,
      description:
        "We revitalize the local economy by modernising traditional practices and building new skill sets.",
      items: [
        "Sustainable Agriculture: High-value rabi crops and organic training.",
        "Livestock Development: Genetic improvement and fair market pricing.",
        "Entrepreneurship: Seed capital and mentorship for local ventures.",
        "Skill-Based Training: E-Rickshaw drivers and paravet training.",
        "Equipment Bank: Subsidized tools saving manual labor.",
      ],
    },
    {
      title: "Social & Political Strengthening",
      subtitle: "Building Community Power",
      icon: <Users className="w-8 h-8 text-forest" />,
      description:
        "We foster collective action and transparent governance to ensure long-term stability.",
      items: [
        "Farmer Producing Organisations: Shared Sustainability Funds.",
        "Organisation Buildup: Women-led poultry and local service networks.",
        "Political Impact: Capacity building for local Panchayats.",
        "Co-Investment Model: Matching grants to encourage ownership.",
      ],
    },
    {
      title: "Environmental Stewardship",
      subtitle: "Conservation & Climate Action",
      icon: <Leaf className="w-8 h-8 text-forest" />,
      description:
        "We protect the Western Ghats' biodiversity while empowering the community economically.",
      items: [
        "Water Conservation: Addressing scarcity through fodder cultivation.",
        "Biodiversity: Native Tree Nursery with 5,000+ saplings.",
        "Solar Processing: Reducing carbon footprints and travel costs.",
        "Eco-Melas: Reviving traditional knowledge and resilient foods.",
      ],
    },
  ];

  return (
    <section id="holistic-model" className="pt-24 pb-0 bg-cream/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl text-forest mb-6">
            Our Pathways to Self-Reliance
          </h2>
          <p className="font-body text-lg text-forest-light max-w-3xl mx-auto">
            To enhance the rural ecosystem, ASTHA implements an integrated
            strategy that transforms local resources into pathways for economic,
            social, and environmental resilience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
                borderColor: "rgba(46, 97, 66, 0.2)"
              }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.1,
                y: { duration: 0.3, ease: "easeOut" }
              }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-forest/5 flex flex-col cursor-default transition-colors duration-300"
            >
              <div className="mb-6 p-4 bg-forest/5 rounded-xl w-fit">
                {pillar.icon}
              </div>
              <h3 className="font-display text-2xl text-forest mb-2">
                {pillar.title}
              </h3>
              <p className="font-body font-semibold text-golden mb-4">
                {pillar.subtitle}
              </p>
              <p className="font-body text-forest-light mb-6 flex-grow">
                {pillar.description}
              </p>

              <ul className="space-y-3 mt-auto">
                {pillar.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm font-body text-forest-light"
                  >
                    <CheckCircle2 className="w-5 h-5 text-forest shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HolisticModel;
