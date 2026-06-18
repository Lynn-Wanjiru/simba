import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import logo from "../../imports/SWM_Logo.jpeg";

const navItems = [
  { label: "Home", id: "hero" },
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Sustainability", id: "sustainability" },
  { label: "Team", id: "team" },
];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = navItems.map(n => document.getElementById(n.id));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i];
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(navItems[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-gray-200 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
        {/* Logo */}
        <button onClick={() => scrollTo("hero")} className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/30 rounded-lg blur-md group-hover:blur-lg transition-all" />
            <ImageWithFallback
              src={logo}
              alt="Simba Waste Management"
              className="h-12 w-auto object-contain relative z-10 rounded-md"
            />
          </div>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`relative px-5 py-2 rounded-full text-sm transition-all duration-300 ${
                active === item.id
                  ? "text-gray-900"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {active === item.id && (
                <motion.div
                  layoutId="pill"
                  className="absolute inset-0 rounded-full bg-gray-100 border border-gray-300"
                  transition={{ type: "spring", stiffness: 350, damping: 35 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </button>
          ))}
        </nav>

        <button
          onClick={() => scrollTo("contact")}
          className="hidden md:flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary text-white text-sm relative overflow-hidden group"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-primary to-accent"
            initial={{ x: "100%" }}
            whileHover={{ x: 0 }}
            transition={{ duration: 0.3 }}
          />
          <span className="relative z-10">Get Started</span>
        </button>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-gray-900 p-2"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200 px-6 py-6 flex flex-col gap-3"
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => { scrollTo(item.id); setMobileOpen(false); }}
              className={`text-left py-3 px-4 rounded-xl text-base transition-all ${
                active === item.id
                  ? "bg-primary/10 text-primary"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => { scrollTo("contact"); setMobileOpen(false); }}
            className="mt-2 py-3 px-4 rounded-xl bg-primary text-white text-center"
          >
            Get Started
          </button>
        </motion.div>
      )}
    </motion.header>
  );
}
