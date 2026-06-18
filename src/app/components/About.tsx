import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Target, Eye, Leaf, Shield, Users, Lightbulb, TrendingUp } from "lucide-react";
import simba2 from "../../imports/simba_2.jpeg";

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

export function About() {
  const values = [
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Protecting the environment through responsible resource recovery."
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "Operating with transparency and accountability."
    },
    {
      icon: Users,
      title: "Partnership",
      description: "Building long-term relationships with customers, suppliers, and communities."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Continually improving recovery and recycling systems."
    },
    {
      icon: TrendingUp,
      title: "Impact",
      description: "Creating measurable environmental and economic value."
    }
  ];

  const leadership = [
    { name: "Hanif Devji", title: "Director" },
    { name: "Alykhan Devji", title: "Head of Operations" },
    { name: "Dhwaj Devji", title: "Head of Sales" },
    { name: "Dhavan Devji", title: "Finance & Accounts" }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback 
            src={simba2}
            alt="About Simba Waste Management"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/70"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl mb-4"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl"
          >
            Building a sustainable future through innovative waste recovery
          </motion.p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl mb-8 text-center">Who We Are</h2>
            <p className="text-lg md:text-xl leading-relaxed text-foreground/80 text-center">
              Simba Waste Management was established with a simple vision: To create a more sustainable future by building efficient waste recovery systems that benefit businesses, communities, and the environment. Today, Simba partners with collectors, aggregators, manufacturers, and recycling mills across Kenya to recover thousands of tons of recyclable materials annually.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <motion.div 
              variants={fadeInUp}
              className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border-t-4 border-primary"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mb-6">
                <Target className="text-white" size={32} />
              </div>
              <h3 className="text-3xl mb-4">Our Mission</h3>
              <p className="text-lg leading-relaxed text-foreground/80">
                To provide innovative and sustainable waste recovery solutions that maximize resource value while minimizing environmental impact.
              </p>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border-t-4 border-secondary"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-purple-600 rounded-full flex items-center justify-center mb-6">
                <Eye className="text-white" size={32} />
              </div>
              <h3 className="text-3xl mb-4">Our Vision</h3>
              <p className="text-lg leading-relaxed text-foreground/80">
                To become East Africa's leading resource recovery and circular economy partner.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 {...fadeInUp} className="text-4xl md:text-5xl mb-16 text-center">
            Our Core Values
          </motion.h2>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6"
          >
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div 
                  key={index}
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-xl p-6 text-center hover:shadow-xl transition-all hover:-translate-y-2"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-lg mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 {...fadeInUp} className="text-4xl md:text-5xl mb-16 text-center">
            Leadership
          </motion.h2>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {leadership.map((leader, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-2"
              >
                <div className="w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="text-white text-4xl">
                    {leader.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <h3 className="text-xl mb-2">{leader.name}</h3>
                <p className="text-primary">{leader.title}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
