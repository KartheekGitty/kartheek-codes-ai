import { motion } from "framer-motion";

const skillCategories = [
  { title: "Programming Languages", skills: ["C++", "Java", "PHP", "JavaScript"] },
  { title: "Frontend", skills: ["HTML", "Tailwind CSS", "ReactJS"] },
  { title: "Backend", skills: ["NodeJS", "PHP"] },
  { title: "Database", skills: ["MySQL"] },
  { title: "Tools & Platforms", skills: ["GitHub"] },
];

const SkillsSection = () => (
  <section id="skills" className="bg-background">
    <div className="section-container">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
        <h2 className="section-title">My <span className="gradient-text">Skills</span></h2>
        <p className="section-subtitle">Technologies I work with</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="glass-card p-6 hover-lift"
            >
              <h3 className="font-heading font-semibold text-foreground mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default SkillsSection;
