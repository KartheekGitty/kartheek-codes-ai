import { ArrowUp } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground/[0.03] border-t border-border">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Bendamuri Sri Surya Kartheek. All rights reserved.
      </p>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="p-2 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary btn-hover"
        aria-label="Scroll to top"
      >
        <ArrowUp size={18} />
      </button>
    </div>
  </footer>
);

export default Footer;
