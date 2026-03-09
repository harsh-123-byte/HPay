import { Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-card border-t border-border py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-7 h-7 rounded-lg gradient-primary flex items-center justify-center">
              <Zap className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-bold text-foreground">FlowPay</span>
          </div>
          <p className="text-sm text-muted-foreground">Modern payment infrastructure for the internet economy.</p>
        </div>
        {[
          { title: "Product", links: ["Features", "Pricing", "Security", "Docs"] },
          { title: "Company", links: ["About", "Blog", "Careers", "Contact"] },
          { title: "Legal", links: ["Privacy", "Terms", "Compliance"] },
        ].map((col) => (
          <div key={col.title}>
            <h4 className="font-semibold text-foreground text-sm mb-3">{col.title}</h4>
            <ul className="space-y-2">
              {col.links.map((l) => (
                <li key={l}>
                  <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{l}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border mt-10 pt-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} FlowPay. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
