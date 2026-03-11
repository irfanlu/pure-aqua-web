import { Award, Users, Calendar, ThumbsUp } from "lucide-react";
import logoPa from "@/assets/logo-pa.jpeg";

const stats = [
  { icon: Calendar, value: "Since 2011", label: "Serving Since" },
  { icon: Users, value: "3000+", label: "Satisfied Customers" },
  { icon: Award, value: "15+", label: "Awards Won" },
  { icon: ThumbsUp, value: "99%", label: "Customer Satisfaction" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="font-heading font-semibold text-sm text-primary uppercase tracking-widest">About Us</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mt-2 mb-6">
              Delivering Pure Water <span className="text-gradient-water">Since 2011</span>
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-4">
              Purex Aqua has been a trusted name in water purification for over a decade. We are committed to providing the highest quality RO water purifiers that ensure every drop of water your family drinks is safe, clean, and healthy.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed mb-8">
              With 3000+ satisfied customers across the region, our mission is to make pure drinking water accessible to every household. Our advanced multi-stage purification technology removes impurities while retaining essential minerals.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-secondary rounded-xl p-4 text-center">
                  <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="font-heading font-bold text-xl text-foreground">{stat.value}</div>
                  <div className="text-muted-foreground text-xs font-body">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 gradient-water rounded-2xl opacity-20 blur-xl" />
              <img
                src={logoPa}
                alt="Purex Aqua - PA Logo"
                className="relative rounded-2xl shadow-2xl max-w-sm w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
