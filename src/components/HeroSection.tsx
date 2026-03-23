import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, FileDown, Mail } from "lucide-react";

const titles = [
  "Aspiring Full Stack Web Developer",
  "3rd Year B.Tech CSE Student",
  "Problem Solver & Tech Enthusiast",
];

const HeroSection = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = titles[titleIndex];
    if (typing) {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 50);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 2000);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
        return () => clearTimeout(t);
      } else {
        setTitleIndex((i) => (i + 1) % titles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, titleIndex]);

  return (
    <section className="hero-dark min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "linear-gradient(hsl(173 58% 45%) 1px, transparent 1px), linear-gradient(90deg, hsl(173 58% 45%) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      <div className="section-container text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary text-sm md:text-base font-medium tracking-widest uppercase mb-4">
            Welcome to my portfolio
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading font-bold text-primary-foreground mb-6 leading-tight">
            Bendamuri Sri
            <br />
            <span className="gradient-text">Surya Kartheek</span>
          </h1>

          <div className="h-8 md:h-10 flex items-center justify-center mb-6">
            <span className="text-lg md:text-xl text-primary-foreground/70 font-body">
              {displayed}
            </span>
            <span className="ml-0.5 border-r-2 h-6 animate-typing-cursor" />
          </div>

          <p className="text-primary-foreground/60 max-w-xl mx-auto text-base md:text-lg mb-10">
            Passionate about solving real-world problems using technical skills and AI-driven solutions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium btn-hover glow-primary"
            >
              View Projects <ArrowDown size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary-foreground/20 text-primary-foreground/80 font-medium hover:bg-primary-foreground/5 hover-lift transition-all"
            >
              <Mail size={16} /> Contact Me
            </a>
            <a
              href="/BENDAMURI_SRI_SURYA_KARTHEEK_CV.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary-foreground/20 text-primary-foreground/80 font-medium hover:bg-primary-foreground/5 hover-lift transition-all"
            >
              <FileDown size={16} /> Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
