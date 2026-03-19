import { motion } from "framer-motion";
import { Trophy, Code, Award } from "lucide-react";

const achievements = [
  { icon: Trophy, text: "Ranked Top 10 out of 50+ teams in a college hackathon" },
  { icon: Code, text: "Solved 150+ problems on LeetCode & HackerRank" },
  { icon: Award, text: "Participated in college coding contests" },
];

const AchievementsSection = () => (
  <section className="bg-muted/40">
    <div className="section-container">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
        <h2 className="section-title"><span className="gradient-text">Achievements</span></h2>
        <p className="section-subtitle">Milestones I'm proud of</p>

        <div className="grid sm:grid-cols-3 gap-6">
          {achievements.map((item, i) => (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="glass-card p-6 text-center hover-lift"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-accent/10 text-accent flex items-center justify-center">
                <item.icon size={26} />
              </div>
              <p className="font-medium text-foreground">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default AchievementsSection;
