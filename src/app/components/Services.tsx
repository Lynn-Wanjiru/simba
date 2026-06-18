import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Recycle, Building2, Factory, Shield, Network, FileText, CheckCircle2 } from "lucide-react";
import simba3 from "../../imports/simba_3.jpeg";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.15 } },
  viewport: { once: true }
};

export function Services() {
  const services = [
    {
      icon: Recycle,
      title: "Waste Paper Collection",
      items: [
        "OCC (Old Corrugated Cartons)",
        "Brown Waste Paper",
        "Kraft Paper",
        "White Office Paper",
        "Mixed Paper",
        "Printing & Packaging Waste"
      ],
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Building2,
      title: "Corporate Recycling Programs",
      items: [
        "Reduce waste disposal costs",
        "Improve recycling rates",
        "Meet ESG goals",
        "Improve sustainability reporting"
      ],
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: Factory,
      title: "Industrial Waste Recovery",
      items: [
        "Manufacturing facilities",
        "Packaging companies",
        "Warehouses",
        "Distribution centers",
        "Retail chains"
      ],
      color: "from-purple-500 to-violet-600"
    },
    {
      icon: Shield,
      title: "Secure Document Destruction",
      items: [
        "Banks",
        "Insurance companies",
        "Government institutions",
        "Corporate offices"
      ],
      color: "from-orange-500 to-red-600"
    },
    {
      icon: Network,
      title: "Nationwide Collection Partnerships",
      items: [
        "Waste collectors",
        "Collection centers",
        "Aggregators",
        "County-level partners"
      ],
      color: "from-teal-500 to-green-600"
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback 
            src={simba3}
            alt="Simba Waste Management Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-purple-900/70"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl mb-6"
          >
            Sustainable Waste Management Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl"
          >
            Comprehensive recovery services tailored to your business needs
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div 
                  key={index}
                  variants={fadeInUp}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 group"
                >
                  <div className={`bg-gradient-to-r ${service.color} p-8 text-white`}>
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon size={32} />
                    </div>
                    <h3 className="text-2xl">{service.title}</h3>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3">
                      {service.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={20} />
                          <span className="text-foreground/80">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl mb-6">Ready to Get Started?</h2>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Let us help you achieve your sustainability goals with our comprehensive waste management solutions.
            </p>
            <button className="bg-white text-primary px-8 py-4 rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105">
              Contact Us Today
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
