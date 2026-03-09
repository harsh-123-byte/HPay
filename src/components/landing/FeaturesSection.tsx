import { Shield, Zap, BarChart3, Code2 } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Shield,
    title: "Secure Payments",
    description: "PCI-DSS compliant with end-to-end encryption, fraud detection, and 3D Secure authentication.",
  },
  {
    icon: Zap,
    title: "Fast Transfers",
    description: "Instant settlements and real-time payment processing with sub-second response times.",
  },
  {
    icon: BarChart3,
    title: "Rich Analytics",
    description: "Detailed dashboards with revenue insights, conversion tracking, and custom reports.",
  },
  {
    icon: Code2,
    title: "Developer APIs",
    description: "Clean RESTful APIs, webhooks, SDKs for every platform, and extensive documentation.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Everything you need</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A complete toolkit to accept payments, grow revenue, and scale your business globally.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                <f.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
