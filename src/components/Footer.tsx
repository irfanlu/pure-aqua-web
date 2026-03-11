import { MapPin, Phone, Mail, Clock } from "lucide-react";
import logoPurex from "@/assets/logo-purex.jpeg";

const Footer = () => {
  return (
    <footer id="contact" className="gradient-dark text-navy-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logoPurex} alt="Purex Aqua" className="h-12 w-auto rounded" />
              <span className="font-heading font-bold text-xl">
                Purex <span className="text-aqua">Aqua</span>
              </span>
            </div>
            <p className="text-navy-foreground/70 font-body text-sm leading-relaxed">
              Purex Aqua has been providing premium water purification solutions since 2011.
              Trusted by 3000+ families for clean, safe, and mineral-rich drinking water.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Products", "Features", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-navy-foreground/70 hover:text-aqua transition-colors font-body text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-aqua mt-0.5 shrink-0" />
                <span className="text-navy-foreground/70 font-body text-sm">
                  123 Water Street, Industrial Area,<br />
                  New Delhi, India - 110001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-aqua shrink-0" />
                <a href="tel:+919876543210" className="text-navy-foreground/70 hover:text-aqua transition-colors font-body text-sm">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-aqua shrink-0" />
                <a href="mailto:info@purexaqua.com" className="text-navy-foreground/70 hover:text-aqua transition-colors font-body text-sm">
                  info@purexaqua.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-aqua shrink-0" />
                <span className="text-navy-foreground/70 font-body text-sm">
                  Mon - Sat: 9:00 AM - 7:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-navy-foreground/10">
        <div className="container mx-auto px-4 py-4 text-center">
          <p className="text-navy-foreground/50 font-body text-xs">
            © {new Date().getFullYear()} Purex Aqua. All rights reserved. | Pure Water, Pure Life.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
