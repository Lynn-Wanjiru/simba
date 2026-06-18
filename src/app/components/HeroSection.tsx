import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowDown, Recycle, Leaf, Globe } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import simba1 from "../../imports/simba_1.jpeg";

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section id="hero" ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Parallax BG image */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <ImageWithFallback
          src={simba1}
          alt="Recycling facility"
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080a10]/80 via-[#080a10]/60 to-[#080a10]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080a10]/70 via-transparent to-[#080a10]/40" />
      </motion.div>

      {/* Animated orbs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 60, -30, 0], y: [0, -40, 60, 0], scale: [1, 1.2, 0.9, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, -80, 40, 0], y: [0, 60, -40, 0], scale: [1, 0.8, 1.3, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-secondary/25 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{ x: [0, 40, -60, 0], y: [0, -60, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 6 }}
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-accent/15 rounded-full blur-[80px]"
        />
      </div>

      {/* Floating stat badges */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute top-1/3 right-8 md:right-16 z-10 hidden md:flex flex-col gap-4"
      >
        {[
          { icon: Recycle, label: "1,500+", sub: "Tons / Month" },
          { icon: Leaf, label: "Eco", sub: "Certified" },
          { icon: Globe, label: "Nationwide", sub: "Network" },
        ].map((badge, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4 + i * 0.15, duration: 0.6 }}
            className="flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl px-4 py-3"
          >
            <badge.icon className="text-primary" size={20} />
            <div>
              <div className="text-white text-sm font-semibold font-[Outfit]">{badge.label}</div>
              <div className="text-white/40 text-xs">{badge.sub}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Main content */}
      <motion.div style={{ opacity }} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-24 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="inline-flex items-center gap-2 border border-primary/40 bg-primary/10 rounded-full px-4 py-1.5 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-primary text-sm font-[JetBrains_Mono] tracking-widest uppercase">Kenya's Leading Recycler</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-white mb-6 max-w-4xl"
        >
          Transforming{" "}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Waste
            </span>
          </span>{" "}
          Into Sustainable Value
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-white/60 text-lg md:text-xl max-w-2xl leading-relaxed mb-10"
        >
          Simba Waste Management is East Africa's trusted waste paper recovery partner — connecting businesses, collectors, and paper mills through a nationwide recycling network.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex flex-wrap gap-4"
        >
          <button
            onClick={() => scrollTo("services")}
            className="relative overflow-hidden group px-8 py-4 rounded-full bg-primary text-white font-[Outfit] font-semibold"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <span className="relative z-10">Our Services</span>
          </button>
          <button
            onClick={() => scrollTo("about")}
            className="px-8 py-4 rounded-full border border-white/20 text-white hover:bg-white/10 transition-all font-[Outfit] font-semibold backdrop-blur-sm"
          >
            Learn More
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollTo("about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/40 hover:text-white/80 transition-colors group"
      >
        <span className="text-xs font-[JetBrains_Mono] tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={18} />
        </motion.div>
      </motion.button>
    </section>
  );
}
