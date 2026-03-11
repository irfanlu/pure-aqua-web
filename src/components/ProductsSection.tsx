import productRo1 from "@/assets/product-ro-1.jpg";
import productRo2 from "@/assets/product-ro-2.jpg";
import productRo3 from "@/assets/product-ro-3.jpg";

const products = [
  {
    name: "Purex Aqua Classic",
    desc: "7-Stage RO purification with 10L storage. Ideal for home use.",
    price: "₹8,999",
    image: productRo1,
  },
  {
    name: "Purex Aqua Smart",
    desc: "Wall-mounted RO+UV with smart LED indicator and auto-flush.",
    price: "₹12,499",
    image: productRo2,
  },
  {
    name: "Purex Aqua Pro",
    desc: "RO+UV+UF with mineral enhancer and digital TDS display.",
    price: "₹15,999",
    image: productRo3,
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="font-heading font-semibold text-sm text-primary uppercase tracking-widest">Our Products</span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mt-2">
            Premium <span className="text-gradient-water">RO Water Purifiers</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.name}
              className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="h-64 overflow-hidden bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading font-bold text-xl text-foreground mb-2">{product.name}</h3>
                <p className="text-muted-foreground font-body text-sm mb-4">{product.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="font-heading font-extrabold text-2xl text-primary">{product.price}</span>
                  <a
                    href="#contact"
                    className="gradient-water text-primary-foreground px-5 py-2 rounded-full font-heading font-semibold text-sm hover:opacity-90 transition-opacity"
                  >
                    Enquire
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
