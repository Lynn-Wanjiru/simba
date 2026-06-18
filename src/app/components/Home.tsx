import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Recycle, PackageCheck, Leaf, TrendingUp, Building2, Factory, Shield, Network } from "lucide-react";
import simba1 from "../../imports/simba_1.jpeg";

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

export function Home() {
  const stats = [
    { value: "1,500+", label: "Tons Recovered Monthly" },
    { value: "Nationwide", label: "Collection Network" },
    { value: "Multiple", label: "Strategic Collection Sites" },
    { value: "Trusted", label: "Industry Partnerships" }
  ];

  const services = [
    {
      icon: Recycle,
      title: "Waste Paper Collection",
      description: "Collection and aggregation of recyclable paper materials from businesses, institutions, warehouses, retailers, and industrial facilities."
    },
    {
      icon: PackageCheck,
      title: "Sorting & Processing",
      description: "Materials are professionally sorted and graded to maximize recovery and recycling efficiency."
    },
    {
      icon: Leaf,
      title: "Sustainable Recycling Solutions",
      description: "We work closely with paper manufacturers and recycling mills to ensure recovered materials are reintroduced into the production cycle."
    },
    {
      icon: TrendingUp,
      title: "Logistics & Supply Chain Support",
      description: "Our collection network ensures efficient movement of recyclable materials throughout Kenya."
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback 
            src={simba1}
            alt="Recycling facility"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight"
          >
            Transforming Waste Into Sustainable Value
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto mb-8 leading-relaxed"
          >
            Simba Waste Management is one of Kenya's leading waste paper recovery and recycling partners, connecting businesses, institutions, collectors, and paper mills through a reliable and environmentally responsible collection network.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button className="bg-primary hover:bg-accent text-white px-8 py-4 rounded-lg transition-all transform hover:scale-105">
              Get Started
            </button>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats Bar */}
      <section className="bg-gradient-to-r from-primary to-accent py-12">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              variants={fadeInUp}
              className="text-center text-white"
            >
              <div className="text-4xl md:text-5xl mb-2">{stat.value}</div>
              <div className="text-sm md:text-base opacity-90">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            {...fadeInUp}
            className="text-4xl md:text-5xl text-center mb-16"
          >
            What We Do
          </motion.h2>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div 
                  key={index}
                  variants={fadeInUp}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Sustainability Statement */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            {...fadeInUp}
            className="bg-white/80 backdrop-blur-sm border-2 border-primary/20 rounded-2xl p-8 md:p-12 shadow-xl"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <Leaf className="text-white" size={24} />
              </div>
              <div>
                <p className="text-lg md:text-xl leading-relaxed text-foreground">
                  Every ton of paper recycled helps reduce landfill waste, conserve natural resources, and lower carbon emissions associated with virgin paper production. At Simba Waste Management, sustainability is not simply a service—it is the foundation of everything we do.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
