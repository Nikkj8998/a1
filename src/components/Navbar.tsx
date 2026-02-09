import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Handle scrolling to section if there's a hash in the URL on home page
    if (isHomePage && location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [isHomePage, location.hash]);

  const programs = [
    { title: "Swadhar", href: "/swadhar" },
    { title: "Equipment Bank", href: "/agri-equipment-bank" },
    { title: "Organic Farming", href: "/organic-farming" },
    { title: "Solar Power", href: "/solar-power" },
    { title: "E-Riksha", href: "/e-riksha" },
    { title: "Bamboo Plantation Study", href: "/bamboo-plantation-study" },
  ];

  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      if (isHomePage) {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        navigate("/" + href);
      }
    } else {
      navigate(href);
    }
    setIsMobileMenuOpen(false);
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isHomePage) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
      window.scrollTo({ top: 0, behavior: "instant" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-lg py-3"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link to="/" onClick={handleLogoClick} className="flex items-center">
            <motion.div whileHover={{ scale: 1.05 }}>
              <img
                src={logo}
                alt="Astha Foundation Logo"
                className={`h-16 w-auto md:h-20 transition-all duration-300 ${
                  isScrolled ? "brightness-0" : "brightness-0 invert"
                }`}
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => handleNavClick("#pillars")}
              className={`font-body text-sm font-medium tracking-wide transition-all duration-300 hover:opacity-70 ${
                isScrolled ? "text-foreground" : "text-cream"
              }`}
            >
              About Whom
            </button>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={`bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent font-body text-sm font-medium tracking-wide transition-all duration-300 hover:opacity-70 border-none h-auto p-0 ${
                      isScrolled ? "text-foreground" : "text-cream"
                    }`}
                  >
                    Our Work
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-3 p-4 bg-background border border-border rounded-md shadow-xl">
                      {programs.map((program) => (
                        <li key={program.title}>
                          <NavigationMenuLink asChild>
                            <button
                              onClick={() => handleNavClick(program.href)}
                              className="block w-full select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:!text-black text-sm font-medium text-black text-left"
                            >
                              {program.title}
                            </button>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <button
              onClick={() => handleNavClick("/partners")}
              className={`font-body text-sm font-medium tracking-wide transition-all duration-300 hover:opacity-70 ${
                isScrolled ? "text-foreground" : "text-cream"
              }`}
            >
              Our Partners
            </button>

            <button
              onClick={() => handleNavClick("/testimonials")}
              className={`font-body text-sm font-medium tracking-wide transition-all duration-300 hover:opacity-70 ${
                isScrolled ? "text-foreground" : "text-cream"
              }`}
            >
              Testimonials
            </button>
            <button
              onClick={() => handleNavClick("#vision")}
              className={`font-body text-sm font-medium tracking-wide transition-all duration-300 hover:opacity-70 ${
                isScrolled ? "text-foreground" : "text-cream"
              }`}
            >
              Vision
            </button>
            <button
              onClick={() => handleNavClick("/about-us")}
              className={`font-body text-sm font-medium tracking-wide transition-all duration-300 hover:opacity-70 ${
                isScrolled ? "text-foreground" : "text-cream"
              }`}
            >
              About Us
            </button>
            <button
              onClick={() => handleNavClick("#connect")}
              className={`font-body text-sm font-medium tracking-wide transition-all duration-300 px-6 py-2 rounded-md border-2 ${
                isScrolled
                  ? "border-[#2E6142] text-foreground hover:bg-[#2E6142] hover:text-white"
                  : "border-[#2E6142] text-white hover:bg-[#2E6142] hover:text-white"
              }`}
            >
              Connect
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 transition-colors ${
              isScrolled ? "text-foreground" : "text-cream"
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-forest-dark pt-24 overflow-y-auto"
          >
            <div className="flex flex-col items-center gap-6 py-12">
              <button
                onClick={() => handleNavClick("#pillars")}
                className="font-display text-2xl text-cream hover:text-golden transition-colors"
              >
                About Whom
              </button>

              <div className="flex flex-col items-center gap-4">
                <span className="font-display text-2xl text-golden">
                  Our Work
                </span>
                {programs.map((program) => (
                  <button
                    key={program.title}
                    onClick={() => handleNavClick(program.href)}
                    className="font-body text-lg text-cream/80 hover:text-golden transition-colors"
                  >
                    {program.title}
                  </button>
                ))}
              </div>

              <button
                onClick={() => handleNavClick("/partners")}
                className="font-display text-2xl text-cream hover:text-golden transition-colors"
              >
                Our Partners
              </button>

              <button
                onClick={() => handleNavClick("/testimonials")}
                className="font-display text-2xl text-cream hover:text-golden transition-colors"
              >
                Testimonials
              </button>

              <button
                onClick={() => handleNavClick("#vision")}
                className="font-display text-2xl text-cream hover:text-golden transition-colors"
              >
                Vision
              </button>
              <button
                onClick={() => handleNavClick("/about-us")}
                className="font-display text-2xl text-cream hover:text-golden transition-colors"
              >
                About Us
              </button>
              <button
                onClick={() => handleNavClick("#connect")}
                className="font-display text-2xl text-cream hover:text-golden transition-colors"
              >
                Connect
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
