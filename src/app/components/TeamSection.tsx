import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import simba3 from "../../imports/simba_3.jpeg";

const team = [
  { name: "Hanif Devji", title: "Director", initials: "HD", color: "from-primary to-accent" },
  { name: "Alykhan Devji", title: "Head of Operations", initials: "AD", color: "from-secondary to-purple-500" },
  { name: "Dhwaj Devji", title: "Head of Sales", initials: "DD", color: "from-accent to-primary" },
  { name: "Dhavan Devji", title: "Finance & Accounts", initials: "DV", color: "from-purple-500 to-secondary" },
];

export function TeamSection() {
  return (
    <section id="team" className="py-32 bg-[#080a10] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/[0.04] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end gap-8 mb-20">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-px w-12 bg-secondary" />
              <span className="text-secondary text-sm font-[JetBrains_Mono] tracking-widest uppercase">Leadership</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-white max-w-lg"
            >
              The People Behind{" "}
              <span className="text-secondary">Simba</span>
            </motion.h2>
          </div>
          {/* Image teaser */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="hidden lg:block relative w-60 h-40 rounded-2xl overflow-hidden flex-shrink-0"
          >
            <ImageWithFallback
              src={simba3}
              alt="Operations"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#080a10]/60 to-transparent" />
          </motion.div>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className="group bg-white/[0.04] border border-white/[0.08] rounded-3xl p-8 text-center hover:border-white/20 transition-all duration-300 relative overflow-hidden cursor-default"
            >
              {/* Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl bg-gradient-to-b from-secondary/5 to-transparent" />

              {/* Avatar */}
              <div className="relative mx-auto mb-6 w-24 h-24">
                <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center mx-auto`}>
                  <span className="text-white text-2xl font-[Outfit] font-bold">{member.initials}</span>
                </div>
                {/* Ring animation */}
                <motion.div
                  className={`absolute inset-0 rounded-full bg-gradient-to-br ${member.color} opacity-0 group-hover:opacity-40 transition-opacity duration-300`}
                  style={{ filter: "blur(12px)" }}
                />
              </div>

              <h3 className="text-white mb-1" style={{ fontSize: "1.1rem" }}>{member.name}</h3>
              <p className="text-white/40 text-sm font-[JetBrains_Mono]">{member.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
