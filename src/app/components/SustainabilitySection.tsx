import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Trash2, TreePine, Zap, CloudOff, Leaf, MapPin, Users, Target } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import simba4 from "../../imports/simba_4.jpeg";

function ProgressBar({ percentage, color }: { percentage: number; color: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  return (
    <div ref={ref} className="relative h-1.5 bg-white/[0.08] rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={inView ? { width: `${percentage}%` } : { width: 0 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        className="absolute inset-y-0 left-0 rounded-full"
        style={{ background: color }}
      />
    </div>
  );
}

export function SustainabilitySection() {
  const impacts = [
    { icon: Trash2, title: "Landfill Waste Reduced", percentage: 85, color: "#10b981" },
    { icon: TreePine, title: "Natural Resources Conserved", percentage: 75, color: "#8b5cf6" },
    { icon: Zap, title: "Energy Consumption Lowered", percentage: 65, color: "#22c55e" },
    { icon: CloudOff, title: "Carbon Emissions Cut", percentage: 80, color: "#a78bfa" },
  ];

  const commitments = [
    { icon: MapPin, text: "Expanding recycling access across Kenya and neighbouring countries" },
    { icon: Leaf, text: "Supporting responsible waste management practices" },
    { icon: Users, text: "Creating economic opportunities through resource recovery" },
    { icon: Target, text: "Helping businesses achieve ESG and sustainability goals" },
  ];

  return (
    <section id="sustainability" className="py-32 bg-[#080a10] relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/[0.04] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-secondary/[0.04] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <div className="h-px w-12 bg-primary" />
            <span className="text-primary text-sm font-[JetBrains_Mono] tracking-widest uppercase">Impact</span>
            <div className="h-px w-12 bg-primary" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-white mb-6"
          >
            Building a{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Circular Economy
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-white/50 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            At Simba, waste is not waste — it's a valuable resource. By recovering recyclable paper, we help reduce demand for virgin raw materials while supporting sustainable manufacturing.
          </motion.p>
        </div>

        {/* Two columns: image + metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-3xl overflow-hidden aspect-square"
          >
            <ImageWithFallback
              src={simba4}
              alt="Sustainability efforts at Simba"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080a10] via-[#080a10]/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#080a10]/40 to-transparent" />
            {/* Quote overlay */}
            <div className="absolute bottom-8 left-8 right-8">
              <div className="bg-white/10 backdrop-blur-xl border border-white/15 rounded-2xl p-6">
                <p className="text-white/90 text-sm leading-relaxed italic">
                  "Every ton of paper recycled helps reduce landfill waste, conserve natural resources, and lower carbon emissions."
                </p>
                <div className="mt-3 text-primary text-xs font-[JetBrains_Mono]">— Simba Waste Management</div>
              </div>
            </div>
          </motion.div>

          {/* Impact metrics */}
          <div className="space-y-8">
            {impacts.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="group"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${item.color}15` }}
                    >
                      <Icon size={18} style={{ color: item.color }} />
                    </div>
                    <div className="flex-1 flex items-center justify-between">
                      <h4 className="text-white/80 text-base">{item.title}</h4>
                      <span className="font-[JetBrains_Mono] text-sm" style={{ color: item.color }}>
                        {item.percentage}%
                      </span>
                    </div>
                  </div>
                  <ProgressBar percentage={item.percentage} color={item.color} />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Commitments grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="border border-white/[0.08] rounded-3xl bg-white/[0.02] p-10"
        >
          <h3 className="text-white mb-8 text-center">Our Commitment to the Planet</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {commitments.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="flex items-start gap-4 p-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-primary/30 hover:bg-primary/[0.04] transition-all duration-300"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/15 flex items-center justify-center flex-shrink-0">
                    <Icon className="text-primary" size={16} />
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed">{item.text}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
