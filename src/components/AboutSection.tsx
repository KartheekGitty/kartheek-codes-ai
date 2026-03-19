import { motion } from "framer-motion";
import { Code2, Lightbulb, Rocket } from "lucide-react";

const highlights = [
  { icon: Code2, title: "Full Stack Developer", desc: "Building end-to-end web applications with modern technologies" },
  { icon: Lightbulb, title: "AI Enthusiast", desc: "Exploring AI-driven solutions to real-world problems" },
  { icon: Rocket, title: "Quick Learner", desc: "Open to internships, freelance, and practical industry experience" },
];

const AboutSection = () => (
  <section id="about" className="bg-background">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
        <p className="section-subtitle">Get to know me better</p>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I am an aspiring full stack web developer and a passionate 3rd-year B.Tech Computer Science and Engineering student at Lovely Professional University. I am eager to solve real-world problems using technical skills and AI-driven solutions.
            </p>
            <p>
              I am dedicated to building impactful, user-friendly applications that help prevent others from facing the same challenges again. As a fresher, I am highly motivated to learn and grow through internships, freelance opportunities, and practical industry experience.
            </p>
          </div>

          <div className="grid gap-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="glass-card p-4 flex items-start gap-4 hover-lift"
              >
                <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                  <item.icon size={22} />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
