import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Leaf, Trash2, TreePine, Zap, CloudOff, MapPin, Users, Target, TrendingUp, FileCheck, ArrowRight } from "lucide-react";
import simba4 from "../../imports/simba_4.jpeg";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
  viewport: { once: true }
};

export function Sustainability() {
  const impacts = [
    {
      icon: Trash2,
      title: "Reduced Landfill Waste",
      description: "Less waste entering dumpsites and landfills.",
      percentage: 85,
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: TreePine,
      title: "Conservation of Natural Resources",
      description: "Reduced pressure on forests and raw material extraction.",
      percentage: 75,
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: Zap,
      title: "Lower Energy Consumption",
      description: "Recycled paper generally requires less energy to process than virgin materials.",
      percentage: 65,
      color: "from-purple-500 to-violet-600"
    },
    {
      icon: CloudOff,
      title: "Reduced Carbon Emissions",
      description: "Recovering and recycling paper reduces greenhouse gas emissions.",
      percentage: 80,
      color: "from-orange-500 to-red-600"
    }
  ];

  const commitments = [
    {
      icon: MapPin,
      text: "Expanding recycling access across Kenya and neighbouring countries"
    },
    {
      icon: Leaf,
      text: "Supporting responsible waste management practices"
    },
    {
      icon: Users,
      text: "Creating economic opportunities through resource recovery"
    },
    {
      icon: Target,
      text: "Helping businesses achieve sustainability goals"
    },
    {
      icon: TrendingUp,
      text: "Driving measurable environmental impact"
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback 
            src={simba4}
            alt="Sustainability and Impact"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-emerald-900/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl mb-4"
          >
            Building a Circular Economy
          </motion.h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center">
            <p className="text-xl md:text-2xl leading-relaxed text-foreground/80">
              At Simba Waste Management, waste is not waste. It is a valuable resource that can be recovered, reused, and returned to production. By recovering recyclable paper, we help reduce demand for virgin raw materials while supporting sustainable manufacturing practices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Environmental Impact Metrics */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 {...fadeInUp} className="text-4xl md:text-5xl mb-16 text-center">
            Environmental Impact
          </motion.h2>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {impacts.map((impact, index) => {
              const Icon = impact.icon;
              return (
                <motion.div 
                  key={index}
                  variants={fadeInUp}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="flex items-start gap-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${impact.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <Icon className="text-white" size={28} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl mb-2">{impact.title}</h3>
                      <p className="text-muted-foreground mb-4">{impact.description}</p>
                      <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${impact.percentage}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: 0.5 }}
                          className={`absolute inset-y-0 left-0 bg-gradient-to-r ${impact.color} rounded-full`}
                        />
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">Impact level: {impact.percentage}%</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 {...fadeInUp} className="text-4xl md:text-5xl mb-16 text-center">
            Our Commitment
          </motion.h2>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          >
            {commitments.map((commitment, index) => {
              const Icon = commitment.icon;
              return (
                <motion.div 
                  key={index}
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-white to-green-50 border-2 border-primary/20 rounded-xl p-6 hover:border-primary transition-all hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon className="text-white" size={20} />
                    </div>
                    <p className="text-foreground/80 leading-relaxed pt-2">{commitment.text}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ESG Partnership Section */}
      <section className="py-20 bg-gradient-to-br from-green-900 to-emerald-800 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            {...fadeInUp}
            className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl p-8 md:p-12"
          >
            <div className="flex items-start gap-6 mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                <FileCheck className="text-white" size={32} />
              </div>
              <div>
                <h2 className="text-4xl mb-4">ESG Partnership</h2>
                <p className="text-xl leading-relaxed opacity-90">
                  We actively support organizations seeking to strengthen their Environmental performance, Sustainability reporting, Circular economy initiatives, Waste diversion targets, and Corporate social responsibility programs.
                </p>
              </div>
            </div>
            <button className="bg-white text-primary px-8 py-4 rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 flex items-center gap-2 mx-auto md:mx-0">
              Partner With Us
              <ArrowRight size={20} />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
