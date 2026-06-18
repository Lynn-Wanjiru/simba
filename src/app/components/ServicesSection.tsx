import { motion } from "motion/react";
import { useState } from "react";
import { Recycle, Building2, Factory, Shield, Network, CheckCircle2, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Recycle,
    tag: "01",
    title: "Waste Paper Collection",
    description: "Collection and aggregation of recyclable paper materials from businesses, institutions, warehouses, retailers, and industrial facilities.",
    items: ["OCC (Old Corrugated Cartons)", "Brown Waste Paper", "Kraft Paper", "White Office Paper", "Mixed Paper", "Printing & Packaging Waste"],
    accent: "#10b981",
  },
  {
    icon: Building2,
    tag: "02",
    title: "Corporate Recycling Programs",
    description: "We design tailored recycling programs for businesses ready to reduce costs and meet ESG goals.",
    items: ["Reduce waste disposal costs", "Improve recycling rates", "Meet ESG goals", "Improve sustainability reporting"],
    accent: "#8b5cf6",
  },
  {
    icon: Factory,
    tag: "03",
    title: "Industrial Waste Recovery",
    description: "Large-scale recovery operations for manufacturing, packaging, warehousing, and distribution sectors.",
    items: ["Manufacturing facilities", "Packaging companies", "Warehouses", "Distribution centers", "Retail chains"],
    accent: "#22c55e",
  },
  {
    icon: Shield,
    tag: "04",
    title: "Secure Document Destruction",
    description: "Certified destruction of confidential paper materials for compliance-sensitive industries.",
    items: ["Banks & Financial institutions", "Insurance companies", "Government institutions", "Corporate offices"],
    accent: "#a78bfa",
  },
  {
    icon: Network,
    tag: "05",
    title: "Nationwide Collection Network",
    description: "Our extensive partner network ensures efficient, reliable movement of recyclables across Kenya.",
    items: ["Waste collectors", "Collection centers", "Aggregators", "County-level partners"],
    accent: "#34d399",
  },
];

export function ServicesSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="services" className="py-32 bg-[#080a10] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/[0.03] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary text-sm font-[JetBrains_Mono] tracking-widest uppercase">What We Do</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-white max-w-xl"
            >
              Comprehensive Waste{" "}
              <span className="text-primary">Recovery Solutions</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-white/50 max-w-sm leading-relaxed lg:text-right"
          >
            Tailored services for every scale — from single-site offices to nationwide industrial operations.
          </motion.p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            const isHovered = hovered === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                onHoverStart={() => setHovered(i)}
                onHoverEnd={() => setHovered(null)}
                className="relative group cursor-default rounded-3xl border border-white/[0.08] bg-white/[0.03] overflow-hidden p-8 hover:border-white/20 transition-all duration-500"
              >
                {/* Glow on hover */}
                <motion.div
                  animate={{ opacity: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: `radial-gradient(circle at 40% 40%, ${service.accent}15, transparent 70%)` }}
                />

                {/* Tag */}
                <div className="text-white/10 text-6xl font-[Outfit] font-black absolute top-6 right-8 select-none">
                  {service.tag}
                </div>

                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300"
                  style={{ backgroundColor: `${service.accent}20`, color: service.accent }}
                >
                  <Icon size={26} />
                </div>

                <h3 className="text-white mb-3">{service.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-6">{service.description}</p>

                <ul className="space-y-2">
                  {service.items.slice(0, 4).map((item, j) => (
                    <li key={j} className="flex items-center gap-2.5 text-sm text-white/40">
                      <CheckCircle2 size={14} style={{ color: service.accent }} className="flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Arrow reveal */}
                <motion.div
                  animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
                  className="absolute bottom-6 right-6"
                  style={{ color: service.accent }}
                >
                  <ArrowRight size={20} />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
