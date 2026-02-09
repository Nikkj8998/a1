import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  const navLinks = [
    { name: "About Whom", href: "#pillars" },
    { name: "Our Work", href: "#programs" },
    { name: "CSR Activities", href: "/csr-activities" },

    { name: "Vision", href: "#vision" },
    { name: "Connect", href: "#connect" },
  ];

  const handleNavClick = (href: string) => {
    if (href.startsWith("/")) {
      navigate(href);
      return;
    }

    if (isHomePage) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/" + href);
    }
  };

  return (
    <footer className="bg-forest-dark py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Description */}
          <div>
            <motion.div
              className="mb-6 block cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => navigate("/")}
            >
              <img
                src={logo}
                alt="Astha Foundation Logo"
                className="h-24 w-auto brightness-0 invert"
              />
            </motion.div>
            <p className="font-body text-cream/60 leading-relaxed">
              Association for Social Transformation & Human Advancement
            </p>
            <p className="font-body text-cream/40 text-sm mt-4">
              Empowering rural India through dignity, not charity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg text-cream mb-6">Explore</h4>
            <div className="space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="block font-body text-cream/60 hover:text-golden transition-colors text-left"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Location */}
          <div>
            <h4 className="font-display text-lg text-cream mb-6">Our Region</h4>
            <p className="font-body text-cream/60 leading-relaxed">
              Velhe Taluka
              <br />
              18 Gaon Maval Cluster
              <br />
              Pune District, Maharashtra
              <br />
              Western Ghats, India
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <p className="font-body text-sm text-cream/40 mx-auto">
            © {currentYear} Astha Foundation. All rights reserved. Designed by{" "}
            <a
              href="https://www.cybaemtech.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-golden transition-colors"
            >
              Cybaem Tech
            </a>
          </p>
          <p className="font-body text-sm text-cream/40 hidden md:block">
            Built with faith in rural India.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
