import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Lovely Professional University",
    year: "2023 – 2027 (Expected)",
    score: "CGPA: 6.4",
  },
  {
    degree: "Intermediate (12th)",
    institution: "Tirumala Educational Institute",
    year: "2021 – 2023",
    score: "Score: 94.1%",
  },
  {
    degree: "10th Standard",
    institution: "Tirumala Educational Institute",
    year: "2020 – 2021",
    score: "Score: 100%",
  },
];

const EducationSection = () => (
  <section id="education" className="bg-muted/40">
    <div className="section-container">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
        <h2 className="section-title">My <span className="gradient-text">Education</span></h2>
        <p className="section-subtitle">Academic journey so far</p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-8">
            {education.map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.4 }}
                className={`md:flex md:items-center ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div className="md:w-1/2 md:px-8">
                  <div className="glass-card p-6 hover-lift">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        <GraduationCap size={20} />
                      </div>
                      <span className="text-sm text-muted-foreground font-medium">{edu.year}</span>
                    </div>
                    <h3 className="font-heading font-semibold text-lg text-foreground">{edu.degree}</h3>
                    <p className="text-muted-foreground text-sm mt-1">{edu.institution}</p>
                    <p className="text-primary font-semibold text-sm mt-2">{edu.score}</p>
                  </div>
                </div>
                <div className="hidden md:block md:w-0">
                  <div className="w-3 h-3 rounded-full bg-primary mx-auto relative z-10" />
                </div>
                <div className="md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default EducationSection;
