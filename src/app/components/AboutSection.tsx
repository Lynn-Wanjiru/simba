import { motion } from "motion/react";
import { Target, Eye, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import simba2 from "../../imports/simba_2.jpeg";

export function AboutSection() {
  return (
    <section id="about" className="py-32 bg-[#080a10] relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="h-px w-12 bg-primary" />
          <span className="text-primary text-sm font-[JetBrains_Mono] tracking-widest uppercase">Who We Are</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-white mb-6"
            >
              Built on a Vision for a{" "}
              <span className="text-primary">Sustainable</span> Future
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="text-white/60 text-lg leading-relaxed mb-8"
            >
              Simba Waste Management was established with a simple vision: to create efficient waste recovery systems that benefit businesses, communities, and the environment. Today, we partner with collectors, aggregators, manufacturers, and recycling mills across Kenya to recover thousands of tons of recyclable materials annually.
            </motion.p>

            {/* Mission & Vision cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: Target,
                  color: "from-primary to-accent",
                  title: "Our Mission",
                  text: "To provide innovative sustainable waste recovery solutions that maximize resource value while minimizing environmental impact."
                },
                {
                  icon: Eye,
                  color: "from-secondary to-purple-500",
                  title: "Our Vision",
                  text: "To become East Africa's leading resource recovery and circular economy partner."
                }
              ].map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6 backdrop-blur-sm group"
                >
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-4`}>
                    <card.icon className="text-white" size={20} />
                  </div>
                  <h4 className="text-white mb-2">{card.title}</h4>
                  <p className="text-white/50 text-sm leading-relaxed">{card.text}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5]">
              <ImageWithFallback
                src={simba2}
                alt="Simba Waste Management operations"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080a10] via-transparent to-transparent" />
              {/* Floating overlay badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-white text-2xl font-[Outfit] font-bold">Est. 2010+</div>
                    <div className="text-white/50 text-sm">Pioneering sustainable recycling in Kenya</div>
                  </div>
                  <ArrowRight className="text-primary" size={24} />
                </div>
              </div>
            </div>
            {/* Decorative border glow */}
            <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/20 -z-10 blur-sm" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
