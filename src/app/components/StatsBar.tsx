import { motion, useInView } from "motion/react";
import { useRef, useEffect, useState } from "react";

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = 16;
    const increment = target / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, step);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export function StatsBar() {
  const stats = [
    { value: 1500, suffix: "+", label: "Tons Recovered Monthly" },
    { value: 47, suffix: "+", label: "Collection Sites Nationwide" },
    { value: 12, suffix: "+", label: "Years of Experience" },
    { value: 200, suffix: "+", label: "Business Partners" },
  ];

  return (
    <section className="relative z-10 py-0">
      <div className="relative overflow-hidden bg-gradient-to-r from-primary/90 via-accent/80 to-secondary/80 backdrop-blur-xl">
        {/* Shine sweep */}
        <motion.div
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatDelay: 3 }}
          className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg] pointer-events-none"
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl text-white mb-1" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800 }}>
                <CountUp target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-white/70 text-sm tracking-wide">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
