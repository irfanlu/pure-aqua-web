import {
  Droplets,
  ShieldCheck,
  Zap,
  Leaf,
  Wrench,
  Gauge,
} from "lucide-react";

const features = [
  {
    icon: Droplets,
    title: "7-Stage Purification",
    desc: "Multi-stage RO+UV+UF technology removes 99.9% impurities.",
  },
  {
    icon: ShieldCheck,
    title: "100% Safe Water",
    desc: "Eliminates bacteria, viruses, and heavy metals completely.",
  },
  {
    icon: Leaf,
    title: "Mineral Retention",
    desc: "TDS controller retains essential minerals for healthy water.",
  },
  {
    icon: Zap,
    title: "Energy Efficient",
    desc: "Low power consumption with auto shut-off technology.",
  },
  {
    icon: Gauge,
    title: "High Flow Rate",
    desc: "Fast purification with up to 15 litres per hour capacity.",
  },
  {
    icon: Wrench,
    title: "Easy Maintenance",
    desc: "Quick-change filters with annual maintenance contracts available.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="font-heading font-semibold text-sm text-primary uppercase tracking-widest">Why Choose Us</span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mt-2">
            Purex Aqua RO <span className="text-gradient-water">Features</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg hover:border-primary/30 transition-all group"
            >
              <div className="w-12 h-12 gradient-water rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <f.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-bold text-lg text-foreground mb-2">{f.title}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
