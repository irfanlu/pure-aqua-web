import { Droplets, ShieldCheck } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-navy/70" />
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 bg-aqua/20 border border-aqua/30 rounded-full px-4 py-1.5 mb-6">
          <Droplets className="w-4 h-4 text-aqua" />
          <span className="text-aqua font-heading text-sm font-medium">Pure Water, Pure Life</span>
        </div>
        <h1 className="font-heading font-extrabold text-4xl md:text-6xl lg:text-7xl text-navy-foreground leading-tight mb-6">
          Clean & Safe Drinking
          <br />
          <span className="text-aqua">Water For Every Home</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-navy-foreground/80 font-body mb-8">
          Trusted by 3000+ families since 2011. Purex Aqua delivers advanced RO purification
          technology to ensure your family drinks only the purest water.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#products"
            className="gradient-water text-primary-foreground px-8 py-3.5 rounded-full font-heading font-bold text-base hover:opacity-90 transition-opacity shadow-lg"
          >
            Explore Products
          </a>
          <a
            href="#contact"
            className="border-2 border-navy-foreground/30 text-navy-foreground px-8 py-3.5 rounded-full font-heading font-bold text-base hover:bg-navy-foreground/10 transition-colors"
          >
            Contact Us
          </a>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16">
          {[
            { value: "14+", label: "Years Experience" },
            { value: "3000+", label: "Happy Customers" },
            { value: "100%", label: "Pure Water" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-heading font-extrabold text-3xl md:text-4xl text-aqua">{stat.value}</div>
              <div className="text-navy-foreground/70 font-body text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
