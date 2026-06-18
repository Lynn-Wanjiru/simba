import { motion } from "motion/react";
import { Leaf, Shield, Users, Lightbulb, TrendingUp } from "lucide-react";

const values = [
  { icon: Leaf, title: "Sustainability", description: "Protecting the environment through responsible resource recovery.", color: "#10b981" },
  { icon: Shield, title: "Integrity", description: "Operating with transparency and accountability in every action.", color: "#8b5cf6" },
  { icon: Users, title: "Partnership", description: "Building long-term relationships with customers, suppliers, and communities.", color: "#22c55e" },
  { icon: Lightbulb, title: "Innovation", description: "Continually improving our recovery and recycling systems.", color: "#a78bfa" },
  { icon: TrendingUp, title: "Impact", description: "Creating measurable environmental and economic value every day.", color: "#34d399" },
];

export function ValuesSection() {
  return (
    <section className="py-28 bg-[#0a0c14] relative overflow-hidden">
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)`,
          backgroundSize: "80px 80px"
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <div className="h-px w-12 bg-secondary" />
            <span className="text-secondary text-sm font-[JetBrains_Mono] tracking-widest uppercase">Core Values</span>
            <div className="h-px w-12 bg-secondary" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-white"
          >
            The Principles That Drive Us
          </motion.h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {values.map((value, i) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6, type: "spring", stiffness: 150 }}
                whileHover={{ scale: 1.05, y: -6, transition: { duration: 0.2 } }}
                className="relative group bg-white/[0.04] border border-white/[0.08] rounded-3xl p-8 w-full sm:w-56 text-center hover:border-white/20 transition-all duration-300 cursor-default"
              >
                {/* Glow */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                  style={{ background: `radial-gradient(circle at 50% 30%, ${value.color}12, transparent 70%)` }}
                />
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 transition-all duration-300"
                  style={{ backgroundColor: `${value.color}15` }}
                >
                  <Icon size={28} style={{ color: value.color }} />
                </div>
                <h3 className="text-white mb-3" style={{ fontSize: "1.1rem" }}>{value.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
