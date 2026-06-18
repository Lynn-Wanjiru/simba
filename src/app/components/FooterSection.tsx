import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Recycle } from "lucide-react";
import logo from "../../imports/SWM_Logo.jpeg";

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function FooterSection() {
  const links = [
    { label: "Home", id: "hero" },
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Sustainability", id: "sustainability" },
    { label: "Team", id: "team" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <footer className="bg-[#050709] border-t border-white/[0.05] py-16 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-primary/[0.03] blur-[80px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-12">
          {/* Logo */}
          <button onClick={() => scrollTo("hero")} className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
              <ImageWithFallback
                src={logo}
                alt="Simba Waste Management"
                className="h-12 w-auto object-contain relative z-10 rounded-md"
              />
            </div>
          </button>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-white/40 hover:text-white text-sm transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="border-t border-white/[0.05] pt-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-sm">
            © {new Date().getFullYear()} Simba Waste Management. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-white/25 text-sm">
            <Recycle size={14} className="text-primary" />
            <span>Closing the loop on waste, one ton at a time.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
