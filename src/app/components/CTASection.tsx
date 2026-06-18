import { motion } from "motion/react";
import { ArrowRight, Mail, Phone, MapPin, FileCheck } from "lucide-react";

export function CTASection() {
  return (
    <section id="contact" className="py-32 bg-[#080a10] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/[0.06] rounded-full blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-secondary/[0.06] rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        {/* ESG Partnership feature */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border border-white/[0.08] rounded-3xl bg-white/[0.03] backdrop-blur-sm overflow-hidden mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-10 lg:p-14 border-b lg:border-b-0 lg:border-r border-white/[0.08]">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-primary" />
                <span className="text-primary text-sm font-[JetBrains_Mono] tracking-widest uppercase">ESG Partnership</span>
              </div>
              <h2 className="text-white mb-6">Partner With Us for Impact</h2>
              <p className="text-white/50 leading-relaxed mb-8">
                We actively support organizations seeking to strengthen their environmental performance, sustainability reporting, circular economy initiatives, waste diversion targets, and corporate social responsibility programs.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Environmental reporting", "CSR programs", "Circular economy", "Waste diversion"].map((tag) => (
                  <span key={tag} className="px-4 py-1.5 rounded-full border border-primary/30 text-primary text-xs font-[JetBrains_Mono]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-10 lg:p-14 flex flex-col justify-between">
              <div>
                <FileCheck className="text-secondary mb-6" size={40} />
                <h3 className="text-white mb-4">Ready to Get Started?</h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  Let us help you achieve your sustainability goals. Our team is ready to build a custom recycling partnership tailored to your business needs.
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="mt-8 flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-accent text-white font-[Outfit] font-semibold self-start"
              >
                Get in Touch
                <ArrowRight size={18} />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Contact info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Mail, label: "Email Us", value: "info@simbawaste.co.ke", color: "#10b981" },
            { icon: Phone, label: "Call Us", value: "+254 700 000 000", color: "#8b5cf6" },
            { icon: MapPin, label: "Find Us", value: "Nairobi, Kenya", color: "#22c55e" },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-7 flex items-center gap-5 hover:border-white/20 transition-all duration-300"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${item.color}15` }}
                >
                  <Icon size={20} style={{ color: item.color }} />
                </div>
                <div>
                  <div className="text-white/40 text-xs font-[JetBrains_Mono] mb-1">{item.label}</div>
                  <div className="text-white text-sm font-medium">{item.value}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
