import { motion } from "framer-motion";
import { Briefcase, BookOpen, Search } from "lucide-react";

const items = [
  {
    icon: Search,
    title: "Open to Internships",
    desc: "Actively seeking opportunities to gain hands-on industry experience in full stack development.",
  },
  {
    icon: BookOpen,
    title: "DSA Training — LPU Skill Development",
    desc: "Completed 2-month training in Fundamentals of Data Structures & Algorithms using C++.",
  },
  {
    icon: Briefcase,
    title: "Freelance & Project-Based Learning",
    desc: "Open to freelance opportunities, certifications, and learning through real-world projects.",
  },
];

const ExperienceSection = () => (
  <section id="experience" className="bg-background">
    <div className="section-container">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
        <h2 className="section-title">Experience & <span className="gradient-text">Training</span></h2>
        <p className="section-subtitle">My professional journey</p>

        <div className="grid sm:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="glass-card p-6 text-center hover-lift"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                <item.icon size={22} />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default ExperienceSection;
