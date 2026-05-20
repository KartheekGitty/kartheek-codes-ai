import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";

const certifications = [
  { title: "AI Essentials for Beginners", issuer: "Udemy" },
  { title: "Language Principles & Finite Automata Theory", issuer: "Infosys" },
  { title: "ChatGPT-4 Prompt Engineering: Generative AI & LLM", issuer: "Infosys" },
  { title: "Master Generative AI & Generative AI Tools", issuer: "Udemy" },
  { title: "Built Generative AI Apps & Solutions with No-Code Tools", issuer: "Udemy" },
  { title: "Bits and Bytes of Computer Networking", issuer: "Google" },
  { title: "Android App Development for Beginners", issuer: "Simplilearn" },
  { title: "Full Stack Developer Course", issuer: "Simplilearn" },
];

const CertificationsSection = () => (
  <section id="certifications" className="bg-background">
    <div className="section-container">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
        <h2 className="section-title"><span className="gradient-text">Certifications</span></h2>
        <p className="section-subtitle">Continuous learning & growth</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.3 }}
              className="glass-card p-5 flex items-start gap-3 hover-lift"
            >
              <BadgeCheck size={20} className="text-primary shrink-0 mt-0.5 icon-hover" />
              <div>
                <h3 className="font-medium text-sm text-foreground">{cert.title}</h3>
                <p className="text-xs text-muted-foreground mt-1">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default CertificationsSection;
